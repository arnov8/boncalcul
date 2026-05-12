// FILE: src/app/blog/frais-notaire-neuf-vs-ancien/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Frais de notaire : achat neuf vs ancien — ce qui change vraiment (et ce qui surprend)",
  description:
    "2-3% dans le neuf contre 7-8% dans l'ancien : décomposition réelle des frais de notaire poste par poste, cas VEFA, et l'astuce des meubles pour réduire les droits de mutation.",
  keywords: [
    "frais de notaire neuf",
    "frais de notaire ancien",
    "frais notaire VEFA",
    "droits de mutation",
    "émoluments notaire",
    "meubles déductibles notaire",
    "calcul frais notaire 2026",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/frais-notaire-neuf-vs-ancien" },
  openGraph: {
    title: "Frais de notaire : neuf vs ancien — ce qui change vraiment",
    description: "Pourquoi les frais de notaire sont 3 fois moins élevés dans le neuf ? Décomposition poste par poste et astuce des meubles pour réduire la facture dans l&apos;ancien.",
    url: "https://www.boncalcul.fr/blog/frais-notaire-neuf-vs-ancien",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleFraisNotaireNeufAncien() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Frais de notaire : achat neuf vs ancien — ce qui change vraiment (et ce qui surprend)",
          description:
            "2-3% dans le neuf contre 7-8% dans l'ancien : décomposition des frais de notaire et astuce des meubles déductibles.",
          url: "https://www.boncalcul.fr/blog/frais-notaire-neuf-vs-ancien",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Immobilier</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frais de notaire : achat neuf vs ancien — ce qui change vraiment (et ce qui surprend)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            On dit souvent que les frais de notaire sont de &quot;7-8% dans l&apos;ancien et 2-3% dans le
            neuf&quot;. C&apos;est globalement vrai — mais la plupart des acheteurs ne savent pas pourquoi,
            ni comment en réduire le montant. La réponse tient en trois mots : droits de mutation.
            Et l&apos;astuce des meubles, méconnue, peut faire économiser plusieurs milliers d&apos;euros.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>La décomposition réelle : ce que vous payez vraiment</h2>
          <p>
            Les &quot;frais de notaire&quot; sont en réalité un fourre-tout regroupant trois postes bien
            distincts. Le notaire ne garde pour lui qu&apos;une petite partie : il reverse l&apos;essentiel
            à l&apos;État et aux collectivités locales.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Poste</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Ancien</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Neuf (VEFA)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Nature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Droits de mutation (DMTO)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-red-700">~5,80%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">0,715%</td>
                  <td className="border border-gray-200 px-4 py-2">Taxe reversée au département et à la commune</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">Émoluments du notaire</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">~0,8 – 1%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">~0,8 – 1%</td>
                  <td className="border border-gray-200 px-4 py-2">Rémunération réglementée du notaire (dégressif)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Débours et formalités</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">~0,5 – 1%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">~0,5 – 1%</td>
                  <td className="border border-gray-200 px-4 py-2">Frais avancés : cadastre, hypothèque, documents d&apos;urbanisme</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-bold">TOTAL estimatif</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-red-700">7 – 8%</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">2 – 3%</td>
                  <td className="border border-gray-200 px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            La conclusion est limpide : <strong>la quasi-totalité de l&apos;écart entre neuf et ancien
            vient des droits de mutation</strong>. Dans le neuf, la TVA (20%) a déjà été payée sur
            le prix de vente, donc l&apos;État ne perçoit pas une seconde fois les DMTO à 5,80%.
            Le notaire, lui, est payé de la même façon dans les deux cas.
          </p>

          <h2>La VEFA : cas particulier avec des spécificités importantes</h2>
          <p>
            La Vente en État Futur d&apos;Achèvement (VEFA) — acheter un logement sur plan — est la forme
            la plus courante d&apos;achat dans le neuf. Les frais de notaire y sont réduits (2-3%), mais
            attention à quelques particularités :
          </p>
          <ul>
            <li>
              <strong>L&apos;acte authentique est signé avant la livraison</strong> : vous payez les frais
              de notaire sur le prix total du logement dès la signature, même si la construction n&apos;est
              pas achevée. En cas de défaillance du promoteur, le remboursement des frais est loin d&apos;être
              automatique.
            </li>
            <li>
              <strong>Les lots de parkings et caves</strong> peuvent être vendus séparément à des prix
              distincts et bénéficient des mêmes taux réduits de TVA et DMTO.
            </li>
            <li>
              <strong>Délai de rétractation de 10 jours</strong> après signature du contrat de réservation
              — à ne pas confondre avec le délai de réflexion de l&apos;acte authentique.
            </li>
            <li>
              <strong>Assurance dommages-ouvrage</strong> à prendre en compte dans votre budget global :
              environ 1 à 2% du prix pour un achat neuf hors VEFA.
            </li>
          </ul>

          <h2>L&apos;astuce des meubles : jusqu&apos;à 5 000 € d&apos;économie dans l&apos;ancien</h2>
          <p>
            C&apos;est l&apos;astuce la moins connue des acheteurs dans l&apos;ancien, et pourtant parfaitement légale.
            Les droits de mutation sont calculés sur le <strong>prix du bien immobilier</strong> — pas sur
            les meubles et équipements. Si l&apos;appartement est vendu avec des équipements (cuisine équipée,
            armoires intégrées, parquet...), vous pouvez <strong>déduire leur valeur du prix de vente</strong>
            avant de calculer les droits de mutation.
          </p>
          <p>
            Concrètement : vous achetez un appartement 280 000 € avec une cuisine équipée estimée à
            15 000 €. Si vous mentionnez dans l&apos;acte que 15 000 € correspondent aux meubles, les droits
            de mutation s&apos;appliquent sur <strong>265 000 €</strong> au lieu de 280 000 €.
            À 5,80% de DMTO, c&apos;est <strong>870 € d&apos;économie</strong>.
          </p>
          <p>
            Pour les biens plus importants avec cuisine, appareils électroménagers, mobilier fixe et
            parquet flottant, il n&apos;est pas rare de déduire 20 000 à 30 000 €, soit
            <strong> 1 160 € à 1 740 € de droits de mutation économisés</strong>.
          </p>

          <div className="not-prose my-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p className="font-semibold text-amber-800 mb-2">Conditions pour déduire les meubles</p>
            <ul className="text-amber-900 text-sm space-y-1 list-disc list-inside">
              <li>L&apos;inventaire doit être <strong>annexé à la promesse de vente et à l&apos;acte authentique</strong></li>
              <li>Chaque élément doit être identifié et valorisé séparément (liste précise)</li>
              <li>Les valeurs doivent être cohérentes et justifiables (factures, estimation)</li>
              <li>Seuls les <strong>meubles meublants</strong> sont éligibles (pas les équipements fixes considérés comme immeubles par destination)</li>
              <li>En pratique, cuisine équipée démontable, électroménager, luminaires, rideaux, meubles de rangement non fixés</li>
            </ul>
          </div>

          <h2>Exemples chiffrés : comparer neuf et ancien à budget équivalent</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Prix du bien</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Frais notaire ancien (~7,5%)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Frais notaire neuf (~2,5%)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Économie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">200 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">15 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">5 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">10 000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">300 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">22 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">7 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">15 000 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">450 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">33 750 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">11 250 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">22 500 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            L&apos;économie est réelle mais doit être mise en perspective : un bien neuf est souvent vendu
            plus cher au m² qu&apos;un bien ancien comparable dans le même secteur (prime de 15 à 25% selon
            les marchés). L&apos;avantage des frais réduits ne compense pas toujours la différence de prix
            à l&apos;achat. C&apos;est pourquoi il est essentiel de simuler les deux scénarios sur la durée.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-frais-de-notaire"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de frais de notaire</p>
            <p className="text-blue-100 text-sm mt-1">Estimez vos frais pour un achat neuf ou ancien, avec ou sans meubles</p>
          </Link>
          <Link
            href="/outils/simulateur-pret-immobilier"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur de prêt immobilier</p>
            <p className="text-gray-500 text-sm mt-1">Calculez vos mensualités en intégrant les frais de notaire</p>
          </Link>
        </div>
      </article>
    </>
  );
}
