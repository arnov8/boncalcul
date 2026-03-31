"use client";

import Infographic from "@/components/Infographic";

const tranches = [
  {
    min: 0,
    max: 11294,
    taux: 0,
    color: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-700",
    barColor: "bg-green-400",
  },
  {
    min: 11295,
    max: 28797,
    taux: 11,
    color: "bg-yellow-50",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-700",
    barColor: "bg-yellow-400",
  },
  {
    min: 28798,
    max: 82341,
    taux: 30,
    color: "bg-orange-50",
    borderColor: "border-orange-300",
    textColor: "text-orange-700",
    barColor: "bg-orange-400",
  },
  {
    min: 82342,
    max: 177106,
    taux: 41,
    color: "bg-red-50",
    borderColor: "border-red-300",
    textColor: "text-red-700",
    barColor: "bg-red-400",
  },
  {
    min: 177107,
    max: null,
    taux: 45,
    color: "bg-red-100",
    borderColor: "border-red-400",
    textColor: "text-red-800",
    barColor: "bg-red-600",
  },
];

// Example at 40 000 EUR
const exRevenu = 40000;
const exImpot = Math.round(
  0 + (28797 - 11294) * 0.11 + (exRevenu - 28797) * 0.3
);
const exTauxMoyen = ((exImpot / exRevenu) * 100).toFixed(1);

export default function InfographieImpot() {
  return (
    <Infographic
      title="Bareme progressif de l'impot sur le revenu 2025"
      sourceUrl="https://boncalcul.fr/outils/simulateur-impot-revenu"
      sourceLabel="BonCalcul.fr - Simulateur impot sur le revenu"
    >
      {/* Intro */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-2">
          L&apos;impot est calcule par tranches : chaque tranche n&apos;est imposee
          qu&apos;a son propre taux
        </p>
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
          <span className="text-xs text-gray-500">Nombre de tranches :</span>
          <span className="text-lg font-bold text-gray-800">5</span>
          <span className="text-xs text-gray-500 mx-2">|</span>
          <span className="text-xs text-gray-500">Taux :</span>
          <span className="text-lg font-bold text-gray-800">0% a 45%</span>
        </div>
      </div>

      {/* Visual staircase */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
          Les 5 tranches du bareme progressif
        </p>

        {/* Stacked horizontal bars as staircase */}
        <div className="space-y-2">
          {tranches.map((t, i) => {
            // Width proportional to range size (capped for display)
            const range = t.max ? t.max - t.min : 50000;
            const maxRange = 177106;
            const widthPct = Math.min(
              100,
              Math.max(20, (range / maxRange) * 100)
            );
            return (
              <div key={i} className="flex items-center gap-3">
                {/* Taux */}
                <div
                  className={`w-16 shrink-0 text-right font-bold text-lg ${t.textColor}`}
                >
                  {t.taux}%
                </div>
                {/* Bar */}
                <div className="flex-1">
                  <div
                    className={`${t.barColor} rounded-lg h-9 flex items-center px-3 transition-all relative`}
                    style={{ width: `${widthPct}%` }}
                  >
                    <span className="text-[10px] md:text-xs font-semibold text-white drop-shadow-sm whitespace-nowrap">
                      {t.min.toLocaleString("fr-FR")} EUR{" "}
                      {t.max
                        ? `- ${t.max.toLocaleString("fr-FR")} EUR`
                        : "et plus"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Example calculation */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm font-semibold text-blue-800 mb-4 text-center">
          Exemple : revenu imposable de{" "}
          {exRevenu.toLocaleString("fr-FR")} EUR (celibataire, 1 part)
        </p>

        <div className="space-y-2">
          {/* Tranche 1 */}
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-2 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-green-400 shrink-0" />
              <span className="text-xs text-gray-600">
                0 - 11 294 EUR
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">x 0%</span>
              <span className="text-sm font-bold text-gray-800">= 0 EUR</span>
            </div>
          </div>
          {/* Tranche 2 */}
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-2 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-yellow-400 shrink-0" />
              <span className="text-xs text-gray-600">
                11 295 - 28 797 EUR
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">x 11%</span>
              <span className="text-sm font-bold text-gray-800">
                = {Math.round((28797 - 11294) * 0.11).toLocaleString("fr-FR")} EUR
              </span>
            </div>
          </div>
          {/* Tranche 3 (partial) */}
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-2 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-orange-400 shrink-0" />
              <span className="text-xs text-gray-600">
                28 798 - 40 000 EUR
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">x 30%</span>
              <span className="text-sm font-bold text-gray-800">
                = {Math.round((exRevenu - 28797) * 0.3).toLocaleString("fr-FR")} EUR
              </span>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="mt-4 pt-3 border-t border-blue-200 flex items-center justify-between">
          <span className="text-sm font-semibold text-blue-800">
            Impot total
          </span>
          <div className="text-right">
            <p className="text-xl font-bold text-blue-800">
              {exImpot.toLocaleString("fr-FR")} EUR
            </p>
            <p className="text-xs text-blue-600">
              Taux marginal : 30% | Taux moyen : {exTauxMoyen}%
            </p>
          </div>
        </div>
      </div>

      {/* TMI vs Taux moyen */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Taux marginal vs taux moyen d&apos;imposition
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-orange-100 text-center">
            <p className="text-xs text-orange-600 font-semibold uppercase tracking-wide mb-1">
              Taux marginal (TMI)
            </p>
            <p className="text-3xl font-bold text-orange-600">30%</p>
            <p className="text-xs text-gray-500 mt-2">
              Taux de la tranche la plus elevee atteinte. S&apos;applique
              uniquement a la part de revenu dans cette tranche.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100 text-center">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
              Taux moyen effectif
            </p>
            <p className="text-3xl font-bold text-blue-600">{exTauxMoyen}%</p>
            <p className="text-xs text-gray-500 mt-2">
              Pourcentage reel de votre revenu consacre a l&apos;impot. Toujours
              inferieur au TMI grace a la progressivite.
            </p>
          </div>
        </div>
      </div>
    </Infographic>
  );
}
