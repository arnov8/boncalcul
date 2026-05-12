// FILE: src/app/blog/pret-immobilier-2026-mensualite-cout-total/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Prêt immobilier 2026 : comment calculer sa mensualité et son coût total réel ?",
  description:
    "Formule de calcul de la mensualité, taux actuels 2026 (3,2-3,5%), impact de l'assurance et comparatif 20 ans vs 25 ans sur 200 000 €.",
  keywords: [
    "mensualité prêt immobilier 2026",
    "calcul mensualité crédit immobilier",
    "taux immobilier 2026",
    "coût total crédit immobilier",
    "simulateur prêt immobilier",
    "assurance emprunteur taux",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/pret-immobilier-2026-mensualite-cout-total",
  },
  openGraph: {
    title: "Prêt immobilier 2026 : mensualité et coût total réel",
    description:
      "Formule, taux 2026, assurance emprunteur et comparatif durées sur 200 000 €.",
    url: "https://www.boncalcul.fr/blog/pret-immobilier-2026-mensualite-cout-total",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticlePretImmobilier2026() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Prêt immobilier 2026 : comment calculer sa mensualité et son coût total réel ?",
          description:
            "Formule de calcul de la mensualité, taux actuels 2026, impact de l'assurance et comparatif 20 ans vs 25 ans sur 200 000 €.",
          url: "https://www.boncalcul.fr/blog/pret-immobilier-2026-mensualite-cout-total",
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
            Prêt immobilier 2026 : comment calculer sa mensualité et son coût
            total réel ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Entre la formule mathématique que personne n'explique clairement,
            l'assurance emprunteur souvent oubliée et la question de la durée
            optimale, calculer son prêt immobilier peut vite devenir un casse-tête.
            Voici tout ce qu'il faut savoir en 2026.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>La formule de la mensualité : enfin expliquée simplement</h2>
          <p>
            La mensualité d'un prêt immobilier se calcule selon une formule
            d'amortissement que les banques appliquent mais expliquent rarement.
            Elle s'écrit ainsi :
          </p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-6 font-mono text-sm text-gray-700">
            <p className="font-semibold text-gray-800 mb-2">Formule :</p>
            <p>M = C × [t / (1 − (1 + t)^(−n))]</p>
            <p className="mt-2 text-xs text-gray-500">
              M = mensualité · C = capital emprunté · t = taux mensuel (taux
              annuel ÷ 12) · n = nombre de mensualités
            </p>
          </div>

          <p>
            En pratique, sur un emprunt de <strong>200 000 €</strong> à{" "}
            <strong>3,40% sur 20 ans</strong> (240 mensualités), le taux mensuel
            est de 3,40% ÷ 12 = 0,2833%. La mensualité hors assurance ressort à
            environ <strong>1 151 €</strong>. Pas besoin de sortir votre
            calculatrice scientifique : notre simulateur fait le calcul en une
            seconde.
          </p>

          <h2>Les taux immobiliers en 2026 : où en est-on ?</h2>
          <p>
            Après la forte hausse de 2022-2023, les taux se sont stabilisés puis
            légèrement repliés. En mai 2026, les barèmes des banques se situent
            généralement entre <strong>3,20% et 3,50%</strong> pour un profil
            standard, selon la durée et la qualité du dossier.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Durée
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Taux moyen (mai 2026)
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Meilleurs dossiers
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">15 ans</td>
                  <td className="border border-gray-200 px-4 py-2">3,15%</td>
                  <td className="border border-gray-200 px-4 py-2">2,90%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">20 ans</td>
                  <td className="border border-gray-200 px-4 py-2">3,35%</td>
                  <td className="border border-gray-200 px-4 py-2">3,10%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">25 ans</td>
                  <td className="border border-gray-200 px-4 py-2">3,50%</td>
                  <td className="border border-gray-200 px-4 py-2">3,25%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ce que peu de gens savent : un écart de 0,25% sur le taux représente
            environ 3 000 à 5 000 € de coût total sur 20 ans pour 200 000 €
            empruntés. Passer du temps à négocier son taux — ou faire appel à un
            courtier — est donc loin d'être anecdotique.
          </p>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>20 ans ou 25 ans : le vrai comparatif sur 200 000 €</h2>
          <p>
            Prenons le cas de Thomas, 34 ans, qui emprunte <strong>200 000 €</strong>{" "}
            pour acheter un appartement à Bordeaux. Il hésite entre 20 et 25 ans.
            Voici ce que donnent les deux options avec les taux actuels :
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Paramètre
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    20 ans à 3,35%
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    25 ans à 3,50%
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Mensualité (hors assurance)</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">1 141 €</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">1 001 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Total remboursé</td>
                  <td className="border border-gray-200 px-4 py-2">273 840 €</td>
                  <td className="border border-gray-200 px-4 py-2">300 300 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Coût des intérêts</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600">73 840 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600">100 300 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Assurance (0,30%/an)</td>
                  <td className="border border-gray-200 px-4 py-2">~11 700 €</td>
                  <td className="border border-gray-200 px-4 py-2">~14 700 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Coût total réel</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold text-gray-900">~85 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 font-bold text-gray-900">~115 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Conclusion : allonger de 5 ans coûte environ <strong>29 500 €</strong>{" "}
            supplémentaires à Thomas, en échange d'une mensualité allégée de
            140 €. La question est donc : est-ce que cet allègement lui permet
            d'emprunter autrement, ou est-ce simplement de la confort ?
          </p>

          <h2>L'assurance emprunteur : l'oubliée du calcul</h2>
          <p>
            Beaucoup de futurs propriétaires comparent les offres de prêt sans
            intégrer l'assurance emprunteur. C'est une erreur : elle représente
            souvent <strong>20 à 30% du coût total du crédit</strong>.
          </p>
          <p>
            En 2026, les taux d'assurance varient de <strong>0,10%</strong>{" "}
            (jeune profil, délégation d'assurance) à <strong>0,40%</strong>{" "}
            (contrat groupe bancaire, âge avancé). Sur 200 000 € sur 20 ans,
            la différence entre 0,15% et 0,35% représente environ{" "}
            <strong>8 000 € d'écart</strong>.
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-1">Bon à savoir</p>
            <p className="text-amber-700 text-sm">
              Depuis la loi Lemoine (2022), vous pouvez changer d'assurance
              emprunteur à tout moment, sans frais ni pénalité. Comparer les
              offres en délégation d'assurance peut économiser plusieurs milliers
              d'euros sur la durée du prêt.
            </p>
          </div>

          <h2>Comment calculer le TAEG pour comparer les offres ?</h2>
          <p>
            Le <strong>TAEG (Taux Annuel Effectif Global)</strong> est le seul
            indicateur vraiment comparable entre deux banques. Il inclut le taux
            nominal, l'assurance, les frais de dossier et les frais de garantie.
            La loi oblige les banques à vous le communiquer dans toute offre de
            prêt. C'est lui qu'il faut comparer, pas le taux d'appel affiché
            en vitrine.
          </p>
          <p>
            En pratique : une offre à 3,35% avec assurance à 0,35% et frais de
            dossier de 1 200 € peut avoir un TAEG supérieur à une offre à 3,50%
            avec assurance déléguée à 0,15% et frais réduits.
          </p>
        </div>

        <AdBanner slot="blog-mid2" format="auto" className="my-8" />

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-pret-immobilier"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Simulateur de prêt immobilier
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Mensualité, coût total, tableau d'amortissement — gratuit et
              instantané
            </p>
          </Link>
          <Link
            href="/outils/calcul-capacite-emprunt"
            className="flex-1 block bg-white border-2 border-blue-200 text-blue-700 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer ma capacité d'emprunt
            </p>
            <p className="text-blue-400 text-sm mt-1">
              Découvrez combien vous pouvez emprunter selon vos revenus
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Articles liés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/capacite-emprunt-5-facteurs-banques"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Les 5 facteurs que les banques examinent vraiment
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Taux d'endettement, reste à vivre, apport… ce que les banques
                ne disent pas.
              </p>
            </Link>
            <Link
              href="/blog/ptz-2026-conditions-plafonds-simulation"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                PTZ 2026 : conditions, plafonds et simulation
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Le prêt à taux zéro peut financer jusqu'à 50% de votre achat.
              </p>
            </Link>
          </div>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />
      </article>
    </>
  );
}
