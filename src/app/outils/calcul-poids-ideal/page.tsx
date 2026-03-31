import type { Metadata } from "next";
import CalculPoidsIdeal from "./CalculPoidsIdeal";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographiePoidsIdeal from "@/components/infographics/InfographiePoidsIdeal";

export const metadata: Metadata = {
  title: "Calcul poids ideal — Estimez votre poids de forme",
  description:
    "Calculez votre poids ideal gratuitement selon plusieurs formules medicales reconnues : Lorentz, Devine, Creff et IMC. Comparez les resultats et trouvez votre poids de forme.",
  keywords: [
    "calcul poids idéal",
    "poids ideal",
    "poids de forme",
    "formule de Lorentz",
    "formule de Devine",
    "formule de Creff",
    "poids sante",
    "poids ideal femme",
    "poids ideal homme",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-poids-ideal",
  },
  openGraph: {
    title: "Calcul poids ideal — Estimez votre poids de forme | BonCalcul.fr",
    description:
      "Estimez votre poids ideal selon 4 formules medicales reconnues. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-poids-ideal",
    type: "website",
    images: [
      {
        url: `https://boncalcul.fr/api/og?slug=calcul-poids-ideal`,
        width: 1200,
        height: 630,
        alt: "Calcul Poids Ideal — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Comment calculer son poids ideal ?",
    answer:
      "Il n'existe pas une seule formule universelle pour calculer le poids ideal. Plusieurs methodes coexistent (Lorentz, Devine, Creff, IMC) et donnent chacune un resultat different. L'approche la plus fiable consiste a comparer les resultats de plusieurs formules pour obtenir une fourchette de poids de forme. Notre calculateur applique automatiquement 4 formules reconnues et vous donne une synthese.",
  },
  {
    question: "Quelle est la formule la plus fiable pour le poids ideal ?",
    answer:
      "Aucune formule n'est parfaite. La formule de Lorentz est la plus utilisee en France car elle tient compte du sexe. La formule de Creff est plus complete car elle integre l'age et la morphologie. La fourchette basee sur l'IMC (18,5 a 25) est celle recommandee par l'OMS. En pratique, la meilleure approche est de croiser plusieurs formules et de considerer le resultat comme une estimation, pas un objectif strict.",
  },
  {
    question: "Le poids ideal est-il le meme pour un homme et une femme ?",
    answer:
      "Non, le poids ideal differe entre hommes et femmes a taille egale. Les hommes ont generalement une masse musculaire et une ossature plus importantes, ce qui se traduit par un poids ideal plus eleve. Les formules de Lorentz et Devine appliquent des coefficients differents selon le sexe. La difference peut atteindre 5 a 10 kg pour une meme taille.",
  },
  {
    question: "Pourquoi mon poids ideal calcule ne correspond pas a mon poids reel ?",
    answer:
      "Le poids ideal calcule par les formules est une estimation statistique basee sur des moyennes de population. Votre poids reel peut etre different pour de nombreuses raisons : masse musculaire, morphologie osseuse, genetique, niveau d'activite physique. Un sportif peut legitimement peser plus que son poids ideal calcule. L'important est de se sentir bien dans son corps et d'avoir des indicateurs de sante satisfaisants.",
  },
  {
    question: "A quel age le poids ideal change-t-il ?",
    answer:
      "La composition corporelle evolue tout au long de la vie. Apres 30 ans, la masse musculaire tend a diminuer progressivement tandis que la masse graisseuse augmente. La formule de Creff est la seule a integrer l'age dans son calcul. En general, un leger surplus de poids (IMC 25-27) est considere comme normal et meme protecteur apres 65 ans. Il est recommande de suivre l'evolution de son poids avec un professionnel de sante.",
  },
];

export default function PageCalculPoidsIdeal() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul poids ideal — Estimez votre poids de forme",
          description:
            "Calculez votre poids ideal gratuitement selon plusieurs formules medicales reconnues : Lorentz, Devine, Creff et IMC.",
          url: "https://boncalcul.fr/outils/calcul-poids-ideal",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul du poids ideal{" "}
            <span className="text-blue-600">multi-formules</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez votre poids de forme selon 4 formules medicales reconnues
            et comparez les resultats instantanement.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculPoidsIdeal />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographiePoidsIdeal />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le poids ideal
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
          Tout savoir sur le calcul du poids ideal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que le poids ideal ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>poids ideal</strong> est une estimation theorique du poids optimal pour la sante, selon la taille, le sexe, l&apos;age et la morphologie. Il ne s&apos;agit pas d&apos;un chiffre absolu : il faut le distinguer du poids souhaite, souvent influence par des criteres esthetiques. Un vrai <strong>poids de forme</strong> est celui ou vous vous sentez bien, avec de bons indicateurs de sante (tension, glycemie, cholesterol).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les formules de calcul</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Lorentz (1929)</strong> : la plus repandue en France, tient compte du sexe et de la taille. <em>Hommes : Taille - 100 - (Taille - 150) / 4</em>. <em>Femmes : Taille - 100 - (Taille - 150) / 2,5</em>. <strong>Devine (1974)</strong> : reference anglo-saxonne, tend a donner des resultats plus bas pour les grandes tailles. <strong>Creff</strong> : la plus complete, integre taille, age et morphologie (gracile, normale, large). <strong>Fourchette IMC (OMS)</strong> : recommande un IMC entre 18,5 et 25, reconnaissant une zone de poids sain plutot qu&apos;un chiffre unique.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Limites des formules</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ces formules presentent des <strong>limites importantes</strong>. Elles ne tiennent pas compte de la <strong>masse musculaire</strong> : un sportif peut legitimement depasser son poids ideal calcule. Elles sont basees sur des populations occidentales et peuvent ne pas convenir a toutes les origines ethniques. Elles ignorent la <strong>repartition des graisses</strong> (la graisse abdominale est plus risquee) et donnent un chiffre unique alors que le poids ideal est une zone large.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Approche saine du poids</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Plutot qu&apos;un chiffre precis, privilegiez une <strong>alimentation equilibree</strong> (fruits, legumes, cereales completes, proteines de qualite) et evitez les regimes restrictifs. <strong>Bougez regulierement</strong> pour ameliorer votre composition corporelle. Ecoutez votre corps : faim, satiete et energie sont de meilleurs indicateurs que la balance. Consultez un <strong>professionnel de sante</strong> pour une evaluation personnalisee de votre composition corporelle.
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
