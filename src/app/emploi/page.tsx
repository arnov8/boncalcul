import type { Metadata } from "next";
import Link from "next/link";
import SiloHub from "@/components/SiloHub";
import { getSilo } from "@/data/silos";

const silo = getSilo("emploi")!;

export const metadata: Metadata = {
  title: silo.title,
  description: silo.metaDescription,
  keywords: [
    "salaire brut net",
    "allocation chômage ARE",
    "heures supplémentaires",
    "coût salarié employeur",
    "SMIC 2026",
    "retraite",
    "rupture conventionnelle",
    "micro-entrepreneur",
  ],
  openGraph: {
    title: silo.title,
    description: silo.metaDescription,
    url: "https://www.boncalcul.fr/emploi",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
  },
  alternates: { canonical: "https://www.boncalcul.fr/emploi" },
};

const faqQuestions = [
  {
    question: "Comment convertir son salaire brut en net ?",
    answer:
      "Le salaire net s'obtient en déduisant les cotisations salariales du brut (environ 22-25% pour un non-cadre, 23-26% pour un cadre). Les cotisations incluent la retraite, l'assurance maladie, le chômage et la CSG-CRDS. Notre convertisseur utilise les taux URSSAF 2026.",
  },
  {
    question: "Comment est calculée l'allocation chômage (ARE) ?",
    answer:
      "L'ARE est calculée à partir du Salaire Journalier de Référence (SJR), lui-même basé sur vos 24 derniers mois de salaire brut (36 mois si vous avez plus de 53 ans). Le montant journalier est le plus élevé entre 57% du SJR et 40,4% du SJR + une partie fixe (~12,95€/jour).",
  },
  {
    question: "Quel est le SMIC en 2026 ?",
    answer:
      "Le SMIC est revalorisé chaque année au 1er janvier. Notre simulateur affiche le SMIC horaire, mensuel et annuel en brut et en net, et permet de calculer le salaire pour un temps partiel.",
  },
  {
    question: "Comment calculer les heures supplémentaires ?",
    answer:
      "Les 8 premières heures supplémentaires (de la 36e à la 43e heure) sont majorées de 25%. Au-delà, la majoration passe à 50%. Les heures supplémentaires sont exonérées d'impôt sur le revenu dans la limite de 7 500 €/an.",
  },
];

export default function EmploiPage() {
  return (
    <SiloHub silo={silo} faqQuestions={faqQuestions}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Salaire et rémunération</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Convertissez votre <Link href="/outils/calcul-salaire-brut-net" className="text-blue-600 hover:underline">salaire brut en net</Link>,
            calculez vos <Link href="/outils/calcul-heures-supplementaires" className="text-blue-600 hover:underline">heures supplémentaires</Link> et
            consultez le <Link href="/outils/simulateur-smic" className="text-blue-600 hover:underline">SMIC 2026</Link>.
            Employeurs : estimez le <Link href="/outils/cout-salarie-employeur" className="text-blue-600 hover:underline">coût total d&apos;un salarié</Link>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Chômage et départ</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Simulez vos <Link href="/outils/simulateur-chomage-are" className="text-blue-600 hover:underline">allocations chômage (ARE)</Link>,
            calculez vos <Link href="/outils/calcul-indemnites-licenciement" className="text-blue-600 hover:underline">indemnités de licenciement</Link> ou
            estimez l&apos;indemnité d&apos;une <Link href="/outils/simulateur-rupture-conventionnelle" className="text-blue-600 hover:underline">rupture conventionnelle</Link>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
          <h3 className="font-bold text-gray-800 mb-3">Retraite et indépendants</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Estimez votre future <Link href="/outils/simulateur-retraite" className="text-blue-600 hover:underline">pension de retraite</Link> et,
            pour les indépendants, calculez vos <Link href="/outils/calcul-charges-micro-entrepreneur" className="text-blue-600 hover:underline">charges en micro-entreprise</Link> (ACRE, versement libératoire inclus).
          </p>
        </div>
      </div>
    </SiloHub>
  );
}
