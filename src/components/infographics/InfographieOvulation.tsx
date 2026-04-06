"use client";

import Infographic from "@/components/Infographic";

export default function InfographieOvulation() {
  const jours = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <Infographic
      title="Cycle menstruel de 28 jours et fenetre de fertilite"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-ovulation"
      sourceLabel="BonCalcul.fr - Calcul ovulation"
    >
      {/* Cycle visuel */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Visualisation du cycle</p>
        <div className="flex flex-wrap gap-1 justify-center">
          {jours.map((j) => {
            let bg = "bg-gray-100 text-gray-600";
            if (j <= 5) bg = "bg-red-200 text-red-800";
            else if (j >= 10 && j <= 16) bg = "bg-green-200 text-green-800";
            if (j === 14) bg = "bg-green-500 text-white";
            return (
              <div key={j} className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-semibold ${bg}`}>
                {j}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legende */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Regles", jours: "J1-J5", color: "bg-red-200" },
          { label: "Phase folliculaire", jours: "J6-J9", color: "bg-gray-100" },
          { label: "Fenetre fertile", jours: "J10-J16", color: "bg-green-200" },
          { label: "Ovulation", jours: "J14", color: "bg-green-500" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-sm ${l.color} shrink-0`} />
            <div>
              <p className="text-xs font-semibold text-gray-700">{l.label}</p>
              <p className="text-[10px] text-gray-500">{l.jours}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-pink-50 rounded-xl p-4 border border-pink-200 text-center">
        <p className="text-xs text-pink-800">
          <strong>L&apos;ovulation survient generalement 14 jours avant les prochaines regles.</strong> La fenetre de fertilite s&apos;etend de 5 jours avant a 1 jour apres l&apos;ovulation. La duree du cycle peut varier de 21 a 35 jours.
        </p>
      </div>
    </Infographic>
  );
}
