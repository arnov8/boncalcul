// FILE: src/app/blog/ptz-2026-conditions-plafonds-simulation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "PTZ 2026 : qui peut en bénéficier, plafonds et simulation complète",
  description:
    "Conditions d'éligibilité au PTZ 2026 : primo-accédant, zones A/B1/B2/C, plafonds de revenus, montant maximum et différé de remboursement. Exemples et simulation.",
  keywords: [
    "PTZ 2026",
    "prêt à taux zéro 2026",
    "conditions PTZ 2026",
    "plafonds revenus PTZ",
    "simulateur PTZ 2026",
    "primo-accédant PTZ",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/ptz-2026-conditions-plafonds-simulation",
  },
  openGraph: {
    title: "PTZ 2026 : conditions, plafonds et simulation complète",
    description:
      "Tout savoir sur le prêt à taux zéro 2026 : éligibilité, zones, plafonds de revenus et exemples chiffrés.",
    url: "https://www.boncalcul.fr/blog/ptz-2026-conditions-plafonds-simulation",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticlePTZ2026() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "PTZ 2026 : qui peut en bénéficier, plafonds et simulation complète",
          description:
            "Conditions d'éligibilité, zones, plafonds de revenus, montant maximum et différé de remboursement du PTZ 2026.",
          url: "https://www.boncalcul.fr/blog/ptz-2026-conditions-plafonds-simulation",
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
            PTZ 2026 : qui peut en bénéficier, plafonds et simulation complète
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Le Prêt à Taux Zéro reste en 2026 l'un des dispositifs les plus
            puissants pour les primo-accédants. Mais ses conditions d'accès sont
            précises et mal connues. Voici tout ce qu'il faut savoir avant de
            déposer votre dossier.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>Qu'est-ce que le PTZ et qui peut en bénéficier ?</h2>
          <p>
            Le <strong>Prêt à Taux Zéro (PTZ)</strong> est un prêt
            complémentaire accordé par l'État, sans intérêts, pour aider les
            ménages modestes et intermédiaires à accéder à la propriété.
            Il ne peut pas financer l'intégralité d'un achat : il vient en
            complément d'un prêt principal.
          </p>
          <p>
            Pour en bénéficier en 2026, il faut remplir <strong>trois
            conditions cumulatives</strong> :
          </p>
          <ol>
            <li>
              <strong>Être primo-accédant</strong> — n'avoir pas été propriétaire
              de sa résidence principale au cours des 2 dernières années (sauf
              exceptions : invalidité, catastrophe naturelle, divorce…)
            </li>
            <li>
              <strong>Respecter les plafonds de revenus</strong> — qui varient
              selon la composition du foyer et la zone géographique
            </li>
            <li>
              <strong>Acheter dans des conditions spécifiques</strong> — le PTZ
              2026 est recentré sur le neuf en zones tendues (A, A bis, B1) et
              l'ancien avec travaux en zones détendues (B2, C)
            </li>
          </ol>

          <h2>Les zones géographiques et plafonds de revenus 2026</h2>
          <p>
            Le zonage PTZ découpe la France en 4 zones selon la tension
            immobilière. Les plafonds de revenus (revenu fiscal de référence N-2)
            varient selon la zone et la taille du ménage :
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Composition du foyer
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Zone A / A bis
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Zone B1
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Zone B2 / C
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1 personne</td>
                  <td className="border border-gray-200 px-4 py-2">49 000 €</td>
                  <td className="border border-gray-200 px-4 py-2">34 500 €</td>
                  <td className="border border-gray-200 px-4 py-2">28 500 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">2 personnes</td>
                  <td className="border border-gray-200 px-4 py-2">73 500 €</td>
                  <td className="border border-gray-200 px-4 py-2">51 750 €</td>
                  <td className="border border-gray-200 px-4 py-2">42 750 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">3 personnes</td>
                  <td className="border border-gray-200 px-4 py-2">88 200 €</td>
                  <td className="border border-gray-200 px-4 py-2">62 100 €</td>
                  <td className="border border-gray-200 px-4 py-2">51 300 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">4 personnes</td>
                  <td className="border border-gray-200 px-4 py-2">102 900 €</td>
                  <td className="border border-gray-200 px-4 py-2">72 450 €</td>
                  <td className="border border-gray-200 px-4 py-2">59 850 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">5 personnes et +</td>
                  <td className="border border-gray-200 px-4 py-2">117 600 €</td>
                  <td className="border border-gray-200 px-4 py-2">82 800 €</td>
                  <td className="border border-gray-200 px-4 py-2">68 400 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            La zone A bis comprend Paris et 76 communes de la petite couronne.
            La zone A couvre l'Île-de-France hors Paris, la Côte d'Azur,
            Genève/Annecy. La zone B1 inclut des grandes métropoles comme Lyon,
            Marseille, Bordeaux, Nantes, Toulouse, Lille. Les zones B2 et C
            couvrent le reste du territoire.
          </p>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>Quel montant peut-on obtenir avec le PTZ ?</h2>
          <p>
            Le PTZ peut financer jusqu'à <strong>50% du coût de
            l'opération</strong> en zones A et B1 (achat dans le neuf), et{" "}
            <strong>40%</strong> en zones B2 et C (ancien avec travaux). Le
            montant est plafonné selon le prix d'achat et la zone.
          </p>
          <p>
            Le différé de remboursement est l'un des grands avantages du PTZ :
            selon vos revenus, vous pouvez ne rembourser aucune mensualité sur
            le PTZ pendant <strong>5, 10 ou 15 ans</strong>. Pendant cette
            période, vous ne remboursez que votre prêt principal — ce qui
            allège considérablement votre budget les premières années.
          </p>

          <h3>Exemple concret : famille de 3 personnes en zone B1</h3>
          <p>
            Camille et Romain, avec leur fils de 4 ans, souhaitent acheter un
            appartement neuf T3 à Nantes (zone B1) à <strong>260 000 €</strong>.
            Leur revenu fiscal de référence N-2 est de <strong>58 000 €</strong>
            (en dessous du plafond B1 à 3 personnes de 62 100 €).
          </p>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-blue-800 mb-2">Simulation PTZ pour Camille et Romain</p>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>Prix d'achat : 260 000 €</li>
              <li>PTZ maximum en zone B1 (neuf) : 50% × 260 000 € = <strong>130 000 €</strong></li>
              <li>Différé de remboursement (tranche 2 avec leurs revenus) : <strong>10 ans</strong></li>
              <li>Durée totale du PTZ : 22 ans</li>
              <li>Économie d'intérêts vs un prêt classique : environ <strong>25 000 à 30 000 €</strong></li>
            </ul>
          </div>

          <p>
            En pratique, le PTZ ne remplace pas leur prêt principal : ils
            empruntent 130 000 € à taux zéro + 100 000 € de prêt classique
            (+ apport). Pendant les 10 premières années, ils ne remboursent
            que le prêt classique, ce qui réduit leur effort mensuel.
          </p>

          <h2>PTZ dans l'ancien : les conditions spécifiques</h2>
          <p>
            En zones B2 et C, le PTZ est accessible pour l'achat d'un logement
            <strong> ancien nécessitant des travaux</strong>. Ces travaux doivent
            représenter au moins <strong>25% du coût total de
            l'opération</strong> (achat + travaux). C'est une condition souvent
            oubliée qui exclut les biens déjà rénovés.
          </p>
          <p>
            Ce que peu de gens savent : les travaux doivent être réalisés dans
            les <strong>3 ans</strong> suivant l'achat, et le logement doit
            ensuite être la résidence principale de l'emprunteur pendant au
            moins 6 ans.
          </p>

          <h2>Comment cumuler le PTZ avec d'autres aides ?</h2>
          <p>
            Le PTZ se cumule parfaitement avec d'autres dispositifs :
          </p>
          <ul>
            <li>
              <strong>Prêt Action Logement</strong> (ex-1% patronal) : jusqu'à
              30 000 € à taux préférentiel pour les salariés du privé
            </li>
            <li>
              <strong>Prêt d'accession sociale (PAS)</strong> : prêt
              réglementé pour les ménages modestes, ouvrant droit à l'APL
              accession
            </li>
            <li>
              <strong>Prêts des collectivités</strong> : certaines métropoles
              (Bordeaux, Lyon, Toulouse…) proposent des aides complémentaires
              locales
            </li>
          </ul>
        </div>

        <AdBanner slot="blog-mid2" format="auto" className="my-8" />

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-ptz-2026"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Simulateur PTZ 2026
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Calculez votre PTZ en fonction de votre zone et de vos revenus
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
              Calculez vos mensualités avec et sans PTZ
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Articles liés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/capacite-emprunt-5-facteurs-banques"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Les 5 facteurs que les banques examinent
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Comprendre comment votre capacité d'emprunt est évaluée.
              </p>
            </Link>
            <Link
              href="/blog/pret-immobilier-2026-mensualite-cout-total"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Mensualité et coût total d'un prêt immobilier
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Formule, taux 2026 et comparatif durées sur 200 000 €.
              </p>
            </Link>
          </div>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />
      </article>
    </>
  );
}
