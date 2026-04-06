import type { Metadata } from "next";
import SimulateurImpot from "./SimulateurImpot";
import Link from "next/link";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";

export const metadata: Metadata = {
  title: "Simulateur impôt sur le revenu 2026 — Calcul gratuit et instantané",
  description:
    "Simulez votre impôt sur le revenu 2026 (revenus 2025) gratuitement. Barème progressif, quotient familial, taux marginal et moyen d'imposition. Résultat instantané, sans inscription.",
  keywords: [
    "simulateur impot 2026",
    "calcul impot sur le revenu",
    "simulateur impot revenu",
    "barème impôt 2025",
    "quotient familial",
    "taux marginal imposition",
    "calcul impot en ligne",
    "impôt sur le revenu France",
    "simulateur fiscal",
    "tranches imposition 2025",
  ],
  openGraph: {
    title: "Simulateur impôt sur le revenu 2026 — Calcul gratuit | BonCalcul.fr",
    description:
      "Calculez votre impôt sur le revenu 2026 avec le barème progressif, le quotient familial et le détail par tranche. Gratuit et instantané.",
    url: "https://www.boncalcul.fr/outils/simulateur-impot-revenu",
    type: "website",
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/simulateur-impot-revenu",
  },
};

const faqQuestions = [
  {
    question: "Comment est calcule l'impot sur le revenu en France ?",
    answer:
      "L'impot sur le revenu est calcule selon un bareme progressif compose de 5 tranches. Le revenu net imposable est d'abord divise par le nombre de parts fiscales du foyer (quotient familial). Ce quotient est ensuite soumis au bareme, et l'impot obtenu est multiplie par le nombre de parts. Ce mecanisme permet de tenir compte de la situation familiale du contribuable.",
  },
  {
    question: "Quelles sont les tranches d'imposition en 2025 ?",
    answer:
      "Le bareme progressif de l'impot sur le revenu 2025 (applique aux revenus 2024) comporte 5 tranches : 0 % jusqu'a 11 294 euros, 11 % de 11 295 a 28 797 euros, 30 % de 28 798 a 82 341 euros, 41 % de 82 342 a 177 106 euros, et 45 % au-dela de 177 106 euros. Ces seuils sont revalorises chaque annee en fonction de l'inflation.",
  },
  {
    question: "Qu'est-ce que le quotient familial et comment fonctionne-t-il ?",
    answer:
      "Le quotient familial est un mecanisme qui divise le revenu imposable par un nombre de parts fiscales dependant de la composition du foyer. Une personne celibataire a 1 part, un couple marie ou pacse a 2 parts. Chacun des deux premiers enfants a charge ajoute 0,5 part, et chaque enfant a partir du troisieme ajoute 1 part. Ce systeme reduit l'impot des familles en abaissant le taux marginal applique.",
  },
  {
    question: "Quelle est la difference entre le taux marginal et le taux moyen d'imposition ?",
    answer:
      "Le taux marginal d'imposition (TMI) est le taux de la tranche la plus elevee dans laquelle se situe votre revenu. Il s'applique uniquement a la fraction de revenu qui depasse le seuil de cette tranche. Le taux moyen d'imposition represente le pourcentage reel de votre revenu total consacre a l'impot (impot divise par le revenu). Le taux moyen est toujours inferieur au taux marginal grace a la progressivite du bareme.",
  },
  {
    question: "Les resultats de ce simulateur sont-ils fiables ?",
    answer:
      "Ce simulateur utilise le bareme officiel de l'impot sur le revenu 2025 et la methode de calcul par quotient familial conforme a la legislation fiscale francaise. Les calculs sont effectues integralement dans votre navigateur, aucune donnee n'est transmise a nos serveurs. Les resultats sont indicatifs et ne tiennent pas compte de certains dispositifs specifiques (decote, plafonnement du quotient familial, credits et reductions d'impot). Pour une declaration officielle, consultez le site impots.gouv.fr.",
  },
];

