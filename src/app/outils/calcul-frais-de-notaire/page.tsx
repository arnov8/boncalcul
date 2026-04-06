import type { Metadata } from "next";
import Link from "next/link";
import CalculNotaire from "./CalculNotaire";
import { AdBanner } from "@/lib/adsense";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul frais de notaire 2026 — Estimation gratuite",
  description:
    "Estimez gratuitement vos frais de notaire pour un achat immobilier ancien ou neuf. Calcul instantané avec le barème officiel 2026 des émoluments et droits de mutation.",
  keywords: [
    "frais de notaire",
    "calcul frais de notaire",
    "simulation frais de notaire",
    "frais de notaire ancien",
    "frais de notaire neuf",
    "droits de mutation",
    "émoluments notaire",
    "frais acquisition immobilier",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-frais-de-notaire",
  },
  openGraph: {
    title: "Calcul frais de notaire 2026 — Estimation gratuite | BonCalcul.fr",
    description:
      "Estimez gratuitement vos frais de notaire pour un achat immobilier ancien ou neuf. Résultat instantané.",
    url: "https://www.boncalcul.fr/outils/calcul-frais-de-notaire",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Que comprennent les frais de notaire ?",
    answer:
      "Les frais de notaire comprennent trois éléments principaux : les droits de mutation (taxes reversées à l'État, au département et à la commune), les émoluments du notaire (sa rémunération calculée selon un barème officiel dégressif) et les frais divers (débours, formalités, copies d'actes). Contrairement à ce que l'on pense, la rémunération du notaire ne représente qu'une petite partie du total : environ 1 % du prix de vente.",
  },
  {
    question:
      "Quelle est la différence de frais de notaire entre un bien ancien et un bien neuf ?",
    answer:
      "Pour un bien ancien (plus de 5 ans), les frais de notaire s'élèvent à environ 7 à 8 % du prix d'achat, principalement à cause des droits de mutation élevés (environ 5,80 %). Pour un bien neuf (moins de 5 ans ou VEFA), les frais sont nettement plus faibles, autour de 2 à 3 % du prix, car les droits de mutation sont remplacés par une taxe de publicité foncière de seulement 0,715 %.",
  },
  {
    question: "Peut-on négocier les frais de notaire ?",
    answer:
      "Les droits de mutation (la plus grande partie) sont des taxes non négociables. En revanche, depuis 2021, le notaire peut accorder une remise allant jusqu'à 20 % sur ses émoluments pour les transactions dont le prix dépasse 100 000 €. Cette remise doit être appliquée de manière uniforme à tous les clients du notaire. Les frais divers (débours) ne sont pas négociables non plus car ils correspondent à des dépenses réelles.",
  },
  {
    question: "Comment réduire ses frais de notaire ?",
    answer:
      "Plusieurs astuces permettent de réduire la note. Premièrement, déduisez la valeur du mobilier (cuisine équipée, meubles) du prix de vente, car les frais de notaire se calculent uniquement sur le bien immobilier. Deuxièmement, séparez les frais d'agence du prix : si vous payez l'agence en sus du prix net vendeur, les frais sont calculés sur un montant inférieur. Enfin, demandez au notaire s'il applique la remise de 20 % sur ses émoluments.",
  },
  {
    question: "Quand faut-il payer les frais de notaire ?",
    answer:
      "Les frais de notaire sont réglés le jour de la signature de l'acte authentique de vente, c'est-à-dire le jour où vous devenez officiellement propriétaire. Le notaire demande généralement une provision (estimation) quelques jours avant la signature. Si le montant réel est inférieur à la provision, le notaire vous rembourse la différence dans les semaines ou mois suivants. Il est donc important de prévoir cette somme en plus de votre apport personnel et de votre emprunt.",
  },
];

