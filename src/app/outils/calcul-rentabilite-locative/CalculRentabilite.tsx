"use client";

import { useState, useMemo } from "react";

type FraisNotaireMode = "pourcentage" | "montant";

function parseNum(val: string): number {
  const n = parseFloat(val.replace(/\s/g, "").replace(",", "."));
  return isNaN(n) || n < 0 ? 0 : n;
}

function formatEuro(n: number): string {
  return Math.round(n).toLocaleString("fr-FR");
}

export default function CalculRentabilite() {
  const [prixAchat, setPrixAchat] = useState("200000");
  const [fraisNotaireMode, setFraisNotaireMode] =
    useState<FraisNotaireMode>("pourcentage");
  const [fraisNotairePct, setFraisNotairePct] = useState("8");
  const [fraisNotaireMontant, setFraisNotaireMontant] = useState("");
  const [travaux, setTravaux] = useState("0");
  const [loyerMensuel, setLoyerMensuel] = useState("800");
  const [chargesAnnuelles, setChargesAnnuelles] = useState("2000");
  const [vacanceLocative, setVacanceLocative] = useState("5");

  const resultats = useMemo(() => {
    const prix = parseNum(prixAchat);
    const loyer = parseNum(loyerMensuel);
    const charges = parseNum(chargesAnnuelles);
    const vacance = parseNum(vacanceLocative);
    const travauxVal = parseNum(travaux);

    if (prix === 0 || loyer === 0) return null;

    const fraisNotaire =
      fraisNotaireMode === "pourcentage"
        ? prix * (parseNum(fraisNotairePct) / 100)
        : parseNum(fraisNotaireMontant);

    const coutTotal = prix + fraisNotaire + travauxVal;
    const loyerAnnuel = loyer * 12;
    const loyerEffectif = loyerAnnuel * (1 - vacance / 100);
    const rentaBrute = (loyerAnnuel / prix) * 100;
    const rentaNette = ((loyerEffectif - charges) / coutTotal) * 100;
    const cashFlowMensuel = (loyerEffectif - charges) / 12;

    return {
      coutTotal,
      loyerAnnuel,
      loyerEffectif,
      rentaBrute,
      rentaNette,
      cashFlowMensuel,
      fraisNotaire,
    };
  }, [
    prixAchat,
    fraisNotaireMode,
    fraisNotairePct,
    fraisNotaireMontant,
    travaux,
    loyerMensuel,
    chargesAnnuelles,
    vacanceLocative,
  ]);

  return (
    <div className="space-y-8">
      {/* ---------- Formulaire ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Param&egrave;tres de l&apos;investissement
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Prix d'achat */}
          <div className="sm:col-span-2">
            <label
              htmlFor="prix"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Prix d&apos;achat du bien
            </label>
            <div className="relative">
              <input
                id="prix"
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

          {/* Frais de notaire */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Frais de notaire
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setFraisNotaireMode("pourcentage")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  fraisNotaireMode === "pourcentage"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Pourcentage
              </button>
              <button
                type="button"
                onClick={() => setFraisNotaireMode("montant")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  fraisNotaireMode === "montant"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Montant
              </button>
            </div>
            {fraisNotaireMode === "pourcentage" ? (
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={fraisNotairePct}
                  onChange={(e) =>
                    setFraisNotairePct(
                      e.target.value.replace(/[^0-9.,]/g, "")
                    )
                  }
                  placeholder="8"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                  %
                </span>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={fraisNotaireMontant}
                  onChange={(e) =>
                    setFraisNotaireMontant(
                      e.target.value.replace(/[^0-9]/g, "")
                    )
                  }
                  placeholder="16000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                  &euro;
                </span>
              </div>
            )}
          </div>

          {/* Travaux */}
          <div>
            <label
              htmlFor="travaux"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Montant des travaux
            </label>
            <div className="relative">
              <input
                id="travaux"
                type="text"
                inputMode="decimal"
                value={travaux}
                onChange={(e) =>
                  setTravaux(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                &euro;
              </span>
            </div>
          </div>

          {/* Loyer mensuel */}
          <div>
            <label
              htmlFor="loyer"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Loyer mensuel (charges comprises)
            </label>
            <div className="relative">
              <input
                id="loyer"
                type="text"
                inputMode="decimal"
                value={loyerMensuel}
                onChange={(e) =>
                  setLoyerMensuel(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="800"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                &euro;
              </span>
            </div>
          </div>

          {/* Charges annuelles */}
          <div>
            <label
              htmlFor="charges"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Charges annuelles non r&eacute;cup&eacute;rables
            </label>
            <div className="relative">
              <input
                id="charges"
                type="text"
                inputMode="decimal"
                value={chargesAnnuelles}
                onChange={(e) =>
                  setChargesAnnuelles(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="2000"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                &euro;
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Copropri&eacute;t&eacute;, taxe fonci&egrave;re, assurance PNO, gestion locative...
            </p>
          </div>

          {/* Vacance locative */}
          <div>
            <label
              htmlFor="vacance"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Vacance locative
            </label>
            <div className="relative">
              <input
                id="vacance"
                type="text"
                inputMode="decimal"
                value={vacanceLocative}
                onChange={(e) =>
                  setVacanceLocative(
                    e.target.value.replace(/[^0-9.,]/g, "")
                  )
                }
                placeholder="5"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                %
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Résultats ---------- */}
      {resultats && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            R&eacute;sultats de votre investissement
          </h2>

          {/* Résumé principal */}
          <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Rentabilit&eacute; brute
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold">
                  {resultats.rentaBrute.toFixed(2)}&nbsp;%
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Rentabilit&eacute; nette
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold">
                  {resultats.rentaNette.toFixed(2)}&nbsp;%
                </p>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Cash-flow mensuel</p>
              <p
                className={`text-xl font-bold ${
                  resultats.cashFlowMensuel >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {resultats.cashFlowMensuel >= 0 ? "+" : ""}
                {formatEuro(resultats.cashFlowMensuel)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Revenus annuels nets</p>
              <p
                className={`text-xl font-bold ${
                  resultats.loyerEffectif - parseNum(chargesAnnuelles) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {resultats.loyerEffectif - parseNum(chargesAnnuelles) >= 0
                  ? "+"
                  : ""}
                {formatEuro(
                  resultats.loyerEffectif - parseNum(chargesAnnuelles)
                )}
                &nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">
                Co&ucirc;t total d&apos;acquisition
              </p>
              <p className="text-xl font-bold text-gray-800">
                {formatEuro(resultats.coutTotal)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Loyer annuel effectif</p>
              <p className="text-xl font-bold text-gray-800">
                {formatEuro(resultats.loyerEffectif)}&nbsp;&euro;
              </p>
            </div>
          </div>

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
                <dt className="text-gray-600">Frais de notaire</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(resultats.fraisNotaire)}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Travaux</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(parseNum(travaux))}&nbsp;&euro;
                </dd>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="font-semibold text-gray-800">
                  Co&ucirc;t total d&apos;acquisition
                </dt>
                <dd className="font-bold text-blue-700">
                  {formatEuro(resultats.coutTotal)}&nbsp;&euro;
                </dd>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Loyer mensuel</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(parseNum(loyerMensuel))}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Loyer annuel brut</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(resultats.loyerAnnuel)}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">
                  Vacance locative ({vacanceLocative}&nbsp;%)
                </dt>
                <dd className="font-semibold text-gray-900">
                  -{formatEuro(resultats.loyerAnnuel - resultats.loyerEffectif)}
                  &nbsp;&euro;
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-1">
                <dt className="text-gray-600">Charges annuelles</dt>
                <dd className="font-semibold text-gray-900">
                  -{formatEuro(parseNum(chargesAnnuelles))}&nbsp;&euro;
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
