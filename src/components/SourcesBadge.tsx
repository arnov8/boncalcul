import Link from "next/link";
import type { ToolSource } from "@/data/sources";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function SourcesBadge({ source }: { source: ToolSource }) {
  return (
    <aside
      className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-8 text-sm"
      aria-label="Sources et méthodologie"
    >
      <div className="flex items-center gap-2 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <h3 className="font-semibold text-gray-800">
          Sources et fiabilité
        </h3>
      </div>

      {/* Sources officielles */}
      {source.sources.length > 0 && (
        <div className="mb-3">
          <p className="text-gray-500 font-medium mb-1">Sources officielles :</p>
          <ul className="flex flex-wrap gap-2">
            {source.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  {s.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Barèmes utilisés */}
      {source.baremes.length > 0 && (
        <div className="mb-3">
          <p className="text-gray-500 font-medium mb-1">Barèmes et formules :</p>
          <ul className="list-disc list-inside text-gray-600 space-y-0.5">
            {source.baremes.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Date de MAJ + disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3 border-t border-gray-200">
        <p className="text-gray-400">
          Données mises à jour le{" "}
          <span className="text-gray-600 font-medium">
            {formatDate(source.lastUpdated)}
          </span>
        </p>
        <Link
          href="/methodologie"
          className="text-blue-600 hover:underline text-xs"
        >
          Notre méthodologie
        </Link>
      </div>

      {source.disclaimer && (
        <p className="mt-2 text-xs text-gray-400 italic">
          {source.disclaimer}
        </p>
      )}
    </aside>
  );
}
