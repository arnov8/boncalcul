import type { Metadata } from "next";
import CalculFraisKm from "./CalculFraisKm";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";

export const metadata: Metadata = {
  title: "Calcul frais kilometriques 2026 — Bareme fiscal gratuit",
  description:
    "Calculez vos frais kilometriques avec le bareme fiscal 2026. Voiture, moto, cyclomoteur, majoration vehicule electrique. Simulateur gratuit, sans inscription.",
  keywords: [
    "frais kilometriques",
    "bareme kilometrique 2026",
    "bareme km",
    "indemnites kilometriques",
    "frais reels impots",
    "calcul frais km",
    "bareme fiscal kilometrique",
    "frais kilometriques voiture",
    "frais kilometriques moto",
    "declaration frais reels",
  ],
  openGraph: {
    title: "Calcul frais kilometriques 2026 — Bareme fiscal gratuit | BonCalcul.fr",
    description:
      "Calculez vos frais kilometriques avec le bareme fiscal 2026. Voiture, moto, cyclomoteur, majoration vehicule electrique.",
    url: "https://www.boncalcul.fr/outils/calcul-frais-kilometriques",
    type: "website",
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-frais-kilometriques",
  },
};

const faqQuestions = [
  {
    question: "Qu'est-ce que le bareme kilometrique ?",
    answer:
      "Le bareme kilometrique est un bareme publie chaque annee par l'administration fiscale. Il permet aux salaries et aux professionnels de calculer le montant des frais lies a l'utilisation de leur vehicule personnel pour des deplacements professionnels. Il prend en compte la depreciation du vehicule, les frais d'entretien et de reparation, les depenses de pneumatiques, la consommation de carburant et les primes d'assurance.",
  },
  {
    question: "Quand utiliser les frais reels plutot que l'abattement de 10 % ?",
    answer:
      "Les frais reels sont avantageux lorsque vos depenses professionnelles reelles depassent l'abattement forfaitaire de 10 % applique automatiquement sur vos salaires. C'est souvent le cas si vous parcourez une longue distance domicile-travail, si vous avez des frais de repas importants, ou si vous exercez une activite necessitant des deplacements frequents. Pour comparer, additionnez tous vos frais reels (kilometriques, repas, formation...) et verifiez s'ils depassent 10 % de votre salaire net imposable.",
  },
  {
    question: "Quels vehicules sont concernes par le bareme kilometrique ?",
    answer:
      "Le bareme kilometrique s'applique aux voitures (de 3 CV et moins a 7 CV et plus), aux motos de plus de 50 cm3 (de 1-2 CV a plus de 5 CV) et aux cyclomoteurs de moins de 50 cm3. Les vehicules electriques beneficient d'une majoration de 20 % du montant calcule. Le bareme couvre les deplacements domicile-travail et les trajets professionnels effectues avec un vehicule personnel.",
  },
  {
    question: "Comment justifier ses frais kilometriques aupres des impots ?",
    answer:
      "Pour justifier vos frais kilometriques, vous devez conserver : la carte grise du vehicule (pour prouver la puissance fiscale), un releve precis des kilometres parcourus a titre professionnel (carnet de bord, application GPS...), les justificatifs de votre lieu de travail (contrat, bulletins de salaire), et eventuellement les factures d'entretien. En cas de controle fiscal, l'administration peut vous demander ces documents sur les 3 dernieres annees.",
  },
  {
    question: "Frais reels ou abattement de 10 % : comment choisir ?",
    answer:
      "Par defaut, l'administration applique un abattement forfaitaire de 10 % sur vos salaires pour couvrir vos frais professionnels (plafonne a 14 171 euros pour 2026). Si vos frais reels (kilometriques + repas + autres) depassent ce montant, optez pour la deduction des frais reels. Attention, ce choix s'applique a l'ensemble de vos revenus salaries. Utilisez notre simulateur pour comparer les deux options et determiner la plus avantageuse.",
  },
];

