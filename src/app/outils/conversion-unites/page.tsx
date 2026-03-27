import type { Metadata } from "next";
import ConversionUnites from "./ConversionUnites";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

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
    url: "https://boncalcul.fr/outils/conversion-unites",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/conversion-unites",
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
          url: "https://boncalcul.fr/outils/conversion-unites",
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
        <AdBanner slot="unites-top" format="horizontal" className="mb-8" />

        <ConversionUnites />

        <AdBanner slot="unites-mid" format="auto" className="mt-8" />
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

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu'est-ce que la conversion d'unites ?</h2>
          <p>
            La <strong>conversion d'unites</strong> consiste a exprimer une
            meme grandeur physique dans une unite differente. Par exemple,
            1 kilometre equivaut a 1 000 metres, ou encore 1 kilogramme
            correspond a 2,205 livres. Cette operation est indispensable des
            que l'on travaille avec des donnees provenant de systemes de
            mesure differents, que ce soit en cuisine, en science, en
            ingenierie ou dans la vie courante.
          </p>
          <p>
            Notre convertisseur couvre six grandes categories de grandeurs
            physiques : la longueur, la masse, le volume, la temperature,
            la surface et la vitesse. Chaque conversion est calculee
            instantanement dans votre navigateur, sans aucun envoi de
            donnees a un serveur externe.
          </p>

          <h2>Les principaux systemes d'unites</h2>
          <p>
            Le monde utilise principalement deux grands systemes de mesure.
            Le <strong>Systeme international d'unites (SI)</strong>, aussi
            appele systeme metrique, est le standard adopte par la
            quasi-totalite des pays. Il repose sur des unites de base comme
            le metre (longueur), le kilogramme (masse), le litre (volume)
            et le degre Celsius (temperature). Sa force reside dans sa
            coherence : toutes les unites derivent les unes des autres par
            des puissances de 10.
          </p>
          <p>
            Le <strong>systeme imperial</strong> (ou systeme anglo-saxon)
            est encore utilise au quotidien aux Etats-Unis et, partiellement,
            au Royaume-Uni. Il emploie des unites comme le pouce, le pied,
            le yard, le mile, la livre, l'once et le gallon. Les facteurs
            de conversion entre unites imperiales ne suivent pas de logique
            decimale : 1 pied = 12 pouces, 1 yard = 3 pieds, 1 mile =
            1 760 yards.
          </p>

          <h2>Conversions de longueur les plus courantes</h2>
          <p>
            Les conversions de longueur sont parmi les plus recherchees. Le
            rapport fondamental est : <strong>1 pouce = 2,54 cm</strong>
            {" "}(definition exacte depuis 1959). A partir de cette valeur,
            on peut deriver toutes les autres conversions : 1 pied = 30,48 cm,
            1 yard = 91,44 cm, 1 mile = 1,609344 km. Dans l'autre sens,
            1 metre = 3,281 pieds et 1 kilometre = 0,6214 miles.
          </p>
          <p>
            Ces conversions sont utiles pour interpreter les tailles en
            pouces (ecrans, vetements americains), les distances sur une
            carte anglo-saxonne, ou les specifications techniques de
            produits importes.
          </p>

          <h2>Conversions de masse et de poids</h2>
          <p>
            Le kilogramme est l'unite de base du systeme metrique pour la
            masse. Dans le systeme imperial, les unites courantes sont
            l'once (oz) et la livre (lb). Les rapports cles sont :{" "}
            <strong>1 livre = 453,592 grammes</strong> et{" "}
            <strong>1 once = 28,3495 grammes</strong>. Ainsi, 1 kg equivaut
            a environ 2,205 livres.
          </p>
          <p>
            Ces conversions sont frequemment utilisees en cuisine
            (recettes americaines), en sport (poids du corps en livres), et
            dans le commerce international (poids d'un colis en livres ou
            en kilogrammes).
          </p>

          <h2>Conversions de temperature</h2>
          <p>
            La temperature est la seule grandeur dont la conversion ne se
            reduit pas a une simple multiplication. Les trois echelles
            principales sont le <strong>degre Celsius</strong> (utilise dans
            la majorite du monde), le <strong>degre Fahrenheit</strong>{" "}
            (utilise aux Etats-Unis) et le <strong>Kelvin</strong> (echelle
            absolue utilisee en science).
          </p>
          <p>
            Les formules de conversion sont : C = (F - 32) x 5/9, F = C x
            9/5 + 32, et K = C + 273,15. Par exemple, la temperature du
            corps humain est d'environ 37 °C = 98,6 °F = 310,15 K. Le
            zero absolu (0 K) correspond a -273,15 °C.
          </p>

          <h2>Bref historique des systemes de mesure</h2>
          <p>
            Le systeme metrique est ne en France pendant la Revolution
            francaise, en 1795. L'objectif etait de creer un systeme
            universel base sur des grandeurs naturelles : le metre etait
            defini comme la dix-millionieme partie du quart du meridien
            terrestre. Ce systeme a ete progressivement adopte par la
            plupart des pays au cours des XIXe et XXe siecles.
          </p>
          <p>
            Le systeme imperial trouve ses origines dans les unites de
            mesure anglaises du Moyen Age, elles-memes heritees des
            systemes romain et germanique. Malgre sa complexite (12 pouces
            dans un pied, 3 pieds dans un yard, 5 280 pieds dans un mile),
            il reste fermement ancre dans la culture americaine. Seuls trois
            pays n'ont pas officiellement adopte le systeme metrique :
            les Etats-Unis, le Liberia et la Birmanie.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="unites-bottom" format="horizontal" />
      </div>
    </>
  );
}
