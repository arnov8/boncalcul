"use client";

import Infographic from "@/components/Infographic";

const capital = 10000;
const taux = 0.05;
const annees = [0, 5, 10, 15, 20];
const valeurs = annees.map((a) => Math.round(capital * Math.pow(1 + taux, a)));
const maxVal = valeurs[valeurs.length - 1];

export default function InfographieInteretsComposes() {
  return (
    <Infographic
      title="La magie des interets composes : 10 000 EUR a 5% par an"
      sourceUrl="https://boncalcul.fr/outils/calcul-interets-composes"
      sourceLabel="BonCalcul.fr - Calcul interets composes"
    >
      {/* Growth bars */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
          Evolution du capital sur 20 ans (sans versement supplementaire)
        </p>
        <div className="flex items-end justify-center gap-3 h-48">
          {annees.map((a, i) => {
            const pct = (valeurs[i] / maxVal) * 100;
            const interets = valeurs[i] - capital;
            return (
              <div key={a} className="flex flex-col items-center" style={{ width: "16%" }}>
                <span className="text-xs font-bold text-gray-700 mb-1">
                  {valeurs[i].toLocaleString("fr-FR")} EUR
                </span>
                <div className="w-full rounded-t-lg overflow-hidden flex flex-col justify-end" style={{ height: `${pct}%` }}>
                  {interets > 0 && (
                    <div className="bg-green-400 flex items-center justify-center" style={{ height: `${(interets / valeurs[i]) * 100}%` }}>
                      {interets > 2000 && <span className="text-[9px] font-bold text-white">+{interets.toLocaleString("fr-FR")}</span>}
                    </div>
                  )}
                  <div className="bg-blue-500 flex items-center justify-center" style={{ height: `${(capital / valeurs[i]) * 100}%` }}>
                    <span className="text-[9px] font-bold text-white">{capital > 2000 ? "10k" : ""}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 mt-1">An {a}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-blue-500" />
          <span className="text-xs text-gray-600">Capital initial</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-green-400" />
          <span className="text-xs text-gray-600">Interets cumules</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 text-center">
        <p className="text-sm font-semibold text-amber-800 mb-1">La regle de 72</p>
        <p className="text-xs text-amber-700">
          Divisez 72 par le taux d&apos;interet pour estimer le nombre d&apos;annees pour doubler votre capital.
          A 5%, il faut environ <strong>14,4 ans</strong> pour doubler.
        </p>
      </div>
    </Infographic>
  );
}
