// FILE: src/app/blog/surface-carrez-inclus-exclus-litiges/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Surface Carrez : ce qui est inclus, exclu, et les litiges fréquents entre vendeurs et acheteurs",
  description: "Caves, balcons, combles, garage : que compte-t-on vraiment dans la surface Carrez ? Seuil de tolérance de 5%, recours possibles et différence avec la surface habitable (loi Boutin).",
  keywords: ["surface Carrez", "loi Carrez", "calcul surface Carrez", "litige surface", "seuil 5%", "surface habitable", "loi Boutin", "vente appartement"],
  alternates: { canonical: "https://www.boncalcul.fr/blog/surface-carrez-inclus-exclus-litiges" },
  openGraph: {
    title: "Surface Carrez : ce qui est inclus, exclu, et les litiges fréquents entre vendeurs et acheteurs",
    description: "Caves, balcons, combles, garage : que compte-t-on vraiment dans la surface Carrez ? Seuil de tolérance de 5%, recours possibles et différence avec la surface habitable (loi Boutin).",
    url: "https://www.boncalcul.fr/blog/surface-carrez-inclus-exclus-litiges",
    type: "article",
    locale: "fr_FR",
  },
};

export default function SurfaceCarrez() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Surface Carrez : ce qui est inclus, exclu, et les litiges fréquents entre vendeurs et acheteurs",
          description: "Caves, balcons, combles, garage : que compte-t-on vraiment dans la surface Carrez ? Seuil de tolérance de 5%, recours possibles et différence avec la surface habitable (loi Boutin).",
          url: "https://www.boncalcul.fr/blog/surface-carrez-inclus-exclus-litiges",
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
            Surface Carrez : ce qui est inclus, exclu, et les litiges fréquents entre vendeurs et acheteurs
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Une différence de 3 m² entre la surface annoncée et la surface réelle peut sembler anodine. Mais en immobilier, ce petit écart peut ouvrir droit à une diminution du prix de vente — voire à la nullité du contrat. Voici ce que dit vraiment la loi Carrez.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Ce que mesure la surface Carrez</h2>
          <p>
            La loi Carrez, entrée en vigueur en 1997, s'applique à la vente de lots en copropriété de plus de 8 m². Elle impose au vendeur de mentionner dans l'acte de vente la <strong>superficie privative</strong> du lot, calculée selon des règles précises.
          </p>
          <p>
            On mesure la <strong>surface de plancher clos et couvert</strong>, déduction faite des murs, cloisons, marches et cages d'escaliers, gaines, embrasures de portes et fenêtres. La règle clé : <strong>seules les surfaces avec une hauteur sous plafond d'au moins 1,80 m sont comptabilisées</strong>. En dessous de ce seuil, la surface est exclue du calcul, même si l'espace est techniquement utilisable.
          </p>

          <h2>Ce qui est inclus et ce qui ne l'est pas</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Espace</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Inclus dans la surface Carrez ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Pièces de vie (salon, chambre, cuisine, salle de bain)</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-700 font-medium">Oui</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Couloir, entrée, WC</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-700 font-medium">Oui</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Combles aménagés (hauteur ≥ 1,80 m)</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-700 font-medium">Oui</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Combles non aménageables ou hauteur &lt; 1,80 m</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600 font-medium">Non</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Cave (même si partie du lot)</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600 font-medium">Non</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Garage, parking, box</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600 font-medium">Non</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Balcon, terrasse, loggia</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600 font-medium">Non</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Jardin privatif</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600 font-medium">Non</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Vérandas fermées (hauteur ≥ 1,80 m)</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-700 font-medium">Oui</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Le seuil de tolérance de 5 % et ses conséquences</h2>
          <p>
            La loi prévoit un mécanisme de protection pour l'acheteur : si la surface réelle est <strong>inférieure de plus de 5 %</strong> à la surface mentionnée dans l'acte de vente, l'acheteur peut demander une <strong>réduction proportionnelle du prix</strong>.
          </p>
          <p>
            Exemple concret : un appartement vendu 300 000 € avec une surface annoncée de 65 m². Si le mesurage contradictoire révèle 61 m² (écart de 6,2 %), l'acheteur peut réclamer une diminution de prix de 6,2 %, soit environ <strong>18 600 €</strong> à rembourser par le vendeur.
          </p>
          <p>
            Ce droit d'action en diminution du prix se prescrit par <strong>1 an à compter de la signature de l'acte authentique</strong>. Passé ce délai, l'acheteur ne peut plus agir. Et si la surface n'est tout simplement pas mentionnée dans l'acte, l'acheteur peut demander la <strong>nullité de la vente</strong>.
          </p>

          <h2>Les erreurs fréquentes des vendeurs</h2>
          <p>
            La plus courante : inclure le balcon dans la surface totale présentée sur l'annonce, parfois par habitude, parfois par erreur de bonne foi. Un balcon de 10 m² vient gonfler une surface Carrez de 50 m² à 60 m² sur l'annonce — et l'acheteur peut légitimement se sentir trompé.
          </p>
          <p>
            Autre piège classique : les sous-pentes. Dans un appartement sous combles, une large partie du plancher peut être sous les 1,80 m réglementaires. Un vendeur qui mesure "à vue d'œil" sans appliquer la règle de hauteur peut se retrouver avec un écart significatif par rapport à la surface légale.
          </p>
          <p>
            C'est pourquoi, même si la loi n'impose pas de passer par un professionnel certifié, faire appel à un <strong>géomètre ou un diagnostiqueur</strong> pour établir le mesurage Carrez est souvent la décision la plus sage avant de mettre en vente.
          </p>

          <h2>Surface Carrez vs surface habitable (loi Boutin) : quelle différence ?</h2>
          <p>
            La loi Boutin s'applique à la <strong>location</strong> (depuis 2009) et définit la <strong>surface habitable</strong>. Le calcul est similaire à Carrez sur la règle des 1,80 m, mais exclut en plus les combles non aménagés, les sous-sols, les remises, les garages et les vérandas non chauffées. La surface habitable est donc généralement inférieure ou égale à la surface Carrez.
          </p>
          <p>
            En pratique : un bailleur mentionne la surface habitable dans le bail, un vendeur mentionne la surface Carrez dans l'acte de vente. Ce sont deux mesures différentes, régies par deux lois différentes, et elles ne sont pas interchangeables.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-surface-carrez"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer ma surface Carrez</p>
            <p className="text-blue-100 text-sm mt-1">Estimez la superficie privative de votre bien selon les règles légales</p>
          </Link>
          <Link
            href="/outils/calcul-frais-de-notaire"
            className="flex-1 block bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Frais de notaire</p>
            <p className="text-blue-100 text-sm mt-1">Estimez les frais d'acquisition pour votre achat immobilier</p>
          </Link>
        </div>
      </article>
    </>
  );
}
