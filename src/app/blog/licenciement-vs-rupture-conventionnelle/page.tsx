// FILE: src/app/blog/licenciement-vs-rupture-conventionnelle/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Licenciement économique vs rupture conventionnelle : quel choix est plus avantageux ?",
  description:
    "Comparatif licenciement économique et rupture conventionnelle en 2026 : indemnités, droits ARE, délai de carence, tableaux et situations où chaque option est plus favorable.",
  keywords: [
    "licenciement économique vs rupture conventionnelle",
    "comparatif licenciement rupture conventionnelle",
    "indemnités licenciement 2026",
    "chômage licenciement rupture conventionnelle",
    "avantages rupture conventionnelle",
    "plan de sauvegarde emploi",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/licenciement-vs-rupture-conventionnelle",
  },
  openGraph: {
    title: "Licenciement économique vs rupture conventionnelle : lequel choisir ?",
    description: "Indemnités, ARE, délai de carence — comparatif complet 2026.",
    url: "https://www.boncalcul.fr/blog/licenciement-vs-rupture-conventionnelle",
    type: "article",
    locale: "fr_FR",
  },
};

export default function LicenciementVsRuptureArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Licenciement économique vs rupture conventionnelle : quel choix est plus avantageux ?",
          description: "Indemnités, ARE, délai de carence — comparatif complet 2026.",
          url: "https://www.boncalcul.fr/blog/licenciement-vs-rupture-conventionnelle",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Emploi</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Licenciement économique vs rupture conventionnelle : quel choix est plus avantageux ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            L&apos;entreprise de David restructure et lui propose le choix : licenciement économique ou rupture conventionnelle. Il hésite. Les deux ouvrent droit au chômage, mais les montants, les délais et les protections ne sont pas identiques. Voici comment trancher selon votre situation.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Les indemnités : un plancher identique, mais des plafonds différents</h2>
          <p>
            Le plancher légal de l&apos;indemnité est identique pour les deux modes de rupture : <strong>1/4 de mois par année pour les 10 premières années, 1/3 de mois au-delà</strong> (articles L1234-9 et R1234-2 du Code du travail). Le salaire de référence est le même également — la moyenne la plus favorable entre les 12 ou les 3 derniers mois.
          </p>
          <p>
            Mais en pratique, les montants réels divergent souvent :
          </p>
          <ul>
            <li>En cas de <strong>licenciement économique dans une grande entreprise</strong> (50 salariés et plus), un Plan de Sauvegarde de l&apos;Emploi (PSE) peut prévoir des indemnités supra-légales significativement plus élevées — parfois 2 à 3 fois le plancher légal.</li>
            <li>En <strong>rupture conventionnelle</strong>, l&apos;indemnité supra-légale est entièrement négociée de gré à gré, sans plancher supérieur au légal imposé par l&apos;employeur.</li>
          </ul>
          <p>
            En clair : si un PSE est sur la table, le licenciement économique est souvent financièrement plus généreux. Si pas de PSE, les deux points de départ sont équivalents.
          </p>

          <h2>Tableau comparatif complet</h2>
        </div>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Critère</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Licenciement économique</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Rupture conventionnelle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Indemnité légale minimum</td>
                <td className="border border-gray-200 px-4 py-2 text-center">1/4 mois × années (≤10 ans)<br/>1/3 mois × années (&gt;10 ans)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Identique</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">PSE / indemnités supra-légales imposées</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (si PSE obligatoire)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Non — négociation libre</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Droits à l&apos;ARE (chômage)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Délai de carence ARE</td>
                <td className="border border-gray-200 px-4 py-2 text-center">7 jours + CP non pris</td>
                <td className="border border-gray-200 px-4 py-2 text-center">7 jours + CP non pris + franchise supra-légale (max 150j)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Préavis</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Obligatoire (1 à 2 mois selon ancienneté)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Aucun — date fixée d&apos;un commun accord</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Exonération IR de l&apos;indemnité</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (dans les limites légales)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (jusqu&apos;à 2 PASS = 92 736 €)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Congé de reclassement</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Oui (entreprises &gt;1 000 salariés)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Non</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Risque de contentieux</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Possible (motif économique contestable)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Faible (accord bilatéral homologué)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Le délai de carence ARE : avantage au licenciement économique</h2>
          <p>
            C&apos;est souvent l&apos;argument décisif en pratique. En cas de licenciement économique, le délai de carence se limite à :
          </p>
          <ul>
            <li>7 jours incompressibles</li>
            <li>Le différé congés payés (CP non pris × 1/30e du salaire mensuel moyen)</li>
          </ul>
          <p>
            En rupture conventionnelle, s&apos;y ajoute un <strong>différé spécifique lié aux indemnités supra-légales</strong> : chaque euro reçu au-delà du plancher légal est divisé par le salaire journalier de référence pour calculer des jours de carence supplémentaires (plafonné à 150 jours soit environ 5 mois).
          </p>
          <p>
            Concrètement : David a un SJR de 120 €. Son employeur lui propose 8 000 € de supra-légal en rupture conventionnelle. Ça lui ajoute 66 jours de carence, soit plus de 2 mois sans chômage. Si l&apos;indemnité reste au plancher légal en licenciement, il commence à toucher l&apos;ARE bien plus tôt.
          </p>

          <h2>Situations où le licenciement économique est clairement meilleur</h2>
          <ul>
            <li><strong>PSE en place</strong> : les indemnités sont souvent 2 à 4 fois supérieures au légal, avec formation, cellule de reclassement, parfois maintien du salaire pendant plusieurs mois.</li>
            <li><strong>Entreprise de plus de 1 000 salariés</strong> : obligation du congé de reclassement rémunéré, qui peut durer 4 à 9 mois au-delà du préavis.</li>
            <li><strong>Salarié proche de la retraite</strong> : certaines conventions collectives prévoient des indemnités de licenciement économique majorées pour les seniors.</li>
          </ul>

          <h2>Situations où la rupture conventionnelle est plus avantageuse</h2>
          <ul>
            <li><strong>Pas de PSE prévu</strong> : si l&apos;employeur n&apos;a aucune obligation d&apos;indemnité supra-légale, la rupture conventionnelle donne la même base légale mais laisse le champ libre à la négociation.</li>
            <li><strong>Départ rapide souhaité</strong> : sans préavis à effectuer, la rupture conventionnelle permet de partir plus vite, notamment pour créer une entreprise ou rejoindre un concurrent.</li>
            <li><strong>Bonne relation employeur/salarié</strong> : la rupture conventionnelle est moins stigmatisante que le licenciement, certains employeurs y sont plus ouverts.</li>
          </ul>

          <h2>Exemple chiffré comparatif</h2>
          <p>
            Stéphanie, 12 ans d&apos;ancienneté, salaire moyen 3 500 € brut :
          </p>
          <ul>
            <li>Plancher légal (commun aux deux) : (3 500 × 1/4 × 10) + (3 500 × 1/3 × 2) = 8 750 + 2 333 = <strong>11 083 €</strong></li>
            <li>Avec PSE généreux (3 mois de salaire supplémentaires) : 11 083 + 10 500 = <strong>21 583 €</strong>, mais pas de franchise ARE sur le supra-légal en licenciement éco.</li>
            <li>En rupture conventionnelle avec 5 000 € de supra-légal : 16 083 €, mais ~41 jours de carence ARE supplémentaires.</li>
          </ul>
          <p>
            La différence n&apos;est pas seulement dans les chiffres bruts : il faut intégrer la durée avant le premier versement ARE dans le calcul de ce qui est réellement perçu dans les 6 premiers mois.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-indemnites-licenciement"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur indemnités de licenciement</p>
            <p className="text-blue-100 text-sm mt-1">Plancher légal 2026, ancienneté et salaire</p>
          </Link>
          <Link
            href="/outils/simulateur-rupture-conventionnelle"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Simulateur rupture conventionnelle</p>
            <p className="text-gray-500 text-sm mt-1">Indemnité et délai de carence ARE</p>
          </Link>
        </div>
      </article>
    </>
  );
}
