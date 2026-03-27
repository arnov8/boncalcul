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
        <AdBanner slot="coutkm-top" format="horizontal" className="mb-8" />

        <CoutKmVoiture />

        <AdBanner slot="coutkm-mid" format="auto" className="mt-8" />
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

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu'est-ce que le cout reel au kilometre ?</h2>
          <p>
            Le <strong>cout au kilometre</strong> d'une voiture ne se limite pas
            a la seule depense de carburant. Il englobe l'ensemble des frais
            lies a la possession et a l'utilisation d'un vehicule : carburant,
            assurance, entretien, decote (perte de valeur), controle technique
            et eventuellement stationnement ou peages. Connaitre ce cout reel
            permet de mieux gerer son budget et de comparer objectivement
            differentes solutions de mobilite.
          </p>
          <p>
            Selon les etudes de l'Automobile Club Association, le cout moyen
            annuel d'une voiture en France depasse 6 000 euros pour un vehicule
            de gamme moyenne parcourant 15 000 km par an. Ramenee au kilometre,
            cette somme represente entre 0,35 et 0,50 euro selon le modele, le
            type de motorisation et les habitudes de conduite.
          </p>

          <h2>Les principaux postes de depenses</h2>

          <h3>Carburant</h3>
          <p>
            Le carburant represente en moyenne 20 a 30 % du cout total d'un
            vehicule. Son impact depend de trois facteurs : la consommation
            du vehicule (exprimee en litres aux 100 km), le prix du carburant
            a la pompe et le kilometrage annuel. Une voiture consommant 7 L/100
            km avec un litre a 1,75 euro depense 0,1225 euro de carburant par
            kilometre, soit environ 1 838 euros par an pour 15 000 km.
          </p>

          <h3>Assurance automobile</h3>
          <p>
            L'assurance auto est obligatoire en France. Son cout varie
            fortement selon le profil du conducteur (age, bonus-malus,
            historique de sinistres), le type de vehicule et le niveau de
            garanties choisi. En moyenne, les Francais paient entre 400 et
            900 euros par an pour leur assurance auto. Les jeunes conducteurs
            ou les vehicules puissants sont soumis a des primes plus elevees.
          </p>

          <h3>Entretien et reparations</h3>
          <p>
            L'entretien regroupe les operations courantes (vidange, filtres,
            plaquettes de frein, pneus, batterie) et les reparations
            imprevues. Un budget annuel de 800 a 1 500 euros est realiste pour
            un vehicule de gamme moyenne. Ce poste augmente avec l'age du
            vehicule : une voiture de plus de 8 ans coute en moyenne 30 % de
            plus en entretien qu'un vehicule recent.
          </p>

          <h3>Controle technique</h3>
          <p>
            Le controle technique est obligatoire tous les deux ans pour les
            vehicules de plus de 4 ans. Son cout moyen se situe entre 70 et
            90 euros. En cas de contre-visite, des frais supplementaires
            s'ajoutent. Ramene a l'annee, ce poste reste modeste (environ 40
            euros par an) mais doit etre integre au calcul global.
          </p>

          <h3>Decote et amortissement</h3>
          <p>
            La <strong>decote</strong> est souvent le poste le plus important
            et le plus sous-estime. Un vehicule neuf perd en moyenne 20 a 25 %
            de sa valeur la premiere annee, puis environ 10 a 15 % les annees
            suivantes. Pour un vehicule achete 20 000 euros et conserve 7 ans,
            la decote annuelle moyenne est d'environ 2 857 euros, soit 0,19
            euro par kilometre pour 15 000 km annuels. Acheter un vehicule
            d'occasion permet de reduire significativement ce poste.
          </p>

          <h2>Voiture vs transports en commun : la comparaison</h2>
          <p>
            En milieu urbain, les transports en commun sont presque toujours
            plus economiques que la voiture individuelle. Un abonnement mensuel
            de transport en commun coute entre 30 et 86 euros selon les villes,
            soit 360 a 1 030 euros par an, contre 4 000 a 7 000 euros pour une
            voiture. Le velo, la trottinette electrique ou l'autopartage
            constituent egalement des alternatives competitives pour les
            deplacements quotidiens.
          </p>
          <p>
            En revanche, en zone rurale ou periurbaine, la voiture reste
            souvent indispensable faute d'alternative. Dans ce cas, quelques
            strategies permettent de reduire le cout au kilometre :
            eco-conduite (jusqu'a 15 % d'economie de carburant), covoiturage,
            choix d'un vehicule adapte a ses besoins reels, entretien
            preventif regulier et comparaison des offres d'assurance chaque
            annee.
          </p>

          <h2>Vehicule electrique : quel cout au kilometre ?</h2>
          <p>
            Les vehicules electriques affichent un cout energetique nettement
            inferieur : environ 2 a 3 euros aux 100 km contre 8 a 12 euros
            pour un vehicule thermique. L'entretien est egalement reduit (pas
            de vidange, moins d'usure des freins grace au freinage
            regeneratif). Cependant, le prix d'achat plus eleve et la
            depreciation de la batterie doivent etre pris en compte. Sur la
            duree de vie du vehicule, le cout total peut etre equivalent ou
            inferieur a celui d'un modele thermique comparable, surtout avec
            les aides a l'achat disponibles.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="coutkm-bottom" format="horizontal" />
      </div>
    </>
  );
}
