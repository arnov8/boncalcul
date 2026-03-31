"use client";

import Infographic from "@/components/Infographic";

const smicData = [
  { annee: "2022", horaire: "10,57", mensuel: "1 603" },
  { annee: "2023", horaire: "11,27", mensuel: "1 709" },
  { annee: "2024", horaire: "11,65", mensuel: "1 767" },
  { annee: "2025", horaire: "11,88", mensuel: "1 802" },
  { annee: "2026", horaire: "12,10", mensuel: "1 835" },
];

export default function InfographieSmic() {
  return (
    <Infographic
      title="SMIC 2026 : montants et evolution"
      sourceUrl="https://boncalcul.fr/outils/simulateur-smic"
      sourceLabel="BonCalcul.fr - Simulateur SMIC"
    >
      {/* Cards montants actuels */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <p className="text-xs text-blue-600 font-medium">Horaire brut</p>
          <p className="text-xl font-bold text-blue-700">12,10 EUR</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-xs text-green-600 font-medium">Mensuel brut</p>
          <p className="text-xl font-bold text-green-700">1 835 EUR</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
          <p className="text-xs text-purple-600 font-medium">Annuel brut</p>
          <p className="text-xl font-bold text-purple-700">22 020 EUR</p>
        </div>
      </div>

      {/* Net */}
      <div className="bg-green-50 rounded-xl p-4 border border-green-200 mb-6 text-center">
        <p className="text-sm text-green-700">
          SMIC net mensuel 2026 : <strong>environ 1 452 EUR</strong> (apres cotisations ~21%)
        </p>
      </div>

      {/* Evolution historique */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Evolution du SMIC mensuel brut</p>
        <div className="flex items-end justify-center gap-2 h-40">
          {smicData.map((s) => {
            const val = parseFloat(s.mensuel.replace(/\s/g, ""));
            const pct = ((val - 1500) / 400) * 100;
            return (
              <div key={s.annee} className="flex flex-col items-center" style={{ width: "17%" }}>
                <span className="text-[10px] font-bold text-gray-700 mb-1">{s.mensuel}</span>
                <div className="w-full bg-blue-500 rounded-t-lg" style={{ height: `${Math.max(pct, 10)}%` }} />
                <span className="text-[10px] text-gray-500 mt-1">{s.annee}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Infographic>
  );
}
