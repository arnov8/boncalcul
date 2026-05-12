// FILE: src/app/blog/impot-revenu-2026-decote-payer-moins/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Impôt sur le revenu 2026 : tranches, décote et cas où on paie moins qu'on croit",
  description:
    "Décote, abattement 10%, quotient familial : découvrez pourquoi beaucoup de foyers paient 0€ d'impôt en 2026 malgré un revenu non nul. Exemples concrets et simulateur.",
  keywords: [
    "décote impôt 2026",
    "impôt revenu 2026",
    "tranches imposition",
    "quotient familial",
    "abattement 10%",
    "simulateur impôt",
    "ne pas payer impôt",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/impot-revenu-2026-decote-payer-moins" },
  openGraph: {
    title: "Impôt 2026 : décote et cas où on paie moins qu'on croit",
    description: "Pourquoi des millions de foyers ne paient aucun impôt malgré un revenu correct ? La décote, l'abattement et le QF expliqués simplement.",
    url: "https://www.boncalcul.fr/blog/impot-revenu-2026-decote-payer-moins",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleDecoteImpot2026() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Impôt sur le revenu 2026 : tranches, décote et cas où on paie moins qu'on croit",
          description:
            "Décote, abattement 10%, quotient familial : pourquoi beaucoup de foyers paient 0€ d'impôt en 2026 malgré un revenu non nul.",
          url: "https://www.boncalcul.fr/blog/impot-revenu-2026-decote-payer-moins",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Fiscalité</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Impôt sur le revenu 2026 : tranches, décote et cas où on paie moins qu&apos;on croit
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            On croit souvent que dès qu&apos;on travaille, on paye de l&apos;impôt. C&apos;est faux. En 2026,
            près de la moitié des foyers fiscaux français ne paient aucun impôt sur le revenu — et
            certains avec des revenus confortables. La décote, l&apos;abattement de 10% et le quotient
            familial sont les trois mécanismes qui expliquent ce que votre avis d&apos;imposition ne
            détaille jamais clairement.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Le barème 2026 : rappel des tranches (revenus 2025)</h2>
          <p>
            Le barème progressif s&apos;applique sur le <strong>revenu net imposable</strong>, c&apos;est-à-dire
            après abattement. Chaque euro n&apos;est taxé qu&apos;au taux de la tranche dans laquelle il tombe.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Revenu imposable par part</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Jusqu&apos;à 11 497 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-medium text-green-700">0%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">De 11 497 € à 29 315 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-medium">11%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">De 29 315 € à 83 823 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-medium">30%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">De 83 823 € à 180 294 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-medium">41%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Au-delà de 180 294 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-medium text-red-700">45%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Concrètement, si vous avez un revenu net imposable de 30 000 € par part, vous êtes taxé
            à 0% jusqu&apos;à 11 497 €, à 11% de 11 497 € à 29 315 €, puis à 30% sur les 685 € restants.
            Votre <strong>taux marginal</strong> est de 30% mais votre <strong>taux moyen</strong>
            réel n&apos;est que d&apos;environ 9%. Nuance capitale que beaucoup ignorent.
          </p>

          <h2>L&apos;abattement de 10% : la réduction automatique que tout salarié oublie</h2>
          <p>
            Avant même d&apos;appliquer le barème, le fisc réduit automatiquement vos salaires de
            <strong> 10% au titre des frais professionnels</strong>, dans une fourchette de 495 € minimum
            à 14 426 € maximum. Vous n&apos;avez rien à demander : c&apos;est automatique pour tous les salariés.
          </p>
          <p>
            Thomas gagne 35 000 € bruts. Son net imposable après abattement de 10% est de
            <strong> 31 500 €</strong> (35 000 × 0,90). Ce n&apos;est pas son salaire brut qui entre dans
            le barème, c&apos;est 31 500 €. Sur 20 ans de carrière, cette seule règle représente des
            dizaines de milliers d&apos;euros d&apos;impôt non payés.
          </p>
          <p>
            Si vos frais professionnels réels dépassent 10% de vos salaires (gros kilométrage,
            double résidence...), vous pouvez opter pour les <strong>frais réels</strong> et déduire
            le montant exact. C&apos;est avantageux dès que vos frais dépassent le plafond automatique.
          </p>

          <h2>La décote : le mécanisme qui efface l&apos;impôt des petits revenus</h2>
          <p>
            C&apos;est le grand méconnu du système fiscal français. La décote est une réduction
            supplémentaire d&apos;impôt qui s&apos;applique <strong>après</strong> le calcul du barème, quand
            l&apos;impôt brut reste faible. En 2026, les seuils sont :
          </p>
          <ul>
            <li><strong>Personne seule</strong> : décote si l&apos;impôt brut est inférieur à 1 929 €</li>
            <li><strong>Couple (déclaration commune)</strong> : décote si l&apos;impôt brut est inférieur à 3 191 €</li>
          </ul>
          <p>
            La formule est : <em>décote = 833 − (0,4525 × impôt brut)</em> pour un célibataire.
            En pratique, cela signifie que si votre impôt brut calculé par le barème est de 600 €,
            vous bénéficiez d&apos;une décote de 561 €, et vous ne payez que 39 €. Et si votre impôt
            brut est inférieur à 833 €, la décote peut l&apos;effacer entièrement.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Revenu net annuel (célibataire)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Impôt brut barème</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Décote</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Impôt final</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">15 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">385 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">659 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">0 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">20 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">950 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">403 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">547 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">25 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">153 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">1 347 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">30 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">2 150 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">0 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">2 150 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Le quotient familial : un couple avec 2 enfants peut ne rien payer à 50 000 € bruts</h2>
          <p>
            Le <strong>quotient familial</strong> est le mécanisme le plus puissant. L&apos;impôt est calculé
            non pas sur le revenu total mais sur le revenu divisé par le nombre de parts. Chaque enfant
            à charge ajoute une demi-part (1 part à partir du 3ème).
          </p>
          <p>
            Prenons un exemple surprenant : Isabelle et Marc, en couple, deux enfants. Revenus bruts
            combinés : 50 000 €. Après abattement 10%, leur revenu net imposable est de 45 000 €.
            Ils ont <strong>3 parts</strong> (1 + 1 + 0,5 + 0,5). Le calcul se fait sur 45 000 / 3 =
            <strong> 15 000 € par part</strong>. À ce niveau, l&apos;impôt barème est quasi nul et la décote
            efface le reste. Résultat : <strong>0 € d&apos;impôt</strong> sur 50 000 € de revenus bruts.
          </p>
          <p>
            La valeur de chaque demi-part est plafonnée à <strong>1 759 € de réduction d&apos;impôt</strong>
            en 2026 — ce plafond évite que les très hauts revenus bénéficient d&apos;un avantage trop
            important par enfant.
          </p>

          <h2>Réductions vs crédits d&apos;impôt : ne confondez pas</h2>
          <p>
            Après le calcul du barème et de la décote, il reste deux types d&apos;avantages fiscaux que
            beaucoup confondent :
          </p>
          <ul>
            <li>
              <strong>Réduction d&apos;impôt</strong> : elle diminue votre impôt dû, mais si elle dépasse
              votre impôt, l&apos;excédent est perdu. Exemples : don aux associations (66% du montant),
              investissement Sofica, certains dispositifs d&apos;épargne retraite.
            </li>
            <li>
              <strong>Crédit d&apos;impôt</strong> : lui, il est remboursé si votre impôt est nul ou trop
              faible. Exemples : frais de garde d&apos;enfants (50% dans la limite de 1 150 € par enfant),
              emploi à domicile (50% des dépenses dans la limite de 12 000 €), formation du dirigeant.
            </li>
          </ul>
          <p>
            Concrètement : si vous payez 200 € d&apos;impôt et que vous avez un crédit d&apos;impôt garde
            d&apos;enfant de 500 €, le fisc vous rembourse 300 €. Avec une réduction, l&apos;excédent de 300 €
            est perdu.
          </p>

          <div className="not-prose my-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p className="font-semibold text-amber-800 mb-2">En résumé : les 4 filtres avant l&apos;impôt</p>
            <ol className="text-amber-900 text-sm space-y-1 list-decimal list-inside">
              <li>Abattement 10% sur salaires (automatique)</li>
              <li>Division par le quotient familial (parts fiscales)</li>
              <li>Application du barème progressif par tranche</li>
              <li>Décote si l&apos;impôt brut reste faible</li>
            </ol>
          </div>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-impot-revenu"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur d&apos;impôt sur le revenu</p>
            <p className="text-blue-100 text-sm mt-1">Calculez votre impôt 2026 en tenant compte de la décote et du QF</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Salaire brut → net</p>
            <p className="text-gray-500 text-sm mt-1">Connaissez votre revenu net avant impôt</p>
          </Link>
        </div>
      </article>
    </>
  );
}
