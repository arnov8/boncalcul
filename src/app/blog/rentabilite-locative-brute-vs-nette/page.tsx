// FILE: src/app/blog/rentabilite-locative-brute-vs-nette/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Rentabilité locative brute vs nette : le vrai calcul que peu d'investisseurs font",
  description:
    "Formule brute vs nette vs nette-nette, charges déductibles, taxe foncière, vacance locative et comparatif micro-foncier vs régime réel. Exemple T2 à 150 000 € loué 700 €/mois.",
  keywords: [
    "rentabilité locative",
    "rendement locatif brut net",
    "calcul rentabilité locative",
    "micro-foncier régime réel",
    "investissement locatif 2026",
    "charges déductibles location",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/rentabilite-locative-brute-vs-nette",
  },
  openGraph: {
    title: "Rentabilité locative brute vs nette : le vrai calcul",
    description:
      "Tout comprendre sur la rentabilité locative réelle : charges, vacance, fiscalité. Exemple complet sur un T2 à 150 000 €.",
    url: "https://www.boncalcul.fr/blog/rentabilite-locative-brute-vs-nette",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleRentabiliteLocative() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Rentabilité locative brute vs nette : le vrai calcul que peu d'investisseurs font",
          description:
            "Formule brute vs nette vs nette-nette, charges, vacance locative et régimes fiscaux. Exemple T2 à 150 000 €.",
          url: "https://www.boncalcul.fr/blog/rentabilite-locative-brute-vs-nette",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <span>/</span>
            <span>Immobilier</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Rentabilité locative brute vs nette : le vrai calcul que peu
            d'investisseurs font
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un investisseur annonce fièrement "7% de rendement". Mais une fois
            les charges, la vacance locative et l'impôt déduits, combien reste-t-il
            vraiment ? La rentabilité nette-nette est souvent 40% inférieure à
            la rentabilité brute. Voici comment calculer correctement.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>9 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>Les trois niveaux de rentabilité</h2>

          <h3>Rentabilité brute : la vitrine</h3>
          <p>
            C'est le calcul le plus simple et le plus affiché par les vendeurs
            de biens d'investissement :
          </p>
          <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-4 font-mono text-sm text-gray-700">
            <p>Rentabilité brute = (Loyer annuel ÷ Prix d'achat total) × 100</p>
          </div>
          <p>
            Le "prix d'achat total" doit inclure les frais de notaire et les
            éventuels travaux. Beaucoup d'annonces oublient les frais de
            notaire, ce qui gonfle artificiellement le rendement affiché.
          </p>

          <h3>Rentabilité nette de charges : la réalité opérationnelle</h3>
          <p>
            On déduit toutes les charges non récupérables sur le locataire :
          </p>
          <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-4 font-mono text-sm text-gray-700">
            <p>Rentabilité nette = ((Loyers annuels − Charges) ÷ Prix d'achat total) × 100</p>
          </div>

          <h3>Rentabilité nette-nette : ce que vous gardez vraiment</h3>
          <p>
            On ajoute l'impôt foncier au calcul. C'est le seul indicateur
            vraiment comparable entre investisseurs, mais aussi le plus rarement
            calculé avant l'achat.
          </p>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>Exemple complet : T2 à 150 000 € loué 700 €/mois</h2>
          <p>
            Sophie achète un T2 à Clermont-Ferrand pour <strong>150 000 €</strong>{" "}
            (frais de notaire inclus : 160 500 €). Elle le loue nu à{" "}
            <strong>700 €/mois</strong>. Ses revenus fonciers annuels : 8 400 €.
          </p>

          <h3>Les charges annuelles à déduire</h3>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Charge
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Montant estimé/an
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Remarque
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Taxe foncière</td>
                  <td className="border border-gray-200 px-4 py-2">900 €</td>
                  <td className="border border-gray-200 px-4 py-2">À la charge du propriétaire</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Charges de copropriété non récupérables</td>
                  <td className="border border-gray-200 px-4 py-2">600 €</td>
                  <td className="border border-gray-200 px-4 py-2">Gros travaux, entretien parties communes</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Assurance PNO</td>
                  <td className="border border-gray-200 px-4 py-2">150 €</td>
                  <td className="border border-gray-200 px-4 py-2">Propriétaire non occupant, obligatoire en copro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Gestion locative (agence)</td>
                  <td className="border border-gray-200 px-4 py-2">756 €</td>
                  <td className="border border-gray-200 px-4 py-2">~9% des loyers (optionnel)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Vacance locative (~1 mois/an)</td>
                  <td className="border border-gray-200 px-4 py-2">700 €</td>
                  <td className="border border-gray-200 px-4 py-2">Provision prudente mais réaliste</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Petits travaux / entretien</td>
                  <td className="border border-gray-200 px-4 py-2">400 €</td>
                  <td className="border border-gray-200 px-4 py-2">Provision annuelle</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Total charges</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold">3 506 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-500">42% des loyers bruts !</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Loyers nets de charges = 8 400 − 3 506 = <strong>4 894 €</strong>.
            Rentabilité nette de charges = (4 894 ÷ 160 500) × 100 ={" "}
            <strong>3,05%</strong> — contre 5,23% brut en apparence.
          </p>

          <h2>L'impact de la fiscalité : micro-foncier vs régime réel</h2>
          <p>
            Les revenus fonciers sont imposés à la tranche marginale d'imposition
            du propriétaire + 17,2% de prélèvements sociaux. Deux régimes
            fiscaux s'opposent :
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Critère
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Micro-foncier
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Régime réel
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Conditions</td>
                  <td className="border border-gray-200 px-4 py-2">Revenus fonciers bruts &lt; 15 000 €/an</td>
                  <td className="border border-gray-200 px-4 py-2">Au choix, ou obligatoire si &gt; 15 000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Abattement/déduction</td>
                  <td className="border border-gray-200 px-4 py-2">Abattement forfaitaire 30%</td>
                  <td className="border border-gray-200 px-4 py-2">Charges réelles déductibles (+ intérêts d'emprunt)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Base imposable (Sophie)</td>
                  <td className="border border-gray-200 px-4 py-2">8 400 × 70% = 5 880 €</td>
                  <td className="border border-gray-200 px-4 py-2">8 400 − 3 506 = 4 894 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Impôt (TMI 30% + PS 17,2%)</td>
                  <td className="border border-gray-200 px-4 py-2">5 880 × 47,2% = 2 775 €</td>
                  <td className="border border-gray-200 px-4 py-2">4 894 × 47,2% = 2 310 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Revenu net après impôt</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold">2 119 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold text-green-600">2 584 €/an</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Pour Sophie, le <strong>régime réel est plus avantageux</strong>
            car ses charges réelles (41,7% des loyers) dépassent l'abattement
            forfaitaire de 30% du micro-foncier. Mais ce n'est pas toujours le
            cas : si vos charges sont faibles (pas d'agence, pas de gros
            travaux), le micro-foncier peut être préférable.
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-1">Le cas LMNP</p>
            <p className="text-amber-700 text-sm">
              Pour la location meublée, le régime LMNP (micro-BIC ou réel) est
              distinct et souvent plus favorable. Le régime réel LMNP permet
              d'amortir le bien et les travaux, ce qui peut rendre le revenu
              locatif quasiment non imposable pendant 10-15 ans.
            </p>
          </div>

          <h2>Rentabilité nette-nette de Sophie : le bilan final</h2>
          <p>
            Avec le régime réel, Sophie génère <strong>2 584 €/an</strong> nets
            après impôt sur un investissement de 160 500 €. Sa rentabilité
            nette-nette est de <strong>1,61%</strong> — contre 5,23% brut.
          </p>
          <p>
            Ce résultat peut sembler décevant, mais il ne prend pas en compte
            la valorisation du bien, l'effet de levier du crédit, et
            l'enrichissement patrimonial. C'est pourquoi l'investissement
            locatif ne se juge pas sur le seul rendement locatif.
          </p>
        </div>

        <AdBanner slot="blog-mid2" format="auto" className="my-8" />

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-rentabilite-locative"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer ma rentabilité locative
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Brute, nette et nette-nette avec simulation fiscale incluse
            </p>
          </Link>
          <Link
            href="/outils/simulateur-pret-immobilier"
            className="flex-1 block bg-white border-2 border-blue-200 text-blue-700 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Simulateur de prêt immobilier
            </p>
            <p className="text-blue-400 text-sm mt-1">
              Intégrez le coût du crédit dans votre calcul de rentabilité
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Articles liés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/plus-value-immobiliere-abattement-detention"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Plus-value immobilière et abattement détention
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Comment la durée de détention réduit (ou annule) l'impôt à la
                revente.
              </p>
            </Link>
            <Link
              href="/blog/pret-immobilier-2026-mensualite-cout-total"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Coût total d'un prêt immobilier en 2026
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Calculer l'effort réel d'un investissement financé à crédit.
              </p>
            </Link>
          </div>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />
      </article>
    </>
  );
}
