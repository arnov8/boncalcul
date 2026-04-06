"use client";

import Infographic from "@/components/Infographic";

const taux = [
  { label: "Taux normal", pct: "20%", exemples: "Electromenager, vetements, services, essence", color: "bg-blue-500", width: 100 },
  { label: "Taux intermediaire", pct: "10%", exemples: "Restauration, transports, travaux renovation", color: "bg-green-500", width: 50 },
  { label: "Taux reduit", pct: "5,5%", exemples: "Alimentation, livres, energie, abonnements gaz/elec", color: "bg-orange-400", width: 28 },
  { label: "Taux super-reduit", pct: "2,1%", exemples: "Medicaments rembourses, presse, spectacles vivants", color: "bg-purple-500", width: 11 },
];

export default function InfographieTVA() {
  return (
    <Infographic
      title="Les 4 taux de TVA en France"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-tva"
      sourceLabel="BonCalcul.fr - Calcul TVA"
    >
      <div className="space-y-4 mb-6">
        {taux.map((t) => (
          <div key={t.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">{t.label}</span>
              <span className="text-lg font-bold text-gray-800">{t.pct}</span>
            </div>
            <div className="h-7 rounded-lg overflow-hidden bg-gray-200 mb-2">
              <div className={`${t.color} h-full rounded-lg flex items-center px-3`} style={{ width: `${t.width}%` }}>
                <span className="text-xs font-bold text-white">{t.pct}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">{t.exemples}</p>
          </div>
        ))}
      </div>

      {/* Formule */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 text-center">
        <p className="text-sm font-semibold text-blue-700 mb-2">Formules de calcul rapide (taux 20%)</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-gray-500">HT &#8594; TTC</p>
            <p className="text-sm font-mono font-bold text-gray-700">Prix x 1,20</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-gray-500">TTC &#8594; HT</p>
            <p className="text-sm font-mono font-bold text-gray-700">Prix / 1,20</p>
          </div>
        </div>
      </div>
    </Infographic>
  );
}
