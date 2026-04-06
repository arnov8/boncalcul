import type { Metadata } from "next";
import CalculPlusValue from "./CalculPlusValue";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";
import InfographiePlusValue from "@/components/infographics/InfographiePlusValue";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul plus-value immobili\u00e8re 2026 \u2014 Imp\u00f4t et abattements",
  description:
    "Calculez gratuitement la plus-value immobili\u00e8re de votre bien et l\u2019imp\u00f4t \u00e0 payer. Abattements pour dur\u00e9e de d\u00e9tention, IR, pr\u00e9l\u00e8vements sociaux et surtaxe inclus.",
  keywords: [
    "plus-value immobili\u00e8re",
    "calcul plus-value",
    "imp\u00f4t plus-value",
    "abattement dur\u00e9e d\u00e9tention",
    "taxe plus-value immobili\u00e8re",
    "pr\u00e9l\u00e8vements sociaux immobilier",
    "surtaxe plus-value",
    "simulateur plus-value",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-plus-value-immobiliere",
  },
  openGraph: {
    title: "Calcul plus-value immobili\u00e8re 2026 \u2014 Imp\u00f4t et abattements | BonCalcul.fr",
    description:
      "Calculez gratuitement la plus-value immobili\u00e8re et l\u2019imp\u00f4t \u00e0 payer lors de la vente de votre bien. R\u00e9sultat instantan\u00e9.",
    url: "https://www.boncalcul.fr/outils/calcul-plus-value-immobiliere",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=calcul-plus-value-immobiliere`,
        width: 1200,
        height: 630,
        alt: "Calcul Plus Value Immobiliere — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Comment est calcul\u00e9e la plus-value immobili\u00e8re ?",
    answer:
      "La plus-value immobili\u00e8re correspond \u00e0 la diff\u00e9rence entre le prix de vente et le prix d\u2019acquisition corrig\u00e9. Le prix d\u2019acquisition corrig\u00e9 inclut le prix d\u2019achat, les frais d\u2019acquisition (frais de notaire, forfait de 7,5 % ou montant r\u00e9el) et les travaux (forfait de 15 % apr\u00e8s 5 ans de d\u00e9tention ou montant r\u00e9el sur justificatifs). Si le r\u00e9sultat est positif, il y a plus-value imposable.",
  },
  {
    question: "Quels sont les abattements pour dur\u00e9e de d\u00e9tention ?",
    answer:
      "Pour l\u2019imp\u00f4t sur le revenu (IR) : aucun abattement les 5 premi\u00e8res ann\u00e9es, puis 6 % par an de la 6e \u00e0 la 21e ann\u00e9e, et 4 % la 22e ann\u00e9e. Exon\u00e9ration totale IR apr\u00e8s 22 ans. Pour les pr\u00e9l\u00e8vements sociaux : aucun abattement les 5 premi\u00e8res ann\u00e9es, puis 1,65 % par an de la 6e \u00e0 la 21e ann\u00e9e, 1,60 % la 22e ann\u00e9e, et 9 % par an de la 23e \u00e0 la 30e ann\u00e9e. Exon\u00e9ration totale apr\u00e8s 30 ans.",
  },
  {
    question: "Qu\u2019est-ce que la surtaxe sur les plus-values \u00e9lev\u00e9es ?",
    answer:
      "Lorsque la plus-value nette (apr\u00e8s abattement IR) d\u00e9passe 50 000 \u20ac, une surtaxe progressive s\u2019applique en plus de l\u2019IR et des pr\u00e9l\u00e8vements sociaux. Le taux varie de 2 % (entre 50 001 et 100 000 \u20ac) \u00e0 6 % (au-del\u00e0 de 260 000 \u20ac). Cette surtaxe peut repr\u00e9senter un montant significatif pour les transactions \u00e0 forte plus-value.",
  },
  {
    question: "Quand est-on exon\u00e9r\u00e9 de la taxe sur la plus-value ?",
    answer:
      "Plusieurs cas d\u2019exon\u00e9ration existent : la vente de la r\u00e9sidence principale (exon\u00e9ration totale), une d\u00e9tention de plus de 22 ans (exon\u00e9ration IR, mais pas des pr\u00e9l\u00e8vements sociaux), une d\u00e9tention de plus de 30 ans (exon\u00e9ration totale IR + PS), un prix de vente inf\u00e9rieur \u00e0 15 000 \u20ac, ou encore la premi\u00e8re vente d\u2019un bien autre que la r\u00e9sidence principale sous certaines conditions.",
  },
  {
    question: "Peut-on d\u00e9duire les travaux du calcul de la plus-value ?",
    answer:
      "Oui, de deux mani\u00e8res. Si vous d\u00e9tenez le bien depuis plus de 5 ans, vous pouvez appliquer un forfait de 15 % du prix d\u2019achat sans justificatif. Sinon, vous pouvez d\u00e9duire le montant r\u00e9el des travaux sur factures, \u00e0 condition qu\u2019il s\u2019agisse de travaux de construction, reconstruction, agrandissement ou am\u00e9lioration (et non d\u2019entretien ou de r\u00e9paration). Vous devez choisir l\u2019option la plus avantageuse.",
  },
];

export default function PagePlusValueImmobiliere() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul plus-value immobili\u00e8re 2026",
          description:
            "Calculez gratuitement la plus-value immobili\u00e8re et l\u2019imp\u00f4t \u00e0 payer lors de la vente de votre bien.",
          url: "https://www.boncalcul.fr/outils/calcul-plus-value-immobiliere",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-t\u00eate ---------- */}
        <header className="text-center mb-10 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calcul de la plus-value immobili&egrave;re 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez gratuitement l&apos;imp&ocirc;t sur la plus-value immobili&egrave;re
            lors de la vente de votre bien, avec les abattements pour dur&eacute;e
            de d&eacute;tention et la surtaxe &eacute;ventuelle.
          </p>
        </header>

        {/* ---------- Calculateur ---------- */}
        <CalculPlusValue />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="calcul-plus-value-immobiliere" />

        <InfographiePlusValue />

        {/* ---------- FAQ ---------- */}
        <section className="bg-gray-50 rounded-2xl py-10 px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur la plus-value immobili&egrave;re
          </h2>
          <div className="space-y-3">
            {faqQuestions.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">&#9660;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-4">
          <AdBanner slot="tool-after-faq" format="horizontal" />
        </div>

        {/* ---------- Contenu SEO ---------- */}
        <section className="max-w-5xl mx-auto px-0 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Tout savoir sur la plus-value immobili&egrave;re
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Le calcul de la plus-value</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                La <strong>plus-value immobili&egrave;re</strong> est la diff&eacute;rence entre le prix de vente et le <strong>prix d&apos;acquisition corrig&eacute;</strong>. Ce dernier comprend le prix d&apos;achat, les frais d&apos;acquisition (forfait 7,5&nbsp;% ou r&eacute;el) et les travaux (forfait 15&nbsp;% apr&egrave;s 5 ans ou montant r&eacute;el justifi&eacute;). Plus le prix d&apos;acquisition corrig&eacute; est &eacute;lev&eacute;, plus la plus-value imposable est faible.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Les abattements pour dur&eacute;e de d&eacute;tention</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le syst&egrave;me fiscal fran&ccedil;ais encourage la d&eacute;tention longue avec des <strong>abattements progressifs</strong>. Pour l&apos;IR, l&apos;exon&eacute;ration est totale apr&egrave;s <strong>22 ans</strong>. Pour les pr&eacute;l&egrave;vements sociaux, il faut attendre <strong>30 ans</strong>. Les premi&egrave;res ann&eacute;es (0 &agrave; 5 ans) ne b&eacute;n&eacute;ficient d&apos;aucun abattement, ce qui rend les reventes rapides particuli&egrave;rement co&ucirc;teuses fiscalement.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">L&apos;imposition&nbsp;: IR + pr&eacute;l&egrave;vements sociaux</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                La plus-value (apr&egrave;s abattement) est soumise &agrave; un <strong>taux forfaitaire de 19&nbsp;%</strong> au titre de l&apos;imp&ocirc;t sur le revenu et de <strong>17,2&nbsp;%</strong> de pr&eacute;l&egrave;vements sociaux, soit un taux global de <strong>36,2&nbsp;%</strong> avant abattements. S&apos;y ajoute une <strong>surtaxe de 2 &agrave; 6&nbsp;%</strong> lorsque la plus-value nette (apr&egrave;s abattement IR) d&eacute;passe 50&nbsp;000&nbsp;&euro;.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Les cas d&apos;exon&eacute;ration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Plusieurs situations permettent d&apos;&eacute;chapper &agrave; l&apos;imp&ocirc;t&nbsp;: la <strong>r&eacute;sidence principale</strong> (exon&eacute;ration totale), la d&eacute;tention de plus de <strong>30 ans</strong>, un prix de cession inf&eacute;rieur &agrave; <strong>15&nbsp;000&nbsp;&euro;</strong>, la premi&egrave;re vente d&apos;un bien (hors r&eacute;sidence principale) sous conditions, ou encore une <strong>expropriation</strong> si le prix est r&eacute;investi dans l&apos;immobilier dans les 12 mois.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <AdBanner slot="tool-bottom" format="horizontal" />
        </div>
      </div>
    </>
  );
}
