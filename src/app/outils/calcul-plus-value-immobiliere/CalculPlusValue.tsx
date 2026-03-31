"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

type FraisMode = "forfait" | "reel";
type TravauxMode = "forfait" | "reel";

function parseNum(val: string): number {
  const n = parseFloat(val.replace(/\s/g, "").replace(",", "."));
  return isNaN(n) || n < 0 ? 0 : n;
}

function formatEuro(n: number): string {
  return Math.round(n).toLocaleString("fr-FR");
}

function calculerAbattementIR(duree: number): number {
  if (duree <= 5) return 0;
  if (duree <= 21) return (duree - 5) * 6;
  if (duree === 22) return (21 - 5) * 6 + 4;
  return 100;
}

function calculerAbattementPS(duree: number): number {
  if (duree <= 5) return 0;
  if (duree <= 21) return (duree - 5) * 1.65;
  if (duree === 22) return (21 - 5) * 1.65 + 1.60;
  if (duree <= 30) return (21 - 5) * 1.65 + 1.60 + (duree - 22) * 9;
  return 100;
}

function calculerSurtaxe(plusValue: number): number {
  if (plusValue <= 50000) return 0;
  if (plusValue <= 60000) return plusValue * 0.02;
  if (plusValue <= 100000) return plusValue * 0.02;
  if (plusValue <= 110000) return plusValue * 0.03;
  if (plusValue <= 150000) return plusValue * 0.03;
  if (plusValue <= 160000) return plusValue * 0.04;
  if (plusValue <= 200000) return plusValue * 0.04;
  if (plusValue <= 210000) return plusValue * 0.05;
  if (plusValue <= 250000) return plusValue * 0.05;
  if (plusValue <= 260000) return plusValue * 0.06;
  return plusValue * 0.06;
}

