"use client";

import { useState, useMemo } from "react";

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(n: number): string {
  return n.toLocaleString("fr-FR");
}

/* ------------------------------------------------------------------ */
/*  Baremes kilometriques 2026 (base 2025)                            */
/* ------------------------------------------------------------------ */

type Tranche = { max: number; coef: number; flat: number };

const BAREME_VOITURES: Record<string, Tranche[]> = {
  "3CV": [
    { max: 5000, coef: 0.529, flat: 0 },
    { max: 20000, coef: 0.316, flat: 1065 },
    { max: Infinity, coef: 0.370, flat: 0 },
  ],
  "4CV": [
    { max: 5000, coef: 0.606, flat: 0 },
    { max: 20000, coef: 0.340, flat: 1330 },
    { max: Infinity, coef: 0.407, flat: 0 },
  ],
  "5CV": [
    { max: 5000, coef: 0.636, flat: 0 },
    { max: 20000, coef: 0.357, flat: 1395 },
    { max: Infinity, coef: 0.427, flat: 0 },
  ],
  "6CV": [
    { max: 5000, coef: 0.665, flat: 0 },
    { max: 20000, coef: 0.374, flat: 1457 },
    { max: Infinity, coef: 0.447, flat: 0 },
  ],
  "7CV+": [
    { max: 5000, coef: 0.697, flat: 0 },
    { max: 20000, coef: 0.394, flat: 1515 },
    { max: Infinity, coef: 0.470, flat: 0 },
  ],
};

const BAREME_MOTOS: Record<string, Tranche[]> = {
  "1-2CV": [
    { max: 3000, coef: 0.395, flat: 0 },
    { max: 6000, coef: 0.099, flat: 891 },
    { max: Infinity, coef: 0.248, flat: 0 },
  ],
  "3-5CV": [
    { max: 3000, coef: 0.468, flat: 0 },
    { max: 6000, coef: 0.082, flat: 1398 },
    { max: Infinity, coef: 0.275, flat: 0 },
  ],
  ">5CV": [
    { max: 3000, coef: 0.606, flat: 0 },
    { max: 6000, coef: 0.079, flat: 1583 },
    { max: Infinity, coef: 0.343, flat: 0 },
  ],
};

const BAREME_CYCLO: Tranche[] = [
  { max: 3000, coef: 0.315, flat: 0 },
  { max: 6000, coef: 0.079, flat: 711 },
  { max: Infinity, coef: 0.198, flat: 0 },
];

type VehiculeType = "voiture" | "moto" | "cyclomoteur";

const PUISSANCE_OPTIONS: Record<VehiculeType, { value: string; label: string }[]> = {
  voiture: [
    { value: "3CV", label: "3 CV et moins" },
    { value: "4CV", label: "4 CV" },
    { value: "5CV", label: "5 CV" },
    { value: "6CV", label: "6 CV" },
    { value: "7CV+", label: "7 CV et plus" },
  ],
  moto: [
    { value: "1-2CV", label: "1 a 2 CV" },
    { value: "3-5CV", label: "3 a 5 CV" },
    { value: ">5CV", label: "Plus de 5 CV" },
  ],
  cyclomoteur: [],
};

function getBareme(type: VehiculeType, puissance: string): Tranche[] {
  if (type === "cyclomoteur") return BAREME_CYCLO;
  if (type === "moto") return BAREME_MOTOS[puissance] || BAREME_MOTOS["1-2CV"];
  return BAREME_VOITURES[puissance] || BAREME_VOITURES["5CV"];
}

function calcul(d: number, tranches: Tranche[]): { montant: number; trancheIndex: number } {
  for (let i = 0; i < tranches.length; i++) {
    if (d <= tranches[i].max) {
      return {
        montant: d * tranches[i].coef + tranches[i].flat,
        trancheIndex: i,
      };
    }
  }
  const last = tranches[tranches.length - 1];
  return { montant: d * last.coef + last.flat, trancheIndex: tranches.length - 1 };
}

