"use client";

import Infographic from "@/components/Infographic";

const niveaux = [
  { label: "Sedentaire", coeff: "x 1,2", cal: "1 920", pct: 60, color: "bg-gray-400" },
  { label: "Peu actif", coeff: "x 1,375", cal: "2 200", pct: 69, color: "bg-blue-400" },
  { label: "Actif", coeff: "x 1,55", cal: "2 480", pct: 78, color: "bg-green-500" },
  { label: "Tres actif", coeff: "x 1,725", cal: "2 760", pct: 86, color: "bg-orange-500" },
  { label: "Extreme", coeff: "x 1,9", cal: "3 040", pct: 95, color: "bg-red-500" },
];

export default function InfographieCalories() {
  return (
    <Infographic
      title="Besoins caloriques : formule de Mifflin-St Jeor"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-calories"
      sourceLabel="BonCalcul.fr - Calcul calories"
    >
      {/* Formule */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6">
        <p className="text-sm font-semibold text-blue-700 mb-2 text-center">Metabolisme de base (MB)</p>
        <div className="grid md:grid-cols-2 gap-3 text-center">
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-gray-500">Homme</p>
            <p className="text-xs font-mono text-gray-700">(10 x poids) + (6,25 x taille) - (5 x age) + 5</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-gray-500">Femme</p>
            <p className="text-xs font-mono text-gray-700">(10 x poids) + (6,25 x taille) - (5 x age) - 161</p>
          </div>
        </div>
      </div>

      {/* Niveaux d'activité */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Besoins journaliers selon le niveau d&apos;activite (ex: MB = 1 600 kcal)
        </p>
        <div className="space-y-3">
          {niveaux.map((n) => (
            <div key={n.label}>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span className="font-medium">{n.label} ({n.coeff})</span>
                <span className="font-bold">{n.cal} kcal/jour</span>
              </div>
              <div className="h-7 rounded-lg overflow-hidden bg-gray-200">
                <div className={`${n.color} h-full rounded-lg flex items-center px-3`} style={{ width: `${n.pct}%` }}>
                  <span className="text-xs font-bold text-white">{n.cal} kcal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
