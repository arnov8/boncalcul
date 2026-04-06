"use client";

import Infographic from "@/components/Infographic";

const vehicules = [
  { type: "Citadine", conso: 5.5, color: "bg-green-500", pct: 46 },
  { type: "Berline", conso: 7.0, color: "bg-blue-500", pct: 58 },
  { type: "SUV", conso: 8.5, color: "bg-orange-500", pct: 71 },
  { type: "Utilitaire", conso: 10.0, color: "bg-red-500", pct: 83 },
  { type: "Sportive", conso: 12.0, color: "bg-red-700", pct: 100 },
];

export default function InfographieEssence() {
  return (
    <Infographic
      title="Consommation de carburant : formule et comparaison"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-consommation-essence"
      sourceLabel="BonCalcul.fr - Calcul consommation essence"
    >
      {/* Formule */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6 text-center">
        <p className="text-sm font-semibold text-blue-700 mb-2">Formule de calcul</p>
        <p className="text-lg font-mono font-bold text-blue-800">(Litres consommes / Distance km) x 100</p>
        <p className="text-xs text-gray-500 mt-2">Exemple : 45 L pour 600 km = (45/600) x 100 = <strong>7,5 L/100 km</strong></p>
      </div>

      {/* Comparaison par type */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Consommation moyenne par type de vehicule</p>
        <div className="space-y-3">
          {vehicules.map((v) => (
            <div key={v.type}>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span className="font-medium">{v.type}</span>
                <span className="font-bold">{v.conso} L/100 km</span>
              </div>
              <div className="h-7 rounded-lg overflow-hidden bg-gray-200">
                <div className={`${v.color} h-full rounded-lg flex items-center px-3`} style={{ width: `${v.pct}%` }}>
                  <span className="text-xs font-bold text-white">{v.conso} L</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
