"use client";

import { useState, useMemo } from "react";

type Statut = "non-cadre" | "cadre";

const SMIC_MENSUEL_BRUT = 1801.80; // SMIC 2026

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPct(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface ChargeDetail {
  label: string;
  taux: number;
  montant: number;
}

export default function CoutSalarie() {
  const [statut, setStatut] = useState<Statut>("non-cadre");
  const [salaireBrut, setSalaireBrut] = useState<string>("2 500");

  const parseInput = (val: string) =>
    parseFloat(val.replace(/\s/g, "").replace(",", ".")) || 0;

  const resultats = useMemo(() => {
    const brut = parseInput(salaireBrut);
    if (brut <= 0) return null;

    const seuil25Smic = 2.5 * SMIC_MENSUEL_BRUT;
    const seuil35Smic = 3.5 * SMIC_MENSUEL_BRUT;

    const charges: ChargeDetail[] = [];

    // Securite sociale maladie
    const tauxMaladie = 7.0;
    const montantMaladie = brut * (tauxMaladie / 100);
    // Deduction forfaitaire si brut < 2.5 SMIC
    const deductionMaladie = brut < seuil25Smic ? brut * (6.0 / 100) : 0;
    charges.push({
      label: "Securite sociale maladie",
      taux: tauxMaladie,
      montant: montantMaladie - deductionMaladie,
    });

    // Vieillesse plafonnee
    charges.push({
      label: "Vieillesse plafonnee",
      taux: 8.55,
      montant: brut * (8.55 / 100),
    });

    // Vieillesse deplafonnee
    charges.push({
      label: "Vieillesse deplafonnee",
      taux: 2.02,
      montant: brut * (2.02 / 100),
    });

    // Allocations familiales
    const tauxAF = brut < seuil35Smic ? 3.45 : 5.25;
    charges.push({
      label: "Allocations familiales",
      taux: tauxAF,
      montant: brut * (tauxAF / 100),
    });

    // Accidents du travail
    charges.push({
      label: "Accidents du travail",
      taux: 1.5,
      montant: brut * (1.5 / 100),
    });

    // FNAL
    charges.push({
      label: "FNAL",
      taux: 0.5,
      montant: brut * (0.5 / 100),
    });

    // Chomage
    charges.push({
      label: "Chomage",
      taux: 4.05,
      montant: brut * (4.05 / 100),
    });

    // Retraite complementaire
    const tauxRetraite = statut === "cadre" ? 12.95 : 7.87;
    charges.push({
      label: "Retraite complementaire (T1)",
      taux: tauxRetraite,
      montant: brut * (tauxRetraite / 100),
    });

    // Prevoyance cadre
    if (statut === "cadre") {
      charges.push({
        label: "Prevoyance cadre",
        taux: 1.5,
        montant: brut * (1.5 / 100),
      });
    }

    // CEG
    charges.push({
      label: "CEG",
      taux: 2.15,
      montant: brut * (2.15 / 100),
    });

    // Mutuelle (forfait)
    charges.push({
      label: "Mutuelle (part employeur)",
      taux: 0,
      montant: 50,
    });

    // CSA
    charges.push({
      label: "Contribution solidarite autonomie (CSA)",
      taux: 0.3,
      montant: brut * (0.3 / 100),
    });

    // Formation
    charges.push({
      label: "Formation professionnelle",
      taux: 1.0,
      montant: brut * (1.0 / 100),
    });

    // Taxe apprentissage
    charges.push({
      label: "Taxe d\u2019apprentissage",
      taux: 0.68,
      montant: brut * (0.68 / 100),
    });

    const totalCharges = charges.reduce((sum, c) => sum + c.montant, 0);
    const coutTotal = brut + totalCharges;
    const ratio = brut > 0 ? coutTotal / brut : 0;

    return { brut, charges, totalCharges, coutTotal, ratio };
  }, [salaireBrut, statut]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculateur du cout d&apos;un salarie pour l&apos;employeur
        </h2>

        {/* Toggle statut */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Statut du salarie
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => setStatut("non-cadre")}
              className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                statut === "non-cadre"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Non-cadre
            </button>
            <button
              onClick={() => setStatut("cadre")}
              className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                statut === "cadre"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Cadre
            </button>
          </div>
        </div>

        {/* Salaire brut */}
        <div className="mb-5">
          <label
            htmlFor="salaire-brut"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salaire brut mensuel (&euro;)
          </label>
          <input
            id="salaire-brut"
            type="text"
            inputMode="decimal"
            value={salaireBrut}
            onChange={(e) => setSalaireBrut(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 2 500"
          />
        </div>
      </div>

      {/* --------------- Resultats --------------- */}
      {resultats && (
        <>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Salaire brut mensuel
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatEuro(resultats.brut)}&nbsp;&euro;
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Total charges patronales
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {formatEuro(resultats.totalCharges)}&nbsp;&euro;
                </p>
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
              <p className="text-sm opacity-90 mb-1">
                Cout total employeur (&laquo;&nbsp;super brut&nbsp;&raquo;)
              </p>
              <p className="text-2xl font-bold">
                {formatEuro(resultats.coutTotal)}&nbsp;&euro; / mois
              </p>
              <p className="text-sm opacity-90 mt-2">
                Ratio cout / brut : x{formatPct(resultats.ratio)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Cout annuel employeur
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatEuro(resultats.coutTotal * 12)}&nbsp;&euro;
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Charges annuelles
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatEuro(resultats.totalCharges * 12)}&nbsp;&euro;
                </p>
              </div>
            </div>
          </div>

          {/* --------------- Detail des charges --------------- */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Detail des charges patronales
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-600">
                      Charge
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-600">
                      Taux
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-600">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultats.charges.map((c, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-2 font-medium text-gray-800">
                        {c.label}
                      </td>
                      <td className="py-3 px-2 text-right text-gray-700">
                        {c.taux > 0 ? `${formatPct(c.taux)} %` : "Forfait"}
                      </td>
                      <td className="py-3 px-2 text-right text-blue-600 font-semibold">
                        {formatEuro(c.montant)}&nbsp;&euro;
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-300">
                    <td className="py-3 px-2 font-bold text-gray-900">
                      Total charges patronales
                    </td>
                    <td className="py-3 px-2"></td>
                    <td className="py-3 px-2 text-right font-bold text-blue-700">
                      {formatEuro(resultats.totalCharges)}&nbsp;&euro;
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
