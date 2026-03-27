"use client";

import { useState, useMemo } from "react";

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

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(date: Date, start: Date, end: Date): boolean {
  const d = date.getTime();
  return d >= start.getTime() && d <= end.getTime();
}

interface CycleResult {
  ovulation: Date;
  fertileStart: Date;
  fertileEnd: Date;
  nextPeriod: Date;
  reglesEnd: Date;
}

function calculateCycle(ddr: Date, dureeCycle: number): CycleResult {
  const ovulation = addDays(ddr, dureeCycle - 14);
  const fertileStart = addDays(ovulation, -5);
  const fertileEnd = addDays(ovulation, 1);
  const nextPeriod = addDays(ddr, dureeCycle);
  const reglesEnd = addDays(ddr, 4); // 5 days of period (day 0-4)

  return { ovulation, fertileStart, fertileEnd, nextPeriod, reglesEnd };
}

export default function CalculOvulation() {
  const [ddrStr, setDdrStr] = useState("");
  const [dureeCycle, setDureeCycle] = useState(28);

  const result = useMemo(() => {
    if (!ddrStr) return null;
    const ddr = new Date(ddrStr + "T00:00:00");
    if (isNaN(ddr.getTime())) return null;

    const current = calculateCycle(ddr, dureeCycle);

    // Next 3 cycles
    const nextCycles: CycleResult[] = [];
    let nextDdr = current.nextPeriod;
    for (let i = 0; i < 3; i++) {
      const cycle = calculateCycle(nextDdr, dureeCycle);
      nextCycles.push(cycle);
      nextDdr = cycle.nextPeriod;
    }

    return { ddr, current, nextCycles };
  }, [ddrStr, dureeCycle]);

  // Build calendar days for the current cycle
  const calendarDays = useMemo(() => {
    if (!result) return null;

    const { ddr, current } = result;
    const days: {
      date: Date;
      type: "regles" | "fertile" | "ovulation" | "normal";
    }[] = [];

    for (let i = 0; i < dureeCycle; i++) {
      const date = addDays(ddr, i);
      let type: "regles" | "fertile" | "ovulation" | "normal" = "normal";

      if (isSameDay(date, current.ovulation)) {
        type = "ovulation";
      } else if (isInRange(date, current.fertileStart, current.fertileEnd)) {
        type = "fertile";
      } else if (isInRange(date, ddr, current.reglesEnd)) {
        type = "regles";
      }

      days.push({ date, type });
    }

    return days;
  }, [result, dureeCycle]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez votre date d&apos;ovulation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Date des dernieres regles */}
        <div>
          <label
            htmlFor="ddr"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date des dernieres regles
          </label>
          <input
            id="ddr"
            type="date"
            value={ddrStr}
            onChange={(e) => setDdrStr(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        {/* Duree du cycle */}
        <div>
          <label
            htmlFor="duree"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Duree du cycle (jours)
          </label>
          <input
            id="duree"
            type="number"
            inputMode="numeric"
            min="21"
            max="35"
            step="1"
            value={dureeCycle}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (v >= 21 && v <= 35) setDureeCycle(v);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          <p className="text-xs text-gray-400 mt-1">Entre 21 et 35 jours</p>
        </div>
      </div>

      {/* Resultats */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Key dates */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-500 uppercase tracking-wide font-medium mb-1">
                Date d&apos;ovulation estimee
              </p>
              <p className="text-lg font-bold text-blue-700">
                {formatDate(result.current.ovulation)}
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-xs text-green-600 uppercase tracking-wide font-medium mb-1">
                Periode fertile
              </p>
              <p className="text-lg font-bold text-green-700">
                {formatDateShort(result.current.fertileStart)} &mdash;{" "}
                {formatDateShort(result.current.fertileEnd)}
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 text-center">
              <p className="text-xs text-pink-500 uppercase tracking-wide font-medium mb-1">
                Prochaines regles
              </p>
              <p className="text-lg font-bold text-pink-700">
                {formatDate(result.current.nextPeriod)}
              </p>
            </div>
          </div>

          {/* Visual calendar */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Visualisation du cycle en cours
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {calendarDays?.map((day, i) => {
                let bgClass = "bg-gray-100 text-gray-500";
                let title = "";

                if (day.type === "regles") {
                  bgClass = "bg-red-400 text-white";
                  title = "Regles";
                } else if (day.type === "ovulation") {
                  bgClass = "bg-blue-600 text-white ring-2 ring-blue-300";
                  title = "Jour d'ovulation";
                } else if (day.type === "fertile") {
                  bgClass = "bg-green-400 text-white";
                  title = "Fenetre fertile";
                }

                return (
                  <div
                    key={i}
                    title={`J${i + 1} — ${title || "Jour normal"}`}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-medium ${bgClass} transition-colors`}
                  >
                    {day.date.getDate()}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-red-400 inline-block" />
                Regles
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-green-400 inline-block" />
                Fenetre fertile
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-600 inline-block" />
                Ovulation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gray-100 inline-block" />
                Autres jours
              </span>
            </div>
          </div>

          {/* Next 3 cycles */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Previsions des 3 prochains cycles
            </h3>
            <div className="space-y-2">
              {result.nextCycles.map((cycle, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-gray-50 rounded-xl px-4 py-3 text-sm"
                >
                  <span className="font-semibold text-gray-700 shrink-0">
                    Cycle {i + 2}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                    Ovulation :{" "}
                    <strong className="text-blue-700">
                      {formatDateShort(cycle.ovulation)}
                    </strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    Fertilite :{" "}
                    <strong className="text-green-700">
                      {formatDateShort(cycle.fertileStart)} &mdash;{" "}
                      {formatDateShort(cycle.fertileEnd)}
                    </strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" />
                    Regles :{" "}
                    <strong className="text-pink-700">
                      {formatDateShort(cycle.nextPeriod)}
                    </strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Avertissement :</strong> Ce calcul est base sur un cycle
              regulier. Il ne constitue pas une methode de contraception fiable.
              De nombreux facteurs peuvent influencer la date d&apos;ovulation.
              Consultez un professionnel de sante pour tout projet de conception
              ou de contraception.
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
            Entrez la date de vos dernieres regles pour calculer votre
            ovulation.
          </p>
        </div>
      )}
    </div>
  );
}
