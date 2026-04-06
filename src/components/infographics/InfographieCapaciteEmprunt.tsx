"use client";

import Infographic from "@/components/Infographic";

export default function InfographieCapaciteEmprunt() {
  const revenus = 4000;
  const charges = 500;
  const tauxEndettement = 35;
  const mensualiteMax = Math.round((revenus * tauxEndettement) / 100 - charges);
  const capacite20ans = Math.round(mensualiteMax * 240 * 0.82);
  const capacite25ans = Math.round(mensualiteMax * 300 * 0.78);

  return (
    <Infographic
      title="Capacite d'emprunt : la regle des 35% du HCSF expliquee"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-capacite-emprunt"
      sourceLabel="BonCalcul.fr - Calcul capacite d'emprunt"
    >
      {/* Rule visualization */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-4">
          <span className="text-2xl">&#9888;&#65039;</span>
          <p className="text-sm font-semibold text-amber-800">
            Depuis 2022, le HCSF limite le taux d&apos;endettement a 35% des revenus nets
          </p>
        </div>
      </div>

      {/* Example calculation */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">Exemple concret</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-blue-600">Revenus nets</p>
            <p className="text-lg font-bold text-blue-700">{revenus.toLocaleString("fr-FR")} EUR</p>
          </div>
          <span className="text-xl text-gray-400">-</span>
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-red-600">Charges</p>
            <p className="text-lg font-bold text-red-700">{charges.toLocaleString("fr-FR")} EUR</p>
          </div>
          <span className="text-xl text-gray-400">=</span>
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-green-600">Mensualite max</p>
            <p className="text-lg font-bold text-green-700">{mensualiteMax.toLocaleString("fr-FR")} EUR</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Formule : (Revenus x 35%) - Charges existantes = Mensualite maximale
        </p>
      </div>

      {/* Capacity by duration */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Capacite d&apos;emprunt selon la duree (taux moyen 2025)
        </p>
        <div className="space-y-3">
          {[
            { duree: "20 ans", montant: capacite20ans, pct: 80, color: "bg-blue-500" },
            { duree: "25 ans", montant: capacite25ans, pct: 100, color: "bg-green-500" },
          ].map((row) => (
            <div key={row.duree}>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span className="font-medium">{row.duree}</span>
                <span className="font-bold">{row.montant.toLocaleString("fr-FR")} EUR</span>
              </div>
              <div className="h-8 rounded-lg overflow-hidden bg-gray-200">
                <div
                  className={`${row.color} h-full rounded-lg flex items-center justify-center`}
                  style={{ width: `${row.pct}%` }}
                >
                  <span className="text-xs font-bold text-white">{row.montant.toLocaleString("fr-FR")} EUR</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Endettement bar */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Repartition du revenu</p>
        <div className="h-10 rounded-xl overflow-hidden flex border border-gray-200">
          <div className="bg-red-400 flex items-center justify-center" style={{ width: "35%" }}>
            <span className="text-xs font-bold text-white">35% max credit</span>
          </div>
          <div className="bg-green-500 flex items-center justify-center" style={{ width: "65%" }}>
            <span className="text-xs font-bold text-white">65% reste a vivre</span>
          </div>
        </div>
      </div>
    </Infographic>
  );
}
