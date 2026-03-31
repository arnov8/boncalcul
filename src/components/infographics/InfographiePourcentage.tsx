"use client";

import Infographic from "@/components/Infographic";

const modes = [
  {
    title: "Pourcentage d'un nombre",
    formula: "X% de Y = (X x Y) / 100",
    example: "20% de 150 = 30",
    emoji: "&#128290;",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
  },
  {
    title: "Variation en pourcentage",
    formula: "((Nouveau - Ancien) / Ancien) x 100",
    example: "De 80 a 100 = +25%",
    emoji: "&#128200;",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
  },
  {
    title: "Proportion en pourcentage",
    formula: "(Partie / Total) x 100",
    example: "30 sur 120 = 25%",
    emoji: "&#127856;",
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
  },
];

export default function InfographiePourcentage() {
  return (
    <Infographic
      title="Les 3 types de calcul de pourcentage"
      sourceUrl="https://boncalcul.fr/outils/calcul-pourcentage"
      sourceLabel="BonCalcul.fr - Calcul pourcentage"
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {modes.map((m, i) => (
          <div key={i} className={`rounded-xl border p-5 ${m.color} text-center`}>
            <div className="text-3xl mb-2" dangerouslySetInnerHTML={{ __html: m.emoji }} />
            <h4 className={`font-bold text-sm mb-2 ${m.textColor}`}>{m.title}</h4>
            <p className="text-xs font-mono bg-white rounded-lg px-3 py-2 mb-2 text-gray-700">{m.formula}</p>
            <p className={`text-sm font-semibold ${m.textColor}`}>{m.example}</p>
          </div>
        ))}
      </div>

      {/* Quick reference */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Equivalences rapides</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { pct: "10%", frac: "1/10", dec: "0,1" },
            { pct: "25%", frac: "1/4", dec: "0,25" },
            { pct: "33%", frac: "1/3", dec: "0,33" },
            { pct: "50%", frac: "1/2", dec: "0,5" },
          ].map((eq) => (
            <div key={eq.pct} className="bg-white rounded-lg p-3 text-center border border-gray-200">
              <p className="text-lg font-bold text-blue-600">{eq.pct}</p>
              <p className="text-xs text-gray-500">= {eq.frac} = {eq.dec}</p>
            </div>
          ))}
        </div>
      </div>
    </Infographic>
  );
}
