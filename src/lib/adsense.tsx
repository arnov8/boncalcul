"use client";

import { useEffect } from "react";

// Mapping des slots nommés → IDs Ezoic (à assigner dans le dashboard Ezoic)
const EZOIC_PLACEMENTS: Record<string, number> = {
  "home-after-hero":    101,
  "home-after-tools":   102,
  "home-after-faq":     103,
  "hub-after-hero":     104,
  "hub-bottom":         105,
  "tool-after-result":  106,
  "tool-after-faq":     107,
  "tool-bottom":        108,
};

export function AdBanner({
  slot,
  className = "",
}: {
  slot: string;
  format?: string;
  className?: string;
}) {
  const placementId = EZOIC_PLACEMENTS[slot];

  useEffect(() => {
    if (!placementId) return;
    try {
      const ez = (window as any).ezstandalone;
      if (ez?.cmd) {
        ez.cmd.push(() => {
          ez.showAds(placementId);
        });
      }
    } catch {}
  }, [placementId]);

  if (!placementId) return null;

  if (process.env.NODE_ENV === "development") {
    return (
      <div
        className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xs py-4 ${className}`}
      >
        Ezoic #{placementId} ({slot})
      </div>
    );
  }

  return (
    <div className={className}>
      <div id={`ezoic-pub-ad-placeholder-${placementId}`} />
    </div>
  );
}
