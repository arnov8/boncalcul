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
];

export function getOutil(slug: string) {
  return outils.find((o) => o.slug === slug);
}
