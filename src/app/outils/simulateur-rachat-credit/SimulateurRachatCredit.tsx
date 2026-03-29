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

export default function SimulateurRachatCredit() {
  // Ancien cr&eacute;dit
  const [mensualiteActuelle, setMensualiteActuelle] = useState<string>("850");
  const [capitalRestant, setCapitalRestant] = useState<string>("120000");
  const [dureeRestante, setDureeRestante] = useState<string>("180");

  // Nouveau cr&eacute;dit
  const [nouveauTaux, setNouveauTaux] = useState<string>("3.50");
  const [nouvelleDuree, setNouvelleDuree] = useState<string>("240");
  const [fraisRachatCustom, setFraisRachatCustom] = useState<string>("");
  const [useCustomFrais, setUseCustomFrais] = useState<boolean>(false);

  const mensActNum = useMemo(() => parseNum(mensualiteActuelle), [mensualiteActuelle]);
  const capitalNum = useMemo(() => parseNum(capitalRestant), [capitalRestant]);
  const dureeRestNum = useMemo(() => {
    const d = parseInt(dureeRestante, 10);
    return isNaN(d) || d <= 0 ? 0 : d;
  }, [dureeRestante]);
  const tauxNewNum = useMemo(() => parseNum(nouveauTaux), [nouveauTaux]);
  const dureeNewNum = useMemo(() => {
    const d = parseInt(nouvelleDuree, 10);
    return isNaN(d) || d <= 0 ? 0 : d;
  }, [nouvelleDuree]);

  const fraisRachat = useMemo(() => {
    if (useCustomFrais) return parseNum(fraisRachatCustom);
    return capitalNum * 0.03; // IRA 3% par d&eacute;faut
  }, [useCustomFrais, fraisRachatCustom, capitalNum]);

  const resultat = useMemo(() => {
    if (mensActNum <= 0 || capitalNum <= 0 || dureeRestNum <= 0 || dureeNewNum <= 0)
      return null;

    const coutAncien = mensActNum * dureeRestNum;
    const nouveauCapital = capitalNum + fraisRachat;
    const nouvelleMensualite = calcMensualite(
      nouveauCapital,
      tauxNewNum,
      dureeNewNum
    );
    const coutNouveau = nouvelleMensualite * dureeNewNum;
    const economieMensuelle = mensActNum - nouvelleMensualite;
    const economieTotale = coutAncien - coutNouveau;

    return {
      coutAncien,
      nouveauCapital,
      nouvelleMensualite,
      coutNouveau,
      economieMensuelle,
      economieTotale,
      fraisRachat,
    };
  }, [mensActNum, capitalNum, dureeRestNum, tauxNewNum, dureeNewNum, fraisRachat]);

  return (
    <div className="space-y-8">
      {/* ---------- Situation actuelle ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Votre cr&eacute;dit actuel
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensualit&eacute; actuelle (&euro;)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={mensualiteActuelle}
              onChange={(e) =>
                setMensualiteActuelle(e.target.value.replace(/[^0-9.,]/g, ""))
              }
              placeholder="850"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capital restant d&ucirc; (&euro;)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={capitalRestant}
              onChange={(e) =>
                setCapitalRestant(e.target.value.replace(/[^0-9.,]/g, ""))
              }
              placeholder="120 000"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dur&eacute;e restante (mois)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={dureeRestante}
              onChange={(e) =>
                setDureeRestante(e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="180"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* ---------- Nouveau cr&eacute;dit ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Nouveau cr&eacute;dit envisag&eacute;
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nouveau taux (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={nouveauTaux}
              onChange={(e) =>
                setNouveauTaux(e.target.value.replace(/[^0-9.,]/g, ""))
              }
              placeholder="3.50"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nouvelle dur&eacute;e (mois)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={nouvelleDuree}
              onChange={(e) =>
                setNouvelleDuree(e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="240"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Frais de rachat (IRA)
            </label>
            {useCustomFrais ? (
              <input
                type="text"
                inputMode="decimal"
                value={fraisRachatCustom}
                onChange={(e) =>
                  setFraisRachatCustom(e.target.value.replace(/[^0-9.,]/g, ""))
                }
                placeholder="3 600"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            ) : (
              <div className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg bg-gray-50 text-gray-700">
                {formatEuro(capitalNum * 0.03)}&nbsp;&euro;
                <span className="text-sm text-gray-500 ml-1">(3&nbsp;%)</span>
              </div>
            )}
            <button
              onClick={() => setUseCustomFrais(!useCustomFrais)}
              className="text-sm text-blue-600 hover:text-blue-700 mt-1"
            >
              {useCustomFrais
                ? "Utiliser 3\u00a0% par d\u00e9faut"
                : "Saisir un montant personnalis\u00e9"}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- R&eacute;sultats ---------- */}
      {resultat && (
        <>
          {/* Summary */}
          <div className={`${resultat.economieTotale >= 0 ? "bg-blue-600" : "bg-orange-600"} text-white rounded-xl p-5`}>
            <div className="text-center mb-4">
              <p className="text-sm font-medium opacity-80">
                {resultat.economieTotale >= 0
                  ? "\u00c9conomie totale estim\u00e9e"
                  : "Surco\u00fbt estim\u00e9 du rachat"}
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold">
                {formatEuro(Math.abs(resultat.economieTotale))}&nbsp;&euro;
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm opacity-80">
                  &Eacute;conomie mensuelle
                </p>
                <p className="text-xl font-bold">
                  {resultat.economieMensuelle >= 0 ? "+" : ""}
                  {formatEuro(resultat.economieMensuelle)}&nbsp;&euro;
                </p>
              </div>
              <div>
                <p className="text-sm opacity-80">
                  Frais de rachat
                </p>
                <p className="text-xl font-bold">
                  {formatEuro(resultat.fraisRachat)}&nbsp;&euro;
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Comparaison ancien vs nouveau cr&eacute;dit
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-600">
                    <th className="py-2 pr-4 text-left"></th>
                    <th className="py-2 pr-4 text-right">Ancien cr&eacute;dit</th>
                    <th className="py-2 text-right">Nouveau cr&eacute;dit</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Mensualit&eacute;</td>
                    <td className="py-3 pr-4 text-right">
                      {formatEuro(mensActNum)}&nbsp;&euro;
                    </td>
                    <td className="py-3 text-right font-semibold text-blue-700">
                      {formatEuro(resultat.nouvelleMensualite)}&nbsp;&euro;
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Dur&eacute;e restante</td>
                    <td className="py-3 pr-4 text-right">
                      {dureeRestNum} mois ({Math.floor(dureeRestNum / 12)} an{Math.floor(dureeRestNum / 12) > 1 ? "s" : ""})
                    </td>
                    <td className="py-3 text-right">
                      {dureeNewNum} mois ({Math.floor(dureeNewNum / 12)} an{Math.floor(dureeNewNum / 12) > 1 ? "s" : ""})
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Capital</td>
                    <td className="py-3 pr-4 text-right">
                      {formatEuro(capitalNum)}&nbsp;&euro;
                    </td>
                    <td className="py-3 text-right">
                      {formatEuro(resultat.nouveauCapital)}&nbsp;&euro;
                      <span className="text-xs text-gray-500 ml-1">
                        (+ frais)
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t-2 border-gray-300 font-bold">
                    <td className="py-3 pr-4">Co&ucirc;t total</td>
                    <td className="py-3 pr-4 text-right">
                      {formatEuro(resultat.coutAncien)}&nbsp;&euro;
                    </td>
                    <td className="py-3 text-right text-blue-700">
                      {formatEuro(resultat.coutNouveau)}&nbsp;&euro;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Ancienne mensualit&eacute;
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatEuro(mensActNum)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Nouvelle mensualit&eacute;
              </p>
              <p className="text-xl font-bold text-blue-700">
                {formatEuro(resultat.nouvelleMensualite)}&nbsp;&euro;
              </p>
            </div>
          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-800 mb-2">
              Bon &agrave; savoir
            </h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              Les <strong>indemnit&eacute;s de remboursement anticip&eacute; (IRA)</strong> sont
              plafonn&eacute;es par la loi &agrave; 3&nbsp;% du capital restant d&ucirc; ou 6 mois
              d&apos;int&eacute;r&ecirc;ts (le montant le plus faible). Un rachat de cr&eacute;dit est
              g&eacute;n&eacute;ralement int&eacute;ressant si l&apos;&eacute;cart de taux est sup&eacute;rieur &agrave;
              0,7&nbsp;point et que vous &ecirc;tes dans le premier tiers de la dur&eacute;e
              de remboursement.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
