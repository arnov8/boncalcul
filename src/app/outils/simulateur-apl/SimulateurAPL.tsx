"use client";

import { useState, useMemo } from "react";

function formatEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

type Situation = "celibataire" | "couple" | "couple-avec-enfants";
type Zone = "zone-1" | "zone-2" | "zone-3";
type TypeLogement = "location" | "colocation" | "foyer";

const PLAFONDS_LOYER: Record<Zone, { seul: number; couple: number; parPersonne: number }> = {
  "zone-1": { seul: 319.87, couple: 385.09, parPersonne: 55.58 },
  "zone-2": { seul: 278.28, couple: 339.89, parPersonne: 50.2 },
  "zone-3": { seul: 260.82, couple: 315.55, parPersonne: 45.75 },
};

const CHARGE_BASE = 54.89;
const CHARGE_PAR_PERSONNE = 13.72;
const SEUIL_NON_VERSEMENT = 15;
const PLANCHER_PARTICIPATION = 37.5;

function getPlafondLoyer(zone: Zone, situation: Situation, enfants: number): number {
  const p = PLAFONDS_LOYER[zone];
  if (situation === "celibataire") {
    return p.seul + enfants * p.parPersonne;
  }
  return p.couple + enfants * p.parPersonne;
}

function getChargesForfaitaires(situation: Situation, enfants: number): number {
  if (situation === "celibataire") {
    return CHARGE_BASE + enfants * CHARGE_PAR_PERSONNE;
  }
  return CHARGE_BASE + CHARGE_PAR_PERSONNE + enfants * CHARGE_PAR_PERSONNE;
}

