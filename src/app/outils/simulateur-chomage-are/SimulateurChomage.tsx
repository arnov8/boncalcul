"use client";

import { useState, useMemo } from "react";

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function calculerDureeIndemnisation(
  dureeTravailMois: number,
  age: number
): number {
  const dureeMinMois = 6;
  if (dureeTravailMois < dureeMinMois) return 0;

  let maxMois: number;
  if (age >= 55) {
    maxMois = 36;
  } else if (age >= 53) {
    maxMois = 30;
  } else {
    maxMois = 24;
  }

  return Math.min(dureeTravailMois, maxMois);
}

export default function SimulateurChomage() {
  const [salaireBrut, setSalaireBrut] = useState<string>("2500");
  const [dureeEmploi, setDureeEmploi] = useState<string>("24");
  const [age, setAge] = useState<string>("35");

  const salaireBrutNum =
    parseFloat(salaireBrut.replace(/\s/g, "").replace(",", ".")) || 0;
  const dureeEmploiNum = parseInt(dureeEmploi.replace(/\s/g, ""), 10) || 0;
  const ageNum = parseInt(age.replace(/\s/g, ""), 10) || 0;

  const result = useMemo(() => {
    if (salaireBrutNum <= 0 || dureeEmploiNum <= 0 || ageNum <= 0) {
      return null;
    }

    // Nombre de jours calendaires (30.42 jours par mois, plafonné à 730 jours = 24 mois)
    const moisRetenus = Math.min(dureeEmploiNum, 24);
    const joursCalendaires = moisRetenus * 30.42;

    // SJR = salaire brut total / nombre de jours calendaires
    const salaireBrutTotal = salaireBrutNum * moisRetenus;
    const sjr = salaireBrutTotal / joursCalendaires;

    // ARE journaliere = max(40.4% x SJR + 12.95, 57% x SJR), plafonnee a 75% du SJR
    const formule1 = sjr * 0.404 + 12.95;
    const formule2 = sjr * 0.57;
    let areJournaliere = Math.max(formule1, formule2);

    // Plafonnement a 75% du SJR
    const plafond75 = sjr * 0.75;
    areJournaliere = Math.min(areJournaliere, plafond75);

    // Minimum ARE : 31.59 euros/jour
    const minimumARE = 31.59;
    areJournaliere = Math.max(areJournaliere, minimumARE);

    // ARE mensuelle (x30)
    const areMensuelle = areJournaliere * 30;

    // Duree d'indemnisation
    const dureeIndemnisation = calculerDureeIndemnisation(
      dureeEmploiNum,
      ageNum
    );

    // Total estime
    const totalEstime = areJournaliere * dureeIndemnisation * 30.42;

    return {
      sjr,
      areJournaliere,
      areMensuelle,
      dureeIndemnisation,
      totalEstime,
      salaireBrutTotal,
      joursCalendaires,
      moisRetenus,
    };
  }, [salaireBrutNum, dureeEmploiNum, ageNum]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur d&apos;allocation chomage (ARE)
        </h2>

        {/* Salaire brut mensuel moyen */}
        <div className="mb-5">
          <label
            htmlFor="salaireBrut"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salaire brut mensuel moyen (12 derniers mois)
          </label>
          <div className="relative">
            <input
              id="salaireBrut"
              type="text"
              inputMode="decimal"
              value={salaireBrut}
              onChange={(e) => setSalaireBrut(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-10"
              placeholder="Ex : 2500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Salaire brut moyen incluant primes et 13e mois, avant retenues
            sociales.
          </p>
        </div>

        {/* Duree emploi */}
        <div className="mb-5">
          <label
            htmlFor="dureeEmploi"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Duree d&apos;emploi (en mois)
          </label>
          <div className="relative">
            <input
              id="dureeEmploi"
              type="text"
              inputMode="decimal"
              value={dureeEmploi}
              onChange={(e) => setDureeEmploi(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-16"
              placeholder="Ex : 24"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              mois
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Nombre de mois travailles au cours des 24 derniers mois (ou 36 mois
            si vous avez 53 ans ou plus). Minimum 6 mois requis.
          </p>
        </div>

        {/* Age */}
        <div className="mb-5">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age a la date de fin de contrat
          </label>
          <div className="relative">
            <input
              id="age"
              type="text"
              inputMode="decimal"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-14"
              placeholder="Ex : 35"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              ans
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Votre age determine la duree maximale d&apos;indemnisation.
          </p>
        </div>

        {/* Info SJR */}
        {result && (
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">
                Salaire journalier de reference (SJR) :
              </span>{" "}
              <span className="text-lg font-bold">
                {formatEuro(result.sjr)} &euro;
              </span>
              <span className="text-blue-600 ml-2">
                ({formatEuro(result.salaireBrutTotal)} &euro; /{" "}
                {result.joursCalendaires.toLocaleString("fr-FR", {
                  maximumFractionDigits: 0,
                })}{" "}
                jours)
              </span>
            </p>
          </div>
        )}
      </div>

      {/* --------------- Resultats --------------- */}
      {result && result.dureeIndemnisation > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Resultat de la simulation
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                ARE journaliere
              </p>
              <p className="text-2xl font-bold text-blue-700">
                {formatEuro(result.areJournaliere)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                ARE mensuelle (x30 jours)
              </p>
              <p className="text-2xl font-bold text-blue-700">
                {formatEuro(result.areMensuelle)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Duree d&apos;indemnisation
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {result.dureeIndemnisation} mois
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Total estime
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatEuro(result.totalEstime)}&nbsp;&euro;
              </p>
            </div>
          </div>

          {/* Summary card */}
          <div className="bg-blue-600 text-white rounded-xl p-5">
            <p className="text-sm opacity-90 mb-1">
              Salaire brut mensuel : {formatEuro(salaireBrutNum)} &euro; &mdash;{" "}
              {dureeEmploiNum} mois travailles &mdash; {ageNum} ans
            </p>
            <p className="text-2xl font-bold">
              ARE : {formatEuro(result.areMensuelle)} &euro; / mois pendant{" "}
              {result.dureeIndemnisation} mois
            </p>
          </div>
        </div>
      )}

      {/* --------------- Message si duree insuffisante --------------- */}
      {result && result.dureeIndemnisation === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="bg-red-50 rounded-xl p-5 text-center">
            <p className="text-red-700 font-semibold">
              La duree d&apos;emploi minimale requise est de 6 mois pour ouvrir
              des droits a l&apos;ARE.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
