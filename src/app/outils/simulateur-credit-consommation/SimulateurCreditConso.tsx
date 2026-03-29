"use client";

import { useState, useMemo } from "react";

function parseNum(val: string): number {
  const n = parseFloat(val.replace(",", ".").replace(/\s/g, ""));
  return isNaN(n) || n < 0 ? 0 : n;
}

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function calcMensualite(
  montant: number,
  tauxAnnuel: number,
  dureeMois: number
): number {
  if (montant <= 0 || dureeMois <= 0) return 0;
  if (tauxAnnuel === 0) return montant / dureeMois;
  const tauxMensuel = tauxAnnuel / 12 / 100;
  return (
    (montant * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dureeMois))
  );
}

const DUREES_COMPARAISON = [12, 24, 36, 48, 60, 72, 84];

export default function SimulateurCreditConso() {
  const [montant, setMontant] = useState<string>("10000");
  const [taux, setTaux] = useState<string>("5.50");
  const [duree, setDuree] = useState<string>("48");

  const montantNum = useMemo(() => parseNum(montant), [montant]);
  const tauxNum = useMemo(() => parseNum(taux), [taux]);
  const dureeNum = useMemo(() => {
    const d = parseInt(duree, 10);
    return isNaN(d) || d <= 0 ? 0 : d;
  }, [duree]);

  const resultat = useMemo(() => {
    if (montantNum <= 0 || dureeNum <= 0) return null;
    const mensualite = calcMensualite(montantNum, tauxNum, dureeNum);
    const coutTotal = mensualite * dureeNum;
    const coutInterets = coutTotal - montantNum;
    const taeg = tauxNum + 0.5;
    return { mensualite, coutTotal, coutInterets, taeg };
  }, [montantNum, tauxNum, dureeNum]);

  const comparaison = useMemo(() => {
    if (montantNum <= 0) return [];
    return DUREES_COMPARAISON.map((d) => {
      const mens = calcMensualite(montantNum, tauxNum, d);
      const total = mens * d;
      const interets = total - montantNum;
      return { duree: d, mensualite: mens, coutTotal: total, interets };
    });
  }, [montantNum, tauxNum]);

  return (
    <div className="space-y-8">
      {/* ---------- Formulaire ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Param&egrave;tres du cr&eacute;dit
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Montant emprunt&eacute; (&euro;)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={montant}
              onChange={(e) => setMontant(e.target.value.replace(/[^0-9.,]/g, ""))}
              placeholder="10 000"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <p className="text-xs text-gray-500 mt-1">De 1&nbsp;000 &agrave; 75&nbsp;000&nbsp;&euro;</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Taux annuel (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={taux}
              onChange={(e) => setTaux(e.target.value.replace(/[^0-9.,]/g, ""))}
              placeholder="5.50"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dur&eacute;e (mois)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={duree}
              onChange={(e) => setDuree(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="48"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <p className="text-xs text-gray-500 mt-1">De 12 &agrave; 84 mois</p>
          </div>
        </div>
      </div>

      {/* ---------- R&eacute;sultats ---------- */}
      {resultat && (
        <>
          {/* Summary */}
          <div className="bg-blue-600 text-white rounded-xl p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Mensualit&eacute;
                </p>
                <p className="text-2xl font-bold">
                  {formatEuro(resultat.mensualite)}&nbsp;&euro;
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Co&ucirc;t des int&eacute;r&ecirc;ts
                </p>
                <p className="text-2xl font-bold">
                  {formatEuro(resultat.coutInterets)}&nbsp;&euro;
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Co&ucirc;t total
                </p>
                <p className="text-2xl font-bold">
                  {formatEuro(resultat.coutTotal)}&nbsp;&euro;
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  TAEG indicatif
                </p>
                <p className="text-2xl font-bold">
                  {resultat.taeg.toLocaleString("fr-FR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}&nbsp;%
                </p>
              </div>
            </div>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Montant emprunt&eacute;
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatEuro(montantNum)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Dur&eacute;e
              </p>
              <p className="text-xl font-bold text-gray-900">
                {dureeNum} mois ({Math.floor(dureeNum / 12)} an{Math.floor(dureeNum / 12) > 1 ? "s" : ""}{dureeNum % 12 > 0 ? ` ${dureeNum % 12} mois` : ""})
              </p>
            </div>
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Comparaison selon la dur&eacute;e
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-600">
                    <th className="py-2 pr-4 text-left">Dur&eacute;e</th>
                    <th className="py-2 pr-4 text-right">Mensualit&eacute;</th>
                    <th className="py-2 pr-4 text-right">Int&eacute;r&ecirc;ts</th>
                    <th className="py-2 text-right">Co&ucirc;t total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {comparaison.map((row) => (
                    <tr
                      key={row.duree}
                      className={`border-b border-gray-100 ${
                        row.duree === dureeNum ? "bg-blue-50 font-semibold" : ""
                      }`}
                    >
                      <td className="py-2 pr-4">
                        {row.duree} mois ({Math.floor(row.duree / 12)} an{Math.floor(row.duree / 12) > 1 ? "s" : ""})
                      </td>
                      <td className="py-2 pr-4 text-right">
                        {formatEuro(row.mensualite)}&nbsp;&euro;
                      </td>
                      <td className="py-2 pr-4 text-right">
                        {formatEuro(row.interets)}&nbsp;&euro;
                      </td>
                      <td className="py-2 text-right">
                        {formatEuro(row.coutTotal)}&nbsp;&euro;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
