"use client";

import Infographic from "@/components/Infographic";

export default function InfographieRachat() {
  return (
    <Infographic
      title="Rachat de credit : avant vs apres"
      sourceUrl="https://boncalcul.fr/outils/simulateur-rachat-credit"
      sourceLabel="BonCalcul.fr - Simulateur rachat credit"
    >
      {/* Before / After comparison */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 rounded-xl p-5 border border-red-200">
          <p className="text-sm font-semibold text-red-700 mb-3 text-center">&#10060; Avant rachat</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Credit immo</span>
              <span className="font-bold text-gray-800">850 EUR/mois</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Credit auto</span>
              <span className="font-bold text-gray-800">320 EUR/mois</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Credit conso</span>
              <span className="font-bold text-gray-800">180 EUR/mois</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-sm">
              <span className="font-semibold text-red-700">Total mensuel</span>
              <span className="font-bold text-red-700">1 350 EUR</span>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <p className="text-sm font-semibold text-green-700 mb-3 text-center">&#10004; Apres rachat</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Credit unique regroupe</span>
              <span className="font-bold text-gray-800">890 EUR/mois</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-sm">
              <span className="font-semibold text-green-700">Total mensuel</span>
              <span className="font-bold text-green-700">890 EUR</span>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-green-100 mt-2">
              <p className="text-xs text-gray-500">Economie mensuelle</p>
              <p className="text-xl font-bold text-green-700">-460 EUR/mois</p>
              <p className="text-xs text-green-600">soit -34% de mensualite</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attention */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
        <p className="text-xs text-amber-800">
          <strong>Attention :</strong> un rachat de credit reduit la mensualite mais allonge la duree.
          Le cout total du credit peut augmenter. Comparez toujours le cout total avant et apres.
        </p>
      </div>
    </Infographic>
  );
}