export default function PageCalculFraisKilometriques() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul frais kilometriques 2026 — Bareme fiscal gratuit",
          description:
            "Calculez vos frais kilometriques avec le bareme fiscal 2026. Voiture, moto, cyclomoteur, majoration vehicule electrique.",
          url: "https://www.boncalcul.fr/outils/calcul-frais-kilometriques",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul des frais kilometriques 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez vos indemnites kilometriques avec le bareme fiscal officiel.
            Voiture, moto ou cyclomoteur. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CalculFraisKm />
        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="calcul-frais-kilometriques" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur les frais kilometriques
          </h2>
          <div className="space-y-3">
            {faqQuestions.map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">&#9660;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur les frais kilometriques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le bareme kilometrique 2026</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>bareme kilometrique 2026</strong> est publie par l&apos;administration fiscale pour evaluer les frais de deplacement professionnel. Il tient compte de la <strong>puissance fiscale</strong> du vehicule et de la <strong>distance parcourue</strong>. Le bareme couvre la depreciation du vehicule, l&apos;assurance, l&apos;entretien, les pneumatiques et le carburant. Plus la puissance fiscale est elevee, plus le montant deductible par kilometre augmente, car les couts d&apos;utilisation sont generalement superieurs.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Frais reels ou abattement de 10 %</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chaque contribuable salarie a le choix entre la <strong>deduction forfaitaire de 10 %</strong> (appliquee automatiquement) et la <strong>deduction des frais reels</strong>. Les frais reels incluent les frais kilometriques, les frais de repas, les frais de formation et autres depenses professionnelles. L&apos;option frais reels est avantageuse quand le total de vos depenses professionnelles depasse <strong>10 % de votre salaire net imposable</strong>. Notre simulateur vous aide a comparer les deux options.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les vehicules concernes</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trois categories de vehicules sont couvertes par le bareme : les <strong>voitures</strong> (de 3 CV et moins a 7 CV et plus), les <strong>motos de plus de 50 cm3</strong> (de 1-2 CV a plus de 5 CV) et les <strong>cyclomoteurs de moins de 50 cm3</strong>. Chaque categorie dispose de son propre bareme avec des coefficients differents selon les tranches de distance. A noter : les vehicules de plus de 7 CV sont plafonnes au bareme 7 CV pour les voitures.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Majoration de 20 % pour vehicules electriques</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Depuis 2021, les proprietaires de <strong>vehicules electriques</strong> (voitures, motos et cyclomoteurs) beneficient d&apos;une <strong>majoration de 20 %</strong> du montant des frais kilometriques calcules avec le bareme. Cette mesure vise a encourager la transition vers la mobilite electrique. La majoration s&apos;applique sur le montant total obtenu apres application du bareme standard. Exemple : pour un montant de base de 4 000 &euro;, la majoration porte le total a 4 800 &euro;.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les justificatifs necessaires</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour deduire vos frais kilometriques, vous devez pouvoir justifier : la <strong>puissance fiscale</strong> de votre vehicule (carte grise), les <strong>kilometres parcourus</strong> a titre professionnel (carnet de bord detaille avec dates, trajets et motifs), votre <strong>lieu de travail</strong> (contrat, attestation employeur) et la realite de vos deplacements. Conservez ces documents pendant <strong>3 ans</strong> en cas de controle fiscal. Les applications GPS professionnelles facilitent grandement ce suivi.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Optimiser sa declaration avec les frais reels</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour maximiser votre deduction, pensez a inclure <strong>tous vos frais professionnels</strong> : frais kilometriques (domicile-travail et deplacements pro), frais de repas (si cantine indisponible : 5,35 &euro; deductible par repas en 2026), frais de formation, cotisations syndicales, frais de teletravail. Additionnez le tout et comparez avec l&apos;abattement de 10 %. Attention : l&apos;option frais reels s&apos;applique a <strong>l&apos;ensemble de vos salaires</strong> du foyer, pas uniquement au declarant principal.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="tool-bottom" format="horizontal" />
      </div>
    </>
  );
}
