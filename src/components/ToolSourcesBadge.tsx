import SourcesBadge from "./SourcesBadge";
import { getToolSources } from "@/data/sources";
import { getSilosForTool } from "@/data/silos";
import Link from "next/link";
import TablerIcon from "./TablerIcon";

/**
 * Composant E-E-A-T à intégrer dans chaque page outil.
 * Affiche les sources, barèmes, date de MAJ + liens vers les silos parents.
 */
export default function ToolSourcesBadge({ slug }: { slug: string }) {
  const source = getToolSources(slug);
  const parentSilos = getSilosForTool(slug);

  if (!source) return null;

  return (
    <div>
      {/* Liens vers les catégories parentes */}
      {parentSilos.length > 0 && (
        <nav className="flex flex-wrap items-center gap-2 mt-6 text-sm" aria-label="Catégories">
          <span className="text-gray-400">Catégorie :</span>
          {parentSilos.map((silo) => (
            <Link
              key={silo.slug}
              href={`/${silo.slug}`}
              className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition"
            >
              <TablerIcon name={silo.icon} size={16} />
              {silo.shortTitle}
            </Link>
          ))}
        </nav>
      )}

      {/* Sources et fiabilité */}
      <SourcesBadge source={source} />
    </div>
  );
}
