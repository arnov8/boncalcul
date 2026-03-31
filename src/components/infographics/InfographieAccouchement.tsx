"use client";

import Infographic from "@/components/Infographic";

const trimestres = [
  { num: "1er trimestre", semaines: "1 a 13 SA", etapes: "Formation des organes, premieres echographies", color: "bg-pink-100 border-pink-300" },
  { num: "2e trimestre", semaines: "14 a 27 SA", etapes: "Mouvements du bebe, echo morphologique", color: "bg-purple-100 border-purple-300" },
  { num: "3e trimestre", semaines: "28 a 41 SA", etapes: "Maturation des poumons, preparation a l'accouchement", color: "bg-blue-100 border-blue-300" },
];

export default function InfographieAccouchement() {
  return (
    <Infographic
      title="Timeline de la grossesse : les 3 trimestres"
      sourceUrl="https://boncalcul.fr/outils/calcul-date-accouchement"
      sourceLabel="BonCalcul.fr - Calcul date d'accouchement"
    >
      {/* Formula */}
      <div className="bg-pink-50 rounded-xl p-5 border border-pink-200 mb-6 text-center">
        <p className="text-sm font-semibold text-pink-700 mb-1">Formule de Naegele</p>
        <p className="text-xs text-pink-600">Date d&apos;accouchement prevue = Date des dernieres regles + 280 jours (40 semaines)</p>
      </div>

      {/* Timeline */}
      <div className="space-y-4 mb-6">
        {trimestres.map((t) => (
          <div key={t.num} className={`rounded-xl border p-4 ${t.color}`}>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-semibold text-gray-700">{t.num}</p>
              <span className="text-xs font-mono text-gray-500">{t.semaines}</span>
            </div>
            <p className="text-xs text-gray-600">{t.etapes}</p>
          </div>
        ))}
      </div>

      {/* Key dates */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Dates cles a retenir</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { sa: "12 SA", label: "1ere echo" },
            { sa: "22 SA", label: "Echo morpho" },
            { sa: "32 SA", label: "3e echo" },
            { sa: "37 SA", label: "Bebe a terme" },
          ].map((d) => (
            <div key={d.sa} className="bg-white rounded-lg p-3 text-center border border-gray-200">
              <p className="text-sm font-bold text-pink-600">{d.sa}</p>
              <p className="text-[10px] text-gray-500">{d.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
