"use client";

import { useState } from "react";

interface InfographicProps {
  title: string;
  sourceUrl: string;
  sourceLabel?: string;
  children: React.ReactNode;
}

export default function Infographic({
  title,
  sourceUrl,
  sourceLabel = "BonCalcul.fr",
  children,
}: InfographicProps) {
  const [showEmbed, setShowEmbed] = useState(false);

  const embedCode = `<iframe src="${sourceUrl}" width="100%" height="600" style="border:none;max-width:800px;" title="${title}"></iframe><p style="font-size:12px;text-align:center;margin-top:4px;">Source : <a href="${sourceUrl}" target="_blank" rel="noopener">${sourceLabel}</a></p>`;

  return (
    <div className="my-10">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h3 className="text-white font-bold text-lg md:text-xl text-center">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">{children}</div>

        {/* Footer / Branding */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-bold text-gray-700">
              Bon<span className="text-blue-600">Calcul</span>
              <span className="text-gray-400">.fr</span>
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Outils de calcul gratuits</span>
          </div>
          <button
            onClick={() => setShowEmbed(!showEmbed)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer flex items-center gap-1 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            {showEmbed
              ? "Masquer le code"
              : "Integrer cette infographie"}
          </button>
        </div>

        {/* Embed code */}
        {showEmbed && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            <p className="text-xs text-gray-500 mb-2">
              Copiez ce code pour integrer cette infographie sur votre site :
            </p>
            <div className="relative">
              <textarea
                readOnly
                value={embedCode}
                rows={3}
                className="w-full text-xs font-mono bg-white border border-gray-200 rounded-lg p-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(embedCode);
                }}
                className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Copier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
