"use client";

import Infographic from "@/components/Infographic";

export default function InfographieDuree() {
  return (
    <Infographic
      title="Calculer une duree entre deux dates : jours calendaires vs ouvres"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-duree-entre-dates"
      sourceLabel="BonCalcul.fr - Calcul duree entre dates"
    >
      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 text-center">
          <p className="text-sm font-semibold text-blue-700 mb-2">Jours calendaires</p>
          <p className="text-3xl font-bold text-blue-800">365</p>
          <p className="text-xs text-blue-600 mt-1">Tous les jours de l&apos;annee (y compris week-ends et jours feries)</p>
        </div>
        <div className="bg-green-50 rounded-xl p-5 border border-green-200 text-center">
          <p className="text-sm font-semibold text-green-700 mb-2">Jours ouvres</p>
          <p className="text-3xl font-bold text-green-800">~251</p>
          <p className="text-xs text-green-600 mt-1">Lundi au vendredi, hors jours feries (environ 11 par an)</p>
        </div>
      </div>

      {/* Week visual */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Une semaine type</p>
        <div className="flex gap-1 justify-center">
          {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((j, i) => (
            <div key={j} className={`rounded-lg px-3 py-3 text-center ${i < 5 ? "bg-green-100 border border-green-300" : "bg-gray-100 border border-gray-300"}`}>
              <p className={`text-xs font-semibold ${i < 5 ? "text-green-700" : "text-gray-500"}`}>{j}</p>
              <p className="text-[10px] text-gray-500 mt-1">{i < 5 ? "Ouvre" : "Repos"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conversions rapides */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Conversions rapides</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { val: "1 semaine", eq: "7 jours" },
            { val: "1 mois", eq: "~30,44 jours" },
            { val: "1 trimestre", eq: "~91 jours" },
            { val: "1 an", eq: "365,25 jours" },
          ].map((c) => (
            <div key={c.val} className="bg-white rounded-lg p-3 text-center border border-gray-200">
              <p className="text-sm font-bold text-gray-700">{c.val}</p>
              <p className="text-xs text-gray-500">= {c.eq}</p>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
