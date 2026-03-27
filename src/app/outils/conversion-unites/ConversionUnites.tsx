"use client";

import { useState, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Category =
  | "longueur"
  | "masse"
  | "volume"
  | "temperature"
  | "surface"
  | "vitesse";

interface UnitDef {
  label: string;
  symbol: string;
  /** Factor to convert TO the base unit (multiply). Ignored for temperature. */
  toBase: number;
}

interface CategoryDef {
  label: string;
  baseUnit: string;
  units: UnitDef[];
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const CATEGORIES: Record<Category, CategoryDef> = {
  longueur: {
    label: "Longueur",
    baseUnit: "m",
    units: [
      { label: "Millimetres", symbol: "mm", toBase: 0.001 },
      { label: "Centimetres", symbol: "cm", toBase: 0.01 },
      { label: "Metres", symbol: "m", toBase: 1 },
      { label: "Kilometres", symbol: "km", toBase: 1000 },
      { label: "Pouces", symbol: "in", toBase: 0.0254 },
      { label: "Pieds", symbol: "ft", toBase: 0.3048 },
      { label: "Yards", symbol: "yd", toBase: 0.9144 },
      { label: "Miles", symbol: "mi", toBase: 1609.344 },
    ],
  },
  masse: {
    label: "Masse",
    baseUnit: "kg",
    units: [
      { label: "Milligrammes", symbol: "mg", toBase: 0.000001 },
      { label: "Grammes", symbol: "g", toBase: 0.001 },
      { label: "Kilogrammes", symbol: "kg", toBase: 1 },
      { label: "Tonnes", symbol: "t", toBase: 1000 },
      { label: "Onces", symbol: "oz", toBase: 0.0283495 },
      { label: "Livres", symbol: "lb", toBase: 0.453592 },
    ],
  },
  volume: {
    label: "Volume",
    baseUnit: "L",
    units: [
      { label: "Millilitres", symbol: "mL", toBase: 0.001 },
      { label: "Centilitres", symbol: "cL", toBase: 0.01 },
      { label: "Litres", symbol: "L", toBase: 1 },
      { label: "Metres cubes", symbol: "m³", toBase: 1000 },
      { label: "Gallons US", symbol: "gal", toBase: 3.78541 },
      { label: "Cups", symbol: "cup", toBase: 0.236588 },
    ],
  },
  temperature: {
    label: "Temperature",
    baseUnit: "°C",
    units: [
      { label: "Celsius", symbol: "°C", toBase: 1 },
      { label: "Fahrenheit", symbol: "°F", toBase: 1 },
      { label: "Kelvin", symbol: "K", toBase: 1 },
    ],
  },
  surface: {
    label: "Surface",
    baseUnit: "m²",
    units: [
      { label: "Millimetres carres", symbol: "mm²", toBase: 0.000001 },
      { label: "Centimetres carres", symbol: "cm²", toBase: 0.0001 },
      { label: "Metres carres", symbol: "m²", toBase: 1 },
      { label: "Kilometres carres", symbol: "km²", toBase: 1000000 },
      { label: "Hectares", symbol: "ha", toBase: 10000 },
      { label: "Acres", symbol: "ac", toBase: 4046.8564224 },
    ],
  },
  vitesse: {
    label: "Vitesse",
    baseUnit: "m/s",
    units: [
      { label: "Metres par seconde", symbol: "m/s", toBase: 1 },
      { label: "Kilometres par heure", symbol: "km/h", toBase: 1 / 3.6 },
      { label: "Miles par heure", symbol: "mph", toBase: 0.44704 },
      { label: "Noeuds", symbol: "kn", toBase: 0.514444 },
    ],
  },
};

const CATEGORY_KEYS: Category[] = [
  "longueur",
  "masse",
  "volume",
  "temperature",
  "surface",
  "vitesse",
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatNumber(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPrecise(n: number): string {
  if (Math.abs(n) >= 1) {
    return n.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    });
  }
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 10,
  });
}

function parseInput(value: string): number {
  return parseFloat(value.replace(",", ".")) || 0;
}

/** Temperature conversions use special formulas. */
function toBaseTemp(value: number, symbol: string): number {
  switch (symbol) {
    case "°C":
      return value;
    case "°F":
      return (value - 32) * (5 / 9);
    case "K":
      return value - 273.15;
    default:
      return value;
  }
}

