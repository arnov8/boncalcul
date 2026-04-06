"use client";

import Infographic from "@/components/Infographic";

const capital = 250000;
const interets = 72500;
const assurance = 18750;
const total = capital + interets + assurance;
const duree = 20;
const taux = 3.5;
const tauxAssurance = 0.3;
const mensualite = 1449;
const mensualiteAssurance = 63;

const parts = [
  {
    label: "Capital rembourse",
    montant: capital,
    pct: ((capital / total) * 100).toFixed(1),
    color: "bg-blue-500",
    hex: "#3b82f6",
  },
  {
    label: "Interets bancaires",
    montant: interets,
    pct: ((interets / total) * 100).toFixed(1),
    color: "bg-amber-500",
    hex: "#f59e0b",
  },
  {
    label: "Assurance emprunteur",
    montant: assurance,
    pct: ((assurance / total) * 100).toFixed(1),
    color: "bg-red-400",
    hex: "#f87171",
  },
];

export default function InfographiePret() {
  return (
    <Infographic
      title="Cout total d'un pret immobilier : capital, interets et assurance"
      sourceUrl="https://www.boncalcul.fr/outils/simulateur-pret-immobilier"
      sourceLabel="BonCalcul.fr - Simulateur pret immobilier"
    >
      {/* Loan parameters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Capital emprunte", value: `${(capital / 1000).toFixed(0)}k EUR` },
          { label: "Duree", value: `${duree} ans` },
          { label: "Taux d'interet", value: `${taux}%` },
          { label: "Assurance", value: `${tauxAssurance}%` },
        ].map((p, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center"
          >
            <p className="text-[10px] text-gray-500 uppercase tracking-wide">
              {p.label}
            </p>
            <p className="text-lg font-bold text-gray-800">{p.value}</p>
          </div>
        ))}
      </div>

      {/* Donut chart */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="relative w-52 h-52 shrink-0 mx-auto">
          <div
            className="w-full h-full rounded-full shadow-lg"
            style={{
              background: `conic-gradient(
                ${parts[0].hex} 0% ${parts[0].pct}%,
                ${parts[1].hex} ${parts[0].pct}% ${parseFloat(parts[0].pct) + parseFloat(parts[1].pct)}%,
                ${parts[2].hex} ${parseFloat(parts[0].pct) + parseFloat(parts[1].pct)}% 100%
              )`,
            }}
          />
          <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center shadow-inner">
            <div className="text-center">
              <p className="text-xs text-gray-500">Cout total</p>
              <p className="text-lg font-bold text-gray-800">
                {(total / 1000).toFixed(0)}k EUR
              </p>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="flex-1 space-y-3 w-full">
          {parts.map((p, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${p.color} shrink-0`} />
                  <span className="text-sm font-semibold text-gray-800">
                    {p.label}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-800">
                  {p.montant.toLocaleString("fr-FR")} EUR
                </span>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${p.color} rounded-full`}
                  style={{ width: `${p.pct}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-500 text-right mt-1">
                {p.pct}% du cout total
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly payment */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm font-semibold text-blue-800 mb-3 text-center">
          Mensualite sur {duree} ans ({duree * 12} mois)
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="text-center">
            <p className="text-xs text-gray-500">Hors assurance</p>
            <p className="text-xl font-bold text-blue-700">
              {mensualite.toLocaleString("fr-FR")} EUR
            </p>
          </div>
          <div className="text-xl text-gray-300">+</div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Assurance</p>
            <p className="text-xl font-bold text-red-500">
              {mensualiteAssurance} EUR
            </p>
          </div>
          <div className="text-xl text-gray-300">=</div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Mensualite totale</p>
            <p className="text-xl font-bold text-gray-900">
              {(mensualite + mensualiteAssurance).toLocaleString("fr-FR")} EUR
            </p>
          </div>
        </div>
      </div>

      {/* Amortization timeline visual */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Evolution capital vs interets dans la mensualite
        </p>
        <div className="space-y-2">
          {[
            { year: "Annee 1", capital: 35, interets: 65 },
            { year: "Annee 5", capital: 45, interets: 55 },
            { year: "Annee 10", capital: 60, interets: 40 },
            { year: "Annee 15", capital: 78, interets: 22 },
            { year: "Annee 20", capital: 95, interets: 5 },
          ].map((row) => (
            <div key={row.year}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-gray-500 w-16 shrink-0 text-right">
                  {row.year}
                </span>
                <div className="flex-1 h-5 rounded-md overflow-hidden flex border border-gray-200">
                  <div
                    className="bg-blue-500 flex items-center justify-center"
                    style={{ width: `${row.capital}%` }}
                  >
                    {row.capital > 20 && (
                      <span className="text-[9px] font-bold text-white">
                        Capital {row.capital}%
                      </span>
                    )}
                  </div>
                  <div
                    className="bg-amber-500 flex items-center justify-center"
                    style={{ width: `${row.interets}%` }}
                  >
                    {row.interets > 15 && (
                      <span className="text-[9px] font-bold text-white">
                        Interets {row.interets}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-3">
          Au debut du pret, vous payez surtout des interets. La part du capital
          rembourse augmente progressivement.
        </p>
      </div>
    </Infographic>
  );
}
