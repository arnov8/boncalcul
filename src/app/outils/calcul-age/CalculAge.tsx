"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

interface AgeResult {
  annees: number;
  mois: number;
  jours: number;
  totalJours: number;
  totalSemaines: number;
  totalHeures: number;
  jourNaissance: string;
  prochainAnniversaire: Date;
  joursRestants: number;
  signe: string;
  signEmoji: string;
}

const JOURS_SEMAINE = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const SIGNES = [
  { nom: "Capricorne", emoji: "\u2651", debut: [1, 1], fin: [1, 19] },
  { nom: "Verseau", emoji: "\u2652", debut: [1, 20], fin: [2, 18] },
  { nom: "Poissons", emoji: "\u2653", debut: [2, 19], fin: [3, 20] },
  { nom: "Belier", emoji: "\u2648", debut: [3, 21], fin: [4, 19] },
  { nom: "Taureau", emoji: "\u2649", debut: [4, 20], fin: [5, 20] },
  { nom: "Gemeaux", emoji: "\u264A", debut: [5, 21], fin: [6, 20] },
  { nom: "Cancer", emoji: "\u264B", debut: [6, 21], fin: [7, 22] },
  { nom: "Lion", emoji: "\u264C", debut: [7, 23], fin: [8, 22] },
  { nom: "Vierge", emoji: "\u264D", debut: [8, 23], fin: [9, 22] },
  { nom: "Balance", emoji: "\u264E", debut: [9, 23], fin: [10, 22] },
  { nom: "Scorpion", emoji: "\u264F", debut: [10, 23], fin: [11, 21] },
  { nom: "Sagittaire", emoji: "\u2650", debut: [11, 22], fin: [12, 21] },
  { nom: "Capricorne", emoji: "\u2651", debut: [12, 22], fin: [12, 31] },
];

