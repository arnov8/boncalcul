import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "boncalcul.fr" }],
        destination: "https://www.boncalcul.fr/:path*",
        permanent: true,
      },
      // Ezoic — ads.txt manager (remplace EZOIC_PUBLISHER_ID par l'ID visible dans ton dashboard Ezoic)
      {
        source: "/ads.txt",
        destination: "https://srv.adstxtmanager.com/EZOIC_PUBLISHER_ID/boncalcul.fr",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
