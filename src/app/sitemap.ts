import type { MetadataRoute } from "next";
import { outils } from "@/data/outils";
import { outilsImages } from "@/data/outils-images";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.boncalcul.fr";

  const outilPages = outils.map((o) => {
    const imageEntry = outilsImages.find((i) => i.slug === o.slug);
    return {
      url: `${base}/outils/${o.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      ...(imageEntry && imageEntry.images.length > 0
        ? {
            images: imageEntry.images.map((img) => `${base}${img.url}`),
          }
        : {}),
    };
  });

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...outilPages,
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/guide-frais-de-notaire-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/comment-calculer-capacite-emprunt-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/interets-composes-guide-epargne`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
