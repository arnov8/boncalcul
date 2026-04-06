import type { Metadata } from "next";
import Link from "next/link";
import SiloHub from "@/components/SiloHub";
import { getSilo } from "@/data/silos";

const silo = getSilo("fiscalite")!;

export const metadata: Metadata = {
  title: silo.title,
  description: silo.metaDescription,
  keywords: [
    "simulateur impôt revenu",
    "calcul TVA",
    "frais kilométriques",
    "micro-entrepreneur charges",
    "barème fiscal 2026",
    "déclaration impôts",
  ],
  openGraph: {
    title: silo.title,
    description: silo.metaDescription,
    url: "https://www.boncalcul.fr/fiscalite",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
  },
  alternates: { canonical: "https://www.boncalcul.fr/fiscalite" },
};

const faqQuestions = [
  {
    question: "Comment fonctionne le barème progressif de l'impôt sur le revenu ?",
    answer:
      "L'impôt est calculé par tranches : 0% jusqu'à ~11 294 €, 11% de ~11 294 € à ~28 797 €, 30% de ~28 797 € à ~82 341 €, 41% de ~82 341 € à ~177 106 €, et 45% au-delà. Le revenu est divisé par le nombre de parts (quotient familial) avant application du barème.",
  },
  {
    question: "Quels sont les taux de TVA en France ?",
    answer:
      "La France applique 4 taux de TVA : le taux normal (20%), le taux intermédiaire (10% — restauration, travaux), le taux réduit (5,5% — alimentation, livres, énergie) et le taux super-réduit (2,1% — presse, médicaments remboursés).",
  },
  {
    question: "Comment déduire ses frais kilométriques des impôts ?",
    answer:
      "Si vos frais réels sont supérieurs à la déduction forfaitaire de 10%, vous pouvez utiliser le barème kilométrique fiscal pour calculer les frais de trajet domicile-travail. Le barème dépend de la puissance fiscale du véhicule et du nombre de kilomètres parcourus. Les véhicules électriques bénéficient d'une majoration de 20%.",
  },
  {
    question: "Quelles sont les charges d'un micro-entrepreneur ?",
    answer:
      "Les charges sociales dépendent de l'activité : ~12,3% pour la vente de marchandises, ~21,2% pour les prestations de services BIC, ~21,1% pour les professions libérales (hors CIPAV). S'ajoute la CFP (~0,1-0,3%). Le versement libératoire de l'IR est possible sous conditions de revenus.",
  },
];

export default function FiscalitePage() {
  return (
    <SiloHub silo={silo} faqQuestions={faqQuestions}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Impôt sur le revenu</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Simulez votre <Link href="/outils/simulateur-impot-revenu" className="text-blue-600 hover:underline">impôt sur le revenu 2026</Link> avec
            le barème progressif, le quotient familial et le détail par tranche.
            Calculez vos <Link href="/outils/calcul-frais-kilometriques" className="text-blue-600 hover:underline">frais kilométriques</Link> déductibles
            en frais réels.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">TVA et entreprise</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Convertissez vos montants <Link href="/outils/calcul-tva" className="text-blue-600 hover:underline">HT/TTC</Link> avec
            tous les taux français. Micro-entrepreneurs : calculez vos <Link href="/outils/calcul-charges-micro-entrepreneur" className="text-blue-600 hover:underline">charges sociales</Link> et
            votre revenu net.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
          <h3 className="font-bold text-gray-800 mb-3">Plus-value immobilière</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Estimez l&apos;impôt sur la <Link href="/outils/calcul-plus-value-immobiliere" className="text-blue-600 hover:underline">plus-value immobilière</Link> lors
            de la vente d&apos;un bien, avec les abattements pour durée de détention (exonération totale après 22 ans pour l&apos;IR, 30 ans pour les prélèvements sociaux).
          </p>
        </div>
      </div>
    </SiloHub>
  );
}
