import type { Metadata } from "next";
import CalculConsommationEssence from "./CalculConsommationEssence";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul consommation essence — Calculateur gratuit",
  description:
    "Calculez votre consommation de carburant en L/100km et estimez le cout d'un trajet en essence, diesel ou electrique. Gratuit, sans inscription.",
  keywords: [
    "calcul consommation essence",
    "consommation carburant",
    "L/100km",
    "cout trajet essence",
    "consommation voiture",
    "prix carburant",
    "calculer consommation diesel",
    "cout essence trajet",
    "economie carburant",
  ],
  openGraph: {
    title: "Calcul consommation essence — Calculateur gratuit | BonCalcul.fr",
    description:
      "Calculez votre consommation en L/100km et estimez le cout d'un trajet. Comparaison essence, diesel et electrique.",
    url: "https://boncalcul.fr/outils/calcul-consommation-essence",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-consommation-essence",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer sa consommation de carburant en L/100km ?",
    answer:
      "Pour calculer votre consommation, divisez le volume de carburant consomme (en litres) par la distance parcourue (en km), puis multipliez par 100. Par exemple, si vous avez consomme 45 litres pour 600 km : (45 / 600) x 100 = 7,5 L/100km.",
  },
  {
    question: "Quelle est la consommation moyenne d'une voiture en France ?",
    answer:
      "En France, la consommation moyenne d'une voiture essence est d'environ 7 a 8 L/100km, et d'environ 5 a 6 L/100km pour un diesel. Les vehicules hybrides consomment en moyenne 4 a 5 L/100km, tandis qu'un vehicule electrique consomme environ 15 a 20 kWh/100km.",
  },
  {
    question: "Comment calculer le cout d'un trajet en voiture ?",
    answer:
      "Multipliez la distance du trajet (en km) par votre consommation (en L/100km), puis divisez par 100 pour obtenir le nombre de litres necessaires. Multipliez ensuite par le prix au litre. Exemple : 300 km x 7 L/100km / 100 = 21 litres, soit 21 x 1,75 € = 36,75 €.",
  },
  {
    question: "Essence ou diesel : lequel consomme le moins ?",
    answer:
      "Un moteur diesel consomme en moyenne 15 a 20 % de moins qu'un moteur essence equivalent. Cependant, le prix du diesel est desormais proche de celui de l'essence. L'avantage economique du diesel se retrouve principalement sur les gros rouleurs (plus de 20 000 km/an).",
  },
  {
    question: "Quels sont les facteurs qui influencent la consommation ?",
    answer:
      "Les principaux facteurs sont : le style de conduite (conduite agressive = +20 a 40 %), la vitesse (130 km/h consomme environ 20 % de plus que 110 km/h), le poids du vehicule et son chargement, la pression des pneus, l'utilisation de la climatisation (+10 a 15 %), et le type de trajet (ville vs autoroute).",
  },
];

