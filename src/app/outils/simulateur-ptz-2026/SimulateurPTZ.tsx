"use client";

import { useState, useMemo } from "react";

type Zone = "Abis" | "A" | "B1" | "B2" | "C";
type TypeBien = "neuf" | "ancien-avec-travaux";

const ZONE_LABELS: Record<Zone, string> = {
  Abis: "A bis",
  A: "A",
  B1: "B1",
  B2: "B2",
  C: "C",
};

// Plafonds de ressources par zone et nombre de personnes (index 0 = 1 pers, ..., index 7 = 8+ pers)
const PLAFONDS_RESSOURCES: Record<Zone, number[]> = {
  Abis: [49000, 73500, 88200, 105600, 122400, 139200, 156000, 172800],
  A: [49000, 73500, 88200, 105600, 122400, 139200, 156000, 172800],
  B1: [34500, 51750, 62100, 74400, 86250, 98100, 109950, 121800],
  B2: [31500, 47250, 56700, 67800, 78600, 89400, 100200, 111000],
  C: [28500, 42750, 51300, 61350, 71100, 80850, 90600, 100350],
};

// Quotite (%) du prix finance par le PTZ selon zone et type de bien
const QUOTITES: Record<Zone, Record<TypeBien, number>> = {
  Abis: { neuf: 0.5, "ancien-avec-travaux": 0.4 },
  A: { neuf: 0.5, "ancien-avec-travaux": 0.4 },
  B1: { neuf: 0.4, "ancien-avec-travaux": 0.4 },
  B2: { neuf: 0.2, "ancien-avec-travaux": 0.2 },
  C: { neuf: 0.2, "ancien-avec-travaux": 0.2 },
};

// Plafonds d'operation par zone et nombre de personnes
const PLAFONDS_OPERATION: Record<Zone, number[]> = {
  Abis: [150000, 210000, 255000, 300000, 345000, 390000, 435000, 480000],
  A: [150000, 210000, 255000, 300000, 345000, 390000, 435000, 480000],
  B1: [135000, 189000, 230000, 270000, 311000, 351000, 392000, 432000],
  B2: [110000, 154000, 187000, 220000, 253000, 286000, 319000, 352000],
  C: [100000, 140000, 170000, 200000, 230000, 260000, 290000, 320000],
};

function formatEuro(n: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SimulateurPTZ() {
  const [revenu, setRevenu] = useState<string>("35000");
  const [nbPersonnes, setNbPersonnes] = useState<number>(2);
  const [zone, setZone] = useState<Zone>("B1");
  const [typeBien, setTypeBien] = useState<TypeBien>("neuf");
  const [prixBien, setPrixBien] = useState<string>("250000");

  const resultats = useMemo(() => {
    const rev = parseFloat(revenu);
    const prix = parseFloat(prixBien);

    if (!rev || rev <= 0 || !prix || prix <= 0) return null;

    const indexPersonnes = Math.min(nbPersonnes, 8) - 1;
    const plafondRessources = PLAFONDS_RESSOURCES[zone][indexPersonnes];
    const eligible = rev <= plafondRessources;
    const quotite = QUOTITES[zone][typeBien];
    const plafondOperation = PLAFONDS_OPERATION[zone][indexPersonnes];

    // Le montant pris en compte est le minimum entre le prix reel et le plafond d'operation
    const montantRetenu = Math.min(prix, plafondOperation);
    const montantPTZ = Math.round(montantRetenu * quotite);

    // Economie d'interets estimee : montant PTZ * taux moyen 3.3% * 15 ans (simplifie)
    const tauxMoyen = 0.033;
    const dureeEstimee = 15;
    const economieInterets = Math.round(montantPTZ * tauxMoyen * dureeEstimee);

    // Mensualite equivalente economisee (economie / duree en mois)
    const mensualiteEconomisee = Math.round(economieInterets / (dureeEstimee * 12));

    return {
      eligible,
      plafondRessources,
      quotite,
      plafondOperation,
      montantRetenu,
      montantPTZ,
      economieInterets,
      mensualiteEconomisee,
      zone,
      typeBien,
    };
  }, [revenu, nbPersonnes, zone, typeBien, prixBien]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Simulateur Pret a Taux Zero 2026
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 mb-8">
        {/* Revenu fiscal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Revenu fiscal de reference du foyer
          </label>
          <div className="relative">
            <input
              type="number"
              value={revenu}
              onChange={(e) => setRevenu(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="35000"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
        </div>

        {/* Nombre de personnes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre de personnes dans le foyer
          </label>
          <select
            value={nbPersonnes}
            onChange={(e) => setNbPersonnes(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "personne" : "personnes"}
              </option>
            ))}
          </select>
        </div>

        {/* Zone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zone geographique
          </label>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value as Zone)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            {(Object.keys(ZONE_LABELS) as Zone[]).map((z) => (
              <option key={z} value={z}>
                Zone {ZONE_LABELS[z]}
              </option>
            ))}
          </select>
        </div>

        {/* Type de bien */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de bien
          </label>
          <select
            value={typeBien}
            onChange={(e) => setTypeBien(e.target.value as TypeBien)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            <option value="neuf">Neuf</option>
            <option value="ancien-avec-travaux">Ancien avec travaux</option>
          </select>
        </div>

        {/* Prix du bien */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prix du bien immobilier
          </label>
          <div className="relative">
            <input
              type="number"
              value={prixBien}
              onChange={(e) => setPrixBien(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="250000"
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
        <div className="space-y-5">
          {/* Eligibilite */}
          {resultats.eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-800 font-bold text-lg">
                Vous etes eligible au PTZ 2026
              </p>
              <p className="text-green-600 text-sm mt-1">
                Votre revenu fiscal ({formatEuro(parseFloat(revenu))}) est
                inferieur au plafond de {formatEuro(resultats.plafondRessources)}{" "}
                en zone {ZONE_LABELS[resultats.zone]} pour {nbPersonnes}{" "}
                {nbPersonnes === 1 ? "personne" : "personnes"}.
              </p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
              <p className="text-red-800 font-bold text-lg">
                Vous n&apos;etes pas eligible au PTZ 2026
              </p>
              <p className="text-red-600 text-sm mt-1">
                Votre revenu fiscal ({formatEuro(parseFloat(revenu))}) depasse
                le plafond de {formatEuro(resultats.plafondRessources)} en zone{" "}
                {ZONE_LABELS[resultats.zone]} pour {nbPersonnes}{" "}
                {nbPersonnes === 1 ? "personne" : "personnes"}.
              </p>
            </div>
          )}

          {/* Montant PTZ */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-sm text-blue-600 font-medium mb-1">
              Montant PTZ estime
            </p>
            <p className="text-3xl md:text-4xl font-bold text-blue-700">
              {formatEuro(resultats.montantPTZ)}
            </p>
            {!resultats.eligible && (
              <p className="text-xs text-blue-500 mt-2">
                Montant indicatif si vous etiez eligible
              </p>
            )}
          </div>

          {/* Detail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Zone geographique
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                Zone {ZONE_LABELS[resultats.zone]}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Plafond de ressources
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEuro(resultats.plafondRessources)}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Quotite appliquee
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {Math.round(resultats.quotite * 100)} %
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Plafond d&apos;operation
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEuro(resultats.plafondOperation)}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Economie d&apos;interets estimee
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEuro(resultats.economieInterets)}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                base : taux moyen 3,3 % sur 15 ans
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium">
                Mensualite equivalente economisee
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {formatEuro(resultats.mensualiteEconomisee)}
                <span className="text-sm font-normal text-gray-500"> /mois</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
