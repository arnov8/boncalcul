"use client";

import { useState, useMemo } from "react";
import ShareResult from "@/components/ShareResult";

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const COLORS = [
  { bg: "bg-red-500", label: "Carburant" },
  { bg: "bg-blue-500", label: "Assurance" },
  { bg: "bg-amber-500", label: "Entretien" },
  { bg: "bg-purple-500", label: "Controle technique" },
  { bg: "bg-emerald-500", label: "Decote / amortissement" },
];

export default function CoutKmVoiture() {
  // Carburant
  const [consommation, setConsommation] = useState<string>("7");
  const [prixLitre, setPrixLitre] = useState<string>("1.75");

  // Assurance
  const [assuranceAnnuelle, setAssuranceAnnuelle] = useState<string>("600");

  // Entretien
  const [entretienAnnuel, setEntretienAnnuel] = useState<string>("1000");

  // Controle technique
  const [controleTechnique, setControleTechnique] = useState<string>("80");

  // Decote / amortissement
  const [prixAchat, setPrixAchat] = useState<string>("20000");
  const [dureeDetention, setDureeDetention] = useState<string>("7");

  // Kilometrage
  const [kmAnnuel, setKmAnnuel] = useState<string>("15000");

  const parse = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const result = useMemo(() => {
    const conso = parse(consommation);
    const prix = parse(prixLitre);
    const assurance = parse(assuranceAnnuelle);
    const entretien = parse(entretienAnnuel);
    const ct = parse(controleTechnique);
    const achat = parse(prixAchat);
    const duree = parse(dureeDetention);
    const km = parse(kmAnnuel);

    const carburantAnnuel = (conso / 100) * prix * km;
    const ctAnnuel = ct / 2;
    const decoteAnnuelle = duree > 0 ? achat / duree : 0;

    const totalAnnuel =
      carburantAnnuel + assurance + entretien + ctAnnuel + decoteAnnuelle;
    const totalMensuel = totalAnnuel / 12;
    const coutKm = km > 0 ? totalAnnuel / km : 0;

    const postes = [
      { label: "Carburant", montant: carburantAnnuel },
      { label: "Assurance", montant: assurance },
      { label: "Entretien", montant: entretien },
      { label: "Controle technique", montant: ctAnnuel },
      { label: "Decote / amortissement", montant: decoteAnnuelle },
    ];

    return { totalAnnuel, totalMensuel, coutKm, postes, km };
  }, [
    consommation,
    prixLitre,
    assuranceAnnuelle,
    entretienAnnuel,
    controleTechnique,
    prixAchat,
    dureeDetention,
    kmAnnuel,
  ]);

  const maxPoste = Math.max(...result.postes.map((p) => p.montant), 1);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Calculateur de cout au kilometre
        </h2>

        {/* Carburant */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Carburant
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="consommation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Consommation (L/100 km)
              </label>
              <input
                id="consommation"
                type="text"
                inputMode="decimal"
                value={consommation}
                onChange={(e) => setConsommation(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 7"
              />
            </div>
            <div>
              <label
                htmlFor="prixLitre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prix au litre (euros)
              </label>
              <input
                id="prixLitre"
                type="text"
                inputMode="decimal"
                value={prixLitre}
                onChange={(e) => setPrixLitre(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 1.75"
              />
            </div>
          </div>
        </fieldset>

        {/* Assurance */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Assurance
          </legend>
          <div>
            <label
              htmlFor="assurance"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cout annuel (euros)
            </label>
            <input
              id="assurance"
              type="text"
              inputMode="decimal"
              value={assuranceAnnuelle}
              onChange={(e) => setAssuranceAnnuelle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ex : 600"
            />
          </div>
        </fieldset>

        {/* Entretien */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Entretien
          </legend>
          <div>
            <label
              htmlFor="entretien"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cout annuel moyen (pneus, vidange, freins...)
            </label>
            <input
              id="entretien"
              type="text"
              inputMode="decimal"
              value={entretienAnnuel}
              onChange={(e) => setEntretienAnnuel(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ex : 1000"
            />
          </div>
        </fieldset>

        {/* Controle technique */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Controle technique
          </legend>
          <div>
            <label
              htmlFor="ct"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cout tous les 2 ans (euros)
            </label>
            <input
              id="ct"
              type="text"
              inputMode="decimal"
              value={controleTechnique}
              onChange={(e) => setControleTechnique(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ex : 80"
            />
          </div>
        </fieldset>

        {/* Decote / amortissement */}
        <fieldset className="mb-6">
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Decote / amortissement
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="prixAchat"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prix d&apos;achat du vehicule (euros)
              </label>
              <input
                id="prixAchat"
                type="text"
                inputMode="decimal"
                value={prixAchat}
                onChange={(e) => setPrixAchat(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 20000"
              />
            </div>
            <div>
              <label
                htmlFor="duree"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Duree de detention (annees)
              </label>
              <input
                id="duree"
                type="text"
                inputMode="decimal"
                value={dureeDetention}
                onChange={(e) => setDureeDetention(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Ex : 7"
              />
            </div>
          </div>
        </fieldset>

        {/* Kilometrage annuel */}
        <fieldset>
          <legend className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Kilometrage annuel
          </legend>
          <div>
            <label
              htmlFor="km"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Kilometres parcourus par an
            </label>
            <input
              id="km"
              type="text"
              inputMode="decimal"
              value={kmAnnuel}
              onChange={(e) => setKmAnnuel(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ex : 15000"
            />
          </div>
        </fieldset>
      </div>

      {/* --------------- Resultats --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Resultat</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Cout annuel
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              {formatEuro(result.totalAnnuel)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              Cout au kilometre
            </p>
            <p className="text-xl md:text-2xl font-bold text-blue-700">
              {formatEuro(result.coutKm)}&nbsp;&euro;
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Cout mensuel
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              {formatEuro(result.totalMensuel)}&nbsp;&euro;
            </p>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
          <p className="text-sm opacity-90 mb-1">
            Pour {formatEuro(result.km)} km par an
          </p>
          <p className="text-xl md:text-2xl font-bold">
            {formatEuro(result.coutKm)} &euro; / km
          </p>
        </div>

        <ShareResult
          toolName="Cout km voiture"
          result={`${formatEuro(result.coutKm)} € / km`}
          details={`${formatEuro(result.km)} km/an | Cout annuel : ${formatEuro(result.totalAnnuel)} € | Mensuel : ${formatEuro(result.totalMensuel)} €`}
          toolSlug="cout-km-voiture"
        />

        {/* Breakdown */}
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Repartition par poste
        </h4>
        <div className="space-y-3">
          {result.postes.map((poste, i) => {
            const pct =
              result.totalAnnuel > 0
                ? (poste.montant / result.totalAnnuel) * 100
                : 0;
            const barWidth =
              maxPoste > 0 ? (poste.montant / maxPoste) * 100 : 0;
            return (
              <div key={i}>
                <div className="flex items-center justify-between flex-wrap gap-1 text-sm mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${COLORS[i].bg}`}
                    />
                    <span className="font-medium text-gray-700">
                      {COLORS[i].label}
                    </span>
                  </div>
                  <span className="text-gray-600">
                    {formatEuro(poste.montant)} &euro;/an &middot;{" "}
                    {pct.toLocaleString("fr-FR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}{" "}
                    %
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${COLORS[i].bg} transition-all duration-300`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
