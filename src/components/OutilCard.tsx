import Link from "next/link";
import type { OutilMeta } from "@/data/outils";
import TablerIcon from "@/components/TablerIcon";

export default function OutilCard({ outil }: { outil: OutilMeta }) {
  return (
    <Link
      href={`/outils/${outil.slug}`}
      className="bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all p-5 flex flex-col items-start group"
    >
      <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
        <TablerIcon name={outil.icon} size={24} className="text-blue-600" />
      </div>
      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition text-sm leading-snug mb-1">
        {outil.shortTitle}
      </h3>
      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
        {outil.description}
      </p>
    </Link>
  );
}
