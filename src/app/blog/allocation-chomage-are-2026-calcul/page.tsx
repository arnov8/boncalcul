import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Allocation chômage (ARE) 2026 : calcul, montant et durée",
  description:
    "Comment est calculée l'allocation chômage ARE en 2026 ? Formule, montant journalier, durée d'indemnisation, exemples chiffrés et cas particuliers.",
  keywords: [
    "allocation chômage 2026",
    "calcul ARE",
    "montant chômage",
    "durée indemnisation",
    "France Travail",
    "SJR",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/allocation-chomage-are-2026-calcul",
  },
  openGraph: {
    title: "Allocation chômage (ARE) 2026 : calcul, montant et durée",
    description: "Formule de calcul de l'ARE, exemples chiffrés et durée d'indemnisation.",
    url: "https://www.boncalcul.fr/blog/allocation-chomage-are-2026-calcul",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ChomageAREArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Allocation chômage (ARE) 2026 : calcul, montant et durée",
          description: "Formule de calcul de l'ARE, exemples chiffrés et durée d'indemnisation.",
          url: "https://www.boncalcul.fr/blog/allocation-chomage-are-2026-calcul",
          datePublished: "2026-04-06",
          dateModified: "2026-04-06",
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
            Allocation chômage (ARE) 2026 : calcul, montant et durée
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            L&apos;Allocation d&apos;aide au Retour à l&apos;Emploi (ARE) est versée par France Travail aux
            demandeurs d&apos;emploi involontairement privés d&apos;emploi. Voici comment elle est calculée en 2026.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-04-06">6 avril 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Comment est calculée l&apos;ARE ?</h2>
          <p>Le calcul se fait en 3 étapes :</p>
          <ol>
            <li>
              <strong>Salaire Journalier de Référence (SJR)</strong> = total des salaires bruts des 24 derniers mois ÷ nombre de jours calendaires entre le premier et le dernier jour d&apos;emploi.
            </li>
            <li>
              <strong>Allocation journalière</strong> = le plus élevé entre :
              <ul>
                <li>40,4 % du SJR + partie fixe (~12,95 €/jour)</li>
                <li>57 % du SJR</li>
              </ul>
            </li>
            <li>
              <strong>Plancher</strong> : minimum ~31,59 €/jour (allocation minimale).
              <strong>Plafond</strong> : maximum 75 % du SJR.
            </li>
          </ol>

          <h2>Exemples chiffrés</h2>

          <h3>Exemple 1 : salaire brut de 2 500 €/mois</h3>
          <ul>
            <li>Total brut sur 24 mois : 2 500 × 24 = 60 000 €</li>
            <li>SJR : 60 000 / 730 = <strong>82,19 €/jour</strong></li>
            <li>Calcul 1 : (82,19 × 40,4 %) + 12,95 = 46,15 €</li>
            <li>Calcul 2 : 82,19 × 57 % = 46,85 €</li>
            <li><strong>ARE journalière : 46,85 €</strong> (le plus élevé)</li>
            <li><strong>ARE mensuelle ≈ 1 405 € (30 jours)</strong></li>
          </ul>

          <h3>Exemple 2 : cadre à 4 000 €/mois brut</h3>
          <ul>
            <li>SJR : (4 000 × 24) / 730 = <strong>131,51 €/jour</strong></li>
            <li>Calcul 1 : (131,51 × 40,4 %) + 12,95 = 66,08 €</li>
            <li>Calcul 2 : 131,51 × 57 % = 74,96 €</li>
            <li><strong>ARE journalière : 74,96 €</strong></li>
            <li><strong>ARE mensuelle ≈ 2 249 € (30 jours)</strong></li>
          </ul>

          <h2>Durée d&apos;indemnisation</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Durée d&apos;affiliation</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Durée d&apos;indemnisation max</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">6 mois minimum</td><td className="border border-gray-200 px-4 py-2 text-center">6 mois</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">24 mois (moins de 53 ans)</td><td className="border border-gray-200 px-4 py-2 text-center">18 mois max</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">36 mois (53-54 ans)</td><td className="border border-gray-200 px-4 py-2 text-center">22,5 mois max</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">36 mois (55 ans et plus)</td><td className="border border-gray-200 px-4 py-2 text-center">27 mois max</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            Source :{" "}
            <a href="https://www.unedic.org/la-reglementation/fiches-thematiques/allocation-daide-au-retour-a-lemploi-are" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Unédic
            </a>. Règles applicables depuis 2024.
          </p>

          <h2>Conditions d&apos;éligibilité</h2>
          <ul>
            <li><strong>Perte involontaire d&apos;emploi</strong> : licenciement, rupture conventionnelle, fin de CDD, fin de mission intérim</li>
            <li><strong>Durée minimale d&apos;affiliation</strong> : avoir travaillé au moins 6 mois (130 jours ou 910 heures) dans les 24 derniers mois</li>
            <li><strong>Inscription à France Travail</strong> dans les 12 mois suivant la fin du contrat</li>
            <li><strong>Recherche active d&apos;emploi</strong></li>
          </ul>

          <h2>Cas particuliers</h2>
          <ul>
            <li><strong>Démission</strong> : pas d&apos;ARE sauf démission légitime (suivi de conjoint, projet de reconversion validé par France Travail)</li>
            <li><strong>Rupture conventionnelle</strong> : ouvre droit à l&apos;ARE après un délai de carence (7 jours + différé d&apos;indemnisation)</li>
            <li><strong>Activité réduite</strong> : possibilité de cumuler ARE et salaire si vous reprenez un emploi à temps partiel</li>
          </ul>

          <h2>Erreurs fréquentes</h2>
          <ul>
            <li><strong>Confondre brut et net</strong> : l&apos;ARE est soumise à CSG-CRDS (~6,7 %), le montant versé est donc inférieur au montant brut calculé</li>
            <li><strong>Oublier le délai de carence</strong> : 7 jours de carence systématiques + différé lié aux indemnités de rupture</li>
            <li><strong>Ne pas actualiser sa situation</strong> : déclaration mensuelle obligatoire sous peine de radiation</li>
          </ul>

          <h2>Simulez votre allocation chômage</h2>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-chomage-are"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simuler mon allocation chômage</p>
            <p className="text-blue-100 text-sm mt-1">Gratuit, instantané</p>
          </Link>
          <Link
            href="/outils/simulateur-rupture-conventionnelle"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Rupture conventionnelle</p>
            <p className="text-gray-500 text-sm mt-1">Indemnité + droits ARE</p>
          </Link>
        </div>
      </article>
    </>
  );
}
