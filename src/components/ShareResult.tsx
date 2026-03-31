"use client";

import { useState } from "react";

interface ShareResultProps {
  toolName: string;
  result: string;
  details?: string;
  toolSlug: string;
}

export default function ShareResult({
  toolName,
  result,
  details,
  toolSlug,
}: ShareResultProps) {
  const [open, setOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  const toolUrl = `https://boncalcul.fr/outils/${toolSlug}`;

  const shareText = [
    `${toolName} : ${result}`,
    details ? details : null,
    `Calcule sur BonCalcul.fr : ${toolUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  const embedCode = `<div style="border:1px solid #e2e8f0;border-radius:12px;padding:20px;max-width:380px;font-family:system-ui,sans-serif;background:#f8fafc">
  <p style="margin:0 0 4px;font-size:13px;color:#64748b">${toolName}</p>
  <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1e293b">${result}</p>
  ${details ? `<p style="margin:0 0 12px;font-size:13px;color:#475569">${details}</p>` : ""}
  <a href="${toolUrl}" target="_blank" rel="noopener" style="display:inline-block;font-size:12px;color:#2563eb;text-decoration:none;font-weight:600">Calcule sur BonCalcul.fr &rarr;</a>
</div>`;

  async function copyToClipboard(
    text: string,
    setter: (v: boolean) => void
  ) {
    try {
      await navigator.clipboard.writeText(text);
      setter(true);
      setTimeout(() => setter(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setter(true);
      setTimeout(() => setter(false), 2000);
    }
  }

  if (!open) {
    return (
      <div className="mt-4 text-center">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition"
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Partager mon resultat
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700">
          Partager mon resultat
        </h4>
        <button
          onClick={() => setOpen(false)}
          className="text-gray-400 hover:text-gray-600 transition"
          aria-label="Fermer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="p-5 space-y-5">
        {/* Badge preview */}
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Apercu du badge
          </p>
          <div className="border border-gray-200 rounded-xl p-5 max-w-sm bg-gradient-to-br from-slate-50 to-blue-50">
            <p className="text-sm text-gray-500 mb-1">{toolName}</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">{result}</p>
            {details && (
              <p className="text-sm text-gray-600 mb-3">{details}</p>
            )}
            <p className="text-xs text-blue-600 font-semibold">
              Calcule sur BonCalcul.fr
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Copy link */}
          <button
            onClick={() => copyToClipboard(toolUrl, setCopiedLink)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            {copiedLink ? (
              <>
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-green-600">Copie !</span>
              </>
            ) : (
              <>
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Copier le lien
              </>
            )}
          </button>

          {/* Copy text */}
          <button
            onClick={() => copyToClipboard(shareText, setCopiedText)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            {copiedText ? (
              <>
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-green-600">Copie !</span>
              </>
            ) : (
              <>
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copier le texte
              </>
            )}
          </button>
        </div>

        {/* Embed code */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Code embed (blogs / forums)
            </p>
            <button
              onClick={() => copyToClipboard(embedCode, setCopiedEmbed)}
              className="text-xs font-medium text-blue-600 hover:text-blue-700 transition"
            >
              {copiedEmbed ? "Copie !" : "Copier"}
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-300 text-xs rounded-lg p-4 overflow-x-auto whitespace-pre-wrap break-all select-all">
            {embedCode}
          </pre>
        </div>
      </div>
    </div>
  );
}
