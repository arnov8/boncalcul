"use client";

import Infographic from "@/components/Infographic";

const cotisations = [
  { label: "CSG-CRDS", pct: 9.7, color: "bg-red-400" },
  { label: "Retraite de base", pct: 6.9, color: "bg-orange-400" },
  { label: "Retraite compl.", pct: 4.01, color: "bg-amber-400" },
  { label: "Complementaire sante", pct: 1.5, color: "bg-yellow-400" },
  { label: "Autres cotisations", pct: 0.89, color: "bg-lime-400" },
];

const totalCotisations = cotisations.reduce((s, c) => s + c.pct, 0);
const brutMensuel = 3000;
const netMensuel = Math.round(brutMensuel * (1 - totalCotisations / 100));

export default function InfographieSalaire() {
  return (
    <Infographic
      title="De votre salaire brut a votre salaire net : ou va l'argent ?"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-salaire-brut-net"
      sourceLabel="BonCalcul.fr - Calcul salaire brut/net"
    >
      {/* Example salary header */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-1">Exemple pour un non-cadre</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-3">
            <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">
              Salaire brut
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {brutMensuel.toLocaleString("fr-FR")} EUR/mois
            </p>
          </div>
          <div className="text-2xl text-gray-300 font-light">&rarr;</div>
          <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-3">
            <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
              Salaire net
            </p>
            <p className="text-2xl font-bold text-green-700">
              {netMensuel.toLocaleString("fr-FR")} EUR/mois
            </p>
          </div>
        </div>
      </div>

      {/* Stacked bar */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Decomposition du salaire brut
        </p>
        <div className="h-12 md:h-14 rounded-xl overflow-hidden flex shadow-inner border border-gray-200">
          {cotisations.map((c, i) => (
            <div
              key={i}
              className={`${c.color} relative group flex items-center justify-center transition-all`}
              style={{ width: `${(c.pct / 100) * 100}%` }}
              title={`${c.label}: ${c.pct}%`}
            >
              {c.pct > 3 && (
                <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-sm">
                  {c.pct}%
                </span>
              )}
            </div>
          ))}
          <div
            className="bg-green-500 relative flex items-center justify-center"
            style={{ width: `${100 - totalCotisations}%` }}
          >
            <span className="text-xs md:text-sm font-bold text-white drop-shadow-sm">
              Net : {(100 - totalCotisations).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {cotisations.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${c.color} shrink-0`} />
            <span className="text-xs text-gray-600">
              {c.label}{" "}
              <span className="font-semibold text-gray-800">{c.pct}%</span>
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-green-500 shrink-0" />
          <span className="text-xs text-gray-600">
            Salaire net{" "}
            <span className="font-semibold text-gray-800">
              {(100 - totalCotisations).toFixed(1)}%
            </span>
          </span>
        </div>
      </div>

      {/* Comparison cadre vs non-cadre */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
          Taux de cotisations moyens
        </p>
        <div className="space-y-4">
          {[
            { label: "Non-cadre", pct: 22, net: 78 },
            { label: "Cadre", pct: 25, net: 75 },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span className="font-medium">{row.label}</span>
                <span>
                  Cotisations : {row.pct}% | Net : {row.net}%
                </span>
              </div>
              <div className="h-7 rounded-lg overflow-hidden flex border border-gray-200">
                <div
                  className="bg-red-400 flex items-center justify-center"
                  style={{ width: `${row.pct}%` }}
                >
                  <span className="text-[10px] font-bold text-white">
                    {row.pct}%
                  </span>
                </div>
                <div
                  className="bg-green-500 flex items-center justify-center"
                  style={{ width: `${row.net}%` }}
                >
                  <span className="text-xs font-bold text-white">
                    {row.net}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
