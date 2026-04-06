"use client";

import Infographic from "@/components/Infographic";

export default function InfographieCarrez() {
  return (
    <Infographic
      title="Loi Carrez : quelles surfaces comptent ?"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-surface-carrez"
      sourceLabel="BonCalcul.fr - Calcul surface Carrez"
    >
      {/* Height rule */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6 text-center">
        <p className="text-sm font-semibold text-blue-700 mb-2">Regle fondamentale</p>
        <p className="text-3xl font-bold text-blue-800 mb-1">&#8805; 1,80 m</p>
        <p className="text-xs text-blue-600">Seules les surfaces dont la hauteur sous plafond est superieure ou egale a 1,80 m sont comptabilisees</p>
      </div>

      {/* Included / Excluded */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <p className="text-sm font-semibold text-green-700 mb-3 text-center">&#10003; Surfaces incluses</p>
          <ul className="text-xs text-green-800 space-y-2">
            <li>&#9632; Pieces principales (sejour, chambres)</li>
            <li>&#9632; Cuisine et salle de bain</li>
            <li>&#9632; Couloirs et degagements</li>
            <li>&#9632; Rangements integres (&gt; 1,80 m)</li>
            <li>&#9632; Veranda fermee</li>
            <li>&#9632; Combles amenages (&gt; 1,80 m)</li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-xl p-5 border border-red-200">
          <p className="text-sm font-semibold text-red-700 mb-3 text-center">&#10007; Surfaces exclues</p>
          <ul className="text-xs text-red-800 space-y-2">
            <li>&#9632; Murs, cloisons, embrasures</li>
            <li>&#9632; Cages d&apos;escalier</li>
            <li>&#9632; Caves et garages</li>
            <li>&#9632; Balcons et terrasses</li>
            <li>&#9632; Places de parking</li>
            <li>&#9632; Surfaces &lt; 1,80 m hauteur</li>
          </ul>
        </div>
      </div>

      {/* Legal note */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
        <p className="text-xs text-amber-800">
          <strong>Attention :</strong> si la surface reelle est inferieure de plus de 5% a celle indiquee dans l&apos;acte de vente,
          l&apos;acheteur peut demander une reduction proportionnelle du prix (action possible pendant 1 an).
        </p>
      </div>
    </Infographic>
  );
}
