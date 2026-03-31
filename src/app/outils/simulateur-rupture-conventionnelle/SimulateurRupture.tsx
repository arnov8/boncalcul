"use client";

import { useState, useMemo } from "react";

function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function SimulateurRupture() {
  const [salaireBrut, setSalaireBrut] = useState<string>("3000");
  const [annees, setAnnees] = useState<string>("5");
  const [moisComp, setMoisComp] = useState<string>("0");
  const [conventionAvantageuse, setConventionAvantageuse] =
    useState<string>("non");

  const result = useMemo(() => {
    const salaire = parseFloat(salaireBrut) || 0;
    const anneesVal = parseInt(annees) || 0;
    const moisVal = Math.min(Math.max(parseInt(moisComp) || 0, 0), 11);

    // Anciennete totale en annees decimales
    const ancienneteTotale = anneesVal + moisVal / 12;

    // Eligibilite : 8 mois minimum
    const eligible = ancienneteTotale >= 8 / 12;

    // Indemnite legale (Art. L1237-13)
    // 1/4 de mois par annee pour les 10 premieres annees
    // 1/3 de mois par annee au-dela de 10 ans
    const anneesJusqua10 = Math.min(ancienneteTotale, 10);
    const anneesAuDela10 = Math.max(ancienneteTotale - 10, 0);

    const indemnitePartie1 = salaire * (1 / 4) * anneesJusqua10;
    const indemnitePartie2 = salaire * (1 / 3) * anneesAuDela10;
    const indemniteLegale = indemnitePartie1 + indemnitePartie2;

    // Convention collective avantageuse : estimation +25%
    const indemniteConventionnelle =
      conventionAvantageuse === "oui"
        ? indemniteLegale * 1.25
        : indemniteLegale;

    const indemniteRetenue = Math.max(indemniteLegale, indemniteConventionnelle);

    // Estimation ARE (allocation chomage)
    // SJR = salaire brut mensuel x 12 / 365
    const sjr = (salaire * 12) / 365;

    // ARE journaliere = max(40.4% x SJR + 12.95, 57% x SJR)
    const areFormule1 = 0.404 * sjr + 12.95;
    const areFormule2 = 0.57 * sjr;
    const areJournaliere = Math.max(areFormule1, areFormule2);

    // Plafonnement a 75% du SJR
    const areJournalierePlafonnee = Math.min(areJournaliere, 0.75 * sjr);

    // ARE mensuelle
    const areMensuelle = areJournalierePlafonnee * 30;

    // Duree ARE : min(anciennete en mois, 24 mois) pour <53 ans
    const ancienneteMois = anneesVal * 12 + moisVal;
    const dureeAREMois = Math.min(ancienneteMois, 24);

    // Forfait social employeur : 20%
    const forfaitSocial = indemniteRetenue * 0.2;

    // Delai de carence
    // 7 jours incompressibles + differe specifique
    const differeSpecifique = Math.min(
      Math.max(
        Math.floor((indemniteRetenue - indemniteLegale) / sjr),
        0
      ),
      150
    );
    const delaiCarenceJours = 7 + differeSpecifique;

    return {
      salaire,
      ancienneteTotale,
      anneesJusqua10,
      anneesAuDela10,
      indemnitePartie1,
      indemnitePartie2,
      indemniteLegale,
      indemniteRetenue,
      sjr,
      areFormule1,
      areFormule2,
      areJournalierePlafonnee,
      areMensuelle,
      dureeAREMois,
      forfaitSocial,
      delaiCarenceJours,
      differeSpecifique,
      eligible,
    };
  }, [salaireBrut, annees, moisComp, conventionAvantageuse]);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur de rupture conventionnelle
        </h2>

        {/* Salaire brut mensuel moyen */}
        <div className="mb-5">
          <label
            htmlFor="salaireBrut"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salaire brut mensuel moyen (12 derniers mois)
          </label>
          <input
            id="salaireBrut"
            type="text"
            inputMode="decimal"
            min="0"
            step="100"
            value={salaireBrut}
            onChange={(e) => setSalaireBrut(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 3000"
          />
          <p className="text-xs text-gray-400 mt-1">
            Incluez les primes et gratifications au prorata dans ce montant.
          </p>
        </div>

        {/* Anciennete */}
        <div className="mb-5">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Anciennete dans l&apos;entreprise
          </span>
          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="annees"
                className="block text-xs text-gray-500 mb-1"
              >
                Annees
              </label>
              <input
                id="annees"
                type="text"
                inputMode="decimal"
                min="0"
                max="50"
                step="1"
                value={annees}
                onChange={(e) => setAnnees(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="5"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="moisComp"
                className="block text-xs text-gray-500 mb-1"
              >
                Mois complementaires
              </label>
              <input
                id="moisComp"
                type="text"
                inputMode="decimal"
                min="0"
                max="11"
                step="1"
                value={moisComp}
                onChange={(e) => setMoisComp(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Convention collective */}
        <div className="mb-6">
          <label
            htmlFor="convention"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Convention collective avantageuse
          </label>
          <select
            id="convention"
            value={conventionAvantageuse}
            onChange={(e) => setConventionAvantageuse(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="non">Non - indemnite legale uniquement</option>
            <option value="oui">
              Oui - indemnite conventionnelle superieure
            </option>
          </select>
          <p className="text-xs text-gray-400 mt-1">
            Si votre convention collective prevoit une indemnite superieure au
            minimum legal, selectionnez &quot;Oui&quot; (estimation +25 %).
          </p>
        </div>

        {/* Resultats */}
        {!result.eligible ? (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center mb-6">
            <p className="text-sm text-orange-700 font-medium">
              L&apos;anciennete minimum requise est de 8 mois pour beneficier de
              l&apos;indemnite de rupture conventionnelle.
            </p>
          </div>
        ) : (
          <>
            {/* Indemnite principale */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mb-6">
              <p className="text-sm text-blue-600 font-medium mb-1">
                Indemnite minimale de rupture conventionnelle
              </p>
              <p className="text-2xl sm:text-4xl font-bold text-blue-700">
                {formatEuro(result.indemniteRetenue)}&nbsp;&euro;
              </p>
              <p className="text-sm text-blue-500 mt-1">
                {conventionAvantageuse === "oui"
                  ? "Estimation avec convention collective avantageuse"
                  : "Montant minimum garanti par la loi"}
              </p>
            </div>

            {/* Estimation ARE */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-6">
              <p className="text-sm text-green-600 font-medium mb-1">
                Estimation ARE mensuelle
              </p>
              <p className="text-2xl sm:text-4xl font-bold text-green-700">
                {formatEuro(result.areMensuelle)}&nbsp;&euro;
              </p>
              <p className="text-sm text-green-500 mt-1">
                Pendant {result.dureeAREMois} mois maximum (moins de 53 ans)
              </p>
            </div>

            {/* Detail salaire de reference */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Salaire de reference
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    Salaire brut mensuel moyen
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatEuro(result.salaire)} &euro;
                  </span>
                </div>
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">Anciennete totale</span>
                  <span className="font-medium text-gray-800">
                    {parseInt(annees) || 0} an
                    {(parseInt(annees) || 0) > 1 ? "s" : ""} et{" "}
                    {parseInt(moisComp) || 0} mois (
                    {result.ancienneteTotale.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    annees)
                  </span>
                </div>
              </div>
            </div>

            {/* Detail du calcul de l'indemnite */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Calcul detaille de l&apos;indemnite
              </h3>
              <div className="space-y-2 text-sm">
                {result.anneesJusqua10 > 0 && (
                  <div className="flex justify-between flex-wrap gap-1">
                    <span className="text-gray-600">
                      1/4 de mois &times;{" "}
                      {result.anneesJusqua10.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      annees
                    </span>
                    <span className="font-medium text-gray-800">
                      {formatEuro(result.indemnitePartie1)} &euro;
                    </span>
                  </div>
                )}
                {result.anneesAuDela10 > 0 && (
                  <div className="flex justify-between flex-wrap gap-1">
                    <span className="text-gray-600">
                      1/3 de mois &times;{" "}
                      {result.anneesAuDela10.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      annees
                    </span>
                    <span className="font-medium text-gray-800">
                      {formatEuro(result.indemnitePartie2)} &euro;
                    </span>
                  </div>
                )}
                <hr className="border-gray-200" />
                <div className="flex justify-between flex-wrap gap-1 font-semibold text-blue-700">
                  <span>Indemnite legale minimale</span>
                  <span>{formatEuro(result.indemniteLegale)} &euro;</span>
                </div>
                {conventionAvantageuse === "oui" && (
                  <div className="flex justify-between flex-wrap gap-1 font-semibold text-green-700">
                    <span>
                      Indemnite conventionnelle estimee (+25 %)
                    </span>
                    <span>
                      {formatEuro(result.indemniteRetenue)} &euro;
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Detail ARE */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Estimation allocation chomage (ARE)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    Salaire journalier de reference (SJR)
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatEuro(result.sjr)} &euro;
                  </span>
                </div>
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    ARE journaliere estimee
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatEuro(result.areJournalierePlafonnee)} &euro;
                  </span>
                </div>
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    ARE mensuelle estimee
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatEuro(result.areMensuelle)} &euro;
                  </span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    Duree estimee des droits ARE
                  </span>
                  <span className="font-medium text-gray-800">
                    {result.dureeAREMois} mois (moins de 53 ans)
                  </span>
                </div>
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    Delai de carence estime
                  </span>
                  <span className="font-medium text-gray-800">
                    {result.delaiCarenceJours} jours (7 j. incompressibles
                    {result.differeSpecifique > 0
                      ? ` + ${result.differeSpecifique} j. differe specifique`
                      : ""}
                    )
                  </span>
                </div>
              </div>
            </div>

            {/* Forfait social employeur */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Cout employeur
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between flex-wrap gap-1">
                  <span className="text-gray-600">
                    Forfait social employeur (20 %)
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatEuro(result.forfaitSocial)} &euro;
                  </span>
                </div>
                <div className="flex justify-between flex-wrap gap-1 font-semibold text-gray-800">
                  <span>Cout total employeur</span>
                  <span>
                    {formatEuro(result.indemniteRetenue + result.forfaitSocial)}{" "}
                    &euro;
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Important :</strong> ce simulateur fournit une{" "}
                <strong>estimation indicative</strong> basee sur l&apos;indemnite
                legale de licenciement (art. L.1237-13 du Code du travail).
                L&apos;indemnite reelle peut etre superieure si votre{" "}
                <strong>convention collective</strong> prevoit des dispositions
                plus favorables. Verifiez systematiquement votre convention
                collective ou consultez votre service RH avant de signer la
                convention de rupture.
              </p>
            </div>
          </>
        )}

        <p className="text-xs text-gray-400 mt-4 text-center">
          Calcul realise dans votre navigateur. Aucune donnee transmise. Estimation
          basee sur la reglementation en vigueur en 2026.
        </p>
      </div>
    </div>
  );
}
