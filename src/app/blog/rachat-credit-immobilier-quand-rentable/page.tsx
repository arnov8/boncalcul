// FILE: src/app/blog/rachat-credit-immobilier-quand-rentable/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Rachat de crédit immobilier : à partir de quand c'est vraiment rentable ?",
  description:
    "La règle des 3 critères, IRA, frais de dossier et calcul du point mort. Exemples chiffrés pour savoir si renégocier ou racheter votre prêt immobilier vaut le coup en 2026.",
  keywords: [
    "rachat crédit immobilier",
    "renégociation prêt immobilier",
    "IRA indemnité remboursement anticipé",
    "point mort rachat crédit",
    "simulateur rachat crédit",
    "renégocier taux immobilier 2026",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/rachat-credit-immobilier-quand-rentable",
  },
  openGraph: {
    title: "Rachat de crédit immobilier : quand est-ce vraiment rentable ?",
    description:
      "Règle des 3 critères, IRA, frais et calcul du point mort. Exemples pour décider si vous devez renégocier votre prêt.",
    url: "https://www.boncalcul.fr/blog/rachat-credit-immobilier-quand-rentable",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleRachatCredit() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Rachat de crédit immobilier : à partir de quand c'est vraiment rentable ?",
          description:
            "La règle des 3, IRA, frais de dossier, calcul du point mort et exemples chiffrés pour évaluer la pertinence d'un rachat de prêt.",
          url: "https://www.boncalcul.fr/blog/rachat-credit-immobilier-quand-rentable",
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
            Rachat de crédit immobilier : à partir de quand c'est vraiment
            rentable ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Renégocier ou faire racheter son crédit immobilier semble séduisant
            sur le papier. Mais entre les indemnités de remboursement anticipé,
            les frais de dossier et le nouveau taux d'assurance, le calcul est
            souvent moins évident qu'il n'y paraît. Voici comment savoir avec
            précision si ça vaut vraiment le coup.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>La règle des 3 : le filtre rapide avant d'aller plus loin</h2>
          <p>
            Avant même de simuler quoi que ce soit, les professionnels du
            courtage utilisent un filtre en 3 critères. Si vous répondez
            "oui" à tous les trois, l'opération mérite d'être calculée
            précisément.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Critère
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Seuil recommandé
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Pourquoi ?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Écart de taux</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">&gt; 0,7 à 1 point</td>
                  <td className="border border-gray-200 px-4 py-2">En dessous, les frais absorbent trop souvent l'économie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Capital restant dû</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">&gt; 70 000 €</td>
                  <td className="border border-gray-200 px-4 py-2">En dessous, les frais fixes représentent trop du gain potentiel</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Durée restante</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">&gt; 1/3 de la durée totale</td>
                  <td className="border border-gray-200 px-4 py-2">Dans un prêt amortissable, les intérêts sont en début de vie</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            En pratique : si vous avez emprunté sur 20 ans et qu'il ne vous
            reste que 4 ans, vous avez déjà payé 80% des intérêts. Renégocier
            à ce stade ne génèrerait quasiment aucune économie d'intérêts
            sur la durée restante.
          </p>

          <h2>Les frais à intégrer dans votre calcul</h2>

          <h3>Les indemnités de remboursement anticipé (IRA)</h3>
          <p>
            Si vous faites racheter votre prêt par une autre banque (rachat
            externe), votre banque actuelle peut exiger des{" "}
            <strong>indemnités de remboursement anticipé</strong>. Leur montant
            est plafonné par la loi au <strong>minimum</strong> entre :
          </p>
          <ul>
            <li>
              <strong>6 mois d'intérêts</strong> au taux moyen du prêt sur le
              capital remboursé
            </li>
            <li>
              <strong>3% du capital restant dû</strong>
            </li>
          </ul>
          <p>
            Exemple : capital restant dû de 150 000 € au taux de 1,8%.
            IRA = minimum (150 000 × 1,8% × 6/12 ; 150 000 × 3%) =
            minimum (1 350 € ; 4 500 €) = <strong>1 350 €</strong>.
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-1">Renégociation vs rachat externe</p>
            <p className="text-amber-700 text-sm">
              Si vous <strong>renégociez</strong> avec votre banque actuelle,
              il n'y a pas d'IRA. En revanche, la banque n'est pas obligée
              d'accepter, et elle sera moins compétitive qu'une banque
              concurrente. Le <strong>rachat externe</strong> génère des IRA
              mais souvent obtient un meilleur taux.
            </p>
          </div>

          <h3>Les autres frais à ne pas oublier</h3>
          <ul>
            <li>
              <strong>Frais de dossier</strong> : 500 à 1 500 € selon les
              banques (négociables)
            </li>
            <li>
              <strong>Frais de garantie</strong> : mainlevée d'hypothèque
              (~500-800 €) ou résiliation de caution + nouvelle garantie
              (caution : 0,8-1,5% du capital, hypothèque : ~1,5-2%)
            </li>
            <li>
              <strong>Assurance emprunteur</strong> : le nouveau contrat peut
              être plus cher si vous avez vieilli ou si votre état de santé a
              évolué
            </li>
          </ul>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>Le calcul du point mort : combien de temps pour amortir ?</h2>
          <p>
            Le <strong>point mort</strong> (ou seuil de rentabilité) est le
            moment à partir duquel les économies mensuelles cumulées dépassent
            le total des frais engagés. La formule :
          </p>
          <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-4 font-mono text-sm text-gray-700">
            <p>Point mort (mois) = Total des frais ÷ Économie mensuelle</p>
          </div>
          <p>
            Si vous comptez rester dans le bien 5 ans (60 mois) et que le
            point mort est à 24 mois, l'opération est rentable. Si le point
            mort est à 54 mois, la marge est très faible et le moindre imprévu
            (revente anticipée) peut rendre l'opération perdante.
          </p>

          <h2>Exemples chiffrés 2026</h2>

          <h3>Cas 1 : emprunteur à 1,8% (emprunté en 2019) — la bonne surprise</h3>
          <p>
            Clément a emprunté 220 000 € en 2019 sur 20 ans à 1,80%. Il lui
            reste 13 ans et <strong>158 000 € de capital</strong>. Les taux
            actuels sont à 3,35%. Sa mensualité actuelle (sans assurance) est
            de 1 098 €.
          </p>
          <p>
            Dans ce cas, le rachat ne fait aucun sens : le nouveau taux est
            bien supérieur à son taux actuel. Clément ne doit surtout pas
            toucher à son prêt, et doit au contraire éventuellement envisager
            des remboursements anticipés partiels s'il a une capacité
            d'épargne.
          </p>

          <h3>Cas 2 : emprunteur à 3,85% (emprunté en 2023) — quand ça vaut le coup</h3>
          <p>
            Léa a emprunté 200 000 € en 2023 sur 25 ans à 3,85%. Il lui reste
            22 ans et <strong>185 000 €</strong>. Sa mensualité actuelle est
            de 1 043 €. Une banque concurrente lui propose 3,20% sur 22 ans.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Élément
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Montant
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Nouvelle mensualité (3,20%/22 ans)</td>
                  <td className="border border-gray-200 px-4 py-2">974 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Économie mensuelle</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">69 €/mois</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">IRA (6 mois d'intérêts à 3,85%)</td>
                  <td className="border border-gray-200 px-4 py-2">3 557 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Frais de dossier + garantie</td>
                  <td className="border border-gray-200 px-4 py-2">2 800 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Total frais</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold">6 357 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Point mort</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold text-blue-600">6 357 ÷ 69 = 92 mois (~7,7 ans)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Si Léa compte rester dans son logement plus de 8 ans, le rachat est
            rentable sur le long terme. Sur 22 ans, l'économie totale
            représente environ <strong>10 000 €</strong> net de frais.
            Mais si elle envisage de revendre dans 5 ans, l'opération est
            perdante.
          </p>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-blue-800 mb-1">La bonne question à se poser</p>
            <p className="text-blue-700 text-sm">
              "Dans combien d'années vais-je probablement vendre ou rembourser
              ce prêt ?" C'est cette durée réelle (et non la durée théorique du
              prêt) qui détermine si le rachat est rentable. Les statistiques
              montrent que les Français revendent en moyenne leur bien
              <strong> 7 à 9 ans</strong> après l'achat.
            </p>
          </div>
        </div>

        <AdBanner slot="blog-mid2" format="auto" className="my-8" />

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-rachat-credit"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Simulateur de rachat de crédit
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Calculez votre point mort et l'économie totale en quelques clics
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
              Comparez les mensualités de votre prêt actuel vs le nouveau
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Articles liés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/pret-immobilier-2026-mensualite-cout-total"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Mensualité et coût total d'un prêt immobilier en 2026
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Comprendre comment se forme le coût réel de votre crédit.
              </p>
            </Link>
            <Link
              href="/blog/capacite-emprunt-5-facteurs-banques"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Les 5 facteurs que les banques examinent
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Comprendre l'analyse bancaire pour mieux négocier.
              </p>
            </Link>
          </div>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />
      </article>
    </>
  );
}
