"use client";

import { useState, useMemo } from "react";

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatNumber(n: number): string {
  return n.toLocaleString("fr-FR");
}

function countWeekendDays(start: Date, end: Date): number {
  let count = 0;
  const current = new Date(start);
  while (current <= end) {
    const day = current.getDay();
    if (day === 0 || day === 6) count++;
    current.setDate(current.getDate() + 1);
  }
  return count;
}

function countBusinessDays(start: Date, end: Date): number {
  let count = 0;
  const current = new Date(start);
  while (current <= end) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) count++;
    current.setDate(current.getDate() + 1);
  }
  return count;
}

function diffYearsMonthsDays(start: Date, end: Date) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export default function CalculDureeEntreDates() {
  const today = new Date();
  const defaultStart = new Date(today);
  defaultStart.setMonth(defaultStart.getMonth() - 1);

  const [dateDebut, setDateDebut] = useState<string>(toDateString(defaultStart));
  const [dateFin, setDateFin] = useState<string>(toDateString(today));

  const resultats = useMemo(() => {
    const start = new Date(dateDebut + "T00:00:00");
    const end = new Date(dateFin + "T00:00:00");

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return null;
    }

    const earlier = start <= end ? start : end;
    const later = start <= end ? end : start;

    const diffMs = later.getTime() - earlier.getTime();
    const totalJours = Math.round(diffMs / (1000 * 60 * 60 * 24));

    const semainesCompletes = Math.floor(totalJours / 7);
    const joursRestantsSemaines = totalJours % 7;

    const ymd = diffYearsMonthsDays(earlier, later);

    const totalMois = ymd.years * 12 + ymd.months;
    const joursRestantsMois = ymd.days;

    // For business days, exclude start date (count from day after start to end)
    const nextDay = new Date(earlier);
    nextDay.setDate(nextDay.getDate() + 1);
    const joursOuvres = totalJours === 0 ? 0 : countBusinessDays(nextDay, later);

    // Count full weekends (Saturday + Sunday pairs)
    const weekendDays = totalJours === 0 ? 0 : countWeekendDays(nextDay, later);
    const nbWeekends = Math.floor(weekendDays / 2);
    const weekendDaysRestants = weekendDays % 2;

    return {
      totalJours,
      semainesCompletes,
      joursRestantsSemaines,
      annees: ymd.years,
      mois: ymd.months,
      joursRestantsYMD: ymd.days,
      totalMois,
      joursRestantsMois,
      joursOuvres,
      nbWeekends,
      weekendDaysRestants,
      weekendDays,
    };
  }, [dateDebut, dateFin]);

  const handleSwap = () => {
    setDateDebut(dateFin);
    setDateFin(dateDebut);
  };

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculateur de duree entre deux dates
        </h2>

        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-2">
            Selectionnez une date de debut et une date de fin pour calculer la
            duree.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="duree-debut"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date de debut
              </label>
              <input
                id="duree-debut"
                type="date"
                value={dateDebut}
                onChange={(e) => setDateDebut(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="duree-fin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date de fin
              </label>
              <input
                id="duree-fin"
                type="date"
                value={dateFin}
                onChange={(e) => setDateFin(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>

          {/* Swap button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwap}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition"
              aria-label="Inverser les dates"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              Inverser les dates
            </button>
          </div>
        </div>
      </div>

      {/* --------------- Resultats --------------- */}
      {resultats && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

          {/* Resultat principal */}
          <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
            <p className="text-sm opacity-90 mb-1">Duree totale</p>
            <p className="text-2xl font-bold">
              {formatNumber(resultats.totalJours)} jour{resultats.totalJours > 1 ? "s" : ""}
            </p>
          </div>

          {/* Decompositions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Annees, mois, jours */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Annees, mois et jours
              </p>
              <p className="text-xl font-bold text-gray-900">
                {resultats.annees > 0 && (
                  <>{resultats.annees} an{resultats.annees > 1 ? "s" : ""}, </>
                )}
                {(resultats.annees > 0 || resultats.mois > 0) && (
                  <>{resultats.mois} mois, </>
                )}
                {resultats.joursRestantsYMD} jour{resultats.joursRestantsYMD > 1 ? "s" : ""}
              </p>
            </div>

            {/* Semaines + jours */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Semaines et jours
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatNumber(resultats.semainesCompletes)} semaine{resultats.semainesCompletes > 1 ? "s" : ""}
                {resultats.joursRestantsSemaines > 0 && (
                  <> et {resultats.joursRestantsSemaines} jour{resultats.joursRestantsSemaines > 1 ? "s" : ""}</>
                )}
              </p>
            </div>

            {/* Mois + jours */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Mois et jours
              </p>
              <p className="text-xl font-bold text-gray-900">
                {resultats.totalMois} mois
                {resultats.joursRestantsMois > 0 && (
                  <> et {resultats.joursRestantsMois} jour{resultats.joursRestantsMois > 1 ? "s" : ""}</>
                )}
              </p>
            </div>

            {/* Total heures */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Heures
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatNumber(resultats.totalJours * 24)} heures
              </p>
            </div>
          </div>

          {/* Jours ouvres et week-ends */}
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Jours ouvres et week-ends
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-2">
                Jours ouvres (lun-ven)
              </p>
              <p className="text-2xl font-bold text-blue-700">
                {formatNumber(resultats.joursOuvres)} jour{resultats.joursOuvres > 1 ? "s" : ""}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Jours de week-end
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatNumber(resultats.weekendDays)} jour{resultats.weekendDays > 1 ? "s" : ""}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({resultats.nbWeekends} week-end{resultats.nbWeekends > 1 ? "s" : ""} complet{resultats.nbWeekends > 1 ? "s" : ""})
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --------------- Exemples rapides --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Durees courantes de reference
        </h3>

        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-600">
                  Periode
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Jours calendaires
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Jours ouvres (~)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { periode: "1 semaine", calendaires: "7", ouvres: "5" },
                { periode: "2 semaines", calendaires: "14", ouvres: "10" },
                { periode: "1 mois", calendaires: "30-31", ouvres: "21-23" },
                { periode: "1 trimestre", calendaires: "90-92", ouvres: "63-66" },
                { periode: "6 mois", calendaires: "181-184", ouvres: "130-131" },
                { periode: "1 an", calendaires: "365-366", ouvres: "251-262" },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-2 font-medium text-gray-800">
                    {row.periode}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700">
                    {row.calendaires}
                  </td>
                  <td className="py-3 px-2 text-right text-blue-600 font-semibold">
                    {row.ouvres}
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
