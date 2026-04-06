"use client";

import Infographic from "@/components/Infographic";

const bareme = [
  { enfants: 1, reduit: "9,0%", classique: "13,5%", elargi: "18,0%" },
  { enfants: 2, reduit: "7,8%", classique: "11,5%", elargi: "15,4%" },
  { enfants: 3, reduit: "6,7%", classique: "10,0%", elargi: "13,3%" },
  { enfants: 4, reduit: "5,9%", classique: "8,8%", elargi: "11,7%" },
];

export default function InfographiePension() {
  return (
    <Infographic
      title="Pension alimentaire : bareme du Ministere de la Justice"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-pension-alimentaire"
      sourceLabel="BonCalcul.fr - Calcul pension alimentaire"
    >
      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 border-b">Enfants</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-orange-600 border-b">Droit reduit</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-blue-600 border-b">Classique</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-green-600 border-b">Elargi</th>
            </tr>
          </thead>
          <tbody>
            {bareme.map((row) => (
              <tr key={row.enfants} className="border-b border-gray-100">
                <td className="px-3 py-2 font-medium text-gray-700">{row.enfants} enfant{row.enfants > 1 ? "s" : ""}</td>
                <td className="px-3 py-2 text-center text-orange-700 font-semibold">{row.reduit}</td>
                <td className="px-3 py-2 text-center text-blue-700 font-semibold">{row.classique}</td>
                <td className="px-3 py-2 text-center text-green-700 font-semibold">{row.elargi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formula */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6 text-center">
        <p className="text-sm font-semibold text-blue-700 mb-1">Formule</p>
        <p className="text-xs text-blue-600 font-mono">Pension = (Revenu - minimum vital) x Taux par enfant</p>
        <p className="text-xs text-gray-500 mt-1">Minimum vital 2025 = 636 EUR (RSA pour une personne seule)</p>
      </div>

      {/* Example */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center">
        <p className="text-sm font-semibold text-gray-700 mb-2">Exemple : revenu 2 500 EUR, 2 enfants, garde classique</p>
        <p className="text-xs text-gray-600 mb-2">(2 500 - 636) x 11,5% = <strong>214 EUR par enfant</strong></p>
        <p className="text-lg font-bold text-green-700">Total : 428 EUR / mois</p>
      </div>
    </Infographic>
  );
}
