"use client";

import { useState, useMemo } from "react";

type Activite = "vente" | "service-bic" | "service-bnc" | "liberal";

const TAUX_COTISATIONS: Record<Activite, number> = {
  vente: 0.123,
  "service-bic": 0.212,
  "service-bnc": 0.211,
  liberal: 0.212,
};

const TAUX_VERSEMENT_LIBERATOIRE: Record<Activite, number> = {
  vente: 0.01,
  "service-bic": 0.017,
  "service-bnc": 0.022,
  liberal: 0.022,
};

const TAUX_CFP: Record<Activite, number> = {
  vente: 0.001,
  "service-bic": 0.002,
  "service-bnc": 0.002,
  liberal: 0.002,
};

const TAUX_TFC: Record<Activite, number> = {
  vente: 0.00015,
  "service-bic": 0.00044,
  "service-bnc": 0,
  liberal: 0,
};

const PLAFONDS: Record<Activite, number> = {
  vente: 188700,
  "service-bic": 77700,
  "service-bnc": 77700,
  liberal: 77700,
};

const LABELS_ACTIVITE: Record<Activite, string> = {
  vente: "Vente de marchandises (BIC)",
  "service-bic": "Prestation de services (BIC)",
  "service-bnc": "Prestation de services (BNC)",
  liberal: "Activite liberale (BNC)",
};

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPourcent(n: number): string {
  return (n * 100).toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 3,
  });
}

