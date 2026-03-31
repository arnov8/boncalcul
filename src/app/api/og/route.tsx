import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";
import { outils } from "@/data/outils";

export const runtime = "edge";

const categoryColors: Record<string, { from: string; to: string }> = {
  finance: { from: "#1e40af", to: "#3b82f6" },
  emploi: { from: "#7c3aed", to: "#a78bfa" },
  immobilier: { from: "#0f766e", to: "#2dd4bf" },
  quotidien: { from: "#c2410c", to: "#fb923c" },
  auto: { from: "#4338ca", to: "#818cf8" },
  sante: { from: "#be123c", to: "#fb7185" },
};

const categoryIcons: Record<string, string> = {
  finance: "💰",
  emploi: "💼",
  immobilier: "🏠",
  quotidien: "📐",
  auto: "🚗",
  sante: "❤️",
};

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Missing slug parameter", { status: 400 });
  }

  const outil = outils.find((o) => o.slug === slug);
  if (!outil) {
    return new Response("Outil not found", { status: 404 });
  }

  const colors = categoryColors[outil.categorie] ?? {
    from: "#1e40af",
    to: "#3b82f6",
  };
  const icon = categoryIcons[outil.categorie] ?? "🔢";

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "40px 60px",
        }}
      >
        {/* Logo en haut */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              borderRadius: "12px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              color: "white",
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            BonCalcul.fr
          </div>
        </div>

        {/* Icone catégorie */}
        <div
          style={{
            fontSize: "64px",
            marginBottom: "16px",
          }}
        >
          {icon}
        </div>

        {/* Titre de l'outil */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          {outil.shortTitle}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          {outil.description.length > 120
            ? outil.description.slice(0, 117) + "..."
            : outil.description}
        </div>

        {/* Badge gratuit */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "40px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "8px 24px",
            color: "white",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Gratuit et sans inscription
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
