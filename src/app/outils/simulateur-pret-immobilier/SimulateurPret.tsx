"use client";

import { useState, useMemo } from "react";

interface Amortissement {
  mois: number;
  capitalRembourse: number;
  interets: number;
  assurance: number;
  capitalRestant: number;
}

function formatEur(n: number) {
  return n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function SimulateurPret() {
  const [montant, setMontant] = useState<string>("250000");
  const [taux, setTaux] = useState<string>("3.50");
  const [duree, setDuree] = useState<number>(20);
  const [tauxAssurance, setTauxAssurance] = useState<string>("0.34");
  const [apport, setApport] = useState<string>("");
  const [showTableau, setShowTableau] = useState(false);

  const resultats = useMemo(() => {
    const C = parseFloat(montant) - (parseFloat(apport) || 0);
    const t = parseFloat(taux) / 100;
    const ta = parseFloat(tauxAssurance) / 100;
    const n = duree;

    if (!C || C <= 0 || !t || t <= 0 || !n || n <= 0) return null;

    const mensuel = t / 12;
    const nbMois = n * 12;

    // M = C * (t/12) / (1 - (1 + t/12)^(-n*12))
    const mensualite = C * mensuel / (1 - Math.pow(1 + mensuel, -nbMois));
    const mensualiteAssurance = (C * ta) / 12;
    const mensualiteTotale = mensualite + mensualiteAssurance;
    const coutTotalCredit = mensualite * nbMois - C;
    const coutTotalAssurance = mensualiteAssurance * nbMois;
    const montantTotalRembourse = mensualiteTotale * nbMois;

    // Tableau d'amortissement
    const tableau: Amortissement[] = [];
    let capitalRestant = C;

    for (let m = 1; m <= nbMois; m++) {
      const interetsMois = capitalRestant * mensuel;
      const capitalMois = mensualite - interetsMois;
      capitalRestant -= capitalMois;
      if (capitalRestant < 0) capitalRestant = 0;

      tableau.push({
        mois: m,
        capitalRembourse: capitalMois,
        interets: interetsMois,
        assurance: mensualiteAssurance,
        capitalRestant,
      });
    }

    return {
      capitalEmprunte: C,
      mensualite,
      mensualiteAssurance,
      mensualiteTotale,
      coutTotalCredit,
      coutTotalAssurance,
      montantTotalRembourse,
      tableau,
      nbMois,
    };
  }, [montant, taux, duree, tauxAssurance, apport]);

  const dureeOptions = [10, 15, 20, 25, 30];

  const tableauAffiche = useMemo(() => {
    if (!resultats) return [];
    const t = resultats.tableau;
    if (t.length <= 13) return t;
    return [...t.slice(0, 12), t[t.length - 1]];
  }, [resultats]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Simulateur de pret immobilier
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Montant */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Montant de l&apos;emprunt
          </label>
          <div className="relative">
            <input
              type="number"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="250000"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
        </div>

        {/* Taux */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux d&apos;interet annuel
          </label>
          <div className="relative">
            <input
              type="number"
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

        {/* Taux assurance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux d&apos;assurance annuel
          </label>
          <div className="relative">
            <input
              type="number"
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

        {/* Apport */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Apport personnel{" "}
            <span className="text-gray-400 font-normal">(optionnel)</span>
          </label>
          <div className="relative">
            <input
              type="number"
              value={apport}
              onChange={(e) => setApport(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="0"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
        </div>
      </div>

      {/* Resultats */}
      {resultats && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Resultats de votre simulation
          </h3>

          {resultats.capitalEmprunte !== parseFloat(montant) && (
            <p className="text-sm text-gray-500 mb-3">
              Capital emprunte (apres apport) : {formatEur(resultats.capitalEmprunte)}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-600 font-medium">
                Mensualite (hors assurance)
              </p>
              <p className="text-xl md:text-2xl font-bold text-blue-700 mt-1">
                {formatEur(resultats.mensualite)}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-600 font-medium">
                Mensualite assurance
              </p>
              <p className="text-xl md:text-2xl font-bold text-blue-700 mt-1">
                {formatEur(resultats.mensualiteAssurance)}
              </p>
            </div>

            <div className="bg-blue-600 rounded-xl p-4 text-white">
              <p className="text-sm font-medium text-blue-100">
                Mensualite totale
              </p>
              <p className="text-xl md:text-2xl font-bold mt-1">
                {formatEur(resultats.mensualiteTotale)}
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

          {/* Tableau d'amortissement */}
          <div className="mt-6">
            <button
              onClick={() => setShowTableau(!showTableau)}
              className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              <span
                className={`transition-transform ${
                  showTableau ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
              Tableau d&apos;amortissement
            </button>

            {showTableau && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-2 px-3 font-medium text-gray-600 rounded-tl-lg whitespace-nowrap">
                        Mois
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600 whitespace-nowrap">
                        Capital rembourse
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600 whitespace-nowrap">
                        Interets
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600 whitespace-nowrap">
                        Assurance
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600 rounded-tr-lg whitespace-nowrap">
                        Capital restant
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableauAffiche.map((ligne, i) => (
                      <tr
                        key={ligne.mois}
                        className={`border-b border-gray-100 ${
                          i === 12 && resultats.nbMois > 13
                            ? "border-t-2 border-t-gray-300"
                            : ""
                        }`}
                      >
                        <td className="py-2 px-3 text-gray-700 whitespace-nowrap">
                          {i === 12 && resultats.nbMois > 13 ? (
                            <span className="font-medium">
                              ...{" "}mois {ligne.mois}
                            </span>
                          ) : (
                            ligne.mois
                          )}
                        </td>
                        <td className="py-2 px-3 text-right text-gray-700 whitespace-nowrap">
                          {formatEur(ligne.capitalRembourse)}
                        </td>
                        <td className="py-2 px-3 text-right text-gray-700 whitespace-nowrap">
                          {formatEur(ligne.interets)}
                        </td>
                        <td className="py-2 px-3 text-right text-gray-700 whitespace-nowrap">
                          {formatEur(ligne.assurance)}
                        </td>
                        <td className="py-2 px-3 text-right text-gray-700 whitespace-nowrap">
                          {formatEur(ligne.capitalRestant)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