function fromBaseTemp(celsius: number, symbol: string): number {
  switch (symbol) {
    case "°C":
      return celsius;
    case "°F":
      return celsius * (9 / 5) + 32;
    case "K":
      return celsius + 273.15;
    default:
      return celsius;
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ConversionUnites() {
  const [category, setCategory] = useState<Category>("longueur");
  const [fromUnit, setFromUnit] = useState<string>("km");
  const [toUnit, setToUnit] = useState<string>("mi");
  const [inputValue, setInputValue] = useState<string>("1");

  const cat = CATEGORIES[category];

  /* When category changes, reset to first two units */
  function handleCategoryChange(newCat: Category) {
    setCategory(newCat);
    const units = CATEGORIES[newCat].units;
    setFromUnit(units[0].symbol);
    setToUnit(units.length > 1 ? units[1].symbol : units[0].symbol);
    setInputValue("1");
  }

  function handleSwap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  const result = useMemo(() => {
    const value = parseInput(inputValue);

    if (category === "temperature") {
      const celsius = toBaseTemp(value, fromUnit);
      return fromBaseTemp(celsius, toUnit);
    }

    const from = cat.units.find((u) => u.symbol === fromUnit);
    const to = cat.units.find((u) => u.symbol === toUnit);
    if (!from || !to) return 0;

    const baseValue = value * from.toBase;
    return baseValue / to.toBase;
  }, [inputValue, fromUnit, toUnit, category, cat.units]);

  const fromUnitDef = cat.units.find((u) => u.symbol === fromUnit);
  const toUnitDef = cat.units.find((u) => u.symbol === toUnit);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Convertisseur d'unites
        </h2>

        {/* Category Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  category === key
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {CATEGORIES[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Conversion inputs */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-2">
            Saisissez une valeur et selectionnez les unites source et cible.
          </p>

          {/* From */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="conv-value"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Valeur
              </label>
              <input
                id="conv-value"
                type="text"
                inputMode="decimal"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 1"
              />
            </div>
            <div>
              <label
                htmlFor="conv-from"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Unite source
              </label>
              <select
                id="conv-from"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              >
                {cat.units.map((u) => (
                  <option key={u.symbol} value={u.symbol}>
                    {u.label} ({u.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwap}
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition"
              aria-label="Inverser les unites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              Inverser
            </button>
          </div>

          {/* To */}
          <div>
            <label
              htmlFor="conv-to"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Unite cible
            </label>
            <select
              id="conv-to"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            >
              {cat.units.map((u) => (
                <option key={u.symbol} value={u.symbol}>
                  {u.label} ({u.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* --------------- Resultat --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Valeur source
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              {formatNumber(parseInput(inputValue))}{" "}
              <span className="text-base font-medium text-gray-500">
                {fromUnitDef?.symbol}
              </span>
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              Resultat
            </p>
            <p className="text-xl md:text-2xl font-bold text-blue-700">
              {formatPrecise(result)}{" "}
              <span className="text-base font-medium text-blue-500">
                {toUnitDef?.symbol}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-xl p-5">
          <p className="text-sm opacity-90 mb-1">
            {formatNumber(parseInput(inputValue))} {fromUnitDef?.symbol} =
          </p>
          <p className="text-xl md:text-2xl font-bold">
            {formatPrecise(result)} {toUnitDef?.symbol}
          </p>
        </div>
      </div>

      {/* --------------- Tableau de reference --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Conversions rapides ({CATEGORIES[category].label})
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-600">
                  De ({fromUnitDef?.symbol})
                </th>
                <th className="text-right py-3 px-2 font-semibold text-gray-600">
                  Vers ({toUnitDef?.symbol})
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 5, 10, 25, 50, 100, 500, 1000].map((val) => {
                let converted: number;
                if (category === "temperature") {
                  const celsius = toBaseTemp(val, fromUnit);
                  converted = fromBaseTemp(celsius, toUnit);
                } else {
                  const from = cat.units.find((u) => u.symbol === fromUnit);
                  const to = cat.units.find((u) => u.symbol === toUnit);
                  converted =
                    from && to ? (val * from.toBase) / to.toBase : 0;
                }
                return (
                  <tr
                    key={val}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-2 font-medium text-gray-800">
                      {formatNumber(val)} {fromUnitDef?.symbol}
                    </td>
                    <td className="py-3 px-2 text-right text-blue-600 font-semibold">
                      {formatPrecise(converted)} {toUnitDef?.symbol}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
