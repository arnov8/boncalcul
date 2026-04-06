import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      "https://www.boncalcul.fr/sitemap.xml",
      "https://www.boncalcul.fr/sitemap-images",
    ],
  };
}
