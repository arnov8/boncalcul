"use client";

import { useState, useMemo } from "react";

type TypeBien = "ancien" | "neuf";
type TauxDepartement = "standard" | "reduit";

function calculerEmoluments(prix: number): number {
  let emoluments = 0;

  if (prix <= 6500) {
    emoluments = prix * 0.0387;
  } else if (prix <= 17000) {
    emoluments = 6500 * 0.0387 + (prix - 6500) * 0.01596;
  } else if (prix <= 60000) {
    emoluments =
      6500 * 0.0387 +
      (17000 - 6500) * 0.01596 +
      (prix - 17000) * 0.01064;
  } else {
    emoluments =
      6500 * 0.0387 +
      (17000 - 6500) * 0.01596 +
      (60000 - 17000) * 0.01064 +
      (prix - 60000) * 0.00799;
  }

  return emoluments;
}

function calculerDroitsMutation(
  prix: number,
  type: TypeBien,
  tauxDept: TauxDepartement
): { total: number; departement: number; commune: number; etat: number } {
  if (type === "neuf") {
    const taxePub = prix * 0.00715;
    return {
      total: taxePub,
      departement: taxePub,
      commune: 0,
      etat: 0,
    };
  }

  const tauxDepartement = tauxDept === "standard" ? 0.045 : 0.038;
  const tauxCommune = 0.012;
  const tauxEtat = 0.001;

  const departement = prix * tauxDepartement;
  const commune = prix * tauxCommune;
  const etat = prix * tauxEtat;

  return {
    total: departement + commune + etat,
    departement,
    commune,
    etat,
  };
}

function formatEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function CalculNotaire() {
  const [prixAchat, setPrixAchat] = useState<string>("250000");
  const [typeBien, setTypeBien] = useState<TypeBien>("ancien");
  const [tauxDept, setTauxDept] = useState<TauxDepartement>("standard");

  const prix = useMemo(() => {
    const p = parseFloat(prixAchat.replace(/\s/g, ""));
    return isNaN(p) || p < 0 ? 0 : p;
  }, [prixAchat]);

  const resultats = useMemo(() => {
    if (prix === 0) return null;

    const droits = calculerDroitsMutation(prix, typeBien, tauxDept);
    const emoluments = calculerEmoluments(prix);
    const fraisDivers = typeBien === "ancien" ? 1200 : 1000;

    const totalFrais = droits.total + emoluments + fraisDivers;
    const prixTotal = prix + totalFrais;
    const pourcentage = (totalFrais / prix) * 100;

    return {
      droits,
      emoluments,
      fraisDivers,
      totalFrais,
      prixTotal,
      pourcentage,
    };
  }, [prix, typeBien, tauxDept]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Calculer vos frais de notaire
      </h2>

      {/* ---------- Formulaire ---------- */}
      <div className="grid gap-5 sm:grid-cols-2 mb-8">
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
              inputMode="numeric"
              value={prixAchat}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setPrixAchat(val);
              }}
              placeholder="250000"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
        </div>

        {/* Type de bien */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type de bien
          </label>
          <select
            id="type"
            value={typeBien}
            onChange={(e) => setTypeBien(e.target.value as TypeBien)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
          >
            <option value="ancien">Ancien (+ de 5 ans)</option>
            <option value="neuf">Neuf (- de 5 ans / VEFA)</option>
          </select>
        </div>

        {/* Taux département */}
        <div>
          <label
            htmlFor="dept"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Taux du d&eacute;partement
          </label>
          <select
            id="dept"
            value={tauxDept}
            onChange={(e) => setTauxDept(e.target.value as TauxDepartement)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
            disabled={typeBien === "neuf"}
          >
            <option value="standard">
              Taux standard 4,5&nbsp;% (majorit&eacute; des d&eacute;partements)
            </option>
            <option value="reduit">
              Taux r&eacute;duit 3,8&nbsp;% (Indre, Is&egrave;re, Morbihan, Mayotte)
            </option>
          </select>
          {typeBien === "neuf" && (
            <p className="text-xs text-gray-500 mt-1">
              Non applicable pour un bien neuf (taxe de publicit&eacute; fonci&egrave;re de 0,715&nbsp;%).
            </p>
          )}
        </div>
      </div>

      {/* ---------- Résultats ---------- */}
      {resultats && (
        <div className="space-y-6">
          {/* Total */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-1">
              Frais de notaire estim&eacute;s
            </p>
            <p className="text-4xl font-extrabold text-blue-700">
              {formatEuro(resultats.totalFrais)}
            </p>
            <p className="text-sm text-blue-500 mt-1">
              soit {resultats.pourcentage.toFixed(2)}&nbsp;% du prix d&apos;achat
            </p>
          </div>

          {/* Détail */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              D&eacute;tail du calcul
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-600">Droits de mutation</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(resultats.droits.total)}
                </dd>
              </div>
              {typeBien === "ancien" && (
                <>
                  <div className="flex justify-between pl-4">
                    <dt className="text-gray-500">
                      &rarr; Taxe d&eacute;partementale ({tauxDept === "standard" ? "4,5" : "3,8"}&nbsp;%)
                    </dt>
                    <dd className="text-gray-700">
                      {formatEuro(resultats.droits.departement)}
                    </dd>
                  </div>
                  <div className="flex justify-between pl-4">
                    <dt className="text-gray-500">
                      &rarr; Taxe communale (1,2&nbsp;%)
                    </dt>
                    <dd className="text-gray-700">
                      {formatEuro(resultats.droits.commune)}
                    </dd>
                  </div>
                  <div className="flex justify-between pl-4">
                    <dt className="text-gray-500">
                      &rarr; Taxe &Eacute;tat (0,1&nbsp;%)
                    </dt>
                    <dd className="text-gray-700">
                      {formatEuro(resultats.droits.etat)}
                    </dd>
                  </div>
                </>
              )}
              <div className="flex justify-between">
                <dt className="text-gray-600">&Eacute;moluments du notaire</dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(resultats.emoluments)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">
                  Frais divers &amp; d&eacute;bours (forfait)
                </dt>
                <dd className="font-semibold text-gray-900">
                  {formatEuro(resultats.fraisDivers)}
                </dd>
              </div>

              <hr className="border-gray-200" />

              <div className="flex justify-between text-base">
                <dt className="font-semibold text-gray-800">
                  Prix total (bien + frais)
                </dt>
                <dd className="font-bold text-blue-700">
                  {formatEuro(resultats.prixTotal)}
                </dd>
              </div>
            </dl>
          </div>

          {/* Barème émoluments */}
          <details className="bg-gray-50 rounded-xl p-5">
            <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
              Voir le bar&egrave;me des &eacute;moluments du notaire
            </summary>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-600">
                    <th className="py-2 pr-4">Tranche</th>
                    <th className="py-2">Taux</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">0 &agrave; 6 500 &euro;</td>
                    <td className="py-2">3,870&nbsp;%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">6 500 &agrave; 17 000 &euro;</td>
                    <td className="py-2">1,596&nbsp;%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">17 000 &agrave; 60 000 &euro;</td>
                    <td className="py-2">1,064&nbsp;%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Au-del&agrave; de 60 000 &euro;</td>
                    <td className="py-2">0,799&nbsp;%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
