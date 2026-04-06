import type { Metadata } from "next";
import ConversionUnites from "./ConversionUnites";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographieConversion from "@/components/infographics/InfographieConversion";

export const metadata: Metadata = {
  title: "Conversion d'unites — Convertisseur en ligne gratuit",
  description:
    "Convertissez instantanement toutes les unites : longueur, masse, volume, temperature, surface, vitesse. Convertisseur gratuit, sans inscription.",
  keywords: [
    "conversion unités",
    "convertisseur unités",
    "conversion en ligne",
    "convertir metres en pieds",
    "convertir kg en livres",
    "conversion temperature",
    "conversion volume",
    "convertisseur gratuit",
    "conversion metrique imperial",
  ],
  openGraph: {
    title: "Conversion d'unites — Convertisseur en ligne gratuit | BonCalcul.fr",
    description:
      "Convertissez instantanement toutes les unites : longueur, masse, volume, temperature, surface, vitesse. Gratuit et sans inscription.",
    url: "https://www.boncalcul.fr/outils/conversion-unites",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=conversion-unites`,
        width: 1200,
        height: 630,
        alt: "Conversion Unites — BonCalcul.fr",
      },
    ],
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/conversion-unites",
  },
};

const faqQuestions = [
  {
    question: "Comment convertir des kilometres en miles ?",
    answer:
      "Pour convertir des kilometres en miles, divisez la valeur en kilometres par 1,609344. Par exemple, 10 km = 10 / 1,609344 = 6,21 miles. Inversement, pour convertir des miles en kilometres, multipliez par 1,609344. Notre convertisseur effectue ce calcul instantanement.",
  },
  {
    question: "Quelle est la difference entre le systeme metrique et le systeme imperial ?",
    answer:
      "Le systeme metrique (SI) utilise des unites comme le metre, le kilogramme et le litre, basees sur des puissances de 10. Le systeme imperial, utilise principalement aux Etats-Unis et au Royaume-Uni, emploie des pouces, pieds, livres et gallons. Le systeme metrique est adopte par la quasi-totalite des pays du monde.",
  },
  {
    question: "Comment convertir des degres Fahrenheit en degres Celsius ?",
    answer:
      "La formule est : C = (F - 32) x 5 / 9. Par exemple, 100 °F = (100 - 32) x 5 / 9 = 37,78 °C. Inversement, pour passer de Celsius a Fahrenheit : F = C x 9 / 5 + 32. La temperature de 0 °C correspond a 32 °F (point de congelation de l'eau).",
  },
  {
    question: "Combien de litres dans un gallon americain ?",
    answer:
      "Un gallon americain (US gallon) equivaut a environ 3,78541 litres. Attention a ne pas confondre avec le gallon imperial britannique qui vaut 4,54609 litres. Notre convertisseur utilise le gallon americain, le plus couramment recherche.",
  },
  {
    question: "Les conversions sont-elles precises sur BonCalcul.fr ?",
    answer:
      "Oui, nos facteurs de conversion sont bases sur les definitions officielles du Systeme international d'unites (SI). Les calculs sont effectues directement dans votre navigateur avec une precision de plusieurs decimales. Aucune donnee n'est envoyee a nos serveurs.",
  },
];

export default function PageConversionUnites() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Conversion d'unites — Convertisseur en ligne gratuit",
          description:
            "Convertissez instantanement toutes les unites : longueur, masse, volume, temperature, surface, vitesse. Resultat immediat et gratuit.",
          url: "https://www.boncalcul.fr/outils/conversion-unites",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Convertisseur d'unites en ligne
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convertissez instantanement longueurs, masses, volumes,
            temperatures, surfaces et vitesses. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <ConversionUnites />
        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographieConversion />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la conversion d'unites
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
          Guide complet de la conversion d'unites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu'est-ce que la conversion d'unites ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>conversion d'unites</strong> consiste a exprimer une meme grandeur physique dans une unite differente (ex. 1 km = 1 000 m, 1 kg = 2,205 livres). Cette operation est indispensable en cuisine, en science, en ingenierie et dans la vie courante. Notre convertisseur couvre six categories : longueur, masse, volume, temperature, surface et vitesse, avec des calculs instantanes directement dans votre navigateur.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les principaux systemes d'unites</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>Systeme international (SI)</strong>, ou systeme metrique, est le standard mondial. Il repose sur le metre, le kilogramme, le litre et le degre Celsius, avec des unites liees par des puissances de 10. Le <strong>systeme imperial</strong> (anglo-saxon), utilise aux Etats-Unis et partiellement au Royaume-Uni, emploie pouces, pieds, livres et gallons avec des facteurs de conversion non decimaux (1 pied = 12 pouces, 1 mile = 1 760 yards).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conversions de longueur</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le rapport fondamental est <strong>1 pouce = 2,54 cm</strong> (definition exacte depuis 1959). On en derive : 1 pied = 30,48 cm, 1 yard = 91,44 cm, 1 mile = 1,609344 km. Dans l'autre sens : 1 metre = 3,281 pieds, 1 kilometre = 0,6214 miles. Utile pour les tailles en pouces (ecrans, vetements americains), les distances anglo-saxonnes et les specifications techniques de produits importes.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conversions de masse et de poids</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les rapports cles sont : <strong>1 livre = 453,592 grammes</strong> et <strong>1 once = 28,3495 grammes</strong>, soit 1 kg = environ 2,205 livres. Ces conversions sont frequemment utilisees en cuisine (recettes americaines), en sport (poids du corps en livres) et dans le commerce international pour le poids des colis.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conversions de temperature</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La temperature est la seule grandeur dont la conversion ne se reduit pas a une simple multiplication. Les trois echelles principales : <strong>Celsius</strong> (mondial), <strong>Fahrenheit</strong> (Etats-Unis), <strong>Kelvin</strong> (science). Formules : C = (F - 32) x 5/9, F = C x 9/5 + 32, K = C + 273,15. Exemple : 37 °C = 98,6 °F = 310,15 K. Le zero absolu (0 K) correspond a -273,15 °C.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Bref historique des systemes de mesure</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>systeme metrique</strong> est ne en France en 1795 pendant la Revolution, avec le metre defini comme la dix-millionieme partie du quart du meridien terrestre. Il a ete adopte progressivement par la quasi-totalite des pays. Le <strong>systeme imperial</strong> trouve ses origines dans les unites anglaises du Moyen Age. Seuls trois pays ne l'ont pas officiellement abandonne : les Etats-Unis, le Liberia et la Birmanie.
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
