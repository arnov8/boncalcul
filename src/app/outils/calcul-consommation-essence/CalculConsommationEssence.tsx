"use client";

import { useState, useMemo } from "react";

type Mode = "consommation" | "cout";

const CONSOMMATIONS_COMPARAISON = [5, 6, 7, 8, 9, 10];

function formatNumber(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculConsommationEssence() {
  const [mode, setMode] = useState<Mode>("consommation");

  // Mode consommation
  const [distance, setDistance] = useState<string>("600");
  const [volume, setVolume] = useState<string>("45");

  // Mode cout
  const [distanceCout, setDistanceCout] = useState<string>("300");
  const [consommation, setConsommation] = useState<string>("7");
  const [prixLitre, setPrixLitre] = useState<string>("1,75");

  const parseInput = (val: string) =>
    parseFloat(val.replace(",", ".")) || 0;

  // Resultat mode consommation
  const resultatConsommation = useMemo(() => {
    const dist = parseInput(distance);
    const vol = parseInput(volume);
    if (dist <= 0) return 0;
    return (vol / dist) * 100;
  }, [distance, volume]);

  // Resultat mode cout
  const resultatCout = useMemo(() => {
    const dist = parseInput(distanceCout);
    const conso = parseInput(consommation);
    const prix = parseInput(prixLitre);
    const litresNecessaires = (dist * conso) / 100;
    const coutTotal = litresNecessaires * prix;
    return { litresNecessaires, coutTotal };
  }, [distanceCout, consommation, prixLitre]);

  // Tableau comparatif
  const tableComparaison = useMemo(() => {
    const dist = mode === "consommation"
      ? parseInput(distance)
      : parseInput(distanceCout);
    const prix = parseInput(prixLitre);

    return CONSOMMATIONS_COMPARAISON.map((conso) => {
      const litres = (dist * conso) / 100;
      const cout = litres * prix;
      return { conso, litres, cout };
    });
  }, [mode, distance, distanceCout, prixLitre]);

  const distanceAffichee = mode === "consommation"
    ? parseInput(distance)
    : parseInput(distanceCout);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculateur de consommation d&apos;essence
        </h2>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => setMode("consommation")}
              className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                mode === "consommation"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Calculer la consommation
            </button>
            <button
              onClick={() => setMode("cout")}
              className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                mode === "cout"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Calculer le cout d&apos;un trajet
            </button>
          </div>
        </div>

        {mode === "consommation" ? (
          <>
            {/* Distance parcourue */}
            <div className="mb-5">
              <label
                htmlFor="distance"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Distance parcourue (km)
              </label>
              <input
                id="distance"
                type="text"
                inputMode="decimal"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 600"
              />
            </div>

            {/* Volume de carburant */}
            <div className="mb-5">
              <label
                htmlFor="volume"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Volume de carburant (litres)
              </label>
              <input
                id="volume"
                type="text"
                inputMode="decimal"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 45"
              />
            </div>
          </>
        ) : (
          <>
            {/* Distance */}
            <div className="mb-5">
              <label
                htmlFor="distance-cout"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Distance du trajet (km)
              </label>
              <input
                id="distance-cout"
                type="text"
                inputMode="decimal"
                value={distanceCout}
                onChange={(e) => setDistanceCout(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 300"
              />
            </div>

            {/* Consommation */}
            <div className="mb-5">
              <label
                htmlFor="consommation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Consommation (L/100km)
              </label>
              <input
                id="consommation"
                type="text"
                inputMode="decimal"
                value={consommation}
                onChange={(e) => setConsommation(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 7"
              />
            </div>

            {/* Prix au litre */}
            <div className="mb-5">
              <label
                htmlFor="prix-litre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prix au litre (&euro;)
              </label>
              <input
                id="prix-litre"
                type="text"
                inputMode="decimal"
                value={prixLitre}
                onChange={(e) => setPrixLitre(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 1,75"
              />
            </div>
          </>
        )}
      </div>

      {/* --------------- Resultats --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

        {mode === "consommation" ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Consommation
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {formatNumber(resultatConsommation)}&nbsp;L/100km
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Details
                </p>
                <p className="text-sm text-gray-700">
                  {formatNumber(parseInput(volume))} litres pour{" "}
                  {formatNumber(parseInput(distance))} km
                </p>
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-blue-600 text-white rounded-xl p-5">
              <p className="text-sm opacity-90 mb-1">
                Votre vehicule consomme en moyenne
              </p>
              <p className="text-2xl font-bold">
                {formatNumber(resultatConsommation)} litres aux 100 km
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Litres necessaires
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(resultatCout.litresNecessaires)}&nbsp;L
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Cout total
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {formatNumber(resultatCout.coutTotal)}&nbsp;&euro;
                </p>
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-blue-600 text-white rounded-xl p-5">
              <p className="text-sm opacity-90 mb-1">
                {formatNumber(parseInput(distanceCout))} km a{" "}
                {formatNumber(parseInput(consommation))} L/100km (
                {prixLitre} &euro;/L)
              </p>
              <p className="text-2xl font-bold">
                = {formatNumber(resultatCout.coutTotal)} &euro;
              </p>
            </div>
          </>
        )}
      </div>

      {/* --------------- Tableau comparatif --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Tableau comparatif pour {formatNumber(distanceAffichee)}&nbsp;km
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-600">
                  Consommation
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Litres necessaires
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Cout ({prixLitre} &euro;/L)
                </th>
              </tr>
            </thead>
            <tbody>
              {tableComparaison.map((row) => (
                <tr
                  key={row.conso}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-2 font-medium text-gray-800">
                    {row.conso} L/100km
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700">
                    {formatNumber(row.litres)}&nbsp;L
                  </td>
                  <td className="py-3 px-2 text-right text-blue-600 font-semibold">
                    {formatNumber(row.cout)}&nbsp;&euro;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
