import type { Metadata } from "next";
import Link from "next/link";
import SiloHub from "@/components/SiloHub";
import { getSilo } from "@/data/silos";

const silo = getSilo("immobilier")!;

export const metadata: Metadata = {
  title: silo.title,
  description: silo.metaDescription,
  keywords: [
    "simulateur prêt immobilier",
    "frais de notaire",
    "capacité emprunt",
    "PTZ 2026",
    "rentabilité locative",
    "plus-value immobilière",
    "surface Carrez",
    "calculateur immobilier",
  ],
  openGraph: {
    title: silo.title,
    description: silo.metaDescription,
    url: "https://www.boncalcul.fr/immobilier",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
  },
  alternates: { canonical: "https://www.boncalcul.fr/immobilier" },
};

const faqQuestions = [
  {
    question: "Comment estimer le coût total d'un achat immobilier ?",
    answer:
      "Le coût total comprend le prix du bien, les frais de notaire (7-8% dans l'ancien, 2-3% dans le neuf), les frais de garantie, les frais de dossier bancaire et éventuellement les frais d'agence. Utilisez notre simulateur de prêt immobilier et notre calculateur de frais de notaire pour obtenir une estimation complète.",
  },
  {
    question: "Quelle est la règle des 35% du HCSF ?",
    answer:
      "Le Haut Conseil de Stabilité Financière (HCSF) impose depuis 2022 un taux d'endettement maximum de 35% des revenus nets pour l'octroi de crédits immobiliers, assurance emprunteur incluse. La durée maximale est de 25 ans (27 ans avec un différé pour le neuf ou la VEFA).",
  },
  {
    question: "Suis-je éligible au Prêt à Taux Zéro (PTZ) ?",
    answer:
      "Le PTZ est réservé aux primo-accédants sous conditions de ressources. Les plafonds dépendent de la zone géographique (A, B1, B2, C) et de la composition du foyer. Depuis 2024, le PTZ a été élargi. Utilisez notre simulateur PTZ pour vérifier votre éligibilité et estimer le montant.",
  },
  {
    question: "Comment calculer la rentabilité d'un investissement locatif ?",
    answer:
      "La rentabilité brute se calcule : (loyer annuel / prix d'achat) × 100. La rentabilité nette déduit les charges (taxe foncière, charges de copropriété, assurance, travaux). La rentabilité nette-nette intègre la fiscalité. Notre calculateur vous donne les trois indicateurs.",
  },
];

export default function ImmobilierPage() {
  return (
    <SiloHub silo={silo} faqQuestions={faqQuestions}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Acheter un bien immobilier</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Simulez votre <Link href="/outils/simulateur-pret-immobilier" className="text-blue-600 hover:underline">prêt immobilier</Link>,
            estimez vos <Link href="/outils/calcul-frais-de-notaire" className="text-blue-600 hover:underline">frais de notaire</Link> et
            vérifiez votre <Link href="/outils/calcul-capacite-emprunt" className="text-blue-600 hover:underline">capacité d&apos;emprunt</Link>.
            Si vous êtes primo-accédant, testez votre éligibilité au <Link href="/outils/simulateur-ptz-2026" className="text-blue-600 hover:underline">PTZ 2026</Link>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Investir dans l&apos;immobilier</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Calculez la <Link href="/outils/calcul-rentabilite-locative" className="text-blue-600 hover:underline">rentabilité locative</Link> de
            votre investissement, estimez la <Link href="/outils/calcul-plus-value-immobiliere" className="text-blue-600 hover:underline">plus-value immobilière</Link> et
            l&apos;impôt associé, et mesurez la <Link href="/outils/calcul-surface-carrez" className="text-blue-600 hover:underline">surface Carrez</Link>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
          <h3 className="font-bold text-gray-800 mb-3">Financer et optimiser</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Comparez les options de financement avec notre <Link href="/outils/simulateur-credit-consommation" className="text-blue-600 hover:underline">simulateur de crédit</Link>,
            évaluez l&apos;intérêt d&apos;un <Link href="/outils/simulateur-rachat-credit" className="text-blue-600 hover:underline">rachat de crédit</Link>,
            estimez vos <Link href="/outils/simulateur-apl" className="text-blue-600 hover:underline">aides au logement (APL)</Link> et
            projetez la croissance de votre épargne avec les <Link href="/outils/calcul-interets-composes" className="text-blue-600 hover:underline">intérêts composés</Link>.
          </p>
        </div>
      </div>
    </SiloHub>
  );
}
