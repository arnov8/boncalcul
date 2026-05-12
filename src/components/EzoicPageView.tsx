"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function EzoicPageView() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const ez = (window as any).ezstandalone;
      if (ez?.cmd) {
        ez.cmd.push(() => {
          ez.showAds();
        });
      }
    } catch {}
  }, [pathname]);

  return null;
}
