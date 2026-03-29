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
  { id: "finance", label: "Finance & Immobilier", icon: "coins" },
  { id: "quotidien", label: "Vie quotidienne", icon: "home" },
  { id: "auto", label: "Auto & Transport", icon: "car" },
  { id: "sante", label: "Santé & Bien-être", icon: "heartbeat" },
] as const;

export const outils: OutilMeta[] = [
  {
    slug: "simulateur-pret-immobilier",
    title: "Simulateur de prêt immobilier gratuit — Calculez vos mensualités",
    shortTitle: "Prêt immobilier",
    description:
      "Calculez vos mensualités de prêt immobilier, le coût total du crédit et le tableau d'amortissement. Simulateur gratuit et instantané.",
    categorie: "finance",
    icon: "home",
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
    icon: "currency-euro",
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
    icon: "clipboard-list",
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
    icon: "receipt",
    keywords: ["calcul TVA", "HT TTC", "taux TVA", "convertisseur TVA"],
  },
  {
    slug: "calcul-imc",
    title: "Calcul IMC — Indice de masse corporelle gratuit",
    shortTitle: "Calcul IMC",
    description:
      "Calculez votre Indice de Masse Corporelle (IMC) et découvrez dans quelle catégorie vous vous situez. Interprétation selon l'OMS.",
    categorie: "sante",
    icon: "scale",
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
    icon: "building-bank",
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
    icon: "hash",
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
    icon: "trending-up",
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
    icon: "building-columns",
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
    icon: "file-text",
    keywords: [
      "indemnité licenciement",
      "calcul indemnité",
      "rupture conventionnelle",
      "indemnité légale",
    ],
  },
  // --- Batch 4 : Quotidien & Pratique ---
  {
    slug: "conversion-unites",
    title: "Conversion d'unités — Convertisseur en ligne gratuit",
    shortTitle: "Conversion d'unités",
    description:
      "Convertissez instantanément entre les unités de longueur, masse, volume, température, surface et vitesse.",
    categorie: "quotidien",
    icon: "ruler",
    keywords: [
      "conversion unités",
      "convertisseur",
      "mètres pieds",
      "kg livres",
    ],
  },
  {
    slug: "calcul-age",
    title: "Calculer son âge exact — Calculateur en ligne gratuit",
    shortTitle: "Calcul d'âge",
    description:
      "Calculez votre âge exact en années, mois, jours, semaines et heures. Découvrez votre jour de naissance et signe astrologique.",
    categorie: "quotidien",
    icon: "cake",
    keywords: [
      "calculer son âge",
      "âge exact",
      "date de naissance",
      "nombre de jours",
    ],
  },
  {
    slug: "calcul-duree-entre-dates",
    title: "Calcul jours entre deux dates — Calculateur gratuit",
    shortTitle: "Durée entre dates",
    description:
      "Calculez le nombre de jours, semaines, mois entre deux dates. Jours ouvrés et week-ends inclus.",
    categorie: "quotidien",
    icon: "calendar",
    keywords: [
      "jours entre deux dates",
      "durée entre dates",
      "nombre de jours",
      "jours ouvrés",
    ],
  },
  {
    slug: "calcul-consommation-essence",
    title: "Calcul consommation essence — Calculateur gratuit",
    shortTitle: "Consommation essence",
    description:
      "Calculez votre consommation de carburant en L/100km et estimez le coût d'un trajet en fonction de la distance et du prix au litre.",
    categorie: "auto",
    icon: "gas-station",
    keywords: [
      "consommation essence",
      "L/100km",
      "coût trajet",
      "consommation carburant",
    ],
  },
  {
    slug: "cout-km-voiture",
    title: "Coût au kilomètre voiture — Calculateur gratuit",
    shortTitle: "Coût au km",
    description:
      "Calculez le coût réel au kilomètre de votre voiture : carburant, assurance, entretien, décote et contrôle technique.",
    categorie: "auto",
    icon: "car",
    keywords: [
      "coût km voiture",
      "prix kilomètre",
      "budget voiture",
      "coût automobile",
    ],
  },
  // --- Batch 5 : Santé & Bien-être ---
  {
    slug: "calcul-date-accouchement",
    title: "Calcul date d'accouchement — Date prévue gratuit",
    shortTitle: "Date d'accouchement",
    description:
      "Calculez votre date prévue d'accouchement à partir de la date de vos dernières règles ou de la date de conception.",
    categorie: "sante",
    icon: "baby-carriage",
    keywords: [
      "date accouchement",
      "DPA",
      "semaines grossesse",
      "date prévue",
    ],
  },
  {
    slug: "calcul-calories",
    title: "Calcul calories par jour — Besoins caloriques gratuit",
    shortTitle: "Besoins caloriques",
    description:
      "Calculez vos besoins caloriques journaliers selon votre âge, sexe, taille, poids et niveau d'activité. Formule Mifflin-St Jeor.",
    categorie: "sante",
    icon: "apple",
    keywords: [
      "calcul calories",
      "besoins caloriques",
      "TDEE",
      "métabolisme de base",
    ],
  },
  {
    slug: "calcul-poids-ideal",
    title: "Calcul poids idéal — Estimez votre poids de forme",
    shortTitle: "Poids idéal",
    description:
      "Estimez votre poids idéal avec 4 formules reconnues : Lorentz, Devine, Creff et plage IMC. Résultats comparés.",
    categorie: "sante",
    icon: "barbell",
    keywords: [
      "poids idéal",
      "calcul poids",
      "poids de forme",
      "formule Lorentz",
    ],
  },
  {
    slug: "calcul-img",
    title: "Calcul IMG — Indice de masse grasse en ligne",
    shortTitle: "Masse grasse (IMG)",
    description:
      "Calculez votre indice de masse grasse (IMG) avec la formule de Deurenberg. Interprétation par sexe et catégorie.",
    categorie: "sante",
    icon: "chart-bar",
    keywords: [
      "calcul IMG",
      "indice masse grasse",
      "taux graisse corporelle",
      "Deurenberg",
    ],
  },
  {
    slug: "calcul-ovulation",
    title: "Calcul ovulation — Calculez votre période fertile",
    shortTitle: "Calcul ovulation",
    description:
      "Calculez votre date d'ovulation et votre fenêtre de fertilité à partir de la date de vos dernières règles et la durée de votre cycle.",
    categorie: "sante",
    icon: "flower",
    keywords: [
      "calcul ovulation",
      "période fertile",
      "cycle menstruel",
      "fenêtre fertilité",
    ],
  },
];

export function getOutil(slug: string) {
  return outils.find((o) => o.slug === slug);
}
