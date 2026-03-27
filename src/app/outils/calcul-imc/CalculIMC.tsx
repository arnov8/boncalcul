"use client";

import { useState, useMemo } from "react";

interface Categorie {
  label: string;
  min: number;
  max: number;
  color: string;
  bgColor: string;
  textColor: string;
}

const categories: Categorie[] = [
  {
    label: "Denutrition",
    min: 0,
    max: 16.5,
    color: "#dc2626",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    label: "Maigreur",
    min: 16.5,
    max: 18.5,
    color: "#f97316",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    label: "Poids normal",
    min: 18.5,
    max: 25,
    color: "#16a34a",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    label: "Surpoids",
    min: 25,
    max: 30,
    color: "#f97316",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    label: "Obesite moderee",
    min: 30,
    max: 35,
    color: "#dc2626",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    label: "Obesite severe",
    min: 35,
    max: 40,
    color: "#991b1b",
    bgColor: "bg-red-200",
    textColor: "text-red-900",
  },
  {
    label: "Obesite morbide",
    min: 40,
    max: 60,
    color: "#991b1b",
    bgColor: "bg-red-200",
    textColor: "text-red-900",
  },
];

function getCategorie(imc: number): Categorie {
  for (const cat of categories) {
    if (imc < cat.max) return cat;
  }
  return categories[categories.length - 1];
}

function getGaugePercent(imc: number): number {
  // Map IMC 10-50 to 0-100%
  const clamped = Math.max(10, Math.min(50, imc));
  return ((clamped - 10) / 40) * 100;
}

export default function CalculIMC() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");

  const result = useMemo(() => {
    const p = parseFloat(poids);
    const t = parseFloat(taille);
    if (!p || !t || p <= 0 || t <= 0) return null;

    const tailleM = t / 100;
    const imc = p / (tailleM * tailleM);
    const cat = getCategorie(imc);

    // Poids ideal range (IMC 18.5 - 25)
    const poidsIdealMin = 18.5 * tailleM * tailleM;
    const poidsIdealMax = 25 * tailleM * tailleM;

    return { imc, cat, poidsIdealMin, poidsIdealMax };
  }, [poids, taille]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez votre IMC
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Poids */}
        <div>
          <label
            htmlFor="poids"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Poids (kg)
          </label>
          <input
            id="poids"
            type="number"
            inputMode="decimal"
            min="1"
            max="500"
            step="0.1"
            placeholder="Ex : 72"
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        {/* Taille */}
        <div>
          <label
            htmlFor="taille"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Taille (cm)
          </label>
          <input
            id="taille"
            type="number"
            inputMode="decimal"
            min="50"
            max="300"
            step="1"
            placeholder="Ex : 175"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
      </div>

      {/* Resultats */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* IMC value */}
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Votre IMC
            </p>
            <p
              className="text-6xl font-extrabold mb-2"
              style={{ color: result.cat.color }}
            >
              {result.imc.toFixed(1)}
            </p>
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${result.cat.bgColor} ${result.cat.textColor}`}
            >
              {result.cat.label}
            </span>
          </div>

          {/* Gauge */}
          <div className="space-y-2">
            <div className="relative h-5 rounded-full overflow-hidden flex">
              {categories.map((cat, i) => {
                const width =
                  ((cat.max - cat.min) / 50) * 100;
                return (
                  <div
                    key={i}
                    className="h-full"
                    style={{
                      width: `${width}%`,
                      backgroundColor: cat.color,
                      opacity: 0.7,
                    }}
                  />
                );
              })}
              {/* Indicator */}
              <div
                className="absolute top-0 h-full w-1 bg-white shadow-lg transition-all duration-500"
                style={{
                  left: `${getGaugePercent(result.imc)}%`,
                  boxShadow: "0 0 6px rgba(0,0,0,0.4)",
                }}
              />
              <div
                className="absolute -top-1 w-3 h-3 bg-white border-2 border-gray-800 rounded-full transform -translate-x-1/2 transition-all duration-500"
                style={{
                  left: `${getGaugePercent(result.imc)}%`,
                  top: "-4px",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>10</span>
              <span>16.5</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>35</span>
              <span>40</span>
              <span>50</span>
            </div>
          </div>

          {/* Categories legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`text-center text-xs py-1.5 px-2 rounded-lg ${
                  result.cat.label === cat.label
                    ? `${cat.bgColor} ${cat.textColor} font-bold ring-2`
                    : "bg-gray-50 text-gray-500"
                }`}
                style={
                  result.cat.label === cat.label
                    ? { ["--tw-ring-color" as string]: cat.color }
                    : undefined
                }
              >
                <span className="block font-medium">{cat.label}</span>
                <span>
                  {cat.min === 0 ? "<" : cat.min} - {cat.max >= 60 ? ">" : cat.max}
                </span>
              </div>
            ))}
          </div>

          {/* Poids ideal */}
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-sm text-blue-600 font-medium mb-1">
              Poids ideal pour votre taille ({taille} cm)
            </p>
            <p className="text-2xl font-bold text-blue-800">
              {result.poidsIdealMin.toFixed(1)} kg &mdash;{" "}
              {result.poidsIdealMax.toFixed(1)} kg
            </p>
            <p className="text-xs text-blue-500 mt-1">
              Correspond a un IMC entre 18,5 et 25
            </p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!result && (
        <div className="text-center py-8 text-gray-400">
          <svg
            className="mx-auto h-12 w-12 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">
            Entrez votre poids et votre taille pour calculer votre IMC.
          </p>
        </div>
      )}
    </div>
  );
}
