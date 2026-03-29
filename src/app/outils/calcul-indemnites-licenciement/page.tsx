import type { Metadata } from "next";
import CalculIndemnites from "./CalculIndemnites";
import { AdBanner } from "@/lib/adsense";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul indemnité licenciement 2026 — Simulateur gratuit",
  description:
    "Calculez votre indemnité de licenciement ou de rupture conventionnelle en quelques clics. Indemnité légale 2026, ancienneté, salaire de référence. Gratuit et sans inscription.",
  keywords: [
    "calcul indemnité licenciement",
    "indemnité de licenciement",
    "indemnité légale de licenciement",
    "rupture conventionnelle indemnité",
    "simulateur licenciement",
    "calcul indemnité rupture conventionnelle",
    "indemnité licenciement ancienneté",
    "indemnité licenciement 2026",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-indemnites-licenciement",
  },
  openGraph: {
    title: "Calcul indemnité licenciement 2026 — Simulateur gratuit | BonCalcul.fr",
    description:
      "Calculez votre indemnité légale de licenciement ou de rupture conventionnelle. Simulateur 2026 gratuit.",
    url: "https://boncalcul.fr/outils/calcul-indemnites-licenciement",
    type: "website",
  },
};

const faqQuestions = [
  {
    question:
      "Quelle est la difference entre l'indemnite legale et l'indemnite conventionnelle de licenciement ?",
    answer:
      "L'indemnite legale de licenciement est le minimum prevu par le Code du travail. L'indemnite conventionnelle est celle prevue par votre convention collective. L'employeur doit vous verser la plus favorable des deux. Certaines conventions collectives (metallurgie, banque, syntec...) prevoient des indemnites nettement superieures au minimum legal, notamment pour les cadres avec une forte anciennete.",
  },
  {
    question:
      "Comment est calcule le salaire de reference pour l'indemnite de licenciement ?",
    answer:
      "Le salaire de reference est le montant le plus avantageux entre deux calculs : la moyenne des 12 derniers mois de salaire brut, ou le tiers des 3 derniers mois de salaire brut (en incluant les primes et gratifications au prorata). L'employeur doit retenir la formule la plus favorable au salarie. Les primes annuelles (13e mois, prime de vacances) sont incluses au prorata temporis.",
  },
  {
    question:
      "A partir de quelle anciennete a-t-on droit a une indemnite de licenciement ?",
    answer:
      "Depuis les ordonnances Macron de septembre 2017, le droit a l'indemnite legale de licenciement est ouvert des 8 mois d'anciennete ininterrompue chez le meme employeur (contre 1 an auparavant). Cette condition s'apprecie a la date d'envoi de la lettre de licenciement. En cas de rupture conventionnelle, la meme condition de 8 mois d'anciennete s'applique.",
  },
  {
    question:
      "L'indemnite de licenciement est-elle imposable ?",
    answer:
      "L'indemnite legale ou conventionnelle de licenciement est totalement exoneree d'impot sur le revenu dans la limite du montant prevu par la loi ou la convention collective. Au-dela, la fraction excedentaire est exoneree dans la limite la plus avantageuse entre : 2 fois la remuneration annuelle brute de l'annee precedente, ou 50% du montant total de l'indemnite, le tout plafonne a 6 fois le plafond annuel de la Securite sociale (soit environ 278 208 euros en 2026).",
  },
  {
    question:
      "L'indemnite de rupture conventionnelle est-elle calculee de la meme facon ?",
    answer:
      "Oui. L'indemnite de rupture conventionnelle ne peut pas etre inferieure a l'indemnite legale de licenciement. Le calcul est donc identique : 1/4 de mois de salaire par annee d'anciennete pour les 10 premieres annees, puis 1/3 de mois par annee au-dela. En pratique, dans le cadre d'une rupture conventionnelle, il est courant de negocier une indemnite superieure au minimum legal, souvent appelee indemnite supra-legale.",
  },
];