function getFormuleLabel(d: number, tranche: Tranche): string {
  if (tranche.flat === 0) {
    return `d x ${tranche.coef} = ${formatEuro(d * tranche.coef)} euros`;
  }
  return `(d x ${tranche.coef}) + ${formatNumber(tranche.flat)} = ${formatEuro(d * tranche.coef + tranche.flat)} euros`;
}

function getTrancheLabels(type: VehiculeType): string[] {
  if (type === "voiture") {
    return ["d <= 5 000 km", "5 001 a 20 000 km", "d > 20 000 km"];
  }
  return ["d <= 3 000 km", "3 001 a 6 000 km", "d > 6 000 km"];
}

/* ------------------------------------------------------------------ */
/*  Bareme table for expandable details                               */
/* ------------------------------------------------------------------ */

function BaremeTable({ type }: { type: VehiculeType }) {
  const trancheLabels = getTrancheLabels(type);

  if (type === "voiture") {
    const keys = ["3CV", "4CV", "5CV", "6CV", "7CV+"];
    const labels = ["3 CV et moins", "4 CV", "5 CV", "6 CV", "7 CV et plus"];
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border border-gray-200 font-semibold text-gray-700">Puissance</th>
              {trancheLabels.map((l, i) => (
                <th key={i} className="text-left p-2 border border-gray-200 font-semibold text-gray-700">{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys.map((key, i) => (
              <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-2 border border-gray-200 font-medium text-gray-800">{labels[i]}</td>
                {BAREME_VOITURES[key].map((t, j) => (
                  <td key={j} className="p-2 border border-gray-200 text-gray-600">
                    {t.flat === 0
                      ? `d x ${t.coef}`
                      : `(d x ${t.coef}) + ${formatNumber(t.flat)}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === "moto") {
    const keys = ["1-2CV", "3-5CV", ">5CV"];
    const labels = ["1 a 2 CV", "3 a 5 CV", "Plus de 5 CV"];
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border border-gray-200 font-semibold text-gray-700">Puissance</th>
              {trancheLabels.map((l, i) => (
                <th key={i} className="text-left p-2 border border-gray-200 font-semibold text-gray-700">{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys.map((key, i) => (
              <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-2 border border-gray-200 font-medium text-gray-800">{labels[i]}</td>
                {BAREME_MOTOS[key].map((t, j) => (
                  <td key={j} className="p-2 border border-gray-200 text-gray-600">
                    {t.flat === 0
                      ? `d x ${t.coef}`
                      : `(d x ${t.coef}) + ${formatNumber(t.flat)}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // cyclomoteur
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50">
            {trancheLabels.map((l, i) => (
              <th key={i} className="text-left p-2 border border-gray-200 font-semibold text-gray-700">{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            {BAREME_CYCLO.map((t, j) => (
              <td key={j} className="p-2 border border-gray-200 text-gray-600">
                {t.flat === 0
                  ? `d x ${t.coef}`
                  : `(d x ${t.coef}) + ${formatNumber(t.flat)}`}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function CalculFraisKm() {
  const [vehiculeType, setVehiculeType] = useState<VehiculeType>("voiture");
  const [puissance, setPuissance] = useState<string>("5CV");
  const [km, setKm] = useState<string>("12000");
  const [electrique, setElectrique] = useState<boolean>(false);
  const [showBareme, setShowBareme] = useState<boolean>(false);

  // Reset puissance when vehicle type changes
  const handleTypeChange = (type: VehiculeType) => {
    setVehiculeType(type);
    if (type === "voiture") setPuissance("5CV");
    else if (type === "moto") setPuissance("3-5CV");
    else setPuissance("");
  };

  const result = useMemo(() => {
    const d = Math.max(0, Math.round(parseFloat(km.replace(",", ".")) || 0));
    const tranches = getBareme(vehiculeType, puissance);
    const { montant: montantBase, trancheIndex } = calcul(d, tranches);
    const tranche = tranches[trancheIndex];
    const formule = getFormuleLabel(d, tranche);
    const majorationElec = electrique ? montantBase * 0.20 : 0;
    const montantTotal = montantBase + majorationElec;
    const economieImpot = montantTotal * 0.30;

    return {
      d,
      montantBase,
      majorationElec,
      montantTotal,
      economieImpot,
      formule,
      trancheIndex,
      tranches,
    };
  }, [vehiculeType, puissance, km, electrique]);

  const typeLabel =
    vehiculeType === "voiture"
      ? "Voiture"
      : vehiculeType === "moto"
        ? "Moto > 50 cm3"
        : "Cyclomoteur < 50 cm3";

  const puissanceLabel =
    vehiculeType === "cyclomoteur"
      ? "Barème unique"
      : PUISSANCE_OPTIONS[vehiculeType].find((o) => o.value === puissance)?.label || puissance;

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur de frais kilometriques
        </h2>

        {/* Type de vehicule */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Type de vehicule
          </legend>
          <select
            id="vehiculeType"
            value={vehiculeType}
            onChange={(e) => handleTypeChange(e.target.value as VehiculeType)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="voiture">Voiture</option>
            <option value="moto">Moto (&gt; 50 cm3)</option>
            <option value="cyclomoteur">Cyclomoteur (&lt; 50 cm3)</option>
          </select>
        </fieldset>

        {/* Puissance fiscale */}
        {vehiculeType !== "cyclomoteur" && (
          <fieldset className="mb-6">
            <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
              Puissance fiscale
            </legend>
            <select
              id="puissance"
              value={puissance}
              onChange={(e) => setPuissance(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            >
              {PUISSANCE_OPTIONS[vehiculeType].map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </fieldset>
        )}

        {/* Kilometres */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Distance annuelle
          </legend>
          <div>
            <label
              htmlFor="km"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Kilometres parcourus dans l&apos;annee
            </label>
            <input
              id="km"
              type="text"
              inputMode="numeric"
              value={km}
              onChange={(e) => setKm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ex : 12000"
            />
          </div>
        </fieldset>

        {/* Vehicule electrique */}
        <fieldset>
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Vehicule electrique
          </legend>
          <button
            type="button"
            role="switch"
            aria-checked={electrique}
            onClick={() => setElectrique(!electrique)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              electrique ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${
                electrique ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span className="ml-3 text-sm text-gray-700">
            {electrique ? "Oui (majoration 20 %)" : "Non"}
          </span>
        </fieldset>
      </div>

      {/* --------------- Resultat principal --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

        {/* Big highlight */}
        <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
          <p className="text-sm opacity-90 mb-1">
            Montant deductible des frais kilometriques
          </p>
          <p className="text-2xl md:text-3xl font-bold">
            {formatEuro(result.montantTotal)}&nbsp;&euro;
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
            <span className="text-gray-600">Type de vehicule</span>
            <span className="font-medium text-gray-800">{typeLabel}</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
            <span className="text-gray-600">Puissance fiscale</span>
            <span className="font-medium text-gray-800">{puissanceLabel}</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
            <span className="text-gray-600">Distance annuelle</span>
            <span className="font-medium text-gray-800">{formatNumber(result.d)} km</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
            <span className="text-gray-600">Formule appliquee</span>
            <span className="font-medium text-gray-800 text-right">{result.formule}</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
            <span className="text-gray-600">Montant de base</span>
            <span className="font-medium text-gray-800">{formatEuro(result.montantBase)} &euro;</span>
          </div>
          {electrique && (
            <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-600">Majoration electrique (+20 %)</span>
              <span className="font-medium text-green-600">+{formatEuro(result.majorationElec)} &euro;</span>
            </div>
          )}
          <div className="flex items-center justify-between text-sm py-2 border-b border-gray-200">
            <span className="font-semibold text-gray-800">Montant total deductible</span>
            <span className="font-bold text-blue-600 text-lg">{formatEuro(result.montantTotal)} &euro;</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2">
            <span className="text-gray-600">Economie d&apos;impot estimee (TMI 30 %)</span>
            <span className="font-medium text-emerald-600">{formatEuro(result.economieImpot)} &euro;</span>
          </div>
        </div>

        {/* Expandable bareme table */}
        <details className="mb-6">
          <summary
            className="cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              setShowBareme(!showBareme);
            }}
          >
            <span className={`transition-transform inline-block ${showBareme ? "rotate-90" : ""}`}>&#9654;</span>
            Voir le bareme complet ({typeLabel.toLowerCase()})
          </summary>
        </details>
        {showBareme && (
          <div className="mb-6">
            <BaremeTable type={vehiculeType} />
            {electrique && (
              <p className="text-xs text-gray-500 mt-2">
                * Vehicule electrique : majoration de 20 % sur le montant obtenu.
              </p>
            )}
          </div>
        )}

        {/* Comparison box */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h4 className="text-sm font-bold text-gray-800 mb-3">
            Comparaison : frais reels vs abattement 10 %
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            L&apos;abattement forfaitaire de 10 % est applique automatiquement.
            Indiquez votre salaire net imposable pour comparer.
          </p>
          <SalaireComparison montantFraisKm={result.montantTotal} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sous-composant comparaison                                        */
/* ------------------------------------------------------------------ */

function SalaireComparison({ montantFraisKm }: { montantFraisKm: number }) {
  const [salaire, setSalaire] = useState<string>("30000");

  const salaireNum = Math.max(0, parseFloat(salaire.replace(",", ".")) || 0);
  const abattement10 = Math.min(salaireNum * 0.1, 14171);
  const fraisReelsAvantage = montantFraisKm > abattement10;

  return (
    <div>
      <div className="mb-3">
        <label
          htmlFor="salaireComparaison"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Salaire net imposable annuel (euros)
        </label>
        <input
          id="salaireComparaison"
          type="text"
          inputMode="numeric"
          value={salaire}
          onChange={(e) => setSalaire(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder="Ex : 30000"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className={`rounded-lg p-4 text-center border-2 ${
            fraisReelsAvantage
              ? "border-green-500 bg-green-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            Frais reels (km)
          </p>
          <p className="text-lg font-bold text-gray-900">
            {formatEuro(montantFraisKm)} &euro;
          </p>
          {fraisReelsAvantage && (
            <span className="inline-block mt-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full px-2 py-0.5">
              Plus avantageux
            </span>
          )}
        </div>
        <div
          className={`rounded-lg p-4 text-center border-2 ${
            !fraisReelsAvantage
              ? "border-green-500 bg-green-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            Abattement 10 %
          </p>
          <p className="text-lg font-bold text-gray-900">
            {formatEuro(abattement10)} &euro;
          </p>
          {!fraisReelsAvantage && (
            <span className="inline-block mt-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full px-2 py-0.5">
              Plus avantageux
            </span>
          )}
        </div>
      </div>

      {fraisReelsAvantage ? (
        <p className="text-xs text-green-700 mt-2">
          Vos frais kilometriques seuls ({formatEuro(montantFraisKm)} &euro;) depassent deja
          l&apos;abattement de 10 % ({formatEuro(abattement10)} &euro;).
          L&apos;option frais reels est avantageuse, sans compter les autres frais deductibles (repas, etc.).
        </p>
      ) : (
        <p className="text-xs text-gray-500 mt-2">
          Vos frais kilometriques ({formatEuro(montantFraisKm)} &euro;) sont inferieurs a
          l&apos;abattement de 10 % ({formatEuro(abattement10)} &euro;).
          L&apos;option frais reels peut rester avantageuse si vous ajoutez d&apos;autres frais (repas, formation...).
        </p>
      )}
    </div>
  );
}
