"use client";

import Infographic from "@/components/Infographic";

const conversions = [
  { cat: "Longueur", items: [{ de: "1 km", vers: "0,621 miles" }, { de: "1 pouce", vers: "2,54 cm" }, { de: "1 pied", vers: "30,48 cm" }], color: "bg-blue-50 border-blue-200", textColor: "text-blue-700" },
  { cat: "Masse", items: [{ de: "1 kg", vers: "2,205 lbs" }, { de: "1 once", vers: "28,35 g" }, { de: "1 tonne", vers: "2 205 lbs" }], color: "bg-green-50 border-green-200", textColor: "text-green-700" },
  { cat: "Temperature", items: [{ de: "0 C", vers: "32 F" }, { de: "100 C", vers: "212 F" }, { de: "37 C", vers: "98,6 F" }], color: "bg-orange-50 border-orange-200", textColor: "text-orange-700" },
  { cat: "Volume", items: [{ de: "1 litre", vers: "0,264 gallon US" }, { de: "1 cl", vers: "10 ml" }, { de: "1 m3", vers: "1 000 litres" }], color: "bg-purple-50 border-purple-200", textColor: "text-purple-700" },
];

export default function InfographieConversion() {
  return (
    <Infographic
      title="Tableau des conversions d'unites courantes"
      sourceUrl="https://boncalcul.fr/outils/conversion-unites"
      sourceLabel="BonCalcul.fr - Conversion d'unites"
    >
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {conversions.map((c) => (
          <div key={c.cat} className={`rounded-xl border p-4 ${c.color}`}>
            <p className={`text-sm font-semibold ${c.textColor} mb-3 text-center`}>{c.cat}</p>
            <div className="space-y-2">
              {c.items.map((item, j) => (
                <div key={j} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 text-xs">
                  <span className="font-semibold text-gray-700">{item.de}</span>
                  <span className="text-gray-400">=</span>
                  <span className="font-semibold text-gray-700">{item.vers}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Formule temperature */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
        <p className="text-sm font-semibold text-gray-700 mb-1">Formule de conversion de temperature</p>
        <p className="text-xs font-mono text-gray-600">F = (C x 9/5) + 32 | C = (F - 32) x 5/9</p>
      </div>
    </Infographic>
  );
}
