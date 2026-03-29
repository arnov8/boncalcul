import type { Metadata } from "next";
import SimulateurCreditConso from "./SimulateurCreditConso";
import { AdBanner } from "@/lib/adsense";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Simulateur cr\u00e9dit consommation 2026 — Calcul mensualit\u00e9",
  description:
    "Simulez gratuitement votre cr\u00e9dit \u00e0 la consommation : mensualit\u00e9, co\u00fbt des int\u00e9r\u00eats, co\u00fbt total et TAEG indicatif. Comparaison par dur\u00e9e de 12 \u00e0 84 mois.",
  keywords: [
    "cr\u00e9dit consommation",
    "simulateur cr\u00e9dit consommation",
    "calcul mensualit\u00e9 cr\u00e9dit",
    "pr\u00eat personnel",
    "taux cr\u00e9dit conso",
    "co\u00fbt cr\u00e9dit consommation",
    "TAEG cr\u00e9dit",
    "simulation pr\u00eat consommation",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/simulateur-credit-consommation",
  },
  openGraph: {
    title: "Simulateur cr\u00e9dit consommation 2026 — Calcul mensualit\u00e9 | BonCalcul.fr",
    description:
      "Simulez gratuitement votre cr\u00e9dit \u00e0 la consommation. Mensualit\u00e9, co\u00fbt total et comparaison par dur\u00e9e.",
    url: "https://boncalcul.fr/outils/simulateur-credit-consommation",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Qu\u2019est-ce qu\u2019un cr\u00e9dit \u00e0 la consommation ?",
    answer:
      "Un cr\u00e9dit \u00e0 la consommation est un pr\u00eat accord\u00e9 par une banque ou un organisme financier pour financer des achats de biens ou services (voiture, travaux, voyage, \u00e9lectrom\u00e9nager). Le montant est compris entre 200 et 75 000 euros, avec une dur\u00e9e de remboursement sup\u00e9rieure \u00e0 3 mois. Il est r\u00e9gi par le Code de la consommation qui prot\u00e8ge l\u2019emprunteur.",
  },
  {
    question: "Quelle diff\u00e9rence entre taux nominal et TAEG ?",
    answer:
      "Le taux nominal (ou taux d\u00e9biteur) correspond au taux d\u2019int\u00e9r\u00eat appliqu\u00e9 au capital emprunt\u00e9. Le TAEG (Taux Annuel Effectif Global) inclut en plus tous les frais obligatoires : frais de dossier, assurance emprunteur, frais de garantie. Le TAEG est donc toujours sup\u00e9rieur au taux nominal et constitue le v\u00e9ritable co\u00fbt du cr\u00e9dit. C\u2019est lui qu\u2019il faut comparer entre diff\u00e9rentes offres.",
  },
  {
    question: "Peut-on rembourser un cr\u00e9dit conso par anticipation ?",
    answer:
      "Oui, vous pouvez rembourser par anticipation \u00e0 tout moment, en totalit\u00e9 ou partiellement. Si le montant rembours\u00e9 par anticipation d\u00e9passe 10 000 euros, la banque peut demander une indemnit\u00e9 plafonn\u00e9e \u00e0 1 % du montant rembours\u00e9 (ou 0,5 % si la dur\u00e9e restante est inf\u00e9rieure \u00e0 1 an). En dessous de 10 000 euros, aucune indemnit\u00e9 ne peut \u00eatre exig\u00e9e.",
  },
  {
    question: "Quel est le taux moyen d\u2019un cr\u00e9dit consommation en 2026 ?",
    answer:
      "En 2026, les taux moyens des cr\u00e9dits \u00e0 la consommation varient selon le montant et la dur\u00e9e. Pour un pr\u00eat personnel classique, comptez entre 4 et 7 % pour des dur\u00e9es de 12 \u00e0 48 mois, et entre 5 et 9 % pour des dur\u00e9es de 48 \u00e0 84 mois. Les cr\u00e9dits affect\u00e9s (auto, travaux) b\u00e9n\u00e9ficient souvent de taux promotionnels plus avantageux.",
  },
  {
    question: "Comment r\u00e9duire le co\u00fbt de son cr\u00e9dit conso ?",
    answer:
      "Plusieurs leviers permettent de r\u00e9duire le co\u00fbt total : privil\u00e9giez une dur\u00e9e courte (moins d\u2019int\u00e9r\u00eats cumul\u00e9s), comparez les offres de plusieurs banques et courtiers, n\u00e9gociez les frais de dossier, choisissez un cr\u00e9dit affect\u00e9 (souvent moins cher qu\u2019un pr\u00eat personnel), et d\u00e9l\u00e9guez l\u2019assurance emprunteur plut\u00f4t que de prendre celle de la banque.",
  },
];