export default function SimulateurAPL() {
  const [situation, setSituation] = useState<Situation>("celibataire");
  const [enfants, setEnfants] = useState<string>("0");
  const [loyer, setLoyer] = useState<string>("600");
  const [zone, setZone] = useState<Zone>("zone-2");
  const [revenus, setRevenus] = useState<string>("1500");
  const [typeLogement, setTypeLogement] = useState<TypeLogement>("location");

  const loyerNum = parseFloat(loyer.replace(/\s/g, "").replace(",", ".")) || 0;
  const revenusNum = parseFloat(revenus.replace(/\s/g, "").replace(",", ".")) || 0;
  const enfantsNum = Math.min(10, Math.max(0, parseInt(enfants.replace(/\s/g, ""), 10) || 0));

  const result = useMemo(() => {
    if (loyerNum <= 0 || revenusNum < 0) return null;

    const plafond = getPlafondLoyer(zone, situation, enfantsNum);
    const loyerPrisEnCompte = Math.min(loyerNum, plafond);
    const chargesForfaitaires = getChargesForfaitaires(situation, enfantsNum);
    const loyerReference = loyerPrisEnCompte + chargesForfaitaires;

    // Taux d'effort progressif simplifie
    const tauxEffort = 0.085 + (revenusNum / 25000) * 0.32;
    const participationPersonnelle = Math.max(
      loyerReference * tauxEffort,
      PLANCHER_PARTICIPATION
    );

    let apl = loyerReference - participationPersonnelle;
    apl = Math.max(0, Math.min(apl, loyerNum));

    // Seuil de non-versement
    if (apl < SEUIL_NON_VERSEMENT) {
      apl = 0;
    }

    const economieAnnuelle = apl * 12;

    return {
      plafond,
      loyerPrisEnCompte,
      chargesForfaitaires,
      loyerReference,
      participationPersonnelle,
      apl,
      economieAnnuelle,
    };
  }, [loyerNum, revenusNum, enfantsNum, zone, situation]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur APL (Aide Personnalisee au Logement)
        </h2>

        {/* Situation */}
        <div className="mb-5">
          <label
            htmlFor="situation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Situation familiale
          </label>
          <select
            id="situation"
            value={situation}
            onChange={(e) => setSituation(e.target.value as Situation)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="celibataire">Celibataire</option>
            <option value="couple">Couple sans enfant</option>
            <option value="couple-avec-enfants">Couple avec enfant(s)</option>
          </select>
        </div>

        {/* Nombre d'enfants */}
        {(situation === "couple-avec-enfants") && (
          <div className="mb-5">
            <label
              htmlFor="enfants"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre d&apos;enfants a charge
            </label>
            <div className="relative">
              <input
                id="enfants"
                type="number"
                inputMode="numeric"
                min="0"
                max="10"
                value={enfants}
                onChange={(e) => setEnfants(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 2"
              />
            </div>
          </div>
        )}

        {/* Loyer mensuel */}
        <div className="mb-5">
          <label
            htmlFor="loyer"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Loyer mensuel hors charges
          </label>
          <div className="relative">
            <input
              id="loyer"
              type="text"
              inputMode="decimal"
              value={loyer}
              onChange={(e) => setLoyer(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-10"
              placeholder="Ex : 600"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Montant du loyer hors charges, tel qu&apos;indique sur votre bail.
          </p>
        </div>

        {/* Zone */}
        <div className="mb-5">
          <label
            htmlFor="zone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Zone geographique
          </label>
          <select
            id="zone"
            value={zone}
            onChange={(e) => setZone(e.target.value as Zone)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="zone-1">Zone 1 — Paris et communes limitrophes</option>
            <option value="zone-2">Zone 2 — Agglomerations de plus de 100 000 habitants</option>
            <option value="zone-3">Zone 3 — Reste de la France</option>
          </select>
        </div>

        {/* Revenus */}
        <div className="mb-5">
          <label
            htmlFor="revenus"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Revenus mensuels nets du foyer
          </label>
          <div className="relative">
            <input
              id="revenus"
              type="text"
              inputMode="decimal"
              value={revenus}
              onChange={(e) => setRevenus(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-10"
              placeholder="Ex : 1500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              &euro;
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Total des revenus nets mensuels de l&apos;ensemble du foyer (salaires, allocations, etc.).
          </p>
        </div>

        {/* Type de logement */}
        <div className="mb-5">
          <label
            htmlFor="typeLogement"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type de logement
          </label>
          <select
            id="typeLogement"
            value={typeLogement}
            onChange={(e) => setTypeLogement(e.target.value as TypeLogement)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="location">Location</option>
            <option value="colocation">Colocation</option>
            <option value="foyer">Foyer (residence, FJT, CROUS...)</option>
          </select>
        </div>
      </div>

      {/* --------------- Resultats --------------- */}
      {result && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Resultat de la simulation
          </h3>

          {/* Montant principal */}
          <div className="bg-blue-600 text-white rounded-xl p-5 mb-6 text-center">
            <p className="text-sm opacity-90 mb-1">Estimation APL mensuelle</p>
            <p className="text-3xl font-bold">
              {result.apl > 0 ? (
                <>{formatEuro(result.apl)}&nbsp;&euro; / mois</>
              ) : (
                "Pas d\u0027APL estimee"
              )}
            </p>
          </div>

          {/* Detail du calcul */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Loyer pris en compte
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatEuro(result.loyerPrisEnCompte)}&nbsp;&euro;
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Plafond zone : {formatEuro(result.plafond)} &euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Charges forfaitaires
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatEuro(result.chargesForfaitaires)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Participation personnelle
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatEuro(result.participationPersonnelle)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                Montant APL
              </p>
              <p className="text-2xl font-bold text-blue-700">
                {formatEuro(result.apl)}&nbsp;&euro;
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center sm:col-span-2">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                Economie annuelle estimee
              </p>
              <p className="text-2xl font-bold text-blue-700">
                {formatEuro(result.economieAnnuelle)}&nbsp;&euro;
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Estimation indicative :</span>{" "}
              ce simulateur utilise une formule simplifiee basee sur les baremes 2026.
              Le montant reel de votre APL peut varier en fonction de votre situation
              exacte. Pour une simulation officielle, rendez-vous sur{" "}
              <a
                href="https://www.caf.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-amber-900 hover:text-amber-700"
              >
                caf.fr
              </a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
