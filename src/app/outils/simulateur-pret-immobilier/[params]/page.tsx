import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, faqJsonLd } from '@/lib/jsonld';
import {
  PRET_MONTANTS,
  PRET_DUREES,
  PRET_TAUX_DEFAULT,
  PRET_TAUX_COMPARAISON,
  parsePretParams,
  buildPretSlug,
  breadcrumbJsonLd,
} from '@/lib/seo-boncalcul';
import { calculerPret, fmtEur, fmtEurDec, fmtNum } from '@/lib/calculateurs-server';

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { params: string }[] = [];
  for (const montant of PRET_MONTANTS) {
    for (const duree of PRET_DUREES) {
      params.push({ params: buildPretSlug(montant, duree) });
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
  const parsed = parsePretParams(slug);
  if (!parsed) return {};

  const { montant, duree } = parsed;
  const result = calculerPret(montant, duree, PRET_TAUX_DEFAULT);

  return {
    title: `Prêt immobilier ${fmtNum(montant)} € sur ${duree} ans — Mensualité ${fmtEur(result.mensualiteTotale)}`,
    description: `Simulez un prêt immobilier de ${fmtNum(montant)} € sur ${duree} ans à ${PRET_TAUX_DEFAULT} %. Mensualité : ${fmtEurDec(result.mensualiteTotale)} €/mois (assurance incluse). Coût total du crédit : ${fmtEur(result.coutTotalCredit)}.`,
    alternates: {
      canonical: `https://www.boncalcul.fr/outils/simulateur-pret-immobilier/${slug}`,
    },
    openGraph: {
      title: `Prêt ${fmtNum(montant)} € / ${duree} ans → ${fmtEurDec(result.mensualiteTotale)} €/mois`,
      description: `Coût total du crédit : ${fmtEur(result.coutTotalCredit)}. Taux : ${PRET_TAUX_DEFAULT} %.`,
      url: `https://www.boncalcul.fr/outils/simulateur-pret-immobilier/${slug}`,
    },
  };
}

export default async function PretParamsPage({
  params,
}: {
  params: Promise<{ params: string }>;
}) {
  const { params: slug } = await params;
  const parsed = parsePretParams(slug);
  if (!parsed) notFound();

  const { montant, duree } = parsed;
  const result = calculerPret(montant, duree, PRET_TAUX_DEFAULT);

  const faqQuestions = [
    {
      question: `Quelle est la mensualité pour un prêt de ${fmtNum(montant)} € sur ${duree} ans ?`,
      answer: `Pour un prêt immobilier de ${fmtNum(montant)} € sur ${duree} ans à ${PRET_TAUX_DEFAULT} %, la mensualité hors assurance est de ${fmtEurDec(result.mensualite)} €. Avec l'assurance emprunteur (${0.34} %), la mensualité totale est de ${fmtEurDec(result.mensualiteTotale)} €.`,
    },
    {
      question: `Quel est le coût total d'un prêt de ${fmtNum(montant)} € sur ${duree} ans ?`,
      answer: `Pour un prêt de ${fmtNum(montant)} € sur ${duree} ans à ${PRET_TAUX_DEFAULT} %, le coût total des intérêts est de ${fmtEur(result.coutTotalCredit)}. En ajoutant le coût de l'assurance (${fmtEur(result.coutTotalAssurance)}), le montant total remboursé est de ${fmtEur(result.montantTotalRembourse)}.`,
    },
    {
      question: `Comment est calculée la mensualité d'un prêt immobilier ?`,
      answer: `La formule est M = C × (t/12) / (1 − (1 + t/12)^(−n×12)), où C est le capital emprunté, t le taux annuel et n la durée en années. Pour ${fmtNum(montant)} € à ${PRET_TAUX_DEFAULT} % sur ${duree} ans, cela donne ${fmtEurDec(result.mensualite)} €/mois hors assurance.`,
    },
    {
      question: `Faut-il inclure l'assurance dans le calcul des mensualités ?`,
      answer: `Oui, l'assurance emprunteur est obligatoire pour obtenir un prêt immobilier en France. Son taux varie selon l'âge et l'état de santé, mais se situe généralement entre 0,20 % et 0,50 % du capital emprunté par an. Ici, nous appliquons un taux moyen de 0,34 %, soit ${fmtEurDec(result.mensualiteAssurance)} € par mois pour un capital de ${fmtNum(montant)} €.`,
    },
  ];

  const autresDurees = PRET_DUREES.filter((d) => d !== duree);
  const autresMontants = PRET_MONTANTS.filter((m) => m !== montant).slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', url: 'https://www.boncalcul.fr' },
          { name: 'Simulateur prêt immobilier', url: 'https://www.boncalcul.fr/outils/simulateur-pret-immobilier' },
          {
            name: `${fmtNum(montant)} € sur ${duree} ans`,
            url: `https://www.boncalcul.fr/outils/simulateur-pret-immobilier/${slug}`,
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
            <Link href="/outils/simulateur-pret-immobilier" className="hover:text-blue-600">Simulateur prêt immobilier</Link>
            {' › '}
            <span className="text-gray-600">{fmtNum(montant)} € sur {duree} ans</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Prêt de {fmtNum(montant)} € sur {duree} ans —{' '}
            <span className="text-blue-600">{fmtEurDec(result.mensualiteTotale)} €/mois</span>
          </h1>
          <p className="text-lg text-gray-600">
            Taux {PRET_TAUX_DEFAULT} % · Assurance 0,34 % · Coût total : {fmtEur(result.coutTotalCredit)}
          </p>
        </div>
      </section>

      {/* Résultat */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Résultat — Prêt {fmtNum(montant)} € · {duree} ans · {PRET_TAUX_DEFAULT} %
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-5 text-center border-2 border-blue-200 sm:col-span-1">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">Mensualité totale</p>
              <p className="text-xl font-bold text-blue-700">{fmtEurDec(result.mensualiteTotale)} €</p>
              <p className="text-xs text-blue-400 mt-1">assurance incluse</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Coût des intérêts</p>
              <p className="text-xl font-bold text-gray-800">{fmtEur(result.coutTotalCredit)}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Total remboursé</p>
              <p className="text-xl font-bold text-gray-800">{fmtEur(result.montantTotalRembourse)}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Mensualité hors assurance</span>
              <span className="font-semibold text-gray-800">{fmtEurDec(result.mensualite)} €</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Assurance emprunteur (0,34 %/an)</span>
              <span className="font-semibold text-gray-800">{fmtEurDec(result.mensualiteAssurance)} €</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between font-semibold">
              <span className="text-gray-800">Mensualité totale</span>
              <span className="text-blue-700">{fmtEurDec(result.mensualiteTotale)} €</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Coût total assurance</span>
              <span>{fmtEur(result.coutTotalAssurance)}</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Durée · Taux</span>
              <span>{result.nbMois} mois · {PRET_TAUX_DEFAULT} %</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            Simulation indicative basée sur un taux fixe de {PRET_TAUX_DEFAULT} % et une assurance à 0,34 %. Votre taux réel dépend de votre profil et de la banque.
          </p>

          <div className="text-center">
            <Link
              href="/outils/simulateur-pret-immobilier"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Simuler avec d&apos;autres paramètres →
            </Link>
          </div>
        </div>

        {/* Sensibilité au taux */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Mensualité de {fmtNum(montant)} € sur {duree} ans selon le taux
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            Le taux réellement proposé dépend de votre profil (apport, revenus, durée) et de la banque. Voici la mensualité pour {fmtNum(montant)} € sur {duree} ans selon plusieurs taux constatés sur le marché.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {PRET_TAUX_COMPARAISON.map((t) => {
              const r = calculerPret(montant, duree, t);
              return (
                <div
                  key={t}
                  className={`flex items-center justify-between px-5 py-3 ${t === PRET_TAUX_DEFAULT ? 'bg-blue-50' : ''}`}
                >
                  <span className="text-sm text-gray-600">
                    Taux {fmtNum(t).replace(/\s/g, '')} % {t === PRET_TAUX_DEFAULT && <span className="text-blue-500 text-xs">(taux retenu ci-dessus)</span>}
                  </span>
                  <span className="font-semibold text-gray-800">{fmtEurDec(r.mensualiteTotale)} €/mois</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Autres durées */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Prêt de {fmtNum(montant)} € sur d&apos;autres durées
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {autresDurees.map((d) => {
              const r = calculerPret(montant, d, PRET_TAUX_DEFAULT);
              return (
                <Link
                  key={d}
                  href={`/outils/simulateur-pret-immobilier/${buildPretSlug(montant, d)}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-sm transition-all group text-center"
                >
                  <p className="text-xs text-gray-500 mb-1">Sur {d} ans</p>
                  <p className="font-bold text-gray-800 group-hover:text-blue-600">{fmtEurDec(r.mensualiteTotale)} €/mois</p>
                  <p className="text-xs text-gray-400">Intérêts : {fmtEur(r.coutTotalCredit)}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Autres montants */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Autres montants sur {duree} ans
          </h2>
          <div className="flex flex-wrap gap-2">
            {autresMontants.map((m) => {
              const r = calculerPret(m, duree, PRET_TAUX_DEFAULT);
              return (
                <Link
                  key={m}
                  href={`/outils/simulateur-pret-immobilier/${buildPretSlug(m, duree)}`}
                  className="px-3 py-2 bg-white rounded-lg border border-gray-200 text-sm hover:border-blue-400 hover:text-blue-600 transition-all"
                >
                  {fmtNum(m)} € → {fmtEurDec(r.mensualiteTotale)} €/mois
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
