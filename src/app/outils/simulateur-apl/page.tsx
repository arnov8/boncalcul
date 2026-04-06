import type { Metadata } from "next";
import SimulateurAPL from "./SimulateurAPL";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Simulateur APL 2026 — Estimez votre aide au logement",
  description:
    "Calculez votre APL (Aide Personnalisee au Logement) 2026 gratuitement. Estimation du montant mensuel selon votre loyer, vos revenus et votre situation familiale. Resultat instantane, sans inscription.",
  keywords: [
    "simulateur APL",
    "aide personnalisee au logement",
    "calcul APL",
    "APL 2026",
    "aide au logement",
    "CAF APL",
    "montant APL",
    "plafond loyer APL",
    "APL location",
    "APL colocation",
  ],
  openGraph: {
    title: "Simulateur APL 2026 — Estimez votre aide au logement | BonCalcul.fr",
    description:
      "Calculez votre APL gratuitement selon votre loyer, vos revenus et votre situation. Estimation instantanee et detaillee.",
    url: "https://www.boncalcul.fr/outils/simulateur-apl",
    type: "website",
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/simulateur-apl",
  },
};

const faqQuestions = [
  {
    question: "Qui peut beneficier des APL ?",
    answer:
      "Les APL sont accessibles aux locataires, colocataires et residents en foyer dont le logement est conventionnee. Il faut etre de nationalite francaise ou disposer d'un titre de sejour valide, et occuper le logement a titre de residence principale. Les revenus du foyer doivent etre inferieurs a certains plafonds fixes par la CAF, variables selon la composition familiale et la zone geographique.",
  },
  {
    question: "Comment sont calculees les APL ?",
    answer:
      "Les APL sont calculees en fonction du loyer (dans la limite d'un plafond selon la zone), des charges forfaitaires, des revenus du foyer et de la composition familiale. La CAF applique un taux d'effort progressif sur les revenus pour determiner la participation personnelle du locataire. L'APL correspond a la difference entre le loyer de reference (loyer plafonne + charges) et cette participation personnelle.",
  },
  {
    question: "Quand sont versees les APL ?",
    answer:
      "Les APL sont versees mensuellement, generalement le 5 du mois suivant. Elles peuvent etre versees directement au bailleur (tiers payant) ou au locataire. Lors de la premiere demande, un delai de traitement de 1 a 2 mois est courant, avec un versement retroactif. Les droits sont revises automatiquement chaque trimestre en fonction des revenus declares.",
  },
  {
    question: "APL et colocation : comment ca marche ?",
    answer:
      "En colocation, chaque colocataire peut faire une demande d'APL individuelle. Le loyer pris en compte est la part de loyer de chaque colocataire (loyer total divise par le nombre de colocataires). Les plafonds de loyer applicables sont ceux d'une personne seule pour chaque colocataire. Les revenus pris en compte sont uniquement ceux du colocataire demandeur (et de son eventuel conjoint).",
  },
  {
    question: "Qu'est-ce que la reforme APL en temps reel ?",
    answer:
      "Depuis janvier 2021, les APL sont calculees en temps reel, c'est-a-dire sur la base des revenus des 12 derniers mois glissants et non plus sur les revenus d'il y a deux ans (N-2). Cette reforme permet un ajustement plus rapide du montant de l'aide en cas de changement de situation (perte d'emploi, augmentation de salaire, etc.). Les droits sont recalcules automatiquement chaque trimestre.",
  },
];

export default function PageSimulateurAPL() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur APL 2026",
          description:
            "Calculez votre APL (Aide Personnalisee au Logement) gratuitement. Estimation du montant mensuel selon votre loyer, vos revenus et votre situation familiale.",
          url: "https://www.boncalcul.fr/outils/simulateur-apl",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur APL 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez instantanement le montant de votre Aide Personnalisee au
            Logement selon votre loyer, vos revenus et votre situation
            familiale. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <SimulateurAPL />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur les APL
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
          Tout savoir sur l&apos;APL en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que l&apos;APL ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>Aide Personnalisee au Logement (APL)</strong> est une aide financiere versee par la <strong>CAF</strong> ou la MSA pour reduire le montant du loyer ou de la mensualite d&apos;emprunt immobilier. Elle est destinee aux locataires, colocataires ou residents en foyer occupant un <strong>logement conventionne</strong>. L&apos;APL est la plus repandue des aides au logement en France, beneficiant a plus de <strong>6 millions de menages</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les conditions d&apos;attribution</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour beneficier de l&apos;APL, le logement doit etre <strong>conventionne</strong> (accord entre le bailleur et l&apos;Etat). Le demandeur doit y resider a titre de <strong>residence principale</strong> (au moins 8 mois par an). Les ressources du foyer sont evaluees sur les <strong>12 derniers mois glissants</strong> depuis la reforme de 2021. Il n&apos;y a pas de condition d&apos;age minimum, les etudiants et les jeunes actifs peuvent en beneficier.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le calcul des APL en 2026</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le calcul des APL repose sur une formule prenant en compte le <strong>loyer plafonne</strong> selon la zone geographique, les <strong>charges forfaitaires</strong>, les <strong>revenus du foyer</strong> et la <strong>composition familiale</strong>. La participation personnelle du locataire est calculee avec un taux d&apos;effort progressif. L&apos;APL correspond a la difference entre le loyer de reference et cette participation. Un seuil minimum de <strong>15 &euro;</strong> s&apos;applique : en dessous, l&apos;aide n&apos;est pas versee.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">APL accession vs APL location</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>APL location</strong> concerne les locataires d&apos;un logement conventionne et represente la grande majorite des beneficiaires. L&apos;<strong>APL accession</strong>, destinee aux proprietaires remboursant un pret immobilier, a ete <strong>supprimee en 2020</strong> pour les nouveaux demandeurs dans le cadre de la reforme des aides au logement. Seuls les beneficiaires anterieurs a cette date continuent de la percevoir jusqu&apos;a la fin de leur pret.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les plafonds de loyer</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les plafonds de loyer varient selon la <strong>zone geographique</strong> (zone 1 : Paris et communes limitrophes, zone 2 : agglomerations de plus de 100 000 habitants, zone 3 : reste de la France) et la <strong>composition du foyer</strong>. En zone 1, le plafond pour une personne seule est de <strong>319,87 &euro;</strong>, contre <strong>260,82 &euro;</strong> en zone 3. Ces plafonds sont revalorises chaque annee et determinent le montant maximum de loyer pris en compte dans le calcul.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment faire sa demande CAF</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La demande d&apos;APL se fait en ligne sur <strong>caf.fr</strong> ou via l&apos;application mobile Mon Compte CAF. Il faut fournir une <strong>attestation de loyer</strong> remplie par le bailleur, un <strong>RIB</strong>, une piece d&apos;identite et les informations sur les revenus du foyer. Le traitement prend generalement <strong>1 a 2 mois</strong>. L&apos;aide est versee retroactivement a compter du mois suivant l&apos;entree dans le logement, dans la limite de 3 mois de retard.
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
