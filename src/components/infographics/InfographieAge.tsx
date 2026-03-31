"use client";

import Infographic from "@/components/Infographic";

export default function InfographieAge() {
  return (
    <Infographic
      title="Votre age en chiffres : le saviez-vous ?"
      sourceUrl="https://boncalcul.fr/outils/calcul-age"
      sourceLabel="BonCalcul.fr - Calcul d'age"
    >
      {/* Timeline 30 ans */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-4">A 30 ans, vous avez deja vecu environ...</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: "Jours", value: "10 950", emoji: "&#128197;" },
            { label: "Heures", value: "262 800", emoji: "&#9200;" },
            { label: "Battements de coeur", value: "~1,26 milliard", emoji: "&#10084;&#65039;" },
            { label: "Respirations", value: "~236 millions", emoji: "&#127788;&#65039;" },
            { label: "Repas", value: "~32 850", emoji: "&#127869;" },
            { label: "Heures de sommeil", value: "~87 600", emoji: "&#128164;" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
              <div className="text-2xl mb-1" dangerouslySetInnerHTML={{ __html: item.emoji }} />
              <p className="text-lg font-bold text-gray-800">{item.value}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Age milestones */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
        <p className="text-sm font-semibold text-blue-700 mb-3 text-center">Ages cles en France</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { age: "16 ans", label: "Permis AM" },
            { age: "18 ans", label: "Majorite" },
            { age: "25 ans", label: "Location sans garant" },
            { age: "62 ans", label: "Retraite anticipee" },
            { age: "64 ans", label: "Retraite legale" },
          ].map((m) => (
            <div key={m.age} className="bg-white rounded-lg px-3 py-2 border border-blue-100 text-center">
              <p className="text-sm font-bold text-blue-700">{m.age}</p>
              <p className="text-[10px] text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
