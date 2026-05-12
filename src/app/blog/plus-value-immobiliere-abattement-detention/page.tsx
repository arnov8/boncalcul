// FILE: src/app/blog/plus-value-immobiliere-abattement-detention/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Plus-value immobilière : comment l'abattement pour durée de détention peut tout changer",
  description:
    "Calcul de la plus-value immobilière, taux IR 19% + PS 17,2%, abattements progressifs et exonérations. Exemples chiffrés à 5 ans vs 22 ans de détention.",
  keywords: [
    "plus-value immobilière",
    "abattement durée détention",
    "impôt plus-value immobilier",
    "exonération plus-value 22 ans",
    "calcul plus-value immobilière",
    "prélèvements sociaux immobilier",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/plus-value-immobiliere-abattement-detention",
  },
  openGraph: {
    title: "Plus-value immobilière : l'abattement pour durée de détention",
    description:
      "IR 19%, PS 17,2%, abattements progressifs de 0 à 30 ans et exemples chiffrés pour optimiser votre vente.",
    url: "https://www.boncalcul.fr/blog/plus-value-immobiliere-abattement-detention",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticlePlusValueImmobiliere() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Plus-value immobilière : comment l'abattement pour durée de détention peut tout changer",
          description:
            "Calcul de la plus-value immobilière, taux IR 19% + prélèvements sociaux 17,2%, abattements progressifs et exemples chiffrés.",
          url: "https://www.boncalcul.fr/blog/plus-value-immobiliere-abattement-detention",
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
            Plus-value immobilière : comment l'abattement pour durée de
            détention peut tout changer
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Vendre un bien immobilier en dégageant une plus-value génère un
            impôt souvent sous-estimé. Mais la durée pendant laquelle vous
            avez détenu le bien peut réduire cette facture à zéro — à condition
            de bien comprendre les règles du jeu.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>9 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>Comment se calcule la plus-value immobilière ?</h2>
          <p>
            La plus-value brute est la différence entre le <strong>prix de
            cession</strong> et le <strong>prix d'acquisition</strong>. Mais
            ces deux montants peuvent être ajustés :
          </p>
          <ul>
            <li>
              Le prix d'acquisition peut être <strong>majoré</strong> des
              frais d'acquisition (frais de notaire : réels ou forfait 7,5%),
              des travaux réalisés (réels justifiés, ou forfait 15% si détention
              &gt; 5 ans), et des frais de voirie/raccordement
            </li>
            <li>
              Le prix de cession peut être <strong>minoré</strong> des frais
              de vente (diagnostics, commission d'agence à la charge du vendeur)
            </li>
          </ul>
          <p>
            En pratique : Marc a acheté un studio à Lyon en 2016 pour
            120 000 € (+ 9 000 € de frais de notaire). Il n'a pas fait de
            travaux. Il vend en 2026 pour 195 000 € (frais d'agence : 8 000 €
            à sa charge). Sa plus-value brute = (195 000 − 8 000) −
            (120 000 + 9 000) = <strong>58 000 €</strong>.
          </p>

          <h2>Le taux d'imposition : 19% IR + 17,2% prélèvements sociaux</h2>
          <p>
            La plus-value nette imposable est soumise à deux niveaux de
            taxation distincts :
          </p>
          <ul>
            <li>
              <strong>Impôt sur le revenu (IR) : 19%</strong> — taux forfaitaire
              applicable à la fraction imposable de la plus-value
            </li>
            <li>
              <strong>Prélèvements sociaux : 17,2%</strong> — dont 9,2% de CSG
              partiellement déductible
            </li>
          </ul>
          <p>
            Le taux global théorique sans aucun abattement est donc de{" "}
            <strong>36,2%</strong>. Sur 58 000 €, cela représenterait 20 996 €
            d'impôt. Mais c'est là qu'entrent en jeu les abattements.
          </p>

          <h3>La surtaxe pour les plus-values élevées</h3>
          <p>
            Une surtaxe s'applique sur les plus-values nettes (après abattement
            pour durée de détention) dépassant <strong>50 000 €</strong>. Elle
            est progressive de 2% à 6%. Cette surtaxe ne s'applique qu'à
            l'IR, pas aux prélèvements sociaux.
          </p>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>Les abattements pour durée de détention : le tableau complet</h2>
          <p>
            C'est le mécanisme clé. Plus vous détenez longtemps, moins vous
            payez — jusqu'à l'exonération totale.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Durée de détention
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Abattement IR (19%)
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Abattement PS (17,2%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Moins de 6 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600">0%</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600">0%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">6 à 21 ans</td>
                  <td className="border border-gray-200 px-4 py-2">6% par an</td>
                  <td className="border border-gray-200 px-4 py-2">1,65% par an</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">22e année</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">4% (exo totale IR)</td>
                  <td className="border border-gray-200 px-4 py-2">1,60%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">23 à 30 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Exonéré IR</td>
                  <td className="border border-gray-200 px-4 py-2">9% par an</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">À partir de 30 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Exonéré IR</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Exonéré PS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Exemples chiffrés : vendre à 5 ans vs 22 ans</h2>
          <p>
            Reprenons le cas de Marc et sa plus-value brute de 58 000 €.
          </p>

          <h3>Scénario 1 : vente après 5 ans de détention</h3>
          <p>
            Aucun abattement ne s'applique. Plus-value nette = 58 000 €.
            Impôt total = 58 000 € × 36,2% = <strong>20 996 €</strong>.
            Marc encaisse 187 000 € nets au lieu de 208 000 € imaginés.
          </p>

          <h3>Scénario 2 : vente après 10 ans de détention</h3>
          <p>
            Abattement IR : 6% × 4 ans (années 6 à 9) + 6% (année 10) = 30%.
            Plus-value IR = 58 000 × 70% = 40 600 € → impôt IR = 7 714 €.
            Abattement PS : 1,65% × 4 ans = 6,6%.
            Plus-value PS = 58 000 × 93,4% = 54 172 € → impôt PS = 9 318 €.
            Total impôt = <strong>17 032 €</strong> (économie de 3 964 € vs
            vente à 5 ans).
          </p>

          <h3>Scénario 3 : vente exactement à la 22e année</h3>
          <p>
            Abattement IR : 6% × 16 ans + 4% = 100% → <strong>exonéré d'IR</strong>.
            Abattement PS : 1,65% × 16 ans + 1,60% = 28% → Plus-value PS
            = 58 000 × 72% = 41 760 € → impôt PS = 7 183 €.
            Total impôt = <strong>7 183 €</strong> au lieu de 20 996 €.
            Soit une économie de <strong>13 813 €</strong> en attendant 7 ans
            de plus.
          </p>

          <div className="not-prose bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-green-800 mb-1">La règle des 22 / 30 ans</p>
            <p className="text-green-700 text-sm">
              Exonération totale de l'impôt sur le revenu (19%) après{" "}
              <strong>22 ans</strong> de détention. Exonération totale y
              compris prélèvements sociaux (17,2%) après{" "}
              <strong>30 ans</strong> de détention.
            </p>
          </div>

          <h2>Cas particuliers et exonérations à connaître</h2>
          <h3>Résidence principale : exonération totale</h3>
          <p>
            La plus-value réalisée sur la vente de votre <strong>résidence
            principale</strong> est totalement exonérée d'impôt, quelle que
            soit la durée de détention. C'est l'exonération la plus importante
            en pratique — et la raison pour laquelle beaucoup de propriétaires
            organisent leur stratégie patrimoniale autour de cet avantage.
          </p>

          <h3>Autres exonérations</h3>
          <ul>
            <li>
              <strong>Prix de cession ≤ 15 000 €</strong> : exonération totale
            </li>
            <li>
              <strong>Première cession d'un logement autre que la résidence
              principale</strong> : exonération si le vendeur n'est pas
              propriétaire depuis 4 ans et réemploie le prix dans sa résidence
              principale dans les 24 mois
            </li>
            <li>
              <strong>Retraités/invalides sous conditions de revenus</strong> :
              exonération totale si le revenu fiscal de référence est en dessous
              de certains plafonds
            </li>
          </ul>
        </div>

        <AdBanner slot="blog-mid2" format="auto" className="my-8" />

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-plus-value-immobiliere"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer ma plus-value immobilière
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Impôt exact selon votre durée de détention, avec simulation des
              abattements
            </p>
          </Link>
          <Link
            href="/outils/calcul-frais-de-notaire"
            className="flex-1 block bg-white border-2 border-blue-200 text-blue-700 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer les frais de notaire
            </p>
            <p className="text-blue-400 text-sm mt-1">
              À intégrer dans le prix d'acquisition pour le calcul de la plus-value
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Articles liés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/rentabilite-locative-brute-vs-nette"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Rentabilité locative brute vs nette
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Le vrai calcul que peu d'investisseurs font réellement.
              </p>
            </Link>
            <Link
              href="/blog/guide-frais-de-notaire-2026"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Guide des frais de notaire 2026
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Comprendre la composition et comment les réduire.
              </p>
            </Link>
          </div>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />
      </article>
    </>
  );
}
