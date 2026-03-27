"use client";

import { useState, useMemo } from "react";

type Situation = "celibataire" | "marie" | "veuf";

const TRANCHES = [
  { min: 0, max: 11294, taux: 0 },
  { min: 11295, max: 28797, taux: 0.11 },
  { min: 28798, max: 82341, taux: 0.30 },
  { min: 82342, max: 177106, taux: 0.41 },
  { min: 177107, max: Infinity, taux: 0.45 },
];

const TRANCHES_LABELS = [
  "0 - 11 294 €",
  "11 295 - 28 797 €",
  "28 798 - 82 341 €",
  "82 342 - 177 106 €",
  "Plus de 177 106 €",
];

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function calculerParts(situation: Situation, enfants: number): number {
  let parts = situation === "marie" ? 2 : 1;
  if (enfants >= 1) parts += 0.5;
  if (enfants >= 2) parts += 0.5;
  if (enfants >= 3) parts += enfants - 2; // 1 part per child from 3rd
  return parts;
}

function calculerImpotParTranche(quotient: number) {
  const details: { tranche: string; taux: number; base: number; impot: number }[] = [];
  let impotTotal = 0;
  let tmi = 0;

  for (let i = 0; i < TRANCHES.length; i++) {
    const { min, max, taux } = TRANCHES[i];
    if (quotient < min) {
      details.push({
        tranche: TRANCHES_LABELS[i],
        taux: taux * 100,
        base: 0,
        impot: 0,
      });
      continue;
    }

    const plafond = Math.min(quotient, max);
    const base = plafond - min + (i === 0 ? 0 : 1);
    const impotTranche = base * taux;

    if (base > 0 && taux > 0) {
      tmi = taux * 100;
    }

    details.push({
      tranche: TRANCHES_LABELS[i],
      taux: taux * 100,
      base: Math.max(0, base),
      impot: Math.max(0, impotTranche),
    });

    impotTotal += Math.max(0, impotTranche);
  }

  return { details, impotTotal, tmi };
}

