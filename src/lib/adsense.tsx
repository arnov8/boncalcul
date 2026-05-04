"use client";

import { useEffect } from "react";
import Script from "next/script";

const ADSENSE_CLIENT_ID = "ca-pub-3309542681536044";

export function AdSenseScript() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

/**
 * Bannière publicitaire AdSense réutilisable.
 * Props :
 *   slot  — l'ID du bloc publicitaire (trouvé dans AdSense)
 *   format — "auto" | "horizontal" | "vertical" | "rectangle"
 *   className — classes CSS additionnelles
 */
export function AdBanner({
  slot,
  format = "auto",
  className = "",
}: {
  slot: string;
  format?: string;
  className?: string;
}) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch {}
  }, []);

  // Placeholder visible en dev, pub réelle en prod
  if (process.env.NODE_ENV === "development") {
    return (
      <div
        className={`bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 text-sm py-4 ${className}`}
      >
        Emplacement publicitaire ({format})
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
