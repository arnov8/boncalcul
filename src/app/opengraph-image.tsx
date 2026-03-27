import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BonCalcul.fr — Outils de calcul gratuits en ligne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            🧮
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
            }}
          >
            BonCalcul.fr
          </div>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.9)",
            maxWidth: "800px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Outils de calcul gratuits en ligne
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {["Prêt immobilier", "Salaire brut/net", "Frais de notaire", "TVA", "IMC"].map(
            (tool) => (
              <div
                key={tool}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  padding: "10px 20px",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {tool}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
