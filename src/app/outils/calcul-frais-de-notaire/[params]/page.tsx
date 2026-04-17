import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, faqJsonLd } from '@/lib/jsonld';
import {
  NOTAIRE_MONTANTS,
  NOTAIRE_TYPES,
  parseNotaireParams,
  buildNotaireSlug,
  breadcrumbJsonLd,
} from '@/lib/seo-boncalcul';
import { calculerNotaire, fmtEur, fmtNum } from '@/lib/calculateurs-server';

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { params: string }[] = [];
  for (const montant of NOTAIRE_MONTANTS) {
    for (const { type } of NOTAIRE_TYPES) {
      params.push({ params: buildNotaireSlug(montant, type) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ params: string }>;
}): Promise<Metadata> {
  const { params: slug } = await params;
  const parsed = parseNotaireParams(slug);
  if (!parsed) return {};

  const { montant, type } = parsed;
  const result = calculerNotaire(montant, type);

  return {
    title: `Frais de notaire ${fmtNum(montant)} € (bien ${type}) — ${fmtEur(result.totalFrais)} estimés`,
    description: `Calculez les frais de notaire pour un bien ${type} à ${fmtNum(montant)} €. Estimation : ${fmtEur(result.totalFrais)} (${result.pourcentage.toFixed(2).replace('.', ',')} % du prix). Droits de mutation, émoluments et débours détaillés.`,
    alternates: {
      canonical: `https://www.boncalcul.fr/outils/calcul-frais-de-notaire/${slug}`,
    },
    openGraph: {
      title: `Frais de notaire pour ${fmtNum(montant)} € (${type}) = ${fmtEur(result.totalFrais)}`,
      description: `Soit ${result.pourcentage.toFixed(2).replace('.', ',')} % du prix d'achat. Calcul détaillé gratuit.`,
      url: `https://www.boncalcul.fr/outils/calcul-frais-de-notaire/${slug}`,
    },
  };
}

export default async function NotaireParamsPage({
  params,
}: {
  params: Promise<{ params: string }>;
}) {
  const { params: slug } = await params;
  const parsed = parseNotaireParams(slug);
  if (!parsed) notFound();

  const { montant, type } = parsed;
  const result = calculerNotaire(montant, type);
  const autreType = type === 'ancien' ? 'neuf' : 'ancien';
  const autreResult = calculerNotaire(montant, autreType);
  const autresMontants = NOTAIRE_MONTANTS.filter((m) => m !== montant).slice(0, 6);

  const faqQuestions = [
    {
      question: `Combien coûtent les frais de notaire pour un bien ${type} à ${fmtNum(montant)} € ?`,
      answer: `Pour un bien ${type} d'une valeur de ${fmtNum(montant)} €, les frais de notaire s'élèvent à environ ${fmtEur(result.totalFrais)}, soit ${result.pourcentage.toFixed(2).replace('.', ',')} % du prix d'achat. Cela comprend les droits de mutation (${fmtEur(result.droits)}), les émoluments du notaire (${fmtEur(result.emoluments)}) et les frais divers (${fmtEur(result.fraisDivers)}).`,
    },
    {
      question: `Quelle est la différence entre les frais de notaire pour un bien ancien et un bien neuf ?`,
      answer: `Pour un bien ancien (plus de 5 ans), les frais de notaire représentent 7 à 8 % du prix, car ils incluent les droits de mutation à titre onéreux (environ 5,8 % avec la taxe départementale, communale et la taxe État). Pour un bien neuf (VEFA ou moins de 5 ans), les frais sont réduits à 2 à 3 %, car la taxe de publicité foncière ne représente que 0,715 % du prix.`,
    },
    {
      question: `Peut-on négocier les frais de notaire ?`,
      answer: `Les droits de mutation sont fixés par l'État et ne sont pas négociables. En revanche, depuis 2021, les notaires peuvent accorder une remise jusqu'à 20 % sur leurs émoluments pour les transactions supérieures à 150 000 €. Pour un achat de ${fmtNum(montant)} €, les émoluments du notaire s'élèvent à ${fmtEur(result.emoluments)}.`,
    },
    {
      question: `Quel est le prix total d'acquisition pour ${fmtNum(montant)} € avec les frais de notaire ?`,
      answer: `Pour un bien ${type} à ${fmtNum(montant)} €, le prix total d'acquisition (bien + frais de notaire) est de ${fmtEur(result.prixTotal)}. Pensez à prévoir cette somme en liquidités car elle s'ajoute au montant financé par votre prêt immobilier.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', url: 'https://www.boncalcul.fr' },
          { name: 'Calcul frais de notaire', url: 'https://www.boncalcul.fr/outils/calcul-frais-de-notaire' },
          {
            name: `${fmtNum(montant)} € (${type})`,
            url: `https://www.boncalcul.fr/outils/calcul-frais-de-notaire/${slug}`,
          },
        ])}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            {' › '}
            <Link href="/outils/calcul-frais-de-notaire" className="hover:text-blue-600">Frais de notaire</Link>
            {' › '}
            <span className="text-gray-600">{fmtNum(montant)} € (bien {type})</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frais de notaire pour {fmtNum(montant)} € —{' '}
            <span className="text-blue-600">{fmtEur(result.totalFrais)}</span>
          </h1>
          <p className="text-lg text-gray-600">
            Bien {type} · {result.pourcentage.toFixed(2).replace('.', ',')} % du prix · Prix total : {fmtEur(result.prixTotal)}
          </p>
        </div>
      </section>

      {/* Résultat */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Détail des frais — {fmtNum(montant)} € (bien {type})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-5 text-center border-2 border-blue-200">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">Frais de notaire</p>
              <p className="text-2xl font-bold text-blue-700">{fmtEur(result.totalFrais)}</p>
              <p className="text-xs text-blue-400 mt-1">{result.pourcentage.toFixed(2).replace('.', ',')} % du prix</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Prix du bien</p>
              <p className="text-2xl font-bold text-gray-800">{fmtEur(montant)}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Prix total</p>
              <p className="text-2xl font-bold text-green-700">{fmtEur(result.prixTotal)}</p>
              <p className="text-xs text-green-500 mt-1">bien + frais</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3 text-sm mb-6">
            <h3 className="font-semibold text-gray-700 text-base mb-3">Ventilation des frais</h3>
            <div className="flex justify-between">
              <span className="text-gray-600">Droits de mutation {type === 'neuf' ? '(taxe publicité foncière 0,715 %)' : '(dept. + commune + État)'}</span>
              <span className="font-semibold text-gray-800">{fmtEur(result.droits)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Émoluments du notaire</span>
              <span className="font-semibold text-gray-800">{fmtEur(result.emoluments)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frais divers et débours (forfait)</span>
              <span className="font-semibold text-gray-800">{fmtEur(result.fraisDivers)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between font-bold text-base">
              <span className="text-gray-800">Total frais</span>
              <span className="text-blue-700">{fmtEur(result.totalFrais)}</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/outils/calcul-frais-de-notaire"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Calculer pour un autre montant →
            </Link>
          </div>
        </div>

        {/* Comparer ancien vs neuf */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Frais pour {fmtNum(montant)} € en bien {autreType}
          </h2>
          <Link
            href={`/outils/calcul-frais-de-notaire/${buildNotaireSlug(montant, autreType)}`}
            className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-sm transition-all group"
          >
            <div>
              <p className="font-semibold text-gray-800 group-hover:text-blue-600">
                Bien {autreType} — {autreResult.pourcentage.toFixed(2).replace('.', ',')} % de frais
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Frais estimés : {fmtEur(autreResult.totalFrais)} · Prix total : {fmtEur(autreResult.prixTotal)}
              </p>
            </div>
            <span className="text-blue-500 text-xl">→</span>
          </Link>
        </div>

        {/* Autres montants */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Frais pour d&apos;autres prix (bien {type})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {autresMontants.map((m) => {
              const r = calculerNotaire(m, type);
              return (
                <Link
                  key={m}
                  href={`/outils/calcul-frais-de-notaire/${buildNotaireSlug(m, type)}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
                >
                  <p className="text-xs text-gray-500 mb-1">{fmtNum(m)} €</p>
                  <p className="font-bold text-gray-800 group-hover:text-blue-600">{fmtEur(r.totalFrais)}</p>
                  <p className="text-xs text-gray-400">{r.pourcentage.toFixed(2).replace('.', ',')} %</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqQuestions.map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">&#9660;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
