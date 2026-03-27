"use client";

import { useState, useMemo } from "react";

type Mode = "ddr" | "conception";

interface Milestone {
  sa: number;
  label: string;
  color: string;
}

const milestones: Milestone[] = [
  { sa: 12, label: "Echo T1", color: "bg-purple-500" },
  { sa: 22, label: "Echo T2", color: "bg-blue-500" },
  { sa: 32, label: "Echo T3", color: "bg-teal-500" },
  { sa: 37, label: "Terme", color: "bg-green-500" },
  { sa: 41, label: "Depassement", color: "bg-red-500" },
];

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getTrimestre(sa: number): { label: string; numero: number } | null {
  if (sa < 1) return null;
  if (sa <= 14) return { label: "1er trimestre", numero: 1 };
  if (sa <= 28) return { label: "2e trimestre", numero: 2 };
  return { label: "3e trimestre", numero: 3 };
}

export default function CalculDateAccouchement() {
  const [mode, setMode] = useState<Mode>("ddr");
  const [dateInput, setDateInput] = useState("");

  const result = useMemo(() => {
    if (!dateInput) return null;

    const inputDate = new Date(dateInput + "T00:00:00");
    if (isNaN(inputDate.getTime())) return null;

    // DPA calculation
    const dpa =
      mode === "ddr"
        ? addDays(inputDate, 280) // Naegele: DDR + 280 days
        : addDays(inputDate, 266); // Conception + 266 days

    // DDR for SA calculation (if conception mode, DDR = conception - 14 days)
    const ddr = mode === "ddr" ? inputDate : addDays(inputDate, -14);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Current SA
    const diffMs = today.getTime() - ddr.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const saComplete = Math.floor(diffDays / 7);
    const saJours = diffDays % 7;

    // SG (semaines de grossesse)
    const sgDays = diffDays - 14;
    const sgComplete = Math.max(0, Math.floor(sgDays / 7));
    const sgJours = Math.max(0, sgDays % 7);

    // Remaining days
    const joursRestants = Math.max(
      0,
      Math.ceil((dpa.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    );

    // Trimester
    const trimestre = getTrimestre(saComplete);

    // Progress percentage (0-41 SA)
    const progress = Math.min(100, Math.max(0, (saComplete / 41) * 100));

    // Validate reasonable range
    if (saComplete < 0 || saComplete > 45) return null;

    return {
      dpa,
      ddr,
      saComplete,
      saJours,
      sgComplete,
      sgJours,
      joursRestants,
      trimestre,
      progress,
    };
  }, [dateInput, mode]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez votre date d&apos;accouchement
      </h2>

      {/* Mode selector */}
      <div className="flex rounded-lg border border-gray-200 overflow-hidden mb-6">
        <button
          onClick={() => {
            setMode("ddr");
            setDateInput("");
          }}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            mode === "ddr"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          Date des dernieres regles
        </button>
        <button
          onClick={() => {
            setMode("conception");
            setDateInput("");
          }}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            mode === "conception"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          Date de conception
        </button>
      </div>

      {/* Date input */}
      <div className="mb-6">
        <label
          htmlFor="date-input"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {mode === "ddr"
            ? "Premier jour de vos dernieres regles"
            : "Date estimee de conception"}
        </label>
        <input
          id="date-input"
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
        />
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* DPA */}
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Date prevue d&apos;accouchement
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">
              {formatDate(result.dpa)}
            </p>
            <p className="text-sm text-gray-500">
              {result.joursRestants > 0
                ? `Dans ${result.joursRestants} jour${result.joursRestants > 1 ? "s" : ""}`
                : "Terme atteint ou depasse"}
            </p>
          </div>

          {/* Key figures */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-600 font-medium mb-1">
                Semaines d&apos;amenorrhee
              </p>
              <p className="text-2xl font-bold text-blue-800">
                {result.saComplete} SA
                <span className="text-sm font-normal text-blue-500">
                  {" "}
                  + {result.saJours} j
                </span>
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <p className="text-xs text-purple-600 font-medium mb-1">
                Semaines de grossesse
              </p>
              <p className="text-2xl font-bold text-purple-800">
                {result.sgComplete} SG
                <span className="text-sm font-normal text-purple-500">
                  {" "}
                  + {result.sgJours} j
                </span>
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
              <p className="text-xs text-pink-600 font-medium mb-1">
                Trimestre
              </p>
              <p className="text-2xl font-bold text-pink-800">
                {result.trimestre?.label ?? "—"}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Debut</span>
              <span>Terme (41 SA)</span>
            </div>
            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
              {/* Trimester zones */}
              <div
                className="absolute inset-y-0 left-0 bg-purple-100"
                style={{ width: `${(14 / 41) * 100}%` }}
              />
              <div
                className="absolute inset-y-0 bg-blue-100"
                style={{
                  left: `${(14 / 41) * 100}%`,
                  width: `${(14 / 41) * 100}%`,
                }}
              />
              <div
                className="absolute inset-y-0 bg-teal-100"
                style={{
                  left: `${(28 / 41) * 100}%`,
                  width: `${(13 / 41) * 100}%`,
                }}
              />
              {/* Progress indicator */}
              <div
                className="absolute inset-y-0 left-0 bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${result.progress}%`, opacity: 0.7 }}
              />
            </div>
            <div className="flex text-xs text-gray-400">
              <span style={{ width: `${(14 / 41) * 100}%` }} className="text-center">
                T1
              </span>
              <span style={{ width: `${(14 / 41) * 100}%` }} className="text-center">
                T2
              </span>
              <span style={{ width: `${(13 / 41) * 100}%` }} className="text-center">
                T3
              </span>
            </div>
          </div>

          {/* Timeline milestones */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Dates cles de votre grossesse
            </h3>
            <div className="space-y-2">
              {milestones.map((m) => {
                const milestoneDate = addDays(result.ddr, m.sa * 7);
                const isPast = new Date() >= milestoneDate;
                return (
                  <div
                    key={m.sa}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                      isPast
                        ? "bg-gray-50 border-gray-200"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full shrink-0 ${m.color} ${
                        isPast ? "opacity-50" : ""
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-sm font-medium ${
                          isPast ? "text-gray-400 line-through" : "text-gray-800"
                        }`}
                      >
                        {m.sa} SA — {m.label}
                      </span>
                    </div>
                    <span
                      className={`text-xs shrink-0 ${
                        isPast ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {milestoneDate.toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Avertissement :</strong> Ce calcul est indicatif. Seul
              votre medecin ou sage-femme peut confirmer votre date
              d&apos;accouchement.
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">
            Entrez une date pour calculer votre date prevue
            d&apos;accouchement.
          </p>
        </div>
      )}
    </div>
  );
}
