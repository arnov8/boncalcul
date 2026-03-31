"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

type ModeGarde = "classique" | "alternee" | "reduite";

const BAREME: Record<ModeGarde, Record<number, number>> = {
  classique: { 1: 13.5, 2: 11.5, 3: 10, 4: 8.8, 5: 8, 6: 7.2 },
  alternee: { 1: 9, 2: 7.8, 3: 6.7, 4: 5.9, 5: 5.3, 6: 4.8 },
  reduite: { 1: 18, 2: 15.5, 3: 13.3, 4: 11.7, 5: 10.6, 6: 9.6 },
};

const MINIMUM_VITAL = 636;

function formatMontant(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculPension() {
  const [revenu, setRevenu] = useState<string>("2500");
  const [nbEnfants, setNbEnfants] = useState<number>(2);
  const [mode, setMode] = useState<ModeGarde>("classique");

  const result = useMemo(() => {
    const revenuNet = parseFloat(revenu) || 0;
    const base = Math.max(revenuNet - MINIMUM_VITAL, 0);
    const taux = BAREME[mode][nbEnfants] / 100;
    const pensionParEnfant = base * taux;
    const pensionTotaleMensuelle = pensionParEnfant * nbEnfants;
    const pensionAnnuelle = pensionTotaleMensuelle * 12;

    return {
      base,
      taux,
      pensionParEnfant,
      pensionTotaleMensuelle,
      pensionAnnuelle,
    };
  }, [revenu, nbEnfants, mode]);

  const modeLabels: Record<ModeGarde, string> = {
    classique: "Droit de visite classique",
    alternee: "Garde altern\u00e9e",
    reduite: "Garde r\u00e9duite",
  };

  return (
    <div className="space-y-8">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculer la pension alimentaire
        </h2>

        {/* Revenu */}
        <div className="mb-5">
          <label
            htmlFor="revenu"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Revenu net mensuel du parent d&eacute;biteur (&euro;)
          </label>
          <input
            id="revenu"
            type="text"
            inputMode="decimal"
            value={revenu}
            onChange={(e) => setRevenu(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 2500"
          />
        </div>

        {/* Nombre d'enfants */}
        <div className="mb-5">
          <label
            htmlFor="nbEnfants"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre d&apos;enfants
          </label>
          <select
            id="nbEnfants"
            value={nbEnfants}
            onChange={(e) => setNbEnfants(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} enfant{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Mode de garde */}
        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Mode de garde
          </span>
          <div className="flex gap-2">
            {(["classique", "alternee", "reduite"] as ModeGarde[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                  mode === m
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {modeLabels[m]}
              </button>
            ))}
          </div>
        </div>

        {/* Resultat principal */}
        <div className="bg-blue-600 text-white rounded-xl p-5 text-center mb-6">
          <p className="text-sm font-medium opacity-90 mb-1">
            Pension totale mensuelle
          </p>
          <p className="text-3xl sm:text-4xl font-bold">
            {formatMontant(result.pensionTotaleMensuelle)}&nbsp;&euro;
            <span className="text-lg font-normal opacity-80"> / mois</span>
          </p>
        </div>

        {/* Detail */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              Pension par enfant
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.pensionParEnfant)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Pension totale mensuelle
            </p>
            <p className="text-xl font-bold text-gray-800">
              {formatMontant(result.pensionTotaleMensuelle)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Pension annuelle
            </p>
            <p className="text-xl font-bold text-gray-800">
              {formatMontant(result.pensionAnnuelle)}&nbsp;&euro;
            </p>
          </div>
        </div>

        {/* Recap */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            D&eacute;tail du calcul
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Revenu net mensuel</span>
              <span className="font-medium text-gray-800">
                {formatMontant(parseFloat(revenu) || 0)}&nbsp;&euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1 text-red-600">
              <span>Minimum vital d&eacute;duit (RSA 2026)</span>
              <span className="font-medium">
                &minus; {formatMontant(MINIMUM_VITAL)}&nbsp;&euro;
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Base de calcul</span>
              <span className="font-medium text-gray-800">
                {formatMontant(result.base)}&nbsp;&euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">
                Taux appliqu&eacute; ({modeLabels[mode].toLowerCase()}, {nbEnfants} enfant{nbEnfants > 1 ? "s" : ""})
              </span>
              <span className="font-medium text-gray-800">
                {(result.taux * 100).toFixed(1)}&nbsp;%
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Pension par enfant</span>
              <span className="font-medium text-gray-800">
                {formatMontant(result.pensionParEnfant)}&nbsp;&euro;
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-wrap justify-between gap-1 font-semibold text-green-700">
              <span>Total mensuel ({nbEnfants} enfant{nbEnfants > 1 ? "s" : ""})</span>
              <span>{formatMontant(result.pensionTotaleMensuelle)}&nbsp;&euro;</span>
            </div>
          </div>
        </div>

        <ShareResult
          toolName="Pension alimentaire"
          result={`${formatMontant(result.pensionTotaleMensuelle)} € / mois`}
          details={`${nbEnfants} enfant${nbEnfants > 1 ? "s" : ""} | ${formatMontant(result.pensionParEnfant)} € par enfant | ${modeLabels[mode]} | ${formatMontant(result.pensionAnnuelle)} € / an`}
          toolSlug="calcul-pension-alimentaire"
        />

        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimation indicative bas&eacute;e sur le bar&egrave;me du minist&egrave;re de la Justice (table de r&eacute;f&eacute;rence 2026).
          Le montant d&eacute;finitif est fix&eacute; par le juge aux affaires familiales en fonction de l&apos;ensemble de la situation.
        </p>
      </div>
    </div>
  );
}
