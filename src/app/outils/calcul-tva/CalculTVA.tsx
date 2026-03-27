"use client";

import { useState, useMemo } from "react";

const TAUX_TVA = [
  { label: "20 %", value: 20, description: "Normal" },
  { label: "10 %", value: 10, description: "Intermediaire" },
  { label: "5,5 %", value: 5.5, description: "Reduit" },
  { label: "2,1 %", value: 2.1, description: "Super reduit" },
];

type Direction = "ht-to-ttc" | "ttc-to-ht";

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculTVA() {
  const [montant, setMontant] = useState<string>("100");
  const [direction, setDirection] = useState<Direction>("ht-to-ttc");
  const [tauxIndex, setTauxIndex] = useState<number>(0);
  const [customTaux, setCustomTaux] = useState<string>("");
  const [useCustom, setUseCustom] = useState(false);

  const taux = useCustom
    ? parseFloat(customTaux.replace(",", ".")) || 0
    : TAUX_TVA[tauxIndex].value;

  const montantNum = parseFloat(montant.replace(",", ".")) || 0;

  const result = useMemo(() => {
    if (direction === "ht-to-ttc") {
      const ht = montantNum;
      const tva = ht * (taux / 100);
      const ttc = ht + tva;
      return { ht, tva, ttc };
    } else {
      const ttc = montantNum;
      const ht = ttc / (1 + taux / 100);
      const tva = ttc - ht;
      return { ht, tva, ttc };
    }
  }, [montantNum, taux, direction]);

  const tableRows = useMemo(() => {
    return TAUX_TVA.map((t) => {
      if (direction === "ht-to-ttc") {
        const ht = montantNum;
        const tva = ht * (t.value / 100);
        const ttc = ht + tva;
        return { taux: t, ht, tva, ttc };
      } else {
        const ttc = montantNum;
        const ht = ttc / (1 + t.value / 100);
        const tva = ttc - ht;
        return { taux: t, ht, tva, ttc };
      }
    });
  }, [montantNum, direction]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculateur de TVA
        </h2>

        {/* Montant */}
        <div className="mb-5">
          <label
            htmlFor="montant"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Montant en euros
          </label>
          <input
            id="montant"
            type="text"
            inputMode="decimal"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 100"
          />
        </div>

        {/* Direction */}
        <div className="mb-5">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Sens de conversion
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => setDirection("ht-to-ttc")}
              className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                direction === "ht-to-ttc"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              HT &rarr; TTC
            </button>
            <button
              onClick={() => setDirection("ttc-to-ht")}
              className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                direction === "ttc-to-ht"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              TTC &rarr; HT
            </button>
          </div>
        </div>

        {/* Taux TVA */}
        <div className="mb-2">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Taux de TVA
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {TAUX_TVA.map((t, i) => (
              <button
                key={t.value}
                onClick={() => {
                  setTauxIndex(i);
                  setUseCustom(false);
                }}
                className={`rounded-lg py-3 text-center transition ${
                  !useCustom && tauxIndex === i
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="block text-sm font-semibold">{t.label}</span>
                <span className="block text-xs text-inherit opacity-75">
                  {t.description}
                </span>
              </button>
            ))}
            <button
              onClick={() => setUseCustom(true)}
              className={`rounded-lg py-3 text-center transition ${
                useCustom
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="block text-sm font-semibold">Autre</span>
              <span className="block text-xs text-inherit opacity-75">
                Personnalise
              </span>
            </button>
          </div>
        </div>

        {/* Custom taux */}
        {useCustom && (
          <div className="mt-3 mb-2">
            <label
              htmlFor="custom-taux"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Taux personnalise (%)
            </label>
            <input
              id="custom-taux"
              type="text"
              inputMode="decimal"
              value={customTaux}
              onChange={(e) => setCustomTaux(e.target.value)}
              className="w-full max-w-xs rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ex : 8.5"
            />
          </div>
        )}
      </div>

      {/* --------------- Resultats --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Montant HT
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {formatEuro(result.ht)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              TVA ({useCustom ? customTaux || "0" : TAUX_TVA[tauxIndex].label})
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {formatEuro(result.tva)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Montant TTC
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {formatEuro(result.ttc)}&nbsp;&euro;
            </p>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-blue-600 text-white rounded-xl p-5">
          <p className="text-sm opacity-90 mb-1">
            {direction === "ht-to-ttc"
              ? `${formatEuro(montantNum)} € HT + ${formatEuro(result.tva)} € de TVA`
              : `${formatEuro(result.ttc)} € TTC - ${formatEuro(result.tva)} € de TVA`}
          </p>
          <p className="text-2xl font-bold">
            {direction === "ht-to-ttc"
              ? `= ${formatEuro(result.ttc)} € TTC`
              : `= ${formatEuro(result.ht)} € HT`}
          </p>
        </div>
      </div>

      {/* --------------- Tableau comparatif --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Tableau comparatif pour {formatEuro(montantNum)}&nbsp;&euro;{" "}
          {direction === "ht-to-ttc" ? "HT" : "TTC"}
        </h3>

        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-600">
                  Taux
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Montant HT
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  TVA
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Montant TTC
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr
                  key={row.taux.value}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-2 font-medium text-gray-800">
                    {row.taux.label}{" "}
                    <span className="text-gray-400 text-xs">
                      ({row.taux.description})
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700">
                    {formatEuro(row.ht)}&nbsp;&euro;
                  </td>
                  <td className="py-3 px-2 text-right text-blue-600 font-semibold">
                    {formatEuro(row.tva)}&nbsp;&euro;
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700">
                    {formatEuro(row.ttc)}&nbsp;&euro;
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
