import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Barème impôt sur le revenu 2026 : tranches, taux et exemples de calcul",
  description:
    "Découvrez le barème progressif de l'impôt sur le revenu 2026 (revenus 2025) : tranches, taux, quotient familial et exemples chiffrés pour calculer votre impôt.",
  keywords: [
    "barème impôt 2026",
    "tranches imposition 2026",
    "taux impôt revenu",
    "calcul impôt 2026",
    "quotient familial",
    "barème progressif",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/bareme-impot-revenu-2026",
  },
  openGraph: {
    title: "Barème impôt sur le revenu 2026 : tranches, taux et exemples",
    description:
      "Le barème progressif 2026, les tranches d'imposition et des exemples concrets pour estimer votre impôt.",
    url: "https://www.boncalcul.fr/blog/bareme-impot-revenu-2026",
    type: "article",
    locale: "fr_FR",
  },
};

export default function BaremeImpotArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Barème impôt sur le revenu 2026 : tranches, taux et exemples de calcul",
          description:
            "Découvrez le barème progressif de l'impôt sur le revenu 2026 (revenus 2025) avec des exemples chiffrés.",
          url: "https://www.boncalcul.fr/blog/bareme-impot-revenu-2026",
          datePublished: "2026-04-06",
          dateModified: "2026-04-06",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Fiscalité</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Barème impôt sur le revenu 2026 : tranches, taux et exemples de calcul
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Le barème progressif de l&apos;impôt sur le revenu 2026 s&apos;applique aux revenus perçus en 2025.
            Voici les tranches, les taux, le fonctionnement du quotient familial et des exemples concrets
            pour estimer votre impôt.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-04-06">6 avril 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Le barème progressif 2026 (revenus 2025)</h2>
          <p>
            Le barème de l&apos;impôt sur le revenu est <strong>progressif</strong> : chaque tranche de revenu est
            imposée à un taux différent. Seule la portion de revenu dans chaque tranche est taxée au taux correspondant.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Tranche de revenu imposable (par part)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">Jusqu&apos;à 11 294 €</td><td className="border border-gray-200 px-4 py-2 text-center font-semibold text-green-600">0 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">De 11 295 € à 28 797 €</td><td className="border border-gray-200 px-4 py-2 text-center font-semibold">11 %</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">De 28 798 € à 82 341 €</td><td className="border border-gray-200 px-4 py-2 text-center font-semibold">30 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">De 82 342 € à 177 106 €</td><td className="border border-gray-200 px-4 py-2 text-center font-semibold">41 %</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Au-delà de 177 106 €</td><td className="border border-gray-200 px-4 py-2 text-center font-semibold text-red-600">45 %</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 italic">
            Source :{" "}
            <a href="https://www.impots.gouv.fr/particulier/le-bareme-de-limpot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              impots.gouv.fr
            </a>
            . Barème applicable aux revenus 2025, déclarés en 2026.
          </p>

          <h2>Exemple 1 : célibataire gagnant 35 000 € net imposable</h2>
          <p>Pour une personne seule (1 part) avec un revenu net imposable de 35 000 € :</p>
          <ul>
            <li><strong>Tranche à 0 %</strong> : 11 294 × 0 % = <strong>0 €</strong></li>
            <li><strong>Tranche à 11 %</strong> : (28 797 − 11 294) × 11 % = 17 503 × 11 % = <strong>1 925 €</strong></li>
            <li><strong>Tranche à 30 %</strong> : (35 000 − 28 797) × 30 % = 6 203 × 30 % = <strong>1 861 €</strong></li>
          </ul>
          <p>
            <strong>Impôt total : 3 786 €</strong>, soit un taux moyen de 10,8 % et un taux marginal de 30 %.
          </p>

          <h2>Exemple 2 : couple marié avec 2 enfants, 60 000 € de revenus</h2>
          <p>
            Un couple marié avec 2 enfants dispose de <strong>3 parts fiscales</strong> (2 + 0,5 + 0,5).
            Le quotient familial est : 60 000 / 3 = 20 000 € par part.
          </p>
          <ul>
            <li>Tranche à 0 % : 11 294 × 0 % = 0 €</li>
            <li>Tranche à 11 % : (20 000 − 11 294) × 11 % = 8 706 × 11 % = 958 €</li>
          </ul>
          <p>
            Impôt par part : 958 €. <strong>Impôt total : 958 × 3 = 2 874 €</strong>, soit un taux moyen de seulement 4,8 %.
          </p>

          <h2>Comment fonctionne le quotient familial ?</h2>
          <p>
            Le quotient familial divise le revenu imposable par le nombre de parts du foyer :
          </p>
          <ul>
            <li>Célibataire : <strong>1 part</strong></li>
            <li>Couple marié / pacsé : <strong>2 parts</strong></li>
            <li>1er et 2e enfant : <strong>+0,5 part</strong> chacun</li>
            <li>À partir du 3e enfant : <strong>+1 part</strong> par enfant</li>
          </ul>
          <p>
            L&apos;avantage est plafonné à <strong>1 759 € par demi-part supplémentaire</strong> en 2026.
          </p>

          <h2>Erreurs fréquentes</h2>
          <ul>
            <li>
              <strong>Croire que tout le revenu est taxé au taux marginal</strong> : un TMI de 30 % ne signifie pas que vous payez 30 % sur la totalité de vos revenus. Seule la partie au-dessus de 28 797 € est taxée à 30 %.
            </li>
            <li>
              <strong>Confondre revenu brut et revenu net imposable</strong> : l&apos;abattement forfaitaire de 10 % pour frais professionnels réduit la base imposable.
            </li>
            <li>
              <strong>Oublier la décote</strong> : pour les foyers modestement imposés, une décote réduit encore l&apos;impôt.
            </li>
          </ul>

          <h2>Simulez votre impôt en quelques secondes</h2>
          <p>
            Plutôt que de calculer manuellement, utilisez notre simulateur gratuit pour obtenir
            le montant exact de votre impôt avec le détail par tranche :
          </p>
        </div>

        <div className="my-8">
          <Link
            href="/outils/simulateur-impot-revenu"
            className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Simuler mon impôt sur le revenu 2026
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Gratuit, instantané, sans inscription
            </p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Articles liés</h2>
          <ul>
            <li>
              <Link href="/blog/declaration-impots-2026-guide">
                Déclaration d&apos;impôts 2026 : le guide complet
              </Link>
            </li>
            <li>
              <Link href="/outils/calcul-frais-kilometriques">
                Calculer ses frais kilométriques déductibles
              </Link>
            </li>
            <li>
              <Link href="/fiscalite">
                Tous nos outils fiscalité
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
