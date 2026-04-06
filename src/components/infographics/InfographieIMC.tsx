"use client";

import Infographic from "@/components/Infographic";

const categories = [
  {
    label: "Denutrition",
    range: "< 16,5",
    color: "bg-blue-700",
    textColor: "text-white",
    width: "8%",
  },
  {
    label: "Maigreur",
    range: "16,5 - 18,5",
    color: "bg-blue-400",
    textColor: "text-white",
    width: "10%",
  },
  {
    label: "Normal",
    range: "18,5 - 25",
    color: "bg-green-500",
    textColor: "text-white",
    width: "30%",
  },
  {
    label: "Surpoids",
    range: "25 - 30",
    color: "bg-yellow-400",
    textColor: "text-gray-800",
    width: "22%",
  },
  {
    label: "Obesite I",
    range: "30 - 35",
    color: "bg-orange-400",
    textColor: "text-white",
    width: "15%",
  },
  {
    label: "Obesite II",
    range: "35 - 40",
    color: "bg-red-500",
    textColor: "text-white",
    width: "10%",
  },
  {
    label: "Obesite III",
    range: "> 40",
    color: "bg-red-800",
    textColor: "text-white",
    width: "5%",
  },
];

// Example cursor at IMC 22.5
const cursorPosition = 38; // percent from left (in the "Normal" zone)

export default function InfographieIMC() {
  return (
    <Infographic
      title="Echelle de l'Indice de Masse Corporelle (IMC) selon l'OMS"
      sourceUrl="https://www.boncalcul.fr/outils/calcul-imc"
      sourceLabel="BonCalcul.fr - Calcul IMC"
    >
      {/* Formula */}
      <div className="text-center mb-8">
        <div className="inline-block bg-gray-50 border border-gray-200 rounded-xl px-6 py-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Formule
          </p>
          <p className="text-lg font-mono font-bold text-gray-800">
            IMC = Poids (kg) / Taille (m)<sup>2</sup>
          </p>
        </div>
      </div>

      {/* Scale bar */}
      <div className="mb-2">
        <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
          Categories de l&apos;OMS pour les adultes
        </p>

        {/* Main scale */}
        <div className="relative">
          {/* Cursor indicator */}
          <div
            className="absolute -top-8 flex flex-col items-center z-10"
            style={{ left: `${cursorPosition}%`, transform: "translateX(-50%)" }}
          >
            <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full border border-green-300">
              22,5
            </span>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-green-400 mt-0.5" />
          </div>

          <div className="flex h-10 md:h-12 rounded-xl overflow-hidden shadow-inner border border-gray-200">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`${cat.color} flex items-center justify-center transition-all relative group`}
                style={{ width: cat.width }}
                title={`${cat.label}: IMC ${cat.range}`}
              >
                <span
                  className={`text-[8px] md:text-[10px] font-bold ${cat.textColor} leading-tight text-center px-0.5 drop-shadow-sm`}
                >
                  {cat.range}
                </span>
              </div>
            ))}
          </div>

          {/* Cursor line */}
          <div
            className="absolute top-0 h-10 md:h-12 w-0.5 bg-gray-800 z-10"
            style={{ left: `${cursorPosition}%`, transform: "translateX(-50%)" }}
          />
        </div>
      </div>

      {/* Labels below */}
      <div className="flex mb-8 text-[7px] md:text-[9px] text-gray-600">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="text-center leading-tight"
            style={{ width: cat.width }}
          >
            <span className="font-medium">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Detailed cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          {
            imc: "< 18,5",
            label: "Insuffisance ponderale",
            icon: "&#9888;",
            color: "border-blue-300 bg-blue-50",
            textColor: "text-blue-700",
            risk: "Carences, fatigue, fragilite osseuse",
          },
          {
            imc: "18,5 - 25",
            label: "Poids normal",
            icon: "&#10003;",
            color: "border-green-300 bg-green-50",
            textColor: "text-green-700",
            risk: "Risque minimal pour la sante",
          },
          {
            imc: "25 - 30",
            label: "Surpoids",
            icon: "&#9888;",
            color: "border-yellow-300 bg-yellow-50",
            textColor: "text-yellow-700",
            risk: "Risque accru cardiovasculaire, diabete",
          },
          {
            imc: "> 30",
            label: "Obesite",
            icon: "&#9888;",
            color: "border-red-300 bg-red-50",
            textColor: "text-red-700",
            risk: "Risque eleve, prise en charge recommandee",
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 ${card.color} p-4 text-center`}
          >
            <div
              className={`text-2xl mb-1 ${card.textColor}`}
              dangerouslySetInnerHTML={{ __html: card.icon }}
            />
            <p className={`text-sm font-bold ${card.textColor}`}>
              {card.label}
            </p>
            <p className="text-lg font-bold text-gray-800 mt-1">{card.imc}</p>
            <p className="text-[10px] text-gray-500 mt-2 leading-tight">
              {card.risk}
            </p>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
        <strong>Note :</strong> L&apos;IMC est un indicateur de depistage, pas un
        diagnostic. Il ne distingue pas masse musculaire et masse graisseuse.
        Consultez un professionnel de sante pour une evaluation complete.
      </div>
    </Infographic>
  );
}