export default function CalculChargesMicro() {
  const [ca, setCa] = useState<string>("3000");
  const [activite, setActivite] = useState<Activite>("service-bnc");
  const [acre, setAcre] = useState(false);
  const [versementLiberatoire, setVersementLiberatoire] = useState(false);

  const result = useMemo(() => {
    const caMensuel = parseFloat(ca) || 0;
    const caAnnuel = caMensuel * 12;

    let tauxCotisations = TAUX_COTISATIONS[activite];
    if (acre) {
      tauxCotisations = tauxCotisations / 2;
    }

    const tauxCfp = TAUX_CFP[activite];
    const tauxTfc = TAUX_TFC[activite];
    const tauxVl = versementLiberatoire
      ? TAUX_VERSEMENT_LIBERATOIRE[activite]
      : 0;

    const cotisations = caMensuel * tauxCotisations;
    const cfp = caMensuel * tauxCfp;
    const tfc = caMensuel * tauxTfc;
    const vl = caMensuel * tauxVl;

    const totalCharges = cotisations + cfp + tfc + vl;
    const revenuNet = caMensuel - totalCharges;

    const tauxTotal = tauxCotisations + tauxCfp + tauxTfc + tauxVl;
    const pctCharges = caMensuel > 0 ? (totalCharges / caMensuel) * 100 : 0;
    const pctNet = caMensuel > 0 ? (revenuNet / caMensuel) * 100 : 0;

    const plafond = PLAFONDS[activite];

    return {
      caMensuel,
      caAnnuel,
      tauxCotisations,
      tauxCfp,
      tauxTfc,
      tauxVl,
      cotisations,
      cfp,
      tfc,
      vl,
      totalCharges,
      revenuNet,
      tauxTotal,
      pctCharges,
      pctNet,
      plafond,
    };
  }, [ca, activite, acre, versementLiberatoire]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur charges micro-entrepreneur
        </h2>

        {/* CA mensuel */}
        <div className="mb-5">
          <label
            htmlFor="ca"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Chiffre d&apos;affaires mensuel (&euro;)
          </label>
          <input
            id="ca"
            type="text"
            inputMode="decimal"
            value={ca}
            onChange={(e) => setCa(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 3000"
          />
        </div>

        {/* Activite */}
        <div className="mb-5">
          <label
            htmlFor="activite"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type d&apos;activite
          </label>
          <select
            id="activite"
            value={activite}
            onChange={(e) => setActivite(e.target.value as Activite)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            {(Object.keys(LABELS_ACTIVITE) as Activite[]).map((key) => (
              <option key={key} value={key}>
                {LABELS_ACTIVITE[key]}
              </option>
            ))}
          </select>
        </div>

        {/* ACRE */}
        <div className="mb-5">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Beneficiez-vous de l&apos;ACRE ?
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setAcre(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                !acre
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Non
            </button>
            <button
              onClick={() => setAcre(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                acre
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Oui
            </button>
          </div>
        </div>

        {/* Versement liberatoire */}
        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Versement liberatoire de l&apos;impot ?
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setVersementLiberatoire(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                !versementLiberatoire
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Non
            </button>
            <button
              onClick={() => setVersementLiberatoire(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                versementLiberatoire
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Oui
            </button>
          </div>
        </div>

        {/* Resultat principal */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mb-6">
          <p className="text-sm text-blue-600 font-medium mb-1">
            Revenu net mensuel estime
          </p>
          <p className="text-2xl sm:text-4xl font-bold text-blue-700">
            {formatEuro(result.revenuNet)}&nbsp;&euro;
            <span className="text-lg font-normal text-blue-500"> / mois</span>
          </p>
          <p className="text-lg text-blue-600 mt-1">
            {formatEuro(result.revenuNet * 12)}&nbsp;&euro;
            <span className="text-sm font-normal text-blue-400"> / an</span>
          </p>
        </div>

        {/* Tableau recapitulatif */}
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Detail mensuel / annuel
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-1">
              <span className="text-gray-600">Chiffre d&apos;affaires</span>
              <span className="font-medium text-gray-800">
                {formatEuro(result.caMensuel)} &euro; /{" "}
                {formatEuro(result.caAnnuel)} &euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1 text-red-600">
              <span>
                Cotisations sociales{" "}
                <span className="text-red-400 text-xs">
                  ({formatPourcent(result.tauxCotisations)} %)
                  {acre && " ACRE"}
                </span>
              </span>
              <span className="font-medium">
                &minus; {formatEuro(result.cotisations)} &euro; /{" "}
                {formatEuro(result.cotisations * 12)} &euro;
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-1 text-red-600">
              <span>
                Formation professionnelle (CFP){" "}
                <span className="text-red-400 text-xs">
                  ({formatPourcent(result.tauxCfp)} %)
                </span>
              </span>
              <span className="font-medium">
                &minus; {formatEuro(result.cfp)} &euro; /{" "}
                {formatEuro(result.cfp * 12)} &euro;
              </span>
            </div>
            {result.tauxTfc > 0 && (
              <div className="flex flex-wrap justify-between gap-1 text-red-600">
                <span>
                  Taxe chambre consulaire (TFC){" "}
                  <span className="text-red-400 text-xs">
                    ({formatPourcent(result.tauxTfc)} %)
                  </span>
                </span>
                <span className="font-medium">
                  &minus; {formatEuro(result.tfc)} &euro; /{" "}
                  {formatEuro(result.tfc * 12)} &euro;
                </span>
              </div>
            )}
            {versementLiberatoire && (
              <div className="flex flex-wrap justify-between gap-1 text-red-600">
                <span>
                  Versement liberatoire IR{" "}
                  <span className="text-red-400 text-xs">
                    ({formatPourcent(result.tauxVl)} %)
                  </span>
                </span>
                <span className="font-medium">
                  &minus; {formatEuro(result.vl)} &euro; /{" "}
                  {formatEuro(result.vl * 12)} &euro;
                </span>
              </div>
            )}
            <hr className="border-gray-200" />
            <div className="flex flex-wrap justify-between gap-1 text-red-700 font-semibold">
              <span>
                Total charges{" "}
                <span className="text-red-400 text-xs font-normal">
                  ({formatPourcent(result.tauxTotal)} % du CA)
                </span>
              </span>
              <span>
                &minus; {formatEuro(result.totalCharges)} &euro; /{" "}
                {formatEuro(result.totalCharges * 12)} &euro;
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-wrap justify-between gap-1 font-semibold text-green-700">
              <span>Revenu net</span>
              <span>
                {formatEuro(result.revenuNet)} &euro; /{" "}
                {formatEuro(result.revenuNet * 12)} &euro;
              </span>
            </div>
          </div>
        </div>

        {/* Barre visuelle charges vs net */}
        {result.caMensuel > 0 && (
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Repartition du chiffre d&apos;affaires
            </h3>
            <div className="flex rounded-lg overflow-hidden h-8 text-xs font-semibold">
              <div
                className="bg-red-400 flex items-center justify-center text-white transition-all duration-300"
                style={{
                  width: `${Math.max(result.pctCharges, 0)}%`,
                  minWidth: result.pctCharges > 0 ? "40px" : "0",
                }}
              >
                {result.pctCharges >= 5 &&
                  `${result.pctCharges.toFixed(1)} %`}
              </div>
              <div
                className="bg-green-500 flex items-center justify-center text-white transition-all duration-300"
                style={{
                  width: `${Math.max(result.pctNet, 0)}%`,
                  minWidth: result.pctNet > 0 ? "40px" : "0",
                }}
              >
                {result.pctNet >= 5 && `${result.pctNet.toFixed(1)} %`}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded bg-red-400"></span>
                Charges ({result.pctCharges.toFixed(1)} %)
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded bg-green-500"></span>
                Revenu net ({result.pctNet.toFixed(1)} %)
              </span>
            </div>
          </div>
        )}

        {/* Plafond CA */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <h3 className="text-sm font-semibold text-amber-800 mb-2">
            Plafond de chiffre d&apos;affaires
          </h3>
          <p className="text-sm text-amber-700">
            Pour l&apos;activite{" "}
            <strong>&laquo;&nbsp;{LABELS_ACTIVITE[activite]}&nbsp;&raquo;</strong>,
            le plafond annuel est de{" "}
            <strong>{formatEuro(result.plafond)}&nbsp;&euro;</strong>.
            {result.caAnnuel > 0 && (
              <>
                {" "}
                Votre CA annuel projete ({formatEuro(result.caAnnuel)}&nbsp;&euro;)
                represente{" "}
                <strong>
                  {((result.caAnnuel / result.plafond) * 100).toFixed(1)}&nbsp;%
                </strong>{" "}
                de ce plafond.
                {result.caAnnuel > result.plafond && (
                  <span className="text-red-600 font-semibold">
                    {" "}
                    Attention : vous depassez le plafond !
                  </span>
                )}
              </>
            )}
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimation indicative basee sur les taux de cotisations
          micro-entrepreneur 2026. Le montant reel peut varier selon votre
          situation personnelle. La CFE (Cotisation Fonciere des Entreprises)
          n&apos;est pas incluse car elle depend de votre commune.
        </p>
      </div>
    </div>
  );
}
