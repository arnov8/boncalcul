import type { Metadata } from "next";
import SimulateurRetraite from "./SimulateurRetraite";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Simulateur retraite 2026 — Estimez votre pension gratuit",
  description:
    "Estimez le montant de votre future pension de retraite. Simulateur gratuit avec prise en compte du salaire, de la duree de cotisation et de l'age de depart.",
  keywords: [
    "simulateur retraite",
    "pension retraite",
    "calcul retraite",
    "age depart retraite",
    "trimestres retraite",
    "retraite 2026",
    "pension de base",
    "AGIRC-ARRCO",
    "taux plein retraite",
    "decote retraite",
  ],
  openGraph: {
    title: "Simulateur retraite 2026 — Estimez votre pension | BonCalcul.fr",
    description:
      "Estimez gratuitement votre future pension de retraite selon votre salaire et votre carriere.",
    url: "https://boncalcul.fr/outils/simulateur-retraite",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/simulateur-retraite",
  },
};

const faqQuestions = [
  {
    question: "Quel est l'age legal de depart a la retraite en France ?",
    answer:
      "Depuis la reforme des retraites de 2023, l'age legal de depart a la retraite est progressivement releve a 64 ans pour les personnes nees a partir de septembre 1961. Pour les personnes nees a partir de 1968, l'age legal est fixe a 64 ans. Avant la reforme, l'age legal etait de 62 ans. Il est possible de partir plus tot dans certains cas (carriere longue, handicap, penibilite).",
  },
  {
    question: "Combien de trimestres faut-il pour une retraite a taux plein ?",
    answer:
      "Le nombre de trimestres requis pour le taux plein depend de votre annee de naissance. Pour les personnes nees a partir de 1965, il faut 172 trimestres, soit 43 annees de cotisation. Ce nombre est progressivement releve par la reforme 2023 : 169 trimestres pour les nes en 1961, 170 pour 1962, 171 pour 1963-1964, et 172 pour 1965 et apres.",
  },
  {
    question: "Comment est calculee la pension de retraite de base ?",
    answer:
      "La pension de base du regime general est calculee selon la formule : Salaire Annuel Moyen (SAM) x Taux de liquidation x (Trimestres cotises / Trimestres requis). Le SAM correspond a la moyenne des 25 meilleures annees de salaire revalorisees. Le taux plein est de 50 %. Si vous n'avez pas tous vos trimestres, une decote de 1,25 % par trimestre manquant s'applique (dans la limite de 20 trimestres).",
  },
  {
    question: "Quel est le montant minimum de la pension de retraite ?",
    answer:
      "Le minimum contributif (retraite de base) est d'environ 747 euros par mois en 2026 pour une carriere complete au SMIC. Le minimum vieillesse (ASPA), verse sous conditions de ressources aux personnes de 65 ans et plus, est d'environ 1 012 euros par mois pour une personne seule. Ces montants sont revalorises chaque annee.",
  },
  {
    question: "Peut-on cumuler emploi et retraite ?",
    answer:
      "Oui, le cumul emploi-retraite est possible. Depuis la reforme 2023, le cumul emploi-retraite integral permet d'acquerir de nouveaux droits a la retraite. Pour en beneficier, il faut avoir liquide toutes ses pensions et remplir les conditions du taux plein. Le cumul partiel est egalement possible mais avec un plafonnement des revenus. Les revenus cumules sont soumis a l'impot sur le revenu.",
  },
];

export default function PageSimulateurRetraite() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur retraite 2026",
          description:
            "Estimez le montant de votre future pension de retraite gratuitement. Salaire, trimestres, age de depart, taux plein ou decote.",
          url: "https://boncalcul.fr/outils/simulateur-retraite",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de retraite 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez instantanement le montant de votre future pension de
            retraite a partir de votre salaire, de vos trimestres cotises et de
            votre statut professionnel. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <SimulateurRetraite />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la retraite
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
          Comprendre la retraite en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que la retraite de base ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>retraite de base</strong> est la pension versee par le regime general de la Securite sociale (CNAV) aux anciens salaries du secteur prive. Elle est financee par les cotisations sociales prelevees sur les salaires. Son montant depend de trois parametres : le <strong>salaire annuel moyen</strong> des 25 meilleures annees, le <strong>taux de liquidation</strong> (50 % au maximum) et la <strong>duree d&apos;assurance</strong> rapportee au nombre de trimestres requis pour votre generation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment sont calcules les trimestres ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Un <strong>trimestre</strong> est valide lorsque vous avez cotise sur un revenu equivalent a <strong>150 fois le SMIC horaire</strong> au cours d&apos;une annee civile. Vous pouvez valider au maximum <strong>4 trimestres par an</strong>. Les periodes de chomage indemnise, de maladie, de maternite ou de service militaire peuvent egalement donner droit a des trimestres assimiles. Le rachat de trimestres est possible pour les periodes d&apos;etudes superieures ou les annees incompletes.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le taux plein et la decote</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>taux plein de 50 %</strong> est accorde si vous reunissez le nombre de trimestres requis ou si vous atteignez 67 ans. En cas de trimestres manquants, une <strong>decote de 1,25 %</strong> par trimestre manquant s&apos;applique, dans la limite de <strong>20 trimestres</strong> (soit une decote maximale de 25 %). Le taux minimum est donc de 37,5 %. Inversement, si vous avez plus de trimestres que necessaire, une <strong>surcote de 1,25 %</strong> par trimestre supplementaire majore votre pension.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">La retraite complementaire AGIRC-ARRCO</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              En plus de la retraite de base, les salaries du prive cotisent obligatoirement a l&apos;<strong>AGIRC-ARRCO</strong>. Cette retraite complementaire fonctionne par <strong>points</strong> : chaque annee, vos cotisations sont converties en points selon une valeur d&apos;achat. A la retraite, le nombre total de points est multiplie par la <strong>valeur de service du point</strong> (1,4159 euros en 2026). La complementaire represente en moyenne <strong>25 a 30 %</strong> de la pension totale pour un cadre.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">L&apos;age legal apres la reforme 2023</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>reforme des retraites de 2023</strong> releve progressivement l&apos;age legal de depart de 62 a <strong>64 ans</strong> et allonge la duree de cotisation a <strong>43 ans</strong> (172 trimestres). Le relevement est progressif : 3 mois supplementaires par generation a partir des nes en septembre 1961. Les dispositifs de depart anticipe sont maintenus pour les <strong>carrieres longues</strong> (debut avant 16, 18 ou 20 ans), les travailleurs handicapes et les metiers penibles (compte professionnel de prevention C2P).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les strategies pour optimiser sa pension</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Plusieurs leviers permettent d&apos;<strong>optimiser sa retraite</strong> : valider ses trimestres chaque annee, <strong>racheter des trimestres</strong> d&apos;etudes (deductibles fiscalement), repousser son depart pour beneficier de la <strong>surcote</strong>, epargner via un <strong>PER (Plan d&apos;Epargne Retraite)</strong> pour completer ses revenus, et verifier regulierement son <strong>releve de carriere</strong> sur info-retraite.fr pour corriger les erreurs. Le cumul emploi-retraite et la retraite progressive sont aussi des options a envisager.
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
