"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

function formatEur(n: number) {
  return n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(n: number) {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculCapaciteEmprunt() {
  const [revenus, setRevenus] = useState<string>("3500");
  const [charges, setCharges] = useState<string>("0");
  const [taux, setTaux] = useState<string>("3.50");
  const [duree, setDuree] = useState<number>(20);
  const [tauxAssurance, setTauxAssurance] = useState<string>("0.34");

  const resultats = useMemo(() => {
    const rev = parseFloat(revenus) || 0;
    const ch = parseFloat(charges) || 0;
    const t = parseFloat(taux) / 100;
    const ta = parseFloat(tauxAssurance) / 100;
    const n = duree;

    if (rev <= 0 || t <= 0 || n <= 0) return null;

    // Mensualite maximale autorisee (35 % des revenus - charges en cours)
    const mensualiteMax = rev * 0.35 - ch;

    if (mensualiteMax <= 0) return null;

    const mensuel = t / 12;
    const nbMois = n * 12;

    // La mensualite totale inclut l'assurance.
    // On doit trouver C tel que :
    //   mensualite_pret + mensualite_assurance <= mensualiteMax
    //   C * mensuel / (1 - (1+mensuel)^(-nbMois)) + C * ta / 12 = mensualiteMax
    //   C * [ mensuel / (1 - (1+mensuel)^(-nbMois)) + ta / 12 ] = mensualiteMax

    const coeffPret = mensuel / (1 - Math.pow(1 + mensuel, -nbMois));
    const coeffAssurance = ta / 12;
    const coeffTotal = coeffPret + coeffAssurance;

    const capitalEmpruntable = mensualiteMax / coeffTotal;

    const mensualitePret = capitalEmpruntable * coeffPret;
    const mensualiteAssurance = capitalEmpruntable * coeffAssurance;
    const mensualiteTotale = mensualitePret + mensualiteAssurance;

    const coutTotalCredit = mensualitePret * nbMois - capitalEmpruntable;
    const coutTotalAssurance = mensualiteAssurance * nbMois;
    const montantTotalRembourse = mensualiteTotale * nbMois;

    const tauxEndettement = ((mensualiteTotale + ch) / rev) * 100;

    return {
      capitalEmpruntable,
      mensualiteMax,
      mensualitePret,
      mensualiteAssurance,
      mensualiteTotale,
      coutTotalCredit,
      coutTotalAssurance,
      montantTotalRembourse,
      tauxEndettement,
    };
  }, [revenus, charges, taux, duree, tauxAssurance]);

  const dureeOptions = [10, 15, 20, 25, 30];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Calculez votre capacite d&apos;emprunt
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenus */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Revenus mensuels nets
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={revenus}
              onChange={(e) => setRevenus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="3500"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Salaire net + autres revenus reguliers du foyer
          </p>
        </div>

        {/* Charges */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Charges mensuelles (credits en cours)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={charges}
              onChange={(e) => setCharges(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="0"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Credit auto, credit conso, pension alimentaire...
          </p>
        </div>

        {/* Taux */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux d&apos;interet annuel
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={taux}
              onChange={(e) => setTaux(e.target.value)}
              step="0.01"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="3.50"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              %
            </span>
          </div>
        </div>

        {/* Taux assurance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux d&apos;assurance annuel
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={tauxAssurance}
              onChange={(e) => setTauxAssurance(e.target.value)}
              step="0.01"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="0.34"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              %
            </span>
          </div>
        </div>

        {/* Duree */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duree du pret
          </label>
          <div className="flex flex-wrap gap-2">
            {dureeOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDuree(d)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  duree === d
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {d} ans
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultats */}
      {resultats && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Votre capacite d&apos;emprunt
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-600 rounded-xl p-4 text-white sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-medium text-blue-100">
                Montant empruntable
              </p>
              <p className="text-xl md:text-2xl font-bold mt-1">
                {formatEur(resultats.capitalEmpruntable)}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-600 font-medium">
                Mensualite maximale
              </p>
              <p className="text-xl md:text-2xl font-bold text-blue-700 mt-1">
                {formatEur(resultats.mensualiteTotale)}
              </p>
              <p className="text-xs text-blue-400 mt-1">
                dont {formatEur(resultats.mensualiteAssurance)} d&apos;assurance
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-600 font-medium">
                Taux d&apos;endettement
              </p>
              <p className="text-xl md:text-2xl font-bold text-blue-700 mt-1">
                {formatNumber(resultats.tauxEndettement)} %
              </p>
              <p className="text-xs text-blue-400 mt-1">
                Maximum recommande : 35 %
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Cout total du credit
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEur(resultats.coutTotalCredit)}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Cout total assurance
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEur(resultats.coutTotalAssurance)}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Montant total rembourse
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEur(resultats.montantTotalRembourse)}
              </p>
            </div>
          </div>

          {/* Barre visuelle du taux d'endettement */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">
                Taux d&apos;endettement
              </p>
              <p className="text-sm font-bold text-gray-800">
                {formatNumber(resultats.tauxEndettement)} % / 35 %
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all ${
                  resultats.tauxEndettement > 35
                    ? "bg-red-500"
                    : resultats.tauxEndettement > 30
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
                style={{
                  width: `${Math.min(resultats.tauxEndettement / 40 * 100, 100)}%`,
                }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-400">0 %</span>
              <span className="text-xs text-gray-400">35 %</span>
              <span className="text-xs text-gray-400">40 %</span>
            </div>
          </div>
        </div>
      )}

      {resultats && (
        <ShareResult
          toolName="Capacite d'emprunt"
          result={`${formatEur(resultats.capitalEmpruntable)} empruntables`}
          details={`Mensualite : ${formatEur(resultats.mensualiteTotale)} sur ${duree} ans a ${taux} % | Taux d'endettement : ${formatNumber(resultats.tauxEndettement)} %`}
          toolSlug="calcul-capacite-emprunt"
        />
      )}
    </div>
  );
}
