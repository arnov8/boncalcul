import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, faqJsonLd } from '@/lib/jsonld';
import {
  SALAIRE_MONTANTS,
  SALAIRE_STATUTS,
  SMIC_BRUT_MENSUEL,
  parseSalaireParams,
  buildSalaireSlug,
  breadcrumbJsonLd,
} from '@/lib/seo-boncalcul';
import { calculerSalaire, fmtEurDec, fmtNum } from '@/lib/calculateurs-server';

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { params: string }[] = [];
  for (const montant of SALAIRE_MONTANTS) {
    for (const { slug } of SALAIRE_STATUTS) {
      params.push({ params: buildSalaireSlug(montant, slug as 'non-cadre' | 'cadre') });
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
  const parsed = parseSalaireParams(slug);
  if (!parsed) return {};

  const { montant, statut } = parsed;
  const result = calculerSalaire(montant, statut);
  const statutEntry = SALAIRE_STATUTS.find((s) => s.statut === statut)!;

  return {
    title: `${fmtNum(montant)} € brut = ${fmtEurDec(result.netMensuel)} € net — Salaire ${statutEntry.label} 2026`,
    description: `Quel est le salaire net pour ${fmtNum(montant)} € brut mensuel (${statutEntry.label}) ? Résultat : ${fmtEurDec(result.netMensuel)} € net/mois, soit ${fmtEurDec(result.netAnnuel)} € net/an. Calcul 2026.`,
    alternates: {
      canonical: `https://www.boncalcul.fr/outils/calcul-salaire-brut-net/${slug}`,
    },
    openGraph: {
      title: `${fmtNum(montant)} € brut → ${fmtEurDec(result.netMensuel)} € net (${statutEntry.label})`,
      description: `Salaire net mensuel : ${fmtEurDec(result.netMensuel)} €. Salaire net annuel : ${fmtEurDec(result.netAnnuel)} €.`,
      url: `https://www.boncalcul.fr/outils/calcul-salaire-brut-net/${slug}`,
    },
  };
}

export default async function SalaireParamsPage({
  params,
}: {
  params: Promise<{ params: string }>;
}) {
  const { params: slug } = await params;
  const parsed = parseSalaireParams(slug);
  if (!parsed) notFound();

  const { montant, statut } = parsed;
  const result = calculerSalaire(montant, statut);
  const statutEntry = SALAIRE_STATUTS.find((s) => s.statut === statut)!;
  const autreStatut = SALAIRE_STATUTS.find((s) => s.statut !== statut)!;
  const autresMontants = SALAIRE_MONTANTS.filter((m) => m !== montant).slice(0, 8);

  const faqQuestions = [
    {
      question: `Quel est le salaire net pour ${fmtNum(montant)} € brut mensuel ?`,
      answer: `Pour un ${statutEntry.label}, un salaire brut de ${fmtNum(montant)} € correspond à ${fmtEurDec(result.netMensuel)} € net par mois, soit ${fmtEurDec(result.netAnnuel)} € net par an. Les cotisations salariales représentent environ ${(result.charges * 100).toFixed(0)} % du brut.`,
    },
    {
      question: `Quelle est la différence entre salaire brut et salaire net ?`,
      answer: `Le salaire brut est le montant avant déduction des cotisations salariales. Le salaire net est ce que vous percevez réellement. Pour un ${statutEntry.label}, les cotisations représentent environ ${(result.charges * 100).toFixed(0)} % du brut (CSG-CRDS, retraite, mutuelle, etc.).`,
    },
    {
      question: `Comment convertir ${fmtNum(montant)} € brut en net pour un cadre vs non-cadre ?`,
      answer: `Pour ${fmtNum(montant)} € brut mensuel : non-cadre → ${fmtEurDec(calculerSalaire(montant, 'non-cadre').netMensuel)} € net (cotisations ~22%), cadre → ${fmtEurDec(calculerSalaire(montant, 'cadre').netMensuel)} € net (cotisations ~25%). La différence s'explique par des cotisations retraite complémentaire plus élevées pour les cadres.`,
    },
    {
      question: `Quel brut faut-il pour obtenir ${fmtEurDec(result.netMensuel)} € net ?`,
      answer: `Pour obtenir ${fmtEurDec(result.netMensuel)} € net mensuel en tant que ${statutEntry.label}, il faut un salaire brut de ${fmtEurDec(result.netMensuel / (1 - result.charges))} €.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', url: 'https://www.boncalcul.fr' },
          { name: 'Calcul salaire brut net', url: 'https://www.boncalcul.fr/outils/calcul-salaire-brut-net' },
          {
            name: `${fmtNum(montant)} € brut (${statutEntry.label})`,
            url: `https://www.boncalcul.fr/outils/calcul-salaire-brut-net/${slug}`,
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
            <Link href="/outils/calcul-salaire-brut-net" className="hover:text-blue-600">Salaire brut/net</Link>
            {' › '}
            <span className="text-gray-600">{fmtNum(montant)} € brut ({statutEntry.label})</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {fmtNum(montant)} € brut = <span className="text-blue-600">{fmtEurDec(result.netMensuel)} € net</span>
          </h1>
          <p className="text-lg text-gray-600">
            {statutEntry.label === 'cadre' ? 'Statut cadre' : 'Statut non-cadre'} — Cotisations : ~{(result.charges * 100).toFixed(0)} % — 2026
          </p>
        </div>
      </section>

      {/* Résultat */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Récapitulatif — {fmtNum(montant)} € brut ({statutEntry.label})
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Salaire net / mois</p>
              <p className="text-2xl font-bold text-blue-700">{fmtEurDec(result.netMensuel)} €</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Salaire net / an</p>
              <p className="text-2xl font-bold text-blue-700">{fmtEurDec(result.netAnnuel)} €</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Salaire brut mensuel</span>
              <span className="font-semibold text-gray-800">{fmtEurDec(result.brutMensuel)} €</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Cotisations salariales (~{(result.charges * 100).toFixed(0)} %)</span>
              <span className="font-semibold">− {fmtEurDec(result.totalChargesMensuel)} €</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between font-semibold text-green-700">
              <span>Salaire net mensuel</span>
              <span>{fmtEurDec(result.netMensuel)} €</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Salaire brut annuel</span>
              <span>{fmtEurDec(result.brutAnnuel)} €</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Salaire net annuel</span>
              <span>{fmtEurDec(result.netAnnuel)} €</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/outils/calcul-salaire-brut-net"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Calculer un autre salaire →
            </Link>
          </div>
        </div>

        {/* Comparaison SMIC */}
        <div className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h2 className="text-base font-bold text-gray-800 mb-2">
            {fmtNum(montant)} € brut, ça représente combien de SMIC ?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le SMIC brut mensuel 2026 est de {fmtEurDec(SMIC_BRUT_MENSUEL)} € (base 35h/semaine). Un salaire brut de {fmtNum(montant)} € représente donc{' '}
            <span className="font-semibold text-blue-700">{(montant / SMIC_BRUT_MENSUEL).toFixed(2).replace('.', ',')} fois le SMIC</span>
            {montant < SMIC_BRUT_MENSUEL
              ? ", soit un montant inférieur au SMIC (temps partiel ou erreur de saisie probable)."
              : montant / SMIC_BRUT_MENSUEL < 1.5
              ? ", un niveau proche du salaire minimum."
              : "."}
          </p>
        </div>

        {/* Même montant, autre statut */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            {fmtNum(montant)} € brut en {autreStatut.label}
          </h2>
          <Link
            href={`/outils/calcul-salaire-brut-net/${buildSalaireSlug(montant, autreStatut.statut)}`}
            className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-sm transition-all group"
          >
            <div>
              <p className="font-semibold text-gray-800 group-hover:text-blue-600">
                Statut {autreStatut.label} — cotisations ~{(autreStatut.charges * 100).toFixed(0)} %
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Net mensuel : {fmtEurDec(calculerSalaire(montant, autreStatut.statut).netMensuel)} €
              </p>
            </div>
            <span className="text-blue-500 text-xl">→</span>
          </Link>
        </div>

        {/* Autres montants */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Autres salaires ({statutEntry.label})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {autresMontants.map((m) => {
              const r = calculerSalaire(m, statut);
              return (
                <Link
                  key={m}
                  href={`/outils/calcul-salaire-brut-net/${buildSalaireSlug(m, statut)}`}
                  className="bg-white rounded-lg border border-gray-200 p-3 text-center hover:border-blue-400 hover:text-blue-600 transition-all group"
                >
                  <p className="text-xs text-gray-500">{fmtNum(m)} € brut</p>
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-blue-600">
                    {fmtEurDec(r.netMensuel)} €
                  </p>
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
