import type { Metadata } from "next";
import CoutKmVoiture from "./CoutKmVoiture";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Cout au kilometre voiture — Calculateur gratuit",
  description:
    "Calculez le cout reel au kilometre de votre voiture : carburant, assurance, entretien, decote, controle technique. Simulateur gratuit et complet.",
  keywords: [
    "cout km voiture",
    "cout au kilometre",
    "prix de revient voiture",
    "cout reel voiture",
    "budget voiture",
    "cout entretien voiture",
    "cout carburant km",
    "amortissement voiture",
    "calcul cout voiture",
    "prix kilometre voiture",
  ],
  openGraph: {
    title: "Cout au kilometre voiture — Calculateur gratuit | BonCalcul.fr",
    description:
      "Calculez le cout reel au kilometre de votre voiture en incluant tous les postes de depenses : carburant, assurance, entretien, decote et controle technique.",
    url: "https://boncalcul.fr/outils/cout-km-voiture",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/cout-km-voiture",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer le cout au kilometre de ma voiture ?",
    answer:
      "Pour calculer le cout reel au kilometre, additionnez toutes les depenses annuelles liees a votre vehicule (carburant, assurance, entretien, decote, controle technique) puis divisez le total par le nombre de kilometres parcourus dans l'annee. Par exemple, pour 6 000 € de frais annuels et 15 000 km parcourus : 6 000 / 15 000 = 0,40 € par kilometre.",
  },
  {
    question: "Quel est le cout moyen au kilometre d'une voiture en France ?",
    answer:
      "En France, le cout moyen au kilometre d'une voiture se situe entre 0,30 € et 0,60 € selon le type de vehicule, son age et le kilometrage annuel. Une citadine recente coute environ 0,30 a 0,40 €/km, tandis qu'un SUV ou une berline haut de gamme peut depasser 0,50 €/km. L'Automobile Club Association (ACA) publie chaque annee un bareme de reference.",
  },
  {
    question: "Quels postes de depenses inclure dans le calcul du cout au km ?",
    answer:
      "Un calcul complet doit inclure : le carburant (ou l'electricite), l'assurance auto, l'entretien courant (vidange, pneus, freins, filtres), le controle technique, la decote du vehicule (perte de valeur annuelle), et eventuellement le stationnement, le peage et le financement (credit auto). Le carburant et la decote sont generalement les deux postes les plus importants.",
  },
  {
    question: "La voiture est-elle plus chere que les transports en commun ?",
    answer:
      "Dans la plupart des cas, oui. Un abonnement Navigo en Ile-de-France coute environ 86 € par mois (soit environ 1 030 € par an), alors que le cout annuel d'une voiture depasse souvent 4 000 a 6 000 €. Cependant, en zone rurale ou l'offre de transports en commun est limitee, la voiture reste souvent indispensable. Le covoiturage et l'autopartage permettent de reduire significativement le cout au kilometre.",
  },
  {
    question: "Les calculs de cout au kilometre sont-ils fiables sur BonCalcul.fr ?",
    answer:
      "Notre simulateur utilise les formules de calcul standard et vous permet de personnaliser chaque poste de depense selon votre situation reelle. Les calculs sont effectues integralement dans votre navigateur, aucune donnee n'est envoyee a nos serveurs. Les resultats sont indicatifs et donnent une estimation realiste de votre budget automobile.",
  },
];

export default function PageCoutKmVoiture() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Cout au kilometre voiture — Calculateur gratuit",
          description:
            "Calculez le cout reel au kilometre de votre voiture : carburant, assurance, entretien, decote, controle technique. Simulateur gratuit et complet.",
          url: "https://boncalcul.fr/outils/cout-km-voiture",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Cout au kilometre voiture
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez le cout reel de chaque kilometre parcouru en incluant
            carburant, assurance, entretien, decote et controle technique.
            Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CoutKmVoiture />
        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le cout au kilometre
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
          Comprendre le cout reel au kilometre de votre voiture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que le cout reel au kilometre ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>cout au kilometre</strong> englobe l&apos;ensemble des frais lies a un vehicule : carburant, assurance, entretien, <strong>decote</strong>, controle technique, stationnement et peages. Selon l&apos;Automobile Club Association, le cout moyen annuel depasse 6 000 euros pour un vehicule de gamme moyenne parcourant 15 000 km/an, soit <strong>0,35 a 0,50 &euro;/km</strong> selon le modele et la motorisation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les principaux postes de depenses</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Carburant</strong> : 20 a 30 % du cout total. A 7 L/100km et 1,75 &euro;/L, comptez 0,12 &euro;/km soit ~1 838 &euro;/an. <strong>Assurance</strong> : obligatoire, entre 400 et 900 &euro;/an selon le profil et les garanties. <strong>Entretien</strong> : 800 a 1 500 &euro;/an (vidange, freins, pneus), +30 % apres 8 ans. <strong>Controle technique</strong> : 70 a 90 &euro; tous les 2 ans. <strong>Decote</strong> : poste souvent le plus important, un vehicule neuf perd 20 a 25 % la premiere annee puis 10 a 15 % par la suite.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Voiture vs transports en commun</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              En milieu urbain, les transports en commun sont presque toujours plus economiques : 360 a 1 030 &euro;/an contre 4 000 a 7 000 &euro; pour une voiture. Velo, trottinette electrique et autopartage sont aussi des alternatives competitives. En zone rurale, la voiture reste souvent indispensable. Pour reduire le cout : <strong>eco-conduite</strong> (-15 %), covoiturage, vehicule adapte, entretien preventif et comparaison d&apos;assurance annuelle.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Vehicule electrique : quel cout au kilometre ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les vehicules electriques affichent un <strong>cout energetique</strong> nettement inferieur : environ 2 a 3 &euro;/100km contre 8 a 12 &euro; en thermique. L&apos;entretien est aussi reduit (pas de vidange, moins d&apos;usure des freins grace au freinage regeneratif). Cependant, le prix d&apos;achat plus eleve et la depreciation de la batterie doivent etre pris en compte. Sur la duree de vie, le cout total peut etre equivalent ou inferieur a un modele thermique comparable, surtout avec les aides a l&apos;achat.
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
