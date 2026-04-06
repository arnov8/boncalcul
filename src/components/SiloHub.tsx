import Link from "next/link";
import OutilCard from "@/components/OutilCard";
import TablerIcon from "@/components/TablerIcon";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import type { Silo } from "@/data/silos";
import { getSiloTools } from "@/data/silos";

const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", gradient: "from-blue-50 to-gray-50" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", gradient: "from-emerald-50 to-gray-50" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", gradient: "from-amber-50 to-gray-50" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", gradient: "from-rose-50 to-gray-50" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", gradient: "from-violet-50 to-gray-50" },
};

export default function SiloHub({
  silo,
  faqQuestions,
  children,
}: {
  silo: Silo;
  faqQuestions?: { question: string; answer: string }[];
  children?: React.ReactNode;
}) {
  const tools = getSiloTools(silo);
  const colors = colorMap[silo.color] || colorMap.blue;

  return (
    <>
      {faqQuestions && <JsonLd data={faqJsonLd(faqQuestions)} />}

      {/* Hero */}
      <section className={`bg-gradient-to-b ${colors.gradient} py-10 md:py-16`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
              <TablerIcon name={silo.icon} size={28} className={colors.text} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {silo.shortTitle}
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {silo.intro}
          </p>
        </div>
      </section>

      {/* Grille d'outils */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <AdBanner slot="hub-after-hero" format="horizontal" className="mb-8" />

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {tools.length} outils disponibles
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((outil) => (
            <OutilCard key={outil.slug} outil={outil} />
          ))}
        </div>
      </section>

      {/* Contenu éditorial spécifique au silo */}
      {children && (
        <section className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </section>
      )}

      {/* FAQ */}
      {faqQuestions && faqQuestions.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {faqQuestions.map((q, i) => (
                <details
                  key={i}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
                >
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{q.question}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                      &#9660;
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {q.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Liens vers les autres catégories */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <AdBanner slot="hub-bottom" format="horizontal" className="mb-8" />
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Autres catégories
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { slug: "immobilier", label: "Immobilier", icon: "home" },
            { slug: "emploi", label: "Emploi & Salaire", icon: "briefcase" },
            { slug: "fiscalite", label: "Fiscalité", icon: "building-columns" },
            { slug: "sante", label: "Santé", icon: "heartbeat" },
            { slug: "auto-transport", label: "Auto & Transport", icon: "car" },
          ]
            .filter((s) => s.slug !== silo.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 transition"
              >
                <TablerIcon name={s.icon} size={18} />
                {s.label}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
