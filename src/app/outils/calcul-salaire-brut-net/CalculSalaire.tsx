"use client";

import { useState, useMemo } from "react";

type Direction = "brut-to-net" | "net-to-brut";
type Statut = "non-cadre" | "cadre";
type Periode = "mensuel" | "annuel";

const CHARGES = {
  "non-cadre": {
    total: 0.22,
    csgCrds: 0.097,
    retraite: 0.11,
    chomage: 0.0,
    complementaireSante: 0.015,
    autres: 0.0, // calculé dynamiquement
  },
  cadre: {
    total: 0.25,
    csgCrds: 0.097,
    retraite: 0.113,
    chomage: 0.0,
    complementaireSante: 0.015,
    autres: 0.0,
  },
};

function formatMontant(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculSalaire() {
  const [montant, setMontant] = useState<string>("3000");
  const [direction, setDirection] = useState<Direction>("brut-to-net");
  const [statut, setStatut] = useState<Statut>("non-cadre");
  const [periode, setPeriode] = useState<Periode>("mensuel");

  const result = useMemo(() => {
    const val = parseFloat(montant) || 0;
    const charges = CHARGES[statut];
    const tauxTotal = charges.total;

    let brutMensuel: number;
    let netMensuel: number;

    if (direction === "brut-to-net") {
      const base = periode === "annuel" ? val / 12 : val;
      brutMensuel = base;
      netMensuel = base * (1 - tauxTotal);
    } else {
      const base = periode === "annuel" ? val / 12 : val;
      netMensuel = base;
      brutMensuel = base / (1 - tauxTotal);
    }

    const brutAnnuel = brutMensuel * 12;
    const netAnnuel = netMensuel * 12;
    const totalChargesMensuel = brutMensuel - netMensuel;

    // Detail des charges (basees sur le brut mensuel)
    const detailCharges = {
      csgCrds: brutMensuel * charges.csgCrds,
      retraite: brutMensuel * charges.retraite,
      chomage: brutMensuel * charges.chomage,
      complementaireSante: brutMensuel * charges.complementaireSante,
      autres:
        totalChargesMensuel -
        brutMensuel *
          (charges.csgCrds +
            charges.retraite +
            charges.chomage +
            charges.complementaireSante),
    };

    return {
      brutMensuel,
      netMensuel,
      brutAnnuel,
      netAnnuel,
      totalChargesMensuel,
      detailCharges,
      tauxTotal,
    };
  }, [montant, direction, statut, periode]);

  const convertedLabel =
    direction === "brut-to-net" ? "Salaire net" : "Salaire brut";
  const convertedMensuel =
    direction === "brut-to-net" ? result.netMensuel : result.brutMensuel;
  const convertedAnnuel =
    direction === "brut-to-net" ? result.netAnnuel : result.brutAnnuel;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Convertisseur salaire brut / net
        </h2>

        {/* Montant */}
        <div className="mb-5">
          <label
            htmlFor="montant"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Montant en euros
          </label>
          <input
            id="montant"
            type="text"
            inputMode="decimal"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 3000"
          />
        </div>

        {/* Direction */}
        <div className="mb-5">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Sens de conversion
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setDirection("brut-to-net")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                direction === "brut-to-net"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Brut &rarr; Net
            </button>
            <button
              onClick={() => setDirection("net-to-brut")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                direction === "net-to-brut"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Net &rarr; Brut
            </button>
          </div>
        </div>

        {/* Statut */}
        <div className="mb-5">
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

        {/* Periode */}
        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Periode
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPeriode("mensuel")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                periode === "mensuel"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setPeriode("annuel")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                periode === "annuel"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Annuel
            </button>
          </div>
        </div>

        {/* Resultat principal */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mb-6">
          <p className="text-sm text-blue-600 font-medium mb-1">
            {convertedLabel} {periode === "annuel" ? "annuel" : "mensuel"}
          </p>
          <p className="text-2xl sm:text-4xl font-bold text-blue-700">
            {formatMontant(convertedMensuel)}&nbsp;&euro;
            <span className="text-lg font-normal text-blue-500">
              {" "}
              / mois
            </span>
          </p>
          <p className="text-lg text-blue-600 mt-1">
            {formatMontant(convertedAnnuel)}&nbsp;&euro;
            <span className="text-sm font-normal text-blue-400"> / an</span>
          </p>
        </div>

        {/* Tableau recapitulatif */}
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Recapitulatif mensuel / annuel
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Salaire brut</span>
              <span className="font-medium text-gray-800">
                {formatMontant(result.brutMensuel)} &euro; /{" "}
                {formatMontant(result.brutAnnuel)} &euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1 text-red-600">
              <span>Total cotisations salariales</span>
              <span className="font-medium">
                &minus; {formatMontant(result.totalChargesMensuel)} &euro; /{" "}
                {formatMontant(result.totalChargesMensuel * 12)} &euro;
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-wrap justify-between gap-1 font-semibold text-green-700">
              <span>Salaire net</span>
              <span>
                {formatMontant(result.netMensuel)} &euro; /{" "}
                {formatMontant(result.netAnnuel)} &euro;
              </span>
            </div>
          </div>
        </div>

        {/* Detail des charges */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Detail approximatif des cotisations (mensuel)
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">
                CSG-CRDS{" "}
                <span className="text-gray-400 text-xs">(~9,7%)</span>
              </span>
              <span className="text-gray-800">
                {formatMontant(result.detailCharges.csgCrds)} &euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">
                Retraite (base + complementaire){" "}
                <span className="text-gray-400 text-xs">
                  (~{statut === "cadre" ? "11,3" : "11"}%)
                </span>
              </span>
              <span className="text-gray-800">
                {formatMontant(result.detailCharges.retraite)} &euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">
                Assurance chomage{" "}
                <span className="text-gray-400 text-xs">(0%)</span>
              </span>
              <span className="text-gray-800">
                {formatMontant(result.detailCharges.chomage)} &euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">
                Complementaire sante{" "}
                <span className="text-gray-400 text-xs">(~1,5%)</span>
              </span>
              <span className="text-gray-800">
                {formatMontant(result.detailCharges.complementaireSante)} &euro;
              </span>
            </div>
            {result.detailCharges.autres > 0.01 && (
              <div className="flex flex-wrap justify-between gap-1">
                <span className="text-gray-600">
                  Autres cotisations{" "}
                  <span className="text-gray-400 text-xs">(divers)</span>
                </span>
                <span className="text-gray-800">
                  {formatMontant(result.detailCharges.autres)} &euro;
                </span>
              </div>
            )}
            <hr className="border-gray-200" />
            <div className="flex flex-wrap justify-between gap-1 font-semibold text-gray-800">
              <span>
                Total (~{(result.tauxTotal * 100).toFixed(0)}% du brut)
              </span>
              <span>
                {formatMontant(result.totalChargesMensuel)} &euro;
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimation indicative basee sur les taux moyens de cotisations
          salariales 2026. Le montant reel peut varier selon votre convention
          collective et votre situation personnelle.
        </p>
      </div>
    </div>
  );
}
