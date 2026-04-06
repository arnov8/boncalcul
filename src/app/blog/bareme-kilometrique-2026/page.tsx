import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Barème kilométrique 2026 : tableau, calcul et exemple",
  description:
    "Le barème kilométrique fiscal 2026 pour les voitures, motos et véhicules électriques. Tableau officiel, formule de calcul et exemples concrets de frais réels.",
  keywords: [
    "barème kilométrique 2026",
    "frais kilométriques",
    "barème km impôts",
    "frais réels",
    "indemnités kilométriques",
    "véhicule électrique",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/bareme-kilometrique-2026",
  },
  openGraph: {
    title: "Barème kilométrique 2026 : tableau, calcul et exemple",
    description: "Le barème fiscal officiel 2026 pour déduire vos frais kilométriques des impôts.",
    url: "https://www.boncalcul.fr/blog/bareme-kilometrique-2026",
    type: "article",
    locale: "fr_FR",
  },
};

export default function BaremeKmArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Barème kilométrique 2026 : tableau, calcul et exemple",
          description: "Le barème fiscal officiel 2026 pour les frais kilométriques.",
          url: "https://www.boncalcul.fr/blog/bareme-kilometrique-2026",
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
            Barème kilométrique 2026 : tableau, calcul et exemple
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Le barème kilométrique fiscal permet de déduire les frais de trajet domicile-travail
            de vos impôts en frais réels. Voici le tableau officiel 2026 et des exemples de calcul.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-04-06">6 avril 2026</time>
            <span>5 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Barème kilométrique 2026 — Voitures</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-3 text-left font-semibold text-gray-700">CV fiscaux</th>
                  <th className="border border-gray-200 px-3 py-3 text-center font-semibold text-gray-700">Jusqu&apos;à 5 000 km</th>
                  <th className="border border-gray-200 px-3 py-3 text-center font-semibold text-gray-700">5 001 à 20 000 km</th>
                  <th className="border border-gray-200 px-3 py-3 text-center font-semibold text-gray-700">Au-delà de 20 000 km</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-3 py-2 font-medium">3 CV et moins</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,529</td><td className="border border-gray-200 px-3 py-2 text-center">(d × 0,316) + 1 065</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,370</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 font-medium">4 CV</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,606</td><td className="border border-gray-200 px-3 py-2 text-center">(d × 0,340) + 1 330</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,407</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2 font-medium">5 CV</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,636</td><td className="border border-gray-200 px-3 py-2 text-center">(d × 0,357) + 1 395</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,427</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 font-medium">6 CV</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,665</td><td className="border border-gray-200 px-3 py-2 text-center">(d × 0,374) + 1 457</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,447</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2 font-medium">7 CV et plus</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,697</td><td className="border border-gray-200 px-3 py-2 text-center">(d × 0,394) + 1 515</td><td className="border border-gray-200 px-3 py-2 text-center">d × 0,470</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 italic">
            d = distance annuelle en km. Source :{" "}
            <a href="https://bofip.impots.gouv.fr/bofip/2568-PGP.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              BOFIP
            </a>
          </p>

          <h2>Véhicules électriques : majoration de 20 %</h2>
          <p>
            Depuis 2021, les <strong>véhicules 100 % électriques</strong> bénéficient d&apos;une majoration
            de 20 % du barème kilométrique. Par exemple, pour un véhicule électrique de 5 CV parcourant
            12 000 km : frais = ((12 000 × 0,357) + 1 395) × 1,20 = <strong>6 808 €</strong> au lieu de 5 679 €.
          </p>

          <h2>Exemple complet : trajet domicile-travail</h2>
          <p>
            Marie habite à 25 km de son travail. Elle travaille 228 jours par an.
            Sa voiture fait 6 CV.
          </p>
          <ul>
            <li>Distance aller-retour : 25 × 2 = 50 km/jour</li>
            <li>Distance annuelle : 50 × 228 = <strong>11 400 km</strong></li>
            <li>Formule (5 001-20 000 km, 6 CV) : (11 400 × 0,374) + 1 457</li>
            <li><strong>Frais déductibles : 5 721 €</strong></li>
          </ul>
          <p>
            Si l&apos;abattement forfaitaire de 10 % sur son salaire est inférieur à 5 721 €
            (salaire net imposable &lt; 57 210 €), elle a intérêt à opter pour les frais réels.
          </p>

          <h2>Frais réels vs abattement de 10 %</h2>
          <p>
            Par défaut, l&apos;administration applique un abattement forfaitaire de 10 % sur vos salaires
            (minimum 495 €, maximum 14 171 € en 2026). Si vos frais kilométriques + autres frais professionnels
            dépassent cet abattement, vous avez intérêt à déclarer vos <strong>frais réels</strong>.
          </p>

          <h2>Erreurs fréquentes</h2>
          <ul>
            <li><strong>Dépasser 80 km aller</strong> : au-delà de 40 km de distance, seuls les 40 premiers km sont déductibles (sauf justification).</li>
            <li><strong>Oublier les péages et parking</strong> : ils sont déductibles en plus du barème (sur justificatifs).</li>
            <li><strong>Cumuler barème et frais réels de carburant</strong> : le barème inclut déjà le carburant, l&apos;assurance, l&apos;entretien et la décote.</li>
          </ul>

          <h2>Calculez vos frais kilométriques</h2>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-frais-kilometriques"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mes frais kilométriques</p>
            <p className="text-blue-100 text-sm mt-1">Barème fiscal 2026</p>
          </Link>
          <Link
            href="/outils/simulateur-impot-revenu"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Simuler mon impôt</p>
            <p className="text-gray-500 text-sm mt-1">Avec frais réels</p>
          </Link>
        </div>
      </article>
    </>
  );
}
