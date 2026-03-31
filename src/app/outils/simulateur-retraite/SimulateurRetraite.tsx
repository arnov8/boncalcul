"use client";

import { useState, useMemo } from "react";

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

type Statut = "salarie-prive" | "fonctionnaire" | "independant";

export default function SimulateurRetraite() {
  const [ageActuel, setAgeActuel] = useState<string>("35");
  const [salaireBrut, setSalaireBrut] = useState<string>("3000");
  const [trimestresActuels, setTrimestresActuels] = useState<string>("40");
  const [statut, setStatut] = useState<Statut>("salarie-prive");

  const ageNum = parseInt(ageActuel.replace(/\s/g, ""), 10) || 0;
  const salaireBrutNum =
    parseFloat(salaireBrut.replace(/\s/g, "").replace(",", ".")) || 0;
  const trimestresNum =
    parseInt(trimestresActuels.replace(/\s/g, ""), 10) || 0;

  const result = useMemo(() => {
    if (ageNum <= 0 || ageNum >= 67 || salaireBrutNum <= 0) {
      return null;
    }

    // Age legal de depart : 64 ans (reforme 2023)
    const ageLegal = 64;

    // Trimestres requis pour taux plein : 172 (43 ans, pour nes apres 1965)
    const trimestresRequis = 172;

    // Annees restantes jusqu'a l'age legal
    const anneesRestantes = Math.max(0, ageLegal - ageNum);

    // Trimestres projetes a l'age legal (4 trimestres par an)
    const trimestresProjection = trimestresNum + anneesRestantes * 4;

    // Trimestres retenus (plafonne aux trimestres requis pour le calcul du ratio)
    const trimestresRetenus = Math.min(trimestresProjection, trimestresRequis);

    // Trimestres manquants pour le taux plein
    const trimestresManquants = Math.max(
      0,
      trimestresRequis - trimestresProjection
    );

    // Taux de liquidation : 50% si taux plein, sinon decote de 1.25% par trimestre manquant (max 20)
    const trimestresDecote = Math.min(trimestresManquants, 20);
    const tauxLiquidation = 0.5 - trimestresDecote * 0.0125;

    // Salaire annuel moyen (SAM) : on utilise le salaire actuel comme proxy
    // Plafond Securite sociale mensuel 2026 : environ 3 864 euros
    const plafondSSMensuel = 3864;
    let salairePrisEnCompte = salaireBrutNum;

    if (statut === "salarie-prive" || statut === "independant") {
      salairePrisEnCompte = Math.min(salaireBrutNum, plafondSSMensuel);
    }

    const sam = salairePrisEnCompte * 12;

    // Pension de base annuelle = SAM x taux x (trimestres retenus / trimestres requis)
    const pensionBaseAnnuelle =
      sam * tauxLiquidation * (trimestresRetenus / trimestresRequis);
    const pensionBaseMensuelle = pensionBaseAnnuelle / 12;

    // Estimation complementaire AGIRC-ARRCO : ~25% de la pension de base
    let complementaireMensuelle = 0;
    if (statut === "salarie-prive") {
      complementaireMensuelle = pensionBaseMensuelle * 0.25;
    } else if (statut === "fonctionnaire") {
      // Les fonctionnaires ont la RAFP, estimee a ~5% de la base
      complementaireMensuelle = pensionBaseMensuelle * 0.05;
    } else {
      // Independants : complementaire variable, estimation ~15%
      complementaireMensuelle = pensionBaseMensuelle * 0.15;
    }

    // Pension totale brute
    const pensionTotaleBrute = pensionBaseMensuelle + complementaireMensuelle;

    // Pension nette estimee (~90% du brut)
    const pensionNette = pensionTotaleBrute * 0.9;

    // Age de depart estime
    let ageDepartEstime = ageLegal;
    if (trimestresProjection >= trimestresRequis && ageNum < ageLegal) {
      // Taux plein atteint a l'age legal
      ageDepartEstime = ageLegal;
    } else if (trimestresManquants > 0) {
      // Il faudra peut-etre travailler plus longtemps (max 67 ans pour taux plein automatique)
      const anneesSupp = Math.ceil(trimestresManquants / 4);
      ageDepartEstime = Math.min(ageLegal + anneesSupp, 67);
    }

    return {
      ageDepartEstime,
      trimestresProjection,
      trimestresRequis,
      trimestresManquants,
      tauxLiquidation,
      pensionBaseMensuelle,
      complementaireMensuelle,
      pensionTotaleBrute,
      pensionNette,
      sam,
    };
  }, [ageNum, salaireBrutNum, trimestresNum, statut]);

  return (
    <div className="space-y-8">
      {/* --------------- Formulaire --------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur de pension de retraite
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 mb-8">
          {/* Age actuel */}
          <div>
            <label
              htmlFor="ageActuel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age actuel
            </label>
            <div className="relative">
              <input
                id="ageActuel"
                type="text"
                inputMode="numeric"
                value={ageActuel}
                onChange={(e) => setAgeActuel(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition pr-14"
                placeholder="Ex : 35"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                ans
              </span>
            </div>
          </div>

          {/* Salaire brut mensuel */}
          <div>
            <label
              htmlFor="salaireBrut"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salaire brut mensuel actuel
            </label>
            <div className="relative">
              <input
                id="salaireBrut"
                type="text"
                inputMode="decimal"
                value={salaireBrut}
                onChange={(e) => setSalaireBrut(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition pr-10"
                placeholder="Ex : 3000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                &euro;
              </span>
            </div>
          </div>

          {/* Trimestres cotises */}
          <div>
            <label
              htmlFor="trimestres"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Trimestres deja cotises
            </label>
            <input
              id="trimestres"
              type="text"
              inputMode="numeric"
              value={trimestresActuels}
              onChange={(e) => setTrimestresActuels(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="Ex : 40"
            />
            <p className="text-xs text-gray-500 mt-1">
              Consultez votre releve de carriere sur info-retraite.fr
            </p>
          </div>

          {/* Statut */}
          <div>
            <label
              htmlFor="statut"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Statut professionnel
            </label>
            <select
              id="statut"
              value={statut}
              onChange={(e) => setStatut(e.target.value as Statut)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
            >
              <option value="salarie-prive">Salarie du prive</option>
              <option value="fonctionnaire">Fonctionnaire</option>
              <option value="independant">Independant / TNS</option>
            </select>
          </div>
        </div>
      </div>

      {/* --------------- Resultats --------------- */}
      {result && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Resultat de la simulation
          </h3>

          {/* Big highlight box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mb-6">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-1">
              Pension mensuelle nette estimee
            </p>
            <p className="text-4xl font-bold text-blue-700">
              {formatEuro(result.pensionNette)}&nbsp;&euro;
            </p>
            <p className="text-sm text-blue-500 mt-1">
              par mois, a partir de {result.ageDepartEstime} ans
            </p>
          </div>

          {/* Breakdown */}
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <dl className="space-y-3">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Age de depart estime</dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {result.ageDepartEstime} ans
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">
                  Trimestres projetes a la retraite
                </dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {result.trimestresProjection} / {result.trimestresRequis}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Taux de liquidation</dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {(result.tauxLiquidation * 100).toLocaleString("fr-FR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  %
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                <dt className="text-sm text-gray-600">
                  Pension de base mensuelle
                </dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {formatEuro(result.pensionBaseMensuelle)}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">
                  Complementaire estimee
                </dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {formatEuro(result.complementaireMensuelle)}&nbsp;&euro;
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                <dt className="text-sm text-gray-600">
                  Pension totale brute
                </dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {formatEuro(result.pensionTotaleBrute)}&nbsp;&euro;
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium text-gray-800">
                  Pension nette estimee (~90 % du brut)
                </dt>
                <dd className="text-base font-bold text-blue-700">
                  {formatEuro(result.pensionNette)}&nbsp;&euro;
                </dd>
              </div>
            </dl>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Avertissement :</span> ce
              simulateur fournit une estimation simplifiee a titre indicatif. Le
              calcul reel depend de nombreux parametres (evolution de carriere,
              revalorisations, regimes speciaux, periodes de chomage, etc.). Pour
              une estimation officielle, consultez votre releve de carriere sur{" "}
              <strong>info-retraite.fr</strong> ou contactez votre caisse de
              retraite.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
