"use client";

import Infographic from "@/components/Infographic";

const abattements = [
  { annees: "0-5 ans", ir: "0%", ps: "0%", colorIR: 0, colorPS: 0 },
  { annees: "6-10 ans", ir: "6%/an", ps: "1,65%/an", colorIR: 20, colorPS: 8 },
  { annees: "11-15 ans", ir: "6%/an", ps: "1,65%/an", colorIR: 50, colorPS: 16 },
  { annees: "16-21 ans", ir: "4%/an", ps: "1,60%/an", colorIR: 75, colorPS: 28 },
  { annees: "22 ans", ir: "100%", ps: "9%/an", colorIR: 100, colorPS: 40 },
  { annees: "30 ans", ir: "100%", ps: "100%", colorIR: 100, colorPS: 100 },
];

export default function InfographiePlusValue() {
  return (
    <Infographic
      title="Plus-value immobiliere : abattements par duree de detention"
      sourceUrl="https://boncalcul.fr/outils/calcul-plus-value-immobiliere"
      sourceLabel="BonCalcul.fr - Calcul plus-value immobiliere"
    >
      {/* Tax rates */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center">
          <p className="text-xs text-blue-600">Impot sur le revenu</p>
          <p className="text-lg font-bold text-blue-700">19%</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2 text-center">
          <p className="text-xs text-purple-600">Prelevements sociaux</p>
          <p className="text-lg font-bold text-purple-700">17,2%</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-center">
          <p className="text-xs text-red-600">Total</p>
          <p className="text-lg font-bold text-red-700">36,2%</p>
        </div>
      </div>

      {/* Abattement table */}
      <div className="overflow-x-auto mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Abattement progressif selon la duree</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 border-b">Detention</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-blue-600 border-b">Abattement IR</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-purple-600 border-b">Abattement PS</th>
            </tr>
          </thead>
          <tbody>
            {abattements.map((a) => (
              <tr key={a.annees} className="border-b border-gray-100">
                <td className="px-3 py-2 font-medium text-gray-700">{a.annees}</td>
                <td className="px-3 py-2 text-center text-blue-700 font-semibold">{a.ir}</td>
                <td className="px-3 py-2 text-center text-purple-700 font-semibold">{a.ps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key dates */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200 text-center">
        <p className="text-sm font-semibold text-green-700 mb-1">Exoneration totale</p>
        <p className="text-xs text-green-600">
          <strong>22 ans</strong> pour l&apos;impot sur le revenu | <strong>30 ans</strong> pour les prelevements sociaux
        </p>
      </div>
    </Infographic>
  );
}
