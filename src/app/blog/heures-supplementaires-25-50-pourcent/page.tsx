// FILE: src/app/blog/heures-supplementaires-25-50-pourcent/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Heures supplémentaires : majorées à 25% ou 50% ? Ce que dit vraiment la loi",
  description:
    "Règles légales sur les heures supplémentaires en 2026 : quand s'applique la majoration à 25% ou 50%, contingent annuel de 220h, rôle des accords d'entreprise et exemples chiffrés.",
  keywords: [
    "heures supplémentaires 25%",
    "heures supplémentaires 50%",
    "majoration heures sup 2026",
    "contingent annuel heures supplémentaires",
    "calcul heures supplémentaires",
    "accord entreprise heures sup",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/heures-supplementaires-25-50-pourcent",
  },
  openGraph: {
    title: "Heures supplémentaires : 25% ou 50% ? Ce que dit vraiment la loi",
    description: "Contingent annuel, taux légaux et accords d'entreprise expliqués clairement.",
    url: "https://www.boncalcul.fr/blog/heures-supplementaires-25-50-pourcent",
    type: "article",
    locale: "fr_FR",
  },
};

export default function HeuresSupplementairesArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Heures supplémentaires : majorées à 25% ou 50% ? Ce que dit vraiment la loi",
          description: "Contingent annuel, taux légaux et accords d'entreprise expliqués clairement.",
          url: "https://www.boncalcul.fr/blog/heures-supplementaires-25-50-pourcent",
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
            Heures supplémentaires : majorées à 25% ou 50% ? Ce que dit vraiment la loi
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Romain, chef de chantier dans le bâtiment, fait régulièrement 42 ou 43 heures par semaine. Son employeur lui parle de &laquo; récup &raquo; plutôt que de majoration. Mais est-ce légal ? Et à partir de quand passe-t-on de 25 % à 50 % ? Voici ce que dit réellement le Code du travail — sans jargon.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Le principe de base : la durée légale à 35 heures</h2>
          <p>
            En France, la durée légale du travail est fixée à <strong>35 heures par semaine</strong> (article L3121-27 du Code du travail). Toute heure effectuée au-delà est une heure supplémentaire — qu&apos;elle soit demandée verbalement, par écrit ou simplement tolérée par l&apos;employeur.
          </p>
          <p>
            Attention : si votre contrat prévoit 39 heures par semaine (contrat dit &laquo; avec heures intégrées &raquo;), les 4 heures supplémentaires hebdomadaires sont rémunérées dès le départ avec leur majoration. Elles sont visibles sur votre bulletin de salaire sous la mention &laquo; heures supplémentaires structurelles &raquo;.
          </p>

          <h2>25% ou 50% : la règle légale précise</h2>
          <p>
            L&apos;article L3121-36 du Code du travail fixe les majorations par défaut (hors accord collectif) :
          </p>
          <ul>
            <li><strong>25 %</strong> pour les 8 premières heures supplémentaires de la semaine (heures 36 à 43)</li>
            <li><strong>50 %</strong> à partir de la 9e heure supplémentaire (heure 44 et au-delà)</li>
          </ul>
          <p>
            Concrètement : si vous faites 45 heures dans une semaine, les heures 36 à 43 sont à +25 % et les heures 44 et 45 sont à +50 %.
          </p>

          <h3>Un accord d&apos;entreprise peut descendre à 10 % minimum</h3>
          <p>
            C&apos;est là que beaucoup de salariés sont surpris. Un accord d&apos;entreprise ou de branche peut <strong>réduire le taux de majoration jusqu&apos;à 10 %</strong> (article L3121-33). Ce n&apos;est pas illégal en soi — c&apos;est une disposition légale. Mais s&apos;il n&apos;y a pas d&apos;accord collectif écrit dans votre entreprise, les taux de 25 % et 50 % s&apos;appliquent obligatoirement. Demandez toujours à votre RH si un accord existe.
          </p>

          <h2>Tableau récapitulatif des majorations</h2>
        </div>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Heures effectuées</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux légal (sans accord)</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux minimum avec accord</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">36e à 43e heure (8 premières HS)</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-green-700">+ 25 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">+ 10 %</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">44e heure et au-delà</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-orange-700">+ 50 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">+ 10 %</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Au-delà du contingent annuel (220h)</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-red-700">Consultation CSE obligatoire</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Contrepartie obligatoire en repos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Le contingent annuel de 220 heures : une limite à ne pas dépasser sans formalités</h2>
          <p>
            Le contingent légal est de <strong>220 heures par an et par salarié</strong> (article D3121-24). Au-delà, l&apos;employeur peut continuer à faire travailler le salarié en heures sup&apos;, mais il doit consulter le Comité Social et Économique (CSE) et accorder une <strong>contrepartie obligatoire en repos</strong> (COR) d&apos;au moins 50 % du temps dépassé (100 % dans les entreprises de plus de 20 salariés).
          </p>
          <p>
            Ce que beaucoup ignorent : un accord de branche peut modifier ce contingent à la hausse ou à la baisse. Dans le BTP, par exemple, certains accords sectoriels prévoient un contingent de 270 heures.
          </p>

          <h3>Remplacement par du repos compensateur</h3>
          <p>
            Votre employeur peut proposer de remplacer tout ou partie de la majoration en argent par du <strong>repos compensateur de remplacement</strong> (RCR). Une heure supplémentaire à +25 % peut ainsi être remplacée par 1h15 de repos. Ce remplacement nécessite un accord collectif ou, à défaut, l&apos;accord du salarié. Il ne peut pas être imposé unilatéralement.
          </p>

          <h2>Exemple chiffré : salarié au taux horaire de 14 €</h2>
          <p>
            Supposons Léa, employée administrative, payée 14 €/heure brut, qui effectue 46 heures dans une semaine (11 heures supplémentaires) :
          </p>
          <ul>
            <li>35 heures normales : 35 × 14 € = <strong>490,00 €</strong></li>
            <li>Heures 36 à 43 (8h à +25 %) : 8 × 14 × 1,25 = <strong>140,00 €</strong></li>
            <li>Heures 44 à 46 (3h à +50 %) : 3 × 14 × 1,50 = <strong>63,00 €</strong></li>
            <li><strong>Total brut semaine : 693,00 €</strong> au lieu de 644 € sans majoration</li>
          </ul>
          <p>
            Soit un gain de <strong>49 €</strong> pour cette seule semaine, exonérés d&apos;impôt sur le revenu dans la limite de 7 500 € par an (loi TEPA, reconduite en 2026).
          </p>

          <h2>L&apos;exonération fiscale et sociale des heures sup&apos; en 2026</h2>
          <p>
            C&apos;est un avantage majeur souvent mal compris : les heures supplémentaires sont <strong>exonérées d&apos;impôt sur le revenu</strong> jusqu&apos;à 7 500 € annuels, et bénéficient d&apos;une réduction des cotisations salariales de 11,31 % (dans la limite de la rémunération au SMIC). Autrement dit, une heure supplémentaire vous rapporte nettement plus qu&apos;une heure normale à revenu brut équivalent.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-heures-supplementaires"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur heures supplémentaires</p>
            <p className="text-blue-100 text-sm mt-1">25 %, 50 %, exonération fiscale incluse</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Convertisseur brut / net</p>
            <p className="text-gray-500 text-sm mt-1">Cadre et non-cadre, 2026</p>
          </Link>
        </div>
      </article>
    </>
  );
}