export default function PageIndemnitesLicenciement() {
  const appJsonLd = webApplicationJsonLd({
    name: "Calculateur indemnite de licenciement 2026",
    description:
      "Outil gratuit pour calculer votre indemnite legale de licenciement ou de rupture conventionnelle. Estimation basee sur votre salaire et votre anciennete.",
    url: "https://boncalcul.fr/outils/calcul-indemnites-licenciement",
  });

  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul{" "}
            <span className="text-blue-600">indemnite de licenciement</span>{" "}
            2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estimez votre indemnite legale de licenciement ou de rupture
            conventionnelle en quelques secondes. Saisissez votre salaire et
            votre anciennete pour obtenir un calcul detaille.
          </p>
        </div>
      </section>

      {/* Ad before tool */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdBanner slot="indemnites-top" format="horizontal" className="mb-6" />
      </div>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CalculIndemnites />
      </section>

      {/* Ad after results */}
      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="indemnites-mid" format="auto" className="my-8" />
      </div>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;indemnite de licenciement
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

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur l&apos;indemnite de licenciement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comprendre l&apos;indemnite de licenciement</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>indemnite de licenciement</strong> est versee par l&apos;employeur au salarie en CDI dont le contrat est rompu. Elle compense la perte d&apos;emploi et reconnait l&apos;anciennete. Pour y avoir droit, il faut <strong>etre en CDI</strong> et justifier d&apos;au moins <strong>8 mois d&apos;anciennete</strong> ininterrompue (depuis les ordonnances Macron 2017). <strong>Attention</strong> : le licenciement pour faute grave ou lourde supprime ce droit. Les licenciements pour motif personnel ou economique ouvrent droit a l&apos;indemnite.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Calcul de l&apos;indemnite legale</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La formule (article R.1234-2 du Code du travail) repose sur le <strong>salaire de reference</strong> et l&apos;<strong>anciennete</strong> : <strong>1/4 de mois de salaire</strong> par annee pour les 10 premieres annees, puis <strong>1/3 de mois</strong> par annee au-dela. Le salaire de reference est le plus avantageux entre la moyenne des 12 derniers mois et le tiers des 3 derniers mois (primes incluses au prorata). Exemple : 15 ans d&apos;anciennete, 3 000 euros brut = 7 500 + 5 000 = <strong>12 500 euros</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Indemnite legale vs conventionnelle</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La plupart des <strong>conventions collectives</strong> prevoient des indemnites plus favorables que le minimum legal, notamment dans la metallurgie, la banque, le commerce de gros et les telecoms. L&apos;employeur doit verser l&apos;indemnite la plus avantageuse pour le salarie. Notre calculateur estime l&apos;indemnite legale ; pensez a verifier votre convention collective pour connaitre vos droits exacts.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Regime fiscal et social</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;indemnite beneficie d&apos;un regime avantageux. <strong>Exoneration d&apos;impot sur le revenu</strong> : la fraction legale ou conventionnelle est totalement exoneree. Au-dela, l&apos;exoneration est plafonnee au plus avantageux entre 2 fois la remuneration annuelle brute ou 50% de l&apos;indemnite, dans la limite de 6 PASS (environ 278 208 euros en 2026). <strong>Exoneration de cotisations sociales</strong> dans les memes limites ; la CSG-CRDS ne s&apos;applique que sur la fraction excedentaire.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">La rupture conventionnelle</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>rupture conventionnelle</strong> permet de mettre fin au CDI d&apos;un commun accord. L&apos;indemnite specifique ne peut etre inferieure a l&apos;<strong>indemnite legale de licenciement</strong> (meme formule de calcul). En pratique, elle est souvent negociee a la hausse (indemnite supra-legale). Le salarie beneficie egalement du droit aux <strong>allocations chomage</strong>, un avantage majeur de ce mode de rupture.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Cas particuliers a connaitre</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Temps partiel :</strong> l&apos;indemnite est calculee proportionnellement aux periodes a temps plein et a temps partiel. <strong>Anciennete incomplete :</strong> les annees incompletes sont prises en compte au prorata (ex. 7 ans et 6 mois = 7,5 annees). <strong>Inaptitude professionnelle :</strong> en cas de licenciement pour inaptitude consecutive a un accident du travail ou une maladie professionnelle, l&apos;indemnite est <strong>doublee</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Ad before footer */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <AdBanner slot="indemnites-bottom" format="horizontal" />
      </div>
    </>
  );
}
