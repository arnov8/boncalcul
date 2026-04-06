"use client";

import Infographic from "@/components/Infographic";

const prixBien = 250000;

const fraisAncien = [
  {
    label: "Droits de mutation",
    montant: 14500,
    pct: 5.8,
    color: "bg-indigo-500",
    desc: "Taxes reversees a l'Etat, au departement et a la commune",
  },
  {
    label: "Emoluments du notaire",
    montant: 2033,
    pct: 0.81,
    color: "bg-violet-500",
    desc: "Remuneration du notaire (bareme officiel degressif)",
  },
  {
    label: "Frais divers et debours",
    montant: 1200,
    pct: 0.48,
    color: "bg-purple-400",
    desc: "Copies d'actes, cadastre, hypotheques, timbres",
  },
  {
    label: "Contribution de securite immo.",
    montant: 250,
    pct: 0.1,
    color: "bg-fuchsia-400",
    desc: "Taxe de publicite fonciere",
  },
];

const totalAncien = fraisAncien.reduce((s, f) => s + f.montant, 0);

export default function InfographieNotaire() {
  return (
    <Infographic
      title="Repartition des frais de notaire pour un achat immobilier"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-frais-de-notaire"
      sourceLabel="BonCalcul.fr - Calcul frais de notaire"
    >
      {/* Price header */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-1">
          Exemple : achat dans l&apos;ancien
        </p>
        <p className="text-2xl font-bold text-gray-800">
          Bien a {prixBien.toLocaleString("fr-FR")} EUR
        </p>
        <p className="text-lg font-semibold text-indigo-600 mt-1">
          Frais de notaire : {totalAncien.toLocaleString("fr-FR")} EUR (
          {((totalAncien / prixBien) * 100).toFixed(1)}%)
        </p>
      </div>

      {/* Donut-style visualization using CSS */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        {/* Pie chart approximation with conic-gradient */}
        <div className="relative w-52 h-52 shrink-0 mx-auto">
          <div
            className="w-full h-full rounded-full shadow-lg"
            style={{
              background: `conic-gradient(
                #6366f1 0% ${((fraisAncien[0].montant / totalAncien) * 100).toFixed(1)}%,
                #8b5cf6 ${((fraisAncien[0].montant / totalAncien) * 100).toFixed(1)}% ${(((fraisAncien[0].montant + fraisAncien[1].montant) / totalAncien) * 100).toFixed(1)}%,
                #a78bfa ${(((fraisAncien[0].montant + fraisAncien[1].montant) / totalAncien) * 100).toFixed(1)}% ${(((fraisAncien[0].montant + fraisAncien[1].montant + fraisAncien[2].montant) / totalAncien) * 100).toFixed(1)}%,
                #e879f9 ${(((fraisAncien[0].montant + fraisAncien[1].montant + fraisAncien[2].montant) / totalAncien) * 100).toFixed(1)}% 100%
              )`,
            }}
          />
          <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center shadow-inner">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">
                {((totalAncien / prixBien) * 100).toFixed(1)}%
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                du prix
              </p>
            </div>
          </div>
        </div>

        {/* Legend with amounts */}
        <div className="flex-1 space-y-3 w-full">
          {fraisAncien.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg p-3 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${f.color} shrink-0`} />
                  <span className="text-sm font-semibold text-gray-800">
                    {f.label}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-800">
                  {f.montant.toLocaleString("fr-FR")} EUR
                </span>
              </div>
              <p className="text-xs text-gray-500 ml-5">{f.desc}</p>
              {/* Mini bar */}
              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden ml-5">
                <div
                  className={`h-full ${f.color} rounded-full`}
                  style={{
                    width: `${(f.montant / fraisAncien[0].montant) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ancien vs Neuf comparison */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
          Ancien vs Neuf : comparaison pour un bien a 250 000 EUR
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-indigo-100 text-center">
            <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">
              Bien ancien (+5 ans)
            </p>
            <p className="text-2xl font-bold text-indigo-700">
              ~17 983 EUR
            </p>
            <p className="text-sm text-gray-500 mt-1">soit ~7,2% du prix</p>
            <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
            <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">
              Bien neuf (VEFA)
            </p>
            <p className="text-2xl font-bold text-green-700">
              ~6 250 EUR
            </p>
            <p className="text-sm text-gray-500 mt-1">soit ~2,5% du prix</p>
            <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "34.7%" }} />
            </div>
          </div>
        </div>
      </div>
    </Infographic>
  );
}
