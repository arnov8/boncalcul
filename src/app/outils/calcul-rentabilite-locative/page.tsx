import type { Metadata } from "next";
import CalculRentabilite from "./CalculRentabilite";
import { AdBanner } from "@/lib/adsense";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul rentabilit\u00e9 locative 2026 \u2014 Brute, nette et cash-flow",
  description:
    "Calculez gratuitement la rentabilit\u00e9 locative brute et nette de votre investissement immobilier. Estimez votre cash-flow mensuel en int\u00e9grant frais de notaire, travaux, charges et vacance locative.",
  keywords: [
    "rentabilit\u00e9 locative",
    "calcul rentabilit\u00e9 locative",
    "rentabilit\u00e9 brute",
    "rentabilit\u00e9 nette",
    "cash-flow immobilier",
    "investissement locatif",
    "rendement locatif",
    "simulateur rentabilit\u00e9",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-rentabilite-locative",
  },
  openGraph: {
    title: "Calcul rentabilit\u00e9 locative 2026 \u2014 Brute, nette et cash-flow | BonCalcul.fr",
    description:
      "Calculez gratuitement la rentabilit\u00e9 locative brute et nette de votre investissement immobilier. R\u00e9sultat instantan\u00e9.",
    url: "https://boncalcul.fr/outils/calcul-rentabilite-locative",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Quelle est la diff\u00e9rence entre rentabilit\u00e9 brute et nette ?",
    answer:
      "La rentabilit\u00e9 brute se calcule simplement en divisant le loyer annuel par le prix d\u2019achat du bien. Elle ne tient pas compte des charges ni des frais. La rentabilit\u00e9 nette int\u00e8gre les charges non r\u00e9cup\u00e9rables (taxe fonci\u00e8re, copropri\u00e9t\u00e9, assurance PNO, gestion locative), la vacance locative, les frais de notaire et les travaux. C\u2019est un indicateur bien plus fiable pour \u00e9valuer la performance r\u00e9elle d\u2019un investissement.",
  },
  {
    question: "Qu\u2019est-ce que la vacance locative et comment l\u2019estimer ?",
    answer:
      "La vacance locative correspond aux p\u00e9riodes o\u00f9 le logement n\u2019est pas lou\u00e9 (entre deux locataires, travaux de remise en \u00e9tat). En moyenne, on estime la vacance locative \u00e0 environ 1 mois par an, soit environ 5 \u00e0 8 %. Dans les zones tr\u00e8s tendues (Paris, Lyon, Bordeaux), elle peut descendre \u00e0 2-3 %. Dans les zones moins demand\u00e9es, elle peut atteindre 10-15 %.",
  },
  {
    question: "Quelle rentabilit\u00e9 locative viser pour un bon investissement ?",
    answer:
      "Une rentabilit\u00e9 brute de 5 \u00e0 7 % est g\u00e9n\u00e9ralement consid\u00e9r\u00e9e comme correcte. En rentabilit\u00e9 nette, viser au minimum 3 \u00e0 4 % est un objectif raisonnable. Au-del\u00e0 de 7 % brut, l\u2019investissement est consid\u00e9r\u00e9 comme tr\u00e8s performant, mais il faut s\u2019assurer que le rendement \u00e9lev\u00e9 ne cache pas un risque accru (zone \u00e0 faible demande, bien en mauvais \u00e9tat).",
  },
  {
    question: "Quelles charges d\u00e9duire pour le calcul de la rentabilit\u00e9 nette ?",
    answer:
      "Les principales charges \u00e0 d\u00e9duire sont : la taxe fonci\u00e8re (hors taxe d\u2019enl\u00e8vement des ordures m\u00e9nag\u00e8res r\u00e9cup\u00e9rable), les charges de copropri\u00e9t\u00e9 non r\u00e9cup\u00e9rables, l\u2019assurance propri\u00e9taire non occupant (PNO), les frais de gestion locative (si vous d\u00e9l\u00e9guez la gestion, g\u00e9n\u00e9ralement 6 \u00e0 8 % des loyers), et l\u2019assurance loyers impay\u00e9s (GLI, environ 2 \u00e0 3 % des loyers).",
  },
  {
    question: "Comment am\u00e9liorer la rentabilit\u00e9 de son investissement locatif ?",
    answer:
      "Plusieurs leviers existent : n\u00e9gocier le prix d\u2019achat, r\u00e9aliser des travaux pour augmenter le loyer, choisir un r\u00e9gime fiscal adapt\u00e9 (LMNP, d\u00e9ficit foncier), r\u00e9duire la vacance locative en soignant la qualit\u00e9 du bien et sa localisation, g\u00e9rer soi-m\u00eame plut\u00f4t que de d\u00e9l\u00e9guer, et optimiser le financement avec un effet de levier bancaire (emprunt \u00e0 taux bas).",
  },
];

