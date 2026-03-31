"use client";

import Infographic from "@/components/Infographic";

export default function InfographieChomage() {
  return (
    <Infographic
      title="Allocation chomage (ARE) : comment est-elle calculee ?"
      sourceUrl="https://boncalcul.fr/outils/simulateur-chomage-are"
      sourceLabel="BonCalcul.fr - Simulateur chomage ARE"
    >
      {/* Formule */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6 text-center">
        <p className="text-sm font-semibold text-blue-700 mb-2">Deux methodes de calcul, la plus favorable est retenue</p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">Methode 1</p>
            <p className="text-sm font-bold text-blue-700">40,4% du SJR + 12,95 EUR/jour</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">Methode 2</p>
            <p className="text-sm font-bold text-blue-700">57% du SJR</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">SJR = Salaire Journalier de Reference</p>
      </div>

      {/* Durée d'indemnisation */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Duree d&apos;indemnisation selon l&apos;anciennete</p>
        <div className="space-y-3">
          {[
            { mois: "6 mois travailles", duree: "182 jours (6 mois)", pct: 25, color: "bg-yellow-500" },
            { mois: "12 mois travailles", duree: "365 jours (12 mois)", pct: 50, color: "bg-orange-500" },
            { mois: "24 mois travailles", duree: "730 jours (24 mois)", pct: 100, color: "bg-green-500" },
          ].map((row) => (
            <div key={row.mois}>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span className="font-medium">{row.mois}</span>
                <span className="font-semibold">{row.duree}</span>
              </div>
              <div className="h-7 rounded-lg overflow-hidden bg-gray-200">
                <div className={`${row.color} h-full rounded-lg flex items-center px-3`} style={{ width: `${row.pct}%` }}>
                  <span className="text-xs font-bold text-white">{row.duree}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Example */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Exemple : salaire brut 2 500 EUR/mois</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="bg-white rounded-lg px-4 py-2 border border-gray-200 text-center">
            <p className="text-xs text-gray-500">SJR</p>
            <p className="text-lg font-bold text-gray-700">82,19 EUR</p>
          </div>
          <span className="text-xl text-gray-400">&#8594;</span>
          <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-200 text-center">
            <p className="text-xs text-green-600">ARE journaliere</p>
            <p className="text-lg font-bold text-green-700">46,85 EUR</p>
          </div>
          <span className="text-xl text-gray-400">&#8594;</span>
          <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-200 text-center">
            <p className="text-xs text-green-600">ARE mensuelle</p>
            <p className="text-lg font-bold text-green-700">1 405 EUR</p>
          </div>
        </div>
      </div>
    </Infographic>
  );
}
