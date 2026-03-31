import type { Metadata } from "next";
import CalculConsommationEssence from "./CalculConsommationEssence";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographieEssence from "@/components/infographics/InfographieEssence";

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
    images: [
      {
        url: `https://boncalcul.fr/api/og?slug=calcul-consommation-essence`,
        width: 1200,
        height: 630,
        alt: "Calcul Consommation Essence — BonCalcul.fr",
      },
    ],
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
        <CalculConsommationEssence />
        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographieEssence />
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

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur la consommation de carburant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment calculer sa consommation de carburant ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>consommation de carburant</strong> s&apos;exprime en <strong>L/100km</strong> en France et en Europe. La formule : <strong>Consommation = (Litres consommes / Distance en km) x 100</strong>. Pour un resultat fiable, faites le calcul sur un plein complet : remplissez le reservoir, notez le kilometrage, puis relevez les litres ajoutes et le compteur au plein suivant.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que le L/100km ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>litre aux 100 kilometres</strong> est l&apos;unite standard en Europe. Plus le chiffre est bas, plus le vehicule est econome. Reperes : <strong>moins de 5 L/100km</strong> (citadine diesel, hybride), <strong>5 a 7</strong> (berline diesel, citadine essence), <strong>7 a 9</strong> (berline essence, petit SUV), <strong>plus de 9</strong> (gros SUV, sportive). Les valeurs constructeur (norme WLTP) sont generalement 10 a 20 % inferieures a la consommation reelle.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conseils pour reduire sa consommation</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Conduite souple</strong> : jusqu&apos;a 20 % d&apos;economie en evitant accelerations brutales et freinages tardifs. <strong>Vitesse moderee</strong> : 110 km/h au lieu de 130 reduit la consommation de 20 %. <strong>Pression des pneus</strong> : -0,5 bar = +2,4 % de consommation. <strong>Climatisation</strong> : +10 a 15 %, a limiter en ville. <strong>Poids</strong> : 100 kg supplementaires = +5 %. <strong>Entretien</strong> : filtres, bougies et huile adaptes evitent 5 a 10 % de surconsommation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Diesel, essence ou electrique ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Comparaison pour un vehicule segment C (15 000 km/an) : <strong>Essence</strong> 7 L/100km a 1,75 &euro;/L = <strong>0,123 &euro;/km</strong> (1 838 &euro;/an). <strong>Diesel</strong> 5,5 L/100km a 1,70 &euro;/L = <strong>0,094 &euro;/km</strong> (1 403 &euro;/an). <strong>Electrique</strong> 17 kWh/100km a 0,25 &euro;/kWh = <strong>0,043 &euro;/km</strong> (638 &euro;/an). <strong>Hybride</strong> 4,5 L/100km = <strong>0,079 &euro;/km</strong>. Pensez aussi a l&apos;assurance, l&apos;entretien, la decote et les restrictions ZFE.
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
