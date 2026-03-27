"use client";

import { useState, useMemo } from "react";

type TypeBien = "ancien" | "neuf";

interface Departement {
  code: string;
  nom: string;
  taux: number;
}

const DEPARTEMENTS: Departement[] = [
  { code: "01", nom: "Ain", taux: 4.50 },
  { code: "02", nom: "Aisne", taux: 4.50 },
  { code: "03", nom: "Allier", taux: 4.50 },
  { code: "04", nom: "Alpes-de-Haute-Provence", taux: 4.50 },
  { code: "05", nom: "Hautes-Alpes", taux: 4.50 },
  { code: "06", nom: "Alpes-Maritimes", taux: 4.50 },
  { code: "07", nom: "Ard\u00e8che", taux: 4.50 },
  { code: "08", nom: "Ardennes", taux: 4.50 },
  { code: "09", nom: "Ari\u00e8ge", taux: 4.50 },
  { code: "10", nom: "Aube", taux: 4.50 },
  { code: "11", nom: "Aude", taux: 4.50 },
  { code: "12", nom: "Aveyron", taux: 4.50 },
  { code: "13", nom: "Bouches-du-Rh\u00f4ne", taux: 4.50 },
  { code: "14", nom: "Calvados", taux: 4.50 },
  { code: "15", nom: "Cantal", taux: 4.50 },
  { code: "16", nom: "Charente", taux: 4.50 },
  { code: "17", nom: "Charente-Maritime", taux: 4.50 },
  { code: "18", nom: "Cher", taux: 4.50 },
  { code: "19", nom: "Corr\u00e8ze", taux: 4.50 },
  { code: "2A", nom: "Corse-du-Sud", taux: 4.50 },
  { code: "2B", nom: "Haute-Corse", taux: 4.50 },
  { code: "21", nom: "C\u00f4te-d'Or", taux: 4.50 },
  { code: "22", nom: "C\u00f4tes-d'Armor", taux: 4.50 },
  { code: "23", nom: "Creuse", taux: 4.50 },
  { code: "24", nom: "Dordogne", taux: 4.50 },
  { code: "25", nom: "Doubs", taux: 4.50 },
  { code: "26", nom: "Dr\u00f4me", taux: 4.50 },
  { code: "27", nom: "Eure", taux: 4.50 },
  { code: "28", nom: "Eure-et-Loir", taux: 4.50 },
  { code: "29", nom: "Finist\u00e8re", taux: 4.50 },
  { code: "30", nom: "Gard", taux: 4.50 },
  { code: "31", nom: "Haute-Garonne", taux: 4.50 },
  { code: "32", nom: "Gers", taux: 4.50 },
  { code: "33", nom: "Gironde", taux: 4.50 },
  { code: "34", nom: "H\u00e9rault", taux: 4.50 },
  { code: "35", nom: "Ille-et-Vilaine", taux: 4.50 },
  { code: "36", nom: "Indre", taux: 3.80 },
  { code: "37", nom: "Indre-et-Loire", taux: 4.50 },
  { code: "38", nom: "Is\u00e8re", taux: 3.80 },
  { code: "39", nom: "Jura", taux: 4.50 },
  { code: "40", nom: "Landes", taux: 4.50 },
  { code: "41", nom: "Loir-et-Cher", taux: 4.50 },
  { code: "42", nom: "Loire", taux: 4.50 },
  { code: "43", nom: "Haute-Loire", taux: 4.50 },
  { code: "44", nom: "Loire-Atlantique", taux: 4.50 },
  { code: "45", nom: "Loiret", taux: 4.50 },
  { code: "46", nom: "Lot", taux: 4.50 },
  { code: "47", nom: "Lot-et-Garonne", taux: 4.50 },
  { code: "48", nom: "Loz\u00e8re", taux: 4.50 },
  { code: "49", nom: "Maine-et-Loire", taux: 4.50 },
  { code: "50", nom: "Manche", taux: 4.50 },
  { code: "51", nom: "Marne", taux: 4.50 },
  { code: "52", nom: "Haute-Marne", taux: 4.50 },
  { code: "53", nom: "Mayenne", taux: 4.50 },
  { code: "54", nom: "Meurthe-et-Moselle", taux: 4.50 },
  { code: "55", nom: "Meuse", taux: 4.50 },
  { code: "56", nom: "Morbihan", taux: 3.80 },
  { code: "57", nom: "Moselle", taux: 4.50 },
  { code: "58", nom: "Ni\u00e8vre", taux: 4.50 },
  { code: "59", nom: "Nord", taux: 4.50 },
  { code: "60", nom: "Oise", taux: 4.50 },
  { code: "61", nom: "Orne", taux: 4.50 },
  { code: "62", nom: "Pas-de-Calais", taux: 4.50 },
  { code: "63", nom: "Puy-de-D\u00f4me", taux: 4.50 },
  { code: "64", nom: "Pyr\u00e9n\u00e9es-Atlantiques", taux: 4.50 },
  { code: "65", nom: "Hautes-Pyr\u00e9n\u00e9es", taux: 4.50 },
  { code: "66", nom: "Pyr\u00e9n\u00e9es-Orientales", taux: 4.50 },
  { code: "67", nom: "Bas-Rhin", taux: 4.50 },
  { code: "68", nom: "Haut-Rhin", taux: 4.50 },
  { code: "69", nom: "Rh\u00f4ne", taux: 4.50 },
  { code: "70", nom: "Haute-Sa\u00f4ne", taux: 4.50 },
  { code: "71", nom: "Sa\u00f4ne-et-Loire", taux: 4.50 },
  { code: "72", nom: "Sarthe", taux: 4.50 },
  { code: "73", nom: "Savoie", taux: 4.50 },
  { code: "74", nom: "Haute-Savoie", taux: 4.50 },
  { code: "75", nom: "Paris", taux: 4.50 },
  { code: "76", nom: "Seine-Maritime", taux: 4.50 },
  { code: "77", nom: "Seine-et-Marne", taux: 4.50 },
  { code: "78", nom: "Yvelines", taux: 4.50 },
  { code: "79", nom: "Deux-S\u00e8vres", taux: 4.50 },
  { code: "80", nom: "Somme", taux: 4.50 },
  { code: "81", nom: "Tarn", taux: 4.50 },
  { code: "82", nom: "Tarn-et-Garonne", taux: 4.50 },
  { code: "83", nom: "Var", taux: 4.50 },
  { code: "84", nom: "Vaucluse", taux: 4.50 },
  { code: "85", nom: "Vend\u00e9e", taux: 4.50 },
  { code: "86", nom: "Vienne", taux: 4.50 },
  { code: "87", nom: "Haute-Vienne", taux: 4.50 },
  { code: "88", nom: "Vosges", taux: 4.50 },
  { code: "89", nom: "Yonne", taux: 4.50 },
  { code: "90", nom: "Territoire de Belfort", taux: 4.50 },
  { code: "91", nom: "Essonne", taux: 4.50 },
  { code: "92", nom: "Hauts-de-Seine", taux: 4.50 },
  { code: "93", nom: "Seine-Saint-Denis", taux: 4.50 },
  { code: "94", nom: "Val-de-Marne", taux: 4.50 },
  { code: "95", nom: "Val-d'Oise", taux: 4.50 },
  { code: "971", nom: "Guadeloupe", taux: 4.50 },
  { code: "972", nom: "Martinique", taux: 4.50 },
  { code: "973", nom: "Guyane", taux: 4.50 },
  { code: "974", nom: "R\u00e9union", taux: 4.50 },
  { code: "976", nom: "Mayotte", taux: 3.80 },
];

