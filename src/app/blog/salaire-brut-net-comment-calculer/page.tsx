import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Comment calculer son salaire brut en net en 2026 (avec exemples)",
  description:
    "Apprenez à convertir votre salaire brut en net : taux de cotisations 2026, différences cadre/non-cadre, exemples chiffrés et erreurs à éviter.",
  keywords: [
    "salaire brut net",
    "comment calculer brut en net",
    "cotisations salariales 2026",
    "salaire cadre non cadre",
    "conversion salaire",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/salaire-brut-net-comment-calculer",
  },
  openGraph: {
    title: "Comment calculer son salaire brut en net en 2026",
    description: "Taux de cotisations, exemples cadre/non-cadre et erreurs à éviter.",
    url: "https://www.boncalcul.fr/blog/salaire-brut-net-comment-calculer",
    type: "article",
    locale: "fr_FR",
  },
};

export default function BrutNetArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Comment calculer son salaire brut en net en 2026 (avec exemples)",
          description: "Taux de cotisations, exemples cadre/non-cadre et erreurs à éviter.",
          url: "https://www.boncalcul.fr/blog/salaire-brut-net-comment-calculer",
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
            Comment calculer son salaire brut en net en 2026
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Vous avez reçu une offre d&apos;emploi en brut annuel et vous voulez savoir ce que vous toucherez
            réellement chaque mois ? Voici la méthode de calcul, avec les taux 2026 et des exemples concrets.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-04-06">6 avril 2026</time>
            <span>5 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>La formule simple</h2>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono not-prose">
            Salaire net ≈ Salaire brut × (1 − taux de cotisations)
          </p>
          <ul>
            <li><strong>Non-cadre</strong> : taux ≈ 22 % → net ≈ brut × 0,78</li>
            <li><strong>Cadre</strong> : taux ≈ 25 % → net ≈ brut × 0,75</li>
          </ul>

          <h2>Exemples chiffrés</h2>

          <h3>Exemple 1 : 30 000 € brut annuel, non-cadre</h3>
          <ul>
            <li>Brut mensuel : 30 000 / 12 = 2 500 €</li>
            <li>Cotisations : 2 500 × 22 % = 550 €</li>
            <li><strong>Net mensuel ≈ 1 950 €</strong></li>
          </ul>

          <h3>Exemple 2 : 45 000 € brut annuel, cadre</h3>
          <ul>
            <li>Brut mensuel : 45 000 / 12 = 3 750 €</li>
            <li>Cotisations : 3 750 × 25 % = 937,50 €</li>
            <li><strong>Net mensuel ≈ 2 812 €</strong></li>
          </ul>

          <h3>Exemple 3 : SMIC 2026</h3>
          <ul>
            <li>Brut mensuel : 1 802,67 €</li>
            <li>Cotisations : 1 802,67 × 22 % = 396,59 €</li>
            <li><strong>Net mensuel ≈ 1 406 €</strong></li>
          </ul>

          <h2>Détail des cotisations salariales</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Cotisation</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux (≈)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">CSG-CRDS</td><td className="border border-gray-200 px-4 py-2 text-center">9,7 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Retraite (base + complémentaire)</td><td className="border border-gray-200 px-4 py-2 text-center">11 - 11,3 %</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Assurance chômage (part salariale)</td><td className="border border-gray-200 px-4 py-2 text-center">0 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Complémentaire santé</td><td className="border border-gray-200 px-4 py-2 text-center">~1,5 %</td></tr>
                <tr className="font-semibold"><td className="border border-gray-200 px-4 py-2">Total non-cadre / cadre</td><td className="border border-gray-200 px-4 py-2 text-center">~22 % / ~25 %</td></tr>
              </tbody>
            </table>
          </div>

          <h2>5 erreurs fréquentes</h2>
          <ol>
            <li><strong>Confondre net et net imposable</strong> : le &laquo; net à payer avant impôt &raquo; de votre fiche de paie est le net. Le &laquo; net imposable &raquo; est légèrement supérieur (CSG non déductible).</li>
            <li><strong>Ne pas tenir compte du statut</strong> : 3 points d&apos;écart entre cadre et non-cadre, soit ~100 €/mois pour un salaire de 3 000 € brut.</li>
            <li><strong>Oublier le 13e mois</strong> : si l&apos;offre mentionne &laquo; sur 13 mois &raquo;, divisez par 13 pour le mensuel réel.</li>
            <li><strong>Ignorer les avantages en nature</strong> : tickets restaurant, mutuelle prise en charge à 50 %, prime transport.</li>
            <li><strong>Comparer brut et net</strong> : comparez toujours les offres sur la même base (net mensuel ou brut annuel).</li>
          </ol>

          <h2>Calculez en un clic</h2>
          <p>
            Notre convertisseur utilise les taux de cotisations URSSAF 2026. Résultat instantané, cadre ou non-cadre :
          </p>
        </div>

        <div className="my-8">
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Convertir mon salaire brut en net
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Gratuit, instantané, sans inscription
            </p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Articles liés</h2>
          <ul>
            <li><Link href="/blog/smic-2026-montant-horaire-mensuel">SMIC 2026 : tous les montants</Link></li>
            <li><Link href="/outils/cout-salarie-employeur">Coût d&apos;un salarié pour l&apos;employeur</Link></li>
            <li><Link href="/emploi">Tous nos outils emploi & salaire</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
