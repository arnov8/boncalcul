"use client";

import Infographic from "@/components/Infographic";

const montant = 10000;
const taux = 5;
const scenarios = [
  { duree: "24 mois", mensualite: "439", coutTotal: "10 528", interets: "528" },
  { duree: "48 mois", mensualite: "230", coutTotal: "11 040", interets: "1 040" },
  { duree: "72 mois", mensualite: "161", coutTotal: "11 566", interets: "1 566" },
];

export default function InfographieCreditConso() {
  return (
    <Infographic
      title="Credit consommation : duree courte vs longue"
      sourceUrl="https://www.boncalcul.fr/outils/simulateur-credit-consommation"
      sourceLabel="BonCalcul.fr - Simulateur credit consommation"
    >
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500">Exemple : emprunt de <strong>{montant.toLocaleString("fr-FR")} EUR</strong> a <strong>{taux}%</strong></p>
      </div>

      <div className="space-y-4 mb-6">
        {scenarios.map((s, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">{s.duree}</span>
              <span className="text-sm font-bold text-blue-700">{s.mensualite} EUR/mois</span>
            </div>
            <div className="h-7 rounded-lg overflow-hidden flex border border-gray-200">
              <div className="bg-blue-500 flex items-center justify-center" style={{ width: `${(montant / parseFloat(s.coutTotal.replace(/\s/g, ""))) * 100}%` }}>
                <span className="text-[10px] font-bold text-white">Capital</span>
              </div>
              <div className="bg-red-400 flex items-center justify-center" style={{ width: `${(parseFloat(s.interets.replace(/\s/g, "")) / parseFloat(s.coutTotal.replace(/\s/g, ""))) * 100}%` }}>
                <span className="text-[10px] font-bold text-white">{s.interets} EUR</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
        <p className="text-xs text-amber-800">
          <strong>Plus la duree est longue, plus le cout total augmente.</strong> Sur cet exemple, passer de 24 a 72 mois triple le cout des interets (528 EUR vs 1 566 EUR).
        </p>
      </div>
    </Infographic>
  );
}
