"use client";

import { useState, useMemo } from "react";

type Frequence = "mensuelle" | "trimestrielle" | "annuelle";

interface LigneEvolution {
  annee: number;
  versementsCumules: number;
  interetsCumules: number;
  capitalTotal: number;
}

function formatNum(n: number) {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatEur(n: number) {
  return `${formatNum(n)} \u20AC`;
}

function getPeriodesParAn(freq: Frequence): number {
  switch (freq) {
    case "mensuelle":
      return 12;
    case "trimestrielle":
      return 4;
    case "annuelle":
      return 1;
  }
}

export default function CalculInteretsComposes() {
  const [capitalInitial, setCapitalInitial] = useState<string>("10000");
  const [versementMensuel, setVersementMensuel] = useState<string>("200");
  const [tauxAnnuel, setTauxAnnuel] = useState<string>("5");
  const [duree, setDuree] = useState<string>("20");
  const [frequence, setFrequence] = useState<Frequence>("mensuelle");
  const [showTableau, setShowTableau] = useState(false);

  const resultats = useMemo(() => {
    const P = parseFloat(capitalInitial) || 0;
    const PMT = parseFloat(versementMensuel) || 0;
    const r = (parseFloat(tauxAnnuel) || 0) / 100;
    const t = parseInt(duree) || 0;
    const n = getPeriodesParAn(frequence);

    if (t <= 0 || (P <= 0 && PMT <= 0)) return null;
    if (r < 0) return null;

    // Convert monthly contribution to per-period contribution
    const versementParPeriode = PMT * (12 / n);
    const tauxParPeriode = r / n;
    const nbPeriodes = n * t;

    // Total contributions over the full duration
    const totalVerse = P + PMT * 12 * t;

    // Build year-by-year evolution table
    const tableau: LigneEvolution[] = [];
    let capital = P;
    let totalInterets = 0;
    let totalVersements = P;

    for (let annee = 1; annee <= t; annee++) {
      const periodesParAn = n;
      for (let p = 0; p < periodesParAn; p++) {
        const interetsPeriode = capital * tauxParPeriode;
        capital += interetsPeriode + versementParPeriode;
        totalInterets += interetsPeriode;
        totalVersements += versementParPeriode;
      }

      tableau.push({
        annee,
        versementsCumules: totalVersements,
        interetsCumules: totalInterets,
        capitalTotal: capital,
      });
    }

    const capitalFinal = capital;
    const interetsGagnes = totalInterets;
    const ratioInteretsVersements =
      totalVerse > 0 ? (interetsGagnes / totalVerse) * 100 : 0;

    return {
      capitalFinal,
      totalVerse,
      interetsGagnes,
      ratioInteretsVersements,
      tableau,
    };
  }, [capitalInitial, versementMensuel, tauxAnnuel, duree, frequence]);

  const frequenceOptions: { value: Frequence; label: string }[] = [
    { value: "mensuelle", label: "Mensuelle" },
    { value: "trimestrielle", label: "Trimestrielle" },
    { value: "annuelle", label: "Annuelle" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Simulateur d&apos;interets composes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Capital initial */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Capital initial
          </label>
          <div className="relative">
            <input
              type="number"
              value={capitalInitial}
              onChange={(e) => setCapitalInitial(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="10000"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
        </div>

        {/* Versement mensuel */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Versement mensuel
          </label>
          <div className="relative">
            <input
              type="number"
              value={versementMensuel}
              onChange={(e) => setVersementMensuel(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="200"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
        </div>

        {/* Taux annuel */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux d&apos;interet annuel
          </label>
          <div className="relative">
            <input
              type="number"
              value={tauxAnnuel}
              onChange={(e) => setTauxAnnuel(e.target.value)}
              step="0.1"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="5"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              %
            </span>
          </div>
        </div>

        {/* Duree */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duree du placement
          </label>
          <div className="relative">
            <input
              type="number"
              value={duree}
              onChange={(e) => setDuree(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-14 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="20"
              min={1}
              max={100}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              ans
            </span>
          </div>
        </div>

        {/* Frequence de capitalisation */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Frequence de capitalisation
          </label>
          <div className="flex flex-wrap gap-2">
            {frequenceOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFrequence(opt.value)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  frequence === opt.value
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultats */}
      {resultats && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Resultats de votre simulation
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-600 rounded-xl p-4 text-white">
              <p className="text-sm font-medium text-blue-100">
                Capital final
              </p>
              <p className="text-2xl font-bold mt-1">
                {formatEur(resultats.capitalFinal)}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Total verse
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEur(resultats.totalVerse)}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-600 font-medium">
                Interets gagnes
              </p>
              <p className="text-xl font-bold text-green-700 mt-1">
                {formatEur(resultats.interetsGagnes)}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-600 font-medium">
                Ratio interets / versements
              </p>
              <p className="text-xl font-bold text-green-700 mt-1">
                {formatNum(resultats.ratioInteretsVersements)} %
              </p>
            </div>
          </div>

          {/* Tableau d'evolution */}
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
              Tableau d&apos;evolution annuel
            </button>

            {showTableau && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-2 px-3 font-medium text-gray-600 rounded-tl-lg">
                        Annee
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600">
                        Versements cumules
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600">
                        Interets cumules
                      </th>
                      <th className="text-right py-2 px-3 font-medium text-gray-600 rounded-tr-lg">
                        Capital total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultats.tableau.map((ligne) => (
                      <tr
                        key={ligne.annee}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-2 px-3 text-gray-700 font-medium">
                          {ligne.annee}
                        </td>
                        <td className="py-2 px-3 text-right text-gray-700">
                          {formatEur(ligne.versementsCumules)}
                        </td>
                        <td className="py-2 px-3 text-right text-green-600 font-medium">
                          {formatEur(ligne.interetsCumules)}
                        </td>
                        <td className="py-2 px-3 text-right text-gray-900 font-semibold">
                          {formatEur(ligne.capitalTotal)}
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
