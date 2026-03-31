"use client";

import Infographic from "@/components/Infographic";

const couts = [
  { label: "Carburant", montant: 1800, color: "bg-red-500", pct: 30 },
  { label: "Assurance", montant: 900, color: "bg-blue-500", pct: 15 },
  { label: "Entretien / reparations", montant: 1200, color: "bg-orange-400", pct: 20 },
  { label: "Decote", montant: 1500, color: "bg-purple-500", pct: 25 },
  { label: "Autres (stationnement, peages...)", montant: 600, color: "bg-gray-400", pct: 10 },
];
const total = couts.reduce((s, c) => s + c.montant, 0);

export default function InfographieCoutKm() {
  return (
    <Infographic
      title="Cout reel au kilometre d'une voiture"
      sourceUrl="https://boncalcul.fr/outils/cout-km-voiture"
      sourceLabel="BonCalcul.fr - Cout km voiture"
    >
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500">Exemple : voiture compacte, 15 000 km/an</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">{(total / 15000).toFixed(2)} EUR/km</p>
        <p className="text-xs text-gray-500">soit {total.toLocaleString("fr-FR")} EUR/an</p>
      </div>

      {/* Donut-like visualization using stacked bar */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Repartition des couts annuels</p>
        <div className="h-12 rounded-xl overflow-hidden flex border border-gray-200">
          {couts.map((c, i) => (
            <div key={i} className={`${c.color} flex items-center justify-center`} style={{ width: `${c.pct}%` }}>
              <span className="text-[10px] font-bold text-white">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {couts.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${c.color} shrink-0`} />
            <span className="text-xs text-gray-600">{c.label} <span className="font-bold">{c.montant.toLocaleString("fr-FR")} EUR</span></span>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
        <p className="text-xs text-amber-800">
          <strong>La decote est souvent oubliee</strong> : une voiture neuve perd en moyenne 20 a 25% de sa valeur la premiere annee, puis environ 15% par an.
        </p>
      </div>
    </Infographic>
  );
}
