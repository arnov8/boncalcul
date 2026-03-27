"use client";

import { useState, useMemo } from "react";

type Motif = "licenciement" | "rupture-conventionnelle";

function formatMontant(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculIndemnites() {
  const [salaire12Mois, setSalaire12Mois] = useState<string>("3000");
  const [salaire3Mois, setSalaire3Mois] = useState<string>("3200");
  const [annees, setAnnees] = useState<string>("12");
  const [moisAnciennete, setMoisAnciennete] = useState<string>("6");
  const [motif, setMotif] = useState<Motif>("licenciement");

  const result = useMemo(() => {
    const moyenne12 = parseFloat(salaire12Mois) || 0;
    const moyenne3 = parseFloat(salaire3Mois) || 0;

    // Le salaire de reference est le plus avantageux des deux
    const salaireReference = Math.max(moyenne12, moyenne3);
    const methodeRetenue =
      salaireReference === moyenne3 && moyenne3 > moyenne12
        ? "Moyenne des 3 derniers mois"
        : "Moyenne des 12 derniers mois";

    // Anciennete en annees decimales
    const anneesVal = parseInt(annees) || 0;
    const moisVal = parseInt(moisAnciennete) || 0;
    const ancienneteTotale = anneesVal + moisVal / 12;

    // Calcul indemnite legale
    // 1/4 de mois par annee pour les 10 premieres annees
    // 1/3 de mois par annee au-dela de 10 ans
    const anneesJusqua10 = Math.min(ancienneteTotale, 10);
    const anneesAuDela10 = Math.max(ancienneteTotale - 10, 0);

    const indemnitePartie1 = salaireReference * (1 / 4) * anneesJusqua10;
    const indemnitePartie2 = salaireReference * (1 / 3) * anneesAuDela10;
    const indemniteLegale = indemnitePartie1 + indemnitePartie2;

    // Anciennete insuffisante
    const eligible = ancienneteTotale >= 8 / 12; // 8 mois minimum

    return {
      salaireReference,
      methodeRetenue,
      ancienneteTotale,
      anneesJusqua10,
      anneesAuDela10,
      indemnitePartie1,
      indemnitePartie2,
      indemniteLegale,
      eligible,
    };
  }, [salaire12Mois, salaire3Mois, annees, moisAnciennete]);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Simulateur d&apos;indemnite de licenciement
        </h2>

        {/* Salaire moyen 12 mois */}
        <div className="mb-5">
          <label
            htmlFor="salaire12"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salaire brut mensuel moyen (12 derniers mois)
          </label>
          <input
            id="salaire12"
            type="number"
            min="0"
            step="100"
            value={salaire12Mois}
            onChange={(e) => setSalaire12Mois(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 3000"
          />
        </div>

        {/* Salaire moyen 3 mois */}
        <div className="mb-5">
          <label
            htmlFor="salaire3"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salaire brut mensuel moyen (3 derniers mois)
          </label>
          <input
            id="salaire3"
            type="number"
            min="0"
            step="100"
            value={salaire3Mois}
            onChange={(e) => setSalaire3Mois(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ex : 3200"
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
                type="number"
                min="0"
                max="50"
                step="1"
                value={annees}
                onChange={(e) => setAnnees(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="12"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="mois"
                className="block text-xs text-gray-500 mb-1"
              >
                Mois
              </label>
              <input
                id="mois"
                type="number"
                min="0"
                max="11"
                step="1"
                value={moisAnciennete}
                onChange={(e) => setMoisAnciennete(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="6"
              />
            </div>
          </div>
        </div>

        {/* Motif */}
        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Motif de rupture
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setMotif("licenciement")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                motif === "licenciement"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Licenciement
            </button>
            <button
              onClick={() => setMotif("rupture-conventionnelle")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                motif === "rupture-conventionnelle"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Rupture conventionnelle
            </button>
          </div>
        </div>

        {/* Resultat principal */}
        {!result.eligible ? (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center mb-6">
            <p className="text-sm text-orange-700 font-medium">
              L&apos;anciennete minimum requise est de 8 mois pour beneficier de
              l&apos;indemnite legale de licenciement.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mb-6">
              <p className="text-sm text-blue-600 font-medium mb-1">
                Indemnite legale brute{" "}
                {motif === "rupture-conventionnelle"
                  ? "(rupture conventionnelle)"
                  : "(licenciement)"}
              </p>
              <p className="text-4xl font-bold text-blue-700">
                {formatMontant(result.indemniteLegale)}&nbsp;&euro;
              </p>
              <p className="text-sm text-blue-500 mt-1">
                Montant minimum garanti par la loi
              </p>
            </div>

            {/* Detail du calcul */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Salaire de reference
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Moyenne des 12 derniers mois
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatMontant(parseFloat(salaire12Mois) || 0)} &euro;
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Moyenne des 3 derniers mois
                  </span>
                  <span className="font-medium text-gray-800">
                    {formatMontant(parseFloat(salaire3Mois) || 0)} &euro;
                  </span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between font-semibold text-green-700">
                  <span>Salaire retenu ({result.methodeRetenue})</span>
                  <span>{formatMontant(result.salaireReference)} &euro;</span>
                </div>
              </div>
            </div>

            {/* Detail du calcul de l'indemnite */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Detail du calcul
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Anciennete totale
                  </span>
                  <span className="font-medium text-gray-800">
                    {parseInt(annees) || 0} an{(parseInt(annees) || 0) > 1 ? "s" : ""}{" "}
                    et {parseInt(moisAnciennete) || 0} mois (
                    {result.ancienneteTotale.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    annees)
                  </span>
                </div>
                {result.anneesJusqua10 > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      1/4 de mois &times;{" "}
                      {result.anneesJusqua10.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      annees
                    </span>
                    <span className="font-medium text-gray-800">
                      {formatMontant(result.indemnitePartie1)} &euro;
                    </span>
                  </div>
                )}
                {result.anneesAuDela10 > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      1/3 de mois &times;{" "}
                      {result.anneesAuDela10.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      annees
                    </span>
                    <span className="font-medium text-gray-800">
                      {formatMontant(result.indemnitePartie2)} &euro;
                    </span>
                  </div>
                )}
                <hr className="border-gray-200" />
                <div className="flex justify-between font-semibold text-blue-700">
                  <span>Indemnite legale brute</span>
                  <span>{formatMontant(result.indemniteLegale)} &euro;</span>
                </div>
              </div>
            </div>

            {/* Note sur la convention collective */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Important :</strong> ce montant correspond a
                l&apos;indemnite <strong>legale minimale</strong>. Votre
                convention collective peut prevoir une indemnite plus
                avantageuse. Consultez votre convention collective ou votre
                service RH pour connaitre vos droits exacts.
              </p>
            </div>

            {motif === "rupture-conventionnelle" && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-800">
                  <strong>Rupture conventionnelle :</strong> l&apos;indemnite
                  affichee est le minimum legal. Dans le cadre d&apos;une
                  negociation, vous pouvez convenir d&apos;un montant
                  superieur (indemnite supra-legale). Vous conservez egalement
                  vos droits aux allocations chomage.
                </p>
              </div>
            )}
          </>
        )}

        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimation indicative basee sur l&apos;indemnite legale de
          licenciement prevue par le Code du travail (art. R.1234-2). Le montant
          reel peut varier selon votre convention collective et votre situation
          personnelle.
        </p>
      </div>
    </div>
  );
}
