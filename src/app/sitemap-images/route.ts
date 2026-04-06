import { outils } from "@/data/outils";
import { outilsImages } from "@/data/outils-images";

const BASE = "https://www.boncalcul.fr";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const urls = outils
    .map((outil) => {
      const imageEntry = outilsImages.find((i) => i.slug === outil.slug);
      if (!imageEntry || imageEntry.images.length === 0) return "";

      const imagesTags = imageEntry.images
        .map(
          (img) => `
      <image:image>
        <image:loc>${escapeXml(`${BASE}${img.url}`)}</image:loc>
        <image:title>${escapeXml(img.title)}</image:title>
        <image:caption>${escapeXml(img.caption)}</image:caption>
      </image:image>`
        )
        .join("");

      return `
  <url>
    <loc>${escapeXml(`${BASE}/outils/${outil.slug}`)}</loc>${imagesTags}
  </url>`;
    })
    .filter(Boolean)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
