import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/lib/jsonld";

const GA_ID = "G-1SRYNGFWJE";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boncalcul.fr"),
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
    url: "https://www.boncalcul.fr",
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
  alternates: { canonical: "https://www.boncalcul.fr" },
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
    url: "https://www.boncalcul.fr",
    description:
      "Outils de calcul et simulateurs gratuits en ligne pour le quotidien.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.boncalcul.fr/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
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
