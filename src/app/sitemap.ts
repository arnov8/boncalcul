import type { MetadataRoute } from "next";
import { outils } from "@/data/outils";
import { outilsImages } from "@/data/outils-images";
import { silos } from "@/data/silos";
import { articles } from "@/data/articles";
import {
  TVA_MONTANTS,
  TVA_TAUX,
  buildTVASlug,
  SALAIRE_MONTANTS,
  SALAIRE_STATUTS,
  buildSalaireSlug,
  PRET_MONTANTS,
  PRET_DUREES,
  buildPretSlug,
  NOTAIRE_MONTANTS,
  NOTAIRE_TYPES,
  buildNotaireSlug,
} from "@/lib/seo-boncalcul";

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

  // ─── SEO programmatique ────────────────────────────────────────────────────
  const tvaPages: MetadataRoute.Sitemap = TVA_MONTANTS.flatMap((montant) =>
    TVA_TAUX.map(({ taux }) => ({
      url: `${base}/outils/calcul-tva/${buildTVASlug(montant, taux)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const salairePages: MetadataRoute.Sitemap = SALAIRE_MONTANTS.flatMap((montant) =>
    SALAIRE_STATUTS.map(({ statut }) => ({
      url: `${base}/outils/calcul-salaire-brut-net/${buildSalaireSlug(montant, statut)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const pretPages: MetadataRoute.Sitemap = PRET_MONTANTS.flatMap((montant) =>
    PRET_DUREES.map((duree) => ({
      url: `${base}/outils/simulateur-pret-immobilier/${buildPretSlug(montant, duree)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const notairePages: MetadataRoute.Sitemap = NOTAIRE_MONTANTS.flatMap((montant) =>
    NOTAIRE_TYPES.map(({ type }) => ({
      url: `${base}/outils/calcul-frais-de-notaire/${buildNotaireSlug(montant, type)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

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
    ...tvaPages,
    ...salairePages,
    ...pretPages,
    ...notairePages,
  ];
}