export default function PageCalculConsommationEssence() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul consommation essence — Calculateur gratuit",
          description:
            "Calculez votre consommation de carburant en L/100km et estimez le cout d'un trajet en essence, diesel ou electrique.",
          url: "https://boncalcul.fr/outils/calcul-consommation-essence",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de consommation d&apos;essence
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez votre consommation en L/100km ou estimez le cout d&apos;un
            trajet en quelques clics. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <AdBanner slot="essence-top" format="horizontal" className="mb-8" />

        <CalculConsommationEssence />

        <AdBanner slot="essence-mid" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la consommation de carburant
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
          <h2>Comment calculer sa consommation de carburant ?</h2>
          <p>
            La <strong>consommation de carburant</strong> s&apos;exprime en
            litres pour 100 kilometres (L/100km) en France et dans la plupart
            des pays europeens. Cette unite permet de comparer facilement
            l&apos;efficacite energetique de differents vehicules, quel que soit
            leur type de motorisation.
          </p>
          <p>
            La formule est simple : <strong>Consommation (L/100km) =
            (Volume de carburant en litres / Distance en km) x 100</strong>.
            Pour obtenir un resultat fiable, il est recommande de faire le calcul
            sur un plein complet : remplissez votre reservoir, notez le
            kilometrage, roulez normalement, puis lors du prochain plein,
            relevez le nombre de litres ajoutes et la nouvelle valeur du
            compteur.
          </p>

          <h2>Qu&apos;est-ce que le L/100km ?</h2>
          <p>
            Le <strong>litre aux 100 kilometres</strong> est l&apos;unite de
            mesure standard de la consommation en Europe. Plus le chiffre est
            bas, plus le vehicule est econome. A titre de repere :
          </p>
          <ul>
            <li>
              <strong>Moins de 5 L/100km</strong> : vehicule tres econome
              (petite citadine diesel, hybride)
            </li>
            <li>
              <strong>5 a 7 L/100km</strong> : consommation moderee
              (berline diesel, citadine essence recente)
            </li>
            <li>
              <strong>7 a 9 L/100km</strong> : consommation moyenne
              (berline essence, petit SUV)
            </li>
            <li>
              <strong>Plus de 9 L/100km</strong> : consommation elevee
              (gros SUV, vehicule ancien, sportive)
            </li>
          </ul>
          <p>
            Attention : les valeurs annoncees par les constructeurs (norme WLTP)
            sont mesurees en laboratoire et sont generalement 10 a 20 %
            inferieures a la consommation reelle en conditions quotidiennes.
          </p>

          <h2>Conseils pour reduire sa consommation</h2>
          <p>
            Plusieurs habitudes de conduite permettent de reduire
            significativement votre consommation de carburant et donc votre
            budget :
          </p>
          <ul>
            <li>
              <strong>Adoptez une conduite souple</strong> : evitez les
              accelerations brutales et les freinages tardifs. L&apos;eco-conduite
              peut faire economiser jusqu&apos;a 20 % de carburant.
            </li>
            <li>
              <strong>Respectez les limitations de vitesse</strong> : rouler a
              110 km/h au lieu de 130 km/h sur autoroute reduit la consommation
              d&apos;environ 20 %.
            </li>
            <li>
              <strong>Verifiez la pression des pneus</strong> : des pneus
              sous-gonfles de 0,5 bar augmentent la consommation de 2,4 % et
              s&apos;usent plus vite.
            </li>
            <li>
              <strong>Limitez la climatisation</strong> : elle augmente la
              consommation de 10 a 15 %. Preferez l&apos;aeration naturelle en
              ville et la climatisation sur autoroute (ou les vitres ouvertes
              creent une resistance aerodynamique).
            </li>
            <li>
              <strong>Allegez votre vehicule</strong> : retirez les charges
              inutiles (coffre de toit, galerie). 100 kg supplementaires
              augmentent la consommation de 5 % environ.
            </li>
            <li>
              <strong>Entretenez votre vehicule</strong> : un filtre a air
              encrasse, des bougies usees ou une huile moteur inadaptee peuvent
              augmenter la consommation de 5 a 10 %.
            </li>
          </ul>

          <h2>Diesel, essence ou electrique : quelle motorisation choisir ?</h2>
          <p>
            Le choix de la motorisation a un impact direct sur le cout au
            kilometre. Voici une comparaison pour un vehicule de segment C
            (type Peugeot 308 / Renault Megane) :
          </p>
          <ul>
            <li>
              <strong>Essence</strong> : consommation moyenne de 7 L/100km a
              environ 1,75 &euro;/L, soit <strong>0,123 &euro;/km</strong>. Cout
              annuel pour 15 000 km : environ 1 838 &euro;.
            </li>
            <li>
              <strong>Diesel</strong> : consommation moyenne de 5,5 L/100km a
              environ 1,70 &euro;/L, soit <strong>0,094 &euro;/km</strong>. Cout
              annuel pour 15 000 km : environ 1 403 &euro;. Le diesel reste
              avantageux pour les gros rouleurs malgre un prix d&apos;achat plus
              eleve.
            </li>
            <li>
              <strong>Electrique</strong> : consommation moyenne de 17
              kWh/100km a environ 0,25 &euro;/kWh (tarif reglemente), soit{" "}
              <strong>0,043 &euro;/km</strong>. Cout annuel pour 15 000 km :
              environ 638 &euro;. Le vehicule electrique est le plus econome a
              l&apos;usage, mais son cout d&apos;achat reste plus eleve (aide de
              l&apos;Etat deduites).
            </li>
            <li>
              <strong>Hybride</strong> : consommation moyenne de 4,5 L/100km en
              usage mixte, soit environ <strong>0,079 &euro;/km</strong>. Un bon
              compromis si vous alternez ville et route.
            </li>
          </ul>
          <p>
            Au-dela du cout au kilometre, pensez egalement a l&apos;assurance,
            a l&apos;entretien (moins cher pour l&apos;electrique), a la
            decote, et aux eventuelles restrictions de circulation (ZFE) qui
            peuvent affecter les vehicules thermiques anciens.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="essence-bottom" format="horizontal" />
      </div>
    </>
  );
}
