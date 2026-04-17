import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, faqJsonLd } from '@/lib/jsonld';
import {
  TVA_MONTANTS,
  TVA_TAUX,
  parseTVAParams,
  buildTVASlug,
  breadcrumbJsonLd,
} from '@/lib/seo-boncalcul';
import { calculerTVA, fmtEur, fmtNum } from '@/lib/calculateurs-server';

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { params: string }[] = [];
  for (const montant of TVA_MONTANTS) {
    for (const { slug } of TVA_TAUX) {
      params.push({ params: `${montant}-euros-${slug}` });
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
  const parsed = parseTVAParams(slug);
  if (!parsed) return {};

  const { montant, taux } = parsed;
  const { ttc, tva } = calculerTVA(montant, taux);
  const tauxEntry = TVA_TAUX.find((t) => t.taux === taux)!;

  return {
    title: `${fmtNum(montant)} € HT en TTC — TVA ${tauxEntry.label} : ${fmtEur(ttc)}`,
    description: `Convertissez ${fmtNum(montant)} € HT en TTC avec la TVA à ${tauxEntry.label}. Résultat : ${fmtEur(ttc)} TTC, soit ${fmtEur(tva)} de TVA. Calcul gratuit sur BonCalcul.fr.`,
    alternates: {
      canonical: `https://www.boncalcul.fr/outils/calcul-tva/${slug}`,
    },
    openGraph: {
      title: `TVA ${tauxEntry.label} sur ${fmtNum(montant)} € HT = ${fmtEur(ttc)} TTC`,
      description: `Montant TVA : ${fmtEur(tva)}. Calcul instantané et gratuit.`,
      url: `https://www.boncalcul.fr/outils/calcul-tva/${slug}`,
    },
  };
}

export default async function TVAParamsPage({
  params,
}: {
  params: Promise<{ params: string }>;
}) {
  const { params: slug } = await params;
  const parsed = parseTVAParams(slug);
  if (!parsed) notFound();

  const { montant, taux } = parsed;
  const result = calculerTVA(montant, taux);
  const tauxEntry = TVA_TAUX.find((t) => t.taux === taux)!;

  const faqQuestions = [
    {
      question: `Quel est le montant TTC pour ${fmtNum(montant)} € HT avec une TVA à ${tauxEntry.label} ?`,
      answer: `Pour ${fmtNum(montant)} € HT avec un taux de TVA à ${tauxEntry.label}, le montant TTC est de ${fmtEur(result.ttc)}. Le montant de TVA à reverser est de ${fmtEur(result.tva)}.`,
    },
    {
      question: `Comment calculer la TVA à ${tauxEntry.label} sur ${fmtNum(montant)} € ?`,
      answer: `Pour calculer la TVA à ${tauxEntry.label} sur ${fmtNum(montant)} €, multipliez par ${taux / 100} : ${fmtNum(montant)} × ${taux / 100} = ${fmtEur(result.tva)} de TVA. Le TTC est donc ${fmtEur(result.ttc)}.`,
    },
    {
      question: `Comment retrouver le HT à partir de ${fmtEur(result.ttc)} TTC avec TVA ${tauxEntry.label} ?`,
      answer: `Pour passer de ${fmtEur(result.ttc)} TTC au HT avec TVA à ${tauxEntry.label}, divisez par ${1 + taux / 100} : ${fmtEur(result.ttc)} ÷ ${1 + taux / 100} = ${fmtEur(result.ht)} HT.`,
    },
  ];

  const autresTaux = TVA_TAUX.filter((t) => t.taux !== taux);
  const autresMontants = TVA_MONTANTS.filter((m) => m !== montant).slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', url: 'https://www.boncalcul.fr' },
          { name: 'Calcul TVA', url: 'https://www.boncalcul.fr/outils/calcul-tva' },
          {
            name: `TVA ${tauxEntry.label} sur ${fmtNum(montant)} €`,
            url: `https://www.boncalcul.fr/outils/calcul-tva/${slug}`,
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
            <Link href="/outils/calcul-tva" className="hover:text-blue-600">Calcul TVA</Link>
            {' › '}
            <span className="text-gray-600">TVA {tauxEntry.label} sur {fmtNum(montant)} €</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {fmtNum(montant)} € HT = <span className="text-blue-600">{fmtEur(result.ttc)} TTC</span>
          </h1>
          <p className="text-lg text-gray-600">
            TVA à {tauxEntry.label} — Montant TVA : {fmtEur(result.tva)}
          </p>
        </div>
      </section>

      {/* Résultat principal */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Résultat du calcul TVA {tauxEntry.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Montant HT</p>
              <p className="text-2xl font-bold text-gray-800">{fmtEur(result.ht)}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">TVA ({tauxEntry.label})</p>
              <p className="text-2xl font-bold text-orange-600">{fmtEur(result.tva)}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center border-2 border-blue-200">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">Montant TTC</p>
              <p className="text-2xl font-bold text-blue-700">{fmtEur(result.ttc)}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Formule HT → TTC :</span>
              <span className="font-mono font-medium">{fmtNum(montant)} × {1 + taux / 100} = {fmtEur(result.ttc)}</span>
            </div>
            <div className="flex justify-between">
              <span>Formule TTC → HT :</span>
              <span className="font-mono font-medium">{fmtEur(result.ttc)} ÷ {1 + taux / 100} = {fmtEur(result.ht)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taux de TVA appliqué :</span>
              <span className="font-semibold">{tauxEntry.label}</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/outils/calcul-tva"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Calculer un autre montant →
            </Link>
          </div>
        </div>

        {/* Autres taux */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            {fmtNum(montant)} € HT avec d&apos;autres taux de TVA
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {autresTaux.map((t) => {
              const r = calculerTVA(montant, t.taux);
              return (
                <Link
                  key={t.slug}
                  href={`/outils/calcul-tva/${buildTVASlug(montant, t.taux)}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
                >
                  <p className="text-xs text-gray-500 mb-1">TVA {t.label}</p>
                  <p className="font-bold text-gray-800 group-hover:text-blue-600">{fmtEur(r.ttc)} TTC</p>
                  <p className="text-xs text-gray-400">{fmtEur(r.tva)} de TVA</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Autres montants */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            TVA {tauxEntry.label} sur d&apos;autres montants
          </h2>
          <div className="flex flex-wrap gap-2">
            {autresMontants.map((m) => {
              const r = calculerTVA(m, taux);
              return (
                <Link
                  key={m}
                  href={`/outils/calcul-tva/${buildTVASlug(m, taux)}`}
                  className="px-3 py-2 bg-white rounded-lg border border-gray-200 text-sm hover:border-blue-400 hover:text-blue-600 transition-all"
                >
                  {fmtNum(m)} € → {fmtEur(r.ttc)}
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
