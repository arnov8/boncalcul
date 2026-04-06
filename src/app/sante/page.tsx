import type { Metadata } from "next";
import Link from "next/link";
import SiloHub from "@/components/SiloHub";
import { getSilo } from "@/data/silos";

const silo = getSilo("sante")!;

export const metadata: Metadata = {
  title: silo.title,
  description: silo.metaDescription,
  keywords: [
    "calcul IMC",
    "poids idéal",
    "masse grasse IMG",
    "besoins caloriques",
    "date accouchement",
    "ovulation",
    "santé calculateur",
  ],
  openGraph: {
    title: silo.title,
    description: silo.metaDescription,
    url: "https://www.boncalcul.fr/sante",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
  },
  alternates: { canonical: "https://www.boncalcul.fr/sante" },
};

const faqQuestions = [
  {
    question: "Comment interpréter son IMC ?",
    answer:
      "L'IMC (Indice de Masse Corporelle) se calcule en divisant le poids (kg) par la taille au carré (m²). Selon l'OMS : < 18,5 = insuffisance pondérale, 18,5-24,9 = corpulence normale, 25-29,9 = surpoids, ≥ 30 = obésité. L'IMC est un indicateur statistique qui ne tient pas compte de la masse musculaire.",
  },
  {
    question: "Quelle formule est utilisée pour les besoins caloriques ?",
    answer:
      "Nous utilisons la formule de Mifflin-St Jeor (1990), considérée comme la plus précise pour estimer le métabolisme de base. Le résultat est multiplié par un coefficient d'activité physique (NAP) pour obtenir les besoins caloriques journaliers totaux.",
  },
  {
    question: "Comment est calculée la date d'accouchement ?",
    answer:
      "La date prévue d'accouchement (DPA) est estimée avec la règle de Naegele : date des dernières règles + 280 jours (40 semaines d'aménorrhée). Il s'agit d'une estimation statistique — la date réelle peut varier de plusieurs semaines.",
  },
  {
    question: "Ces outils santé remplacent-ils un avis médical ?",
    answer:
      "Non. Nos calculateurs utilisent des formules médicales reconnues (OMS, Mifflin-St Jeor, Deurenberg) mais fournissent des résultats indicatifs. Ils ne remplacent en aucun cas une consultation médicale. Consultez un professionnel de santé pour tout diagnostic ou suivi personnalisé.",
  },
];

export default function SantePage() {
  return (
    <SiloHub silo={silo} faqQuestions={faqQuestions}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Poids et composition corporelle</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Calculez votre <Link href="/outils/calcul-imc" className="text-blue-600 hover:underline">IMC</Link> selon les critères OMS,
            estimez votre <Link href="/outils/calcul-poids-ideal" className="text-blue-600 hover:underline">poids idéal</Link> avec 4 formules et
            évaluez votre <Link href="/outils/calcul-img" className="text-blue-600 hover:underline">masse grasse (IMG)</Link>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-3">Nutrition</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Déterminez vos <Link href="/outils/calcul-calories" className="text-blue-600 hover:underline">besoins caloriques</Link> journaliers
            avec la formule Mifflin-St Jeor, en tenant compte de votre niveau d&apos;activité physique.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
          <h3 className="font-bold text-gray-800 mb-3">Grossesse et fertilité</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Estimez votre <Link href="/outils/calcul-date-accouchement" className="text-blue-600 hover:underline">date d&apos;accouchement</Link> et
            calculez votre <Link href="/outils/calcul-ovulation" className="text-blue-600 hover:underline">période d&apos;ovulation</Link> et
            fenêtre de fertilité.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
        <p className="text-sm text-amber-800">
          <strong>Important :</strong> Les outils de cette section utilisent des formules médicales reconnues mais fournissent des résultats
          à titre indicatif uniquement. Ils ne remplacent pas un avis médical. Consultez un professionnel de santé pour tout diagnostic
          ou suivi personnalisé.
        </p>
      </div>
    </SiloHub>
  );
}