export default function PageFraisNotaire() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul frais de notaire 2026",
          description:
            "Estimez gratuitement vos frais de notaire pour un achat immobilier ancien ou neuf avec le barème officiel.",
          url: "https://www.boncalcul.fr/outils/calcul-frais-de-notaire",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-tête ---------- */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calcul des frais de notaire 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez gratuitement et instantanément le montant des frais de
            notaire pour votre achat immobilier, qu&apos;il s&apos;agisse d&apos;un bien
            ancien ou neuf.
          </p>
        </header>

        {/* ---------- Calculateur ---------- */}
        <CalculNotaire />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        {/* ---------- FAQ ---------- */}
        <section className="bg-gray-50 rounded-2xl py-10 px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur les frais de notaire
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

        {/* Article associe */}
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <Link
            href="/blog/guide-frais-de-notaire-2026"
            className="block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition group"
          >
            <p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
              Article associe
            </p>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
              Frais de notaire 2026 : guide complet pour bien estimer vos frais d&apos;achat immobilier
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Tout savoir sur les frais de notaire en 2026 : calcul detaille, difference ancien/neuf, baremes en vigueur et astuces pour les reduire.
            </p>
          </Link>
        </div>

        {/* ---------- Contenu SEO ---------- */}
        <section className="max-w-5xl mx-auto px-0 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Tout savoir sur les frais de notaire
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que les frais de notaire&nbsp;?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les &laquo;&nbsp;<strong>frais de notaire</strong>&nbsp;&raquo; (plus justement &laquo;&nbsp;frais d&apos;acquisition&nbsp;&raquo;) se d&eacute;composent en trois cat&eacute;gories&nbsp;: les <strong>droits de mutation</strong> (taxes revers&eacute;es &agrave; l&apos;&Eacute;tat, au d&eacute;partement et &agrave; la commune), les <strong>&eacute;moluments du notaire</strong> (sa r&eacute;mun&eacute;ration selon un bar&egrave;me officiel) et les <strong>frais divers</strong> (d&eacute;bours, formalit&eacute;s, copies d&apos;actes). La r&eacute;mun&eacute;ration du notaire ne repr&eacute;sente qu&apos;environ 1&nbsp;% du prix de vente, la majeure partie &eacute;tant constitu&eacute;e de taxes.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Ancien vs neuf&nbsp;: quelles diff&eacute;rences&nbsp;?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pour un <strong>bien ancien</strong> (+5 ans), les frais repr&eacute;sentent <strong>7 &agrave; 8&nbsp;%</strong> du prix, en raison des droits de mutation (taxe d&eacute;partementale 4,5&nbsp;%, communale 1,2&nbsp;%, &Eacute;tat 0,1&nbsp;%). Pour un <strong>bien neuf</strong> (VEFA ou -5 ans), ils ne sont que de <strong>2 &agrave; 3&nbsp;%</strong> gr&acirc;ce &agrave; une taxe de publicit&eacute; fonci&egrave;re r&eacute;duite &agrave; 0,715&nbsp;% au lieu des droits de mutation classiques. C&apos;est un avantage financier majeur de l&apos;achat dans le neuf.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Bar&egrave;me des &eacute;moluments du notaire</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les &eacute;moluments suivent un <strong>bar&egrave;me officiel d&eacute;gressif</strong> identique dans toute la France&nbsp;: 3,870&nbsp;% jusqu&apos;&agrave; 6&nbsp;500&nbsp;&euro;, 1,596&nbsp;% de 6&nbsp;500 &agrave; 17&nbsp;000&nbsp;&euro;, 1,064&nbsp;% de 17&nbsp;000 &agrave; 60&nbsp;000&nbsp;&euro;, et 0,799&nbsp;% au-del&agrave;. Pour un bien &agrave; 250&nbsp;000&nbsp;&euro;, les &eacute;moluments repr&eacute;sentent environ 2&nbsp;000&nbsp;&euro;, soit moins de 1&nbsp;% du prix de vente.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">N&eacute;gocier les frais de notaire</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les droits de mutation (taxes l&eacute;gales) ne sont pas n&eacute;gociables. En revanche, depuis la <strong>loi Macron (2015)</strong>, le notaire peut accorder une <strong>remise jusqu&apos;&agrave; 20&nbsp;%</strong> sur ses &eacute;moluments pour les biens de plus de 100&nbsp;000&nbsp;&euro;. Cette remise doit &ecirc;tre appliqu&eacute;e uniform&eacute;ment &agrave; tous les clients de l&apos;&eacute;tude. N&apos;h&eacute;sitez pas &agrave; la demander.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Astuces pour r&eacute;duire la facture</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>D&eacute;duire le mobilier</strong>&nbsp;: cuisine &eacute;quip&eacute;e, meubles fix&eacute;s et &eacute;lectrom&eacute;nager peuvent &ecirc;tre valoris&eacute;s s&eacute;par&eacute;ment, les frais ne portant que sur la valeur immobili&egrave;re. <strong>S&eacute;parer les frais d&apos;agence</strong>&nbsp;: si les honoraires sont &agrave; charge de l&apos;acqu&eacute;reur, le prix net vendeur (base de calcul) est plus faible. <strong>Comparer les d&eacute;partements</strong>&nbsp;: quelques-uns appliquent encore 3,8&nbsp;% au lieu de 4,5&nbsp;% de taxe d&eacute;partementale.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Quand et comment payer&nbsp;?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les frais sont r&eacute;gl&eacute;s le jour de la <strong>signature de l&apos;acte authentique</strong>. Le notaire adresse un appel de fonds quelques jours avant et restitue le trop-per&ccedil;u &eacute;ventuel dans les semaines suivantes. Ces frais ne peuvent g&eacute;n&eacute;ralement pas &ecirc;tre int&eacute;gr&eacute;s au pr&ecirc;t immobilier principal&nbsp;: les banques exigent souvent un <strong>apport personnel</strong> couvrant au minimum 7 &agrave; 10&nbsp;% du prix du bien dans l&apos;ancien. Notre simulateur, bas&eacute; sur le bar&egrave;me officiel 2026, vous aide &agrave; estimer ce poste pr&eacute;cis&eacute;ment.
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
