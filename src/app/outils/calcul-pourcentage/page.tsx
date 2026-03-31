import type { Metadata } from "next";
import CalculPourcentage from "./CalculPourcentage";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographiePourcentage from "@/components/infographics/InfographiePourcentage";

export const metadata: Metadata = {
  title: "Calcul Pourcentage — Calculer un pourcentage en ligne",
  description:
    "Calculez un pourcentage instantanement : X% d'un nombre, quel pourcentage represente X de Y, variation en pourcentage. Gratuit, sans inscription.",
  keywords: [
    "calcul pourcentage",
    "calculer un pourcentage",
    "pourcentage en ligne",
    "X pourcent de Y",
    "variation pourcentage",
    "pourcentage d'un nombre",
    "taux de variation",
    "calculatrice pourcentage",
    "calcul pourcentage gratuit",
  ],
  openGraph: {
    title: "Calcul Pourcentage — Calculer un pourcentage en ligne | BonCalcul.fr",
    description:
      "Calculez un pourcentage en ligne : X% d'un nombre, proportion, variation. Resultat immediat et gratuit.",
    url: "https://boncalcul.fr/outils/calcul-pourcentage",
    type: "website",
    images: [
      {
        url: `https://boncalcul.fr/api/og?slug=calcul-pourcentage`,
        width: 1200,
        height: 630,
        alt: "Calcul Pourcentage — BonCalcul.fr",
      },
    ],
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-pourcentage",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer X % d'un nombre ?",
    answer:
      "Pour calculer X % d'un nombre, multipliez ce nombre par X puis divisez par 100. Par exemple, 20 % de 150 = 150 x 20 / 100 = 30. C'est la methode la plus courante pour appliquer une remise, calculer un pourboire ou determiner une part.",
  },
  {
    question: "Comment trouver quel pourcentage represente un nombre par rapport a un autre ?",
    answer:
      "Pour savoir quel pourcentage X represente de Y, divisez X par Y puis multipliez par 100. Par exemple, 30 represente quel pourcentage de 150 ? Le calcul est : (30 / 150) x 100 = 20 %. Cette formule est utile pour calculer un taux de reussite, une proportion ou une part de marche.",
  },
  {
    question: "Comment calculer une variation en pourcentage ?",
    answer:
      "La variation en pourcentage se calcule avec la formule : ((valeur finale - valeur initiale) / valeur initiale) x 100. Par exemple, si un prix passe de 100 a 130 euros, la variation est ((130 - 100) / 100) x 100 = +30 %. Un resultat positif indique une hausse, un resultat negatif une baisse.",
  },
  {
    question: "Quelle est la difference entre un pourcentage et un point de pourcentage ?",
    answer:
      "Un point de pourcentage mesure la difference absolue entre deux pourcentages, tandis qu'un pourcentage mesure la variation relative. Par exemple, si un taux passe de 10 % a 15 %, il a augmente de 5 points de pourcentage, mais la hausse en pourcentage est de 50 % ((15 - 10) / 10 x 100).",
  },
  {
    question: "Les calculs de pourcentage sont-ils fiables sur BonCalcul.fr ?",
    answer:
      "Oui, nos calculs utilisent les formules mathematiques standard. Le calculateur fonctionne integralement dans votre navigateur : aucune donnee n'est envoyee a nos serveurs. Les resultats sont instantanes et precis a deux decimales pres.",
  },
];

export default function PageCalculPourcentage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul Pourcentage — Calculer un pourcentage en ligne",
          description:
            "Calculez un pourcentage instantanement : X% d'un nombre, quel pourcentage represente X de Y, variation en pourcentage entre deux valeurs.",
          url: "https://boncalcul.fr/outils/calcul-pourcentage",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de pourcentage en ligne
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez instantanement un pourcentage, une proportion ou une
            variation en pourcentage. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CalculPourcentage />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographiePourcentage />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le calcul de pourcentage
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
          Tout savoir sur le calcul de pourcentage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce qu&apos;un pourcentage ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Un <strong>pourcentage</strong> exprime une proportion sous forme de fraction de 100. Le symbole % signifie &laquo; pour cent &raquo;. Omnipresents dans la vie quotidienne (remises, taux d&apos;interet, statistiques, notes scolaires), les pourcentages sont un rapport multiplie par 100 : 15 bonnes reponses sur 60 questions = (15 / 60) x 100 = 25 %. Cette notion simple est pourtant source de nombreuses erreurs, notamment la confusion entre <strong>pourcentage</strong> et <strong>points de pourcentage</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Calculer X % d&apos;un nombre</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le calcul le plus courant. Formule : <strong>resultat = nombre x pourcentage / 100</strong>. <strong>Remise :</strong> un article a 80 € avec -30 % = 80 - 24 = 56 €. <strong>Pourboire :</strong> 15 % sur 45 € = 6,75 €. <strong>Interets bancaires :</strong> 10 000 € a 3 % = 300 € d&apos;interets annuels.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Trouver quel pourcentage X represente de Y</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Formule : <strong>pourcentage = (X / Y) x 100</strong>. <strong>Note scolaire :</strong> 14/20 = 70 %. <strong>Part de marche :</strong> 5 M€ sur un marche de 50 M€ = 10 %. <strong>Budget :</strong> 450 € de loyer sur 1 800 € de salaire = 25 % de vos revenus.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Calculer une variation en pourcentage</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Formule : <strong>variation = ((valeur finale - valeur initiale) / valeur initiale) x 100</strong>. <strong>Loyer :</strong> de 800 a 850 € = +6,25 %. <strong>Bourse :</strong> de 120 a 96 € = -20 %. <strong>Chiffre d&apos;affaires :</strong> de 200 000 a 260 000 € = +30 %. Un resultat positif indique une hausse, negatif une baisse.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Erreurs courantes avec les pourcentages</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Pourcentage vs points de pourcentage :</strong> un taux passant de 2 % a 3 % augmente de 1 point, mais de 50 % en relatif. <strong>Additionner des pourcentages :</strong> +20 % puis -20 % ne ramene pas au depart (100 € → 120 € → 96 €). <strong>Inverser la base :</strong> 30 est 50 % de 60, mais 60 est 200 % de 30. <strong>Base de reference :</strong> &laquo; +200 % &raquo; signifie tripler (x3), pas doubler.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Pourcentages et vie quotidienne</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>soldes et promotions</strong> expriment les reductions en pourcentage (-30 %, -50 %). Les <strong>taux d&apos;interet</strong> des prets immobiliers, livrets d&apos;epargne et placements sont exprimes en pourcentage annuel. Les <strong>impots</strong> se calculent par tranches en pourcentage du revenu. En entreprise, les pourcentages mesurent la <strong>marge commerciale</strong>, le <strong>taux de conversion</strong>, le <strong>taux de croissance</strong> du CA ou le <strong>taux d&apos;absenteisme</strong>.
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