function getDepartement(code: string): Departement {
  return DEPARTEMENTS.find((d) => d.code === code) ?? DEPARTEMENTS[0];
}

function formatTaux(taux: number): string {
  return taux.toFixed(2).replace(".", ",");
}

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
  tauxDepartement: number
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

  const tauxDept = tauxDepartement / 100;
  const tauxCommune = 0.012;
  const tauxEtat = 0.001;

  const departement = prix * tauxDept;
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
  const [deptCode, setDeptCode] = useState<string>("75");

  const dept = useMemo(() => getDepartement(deptCode), [deptCode]);

  const prix = useMemo(() => {
    const p = parseFloat(prixAchat.replace(/\s/g, ""));
    return isNaN(p) || p < 0 ? 0 : p;
  }, [prixAchat]);

  const resultats = useMemo(() => {
    if (prix === 0) return null;

    const droits = calculerDroitsMutation(prix, typeBien, dept.taux);
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
  }, [prix, typeBien, dept]);

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

        {/* Département */}
        <div>
          <label
            htmlFor="dept"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            D&eacute;partement
          </label>
          <select
            id="dept"
            value={deptCode}
            onChange={(e) => setDeptCode(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
            disabled={typeBien === "neuf"}
          >
            {DEPARTEMENTS.map((d) => (
              <option key={d.code} value={d.code}>
                {d.code} - {d.nom} ({formatTaux(d.taux)}&nbsp;%)
              </option>
            ))}
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
                      &rarr; Taxe d&eacute;partementale &mdash; {dept.nom} ({formatTaux(dept.taux)}&nbsp;%)
                    </dt>
                    <dd className="text-gray-700">
                      {formatEuro(resultats.droits.departement)}
                    </dd>
                  </div>
                  <div className="flex justify-between pl-4">
                    <dt className="text-gray-500">
                      &rarr; Taxe communale (1,20&nbsp;%)
                    </dt>
                    <dd className="text-gray-700">
                      {formatEuro(resultats.droits.commune)}
                    </dd>
                  </div>
                  <div className="flex justify-between pl-4">
                    <dt className="text-gray-500">
                      &rarr; Taxe &Eacute;tat (0,10&nbsp;%)
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
