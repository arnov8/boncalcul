"use client";

import { useState, useMemo } from "react";

type Sexe = "homme" | "femme";

interface NiveauActivite {
  label: string;
  description: string;
  multiplier: number;
}

const niveauxActivite: NiveauActivite[] = [
  {
    label: "Sedentaire",
    description: "Peu ou pas d'exercice, travail de bureau",
    multiplier: 1.2,
  },
  {
    label: "Legerement actif",
    description: "Exercice leger 1 a 3 fois/semaine",
    multiplier: 1.375,
  },
  {
    label: "Moderement actif",
    description: "Exercice modere 3 a 5 fois/semaine",
    multiplier: 1.55,
  },
  {
    label: "Tres actif",
    description: "Exercice intense 6 a 7 fois/semaine",
    multiplier: 1.725,
  },
  {
    label: "Extremement actif",
    description: "Athlete ou travail tres physique + sport",
    multiplier: 1.9,
  },
];

function calcMacros(calories: number) {
  const proteinesKcal = calories * 0.3;
  const glucidesKcal = calories * 0.4;
  const lipidesKcal = calories * 0.3;
  return {
    proteines: Math.round(proteinesKcal / 4),
    glucides: Math.round(glucidesKcal / 4),
    lipides: Math.round(lipidesKcal / 9),
  };
}

export default function CalculCalories() {
  const [sexe, setSexe] = useState<Sexe>("homme");
  const [age, setAge] = useState("");
  const [taille, setTaille] = useState("");
  const [poids, setPoids] = useState("");
  const [activiteIndex, setActiviteIndex] = useState(0);

  const result = useMemo(() => {
    const a = parseFloat(age);
    const t = parseFloat(taille);
    const p = parseFloat(poids);
    if (!a || !t || !p || a <= 0 || t <= 0 || p <= 0) return null;

    // Mifflin-St Jeor
    const bmr =
      sexe === "homme"
        ? 10 * p + 6.25 * t - 5 * a + 5
        : 10 * p + 6.25 * t - 5 * a - 161;

    const tdee = bmr * niveauxActivite[activiteIndex].multiplier;
    const perte05 = tdee - 500;
    const perte1 = tdee - 1000;
    const prise05 = tdee + 500;

    return { bmr, tdee, perte05, perte1, prise05 };
  }, [sexe, age, taille, poids, activiteIndex]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez vos besoins caloriques
      </h2>

      {/* Sexe */}
      <div className="mb-5">
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

      {/* Age, Taille, Poids */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age (annees)
          </label>
          <input
            id="age"
            type="text"
            inputMode="decimal"
            min="1"
            max="120"
            step="1"
            placeholder="Ex : 30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="taille"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Taille (cm)
          </label>
          <input
            id="taille"
            type="text"
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
        <div>
          <label
            htmlFor="poids"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Poids (kg)
          </label>
          <input
            id="poids"
            type="text"
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

      {/* Niveau d'activite */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Niveau d&apos;activite
        </label>
        <div className="space-y-2">
          {niveauxActivite.map((niveau, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiviteIndex(i)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                activiteIndex === i
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
            >
              <span
                className={`font-semibold text-sm ${
                  activiteIndex === i ? "text-blue-700" : "text-gray-800"
                }`}
              >
                {niveau.label}
              </span>
              <span className="block text-xs text-gray-500 mt-0.5">
                {niveau.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Resultats */}
      {result && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* BMR & TDEE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                Metabolisme de base (BMR)
              </p>
              <p className="text-2xl sm:text-4xl font-extrabold text-gray-800">
                {Math.round(result.bmr)}
              </p>
              <p className="text-sm text-gray-500 mt-1">kcal / jour</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center ring-2 ring-blue-200">
              <p className="text-sm text-blue-600 uppercase tracking-wide font-medium mb-1">
                Besoins journaliers (TDEE)
              </p>
              <p className="text-2xl sm:text-4xl font-extrabold text-blue-700">
                {Math.round(result.tdee)}
              </p>
              <p className="text-sm text-blue-500 mt-1">kcal / jour</p>
            </div>
          </div>

          {/* Objectifs */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Objectifs de poids
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                <p className="text-xs text-orange-600 font-medium mb-1">
                  Perdre 1 kg / semaine
                </p>
                <p className="text-2xl font-bold text-orange-700">
                  {Math.round(result.perte1)}
                </p>
                <p className="text-xs text-orange-500">kcal / jour (-1000)</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                <p className="text-xs text-orange-600 font-medium mb-1">
                  Perdre 0,5 kg / semaine
                </p>
                <p className="text-2xl font-bold text-orange-700">
                  {Math.round(result.perte05)}
                </p>
                <p className="text-xs text-orange-500">kcal / jour (-500)</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                <p className="text-xs text-green-600 font-medium mb-1">
                  Prendre 0,5 kg / semaine
                </p>
                <p className="text-2xl font-bold text-green-700">
                  {Math.round(result.prise05)}
                </p>
                <p className="text-xs text-green-500">kcal / jour (+500)</p>
              </div>
            </div>
          </div>

          {/* Macronutriments */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Repartition des macronutriments (maintien)
            </h3>
            <div className="bg-gray-50 rounded-xl p-5">
              {/* Barre visuelle */}
              <div className="flex rounded-full overflow-hidden h-4 mb-4">
                <div
                  className="bg-blue-500"
                  style={{ width: "30%" }}
                  title="Proteines 30%"
                />
                <div
                  className="bg-yellow-400"
                  style={{ width: "40%" }}
                  title="Glucides 40%"
                />
                <div
                  className="bg-purple-500"
                  style={{ width: "30%" }}
                  title="Lipides 30%"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1" />
                  <p className="text-sm font-semibold text-gray-800">
                    Proteines
                  </p>
                  <p className="text-lg font-bold text-blue-600">
                    {calcMacros(result.tdee).proteines} g
                  </p>
                  <p className="text-xs text-gray-500">30 % &mdash; {Math.round(result.tdee * 0.3)} kcal</p>
                </div>
                <div>
                  <div className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-1" />
                  <p className="text-sm font-semibold text-gray-800">
                    Glucides
                  </p>
                  <p className="text-lg font-bold text-yellow-600">
                    {calcMacros(result.tdee).glucides} g
                  </p>
                  <p className="text-xs text-gray-500">40 % &mdash; {Math.round(result.tdee * 0.4)} kcal</p>
                </div>
                <div>
                  <div className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-1" />
                  <p className="text-sm font-semibold text-gray-800">
                    Lipides
                  </p>
                  <p className="text-lg font-bold text-purple-600">
                    {calcMacros(result.tdee).lipides} g
                  </p>
                  <p className="text-xs text-gray-500">30 % &mdash; {Math.round(result.tdee * 0.3)} kcal</p>
                </div>
              </div>
            </div>
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
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
            />
          </svg>
          <p className="text-sm">
            Renseignez vos informations pour calculer vos besoins caloriques.
          </p>
        </div>
      )}
    </div>
  );
}
