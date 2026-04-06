import type { Metadata } from "next";
import CoutSalarie from "./CoutSalarie";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";
import InfographieCoutSalarie from "@/components/infographics/InfographieCoutSalarie";

export const metadata: Metadata = {
  title: "Cout d'un salarie pour l'employeur — Simulateur charges patronales 2026",
  description:
    "Calculez le cout total d'un salarie pour l'employeur en France : charges patronales, super brut, detail de toutes les cotisations. Cadre et non-cadre. Gratuit.",
  keywords: [
    "cout salarie employeur",
    "charges patronales",
    "super brut",
    "cout total employeur",
    "cotisations patronales",
    "simulateur charges employeur",
    "cout embauche salarie",
    "charges sociales employeur 2026",
    "calcul super brut",
  ],
  openGraph: {
    title: "Cout d'un salarie pour l'employeur — Simulateur charges patronales | BonCalcul.fr",
    description:
      "Calculez le cout total d'un salarie pour l'employeur : charges patronales, super brut, detail des cotisations. Cadre et non-cadre.",
    url: "https://www.boncalcul.fr/outils/cout-salarie-employeur",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=cout-salarie-employeur`,
        width: 1200,
        height: 630,
        alt: "Cout Salarie Employeur — BonCalcul.fr",
      },
    ],
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/cout-salarie-employeur",
  },
};

const faqQuestions = [
  {
    question: "Quel est le cout reel d'un salarie pour l'employeur ?",
    answer:
      "Le cout reel d'un salarie pour l'employeur correspond au salaire brut auquel s'ajoutent les charges patronales. En France, ces charges representent en moyenne 25 a 42 % du salaire brut selon le statut (cadre ou non-cadre) et le niveau de remuneration. Le cout total, appele « super brut », inclut securite sociale, retraite, chomage, prevoyance, mutuelle, formation et taxes.",
  },
  {
    question: "Quelle est la difference entre les charges d'un cadre et d'un non-cadre ?",
    answer:
      "Les cadres ont des cotisations de retraite complementaire plus elevees (environ 12,95 % contre 7,87 % pour les non-cadres en tranche 1) et une cotisation prevoyance cadre obligatoire de 1,50 %. Au total, un cadre coute environ 5 a 7 % de plus en charges patronales qu'un non-cadre au meme salaire brut.",
  },
  {
    question: "Qu'est-ce que le « super brut » ?",
    answer:
      "Le « super brut » designe le cout total d'un salarie pour l'employeur, c'est-a-dire le salaire brut additionne de l'ensemble des charges patronales. C'est le montant reel que l'entreprise doit debourser chaque mois pour employer un salarie. Il est en general 1,25 a 1,45 fois le salaire brut.",
  },
  {
    question: "Quelles sont les principales charges patronales en France ?",
    answer:
      "Les principales charges patronales incluent : la securite sociale (maladie 7 %, vieillesse 10,57 %), les allocations familiales (3,45 ou 5,25 %), le chomage (4,05 %), la retraite complementaire (7,87 a 12,95 %), la CEG (2,15 %), le FNAL (0,50 %), les accidents du travail (~1,50 %), la CSA (0,30 %), la formation (1 %), la taxe d'apprentissage (0,68 %) et la mutuelle (~50 euros/mois).",
  },
  {
    question: "Comment reduire le cout d'un salarie pour l'employeur ?",
    answer:
      "Plusieurs dispositifs permettent de reduire le cout employeur : la reduction generale de cotisations (ex-reduction Fillon) pour les salaires inferieurs a 1,6 SMIC, les exonerations liees aux zones franches (ZFU, ZRR), le credit d'impot pour certaines embauches, les aides a l'apprentissage, et les allègements specifiques pour les jeunes entreprises innovantes (JEI).",
  },
];

export default function PageCoutSalarieEmployeur() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Cout d'un salarie pour l'employeur — Simulateur charges patronales 2026",
          description:
            "Calculez le cout total d'un salarie pour l'employeur en France : charges patronales, super brut, detail des cotisations.",
          url: "https://www.boncalcul.fr/outils/cout-salarie-employeur",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Cout d&apos;un salarie pour l&apos;employeur
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez le cout total employeur (super brut), les charges
            patronales et le detail de chaque cotisation. Cadre ou non-cadre.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CoutSalarie />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="cout-salarie-employeur" />

        <InfographieCoutSalarie />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le cout d&apos;un salarie
          </h2>
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
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur le cout d&apos;un salarie pour l&apos;employeur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Charges patronales : comment ca marche ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>charges patronales</strong> sont les cotisations sociales que l&apos;employeur verse en plus du salaire brut. Elles financent la <strong>securite sociale</strong> (maladie, vieillesse), l&apos;<strong>assurance chomage</strong>, la <strong>retraite complementaire</strong>, la <strong>formation professionnelle</strong> et la <strong>prevoyance</strong>. Leur taux total varie de 25 &agrave; 42 % du brut selon le statut et le niveau de salaire.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Super brut : le vrai cout d&apos;un salarie</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>super brut</strong> est le montant total que l&apos;entreprise debourse pour un salarie. Il comprend le <strong>salaire brut</strong> + les <strong>charges patronales</strong>. Pour un salarie non-cadre &agrave; 2 500 &euro; brut, le super brut se situe autour de 3 300 &euro;. Pour un cadre, il peut depasser 3 500 &euro;. C&apos;est cette somme qui impacte reellement la tresorerie de l&apos;entreprise.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Cadre vs non-cadre : quelle difference de cout ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le statut <strong>cadre</strong> entraine des cotisations supplementaires : <strong>retraite complementaire</strong> plus elevee (12,95 % contre 7,87 % en tranche 1) et <strong>prevoyance cadre obligatoire</strong> (1,50 %). Au total, un cadre coute environ <strong>5 &agrave; 7 % de plus</strong> en charges patronales qu&apos;un non-cadre &agrave; salaire brut identique.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment optimiser le cout salarial ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Plusieurs leviers permettent de <strong>reduire les charges</strong> : la <strong>reduction generale</strong> (ex-Fillon) pour les bas salaires, les <strong>exonerations ZFU/ZRR</strong>, les <strong>aides &agrave; l&apos;embauche</strong> (apprentissage, contrats pro), les <strong>cheques-repas</strong>, l&apos;<strong>interessement</strong> et la <strong>participation</strong>. Ces dispositifs peuvent reduire significativement le cout total employeur.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="tool-bottom" format="horizontal" />
      </div>
    </>
  );
}
