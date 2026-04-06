"use client";

import Infographic from "@/components/Infographic";

const brut = 3000;
const cotSalariales = 690;
const cotPatronales = 1290;
const net = brut - cotSalariales;
const coutTotal = brut + cotPatronales;

const parts = [
  { label: "Salaire net", montant: net, color: "bg-green-500", pct: Math.round((net / coutTotal) * 100) },
  { label: "Cotisations salariales", montant: cotSalariales, color: "bg-orange-400", pct: Math.round((cotSalariales / coutTotal) * 100) },
  { label: "Cotisations patronales", montant: cotPatronales, color: "bg-red-400", pct: Math.round((cotPatronales / coutTotal) * 100) },
];

export default function InfographieCoutSalarie() {
  return (
    <Infographic
      title="Cout reel d'un salarie pour l'employeur"
      sourceUrl="https://www.boncalcul.fr/outils/cout-salarie-employeur"
      sourceLabel="BonCalcul.fr - Cout salarie employeur"
    >
      {/* Header cards */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-green-600 font-medium">Salaire net</p>
          <p className="text-xl font-bold text-green-700">{net.toLocaleString("fr-FR")} EUR</p>
        </div>
        <div className="text-lg text-gray-300">&#8594;</div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-blue-600 font-medium">Salaire brut</p>
          <p className="text-xl font-bold text-blue-700">{brut.toLocaleString("fr-FR")} EUR</p>
        </div>
        <div className="text-lg text-gray-300">&#8594;</div>
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-red-600 font-medium">Cout total employeur</p>
          <p className="text-xl font-bold text-red-700">{coutTotal.toLocaleString("fr-FR")} EUR</p>
        </div>
      </div>

      {/* Stacked bar */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Decomposition du cout total</p>
        <div className="h-12 rounded-xl overflow-hidden flex border border-gray-200">
          {parts.map((p, i) => (
            <div key={i} className={`${p.color} flex items-center justify-center`} style={{ width: `${p.pct}%` }}>
              <span className="text-[10px] md:text-xs font-bold text-white">{p.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {parts.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${p.color} shrink-0`} />
            <span className="text-xs text-gray-600">{p.label} <span className="font-bold">{p.montant.toLocaleString("fr-FR")} EUR</span></span>
          </div>
        ))}
      </div>

      {/* Key ratio */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 text-center">
        <p className="text-sm text-amber-800">
          <strong>Ratio cout/net :</strong> pour chaque 1 EUR de salaire net verse,
          l&apos;employeur debourse environ <strong>{(coutTotal / net).toFixed(2)} EUR</strong> au total.
        </p>
      </div>
    </Infographic>
  );
}