export default function SimulateurImpot() {
  const [revenu, setRevenu] = useState<string>("35000");
  const [situation, setSituation] = useState<Situation>("celibataire");
  const [enfants, setEnfants] = useState<number>(0);

  const revenuNum = parseFloat(revenu.replace(/\s/g, "").replace(",", ".")) || 0;

  const parts = useMemo(() => calculerParts(situation, enfants), [situation, enfants]);

  const result = useMemo(() => {
    const quotient = revenuNum / parts;
    const { details, impotTotal: impotParPart, tmi } = calculerImpotParTranche(quotient);
    const impotTotal = Math.round(impotParPart * parts * 100) / 100;
    const tauxMoyen = revenuNum > 0 ? (impotTotal / revenuNum) * 100 : 0;
    const revenuNetAnnuel = revenuNum - impotTotal;
    const revenuNetMensuel = revenuNetAnnuel / 12;

    return {
      quotient,
      parts,
      details,
      impotTotal,
      tmi,
      tauxMoyen,
      revenuNetAnnuel,
      revenuNetMensuel,
    };
  }, [revenuNum, parts]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur d&apos;impot sur le revenu
        </h2>

        {/* Revenu net imposable */}
        <div className="mb-5">
          <label
            htmlFor="revenu"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Revenu net imposable annuel
          </label>
          <div className="relative">
            <input
              id="revenu"
              type="text"
              inputMode="decimal"
              value={revenu}
              onChange={(e) => setRevenu(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-10"
              placeholder="Ex : 35000"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Montant figurant sur votre avis d&apos;imposition ou fiche de paie
            (revenu apres abattement de 10 %).
          </p>
        </div>

        {/* Situation familiale */}
        <div className="mb-5">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Situation familiale
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {([
              { value: "celibataire" as Situation, label: "Celibataire" },
              { value: "marie" as Situation, label: "Marie / Pacse" },
              { value: "veuf" as Situation, label: "Veuf(ve)" },
            ]).map((s) => (
              <button
                key={s.value}
                onClick={() => setSituation(s.value)}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  situation === s.value
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Nombre d'enfants */}
        <div className="mb-5">
          <label
            htmlFor="enfants"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre d&apos;enfants a charge
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setEnfants(Math.max(0, enfants - 1))}
              className="w-12 h-12 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-xl font-bold transition"
              aria-label="Retirer un enfant"
            >
              -
            </button>
            <span className="text-2xl font-bold text-gray-900 w-12 text-center">
              {enfants}
            </span>
            <button
              onClick={() => setEnfants(enfants + 1)}
              className="w-12 h-12 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-xl font-bold transition"
              aria-label="Ajouter un enfant"
            >
              +
            </button>
          </div>
        </div>

        {/* Parts fiscales */}
        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Nombre de parts fiscales :</span>{" "}
            <span className="text-lg font-bold">{parts}</span>
            <span className="text-blue-600 ml-2">
              (quotient familial : {formatEuro(result.quotient)} &euro;)
            </span>
          </p>
        </div>
      </div>

      {/* --------------- Resultats --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Resultat de la simulation
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Impot sur le revenu
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {formatEuro(result.impotTotal)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Revenu net mensuel apres impot
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {formatEuro(result.revenuNetMensuel)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              Taux marginal (TMI)
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {formatPercent(result.tmi)}&nbsp;%
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              Taux moyen d&apos;imposition
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {formatPercent(result.tauxMoyen)}&nbsp;%
            </p>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-blue-600 text-white rounded-xl p-5">
          <p className="text-sm opacity-90 mb-1">
            Revenu net imposable : {formatEuro(revenuNum)} &euro; / an
            &mdash; {parts} part{parts > 1 ? "s" : ""} fiscale{parts > 1 ? "s" : ""}
          </p>
          <p className="text-2xl font-bold">
            Impot : {formatEuro(result.impotTotal)} &euro; / an soit{" "}
            {formatEuro(result.impotTotal / 12)} &euro; / mois
          </p>
        </div>
      </div>

      {/* --------------- Detail par tranche --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Detail du calcul par tranche
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Calcul effectue sur le quotient familial ({formatEuro(result.quotient)} &euro;),
          puis multiplie par {parts} part{parts > 1 ? "s" : ""}.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-600 whitespace-nowrap">
                  Tranche
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600 whitespace-nowrap">
                  Taux
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600 whitespace-nowrap">
                  Assiette
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600 whitespace-nowrap">
                  Impot
                </th>
              </tr>
            </thead>
            <tbody>
              {result.details.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 transition ${
                    row.base > 0 && row.taux > 0
                      ? "bg-blue-50/50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-2 font-medium text-gray-800 whitespace-nowrap">
                    {row.tranche}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700 whitespace-nowrap">
                    {row.taux} %
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700 whitespace-nowrap">
                    {formatEuro(row.base)}&nbsp;&euro;
                  </td>
                  <td className="py-3 px-2 text-right text-blue-600 font-semibold whitespace-nowrap">
                    {formatEuro(row.impot)}&nbsp;&euro;
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-300">
                <td
                  colSpan={3}
                  className="py-3 px-2 font-bold text-gray-800 text-right whitespace-nowrap"
                >
                  Impot par part :
                </td>
                <td className="py-3 px-2 text-right font-bold text-blue-700 whitespace-nowrap">
                  {formatEuro(
                    result.details.reduce((sum, r) => sum + r.impot, 0)
                  )}
                  &nbsp;&euro;
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="py-3 px-2 font-bold text-gray-800 text-right whitespace-nowrap"
                >
                  x {parts} part{parts > 1 ? "s" : ""} = Impot total :
                </td>
                <td className="py-3 px-2 text-right font-bold text-blue-700 text-lg whitespace-nowrap">
                  {formatEuro(result.impotTotal)}&nbsp;&euro;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
