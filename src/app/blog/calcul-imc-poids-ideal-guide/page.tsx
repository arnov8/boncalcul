import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calculer son IMC : ce que l'indice vous dit (et ce qu'il ne dit pas)",
  description:
    "Comment calculer votre IMC, interpréter votre résultat et comprendre ses limites. Tour d'horizon des indicateurs complémentaires pour une vision plus juste de votre santé.",
  keywords: [
    "calcul IMC",
    "indice masse corporelle",
    "IMC surpoids obésité",
    "poids idéal calcul",
    "IMC limites interprétation",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/calcul-imc-poids-ideal-guide",
  },
  openGraph: {
    title: "Calculer son IMC : ce que l'indice dit vraiment",
    description:
      "Formule, interprétation et limites de l'IMC. Ce que l'indice mesure bien — et ce qu'il rate complètement.",
    url: "https://www.boncalcul.fr/blog/calcul-imc-poids-ideal-guide",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ImcArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Calculer son IMC : ce que l'indice vous dit (et ce qu'il ne dit pas)",
          description:
            "Formule, catégories OMS, limites de l'IMC et indicateurs complémentaires pour mieux évaluer son état de santé.",
          url: "https://www.boncalcul.fr/blog/calcul-imc-poids-ideal-guide",
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
            <span>Santé</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Calculer son IMC : ce que l&apos;indice vous dit (et ce qu&apos;il ne dit pas)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            L&apos;IMC est l&apos;indicateur de santé le plus utilisé au monde — et aussi l&apos;un
            des plus mal compris. Avant de vous inquiéter (ou de vous rassurer) en voyant votre
            résultat, voici ce que cet indice mesure réellement, et pourquoi les médecins eux-mêmes
            le considèrent avec beaucoup de précautions.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-10">10 mai 2026</time>
            <span>5 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray prose-lg max-w-none">
          <h2>La formule de l&apos;IMC</h2>
          <p>
            L&apos;Indice de Masse Corporelle (IMC), ou Body Mass Index (BMI) en anglais, se
            calcule de façon identique pour tout le monde :
          </p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-6 text-center font-mono text-sm">
            IMC = Poids (kg) / Taille² (m)
          </div>

          <p>
            Exemple : 75 kg pour 1,75 m → IMC = 75 / (1,75 × 1,75) = 75 / 3,0625 ={" "}
            <strong>24,5</strong>. Soit un poids considéré comme normal selon les critères de
            l&apos;OMS.
          </p>

          <h2>Les catégories officielles de l&apos;OMS</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Catégorie
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    IMC
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-blue-700">
                    Maigreur (grade III)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">&lt; 16</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-blue-600">
                    Maigreur (grade II)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">16 – 16,9</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-blue-500">
                    Maigreur (grade I)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">17 – 18,4</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-semibold text-green-700">
                    Corpulence normale
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold">
                    18,5 – 24,9
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-amber-700">Surpoids</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">25 – 29,9</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-orange-700">
                    Obésité modérée (grade I)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">30 – 34,9</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-red-700">
                    Obésité sévère (grade II)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">35 – 39,9</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-red-800">
                    Obésité morbide (grade III)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">&gt; 40</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Où l&apos;IMC devient trompeur</h2>
          <p>
            L&apos;IMC mesure un rapport poids/taille. Il ne distingue pas la masse grasse de la
            masse musculaire. C&apos;est là que les problèmes commencent.
          </p>
          <ul>
            <li>
              <strong>Un sportif musclé</strong> peut afficher un IMC de 27 ou 28 et être
              parfaitement sain. Selon l&apos;IMC, il est en surpoids. Selon sa composition
              corporelle, pas du tout.
            </li>
            <li>
              <strong>Une personne sédentaire mince</strong> peut avoir un IMC de 22 et un taux de
              masse grasse élevé — ce qu&apos;on appelle le phénomène &laquo; skinny fat &raquo;. Le
              risque cardiovasculaire peut pourtant être réel.
            </li>
            <li>
              <strong>Les personnes âgées</strong> perdent naturellement de la masse musculaire.
              Un IMC &laquo; normal &raquo; peut masquer une sarcopénie préoccupante.
            </li>
            <li>
              <strong>Les différences ethniques</strong> : les seuils OMS ont été établis sur des
              populations principalement européennes. Pour les populations asiatiques, le risque
              métabolique commence dès un IMC de 23.
            </li>
          </ul>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-blue-800 mb-1">En pratique</p>
            <p className="text-blue-700 text-sm">
              L&apos;IMC reste utile comme indicateur populationnel et comme point de départ dans
              un bilan de santé. Mais un seul chiffre ne suffit pas à qualifier votre état de santé.
              Votre médecin regardera aussi votre tour de taille, vos bilans sanguins, votre tension
              et votre mode de vie.
            </p>
          </div>

          <h2>Le tour de taille : souvent plus révélateur</h2>
          <p>
            La graisse abdominale est la plus dangereuse sur le plan cardiovasculaire — et
            c&apos;est celle que l&apos;IMC détecte le moins bien. Les seuils d&apos;alerte pour le
            tour de taille sont :
          </p>
          <ul>
            <li>
              <strong>Hommes</strong> : risque élevé au-delà de 94 cm, très élevé au-delà de
              102 cm
            </li>
            <li>
              <strong>Femmes</strong> : risque élevé au-delà de 80 cm, très élevé au-delà de 88 cm
            </li>
          </ul>
          <p>
            Ces seuils proviennent de l&apos;OMS et font consensus dans la littérature
            épidémiologique. Un IMC de 26 avec un tour de taille de 100 cm (homme) sera pris
            beaucoup plus au sérieux par un médecin qu&apos;un IMC de 29 avec un tour de taille
            de 90 cm.
          </p>

          <h2>Et le poids idéal, alors ?</h2>
          <p>
            Il n&apos;existe pas de &laquo; poids idéal &raquo; universel. Les formules qui
            circulent (Lorentz, Monnerot-Dumaine, Broca...) donnent toutes des résultats
            différents et sont basées sur des études anciennes. Notre calculateur de poids idéal
            vous en présente plusieurs — prenez-les comme des fourchettes indicatives, pas comme
            des objectifs à atteindre coûte que coûte.
          </p>
          <p>
            Ce qui compte davantage : maintenir une activité physique régulière, avoir un bilan
            lipidique et glycémique satisfaisant, et ne pas avoir de graisse abdominale excessive.
            Le chiffre sur la balance est une variable parmi d&apos;autres.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-imc"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mon IMC</p>
            <p className="text-blue-100 text-sm mt-1">
              Résultat instantané avec interprétation
            </p>
          </Link>
          <Link
            href="/outils/calcul-poids-ideal"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
              Calculer mon poids idéal
            </p>
            <p className="text-gray-500 text-sm mt-1">Plusieurs formules comparées</p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Outils santé associés</h2>
          <ul>
            <li>
              <Link href="/outils/calcul-img">
                Calculateur d&apos;indice de masse grasse (IMG)
              </Link>
            </li>
            <li>
              <Link href="/outils/calcul-calories">Calcul des besoins caloriques journaliers</Link>
            </li>
            <li>
              <Link href="/sante">Tous nos outils santé</Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
