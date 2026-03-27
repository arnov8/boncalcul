"use client";

import { useState, useMemo } from "react";

type Mode = "pourcentage-de" | "proportion" | "variation";

const TABS: { key: Mode; label: string }[] = [
  { key: "pourcentage-de", label: "X% de Y" },
  { key: "proportion", label: "X est quel % de Y" },
  { key: "variation", label: "Variation en %" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function parseInput(value: string): number {
  return parseFloat(value.replace(",", ".")) || 0;
}

export default function CalculPourcentage() {
  const [mode, setMode] = useState<Mode>("pourcentage-de");

  // Mode 1: X% de Y
  const [pourcentage, setPourcentage] = useState<string>("20");
  const [nombre, setNombre] = useState<string>("150");

  // Mode 2: X est quel % de Y
  const [valeurPartielle, setValeurPartielle] = useState<string>("30");
  const [valeurTotale, setValeurTotale] = useState<string>("150");

  // Mode 3: Variation
  const [valeurInitiale, setValeurInitiale] = useState<string>("100");
  const [valeurFinale, setValeurFinale] = useState<string>("130");

  const resultatPourcentageDe = useMemo(() => {
    const pct = parseInput(pourcentage);
    const num = parseInput(nombre);
    const resultat = num * pct / 100;
    return { resultat, pct, num };
  }, [pourcentage, nombre]);

  const resultatProportion = useMemo(() => {
    const partielle = parseInput(valeurPartielle);
    const totale = parseInput(valeurTotale);
    const pct = totale !== 0 ? (partielle / totale) * 100 : 0;
    return { pct, partielle, totale };
  }, [valeurPartielle, valeurTotale]);

  const resultatVariation = useMemo(() => {
    const initiale = parseInput(valeurInitiale);
    const finale = parseInput(valeurFinale);
    const difference = finale - initiale;
    const variation = initiale !== 0 ? (difference / initiale) * 100 : 0;
    return { variation, difference, initiale, finale };
  }, [valeurInitiale, valeurFinale]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculateur de pourcentage
        </h2>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setMode(tab.key)}
                className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                  mode === tab.key
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mode 1: X% de Y */}
        {mode === "pourcentage-de" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-2">
              Calculer combien vaut X % d'un nombre Y.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="pct-pourcentage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pourcentage (%)
                </label>
                <input
                  id="pct-pourcentage"
                  type="text"
                  inputMode="decimal"
                  value={pourcentage}
                  onChange={(e) => setPourcentage(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex : 20"
                />
              </div>
              <div>
                <label
                  htmlFor="pct-nombre"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  id="pct-nombre"
                  type="text"
                  inputMode="decimal"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex : 150"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: X est quel % de Y */}
        {mode === "proportion" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-2">
              Trouver quel pourcentage represente X par rapport a Y.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="prop-partielle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Valeur partielle (X)
                </label>
                <input
                  id="prop-partielle"
                  type="text"
                  inputMode="decimal"
                  value={valeurPartielle}
                  onChange={(e) => setValeurPartielle(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex : 30"
                />
              </div>
              <div>
                <label
                  htmlFor="prop-totale"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Valeur totale (Y)
                </label>
                <input
                  id="prop-totale"
                  type="text"
                  inputMode="decimal"
                  value={valeurTotale}
                  onChange={(e) => setValeurTotale(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex : 150"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mode 3: Variation en % */}
        {mode === "variation" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-2">
              Calculer la variation en pourcentage entre deux valeurs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="var-initiale"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Valeur initiale
                </label>
                <input
                  id="var-initiale"
                  type="text"
                  inputMode="decimal"
                  value={valeurInitiale}
                  onChange={(e) => setValeurInitiale(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex : 100"
                />
              </div>
              <div>
                <label
                  htmlFor="var-finale"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Valeur finale
                </label>
                <input
                  id="var-finale"
                  type="text"
                  inputMode="decimal"
                  value={valeurFinale}
                  onChange={(e) => setValeurFinale(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex : 130"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --------------- Resultats --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

        {/* Mode 1 Result */}
        {mode === "pourcentage-de" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Pourcentage
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatPourcentageDe.pct)}&nbsp;%
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Nombre
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatPourcentageDe.num)}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Resultat
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {formatNumber(resultatPourcentageDe.resultat)}
                </p>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-5">
              <p className="text-sm opacity-90 mb-1">
                {formatNumber(resultatPourcentageDe.pct)} % de{" "}
                {formatNumber(resultatPourcentageDe.num)}
              </p>
              <p className="text-2xl font-bold">
                = {formatNumber(resultatPourcentageDe.resultat)}
              </p>
            </div>
          </>
        )}

        {/* Mode 2 Result */}
        {mode === "proportion" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Valeur partielle
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatProportion.partielle)}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Valeur totale
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatProportion.totale)}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Pourcentage
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {formatNumber(resultatProportion.pct)}&nbsp;%
                </p>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-5">
              <p className="text-sm opacity-90 mb-1">
                {formatNumber(resultatProportion.partielle)} represente par
                rapport a {formatNumber(resultatProportion.totale)}
              </p>
              <p className="text-2xl font-bold">
                = {formatNumber(resultatProportion.pct)} %
              </p>
            </div>
          </>
        )}

        {/* Mode 3 Result */}
        {mode === "variation" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Valeur initiale
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatVariation.initiale)}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Valeur finale
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatVariation.finale)}
                </p>
              </div>
              <div
                className={`rounded-xl p-4 text-center ${
                  resultatVariation.variation >= 0
                    ? "bg-green-50"
                    : "bg-red-50"
                }`}
              >
                <p
                  className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                    resultatVariation.variation >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Variation
                </p>
                <p
                  className={`text-2xl font-bold ${
                    resultatVariation.variation >= 0
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {resultatVariation.variation >= 0 ? "+" : ""}
                  {formatNumber(resultatVariation.variation)}&nbsp;%
                </p>
              </div>
            </div>
            <div
              className={`text-white rounded-xl p-5 ${
                resultatVariation.variation >= 0
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              <p className="text-sm opacity-90 mb-1">
                De {formatNumber(resultatVariation.initiale)} a{" "}
                {formatNumber(resultatVariation.finale)} (
                {resultatVariation.difference >= 0 ? "+" : ""}
                {formatNumber(resultatVariation.difference)})
              </p>
              <p className="text-2xl font-bold">
                = {resultatVariation.variation >= 0 ? "+" : ""}
                {formatNumber(resultatVariation.variation)} %
              </p>
            </div>
          </>
        )}
      </div>

      {/* --------------- Exemples rapides --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Exemples de calculs courants
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-600">
                  Calcul
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Resultat
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { calcul: "10 % de 200", resultat: "20,00" },
                { calcul: "15 % de 80", resultat: "12,00" },
                { calcul: "20 % de 150", resultat: "30,00" },
                { calcul: "25 % de 1 000", resultat: "250,00" },
                { calcul: "33 % de 90", resultat: "29,70" },
                { calcul: "50 % de 64", resultat: "32,00" },
                { calcul: "75 % de 200", resultat: "150,00" },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-2 font-medium text-gray-800">
                    {row.calcul}
                  </td>
                  <td className="py-3 px-2 text-right text-blue-600 font-semibold">
                    {row.resultat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
