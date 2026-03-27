import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL("https://boncalcul.fr"),
  title: {
    default: "BonCalcul.fr — Outils de calcul gratuits en ligne",
    template: "%s | BonCalcul.fr",
  },
  description:
    "Simulateurs et calculateurs gratuits : prêt immobilier, salaire brut/net, frais de notaire, TVA, IMC et plus. Résultats instantanés, sans inscription.",
  keywords: [
    "calculateur en ligne",
    "simulateur gratuit",
    "calcul prêt immobilier",
    "salaire brut net",
    "frais de notaire",
    "calcul TVA",
    "calcul IMC",
  ],
  authors: [{ name: "BonCalcul.fr" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://boncalcul.fr",
    siteName: "BonCalcul.fr",
    title: "BonCalcul.fr — Outils de calcul gratuits en ligne",
    description:
      "Simulateurs et calculateurs gratuits pour le quotidien. Résultats instantanés.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BonCalcul.fr — Outils de calcul gratuits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BonCalcul.fr — Outils de calcul gratuits en ligne",
    description:
      "Simulateurs et calculateurs gratuits pour le quotidien. Résultats instantanés.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://boncalcul.fr" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BonCalcul.fr",
    url: "https://boncalcul.fr",
    description:
      "Outils de calcul et simulateurs gratuits en ligne pour le quotidien.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://boncalcul.fr/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
