// FILE: src/app/blog/interets-composes-regle-72/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Intérêts composés : la règle des 72 et pourquoi commencer tôt change vraiment tout",
  description: "La règle des 72 permet de savoir en combien d'années votre capital double. Une démonstration concrète de pourquoi commencer à épargner à 20 ans plutôt que 40 ans fait une différence énorme.",
  keywords: ["règle des 72", "intérêts composés", "épargne long terme", "Livret A", "PEA", "commencer tôt", "doublement capital", "effet boule de neige"],
  alternates: { canonical: "https://www.boncalcul.fr/blog/interets-composes-regle-72" },
  openGraph: {
    title: "Intérêts composés : la règle des 72 et pourquoi commencer tôt change vraiment tout",
    description: "La règle des 72 permet de savoir en combien d'années votre capital double. Une démonstration concrète de pourquoi commencer à épargner à 20 ans plutôt que 40 ans fait une différence énorme.",
    url: "https://www.boncalcul.fr/blog/interets-composes-regle-72",
    type: "article",
    locale: "fr_FR",
  },
};

export default function InteretsComposesRegle72() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Intérêts composés : la règle des 72 et pourquoi commencer tôt change vraiment tout",
          description: "La règle des 72 permet de savoir en combien d'années votre capital double. Une démonstration concrète de pourquoi commencer à épargner à 20 ans plutôt que 40 ans fait une différence énorme.",
          url: "https://www.boncalcul.fr/blog/interets-composes-regle-72",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Épargne</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Intérêts composés : la règle des 72 et pourquoi commencer tôt change vraiment tout
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Il existe une formule mentale qui tient en cinq mots et change la façon dont on regarde l'épargne : "72 divisé par le taux". Le résultat ? Le nombre d'années pour doubler son capital. Simple, brutal, et souvent surprenant.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>La règle des 72 : un calcul de tête qui révèle tout</h2>
          <p>
            La règle des 72 est une approximation mathématique remarquablement précise : divisez 72 par le taux d'intérêt annuel, et vous obtenez le nombre d'années nécessaires pour que votre capital double — sans ajouter un seul euro.
          </p>
          <ul>
            <li>À <strong>3 % (Livret A)</strong> : 72 / 3 = <strong>24 ans</strong> pour doubler</li>
            <li>À <strong>4 %</strong> : 72 / 4 = <strong>18 ans</strong> pour doubler</li>
            <li>À <strong>6 % (PEA, performance historique)</strong> : 72 / 6 = <strong>12 ans</strong> pour doubler</li>
            <li>À <strong>8 %</strong> : 72 / 8 = <strong>9 ans</strong> pour doubler</li>
          </ul>
          <p>
            La différence entre 3 % et 6 % paraît petite. Mais elle représente le doublement en 12 ans contre 24 ans — deux fois moins de temps. Sur 40 ans d'épargne active, cet écart est colossal.
          </p>

          <h2>1 000 € à 4 % : 10 ans vs 30 ans</h2>
          <p>
            Concrètement, regardons ce que devient un capital initial de <strong>1 000 €</strong> placé à 4 % par an, sans jamais rien ajouter :
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Durée</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Capital final (4 %)</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Dont intérêts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">10 ans</td>
                  <td className="border border-gray-200 px-4 py-2">1 480 €</td>
                  <td className="border border-gray-200 px-4 py-2">480 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">20 ans</td>
                  <td className="border border-gray-200 px-4 py-2">2 191 €</td>
                  <td className="border border-gray-200 px-4 py-2">1 191 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">30 ans</td>
                  <td className="border border-gray-200 px-4 py-2">3 243 €</td>
                  <td className="border border-gray-200 px-4 py-2">2 243 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">40 ans</td>
                  <td className="border border-gray-200 px-4 py-2">4 801 €</td>
                  <td className="border border-gray-200 px-4 py-2">3 801 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            De 10 à 30 ans, le capital passe de 1 480 € à 3 243 €. Les 20 dernières années ont fait plus que doubler le résultat des 10 premières. C'est l'effet boule de neige des intérêts composés : les intérêts produisent eux-mêmes des intérêts, et l'accélération est exponentielle.
          </p>

          <h2>Livret A vs PEA : l'écart qui s'accumule</h2>
          <p>
            En 2026, le Livret A est à 3 %. Un PEA investi en ETF sur indices mondiaux a historiquement rapporté entre 6 et 8 % par an sur longue période (avant impôts, avec fluctuations). Prenons la fourchette basse : 6 %.
          </p>
          <p>
            Sur 25 ans, 10 000 € placés à 3 % donnent environ <strong>20 938 €</strong>. Les mêmes 10 000 € à 6 % : <strong>42 919 €</strong>. Soit plus du double, pour le même effort d'épargne initial. La différence de rendement, pourtant modeste en apparence, crée un fossé massif sur la durée.
          </p>

          <h2>L'exemple qui claque : Emma à 20 ans vs Lucas à 40 ans</h2>
          <p>
            Emma a 20 ans. Elle investit <strong>200 € par mois</strong> pendant 20 ans (de 20 à 40 ans), puis s'arrête complètement. Total versé : 48 000 €. Elle laisse son capital fructifier jusqu'à 65 ans, à 6 % par an.
          </p>
          <p>
            Lucas attend d'avoir 40 ans pour commencer. Il investit lui aussi <strong>200 € par mois</strong>, mais pendant 25 ans (de 40 à 65 ans). Total versé : 60 000 €.
          </p>
          <p>
            À 65 ans, Emma dispose d'environ <strong>530 000 €</strong>. Lucas, malgré 12 000 € de plus versés et 5 ans de plus d'effort, atteint environ <strong>139 000 €</strong>. Emma a presque <strong>4 fois plus</strong> — simplement parce qu'elle a commencé 20 ans plus tôt.
          </p>

          <h2>Le temps est la variable que personne ne peut acheter</h2>
          <p>
            On peut augmenter son effort d'épargne, choisir des placements plus performants, réduire les frais — tout cela compte. Mais le temps, lui, ne se rattrape pas. Chaque année qui passe sans épargner est une année d'intérêts composés perdue, qui ne reviendra jamais.
          </p>
          <p>
            La règle des 72 n'est pas qu'un calcul rapide : c'est un argument en faveur du "commencer maintenant, même modestement". 50 € par mois à 25 ans valent infiniment plus que 200 € par mois à 45 ans.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-interets-composes"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simuler mes intérêts composés</p>
            <p className="text-blue-100 text-sm mt-1">Visualisez l'effet boule de neige sur votre épargne avec taux et durée personnalisés</p>
          </Link>
          <Link
            href="/outils/simulateur-retraite"
            className="flex-1 block bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur retraite</p>
            <p className="text-blue-100 text-sm mt-1">Projetez votre capital à la retraite selon vos versements et votre horizon</p>
          </Link>
        </div>
      </article>
    </>
  );
}
