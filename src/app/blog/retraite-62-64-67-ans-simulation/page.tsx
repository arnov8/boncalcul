// FILE: src/app/blog/retraite-62-64-67-ans-simulation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Retraite à 62, 64 ou 67 ans : simulation des scénarios et impact sur la pension",
  description:
    "Réforme 2023, âge légal 64 ans, décote et surcote : simulez l'impact en euros de chaque scénario de départ à la retraite. Exemples pour les nés en 1964 et 1968.",
  keywords: [
    "retraite 64 ans",
    "simulateur retraite 2026",
    "décote retraite",
    "surcote retraite",
    "réforme retraite 2023",
    "âge légal retraite",
    "taux plein retraite",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/retraite-62-64-67-ans-simulation" },
  openGraph: {
    title: "Retraite à 62, 64 ou 67 ans : simulation et impact sur la pension",
    description: "Réforme 2023, décote 1,25%/trimestre, taux plein à 67 ans : simulez votre pension selon votre âge de départ avec des exemples chiffrés.",
    url: "https://www.boncalcul.fr/blog/retraite-62-64-67-ans-simulation",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleRetraiteSimulation() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Retraite à 62, 64 ou 67 ans : simulation des scénarios et impact sur la pension",
          description:
            "Réforme 2023, âge légal 64 ans, décote et surcote : simulez l'impact en euros de chaque scénario de départ à la retraite.",
          url: "https://www.boncalcul.fr/blog/retraite-62-64-67-ans-simulation",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Retraite</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Retraite à 62, 64 ou 67 ans : simulation des scénarios et impact sur la pension
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Depuis la réforme de 2023, l&apos;âge légal de départ à la retraite est progressivement
            décalé à 64 ans. Mais partir à 64 ans ne garantit pas une retraite à taux plein —
            et attendre 67 ans change radicalement le montant de la pension. Voici comment
            simuler les trois scénarios avec des chiffres réels.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Ce que change la réforme 2023 : les points clés</h2>
          <p>
            La réforme des retraites, entrée en vigueur progressivement depuis septembre 2023,
            a modifié deux paramètres essentiels :
          </p>
          <ul>
            <li>
              <strong>L&apos;âge légal de départ</strong> passe de 62 à 64 ans, à raison de 3 mois
              supplémentaires par génération. Les personnes nées à partir de <strong>1968</strong>
              doivent attendre 64 ans pour partir.
            </li>
            <li>
              <strong>La durée de cotisation requise</strong> pour le taux plein passe à
              <strong> 172 trimestres</strong> (43 ans) pour les générations nées à partir de 1965.
              Les générations précédentes restent à 168 ou 170 trimestres selon l&apos;année de naissance.
            </li>
          </ul>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Année de naissance</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Âge légal de départ</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Trimestres requis (taux plein)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux plein automatique</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1961</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">62 ans et 3 mois</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">169 trimestres</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">67 ans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">1963</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">63 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">170 trimestres</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">67 ans</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1964</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">63 ans et 3 mois</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">171 trimestres</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">67 ans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">1965 – 1967</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">63 ans et 6 mois à 63 ans et 9 mois</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">172 trimestres</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">67 ans</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1968 et après</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">64 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">172 trimestres</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">67 ans</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Décote, taux plein et surcote : les mécanismes en euros</h2>

          <h3>La décote : 1,25% par trimestre manquant</h3>
          <p>
            Si vous partez en retraite avant d&apos;avoir cotisé le nombre de trimestres requis pour
            le taux plein, votre pension subit une <strong>décote de 1,25% par trimestre manquant</strong>,
            dans la limite de 20 trimestres (soit une décote maximale de 25%).
          </p>
          <p>
            Concrètement : si votre pension de base serait de 1 600 €/mois à taux plein et que vous
            partez avec 8 trimestres de moins, votre pension est amputée de 10% (8 × 1,25%) :
            vous touchez <strong>1 440 €/mois</strong>. Sur 20 ans de retraite, c&apos;est 38 400 €
            de moins en valeur nominale.
          </p>

          <h3>Le taux plein automatique à 67 ans</h3>
          <p>
            Quelle que soit votre durée de cotisation, vous partez automatiquement à taux plein
            à <strong>67 ans</strong>. C&apos;est l&apos;âge d&apos;annulation de la décote. Si vous n&apos;avez
            pas les 172 trimestres mais que vous attendez 67 ans, pas de pénalité sur le taux —
            en revanche, votre pension sera calculée sur un nombre de trimestres plus faible,
            donc le montant brut restera proportionnellement réduit.
          </p>

          <h3>La surcote : récompenser ceux qui restent plus longtemps</h3>
          <p>
            Si vous continuez à travailler après avoir atteint le taux plein, chaque trimestre
            supplémentaire vous donne droit à une <strong>surcote de 1,25%</strong> par trimestre.
            Partir 2 ans après le taux plein représente donc +10% de pension.
          </p>

          <h2>Exemple concret : né en 1964 vs né en 1968</h2>

          <h3>Cas 1 : Bernard, né en mars 1964</h3>
          <p>
            Bernard doit attendre 63 ans et 3 mois (soit décembre 2027) pour partir légalement.
            Il lui faut 171 trimestres pour le taux plein. Il a cotisé 168 trimestres à cet âge.
            S&apos;il part en décembre 2027 : 3 trimestres manquants → décote de 3,75%.
            Sa pension théorique à taux plein serait de 1 800 €, il touche <strong>1 732 €/mois</strong>.
            Attendre jusqu&apos;à 67 ans lui rapporterait le taux plein automatique, soit 68 € de plus
            par mois — mais au prix de 3 années et 9 mois de travail supplémentaires.
          </p>

          <h3>Cas 2 : Sophie, née en 1968</h3>
          <p>
            Sophie doit attendre ses 64 ans pile (génération 1968). Elle a commencé à travailler
            à 22 ans après ses études, soit environ 168 trimestres à 64 ans. Il lui manque
            4 trimestres pour le taux plein (172). Deux options : partir à 64 ans avec une décote
            de 5% (soit 1 520 € si la pension théorique est 1 600 €) ou attendre 65 ans pour
            valider 4 trimestres de plus et partir à taux plein. Différence : 80 €/mois,
            soit 960 € par an.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Scénario de départ</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Trimestres manquants</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Décote appliquée</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Pension mensuelle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">À l&apos;âge légal (4 trimestres manquants)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">4</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-red-600">−5%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">1 520 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">1 an après (taux plein)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-green-600">0%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">1 600 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2 ans après (surcote 8 trim.)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">—</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-blue-600">+10%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">1 760 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">À 67 ans (taux plein auto)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-200 px-4 py-2 text-center text-green-600">0%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">1 600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Conseil pratique : <strong>simulez votre retraite sur info-retraite.fr</strong> avec votre
            relevé de carrière réel. Le site gouvernemental est gratuit et prend en compte tous vos régimes
            (salarié, indépendant, fonctionnaire). La simulation se base sur vos trimestres réellement
            cotisés, pas sur des estimations.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-retraite"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur de retraite</p>
            <p className="text-blue-100 text-sm mt-1">Estimez votre pension selon votre âge de départ</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Salaire brut / net</p>
            <p className="text-gray-500 text-sm mt-1">Calculez votre salaire net actuel et les cotisations versées</p>
          </Link>
        </div>
      </article>
    </>
  );
}