export default function CalculPlusValue() {
  const [prixAchat, setPrixAchat] = useState("200000");
  const [prixVente, setPrixVente] = useState("280000");
  const [dureeDetention, setDureeDetention] = useState("8");
  const [fraisMode, setFraisMode] = useState<FraisMode>("forfait");
  const [fraisReelMontant, setFraisReelMontant] = useState("");
  const [travauxMode, setTravauxMode] = useState<TravauxMode>("forfait");
  const [travauxReelMontant, setTravauxReelMontant] = useState("");

  const resultats = useMemo(() => {
    const achat = parseNum(prixAchat);
    const vente = parseNum(prixVente);
    const duree = Math.floor(parseNum(dureeDetention));

    if (achat === 0 || vente === 0) return null;

    const fraisAcquisition =
      fraisMode === "forfait" ? achat * 0.075 : parseNum(fraisReelMontant);

    const travaux =
      travauxMode === "forfait"
        ? duree > 5
          ? achat * 0.15
          : 0
        : parseNum(travauxReelMontant);

    const prixAcquisitionCorrige = achat + fraisAcquisition + travaux;
    const plusValueBrute = vente - prixAcquisitionCorrige;

    if (plusValueBrute <= 0) {
      return {
        fraisAcquisition,
        travaux,
        prixAcquisitionCorrige,
        plusValueBrute,
        abattementIRPct: 0,
        abattementPSPct: 0,
        plusValueApresAbattIR: 0,
        plusValueApresAbattPS: 0,
        impotIR: 0,
        prelevementsSociaux: 0,
        surtaxe: 0,
        totalImpot: 0,
        plusValueNette: plusValueBrute,
      };
    }

    const abattementIRPct = Math.min(calculerAbattementIR(duree), 100);
    const abattementPSPct = Math.min(calculerAbattementPS(duree), 100);

    const plusValueApresAbattIR =
      plusValueBrute * (1 - abattementIRPct / 100);
    const plusValueApresAbattPS =
      plusValueBrute * (1 - abattementPSPct / 100);

    const impotIR = plusValueApresAbattIR * 0.19;
    const prelevementsSociaux = plusValueApresAbattPS * 0.172;
    const surtaxe = calculerSurtaxe(plusValueApresAbattIR);

    const totalImpot = impotIR + prelevementsSociaux + surtaxe;
    const plusValueNette = plusValueBrute - totalImpot;

    return {
      fraisAcquisition,
      travaux,
      prixAcquisitionCorrige,
      plusValueBrute,
      abattementIRPct,
      abattementPSPct,
      plusValueApresAbattIR,
      plusValueApresAbattPS,
      impotIR,
      prelevementsSociaux,
      surtaxe,
      totalImpot,
      plusValueNette,
    };
  }, [
    prixAchat,
    prixVente,
    dureeDetention,
    fraisMode,
    fraisReelMontant,
    travauxMode,
    travauxReelMontant,
  ]);

  return (
    <div className="space-y-8">
      {/* ---------- Formulaire ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Param&egrave;tres de la vente
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Prix d'achat */}
          <div>
            <label
              htmlFor="prix-achat"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Prix d&apos;achat
            </label>
            <div className="relative">
              <input
                id="prix-achat"
                type="text"
                inputMode="decimal"
                value={prixAchat}
                onChange={(e) =>
                  setPrixAchat(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="200000"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                &euro;
              </span>
            </div>
          </div>

          {/* Prix de vente */}
          <div>
            <label
              htmlFor="prix-vente"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Prix de vente
            </label>
            <div className="relative">
              <input
                id="prix-vente"
                type="text"
                inputMode="decimal"
                value={prixVente}
                onChange={(e) =>
                  setPrixVente(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="280000"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                &euro;
              </span>
            </div>
          </div>

          {/* Durée de détention */}
          <div>
            <label
              htmlFor="duree"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dur&eacute;e de d&eacute;tention
            </label>
            <div className="relative">
              <input
                id="duree"
                type="text"
                inputMode="decimal"
                value={dureeDetention}
                onChange={(e) =>
                  setDureeDetention(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="8"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                ans
              </span>
            </div>
          </div>

          {/* Frais d'acquisition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Frais d&apos;acquisition
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setFraisMode("forfait")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  fraisMode === "forfait"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Forfait 7,5&nbsp;%
              </button>
              <button
                type="button"
                onClick={() => setFraisMode("reel")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  fraisMode === "reel"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Montant r&eacute;el
              </button>
            </div>
            {fraisMode === "forfait" ? (
              <p className="text-sm text-gray-500 py-3">
                Forfait de 7,5&nbsp;% du prix d&apos;achat ={" "}
                <strong>
                  {formatEuro(parseNum(prixAchat) * 0.075)}&nbsp;&euro;
                </strong>
              </p>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={fraisReelMontant}
                  onChange={(e) =>
                    setFraisReelMontant(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="15000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                  &euro;
                </span>
              </div>
            )}
          </div>

          {/* Travaux */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Travaux
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setTravauxMode("forfait")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  travauxMode === "forfait"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Forfait 15&nbsp;% (si +5 ans)
              </button>
              <button
                type="button"
                onClick={() => setTravauxMode("reel")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  travauxMode === "reel"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Montant r&eacute;el
              </button>
            </div>
            {travauxMode === "forfait" ? (
              <p className="text-sm text-gray-500 py-3">
                {Math.floor(parseNum(dureeDetention)) > 5 ? (
                  <>
                    Forfait de 15&nbsp;% du prix d&apos;achat ={" "}
                    <strong>
                      {formatEuro(parseNum(prixAchat) * 0.15)}&nbsp;&euro;
                    </strong>
                  </>
                ) : (
                  <>
                    Le forfait travaux de 15&nbsp;% n&apos;est applicable qu&apos;apr&egrave;s
                    5 ans de d&eacute;tention. Montant retenu&nbsp;:{" "}
                    <strong>0&nbsp;&euro;</strong>
                  </>
                )}
              </p>
            ) : (
              <div className="relative max-w-md">
                <input
                  type="text"
                  inputMode="decimal"
                  value={travauxReelMontant}
                  onChange={(e) =>
                    setTravauxReelMontant(
                      e.target.value.replace(/[^0-9]/g, "")
                    )
                  }
                  placeholder="30000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                  &euro;
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Résultats ---------- */}
      {resultats && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            R&eacute;sultats de la plus-value
          </h2>

          {/* Résumé principal */}
          <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Plus-value brute
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold">
                  {resultats.plusValueBrute >= 0 ? "+" : ""}
                  {formatEuro(resultats.plusValueBrute)}&nbsp;&euro;
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Plus-value nette
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold">
                  {resultats.plusValueNette >= 0 ? "+" : ""}
                  {formatEuro(resultats.plusValueNette)}&nbsp;&euro;
                </p>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">
                Abattement IR
              </p>
              <p className="text-xl font-bold text-blue-700">
                {resultats.abattementIRPct.toFixed(1)}&nbsp;%
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">
                Abattement PS
              </p>
              <p className="text-xl font-bold text-blue-700">
                {resultats.abattementPSPct.toFixed(1)}&nbsp;%
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Imp&ocirc;t IR (19&nbsp;%)</p>
              <p className="text-xl font-bold text-gray-800">
                {formatEuro(resultats.impotIR)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">
                Pr&eacute;l&egrave;vements sociaux (17,2&nbsp;%)
              </p>
              <p className="text-xl font-bold text-gray-800">
                {formatEuro(resultats.prelevementsSociaux)}&nbsp;&euro;
              </p>
            </div>
          </div>

          {/* Surtaxe éventuelle */}
          {resultats.surtaxe > 0 && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 text-center">
              <p className="text-sm text-orange-600 font-medium mb-1">
                Surtaxe sur plus-value &eacute;lev&eacute;e
              </p>
              <p className="text-xl font-bold text-orange-700">
                {formatEuro(resultats.surtaxe)}&nbsp;&euro;
              </p>
            </div>
          )}

          {/* Total imposition */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-center">
            <p className="text-sm text-red-600 font-medium mb-1">
              Total imposition
            </p>
            <p className="text-2xl font-extrabold text-red-700">
              {formatEuro(resultats.totalImpot)}&nbsp;&euro;
            </p>
          </div>

          <ShareResult
            toolName="Plus-value immobiliere"
            result={`Plus-value nette : ${resultats.plusValueNette >= 0 ? "+" : ""}${formatEuro(resultats.plusValueNette)} €`}
            details={`PV brute : ${resultats.plusValueBrute >= 0 ? "+" : ""}${formatEuro(resultats.plusValueBrute)} € | Imposition : ${formatEuro(resultats.totalImpot)} € | Detention : ${dureeDetention} ans`}
            toolSlug="calcul-plus-value-immobiliere"
          />

          {/* Détail du calcul */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              D&eacute;tail du calcul
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Prix d&apos;achat</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(parseNum(prixAchat))}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Frais d&apos;acquisition</dt>
                <dd className="font-semibold text-gray-900">
                  +{formatEuro(resultats.fraisAcquisition)}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Travaux</dt>
                <dd className="font-semibold text-gray-900">
                  +{formatEuro(resultats.travaux)}&nbsp;&euro;
                </dd>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="font-semibold text-gray-800">
                  Prix d&apos;acquisition corrig&eacute;
                </dt>
                <dd className="font-bold text-blue-700">
                  {formatEuro(resultats.prixAcquisitionCorrige)}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Prix de vente</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(parseNum(prixVente))}&nbsp;&euro;
                </dd>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="font-semibold text-gray-800">
                  Plus-value brute
                </dt>
                <dd className="font-bold text-blue-700">
                  {resultats.plusValueBrute >= 0 ? "+" : ""}
                  {formatEuro(resultats.plusValueBrute)}&nbsp;&euro;
                </dd>
              </div>

              {resultats.plusValueBrute > 0 && (
                <>
                  <hr className="border-gray-200" />
                  <div className="flex flex-wrap justify-between gap-1">
                    <dt className="text-gray-600">
                      PV apr&egrave;s abattement IR ({resultats.abattementIRPct.toFixed(1)}&nbsp;%)
                    </dt>
                    <dd className="font-semibold text-gray-900">
                      {formatEuro(resultats.plusValueApresAbattIR)}&nbsp;&euro;
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-1">
                    <dt className="text-gray-600">
                      PV apr&egrave;s abattement PS ({resultats.abattementPSPct.toFixed(1)}&nbsp;%)
                    </dt>
                    <dd className="font-semibold text-gray-900">
                      {formatEuro(resultats.plusValueApresAbattPS)}&nbsp;&euro;
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-1">
                    <dt className="text-gray-600">Imp&ocirc;t IR (19&nbsp;%)</dt>
                    <dd className="font-semibold text-gray-900">
                      {formatEuro(resultats.impotIR)}&nbsp;&euro;
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-1">
                    <dt className="text-gray-600">
                      Pr&eacute;l&egrave;vements sociaux (17,2&nbsp;%)
                    </dt>
                    <dd className="font-semibold text-gray-900">
                      {formatEuro(resultats.prelevementsSociaux)}&nbsp;&euro;
                    </dd>
                  </div>
                  {resultats.surtaxe > 0 && (
                    <div className="flex flex-wrap justify-between gap-1">
                      <dt className="text-gray-600">Surtaxe</dt>
                      <dd className="font-semibold text-gray-900">
                        {formatEuro(resultats.surtaxe)}&nbsp;&euro;
                      </dd>
                    </div>
                  )}
                  <hr className="border-gray-200" />
                  <div className="flex flex-wrap justify-between gap-1 text-base">
                    <dt className="font-semibold text-gray-800">
                      Total imposition
                    </dt>
                    <dd className="font-bold text-red-600">
                      {formatEuro(resultats.totalImpot)}&nbsp;&euro;
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-1 text-base">
                    <dt className="font-semibold text-gray-800">
                      Plus-value nette
                    </dt>
                    <dd className="font-bold text-green-600">
                      +{formatEuro(resultats.plusValueNette)}&nbsp;&euro;
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
