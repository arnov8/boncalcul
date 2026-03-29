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
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /><path d="M4 12l16 0" /></svg>
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
