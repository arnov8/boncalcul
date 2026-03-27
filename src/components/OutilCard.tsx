import Link from "next/link";
import type { OutilMeta } from "@/data/outils";

export default function OutilCard({ outil }: { outil: OutilMeta }) {
  return (
    <Link
      href={`/outils/${outil.slug}`}
      className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex items-start gap-4 group"
    >
      <span className="text-3xl">{outil.icon}</span>
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
