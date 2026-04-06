import type { Metadata } from "next";
import SimulateurRupture from "./SimulateurRupture";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";

export const metadata: Metadata = {
  title: "Simulateur rupture conventionnelle 2026 — Calcul indemnite gratuit",
  description:
    "Calculez gratuitement votre indemnite de rupture conventionnelle 2026. Indemnite legale minimale, estimation allocation chomage ARE, duree des droits. Resultat instantane, sans inscription.",
  keywords: [
    "rupture conventionnelle",
    "indemnite rupture conventionnelle",
    "simulateur rupture conventionnelle",
    "calcul indemnite rupture conventionnelle",
    "chomage ARE rupture conventionnelle",
    "indemnite legale rupture conventionnelle",
    "rupture conventionnelle 2026",
    "allocation chomage rupture conventionnelle",
  ],
  alternates: {
    canonical:
      "https://www.boncalcul.fr/outils/simulateur-rupture-conventionnelle",
  },
  openGraph: {
    title:
      "Simulateur rupture conventionnelle 2026 — Calcul indemnite gratuit | BonCalcul.fr",
    description:
      "Calculez votre indemnite de rupture conventionnelle et votre allocation chomage ARE. Simulateur 2026 gratuit et instantane.",
    url: "https://www.boncalcul.fr/outils/simulateur-rupture-conventionnelle",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Qu'est-ce qu'une rupture conventionnelle ?",
    answer:
      "La rupture conventionnelle est un mode de rupture amiable du CDI, negocie entre le salarie et l'employeur. Creee par la loi du 25 juin 2008, elle permet de mettre fin au contrat d'un commun accord, avec le versement d'une indemnite specifique au moins egale a l'indemnite legale de licenciement. Contrairement a la demission, elle ouvre droit aux allocations chomage (ARE). La procedure est encadree : un ou plusieurs entretiens, un delai de retractation de 15 jours calendaires, puis une demande d'homologation aupres de la DREETS.",
  },
  {
    question:
      "Comment est calculee l'indemnite minimale de rupture conventionnelle ?",
    answer:
      "L'indemnite specifique de rupture conventionnelle ne peut etre inferieure a l'indemnite legale de licenciement (article L.1237-13 du Code du travail). Le calcul repose sur le salaire de reference et l'anciennete : 1/4 de mois de salaire par annee d'anciennete pour les 10 premieres annees, puis 1/3 de mois de salaire par annee au-dela de 10 ans. Les mois incomplets sont pris en compte au prorata. Exemple : pour 5 ans d'anciennete et 3 000 euros brut mensuel, l'indemnite minimale est de 3 750 euros.",
  },
  {
    question:
      "Quel est le delai de retractation et la procedure d'homologation ?",
    answer:
      "Apres la signature de la convention de rupture, chaque partie dispose d'un delai de retractation de 15 jours calendaires. Passe ce delai, la partie la plus diligente adresse une demande d'homologation a la DREETS (ex-Direccte). L'administration dispose alors de 15 jours ouvrables pour verifier la liberte du consentement et le respect de l'indemnite minimale. L'absence de reponse dans ce delai vaut homologation. Au total, la procedure dure au minimum 30 a 45 jours entre le premier entretien et la fin effective du contrat.",
  },
  {
    question:
      "A-t-on droit au chomage apres une rupture conventionnelle ?",
    answer:
      "Oui, c'est l'un des principaux avantages de la rupture conventionnelle. Le salarie beneficie des allocations chomage (ARE) dans les memes conditions qu'un licenciement. Il faut toutefois remplir les conditions generales : avoir travaille au moins 6 mois au cours des 24 derniers mois, s'inscrire a France Travail (ex-Pole Emploi) et rechercher activement un emploi. Un delai de carence s'applique : 7 jours + indemnite compensatrice de conges payes + differe specifique lie a l'indemnite supra-legale.",
  },
  {
    question:
      "Quelle est la fiscalite de l'indemnite de rupture conventionnelle ?",
    answer:
      "L'indemnite de rupture conventionnelle beneficie d'un regime fiscal avantageux. La fraction correspondant a l'indemnite legale ou conventionnelle est exoneree d'impot sur le revenu. Au-dela, l'exoneration est plafonnee au plus avantageux entre 2 fois la remuneration annuelle brute de l'annee precedente ou 50 % du montant total, dans la limite de 6 PASS (environ 278 208 euros en 2026). Un forfait social de 20 % est du par l'employeur sur la part exoneree de cotisations sociales. Depuis le 1er septembre 2023, ce forfait social est passe a 30 % pour les salaries en droit de faire valoir une pension de retraite.",
  },
];