export default function PageRentabiliteLocative() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul rentabilit\u00e9 locative 2026",
          description:
            "Calculez gratuitement la rentabilit\u00e9 locative brute et nette de votre investissement immobilier.",
          url: "https://boncalcul.fr/outils/calcul-rentabilite-locative",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-t\u00eate ---------- */}
        <header className="text-center mb-10 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calcul de la rentabilit&eacute; locative 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez gratuitement la rentabilit&eacute; brute, nette et le cash-flow
            mensuel de votre investissement locatif en quelques secondes.
          </p>
        </header>

        {/* ---------- Pub ---------- */}
        <div className="mb-8">
          <AdBanner slot="rentabilite-top" format="horizontal" />
        </div>

        {/* ---------- Calculateur ---------- */}
        <CalculRentabilite />

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="rentabilite-mid" format="horizontal" />
        </div>

        {/* ---------- FAQ ---------- */}
        <section className="bg-gray-50 rounded-2xl py-10 px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur la rentabilit&eacute; locative
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

        {/* ---------- Contenu SEO ---------- */}
        <section className="max-w-5xl mx-auto px-0 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Tout savoir sur la rentabilit&eacute; locative
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Rentabilit&eacute; brute vs nette</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                La <strong>rentabilit&eacute; brute</strong> est le ratio entre les loyers annuels et le prix d&apos;achat. Simple &agrave; calculer, elle permet de comparer rapidement des biens. La <strong>rentabilit&eacute; nette</strong> int&egrave;gre toutes les charges (taxe fonci&egrave;re, copropri&eacute;t&eacute;, assurance, gestion) et la vacance locative, rapport&eacute;es au co&ucirc;t total d&apos;acquisition (prix + notaire + travaux). C&apos;est l&apos;indicateur cl&eacute; pour &eacute;valuer la performance r&eacute;elle de votre investissement.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Le cash-flow, indicateur essentiel</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le <strong>cash-flow</strong> repr&eacute;sente la diff&eacute;rence entre les loyers per&ccedil;us et l&apos;ensemble des d&eacute;penses (charges, cr&eacute;dit, imp&ocirc;ts). Un cash-flow positif signifie que le bien s&apos;autofinance et g&eacute;n&egrave;re un surplus de tr&eacute;sorerie chaque mois. C&apos;est l&apos;objectif de tout investisseur qui souhaite se constituer un patrimoine sans effort financier mensuel.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Optimiser son investissement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pour am&eacute;liorer la rentabilit&eacute;, plusieurs leviers existent&nbsp;: <strong>n&eacute;gocier le prix d&apos;achat</strong>, r&eacute;aliser des <strong>travaux &agrave; valeur ajout&eacute;e</strong> pour justifier un loyer plus &eacute;lev&eacute;, choisir le <strong>r&eacute;gime fiscal adapt&eacute;</strong> (LMNP au r&eacute;el, d&eacute;ficit foncier), et <strong>r&eacute;duire la vacance</strong> en ciblant des zones &agrave; forte demande locative. L&apos;effet de levier du cr&eacute;dit immobilier est &eacute;galement un atout majeur.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Les charges &agrave; ne pas oublier</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Un calcul r&eacute;aliste doit int&eacute;grer toutes les charges&nbsp;: <strong>taxe fonci&egrave;re</strong> (variable selon la commune), <strong>charges de copropri&eacute;t&eacute;</strong> non r&eacute;cup&eacute;rables, <strong>assurance PNO</strong> (propri&eacute;taire non occupant, obligatoire en copropri&eacute;t&eacute;), <strong>gestion locative</strong> (6 &agrave; 8&nbsp;% si d&eacute;l&eacute;gu&eacute;e), <strong>assurance GLI</strong> (garantie loyers impay&eacute;s, 2 &agrave; 3&nbsp;%), et une provision pour <strong>travaux d&apos;entretien</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Pub ---------- */}
        <div className="mt-10">
          <AdBanner slot="rentabilite-bottom" format="auto" />
        </div>
      </div>
    </>
  );
}