function getSigneAstrologique(
  mois: number,
  jour: number
): { nom: string; emoji: string } {
  for (const s of SIGNES) {
    const apresDebut =
      mois > s.debut[0] || (mois === s.debut[0] && jour >= s.debut[1]);
    const avantFin =
      mois < s.fin[0] || (mois === s.fin[0] && jour <= s.fin[1]);
    if (apresDebut && avantFin) {
      return { nom: s.nom, emoji: s.emoji };
    }
  }
  return { nom: "Capricorne", emoji: "\u2651" };
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function calculerAge(naissance: Date, reference: Date): AgeResult {
  const jourSemaine = JOURS_SEMAINE[naissance.getDay()];
  const signe = getSigneAstrologique(
    naissance.getMonth() + 1,
    naissance.getDate()
  );

  // Calcul age en annees / mois / jours
  let annees = reference.getFullYear() - naissance.getFullYear();
  let mois = reference.getMonth() - naissance.getMonth();
  let jours = reference.getDate() - naissance.getDate();

  if (jours < 0) {
    mois -= 1;
    const moisPrec = new Date(
      reference.getFullYear(),
      reference.getMonth(),
      0
    );
    jours += moisPrec.getDate();
  }

  if (mois < 0) {
    annees -= 1;
    mois += 12;
  }

  // Total jours
  const diffMs = reference.getTime() - naissance.getTime();
  const totalJours = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalSemaines = Math.floor(totalJours / 7);
  const totalHeures = totalJours * 24;

  // Prochain anniversaire
  let prochainAnnee = reference.getFullYear();
  let prochainAnniv = new Date(
    prochainAnnee,
    naissance.getMonth(),
    naissance.getDate()
  );

  if (prochainAnniv <= reference) {
    prochainAnnee += 1;
    prochainAnniv = new Date(
      prochainAnnee,
      naissance.getMonth(),
      naissance.getDate()
    );
  }

  const diffAnnivMs = prochainAnniv.getTime() - reference.getTime();
  const joursRestants = Math.ceil(diffAnnivMs / (1000 * 60 * 60 * 24));

  return {
    annees,
    mois,
    jours,
    totalJours,
    totalSemaines,
    totalHeures,
    jourNaissance: jourSemaine,
    prochainAnniversaire: prochainAnniv,
    joursRestants,
    signe: signe.nom,
    signEmoji: signe.emoji,
  };
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function toInputValue(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatNombre(n: number): string {
  return n.toLocaleString("fr-FR");
}

export default function CalculAge() {
  const [dateNaissance, setDateNaissance] = useState("");
  const [dateReference, setDateReference] = useState(toInputValue(new Date()));

  const result = useMemo(() => {
    if (!dateNaissance || !dateReference) return null;

    const naissance = new Date(dateNaissance + "T00:00:00");
    const reference = new Date(dateReference + "T00:00:00");

    if (isNaN(naissance.getTime()) || isNaN(reference.getTime())) return null;
    if (naissance >= reference) return null;

    return calculerAge(naissance, reference);
  }, [dateNaissance, dateReference]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calculez votre age exact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Date de naissance */}
        <div>
          <label
            htmlFor="dateNaissance"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date de naissance
          </label>
          <input
            id="dateNaissance"
            type="date"
            value={dateNaissance}
            onChange={(e) => setDateNaissance(e.target.value)}
            max={dateReference}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        {/* Date de reference */}
        <div>
          <label
            htmlFor="dateReference"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date de reference
          </label>
          <input
            id="dateReference"
            type="date"
            value={dateReference}
            onChange={(e) => setDateReference(e.target.value)}
            min={dateNaissance}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
      </div>

      {/* Resultats */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Age principal */}
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Votre age exact
            </p>
            <p className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-1">
              {result.annees}{" "}
              <span className="text-2xl md:text-3xl font-bold text-gray-500">
                ans
              </span>
            </p>
            <p className="text-lg text-gray-600">
              {result.mois} mois et {result.jours} jour
              {result.jours > 1 ? "s" : ""}
            </p>
          </div>

          {/* Grille de statistiques */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-500 font-medium mb-1">
                Total jours
              </p>
              <p className="text-xl font-bold text-blue-800">
                {formatNombre(result.totalJours)}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-500 font-medium mb-1">
                Total semaines
              </p>
              <p className="text-xl font-bold text-blue-800">
                {formatNombre(result.totalSemaines)}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-500 font-medium mb-1">
                Total heures
              </p>
              <p className="text-xl font-bold text-blue-800">
                {formatNombre(result.totalHeures)}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-500 font-medium mb-1">
                Total mois
              </p>
              <p className="text-xl font-bold text-blue-800">
                {formatNombre(result.annees * 12 + result.mois)}
              </p>
            </div>
          </div>

          {/* Jour de naissance + signe astrologique */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 font-medium mb-1">
                Jour de naissance
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {result.jourNaissance}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 font-medium mb-1">
                Signe astrologique
              </p>
              <p className="text-2xl font-bold text-gray-800">
                <span className="mr-2">{result.signEmoji}</span>
                {result.signe}
              </p>
            </div>
          </div>

          {/* Prochain anniversaire */}
          <div className="bg-amber-50 rounded-xl p-4 text-center">
            <p className="text-sm text-amber-600 font-medium mb-1">
              Prochain anniversaire
            </p>
            <p className="text-xl font-bold text-amber-800 capitalize">
              {formatDate(result.prochainAnniversaire)}
            </p>
            <p className="text-sm text-amber-600 mt-1">
              dans{" "}
              <strong>
                {result.joursRestants} jour{result.joursRestants > 1 ? "s" : ""}
              </strong>{" "}
              &mdash; vous aurez{" "}
              <strong>{result.annees + 1} ans</strong>
            </p>
          </div>
        </div>
      )}

      {result && (
        <ShareResult
          toolName="Calcul d'age"
          result={`${result.annees} ans, ${result.mois} mois et ${result.jours} jour${result.jours > 1 ? "s" : ""}`}
          details={`${formatNombre(result.totalJours)} jours | Ne un ${result.jourNaissance} | ${result.signEmoji} ${result.signe} | Prochain anniversaire dans ${result.joursRestants} jour${result.joursRestants > 1 ? "s" : ""}`}
          toolSlug="calcul-age"
        />
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
            Entrez votre date de naissance pour calculer votre age exact.
          </p>
        </div>
      )}
    </div>
  );
}
