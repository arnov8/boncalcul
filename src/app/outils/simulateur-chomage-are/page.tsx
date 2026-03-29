import type { Metadata } from "next";
import SimulateurChomage from "./SimulateurChomage";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Simulateur allocation chomage ARE 2026 — Calcul gratuit et instantane",
  description:
    "Calculez votre allocation chomage (ARE) 2026 gratuitement. Salaire journalier de reference, montant journalier et mensuel, duree d'indemnisation. Resultat instantane, sans inscription.",
  keywords: [
    "simulateur chomage",
    "calcul ARE",
    "allocation chomage",
    "allocation retour emploi",
    "indemnite chomage",
    "salaire journalier de reference",
    "duree indemnisation chomage",
    "France Travail",
    "Pole Emploi calcul",
    "chomage 2026",
  ],
  openGraph: {
    title: "Simulateur allocation chomage ARE 2026 — Calcul gratuit | BonCalcul.fr",
    description:
      "Calculez votre allocation chomage ARE avec le SJR, le montant journalier et mensuel, et la duree d'indemnisation. Gratuit et instantane.",
    url: "https://boncalcul.fr/outils/simulateur-chomage-are",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/simulateur-chomage-are",
  },
};

const faqQuestions = [
  {
    question: "Comment est calculee l'allocation chomage (ARE) en France ?",
    answer:
      "L'ARE est calculee a partir du salaire journalier de reference (SJR), obtenu en divisant le total des salaires bruts des 24 derniers mois par le nombre de jours calendaires de la periode de reference. L'allocation journaliere correspond au montant le plus eleve entre 40,4 % du SJR + 12,95 euros et 57 % du SJR, dans la limite de 75 % du SJR. Le montant minimum est de 31,59 euros par jour.",
  },
  {
    question: "Quelle est la duree d'indemnisation du chomage ?",
    answer:
      "La duree d'indemnisation depend de la duree d'emploi et de l'age du demandeur. Pour les moins de 53 ans, elle correspond a la duree travaillee avec un minimum de 6 mois et un maximum de 24 mois. Pour les 53-54 ans, le maximum est de 30 mois. Pour les 55 ans et plus, le maximum est de 36 mois.",
  },
  {
    question: "Quelles sont les conditions pour toucher le chomage ?",
    answer:
      "Pour percevoir l'ARE, il faut avoir travaille au minimum 6 mois (130 jours ou 910 heures) au cours des 24 derniers mois (ou 36 mois pour les 53 ans et plus). Il faut egalement etre inscrit a France Travail comme demandeur d'emploi, rechercher activement un emploi et ne pas avoir quitte volontairement son emploi (sauf cas de demission legitime).",
  },
  {
    question: "Le chomage est-il imposable ?",
    answer:
      "Oui, les allocations chomage sont soumises a l'impot sur le revenu. Elles sont egalement soumises a la CSG (6,2 %) et a la CRDS (0,5 %), sauf si le prelevement de ces contributions fait passer l'allocation en dessous du minimum de 31,59 euros par jour. Le prelevement a la source s'applique sur l'ARE comme sur les salaires.",
  },
  {
    question: "Les resultats de ce simulateur sont-ils fiables ?",
    answer:
      "Ce simulateur utilise les regles de calcul de l'ARE en vigueur en 2026 conformes a la reglementation de l'assurance chomage. Les calculs sont effectues integralement dans votre navigateur, aucune donnee n'est transmise a nos serveurs. Les resultats sont indicatifs et ne tiennent pas compte de certaines situations particulieres (temps partiel, cumul emploi-chomage, rechargement de droits). Pour un calcul officiel, consultez France Travail.",
  },
];

export default function PageSimulateurChomage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur allocation chomage ARE 2026",
          description:
            "Calculez votre allocation chomage ARE gratuitement. Salaire journalier de reference, montant journalier et mensuel, duree d'indemnisation.",
          url: "https://boncalcul.fr/outils/simulateur-chomage-are",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur d&apos;allocation chomage (ARE) 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez instantanement le montant et la duree de votre allocation
            chomage ARE a partir de votre salaire brut et de votre duree
            d&apos;emploi. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <SimulateurChomage />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;allocation chomage ARE
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
          Comprendre l&apos;allocation chomage en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que l&apos;ARE ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>Allocation de Retour a l&apos;Emploi (ARE)</strong> est le principal revenu de remplacement verse aux demandeurs d&apos;emploi en France. Elle est financee par les cotisations des employeurs et des salaries a l&apos;assurance chomage. Pour en beneficier, il faut avoir travaille au moins <strong>6 mois</strong> au cours des 24 derniers mois et etre inscrit aupres de <strong>France Travail</strong> (ex-Pole Emploi).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le salaire journalier de reference (SJR)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>SJR</strong> est la base de calcul de l&apos;ARE. Il est obtenu en divisant le total des <strong>salaires bruts</strong> perçus pendant la periode de reference (24 mois maximum) par le nombre de <strong>jours calendaires</strong> de cette periode (30,42 jours par mois). Plus vos salaires ont ete eleves, plus votre SJR sera important, et donc plus votre allocation sera elevee.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Calcul du montant de l&apos;ARE</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;allocation journaliere est calculee selon deux formules : <strong>40,4 % du SJR + 12,95 &euro;</strong> ou <strong>57 % du SJR</strong>. Le montant le plus favorable est retenu, dans la limite de <strong>75 % du SJR</strong>. Un minimum de <strong>31,59 &euro; par jour</strong> est garanti. L&apos;ARE mensuelle correspond a l&apos;allocation journaliere multipliee par le nombre de jours du mois.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Duree d&apos;indemnisation et degressivite</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La duree d&apos;indemnisation correspond a la <strong>duree d&apos;emploi</strong>, avec un minimum de 6 mois. Le plafond varie selon l&apos;age : <strong>24 mois</strong> pour les moins de 53 ans, <strong>30 mois</strong> pour les 53-54 ans, <strong>36 mois</strong> pour les 55 ans et plus. Depuis 2023, une <strong>degressivite de 30 %</strong> s&apos;applique apres 6 mois pour les allocataires de moins de 57 ans dont le SJR depasse un certain seuil.
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