export default function PageCreditConso() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur cr\u00e9dit consommation 2026",
          description:
            "Simulez votre cr\u00e9dit \u00e0 la consommation : mensualit\u00e9, co\u00fbt total et comparaison par dur\u00e9e.",
          url: "https://boncalcul.fr/outils/simulateur-credit-consommation",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-t\u00eate ---------- */}
        <header className="text-center mb-10 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Simulateur de cr&eacute;dit &agrave; la consommation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez votre mensualit&eacute;, le co&ucirc;t des int&eacute;r&ecirc;ts et le co&ucirc;t total
            de votre cr&eacute;dit conso. Comparez les r&eacute;sultats selon diff&eacute;rentes
            dur&eacute;es de remboursement.
          </p>
        </header>

        {/* ---------- Calculateur ---------- */}
        <SimulateurCreditConso />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        {/* ---------- FAQ ---------- */}
        <section className="bg-gray-50 rounded-2xl py-10 px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur le cr&eacute;dit consommation
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
            Tout savoir sur le cr&eacute;dit &agrave; la consommation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Les types de cr&eacute;dit conso</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Il existe plusieurs formes de cr&eacute;dit &agrave; la consommation&nbsp;: le <strong>pr&ecirc;t personnel</strong> (libre d&apos;utilisation), le <strong>cr&eacute;dit affect&eacute;</strong> (li&eacute; &agrave; un achat pr&eacute;cis comme une voiture ou des travaux), le <strong>cr&eacute;dit renouvelable</strong> (r&eacute;serve d&apos;argent) et la <strong>location avec option d&apos;achat</strong> (LOA). Le pr&ecirc;t personnel et le cr&eacute;dit affect&eacute; sont les plus courants.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Le d&eacute;lai de r&eacute;tractation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Apr&egrave;s signature, vous disposez d&apos;un <strong>d&eacute;lai de r&eacute;tractation de 14 jours calendaires</strong> pour renoncer &agrave; votre cr&eacute;dit sans frais ni p&eacute;nalit&eacute;. Ce droit est garanti par le Code de la consommation. Si les fonds ont d&eacute;j&agrave; &eacute;t&eacute; vers&eacute;s, vous devrez les restituer dans un d&eacute;lai de 30 jours avec les int&eacute;r&ecirc;ts courus.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">L&apos;assurance emprunteur</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                L&apos;assurance emprunteur n&apos;est pas obligatoire pour un cr&eacute;dit conso, mais elle est souvent propos&eacute;e. Elle couvre g&eacute;n&eacute;ralement le <strong>d&eacute;c&egrave;s et l&apos;invalidit&eacute;</strong>. Depuis la <strong>loi Lemoine (2022)</strong>, vous pouvez r&eacute;silier et changer d&apos;assurance &agrave; tout moment, ce qui permet de r&eacute;duire significativement le co&ucirc;t total du cr&eacute;dit.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Taux d&apos;usure et protection</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le <strong>taux d&apos;usure</strong> est le taux maximum l&eacute;gal que les &eacute;tablissements de cr&eacute;dit peuvent pratiquer. Il est fix&eacute; trimestriellement par la Banque de France et varie selon le type et le montant du cr&eacute;dit. Aucun pr&ecirc;teur ne peut vous proposer un TAEG sup&eacute;rieur au taux d&apos;usure en vigueur, ce qui constitue une protection essentielle pour l&apos;emprunteur.
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
