"use client";

import Infographic from "@/components/Infographic";

const bareme = [
  { annees: "1 a 10 ans", formule: "1/4 mois par annee", exemple: "8 ans = 2 mois", color: "bg-blue-500", pct: 60 },
  { annees: "Au-dela de 10 ans", formule: "1/3 mois par annee", exemple: "15 ans = 2,5 + 1,67 = 4,17 mois", color: "bg-indigo-500", pct: 80 },
];

export default function InfographieIndemnites() {
  return (
    <Infographic
      title="Indemnite de licenciement : le bareme legal"
      sourceUrl="https://boncalcul.fr/outils/calcul-indemnites-licenciement"
      sourceLabel="BonCalcul.fr - Calcul indemnites licenciement"
    >
      {/* Barème */}
      <div className="space-y-4 mb-6">
        {bareme.map((b, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-gray-700">{b.annees}</span>
              <span className="font-mono text-gray-600">{b.formule}</span>
            </div>
            <div className="h-7 rounded-lg overflow-hidden bg-gray-200">
              <div className={`${b.color} h-full rounded-lg flex items-center px-3`} style={{ width: `${b.pct}%` }}>
                <span className="text-xs font-bold text-white">{b.exemple}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Example */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6">
        <p className="text-sm font-semibold text-blue-700 mb-3 text-center">Exemple : 15 ans d&apos;anciennete, salaire 3 000 EUR</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 text-center border border-blue-100">
            <p className="text-xs text-gray-500">10 premieres annees</p>
            <p className="text-lg font-bold text-blue-700">7 500 EUR</p>
            <p className="text-xs text-gray-400">10 x 1/4 x 3 000</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-blue-100">
            <p className="text-xs text-gray-500">5 annees suivantes</p>
            <p className="text-lg font-bold text-indigo-700">5 000 EUR</p>
            <p className="text-xs text-gray-400">5 x 1/3 x 3 000</p>
          </div>
        </div>
        <div className="mt-3 bg-white rounded-lg p-3 text-center border border-green-200">
          <p className="text-xs text-gray-500">Total indemnite legale</p>
          <p className="text-2xl font-bold text-green-700">12 500 EUR</p>
        </div>
      </div>

      {/* Conditions */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Conditions requises</p>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>&#10003; Minimum 8 mois d&apos;anciennete ininterrompue</li>
          <li>&#10003; Salaire de reference = moyenne la plus favorable (3 ou 12 derniers mois)</li>
          <li>&#10003; Indemnite legale non imposable (dans certaines limites)</li>
        </ul>
      </div>
    </Infographic>
  );
}
