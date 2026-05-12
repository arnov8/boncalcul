// FILE: src/app/blog/rupture-conventionnelle-2026-indemnite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Rupture conventionnelle 2026 : calculer son indemnité et négocier intelligemment",
  description:
    "Formule légale de calcul de l'indemnité de rupture conventionnelle 2026, différence avec le licenciement, droits au chômage, délai de carence et tactiques de négociation.",
  keywords: [
    "rupture conventionnelle 2026",
    "indemnité rupture conventionnelle calcul",
    "négocier rupture conventionnelle",
    "délai de carence chômage rupture conventionnelle",
    "droits ARE rupture conventionnelle",
    "formulaire rupture conventionnelle",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/rupture-conventionnelle-2026-indemnite",
  },
  openGraph: {
    title: "Rupture conventionnelle 2026 : calcul de l'indemnité et conseils de négociation",
    description: "Formule légale, droits chômage, délai de carence et tactiques pour négocier plus.",
    url: "https://www.boncalcul.fr/blog/rupture-conventionnelle-2026-indemnite",
    type: "article",
    locale: "fr_FR",
  },
};

export default function RuptureConventionnelleArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Rupture conventionnelle 2026 : calculer son indemnité et négocier intelligemment",
          description: "Formule légale, droits chômage, délai de carence et tactiques pour négocier plus.",
          url: "https://www.boncalcul.fr/blog/rupture-conventionnelle-2026-indemnite",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Emploi</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rupture conventionnelle 2026 : comment calculer son indemnité et négocier intelligemment
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            La rupture conventionnelle est aujourd&apos;hui le mode de séparation le plus utilisé en France : plus de 500 000 conventions signées en 2025. Mais beaucoup de salariés négocient sans connaître le plancher légal, les règles de chômage ou les marges de manœuvre réelles. Voici tout ce qu&apos;il faut savoir avant de signer.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>La formule légale de calcul de l&apos;indemnité</h2>
          <p>
            L&apos;indemnité spécifique de rupture conventionnelle (ISRC) ne peut pas être inférieure à l&apos;indemnité légale de licenciement, fixée par l&apos;article R1234-2 du Code du travail. La formule est la suivante :
          </p>
          <ul>
            <li><strong>1/4 de mois de salaire par année d&apos;ancienneté</strong> pour les 10 premières années</li>
            <li><strong>1/3 de mois de salaire par année d&apos;ancienneté</strong> au-delà de 10 ans</li>
          </ul>
          <p>
            Le salaire de référence retenu est le plus favorable entre : la moyenne des 12 derniers mois ou la moyenne des 3 derniers mois (en annualisant les primes versées sur 12 mois). En clair : si vous avez reçu une prime exceptionnelle sur l&apos;un de ces 3 mois, elle entre dans le calcul au prorata.
          </p>

          <h3>Exemple chiffré</h3>
          <p>
            Caroline, 8 ans d&apos;ancienneté, salaire mensuel brut moyen sur 12 mois : 3 200 €.
          </p>
          <ul>
            <li>Plancher légal : 3 200 × (1/4) × 8 = <strong>6 400 € brut</strong></li>
          </ul>
          <p>
            Si son employeur lui propose 5 000 €, c&apos;est illégal. Elle peut refuser et signaler à la DREETS (ancienne DIRECCTE) lors de l&apos;homologation par la DDETS.
          </p>

          <h2>Fiscalité de l&apos;indemnité : bonne nouvelle pour 2026</h2>
          <p>
            L&apos;indemnité de rupture conventionnelle est <strong>exonérée d&apos;impôt sur le revenu</strong> dans la limite de 2 fois le plafond annuel de la Sécurité Sociale (soit 2 × 46 368 € = 92 736 € en 2026). En dessous de ce plafond, pas un centime d&apos;impôt.
          </p>
          <p>
            En revanche, elle supporte une <strong>contribution patronale forfaitaire de 30 %</strong> (CSA — contribution spécifique de l&apos;employeur), versée directement à l&apos;URSSAF. Ce n&apos;est pas votre charge : c&apos;est payé par l&apos;employeur en plus de l&apos;indemnité.
          </p>

          <h2>Tableau : rupture conventionnelle vs licenciement</h2>
        </div>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Critère</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Rupture conventionnelle</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Licenciement économique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Indemnité minimum</td>
                <td className="border border-gray-200 px-4 py-2 text-center">= indemnité légale licenciement</td>
                <td className="border border-gray-200 px-4 py-2 text-center">= indemnité légale licenciement</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Droits au chômage (ARE)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Délai de carence ARE</td>
                <td className="border border-gray-200 px-4 py-2 text-center">7 jours + délai spécifique</td>
                <td className="border border-gray-200 px-4 py-2 text-center">7 jours uniquement</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Préavis</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Aucun (date négociée)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Obligatoire (sauf dispense payée)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Homologation requise</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (DDETS, 15 jours ouvrables)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Non (procédure différente)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Exonération impôt</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (jusqu&apos;à 2 PASS = 92 736 €)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (montants variables)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Le délai de carence ARE : comment il est calculé</h2>
          <p>
            Après une rupture conventionnelle, France Travail applique un délai avant le versement des allocations chômage. Il se compose de :
          </p>
          <ul>
            <li><strong>7 jours de carence</strong> incompressibles (valable pour toutes les ruptures)</li>
            <li><strong>Un délai de franchise lié aux indemnités supra-légales</strong> : si vous avez négocié plus que le plancher légal, la partie excédentaire est divisée par le salaire journalier de référence pour obtenir des jours supplémentaires de carence (plafonné à 150 jours)</li>
            <li><strong>Le différé d&apos;indemnisation lié aux congés payés</strong> non pris (si applicable)</li>
          </ul>
          <p>
            Concrètement : si vous négociez une indemnité supra-légale de 5 000 € et que votre salaire journalier de référence est 100 €, vous aurez 50 jours supplémentaires de carence. Dans ce cas, toucher plus à la signature coûte du temps sans chômage.
          </p>

          <h2>Comment négocier intelligemment</h2>
          <p>
            Ce qu&apos;on oublie souvent : l&apos;employeur a tout autant intérêt que vous à signer une rupture conventionnelle. Elle lui évite le risque d&apos;un contentieux prud&apos;homal et la procédure contraignante du licenciement. Voici les leviers à actionner :
          </p>
          <ul>
            <li><strong>Vérifiez d&apos;abord le plancher légal</strong> — ne signez rien avant d&apos;avoir calculé votre minimum.</li>
            <li><strong>Négociez la date de sortie</strong> plutôt qu&apos;uniquement le montant : partir en fin de mois ou après une prime permet de maximiser le solde de tout compte.</li>
            <li><strong>Demandez la prise en charge des congés payés non pris</strong> : ils doivent être payés de toute façon, mais les faire apparaître dans le solde de tout compte (non dans l&apos;indemnité) réduit le délai de carence ARE.</li>
            <li><strong>Évaluez l&apos;impact fiscal</strong> : si vous négociez 15 000 € d&apos;indemnité supra-légale, c&apos;est exonéré d&apos;IR mais ça génère 50 jours de carence supplémentaires. Pesez les deux.</li>
            <li><strong>Délai de rétractation</strong> : 15 jours calendaires après la signature pour changer d&apos;avis, côté salarié comme côté employeur (article L1237-19-1).</li>
          </ul>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-rupture-conventionnelle"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur rupture conventionnelle</p>
            <p className="text-blue-100 text-sm mt-1">Calcul de l&apos;indemnité légale et du délai de carence</p>
          </Link>
          <Link
            href="/outils/simulateur-chomage-are"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Simulateur chômage ARE 2026</p>
            <p className="text-gray-500 text-sm mt-1">Montant et durée de vos allocations</p>
          </Link>
        </div>
      </article>
    </>
  );
}