export default function PageSimulateurRuptureConventionnelle() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur rupture conventionnelle 2026",
          description:
            "Calculez gratuitement votre indemnite de rupture conventionnelle et votre allocation chomage ARE. Simulateur 2026.",
          url: "https://www.boncalcul.fr/outils/simulateur-rupture-conventionnelle",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur{" "}
            <span className="text-blue-600">rupture conventionnelle</span> 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez votre indemnite de rupture conventionnelle et estimez vos
            allocations chomage ARE en quelques secondes. Gratuit, sans
            inscription.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <SimulateurRupture />
        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="simulateur-rupture-conventionnelle" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la rupture conventionnelle
          </h2>
          <div className="space-y-3">
            {faqQuestions.map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9660;
                  </span>
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
          Tout savoir sur la rupture conventionnelle en 2026
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              La rupture conventionnelle en 2026
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>rupture conventionnelle</strong> reste en 2026 le mode
              de rupture amiable le plus utilise en France, avec plus de 500 000
              conventions homologuees chaque annee. Elle permet au salarie en CDI
              de quitter son entreprise d&apos;un commun accord tout en
              conservant ses <strong>droits au chomage</strong>. Depuis sa
              creation en 2008, les regles sont restees stables : entretien(s),
              signature, <strong>delai de retractation de 15 jours</strong>, puis
              homologation par la DREETS. Le principal changement recent concerne
              le <strong>forfait social</strong>, passe a 30 % pour les salaries
              en age de faire valoir leurs droits a la retraite.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              L&apos;indemnite legale minimale
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;indemnite specifique de rupture conventionnelle ne peut etre
              inferieure a l&apos;<strong>indemnite legale de licenciement</strong>{" "}
              (art. L.1237-13 du Code du travail). Le calcul repose sur le{" "}
              <strong>salaire de reference</strong> : <strong>1/4 de mois</strong>{" "}
              par annee d&apos;anciennete pour les 10 premieres annees, puis{" "}
              <strong>1/3 de mois</strong> au-dela. Les mois incomplets sont pris
              en compte au prorata. Pour un salarie a 3 000 &euro; brut avec 5
              ans d&apos;anciennete, le minimum est de{" "}
              <strong>3 750 &euro;</strong>. Ce plancher est non negociable a la
              baisse.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              La procedure etape par etape
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>1. Entretien(s) :</strong> au moins un entretien entre le
              salarie et l&apos;employeur. Le salarie peut se faire assister par
              un collegue ou un conseiller.{" "}
              <strong>2. Signature :</strong> la convention de rupture est signee
              par les deux parties, fixant la date de fin et le montant de
              l&apos;indemnite.{" "}
              <strong>3. Retractation :</strong> chaque partie dispose de 15
              jours calendaires pour se retracter par courrier.{" "}
              <strong>4. Homologation :</strong> la demande est envoyee a la
              DREETS qui dispose de 15 jours ouvrables pour repondre. Le silence
              vaut acceptation. Comptez au minimum <strong>30 a 45 jours</strong>{" "}
              entre le premier entretien et la fin effective du contrat.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              Les droits au chomage (ARE)
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La rupture conventionnelle ouvre droit a l&apos;
              <strong>allocation de retour a l&apos;emploi (ARE)</strong> dans
              les memes conditions qu&apos;un licenciement. Le montant
              journalier est calcule a partir du{" "}
              <strong>salaire journalier de reference (SJR)</strong> : le plus
              eleve entre 40,4 % du SJR + 12,95 &euro; et 57 % du SJR. La duree
              d&apos;indemnisation correspond a la duree d&apos;emploi, plafonnee
              a <strong>24 mois</strong> (moins de 53 ans),{" "}
              <strong>27 mois</strong> (53-54 ans) ou{" "}
              <strong>30 mois</strong> (55 ans et plus). Un delai de carence
              s&apos;applique avant le premier versement.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              La fiscalite de l&apos;indemnite
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;indemnite de rupture conventionnelle beneficie d&apos;un{" "}
              <strong>regime fiscal avantageux</strong>. La fraction
              correspondant a l&apos;indemnite legale ou conventionnelle est{" "}
              <strong>totalement exoneree d&apos;impot</strong> sur le revenu.
              Au-dela, l&apos;exoneration est plafonnee au plus avantageux entre
              2 fois la remuneration annuelle brute ou 50 % du montant total,
              dans la limite de <strong>6 PASS</strong> (environ 278 208 &euro;
              en 2026). Cote employeur, un{" "}
              <strong>forfait social de 20 %</strong> s&apos;applique sur la part
              exoneree de cotisations (30 % si le salarie peut liquider sa
              retraite).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              Negocier au-dela du minimum legal
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              En pratique, la majorite des ruptures conventionnelles sont
              negociees <strong>au-dessus du minimum legal</strong>. L&apos;
              <strong>indemnite supra-legale</strong> peut atteindre 1 a 3 mois
              de salaire supplementaires selon le contexte : anciennete
              importante, difficulte a retrouver un emploi, volonte de
              l&apos;employeur d&apos;eviter un contentieux. Pour negocier
              efficacement, preparez vos arguments (anciennete, competences
              rares, projets en cours), connaissez votre convention collective et
              n&apos;hesitez pas a prendre le temps de la reflexion pendant le{" "}
              <strong>delai de retractation</strong>.
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
