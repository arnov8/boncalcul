export interface OutilMeta {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  categorie: string;
  icon: string;
  keywords: string[];
}

export const categories = [
  { id: "finance", label: "Finance & Immobilier", icon: "💰" },
  { id: "quotidien", label: "Vie quotidienne", icon: "🏠" },
  { id: "sante", label: "Santé", icon: "❤️" },
] as const;

export const outils: OutilMeta[] = [
  {
    slug: "simulateur-pret-immobilier",
    title: "Simulateur de prêt immobilier gratuit — Calculez vos mensualités",
    shortTitle: "Prêt immobilier",
    description:
      "Calculez vos mensualités de prêt immobilier, le coût total du crédit et le tableau d'amortissement. Simulateur gratuit et instantané.",
    categorie: "finance",
    icon: "🏠",
    keywords: [
      "simulateur prêt immobilier",
      "calcul mensualité",
      "crédit immobilier",
      "tableau amortissement",
    ],
  },
  {
    slug: "calcul-salaire-brut-net",
    title: "Calcul salaire brut net 2026 — Convertisseur instantané",
    shortTitle: "Salaire brut / net",
    description:
      "Convertissez votre salaire brut en net (et inversement) en un clic. Taux de charges actualisés 2026 pour cadre et non-cadre.",
    categorie: "finance",
    icon: "💶",
    keywords: [
      "calcul salaire brut net",
      "convertisseur salaire",
      "salaire net",
      "charges sociales",
    ],
  },
  {
    slug: "calcul-frais-de-notaire",
    title: "Calcul frais de notaire 2026 — Estimation gratuite",
    shortTitle: "Frais de notaire",
    description:
      "Estimez les frais de notaire pour votre achat immobilier. Calcul détaillé selon le type de bien (ancien ou neuf) et le département.",
    categorie: "finance",
    icon: "📋",
    keywords: [
      "frais de notaire",
      "calcul frais notaire",
      "achat immobilier",
      "droits de mutation",
    ],
  },
  {
    slug: "calcul-tva",
    title: "Calcul TVA — Convertisseur HT ↔ TTC instantané",
    shortTitle: "Calcul TVA",
    description:
      "Convertissez un montant HT en TTC (et inversement) avec tous les taux de TVA français : 20%, 10%, 5.5%, 2.1%.",
    categorie: "finance",
    icon: "🧾",
    keywords: ["calcul TVA", "HT TTC", "taux TVA", "convertisseur TVA"],
  },
  {
    slug: "calcul-imc",
    title: "Calcul IMC — Indice de masse corporelle gratuit",
    shortTitle: "Calcul IMC",
    description:
      "Calculez votre Indice de Masse Corporelle (IMC) et découvrez dans quelle catégorie vous vous situez. Interprétation selon l'OMS.",
    categorie: "sante",
    icon: "⚖️",
    keywords: [
      "calcul IMC",
      "indice masse corporelle",
      "poids idéal",
      "IMC adulte",
    ],
  },
  {
    slug: "calcul-capacite-emprunt",
    title: "Calcul capacité d'emprunt 2026 — Simulateur gratuit",
    shortTitle: "Capacité d'emprunt",
    description:
      "Calculez votre capacité d'emprunt immobilier en fonction de vos revenus, charges et du taux d'intérêt. Règle des 35% HCSF appliquée.",
    categorie: "finance",
    icon: "🏦",
    keywords: [
      "capacité d'emprunt",
      "calcul emprunt",
      "combien emprunter",
      "taux endettement",
    ],
  },
  {
    slug: "calcul-pourcentage",
    title: "Calcul pourcentage — Calculateur en ligne gratuit",
    shortTitle: "Calcul pourcentage",
    description:
      "Calculez un pourcentage facilement : X% d'un nombre, proportion, variation en pourcentage. Trois modes de calcul instantanés.",
    categorie: "quotidien",
    icon: "🔢",
    keywords: [
      "calcul pourcentage",
      "calculer pourcentage",
      "pourcentage en ligne",
      "variation pourcentage",
    ],
  },
  {
    slug: "calcul-interets-composes",
    title: "Calcul intérêts composés — Simulateur d'épargne gratuit",
    shortTitle: "Intérêts composés",
    description:
      "Simulez la croissance de votre épargne grâce aux intérêts composés. Capital initial, versements mensuels et tableau d'évolution année par année.",
    categorie: "finance",
    icon: "📈",
    keywords: [
      "intérêts composés",
      "simulateur épargne",
      "calcul placement",
      "rendement épargne",
    ],
  },
  {
    slug: "simulateur-impot-revenu",
    title: "Simulateur impôt sur le revenu 2026 — Calcul gratuit",
    shortTitle: "Impôt sur le revenu",
    description:
      "Estimez votre impôt sur le revenu 2026 avec le barème progressif, le quotient familial et le détail par tranche. Simulateur gratuit et instantané.",
    categorie: "finance",
    icon: "🏛️",
    keywords: [
      "simulateur impôt",
      "calcul impôt revenu",
      "barème impôt 2026",
      "quotient familial",
    ],
  },
  {
    slug: "calcul-indemnites-licenciement",
    title: "Calcul indemnité de licenciement 2026 — Simulateur gratuit",
    shortTitle: "Indemnités licenciement",
    description:
      "Calculez votre indemnité légale de licenciement ou de rupture conventionnelle en fonction de votre salaire et ancienneté.",
    categorie: "finance",
    icon: "📄",
    keywords: [
      "indemnité licenciement",
      "calcul indemnité",
      "rupture conventionnelle",
      "indemnité légale",
    ],
  },
];

export function getOutil(slug: string) {
  return outils.find((o) => o.slug === slug);
}
