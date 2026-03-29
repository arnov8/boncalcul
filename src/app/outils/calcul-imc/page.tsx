import type { Metadata } from "next";
import CalculIMC from "./CalculIMC";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul IMC — Indice de masse corporelle gratuit",
  description:
    "Calculez votre Indice de Masse Corporelle (IMC) gratuitement. Interpretez votre resultat selon les categories de l'OMS et decouvrez votre poids ideal.",
  keywords: [
    "calcul IMC",
    "indice de masse corporelle",
    "calculateur IMC gratuit",
    "IMC OMS",
    "poids ideal",
    "BMI calculator",
    "obesite",
    "surpoids",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-imc",
  },
  openGraph: {
    title: "Calcul IMC — Indice de masse corporelle gratuit | BonCalcul.fr",
    description:
      "Calculez votre IMC instantanement et decouvrez votre categorie selon l'OMS. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-imc",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer son IMC ?",
    answer:
      "L'IMC se calcule en divisant votre poids (en kilogrammes) par le carre de votre taille (en metres). Par exemple, pour une personne de 70 kg mesurant 1,75 m : IMC = 70 / (1,75 x 1,75) = 22,9. Un IMC entre 18,5 et 25 est considere comme normal par l'Organisation mondiale de la sante (OMS).",
  },
  {
    question: "Quel est l'IMC ideal ?",
    answer:
      "Selon l'OMS, un IMC compris entre 18,5 et 24,9 correspond a un poids normal pour la plupart des adultes. Cependant, l'IMC ideal peut varier selon l'age, le sexe, la morphologie et le niveau d'activite physique. Un IMC autour de 21-22 est souvent cite comme optimal pour la sante.",
  },
  {
    question: "L'IMC est-il fiable pour tout le monde ?",
    answer:
      "Non, l'IMC a des limites. Il ne distingue pas la masse graisseuse de la masse musculaire. Un sportif tres muscle peut avoir un IMC eleve sans etre en surpoids. L'IMC n'est pas non plus adapte aux enfants, aux adolescents, aux femmes enceintes ou aux personnes agees. Il doit etre considere comme un indicateur parmi d'autres et ne remplace pas un avis medical.",
  },
  {
    question: "A partir de quel IMC faut-il consulter un medecin ?",
    answer:
      "Il est recommande de consulter un medecin si votre IMC est inferieur a 18,5 (insuffisance ponderale) ou superieur a 30 (obesite). Un IMC entre 25 et 30 (surpoids) merite egalement une attention particuliere, surtout s'il s'accompagne d'autres facteurs de risque comme l'hypertension, le diabete ou un tour de taille eleve.",
  },
  {
    question: "Quelle est la difference entre IMC et IMG ?",
    answer:
      "L'IMC (Indice de Masse Corporelle) est un ratio poids/taille simple qui ne distingue pas les types de masse. L'IMG (Indice de Masse Grasse) mesure specifiquement le pourcentage de graisse corporelle. L'IMG est plus precis pour evaluer la composition corporelle, mais il necessite des mesures complementaires (plis cutanes, impedancemetrie). Les deux indicateurs sont complementaires.",
  },
];

export default function PageCalculIMC() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul IMC — Indice de masse corporelle gratuit",
          description:
            "Calculez votre Indice de Masse Corporelle (IMC) gratuitement et interpretez votre resultat selon les categories de l'OMS.",
          url: "https://boncalcul.fr/outils/calcul-imc",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de l&apos;IMC{" "}
            <span className="text-green-600">gratuit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez votre Indice de Masse Corporelle en quelques secondes et
            decouvrez votre categorie selon l&apos;OMS.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculIMC />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;IMC
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
          Tout savoir sur l&apos;IMC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que l&apos;IMC ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>Indice de Masse Corporelle</strong> (<strong>IMC</strong>, ou <em>Body Mass Index / BMI</em>) est un indicateur qui evalue la corpulence d&apos;une personne en fonction de sa taille et de son poids. Developpe par Adolphe Quetelet au XIXe siecle, il est utilise dans le monde entier comme outil de depistage du <strong>surpoids</strong> et de l&apos;<strong>obesite</strong>. L&apos;OMS l&apos;a adopte comme reference internationale : c&apos;est un outil simple, rapide et non invasif pour evaluer les risques de sante lies au poids.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment calculer son IMC ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Divisez votre <strong>poids</strong> (kg) par le <strong>carre de votre taille</strong> (m) : <strong>IMC = Poids / (Taille x Taille)</strong>. Exemple : 68 kg pour 1,72 m donne IMC = 68 / 2,9584 = 22,99, soit un <strong>poids normal</strong> selon l&apos;OMS. Notre calculateur effectue ce calcul automatiquement : entrez votre poids en kilogrammes et votre taille en centimetres pour un resultat instantane.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les categories de l&apos;OMS</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;OMS definit des seuils precis pour les adultes (hommes et femmes) : <strong>Denutrition</strong> (IMC &lt; 16,5) avec risque majeur de carences. <strong>Maigreur</strong> (16,5 - 18,5) necessitant un suivi medical. <strong>Poids normal</strong> (18,5 - 25) correspondant a un risque minimal. <strong>Surpoids</strong> (25 - 30) avec risque accru de maladies cardiovasculaires et diabete. <strong>Obesite moderee</strong> (30 - 35), <strong>severe</strong> (35 - 40) et <strong>morbide</strong> (&gt; 40) necessitant une prise en charge medicale adaptee.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les limites de l&apos;IMC</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;IMC presente plusieurs <strong>limites importantes</strong>. Il ne distingue pas la <strong>masse musculaire</strong> de la masse graisseuse : un sportif muscle peut avoir un IMC eleve sans surpoids reel. Il ignore la <strong>repartition des graisses</strong> (la graisse abdominale est plus dangereuse). Il ne tient pas compte de l&apos;<strong>age</strong> (apres 60-65 ans, un IMC 25-27 peut etre protecteur). Enfin, il n&apos;est pas adapte aux <strong>enfants, adolescents et femmes enceintes</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Quand consulter un medecin ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;IMC est un outil de depistage, pas un diagnostic. Consultez un professionnel de sante si votre IMC est <strong>inferieur a 18,5</strong> ou <strong>superieur a 30</strong>, ou entre 25 et 30 avec des facteurs de risque (hypertension, diabete, cholesterol, antecedents cardiovasculaires). Une <strong>prise ou perte de poids rapide et inexpliquee</strong> justifie egalement une consultation. Le medecin completera l&apos;evaluation par d&apos;autres mesures (tour de taille, bilan sanguin, impedancemetrie).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conseils pour un poids sain</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Alimentation equilibree</strong> : privilegiez fruits, legumes, cereales completes et proteines maigres, en limitant les produits ultra-transformes. <strong>Activite physique</strong> : l&apos;OMS recommande 150 min d&apos;activite moderee ou 75 min intense par semaine. <strong>Sommeil</strong> : 7 a 9 heures par nuit pour eviter le dereglement des hormones de la faim. <strong>Gestion du stress</strong> pour limiter le stockage de graisse abdominale. Evitez les <strong>regimes restrictifs</strong> (effet yoyo) et privilegiez des changements d&apos;habitudes progressifs et durables.
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
