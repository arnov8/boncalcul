"use client";

import Infographic from "@/components/Infographic";

const zonesHomme = [
  { label: "Athlete", range: "6-13%", color: "bg-blue-500", pct: 15 },
  { label: "Forme", range: "14-17%", color: "bg-green-500", pct: 20 },
  { label: "Normal", range: "18-24%", color: "bg-yellow-400", pct: 30 },
  { label: "Surpoids", range: "25-29%", color: "bg-orange-500", pct: 20 },
  { label: "Obesite", range: "30%+", color: "bg-red-500", pct: 15 },
];

const zonesFemme = [
  { label: "Athlete", range: "14-20%", color: "bg-blue-500", pct: 15 },
  { label: "Forme", range: "21-24%", color: "bg-green-500", pct: 20 },
  { label: "Normal", range: "25-31%", color: "bg-yellow-400", pct: 30 },
  { label: "Surpoids", range: "32-37%", color: "bg-orange-500", pct: 20 },
  { label: "Obesite", range: "38%+", color: "bg-red-500", pct: 15 },
];

export default function InfographieIMG() {
  return (
    <Infographic
      title="Indice de Masse Grasse : echelle par sexe"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-img"
      sourceLabel="BonCalcul.fr - Calcul IMG"
    >
      {/* Formule */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6 text-center">
        <p className="text-sm font-semibold text-blue-700 mb-1">Formule de Deurenberg</p>
        <p className="text-xs font-mono text-blue-600">IMG = (1,2 x IMC) + (0,23 x Age) - (10,8 x Sexe) - 5,4</p>
        <p className="text-xs text-gray-500 mt-1">Sexe = 1 pour homme, 0 pour femme</p>
      </div>

      {/* Échelles */}
      {[
        { sexe: "Homme", zones: zonesHomme },
        { sexe: "Femme", zones: zonesFemme },
      ].map((s) => (
        <div key={s.sexe} className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2 text-center">{s.sexe}</p>
          <div className="h-10 rounded-xl overflow-hidden flex border border-gray-200">
            {s.zones.map((z, i) => (
              <div key={i} className={`${z.color} flex items-center justify-center`} style={{ width: `${z.pct}%` }}>
                <span className="text-[9px] font-bold text-white">{z.range}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {s.zones.map((z, i) => (
              <span key={i} className="text-[9px] text-gray-500" style={{ width: `${z.pct}%`, textAlign: "center" }}>{z.label}</span>
            ))}
          </div>
        </div>
      ))}
    </Infographic>
  );
}
