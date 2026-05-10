import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Indemnités de licenciement 2026 : calcul, montant et comparaison rupture conventionnelle",
  description:
    "Comment calculer vos indemnités légales de licenciement en 2026 : formule détaillée, salaire de référence, ancienneté et différences avec la rupture conventionnelle.",
  keywords: [
    "indemnités licenciement 2026",
    "calcul indemnité licenciement",
    "rupture conventionnelle indemnité",
    "salaire référence licenciement",
    "indemnité légale licenciement",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/indemnites-licenciement-calcul-2026",
  },
  openGraph: {
    title: "Indemnités de licenciement 2026 : calcul et montant",
    description:
      "Formule légale, salaire de référence et comparaison avec la rupture conventionnelle — tout comprendre sur les indemnités de départ.",
    url: "https://www.boncalcul.fr/blog/indemnites-licenciement-calcul-2026",
    type: "article",
    locale: "fr_FR",
  },
};

export default function IndemnicesLicenciementArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Indemnités de licenciement 2026 : calcul, montant et comparaison rupture conventionnelle",
          description:
            "Formule légale, salaire de référence et différences avec la rupture conventionnelle pour les indemnités de départ en 2026.",
          url: "https://www.boncalcul.fr/blog/indemnites-licenciement-calcul-2026",
          datePublished: "2026-05-10",
          dateModified: "2026-05-10",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <span>/</span>
            <span>Emploi</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Indemnités de licenciement 2026 : comment calculer ce à quoi vous avez droit
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un licenciement, ça ne s&apos;anticipe pas toujours. Mais comprendre comment se calcule
            l&apos;indemnité légale peut vous aider à vérifier que vous recevez bien ce qui vous est
            dû — et à comparer avec ce que proposerait une rupture conventionnelle.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-10">10 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray prose-lg max-w-none">
          <h2>Les conditions pour avoir droit à l&apos;indemnité</h2>
          <p>
            Pour percevoir l&apos;indemnité légale de licenciement, il faut avoir au moins{" "}
            <strong>8 mois d&apos;ancienneté ininterrompue</strong> dans l&apos;entreprise (réforme
            de 2017). En dessous, aucune indemnité n&apos;est due — sauf dispositions plus
            favorables prévues par votre convention collective.
          </p>
          <p>
            L&apos;indemnité n&apos;est pas due en cas de licenciement pour faute grave ou lourde.
            Pour tout autre motif (économique, personnel non fautif), elle est obligatoire.
          </p>

          <h2>La formule de calcul</h2>
          <p>Depuis 2017, le barème légal est le suivant :</p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-6 font-mono text-sm leading-relaxed space-y-2">
            <p>
              Pour les 10 premières années :{" "}
              <strong>1/4 de mois de salaire par année d&apos;ancienneté</strong>
            </p>
            <p>
              Au-delà de 10 ans :{" "}
              <strong>1/3 de mois de salaire par année d&apos;ancienneté supplémentaire</strong>
            </p>
          </div>

          <p>
            Les mois ou années incomplètes sont pris en compte au prorata. Une ancienneté de
            7 ans et 4 mois compte pour 7 + (4/12) = 7,33 ans.
          </p>

          <h2>Le salaire de référence : quelle base utiliser ?</h2>
          <p>
            C&apos;est souvent là que les choses se compliquent. L&apos;employeur doit retenir le
            calcul le plus favorable entre deux méthodes :
          </p>
          <ul>
            <li>
              <strong>Méthode 1</strong> : la moyenne mensuelle des 12 derniers mois de salaire
              brut (primes et avantages en nature inclus)
            </li>
            <li>
              <strong>Méthode 2</strong> : le tiers de la rémunération brute des 3 derniers mois
              (avec proratisation des primes annuelles)
            </li>
          </ul>
          <p>
            L&apos;employeur doit calculer les deux et retenir le montant le plus élevé. En
            pratique, si vous avez des primes importantes concentrées sur l&apos;année, la méthode
            des 12 mois est souvent plus favorable. Si votre salaire a augmenté récemment, la
            méthode des 3 mois peut l&apos;être davantage.
          </p>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-blue-800 mb-2">Exemple complet</p>
            <div className="text-blue-700 text-sm space-y-1">
              <p>Sophie, licenciée après 12 ans et 6 mois d&apos;ancienneté.</p>
              <p>Salaire de référence retenu : 3 200 €/mois</p>
              <p>— 10 premières années : 10 × (3 200 / 4) = 10 × 800 = <strong>8 000 €</strong></p>
              <p>
                — 2,5 années au-delà de 10 ans : 2,5 × (3 200 / 3) = 2,5 × 1 066,67 ={" "}
                <strong>2 666,67 €</strong>
              </p>
              <p>
                <strong>Indemnité totale : 8 000 + 2 666,67 = 10 666,67 €</strong>
              </p>
            </div>
          </div>

          <h2>La convention collective peut être plus favorable</h2>
          <p>
            L&apos;indemnité légale est un plancher, pas un plafond. Votre convention collective
            peut prévoir des montants supérieurs — c&apos;est fréquent dans des secteurs comme la
            banque, les assurances, ou l&apos;industrie. Si vous n&apos;êtes pas sûr de ce que
            prévoit votre convention, consultez le site <em>legifrance.gouv.fr</em> ou demandez à
            votre employeur de vous la communiquer (c&apos;est une obligation).
          </p>

          <h2>Rupture conventionnelle : même calcul, mais négociable</h2>
          <p>
            La rupture conventionnelle (RC) est souvent présentée comme une alternative douce au
            licenciement. Côté indemnité, le minimum légal est{" "}
            <strong>identique à celui du licenciement</strong> — 1/4 de mois par an jusqu&apos;à
            10 ans, 1/3 au-delà.
          </p>
          <p>
            Mais contrairement au licenciement, l&apos;indemnité de rupture conventionnelle est
            librement négociable au-dessus du minimum légal. Si votre employeur est demandeur, vous
            pouvez obtenir davantage — c&apos;est toute la différence.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Critère
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    Licenciement
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    Rupture conventionnelle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Indemnité minimum</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Légale (barème)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Identique</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Négociation possible</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Non</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-green-700 font-semibold">Oui</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Droit au chômage</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-green-700">Oui</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-green-700">Oui</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Fiscalité de l&apos;indemnité
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    Exonérée (dans limites légales)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    Exonérée (dans limites légales)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Préavis</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Obligatoire</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Non (date libre)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>L&apos;indemnité est-elle imposable ?</h2>
          <p>
            L&apos;indemnité légale (ou conventionnelle si inférieure à certains plafonds) est
            exonérée d&apos;impôt sur le revenu et de cotisations sociales, dans la limite du plus
            élevé entre :
          </p>
          <ul>
            <li>2 fois la rémunération annuelle brute de l&apos;année précédant le licenciement</li>
            <li>50 % de l&apos;indemnité totale perçue</li>
            <li>6 fois le plafond annuel de la Sécurité sociale (soit environ 270 000 € en 2026)</li>
          </ul>
          <p>
            En pratique, pour la grande majorité des salariés, l&apos;indemnité est entièrement
            exonérée.
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-1">Attention aux délais</p>
            <p className="text-amber-700 text-sm">
              Vous avez <strong>12 mois</strong> à compter de la date de notification du
              licenciement pour contester le montant de votre indemnité devant le Conseil de
              prud&apos;hommes si vous estimez qu&apos;il est incorrect. Ne laissez pas passer ce
              délai.
            </p>
          </div>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-indemnites-licenciement"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer mes indemnités de licenciement
            </p>
            <p className="text-blue-100 text-sm mt-1">Résultat en quelques secondes</p>
          </Link>
          <Link
            href="/outils/simulateur-rupture-conventionnelle"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
              Simuler ma rupture conventionnelle
            </p>
            <p className="text-gray-500 text-sm mt-1">Indemnité minimale et optimisation</p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Articles liés</h2>
          <ul>
            <li>
              <Link href="/blog/allocation-chomage-are-2026-calcul">
                Allocation chômage (ARE) 2026 : droits après licenciement
              </Link>
            </li>
            <li>
              <Link href="/blog/salaire-brut-net-comment-calculer">
                Comment calculer son salaire brut en net
              </Link>
            </li>
            <li>
              <Link href="/emploi">Tous nos outils emploi</Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
