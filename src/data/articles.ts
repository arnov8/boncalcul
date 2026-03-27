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
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
