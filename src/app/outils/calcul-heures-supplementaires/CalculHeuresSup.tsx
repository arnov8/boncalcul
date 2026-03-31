"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

const HEURES_MENSUELLES = 151.67;
const TAUX_CHARGES_SALARIALES = 0.22;
const EXONERATION_ANNUELLE = 7500;

function formatMontant(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculHeuresSup() {
  const [salaireBrut, setSalaireBrut] = useState<string>("2000");
  const [heuresSup, setHeuresSup] = useState<string>("5");

  const result = useMemo(() => {
    const brut = parseFloat(salaireBrut) || 0;
    const hs = parseFloat(heuresSup) || 0;

    const tauxHoraire = brut / HEURES_MENSUELLES;
    const tauxMajore25 = tauxHoraire * 1.25;
    const tauxMajore50 = tauxHoraire * 1.5;

    // 8 premieres heures sup a 25%, au-dela a 50%
    const heures25 = Math.min(hs, 8);
    const heures50 = Math.max(hs - 8, 0);

    const brutHS25Semaine = heures25 * tauxMajore25;
    const brutHS50Semaine = heures50 * tauxMajore50;
    const totalBrutHSSemaine = brutHS25Semaine + brutHS50Semaine;

    // Mensuel : environ 4.33 semaines
    const semainesParMois = 52 / 12;
    const totalBrutHSMois = totalBrutHSSemaine * semainesParMois;
    const totalBrutHSAnnuel = totalBrutHSMois * 12;

    // Estimation nette (cotisations reduites sur HS, environ 11% au lieu de 22%)
    const tauxChargesHS = 0.11;
    const totalNetHSMois = totalBrutHSMois * (1 - tauxChargesHS);
    const totalNetHSAnnuel = totalNetHSMois * 12;

    // Exoneration fiscale
    const exonere = Math.min(totalNetHSAnnuel, EXONERATION_ANNUELLE);
    const imposable = Math.max(totalNetHSAnnuel - EXONERATION_ANNUELLE, 0);

    return {
      tauxHoraire,
      tauxMajore25,
      tauxMajore50,
      heures25,
      heures50,
      brutHS25Semaine,
      brutHS50Semaine,
      totalBrutHSMois,
      totalNetHSMois,
      totalBrutHSAnnuel,
      totalNetHSAnnuel,
      exonere,
      imposable,
      semainesParMois,
    };
  }, [salaireBrut, heuresSup]);

  return (
    <div className="space-y-8">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculer vos heures suppl&eacute;mentaires
        </h2>

        {/* Salaire brut */}
        <div className="mb-5">
          <label
            htmlFor="salaireBrut"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salaire brut mensuel (base 35h) en &euro;
          </label>
          <input
            id="salaireBrut"
            type="text"
            inputMode="decimal"
            value={salaireBrut}
            onChange={(e) => setSalaireBrut(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 2000"
          />
        </div>

        {/* Heures sup */}
        <div className="mb-6">
          <label
            htmlFor="heuresSup"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre d&apos;heures suppl&eacute;mentaires par semaine
          </label>
          <input
            id="heuresSup"
            type="text"
            inputMode="decimal"
            value={heuresSup}
            onChange={(e) => setHeuresSup(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 5"
          />
        </div>

        {/* Resultat principal */}
        <div className="bg-blue-600 text-white rounded-xl p-5 text-center mb-6">
          <p className="text-sm font-medium opacity-90 mb-1">
            Gain net mensuel (heures sup)
          </p>
          <p className="text-3xl sm:text-4xl font-bold">
            +{formatMontant(result.totalNetHSMois)}&nbsp;&euro;
            <span className="text-lg font-normal opacity-80"> / mois</span>
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              Taux horaire normal
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.tauxHoraire)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              Taux major&eacute; 25%
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.tauxMajore25)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">
              Taux major&eacute; 50%
            </p>
            <p className="text-xl font-bold text-blue-700">
              {formatMontant(result.tauxMajore50)}&nbsp;&euro;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Total brut HS / mois
            </p>
            <p className="text-xl font-bold text-gray-800">
              {formatMontant(result.totalBrutHSMois)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Estimation nette / mois
            </p>
            <p className="text-xl font-bold text-gray-800">
              {formatMontant(result.totalNetHSMois)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 font-medium mb-1">
              Gain annuel net
            </p>
            <p className="text-xl font-bold text-gray-800">
              {formatMontant(result.totalNetHSAnnuel)}&nbsp;&euro;
            </p>
          </div>
        </div>

        {/* Recap */}
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            D&eacute;tail du calcul hebdomadaire
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Taux horaire brut (base 151,67h)</span>
              <span className="font-medium text-gray-800">
                {formatMontant(result.tauxHoraire)}&nbsp;&euro;/h
              </span>
            </div>
            {result.heures25 > 0 && (
              <div className="flex flex-wrap justify-between gap-1">
                <span className="text-gray-600">
                  {result.heures25.toLocaleString("fr-FR")}h &times; {formatMontant(result.tauxMajore25)}&nbsp;&euro; (major&eacute;es 25%)
                </span>
                <span className="font-medium text-gray-800">
                  {formatMontant(result.brutHS25Semaine)}&nbsp;&euro;
                </span>
              </div>
            )}
            {result.heures50 > 0 && (
              <div className="flex flex-wrap justify-between gap-1">
                <span className="text-gray-600">
                  {result.heures50.toLocaleString("fr-FR")}h &times; {formatMontant(result.tauxMajore50)}&nbsp;&euro; (major&eacute;es 50%)
                </span>
                <span className="font-medium text-gray-800">
                  {formatMontant(result.brutHS50Semaine)}&nbsp;&euro;
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Exoneration */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Exon&eacute;ration fiscale
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Gain net annuel HS</span>
              <span className="font-medium text-gray-800">
                {formatMontant(result.totalNetHSAnnuel)}&nbsp;&euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1 text-green-700">
              <span>Montant exon&eacute;r&eacute; d&apos;imp&ocirc;t</span>
              <span className="font-medium">
                {formatMontant(result.exonere)}&nbsp;&euro;
              </span>
            </div>
            {result.imposable > 0 && (
              <div className="flex flex-wrap justify-between gap-1 text-orange-600">
                <span>Montant imposable (au-del&agrave; de 7&nbsp;500&nbsp;&euro;)</span>
                <span className="font-medium">
                  {formatMontant(result.imposable)}&nbsp;&euro;
                </span>
              </div>
            )}
            <p className="text-xs text-gray-400 mt-2">
              Les heures suppl&eacute;mentaires sont exon&eacute;r&eacute;es d&apos;imp&ocirc;t sur le revenu dans la limite de 7&nbsp;500&nbsp;&euro; nets par an.
            </p>
          </div>
        </div>

        <ShareResult
          toolName="Heures supplementaires"
          result={`+${formatMontant(result.totalNetHSMois)} € net / mois`}
          details={`${heuresSup} HS/semaine | Taux horaire : ${formatMontant(result.tauxHoraire)} € | Gain annuel net : ${formatMontant(result.totalNetHSAnnuel)} €`}
          toolSlug="calcul-heures-supplementaires"
        />

        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimation indicative bas&eacute;e sur les taux l&eacute;gaux de majoration 2026. Le montant r&eacute;el peut varier
          selon votre convention collective, qui peut pr&eacute;voir des taux diff&eacute;rents.
        </p>
      </div>
    </div>
  );
}
