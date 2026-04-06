"use client";

import { useCallback } from "react";

interface ExportPDFProps {
  /** Titre affiché dans le PDF */
  title: string;
  /** Slug de l'outil (pour le lien retour) */
  toolSlug: string;
}

/**
 * Bouton "Exporter en PDF" léger basé sur window.print().
 * Aucune dépendance externe, 0 Ko de JS supplémentaire.
 * Utilise une feuille @media print pour masquer header/footer/ads.
 */
export default function ExportPDF({ title, toolSlug }: ExportPDFProps) {
  const handleExport = useCallback(() => {
    // Inject print-specific styles temporarily
    const style = document.createElement("style");
    style.id = "boncalcul-print";
    style.textContent = `
      @media print {
        header, footer, nav,
        [data-ad], .adsbygoogle, ins.adsbygoogle,
        [class*="ad-banner"], [class*="AdBanner"],
        button:not(.print-keep),
        details summary span:last-child,
        .no-print { display: none !important; }

        body { font-size: 12pt; color: #000; background: #fff; }
        main { padding: 0 20px; }

        .print-header {
          display: block !important;
          text-align: center;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }
        .print-footer {
          display: block !important;
          text-align: center;
          border-top: 1px solid #ccc;
          padding-top: 8px;
          margin-top: 24px;
          font-size: 10pt;
          color: #666;
        }
      }
    `;
    document.head.appendChild(style);

    // Add print header and footer
    const header = document.createElement("div");
    header.className = "print-header";
    header.style.display = "none";
    header.innerHTML = `<strong>${title}</strong> — BonCalcul.fr`;

    const footer = document.createElement("div");
    footer.className = "print-footer";
    footer.style.display = "none";
    footer.innerHTML = `Généré sur <strong>BonCalcul.fr</strong> — https://www.boncalcul.fr/outils/${toolSlug}<br>Résultats indicatifs, ne constituant pas un conseil professionnel.`;

    const main = document.querySelector("main");
    if (main) {
      main.prepend(header);
      main.appendChild(footer);
    }

    // Slight delay to let styles apply
    requestAnimationFrame(() => {
      window.print();

      // Cleanup after print dialog
      setTimeout(() => {
        style.remove();
        header.remove();
        footer.remove();
      }, 500);
    });
  }, [title, toolSlug]);

  return (
    <button
      onClick={handleExport}
      className="no-print inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition"
      aria-label="Exporter en PDF"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Exporter en PDF
    </button>
  );
}
