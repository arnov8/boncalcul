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

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <h2>Comprendre l&apos;indemnite de licenciement en France</h2>
          <p>
            L&apos;indemnite de licenciement est une somme versee par
            l&apos;employeur au salarie dont le contrat de travail a duree
            indeterminee (CDI) est rompu. Elle vise a compenser la perte
            d&apos;emploi et a reconnaitre l&apos;anciennete du salarie dans
            l&apos;entreprise. Tout salarie licencie ayant au moins 8 mois
            d&apos;anciennete y a droit, sauf en cas de faute grave ou lourde.
          </p>

          <h3>Qui a droit a l&apos;indemnite legale de licenciement ?</h3>
          <p>
            Pour beneficier de l&apos;indemnite legale de licenciement, le
            salarie doit remplir deux conditions cumulatives :
          </p>
          <ul>
            <li>
              <strong>Etre en CDI</strong> : les salaries en CDD ne sont pas
              concernes par l&apos;indemnite de licenciement (ils percoivent une
              indemnite de precarite a la fin de leur contrat).
            </li>
            <li>
              <strong>Justifier d&apos;au moins 8 mois d&apos;anciennete</strong>{" "}
              ininterrompue au service du meme employeur. Cette duree
              s&apos;apprecie a la date d&apos;envoi de la lettre de
              licenciement.
            </li>
          </ul>
          <p>
            <strong>Attention</strong> : le salarie licencie pour faute grave ou
            faute lourde perd son droit a l&apos;indemnite legale de
            licenciement. En revanche, un licenciement pour motif personnel
            (insuffisance professionnelle, inaptitude) ou economique ouvre droit
            a cette indemnite.
          </p>

          <h3>Comment calculer l&apos;indemnite legale de licenciement ?</h3>
          <p>
            Le calcul de l&apos;indemnite legale de licenciement repose sur deux
            elements : le <strong>salaire de reference</strong> et
            l&apos;<strong>anciennete</strong> du salarie. La formule, fixee par
            l&apos;article R.1234-2 du Code du travail, est la suivante :
          </p>
          <ul>
            <li>
              <strong>1/4 de mois de salaire</strong> par annee d&apos;anciennete
              pour les 10 premieres annees.
            </li>
            <li>
              <strong>1/3 de mois de salaire</strong> par annee d&apos;anciennete
              au-dela de 10 ans.
            </li>
          </ul>
          <p>
            Le salaire de reference est le montant le plus avantageux entre la
            moyenne mensuelle des 12 derniers mois et le tiers de la
            remuneration des 3 derniers mois. Les primes exceptionnelles, le 13e
            mois et les gratifications sont inclus au prorata.
          </p>

          <h3>Exemple concret de calcul</h3>
          <p>
            Prenons l&apos;exemple d&apos;un salarie avec 15 ans
            d&apos;anciennete et un salaire de reference de 3 000 euros brut :
          </p>
          <ul>
            <li>
              <strong>Pour les 10 premieres annees</strong> : 3 000 &times; 1/4
              &times; 10 = 7 500 euros.
            </li>
            <li>
              <strong>Pour les 5 annees suivantes</strong> : 3 000 &times; 1/3
              &times; 5 = 5 000 euros.
            </li>
            <li>
              <strong>Indemnite totale</strong> : 7 500 + 5 000 ={" "}
              <strong>12 500 euros brut</strong>.
            </li>
          </ul>

          <h3>Indemnite legale vs indemnite conventionnelle</h3>
          <p>
            La plupart des conventions collectives prevoient des indemnites de
            licenciement plus favorables que le minimum legal. C&apos;est le cas
            notamment dans la metallurgie, la banque, le commerce de gros ou
            encore le secteur des telecoms. L&apos;employeur est tenu de verser
            l&apos;indemnite la plus avantageuse pour le salarie. Notre
            calculateur estime l&apos;indemnite legale ; pensez a verifier
            votre convention collective pour connaitre vos droits exacts.
          </p>

          <h3>Regime fiscal et social de l&apos;indemnite de licenciement</h3>
          <p>
            L&apos;indemnite de licenciement beneficie d&apos;un regime fiscal
            et social avantageux :
          </p>
          <ul>
            <li>
              <strong>Exoneration d&apos;impot sur le revenu</strong> : la
              fraction de l&apos;indemnite correspondant au montant legal ou
              conventionnel est totalement exoneree. Au-dela, l&apos;exoneration
              est plafonnee au plus avantageux entre 2 fois la remuneration
              annuelle brute ou 50% de l&apos;indemnite, dans la limite de 6
              PASS (environ 278 208 euros en 2026).
            </li>
            <li>
              <strong>Exoneration de cotisations sociales</strong> : dans les
              memes limites, l&apos;indemnite est exoneree de cotisations
              sociales. La CSG-CRDS s&apos;applique uniquement sur la fraction
              excedant le montant legal ou conventionnel.
            </li>
          </ul>

          <h3>La rupture conventionnelle : memes regles de calcul</h3>
          <p>
            La rupture conventionnelle permet a l&apos;employeur et au salarie
            de mettre fin au CDI d&apos;un commun accord. L&apos;indemnite
            specifique de rupture conventionnelle ne peut etre inferieure a
            l&apos;indemnite legale de licenciement. En pratique, elle est
            souvent negociee a la hausse. Le salarie beneficie egalement du
            droit aux allocations chomage, ce qui constitue l&apos;un des
            principaux avantages de ce mode de rupture.
          </p>

          <h3>Cas particuliers a connaitre</h3>
          <ul>
            <li>
              <strong>Temps partiel</strong> : si le salarie a travaille a temps
              partiel pendant une partie de sa carriere, l&apos;indemnite est
              calculee proportionnellement aux periodes a temps plein et a temps
              partiel.
            </li>
            <li>
              <strong>Anciennete incomplete</strong> : les annees incompletes
              sont prises en compte au prorata. Par exemple, 7 ans et 6 mois
              d&apos;anciennete comptent pour 7,5 annees.
            </li>
            <li>
              <strong>Inaptitude d&apos;origine professionnelle</strong> : en
              cas de licenciement pour inaptitude consecutive a un accident du
              travail ou une maladie professionnelle, l&apos;indemnite est
              doublee.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Questions frequentes sur l&apos;indemnite de licenciement
        </h2>
        <div className="space-y-4">
          {faqQuestions.map((q, i) => (
            <details
              key={i}
              className="bg-white rounded-xl shadow p-5 group"
            >
              <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
                {q.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {q.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Ad before footer */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <AdBanner slot="indemnites-bottom" format="horizontal" />
      </div>
    </>
  );
}
