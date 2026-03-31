"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

type Statut = "non-cadre" | "cadre";

const SMIC_HORAIRE_BRUT = 11.88;
const HEURES_MENSUELLES_BASE = 151.67; // pour 35h/semaine

const TAUX_COTISATIONS: Record<Statut, number> = {
  "non-cadre": 0.22,
  cadre: 0.25,
};

function formatMontant(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function SimulateurSmic() {
  const [heures, setHeures] = useState<number>(35);
  const [statut, setStatut] = useState<Statut>("non-cadre");

  const result = useMemo(() => {
    const taux = TAUX_COTISATIONS[statut];
    const heuresMensuelles = (heures / 35) * HEURES_MENSUELLES_BASE;

    const horaireBrut = SMIC_HORAIRE_BRUT;
    const horaireNet = SMIC_HORAIRE_BRUT * (1 - taux);

    const mensuelBrut = horaireBrut * heuresMensuelles;
    const mensuelNet = mensuelBrut * (1 - taux);

    const annuelBrut = mensuelBrut * 12;
    const annuelNet = mensuelNet * 12;

    const cotisationsMensuelles = mensuelBrut - mensuelNet;

    return {
      horaireBrut,
      horaireNet,
      mensuelBrut,
      mensuelNet,
      annuelBrut,
      annuelNet,
      cotisationsMensuelles,
      heuresMensuelles,
      taux,
    };
  }, [heures, statut]);

  return (
    <div className="space-y-8">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur SMIC 2026
        </h2>

        {/* Heures par semaine */}
        <div className="mb-5">
          <label
            htmlFor="heures"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre d&apos;heures par semaine
          </label>
          <input
            id="heures"
            type="text"
            inputMode="decimal"
            value={heures}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val) && val >= 10 && val <= 39) {
                setHeures(val);
              } else if (e.target.value === "") {
                setHeures(10);
              }
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 35"
          />
          <input
            type="range"
            min={10}
            max={39}
            step={1}
            value={heures}
            onChange={(e) => setHeures(Number(e.target.value))}
            className="w-full mt-3 accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>10h</span>
            <span>20h</span>
            <span>35h</span>
            <span>39h</span>
          </div>
        </div>

        {/* Statut */}
        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Statut
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setStatut("non-cadre")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                statut === "non-cadre"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Non-cadre
            </button>
            <button
              onClick={() => setStatut("cadre")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                statut === "cadre"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Cadre
            </button>
          </div>
        </div>

        {/* Resultat principal */}
        <div className="bg-blue-600 text-white rounded-xl p-5 text-center mb-6">
          <p className="text-sm font-medium opacity-90 mb-1">
            SMIC net mensuel ({heures}h/semaine, {statut})
          </p>
          <p className="text-2xl sm:text-4xl font-bold">
            {formatMontant(result.mensuelNet)}&nbsp;&euro;
            <span className="text-lg font-normal opacity-80"> / mois</span>
          </p>
          <p className="text-lg mt-1 opacity-90">
            {formatMontant(result.annuelNet)}&nbsp;&euro;
            <span className="text-sm font-normal opacity-70"> / an</span>
          </p>
        </div>

        {/* Grille de resultats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              SMIC horaire brut
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.horaireBrut)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              SMIC horaire net
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.horaireNet)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Heures mensuelles
            </p>
            <p className="text-xl font-bold text-gray-800">
              {formatMontant(result.heuresMensuelles)}h
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              SMIC mensuel brut
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.mensuelBrut)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              SMIC mensuel net
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.mensuelNet)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Cotisations mensuelles
            </p>
            <p className="text-xl font-bold text-red-600">
              &minus; {formatMontant(result.cotisationsMensuelles)}&nbsp;&euro;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              SMIC annuel brut
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.annuelBrut)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              SMIC annuel net
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.annuelNet)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Taux cotisations
            </p>
            <p className="text-xl font-bold text-gray-800">
              {(result.taux * 100).toFixed(0)}%
            </p>
          </div>
        </div>

        <ShareResult
          toolName="Simulateur SMIC 2026"
          result={`SMIC net : ${formatMontant(result.mensuelNet)} € / mois`}
          details={`${heures}h/semaine | ${statut} | Brut : ${formatMontant(result.mensuelBrut)} € | Annuel net : ${formatMontant(result.annuelNet)} €`}
          toolSlug="simulateur-smic"
        />

        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimation indicative basee sur le SMIC horaire brut 2026 (11,88&nbsp;&euro;) et les taux
          moyens de cotisations salariales. Le montant reel peut varier selon votre convention
          collective et votre situation personnelle.
        </p>
      </div>
    </div>
  );
}
