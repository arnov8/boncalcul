export interface Article {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "guide-frais-de-notaire-2026",
    title:
      "Frais de notaire 2026 : guide complet pour bien estimer vos frais d'achat immobilier",
    description:
      "Tout savoir sur les frais de notaire en 2026 : calcul détaillé, différence ancien/neuf, barèmes en vigueur et astuces pour les réduire.",
    datePublished: "2026-03-27",
    dateModified: "2026-03-27",
    readTime: "8 min",
    tags: ["immobilier", "frais de notaire", "achat immobilier", "2026"],
  },
  {
    slug: "comment-calculer-capacite-emprunt-2026",
    title:
      "Comment calculer sa capacité d'emprunt en 2026 : le guide complet",
    description:
      "Découvrez comment calculer votre capacité d'emprunt immobilier : règle des 35%, facteurs clés et astuces pour emprunter plus.",
    datePublished: "2026-03-27",
    dateModified: "2026-03-27",
    readTime: "10 min",
    tags: ["immobilier", "capacité emprunt", "crédit immobilier", "2026"],
  },
  {
    slug: "interets-composes-guide-epargne",
    title:
      "Intérêts composés : comment faire fructifier votre épargne en 2026",
    description:
      "Comprendre les intérêts composés, la formule, des exemples concrets avec les placements français et les stratégies pour optimiser votre épargne.",
    datePublished: "2026-03-27",
    dateModified: "2026-03-27",
    readTime: "9 min",
    tags: ["épargne", "intérêts composés", "investissement", "placement"],
  },
  {
    slug: "declaration-impots-2026-guide",
    title:
      "Déclaration d'impôts 2026 : guide complet pour bien déclarer vos revenus 2025",
    description:
      "Calendrier, barème, nouveautés, déductions et erreurs à éviter : tout savoir pour réussir votre déclaration d'impôts 2026 sur les revenus 2025.",
    datePublished: "2026-03-31",
    dateModified: "2026-03-31",
    readTime: "10 min",
    tags: ["impôts", "déclaration revenus", "fiscalité", "2026"],
  },
  {
    slug: "acheter-immobilier-printemps-2026",
    title:
      "Acheter en 2026 : taux immobiliers, frais de notaire et capacité d'emprunt, le guide complet",
    description:
      "Taux à 3,2-3,4%, frais de notaire, capacité d'emprunt, aides 2026 : tout ce qu'il faut savoir pour acheter un bien immobilier au printemps 2026.",
    datePublished: "2026-03-31",
    dateModified: "2026-03-31",
    readTime: "12 min",
    tags: ["immobilier", "taux immobilier", "achat immobilier", "2026"],
  },
  {
    slug: "bareme-impot-revenu-2026",
    title:
      "Barème impôt sur le revenu 2026 : tranches, taux et exemples de calcul",
    description:
      "Découvrez le barème progressif de l'impôt sur le revenu 2026 (revenus 2025) : tranches, taux, quotient familial et exemples chiffrés.",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    readTime: "6 min",
    tags: ["fiscalité", "impôt revenu", "barème 2026", "quotient familial"],
  },
  {
    slug: "smic-2026-montant-horaire-mensuel",
    title:
      "SMIC 2026 : montant horaire, mensuel et annuel (brut et net)",
    description:
      "Le SMIC 2026 en détail : montant horaire brut et net, mensuel et annuel. Tableau récapitulatif et simulateur de salaire à temps partiel.",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    readTime: "4 min",
    tags: ["emploi", "SMIC", "salaire minimum", "2026"],
  },
  {
    slug: "salaire-brut-net-comment-calculer",
    title:
      "Comment calculer son salaire brut en net en 2026 (avec exemples)",
    description:
      "Apprenez à convertir votre salaire brut en net : taux de cotisations 2026, différences cadre/non-cadre, exemples chiffrés et erreurs à éviter.",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    readTime: "5 min",
    tags: ["emploi", "salaire brut net", "cotisations", "2026"],
  },
  {
    slug: "bareme-kilometrique-2026",
    title:
      "Barème kilométrique 2026 : tableau, calcul et exemple",
    description:
      "Le barème kilométrique fiscal 2026 pour les voitures, motos et véhicules électriques. Tableau officiel, formule de calcul et exemples concrets.",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    readTime: "5 min",
    tags: ["fiscalité", "frais kilométriques", "barème km", "frais réels"],
  },
  {
    slug: "allocation-chomage-are-2026-calcul",
    title:
      "Allocation chômage (ARE) 2026 : calcul, montant et durée",
    description:
      "Comment est calculée l'allocation chômage ARE en 2026 ? Formule, montant journalier, durée d'indemnisation et exemples chiffrés.",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    readTime: "6 min",
    tags: ["emploi", "chômage", "ARE", "France Travail"],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
