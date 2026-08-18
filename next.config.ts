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
    ];
  },
};

export default nextConfig;
