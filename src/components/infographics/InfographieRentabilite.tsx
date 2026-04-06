"use client";

import Infographic from "@/components/Infographic";

export default function InfographieRentabilite() {
  const prix = 200000;
  const loyerAnnuel = 12000;
  const charges = 2400;
  const impots = 2000;

  const brute = ((loyerAnnuel / prix) * 100).toFixed(1);
  const nette = (((loyerAnnuel - charges) / prix) * 100).toFixed(1);
  const netteNette = (((loyerAnnuel - charges - impots) / prix) * 100).toFixed(1);

  return (
    <Infographic
      title="Rentabilite locative : brute, nette et nette-nette"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-rentabilite-locative"
      sourceLabel="BonCalcul.fr - Calcul rentabilite locative"
    >
      {/* 3 formules */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Rentabilite brute", formule: "Loyers / Prix d'achat", taux: brute, color: "bg-blue-500", bgColor: "bg-blue-50 border-blue-200" },
          { label: "Rentabilite nette", formule: "Loyers - Charges / Prix", taux: nette, color: "bg-orange-500", bgColor: "bg-orange-50 border-orange-200" },
          { label: "Nette-nette", formule: "Loyers - Charges - Impots / Prix", taux: netteNette, color: "bg-green-500", bgColor: "bg-green-50 border-green-200" },
        ].map((r) => (
          <div key={r.label} className={`rounded-xl border p-4 text-center ${r.bgColor}`}>
            <p className="text-xs font-semibold text-gray-600 mb-1">{r.label}</p>
            <p className="text-2xl font-bold text-gray-800">{r.taux}%</p>
            <p className="text-[10px] text-gray-500 mt-1">{r.formule}</p>
          </div>
        ))}
      </div>

      {/* Exemple chiffre */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Exemple : bien a {prix.toLocaleString("fr-FR")} EUR, loyer {(loyerAnnuel / 12).toLocaleString("fr-FR")} EUR/mois
        </p>
        <div className="space-y-2">
          {[
            { label: "Loyers annuels", val: loyerAnnuel, color: "bg-blue-500" },
            { label: "- Charges (taxe, copro, assurance...)", val: -charges, color: "bg-orange-400" },
            { label: "- Fiscalite", val: -impots, color: "bg-red-400" },
          ].map((l) => (
            <div key={l.label} className="flex items-center justify-between text-xs">
              <span className="text-gray-600">{l.label}</span>
              <span className={`font-bold ${l.val < 0 ? "text-red-600" : "text-green-600"}`}>
                {l.val > 0 ? "+" : ""}{l.val.toLocaleString("fr-FR")} EUR
              </span>
            </div>
          ))}
          <div className="border-t pt-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-700">= Revenu net-net annuel</span>
            <span className="font-bold text-green-700">{(loyerAnnuel - charges - impots).toLocaleString("fr-FR")} EUR</span>
          </div>
        </div>
      </div>
    </Infographic>
  );
}
