"use client";

import Infographic from "@/components/Infographic";

const formules = [
  { nom: "Lorentz", homme: "Taille - 100 - (Taille - 150)/4", femme: "Taille - 100 - (Taille - 150)/2.5", ex: "73 kg", color: "bg-blue-500" },
  { nom: "Devine", homme: "50 + 2,3 x (Taille/2,54 - 60)", femme: "45,5 + 2,3 x (Taille/2,54 - 60)", ex: "75 kg", color: "bg-green-500" },
  { nom: "Creff", homme: "(Taille - 100 + Age/10) x 0,9", femme: "(Taille - 100 + Age/10) x 0,9", ex: "70 kg", color: "bg-orange-500" },
  { nom: "IMC 22", homme: "22 x Taille(m)^2", femme: "22 x Taille(m)^2", ex: "72 kg", color: "bg-purple-500" },
];

export default function InfographiePoidsIdeal() {
  return (
    <Infographic
      title="Poids ideal : comparaison des 4 formules"
      sourceUrl="https://boncalcul.fr/outils/calcul-poids-ideal"
      sourceLabel="BonCalcul.fr - Calcul poids ideal"
    >
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500">Exemple : homme, 180 cm, 30 ans</p>
      </div>

      {/* Barres comparatives */}
      <div className="space-y-4 mb-6">
        {formules.map((f) => (
          <div key={f.nom} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">{f.nom}</span>
              <span className="text-sm font-bold text-gray-800">{f.ex}</span>
            </div>
            <div className="h-7 rounded-lg overflow-hidden bg-gray-200">
              <div className={`${f.color} h-full rounded-lg flex items-center px-3`} style={{ width: `${(parseFloat(f.ex) / 80) * 100}%` }}>
                <span className="text-xs font-bold text-white">{f.ex}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
        <p className="text-xs text-amber-800">
          <strong>Ces formules sont indicatives.</strong> Le poids ideal depend aussi de la masse musculaire,
          de l&apos;ossature et du morphotype. Consultez un professionnel de sante pour un avis personnalise.
        </p>
      </div>
    </Infographic>
  );
}
