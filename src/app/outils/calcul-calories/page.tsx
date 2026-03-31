import type { Metadata } from "next";
import CalculCalories from "./CalculCalories";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographieCalories from "@/components/infographics/InfographieCalories";

export const metadata: Metadata = {
  title: "Calcul calories par jour — Besoins caloriques gratuit",
  description:
    "Calculez vos besoins caloriques journaliers gratuitement avec la formule Mifflin-St Jeor. Decouvrez votre metabolisme de base (BMR), votre TDEE et vos objectifs de poids.",
  keywords: [
    "calcul calories par jour",
    "besoins caloriques journaliers",
    "calculateur calories gratuit",
    "metabolisme de base",
    "TDEE",
    "Mifflin-St Jeor",
    "deficit calorique",
    "perte de poids",
    "prise de masse",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-calories",
  },
  openGraph: {
    title: "Calcul calories par jour — Besoins caloriques gratuit | BonCalcul.fr",
    description:
      "Calculez vos besoins caloriques journaliers instantanement. Metabolisme de base, TDEE et objectifs de poids. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-calories",
    type: "website",
    images: [
      {
        url: `https://boncalcul.fr/api/og?slug=calcul-calories`,
        width: 1200,
        height: 630,
        alt: "Calcul Calories — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Comment calculer ses besoins caloriques journaliers ?",
    answer:
      "Pour calculer vos besoins caloriques journaliers, il faut d'abord determiner votre metabolisme de base (BMR) a l'aide d'une formule comme Mifflin-St Jeor, puis le multiplier par un coefficient d'activite physique. Le resultat obtenu est votre TDEE (Total Daily Energy Expenditure), c'est-a-dire le nombre de calories que vous devez consommer chaque jour pour maintenir votre poids actuel.",
  },
  {
    question: "Quelle est la difference entre BMR et TDEE ?",
    answer:
      "Le BMR (Basal Metabolic Rate) ou metabolisme de base correspond aux calories que votre corps brule au repos pour assurer ses fonctions vitales (respiration, circulation sanguine, regulation de la temperature). Le TDEE (Total Daily Energy Expenditure) inclut le BMR plus les calories brulees par l'activite physique quotidienne. Le TDEE est toujours superieur au BMR et represente vos besoins caloriques reels.",
  },
  {
    question: "Combien de calories faut-il manger pour perdre du poids ?",
    answer:
      "Pour perdre du poids, il faut creer un deficit calorique, c'est-a-dire consommer moins de calories que votre TDEE. Un deficit de 500 calories par jour permet de perdre environ 0,5 kg par semaine. Un deficit de 1 000 calories par jour correspond a environ 1 kg par semaine. Il est deconseille de descendre en dessous de 1 200 calories par jour pour les femmes et 1 500 pour les hommes sans avis medical.",
  },
  {
    question: "Quelle formule est la plus precise pour calculer le metabolisme de base ?",
    answer:
      "La formule de Mifflin-St Jeor est consideree comme la plus precise pour estimer le metabolisme de base chez la plupart des adultes. Publiee en 1990, elle a montre une meilleure precision que la formule de Harris-Benedict (1919) dans plusieurs etudes scientifiques. C'est la formule recommandee par l'Academy of Nutrition and Dietetics depuis 2005.",
  },
  {
    question: "Comment choisir son niveau d'activite physique ?",
    answer:
      "Sedentaire correspond a un travail de bureau sans exercice. Legerement actif signifie 1 a 3 seances de sport par semaine. Moderement actif correspond a 3 a 5 seances par semaine. Tres actif implique 6 a 7 seances intenses par semaine. Extremement actif concerne les athletes ou les personnes ayant un travail tres physique combine a un entrainement quotidien. Soyez honnete dans votre evaluation pour obtenir un resultat fiable.",
  },
];

export default function PageCalculCalories() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul calories par jour — Besoins caloriques gratuit",
          description:
            "Calculez vos besoins caloriques journaliers gratuitement avec la formule Mifflin-St Jeor. Metabolisme de base, TDEE et objectifs de poids.",
          url: "https://boncalcul.fr/outils/calcul-calories",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de vos besoins caloriques{" "}
            <span className="text-blue-600">gratuit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez vos besoins caloriques journaliers avec la formule
            Mifflin-St Jeor et decouvrez combien de calories consommer selon
            vos objectifs.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculCalories />
      </section>

      <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographieCalories />

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur les besoins caloriques
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

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout comprendre sur les calories et le metabolisme
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que le metabolisme de base (BMR) ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>metabolisme de base</strong> (<strong>BMR</strong>, <em>Basal Metabolic Rate</em>) represente l&apos;energie depensee au repos pour les fonctions vitales : respiration, circulation, regulation thermique et renouvellement cellulaire. Il constitue 60 a 75 % de votre depense energetique totale et depend de votre poids, taille, age et sexe. Plus vous avez de <strong>masse musculaire</strong>, plus votre BMR est eleve.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Harris-Benedict vs Mifflin-St Jeor</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La formule de <strong>Harris-Benedict</strong> (1919) a longtemps ete la reference, mais elle surestime le BMR de 5 a 15 %. La formule de <strong>Mifflin-St Jeor</strong> (1990), recommandee par l&apos;<em>Academy of Nutrition and Dietetics</em> depuis 2005, est plus precise. <strong>Hommes</strong> : BMR = 10 x poids (kg) + 6,25 x taille (cm) - 5 x age + 5. <strong>Femmes</strong> : BMR = 10 x poids (kg) + 6,25 x taille (cm) - 5 x age - 161.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les niveaux d&apos;activite physique</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le BMR est multiplie par un coefficient d&apos;activite pour obtenir le <strong>TDEE</strong>. <strong>Sedentaire (x 1,2)</strong> : travail de bureau sans sport. <strong>Legerement actif (x 1,375)</strong> : 1 a 3 seances par semaine. <strong>Moderement actif (x 1,55)</strong> : 3 a 5 seances, niveau recommande par l&apos;OMS. <strong>Tres actif (x 1,725)</strong> : 6 a 7 seances intenses. <strong>Extremement actif (x 1,9)</strong> : athletes professionnels ou travail tres physique.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que le TDEE ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>TDEE</strong> (<em>Total Daily Energy Expenditure</em>) est votre depense energetique totale quotidienne. Il inclut le BMR, l&apos;effet thermique des aliments (environ 10 % des calories consommees) et les calories brulees par l&apos;activite physique. Consommer exactement votre TDEE maintient votre poids stable ; ajustez votre apport calorique par rapport a cette valeur pour perdre ou prendre du poids.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Deficit et surplus calorique</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour <strong>perdre du poids</strong>, creez un <strong>deficit calorique</strong> : -500 kcal/jour pour perdre ~0,5 kg/semaine, -1 000 kcal/jour pour ~1 kg/semaine. Pour la <strong>prise de masse</strong>, un <strong>surplus calorique</strong> de 300 a 500 kcal/jour est recommande avec un entrainement de musculation. Ne descendez jamais en dessous de 1 200 kcal (femmes) ou 1 500 kcal (hommes) sans avis medical, sous peine de carences et de troubles hormonaux.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">L&apos;importance des macronutriments</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La repartition des <strong>macronutriments</strong> est cle : 30 % de <strong>proteines</strong> (4 kcal/g, construction musculaire et satiete), 40 % de <strong>glucides</strong> (4 kcal/g, source d&apos;energie principale, privilegiez les glucides complexes) et 30 % de <strong>lipides</strong> (9 kcal/g, production hormonale et absorption des vitamines, privilegiez les acides gras insatures). Notre calculateur propose une repartition basee sur votre TDEE.
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