export default function PageSimulateurImpot() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur impot sur le revenu 2026",
          description:
            "Simulez votre impot sur le revenu 2026 gratuitement. Bareme progressif, quotient familial, taux marginal et moyen d'imposition.",
          url: "https://www.boncalcul.fr/outils/simulateur-impot-revenu",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur d&apos;impot sur le revenu 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez instantanement votre impot sur le revenu avec le bareme
            progressif 2025, le quotient familial et le detail par tranche.
            Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <SimulateurImpot />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="simulateur-impot-revenu" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;impot sur le revenu
          </h2>
          <div className="space-y-3">
            {faqQuestions.map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">&#9660;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Article associe */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <Link
          href="/blog/declaration-impots-2026-guide"
          className="block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition group"
        >
          <p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
            Article associe
          </p>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
            Declaration d&apos;impots 2026 : guide complet pour bien declarer vos revenus 2025
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Calendrier, bareme, nouveautes, deductions et erreurs a eviter : tout savoir pour reussir votre declaration d&apos;impots 2026.
          </p>
        </Link>
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Comprendre l&apos;impot sur le revenu en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment fonctionne l&apos;impot sur le revenu ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>impot sur le revenu (IR)</strong> est un impot direct preleve sur les revenus des personnes physiques residant en France, calcule chaque annee sur les revenus de l&apos;annee precedente. Depuis 2019, le <strong>prelevement a la source</strong> collecte l&apos;impot directement sur les salaires et pensions chaque mois. L&apos;IR est <strong>progressif</strong> : plus vos revenus sont eleves, plus le taux augmente, contrairement aux impots proportionnels comme la CSG.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le bareme progressif 2025</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le bareme comporte <strong>5 tranches</strong> avec des taux croissants, chaque tranche ne s&apos;appliquant qu&apos;a la portion de revenu concernee. <strong>Jusqu&apos;a 11 294 euros :</strong> 0%. <strong>De 11 295 a 28 797 euros :</strong> 11%. <strong>De 28 798 a 82 341 euros :</strong> 30%. <strong>De 82 342 a 177 106 euros :</strong> 41%. <strong>Au-dela de 177 106 euros :</strong> 45%. Ces seuils sont revalorises chaque annee en fonction de l&apos;inflation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le quotient familial</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>quotient familial</strong> adapte l&apos;impot a la taille du foyer en divisant le revenu imposable par un nombre de <strong>parts fiscales</strong>. Celibataire : 1 part. Couple marie/pacse : 2 parts. Les 2 premiers enfants ajoutent 0,5 part chacun, puis 1 part par enfant supplementaire. Le quotient est soumis au bareme, puis l&apos;impot est multiplie par le nombre de parts. L&apos;avantage est <strong>plafonne</strong> a 1 759 euros par demi-part supplementaire en 2025.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Deductions, reductions et credits d&apos;impot</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Les deductions</strong> diminuent le revenu soumis au bareme (pensions alimentaires, cotisations PER, abattement de 10% pour frais professionnels). <strong>Les reductions d&apos;impot</strong> diminuent directement l&apos;impot sans remboursement possible (dons aux associations, investissement Pinel, capital PME). <strong>Les credits d&apos;impot</strong> fonctionnent comme les reductions mais peuvent donner lieu a un remboursement (garde d&apos;enfants, emploi a domicile, renovation energetique).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">Comment optimiser son impot sur le revenu ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Epargne retraite (PER) :</strong> versements deductibles du revenu imposable (plafond de 10% des revenus), particulierement efficace dans les tranches a 30% ou plus. <strong>Dons aux associations :</strong> reduction de 66% du montant verse (75% pour l&apos;aide aux personnes en difficulte), dans la limite de 20% du revenu imposable. <strong>Emploi a domicile :</strong> credit d&apos;impot de 50% des sommes versees, plafonne a 12 000 euros/an. <strong>Investissement locatif :</strong> dispositifs Pinel ou Denormandie pour des reductions etalees sur plusieurs annees. Pour une estimation complete, consultez <strong>impots.gouv.fr</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="tool-bottom" format="horizontal" />
      </div>
    </>
  );
}
