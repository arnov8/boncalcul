"use client";

import Infographic from "@/components/Infographic";

const tauxHoraire = 15;
const heures = [
  { range: "H1 a H8", maj: 25, taux: tauxHoraire * 1.25, color: "bg-orange-400", w: 8 },
  { range: "Au-dela de H8", maj: 50, taux: tauxHoraire * 1.5, color: "bg-red-500", w: 4 },
];

export default function InfographieHeures() {
  return (
    <Infographic
      title="Heures supplementaires : majorations legales"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-heures-supplementaires"
      sourceLabel="BonCalcul.fr - Calcul heures supplementaires"
    >
      {/* Visualisation en barres */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
          Majoration par tranche (base : {tauxHoraire} EUR/h)
        </p>
        <div className="space-y-4">
          {/* Normal */}
          <div>
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>35h normales</span>
              <span className="font-bold">{tauxHoraire},00 EUR/h</span>
            </div>
            <div className="h-10 rounded-lg bg-blue-500 flex items-center px-3">
              <span className="text-xs font-bold text-white">Taux normal - pas de majoration</span>
            </div>
          </div>
          {heures.map((h) => (
            <div key={h.range}>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>{h.range} (36e a {h.range === "H1 a H8" ? "43e" : "48e"} heure)</span>
                <span className="font-bold">{h.taux.toFixed(2)} EUR/h (+{h.maj}%)</span>
              </div>
              <div className="h-10 rounded-lg overflow-hidden flex border border-gray-200">
                <div className="bg-blue-500 flex items-center justify-center" style={{ width: `${(tauxHoraire / h.taux) * 100}%` }}>
                  <span className="text-[10px] font-bold text-white">{tauxHoraire} EUR</span>
                </div>
                <div className={`${h.color} flex items-center justify-center`} style={{ width: `${((h.taux - tauxHoraire) / h.taux) * 100}%` }}>
                  <span className="text-[10px] font-bold text-white">+{h.maj}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exemple concret */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200 text-center">
        <p className="text-sm font-semibold text-green-700 mb-2">Exemple : 10 heures supplementaires</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-green-100">
            <p className="text-xs text-gray-500">8 premieres heures</p>
            <p className="text-lg font-bold text-orange-600">{(8 * tauxHoraire * 1.25).toFixed(0)} EUR</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-green-100">
            <p className="text-xs text-gray-500">2 heures suivantes</p>
            <p className="text-lg font-bold text-red-600">{(2 * tauxHoraire * 1.5).toFixed(0)} EUR</p>
          </div>
        </div>
        <p className="text-lg font-bold text-green-700 mt-3">
          Total : {(8 * tauxHoraire * 1.25 + 2 * tauxHoraire * 1.5).toFixed(0)} EUR brut
        </p>
      </div>
    </Infographic>
  );
}
