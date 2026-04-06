import type { Metadata } from "next";
import Link from "next/link";
import SiloHub from "@/components/SiloHub";
import { getSilo } from "@/data/silos";

const silo = getSilo("auto-transport")!;

export const metadata: Metadata = {
  title: silo.title,
  description: silo.metaDescription,
  keywords: [
    "consommation essence",
    "coût km voiture",
    "frais kilométriques",
    "barème km 2026",
    "budget auto",
    "L/100km",
  ],
  openGraph: {
    title: silo.title,
    description: silo.metaDescription,
    url: "https://www.boncalcul.fr/auto-transport",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
  },
  alternates: { canonical: "https://www.boncalcul.fr/auto-transport" },
};

const faqQuestions = [
  {
    question: "Comment calculer sa consommation de carburant ?",
    answer:
      "La consommation en L/100km se calcule ainsi : (litres consommés / distance parcourue en km) × 100. Par exemple, si vous avez consommé 45 litres pour 600 km, votre consommation est de 7,5 L/100km.",
  },
  {
    question: "Comment fonctionne le barème kilométrique fiscal ?",
    answer:
      "Le barème kilométrique est publié chaque année par l'administration fiscale. Il dépend de la puissance fiscale du véhicule (en CV) et du nombre de kilomètres parcourus dans l'année. Il permet de déduire les frais de trajet domicile-travail en frais réels. Les véhicules électriques bénéficient d'une majoration de 20%.",
  },
  {
    question: "Quels coûts prendre en compte pour le coût réel au km ?",
    answer:
      "Le coût réel au kilomètre inclut le carburant, l'assurance, l'entretien courant, les réparations, la décote du véhicule, le contrôle technique et le stationnement. Notre calculateur intègre tous ces postes pour une estimation complète.",
  },
];

export default function AutoTransportPage() {
  return (
    <SiloHub silo={silo} faqQuestions={faqQuestions}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Consommation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Calculez votre <Link href="/outils/calcul-consommation-essence" className="text-blue-600 hover:underline">consommation en L/100km</Link> et
            le coût de vos trajets.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Budget auto</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Estimez le <Link href="/outils/cout-km-voiture" className="text-blue-600 hover:underline">coût réel au km</Link> de
            votre véhicule (carburant, assurance, entretien, décote).
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Frais fiscaux</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Calculez vos <Link href="/outils/calcul-frais-kilometriques" className="text-blue-600 hover:underline">frais kilométriques</Link> déductibles
            avec le barème fiscal 2026.
          </p>
        </div>
      </div>
    </SiloHub>
  );
}
