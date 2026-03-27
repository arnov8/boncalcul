import type { Metadata } from "next";
import CalculCalories from "./CalculCalories";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

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

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="calories-top" format="horizontal" className="my-8" />
      </div>

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

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="calories-mid" format="auto" className="my-8" />
      </div>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu&apos;est-ce que le metabolisme de base (BMR) ?</h2>
          <p>
            Le <strong>metabolisme de base</strong>, ou{" "}
            <strong>BMR</strong> (de l&apos;anglais <em>Basal Metabolic Rate</em>),
            represente la quantite d&apos;energie que votre corps depense au
            repos complet pour maintenir ses fonctions vitales : respiration,
            circulation sanguine, regulation de la temperature corporelle,
            fonctionnement des organes et renouvellement cellulaire.
          </p>
          <p>
            Le BMR represente generalement entre 60 % et 75 % de votre depense
            energetique totale quotidienne. Il depend principalement de votre
            poids, de votre taille, de votre age et de votre sexe. Plus vous
            avez de masse musculaire, plus votre metabolisme de base est eleve,
            car le muscle consomme plus d&apos;energie que la graisse, meme au
            repos.
          </p>

          <h2>Harris-Benedict vs Mifflin-St Jeor : quelle formule choisir ?</h2>
          <p>
            Deux formules sont couramment utilisees pour estimer le metabolisme
            de base : la formule de <strong>Harris-Benedict</strong> (1919,
            revisee en 1984 par Roza et Shizgal) et la formule de{" "}
            <strong>Mifflin-St Jeor</strong> (1990).
          </p>
          <p>
            La formule de Harris-Benedict a ete la reference pendant des
            decennies, mais plusieurs etudes ont montre qu&apos;elle tend a
            surestimer le metabolisme de base de 5 a 15 %, en particulier chez
            les personnes en surpoids. La formule de Mifflin-St Jeor, plus
            recente, offre une estimation plus precise pour la majorite des
            adultes. C&apos;est pourquoi elle est recommandee par
            l&apos;<em>Academy of Nutrition and Dietetics</em> depuis 2005 et
            c&apos;est celle que notre calculateur utilise.
          </p>
          <p>
            La formule de Mifflin-St Jeor pour les <strong>hommes</strong> est :
            BMR = 10 x poids (kg) + 6,25 x taille (cm) - 5 x age (annees) + 5.
            Pour les <strong>femmes</strong> : BMR = 10 x poids (kg) + 6,25 x
            taille (cm) - 5 x age (annees) - 161.
          </p>

          <h2>Les niveaux d&apos;activite physique</h2>
          <p>
            Une fois votre BMR calcule, il faut le multiplier par un coefficient
            correspondant a votre niveau d&apos;activite physique pour obtenir
            votre <strong>TDEE</strong> (Total Daily Energy Expenditure), soit
            vos besoins caloriques reels. Voici les cinq niveaux couramment
            utilises :
          </p>
          <ul>
            <li>
              <strong>Sedentaire (x 1,2)</strong> : travail de bureau, pas ou
              tres peu d&apos;exercice physique. C&apos;est le cas de la majorite
              des personnes ayant un emploi de bureau sans activite sportive
              reguliere.
            </li>
            <li>
              <strong>Legerement actif (x 1,375)</strong> : exercice leger 1 a 3
              fois par semaine (marche, yoga, stretching) ou travail impliquant
              un peu de marche.
            </li>
            <li>
              <strong>Moderement actif (x 1,55)</strong> : exercice modere 3 a 5
              fois par semaine (course a pied, natation, velo, musculation).
              C&apos;est le niveau recommande par l&apos;OMS pour une bonne sante
              generale.
            </li>
            <li>
              <strong>Tres actif (x 1,725)</strong> : exercice intense 6 a 7
              fois par semaine, ou metier physiquement exigeant (ouvrier du
              batiment, demenageur) combine a du sport.
            </li>
            <li>
              <strong>Extremement actif (x 1,9)</strong> : entrainement quotidien
              intense, athletes professionnels, ou travail tres physique combine
              a un entrainement sportif regulier.
            </li>
          </ul>

          <h2>Qu&apos;est-ce que le TDEE ?</h2>
          <p>
            Le <strong>TDEE</strong> (<em>Total Daily Energy Expenditure</em>)
            correspond a la depense energetique totale de votre journee. Il
            englobe votre metabolisme de base (BMR), l&apos;effet thermique des
            aliments (environ 10 % des calories consommees sont utilisees pour
            la digestion) et les calories brulees par l&apos;activite physique.
          </p>
          <p>
            Connaitre votre TDEE est essentiel pour gerer votre poids : si vous
            consommez exactement votre TDEE en calories chaque jour, votre poids
            reste stable. Pour perdre ou prendre du poids, il suffit d&apos;ajuster
            votre apport calorique par rapport a cette valeur de reference.
          </p>

          <h2>Deficit et surplus calorique : comment ca marche ?</h2>
          <p>
            Le principe de la gestion du poids repose sur la balance
            energetique. Pour <strong>perdre du poids</strong>, vous devez creer
            un <strong>deficit calorique</strong>, c&apos;est-a-dire consommer
            moins de calories que votre TDEE. Un deficit de 500 kcal par jour
            correspond a une perte d&apos;environ 0,5 kg par semaine, tandis
            qu&apos;un deficit de 1 000 kcal par jour permet de perdre environ
            1 kg par semaine.
          </p>
          <p>
            A l&apos;inverse, pour <strong>prendre du poids</strong> ou de la
            masse musculaire, vous devez creer un{" "}
            <strong>surplus calorique</strong> en consommant plus que votre TDEE.
            Un surplus de 300 a 500 kcal par jour est generalement recommande
            pour une prise de masse propre, combinee a un entrainement de
            musculation.
          </p>
          <p>
            Il est important de ne pas aller trop loin dans le deficit : un
            apport calorique trop faible (en dessous de 1 200 kcal pour les
            femmes et 1 500 kcal pour les hommes) peut entrainer des carences
            nutritionnelles, une perte de masse musculaire, une baisse du
            metabolisme et des troubles hormonaux. Consultez un professionnel de
            sante avant d&apos;entreprendre un regime restrictif.
          </p>

          <h2>L&apos;importance des macronutriments</h2>
          <p>
            Au-dela du nombre total de calories, la repartition des{" "}
            <strong>macronutriments</strong> (proteines, glucides, lipides) joue
            un role crucial dans la composition corporelle et la sante. Une
            repartition equilibree couramment recommandee est : 30 % de
            proteines, 40 % de glucides et 30 % de lipides.
          </p>
          <ul>
            <li>
              <strong>Les proteines</strong> (4 kcal/g) sont essentielles pour la
              construction et la reparation musculaire, la satiete et le maintien
              de la masse maigre lors d&apos;un deficit calorique.
            </li>
            <li>
              <strong>Les glucides</strong> (4 kcal/g) constituent la source
              d&apos;energie principale du corps. Privilegiez les glucides
              complexes (cereales completes, legumineuses) aux sucres rapides.
            </li>
            <li>
              <strong>Les lipides</strong> (9 kcal/g) sont indispensables a la
              production hormonale, a l&apos;absorption des vitamines liposolubles
              et au bon fonctionnement du systeme nerveux. Privilegiez les acides
              gras insatures (huile d&apos;olive, poisson, noix).
            </li>
          </ul>
          <p>
            Notre calculateur vous propose une repartition en macronutriments
            basee sur votre TDEE pour vous aider a structurer votre alimentation
            selon vos objectifs.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="calories-bottom" format="horizontal" />
      </div>
    </>
  );
}
