import Link from "next/link";
import type { OutilMeta } from "@/data/outils";
import TablerIcon from "@/components/TablerIcon";

export default function OutilCard({ outil }: { outil: OutilMeta }) {
  return (
    <Link
      href={`/outils/${outil.slug}`}
      className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex items-start gap-4 group"
    >
      <TablerIcon name={outil.icon} size={30} className="text-blue-600 shrink-0 mt-0.5" />
      <div>
        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {outil.shortTitle}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {outil.description}
        </p>
      </div>
    </Link>
  );
}
