"use client";

import { useState, useMemo } from "react";

type Sexe = "homme" | "femme";
type Morphologie = "mince" | "normal" | "large";

interface FormuleResult {
  nom: string;
  description: string;
  poids: number;
}

function calcLorentz(taille: number, sexe: Sexe): number {
  if (sexe === "homme") {
    return taille - 100 - (taille - 150) / 4;
  }
  return taille - 100 - (taille - 150) / 2.5;
}

function calcDevine(taille: number, sexe: Sexe): number {
  if (sexe === "homme") {
    return 50 + 0.9 * (taille - 152.4);
  }
  return 45.5 + 0.9 * (taille - 152.4);
}

function calcCreff(
  taille: number,
  age: number,
  morphologie: Morphologie
): number {
  const coefficients: Record<Morphologie, number> = {
    mince: 0.9,
    normal: 1.0,
    large: 1.1,
  };
  return ((taille - 100) + age / 10) * 0.9 * coefficients[morphologie];
}

function calcImcRange(taille: number): { min: number; max: number } {
  const tailleM = taille / 100;
  return {
    min: 18.5 * tailleM * tailleM,
    max: 25 * tailleM * tailleM,
  };
}

export default function CalculPoidsIdeal() {
  const [sexe, setSexe] = useState<Sexe>("homme");
  const [taille, setTaille] = useState("");
  const [age, setAge] = useState("");
  const [morphologie, setMorphologie] = useState<Morphologie>("normal");
  const [tourPoignet, setTourPoignet] = useState("");

  // Auto-detect morphology from wrist circumference
  const morphologieEffective = useMemo(() => {
    const tp = parseFloat(tourPoignet);
    if (!tp || tp <= 0) return morphologie;
    if (sexe === "homme") {
      if (tp < 16) return "mince";
      if (tp > 18) return "large";
      return "normal";
    }
    if (tp < 14) return "mince";
    if (tp > 16) return "large";
    return "normal";
  }, [tourPoignet, sexe, morphologie]);

  const results = useMemo(() => {
    const t = parseFloat(taille);
    const a = parseFloat(age);
    if (!t || t < 100 || t > 250) return null;
    if (!a || a < 18 || a > 120) return null;

    const formules: FormuleResult[] = [
      {
        nom: "Lorentz",
        description:
          sexe === "homme"
            ? "Taille - 100 - (Taille - 150) / 4"
            : "Taille - 100 - (Taille - 150) / 2,5",
        poids: calcLorentz(t, sexe),
      },
      {
        nom: "Devine",
        description:
          sexe === "homme"
            ? "50 + 0,9 x (Taille - 152,4)"
            : "45,5 + 0,9 x (Taille - 152,4)",
        poids: calcDevine(t, sexe),
      },
      {
        nom: "Creff",
        description: `((Taille - 100) + Age/10) x 0,9 x ${morphologieEffective === "mince" ? "0,9" : morphologieEffective === "large" ? "1,1" : "1,0"}`,
        poids: calcCreff(t, a, morphologieEffective),
      },
    ];

    const imcRange = calcImcRange(t);

    const allWeights = [...formules.map((f) => f.poids), imcRange.min, imcRange.max];
    const minPoids = Math.min(...allWeights);
    const maxPoids = Math.max(...allWeights);
    const moyennePoids =
      formules.reduce((sum, f) => sum + f.poids, 0) / formules.length;

    return { formules, imcRange, minPoids, maxPoids, moyennePoids };
  }, [taille, age, sexe, morphologieEffective]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez votre poids ideal
      </h2>

      {/* Sexe */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sexe
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSexe("homme")}
            className={`flex-1 py-3 rounded-lg text-sm font-semibold transition ${
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
            className={`flex-1 py-3 rounded-lg text-sm font-semibold transition ${
              sexe === "femme"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Femme
          </button>
        </div>
      </div>

      {/* Taille + Age */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
            min="100"
            max="250"
            step="1"
            placeholder="Ex : 175"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
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
            min="18"
            max="120"
            step="1"
            placeholder="Ex : 35"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
      </div>

      {/* Morphologie + Tour de poignet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="morphologie"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Morphologie (Creff)
          </label>
          <select
            id="morphologie"
            value={morphologieEffective}
            onChange={(e) => {
              setMorphologie(e.target.value as Morphologie);
              setTourPoignet("");
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
          >
            <option value="mince">Mince (gracile)</option>
            <option value="normal">Normale</option>
            <option value="large">Large (forte)</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="tourPoignet"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tour de poignet (cm){" "}
            <span className="text-gray-400 font-normal">optionnel</span>
          </label>
          <input
            id="tourPoignet"
            type="number"
            inputMode="decimal"
            min="10"
            max="25"
            step="0.1"
            placeholder="Auto-detecte la morphologie"
            value={tourPoignet}
            onChange={(e) => setTourPoignet(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          {tourPoignet && parseFloat(tourPoignet) > 0 && (
            <p className="text-xs text-blue-600 mt-1">
              Morphologie detectee : {morphologieEffective}
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Synthesis */}
          <div className="bg-blue-50 rounded-xl p-5 text-center">
            <p className="text-sm text-blue-600 font-medium mb-1">
              Synthese — Votre poids ideal estime
            </p>
            <p className="text-3xl font-extrabold text-blue-800">
              {results.moyennePoids.toFixed(1)} kg
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Fourchette : {results.minPoids.toFixed(1)} kg &mdash;{" "}
              {results.maxPoids.toFixed(1)} kg
            </p>
            <p className="text-xs text-blue-500 mt-2">
              Moyenne des 3 formules. La fourchette inclut la plage IMC sain.
            </p>
          </div>

          {/* Formula cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.formules.map((f) => (
              <div
                key={f.nom}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{f.nom}</h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {f.poids.toFixed(1)} kg
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-mono">
                  {f.description}
                </p>
              </div>
            ))}

            {/* IMC range card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Plage IMC sain</h3>
                <span className="text-2xl font-bold text-green-600">
                  {results.imcRange.min.toFixed(1)}-
                  {results.imcRange.max.toFixed(1)} kg
                </span>
              </div>
              <p className="text-xs text-gray-500 font-mono">
                IMC 18,5 a 25 pour {taille} cm
              </p>
            </div>
          </div>

          {/* Visual comparison bar */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Comparaison des resultats
            </p>
            <div className="space-y-2">
              {results.formules.map((f) => {
                const min = results.imcRange.min - 5;
                const max = results.imcRange.max + 5;
                const percent = Math.max(
                  0,
                  Math.min(100, ((f.poids - min) / (max - min)) * 100)
                );
                return (
                  <div key={f.nom} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-16 text-right shrink-0">
                      {f.nom}
                    </span>
                    <div className="flex-1 h-6 bg-gray-200 rounded-full relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-800">
                        {f.poids.toFixed(1)} kg
                      </span>
                    </div>
                  </div>
                );
              })}
              {/* IMC range bar */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-600 w-16 text-right shrink-0">
                  IMC sain
                </span>
                <div className="flex-1 h-6 bg-gray-200 rounded-full relative overflow-hidden">
                  {(() => {
                    const min = results.imcRange.min - 5;
                    const max = results.imcRange.max + 5;
                    const leftPercent = Math.max(
                      0,
                      ((results.imcRange.min - min) / (max - min)) * 100
                    );
                    const rightPercent = Math.min(
                      100,
                      ((results.imcRange.max - min) / (max - min)) * 100
                    );
                    return (
                      <div
                        className="absolute top-0 h-full bg-green-400 rounded-full transition-all duration-500"
                        style={{
                          left: `${leftPercent}%`,
                          width: `${rightPercent - leftPercent}%`,
                        }}
                      />
                    );
                  })()}
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-800">
                    {results.imcRange.min.toFixed(1)} - {results.imcRange.max.toFixed(1)} kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>Avertissement :</strong> Ces resultats sont des
              estimations basees sur des formules statistiques. Le poids ideal
              est individuel et depend de nombreux facteurs (masse musculaire,
              ossature, genetique, activite physique). Ces calculs ne
              remplacent pas un avis medical. Consultez un professionnel de
              sante pour une evaluation personnalisee.
            </p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!results && (
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
            Entrez votre taille et votre age pour calculer votre poids ideal.
          </p>
        </div>
      )}
    </div>
  );
}
