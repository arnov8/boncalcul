import type { MetadataRoute } from "next";
import { outils } from "@/data/outils";
import { outilsImages } from "@/data/outils-images";
import { silos } from "@/data/silos";
import { articles } from "@/data/articles";

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

  const siloPages = silos.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articlePages = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...siloPages,
    ...outilPages,
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articlePages,
    {
      url: `${base}/methodologie`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
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
