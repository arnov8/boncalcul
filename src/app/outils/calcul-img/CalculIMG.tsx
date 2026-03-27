"use client";

import { useState, useMemo } from "react";

type Sexe = "homme" | "femme";

interface Categorie {
  label: string;
  min: number;
  max: number;
  color: string;
  bgColor: string;
  textColor: string;
}

const categoriesHomme: Categorie[] = [
  {
    label: "Trop maigre",
    min: 0,
    max: 6,
    color: "#dc2626",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    label: "Athletique",
    min: 6,
    max: 14,
    color: "#2563eb",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    label: "Normal",
    min: 14,
    max: 18,
    color: "#16a34a",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    label: "Surpoids",
    min: 18,
    max: 25,
    color: "#f97316",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    label: "Obese",
    min: 25,
    max: 50,
    color: "#dc2626",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
];

const categoriesFemme: Categorie[] = [
  {
    label: "Trop maigre",
    min: 0,
    max: 14,
    color: "#dc2626",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    label: "Athletique",
    min: 14,
    max: 21,
    color: "#2563eb",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    label: "Normal",
    min: 21,
    max: 25,
    color: "#16a34a",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    label: "Surpoids",
    min: 25,
    max: 32,
    color: "#f97316",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    label: "Obese",
    min: 32,
    max: 50,
    color: "#dc2626",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
];

function getCategorie(img: number, sexe: Sexe): Categorie {
  const cats = sexe === "homme" ? categoriesHomme : categoriesFemme;
  for (const cat of cats) {
    if (img < cat.max) return cat;
  }
  return cats[cats.length - 1];
}

function getGaugePercent(img: number): number {
  const clamped = Math.max(0, Math.min(50, img));
  return (clamped / 50) * 100;
}

export default function CalculIMG() {
  const [sexe, setSexe] = useState<Sexe>("homme");
  const [age, setAge] = useState("");
  const [taille, setTaille] = useState("");
  const [poids, setPoids] = useState("");

  const result = useMemo(() => {
    const a = parseFloat(age);
    const t = parseFloat(taille);
    const p = parseFloat(poids);
    if (!a || !t || !p || a <= 0 || t <= 0 || p <= 0) return null;

    const tailleM = t / 100;
    const imc = p / (tailleM * tailleM);
    const sexeVal = sexe === "homme" ? 1 : 0;
    const img = 1.2 * imc + 0.23 * a - 10.8 * sexeVal - 5.4;
    const cat = getCategorie(img, sexe);

    return { img, imc, cat };
  }, [sexe, age, taille, poids]);

  const categories = sexe === "homme" ? categoriesHomme : categoriesFemme;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez votre IMG
      </h2>

      {/* Sexe selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sexe
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSexe("homme")}
            className={`py-3 rounded-lg font-semibold text-sm transition ${
              sexe === "homme"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Homme
          </button>
          <button
            type="button"
            onClick={() => setSexe("femme")}
            className={`py-3 rounded-lg font-semibold text-sm transition ${
              sexe === "femme"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Femme
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age (ans)
          </label>
          <input
            id="age"
            type="number"
            inputMode="numeric"
            min="15"
            max="120"
            step="1"
            placeholder="Ex : 35"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
      </div>

      {/* Resultats */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* IMG value */}
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Votre IMG
            </p>
            <p
              className="text-6xl font-extrabold mb-2"
              style={{ color: result.cat.color }}
            >
              {result.img.toFixed(1)}%
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
                const width = ((cat.max - cat.min) / 50) * 100;
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
                  left: `${getGaugePercent(result.img)}%`,
                  boxShadow: "0 0 6px rgba(0,0,0,0.4)",
                }}
              />
              <div
                className="absolute -top-1 w-3 h-3 bg-white border-2 border-gray-800 rounded-full transform -translate-x-1/2 transition-all duration-500"
                style={{
                  left: `${getGaugePercent(result.img)}%`,
                  top: "-4px",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              {sexe === "homme" ? (
                <>
                  <span>0%</span>
                  <span>6%</span>
                  <span>14%</span>
                  <span>18%</span>
                  <span>25%</span>
                  <span>50%</span>
                </>
              ) : (
                <>
                  <span>0%</span>
                  <span>14%</span>
                  <span>21%</span>
                  <span>25%</span>
                  <span>32%</span>
                  <span>50%</span>
                </>
              )}
            </div>
          </div>

          {/* Categories legend */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
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
                  {cat.min === 0 ? "<" : `${cat.min}%`} -{" "}
                  {cat.max >= 50 ? ">" : `${cat.max}%`}
                </span>
              </div>
            ))}
          </div>

          {/* IMC reference */}
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-sm text-blue-600 font-medium mb-1">
              Votre IMC (pour reference)
            </p>
            <p className="text-2xl font-bold text-blue-800">
              {result.imc.toFixed(1)}
            </p>
            <p className="text-xs text-blue-500 mt-1">
              IMC = Poids / Taille&sup2; (utilise dans le calcul de l&apos;IMG)
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Ce calcul est base sur la formule de Deurenberg et fournit une
            estimation. Il ne remplace pas un avis medical ni une mesure
            professionnelle (impedancemetrie, DEXA, plis cutanes).
          </p>
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
            Entrez vos informations pour calculer votre indice de masse grasse.
          </p>
        </div>
      )}
    </div>
  );
}
