import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog — Guides et conseils pratiques",
  description:
    "Articles et guides pratiques sur la finance, l'immobilier et le quotidien. Conseils pour mieux calculer et optimiser vos projets.",
  alternates: { canonical: "https://www.boncalcul.fr/blog" },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-500 mb-8">
        Guides et conseils pratiques pour vos finances et vos projets.
      </p>

      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 group"
          >
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
              <time dateTime={article.datePublished}>
                {new Date(article.datePublished).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{article.readTime} de lecture</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition mb-2">
              {article.title}
            </h2>
            <p className="text-gray-500 text-sm">{article.description}</p>
            <div className="flex gap-2 mt-3">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
