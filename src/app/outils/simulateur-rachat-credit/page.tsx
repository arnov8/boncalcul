import type { Metadata } from "next";
import SimulateurRachatCredit from "./SimulateurRachatCredit";
import { AdBanner } from "@/lib/adsense";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Simulateur rachat de cr\u00e9dit 2026 — Calculez vos \u00e9conomies",
  description:
    "Simulez gratuitement votre rachat de cr\u00e9dit : nouvelle mensualit\u00e9, \u00e9conomie totale, comparaison ancien vs nouveau cr\u00e9dit. Frais IRA inclus.",
  keywords: [
    "rachat de cr\u00e9dit",
    "simulateur rachat cr\u00e9dit",
    "ren\u00e9gociation pr\u00eat",
    "regroupement de cr\u00e9dits",
    "rachat pr\u00eat immobilier",
    "indemnit\u00e9 remboursement anticip\u00e9",
    "IRA cr\u00e9dit",
    "r\u00e9duire mensualit\u00e9",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/simulateur-rachat-credit",
  },
  openGraph: {
    title: "Simulateur rachat de cr\u00e9dit 2026 — Calculez vos \u00e9conomies | BonCalcul.fr",
    description:
      "Simulez votre rachat de cr\u00e9dit et d\u00e9couvrez vos \u00e9conomies potentielles. Comparaison d\u00e9taill\u00e9e.",
    url: "https://boncalcul.fr/outils/simulateur-rachat-credit",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Qu\u2019est-ce qu\u2019un rachat de cr\u00e9dit ?",
    answer:
      "Le rachat de cr\u00e9dit (ou regroupement de cr\u00e9dits) consiste \u00e0 faire racheter un ou plusieurs cr\u00e9dits en cours par un nouvel \u00e9tablissement bancaire. Le but est d\u2019obtenir un taux plus avantageux, de r\u00e9duire la mensualit\u00e9, ou d\u2019allonger la dur\u00e9e. Le nouveau pr\u00eatablissement rembourse les anciens cr\u00e9dits et vous propose un seul pr\u00eat avec de nouvelles conditions.",
  },
  {
    question: "Quand est-il int\u00e9ressant de racheter son cr\u00e9dit ?",
    answer:
      "Un rachat de cr\u00e9dit est g\u00e9n\u00e9ralement int\u00e9ressant quand trois conditions sont r\u00e9unies : l\u2019\u00e9cart entre votre taux actuel et le nouveau taux est d\u2019au moins 0,7 \u00e0 1 point, vous \u00eates dans le premier tiers de la dur\u00e9e de remboursement (p\u00e9riode o\u00f9 vous payez le plus d\u2019int\u00e9r\u00eats), et le capital restant d\u00fb est suffisamment \u00e9lev\u00e9 (g\u00e9n\u00e9ralement plus de 70 000 euros) pour que les \u00e9conomies compensent les frais.",
  },
  {
    question: "Quels sont les frais li\u00e9s au rachat de cr\u00e9dit ?",
    answer:
      "Les frais principaux sont : les indemnit\u00e9s de remboursement anticip\u00e9 (IRA) plafonn\u00e9es \u00e0 3 % du capital restant d\u00fb ou 6 mois d\u2019int\u00e9r\u00eats (le plus faible des deux), les frais de dossier de la nouvelle banque (0,5 \u00e0 1 % du montant), les frais de garantie (hypoth\u00e8que ou caution), et \u00e9ventuellement les frais de courtage. Au total, ces frais repr\u00e9sentent g\u00e9n\u00e9ralement 3 \u00e0 5 % du capital rachet\u00e9.",
  },
  {
    question: "Peut-on racheter un cr\u00e9dit consommation et un pr\u00eat immobilier ensemble ?",
    answer:
      "Oui, c\u2019est le principe du regroupement de cr\u00e9dits. Vous pouvez regrouper pr\u00eat immobilier, cr\u00e9dits conso, cr\u00e9dit auto, et m\u00eame des d\u00e9couverts bancaires en un seul pr\u00eat. Si la part immobili\u00e8re repr\u00e9sente plus de 60 % du montant total, le rachat sera soumis aux r\u00e8gles du cr\u00e9dit immobilier (taux et dur\u00e9es plus avantageux). Sinon, les r\u00e8gles du cr\u00e9dit \u00e0 la consommation s\u2019appliquent.",
  },
  {
    question: "Le rachat de cr\u00e9dit est-il possible si on est fich\u00e9 FICP ?",
    answer:
      "\u00catre fich\u00e9 au FICP (Fichier des Incidents de remboursement des Cr\u00e9dits aux Particuliers) rend le rachat de cr\u00e9dit tr\u00e8s difficile mais pas impossible. Certains organismes sp\u00e9cialis\u00e9s acceptent ce type de dossier, mais \u00e0 des conditions moins favorables (taux plus \u00e9lev\u00e9, garanties suppl\u00e9mentaires exig\u00e9es). Il est recommand\u00e9 de r\u00e9gulariser votre situation avant d\u2019entamer les d\u00e9marches.",
  },
];

export default function PageRachatCredit() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur rachat de cr\u00e9dit 2026",
          description:
            "Simulez votre rachat de cr\u00e9dit et d\u00e9couvrez l\u2019\u00e9conomie r\u00e9alisable en comparant ancien et nouveau cr\u00e9dit.",
          url: "https://boncalcul.fr/outils/simulateur-rachat-credit",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-t\u00eate ---------- */}
        <header className="text-center mb-10 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Simulateur de rachat de cr&eacute;dit
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comparez votre cr&eacute;dit actuel avec un rachat&nbsp;: nouvelle
            mensualit&eacute;, &eacute;conomie totale et frais de rachat. D&eacute;couvrez si
            le rachat est int&eacute;ressant pour vous.
          </p>
        </header>

        {/* ---------- Pub ---------- */}
        <div className="mb-8">
          <AdBanner slot="rachat-top" format="horizontal" />
        </div>

        {/* ---------- Calculateur ---------- */}
        <SimulateurRachatCredit />

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="rachat-mid" format="horizontal" />
        </div>

        {/* ---------- FAQ ---------- */}
        <section className="bg-gray-50 rounded-2xl py-10 px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur le rachat de cr&eacute;dit
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
            Tout savoir sur le rachat de cr&eacute;dit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Rachat vs ren&eacute;gociation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                La <strong>ren&eacute;gociation</strong> se fait aupr&egrave;s de votre banque actuelle&nbsp;: vous n&eacute;gociez un nouveau taux sans changer d&apos;&eacute;tablissement. Le <strong>rachat</strong> implique de faire reprendre votre cr&eacute;dit par une autre banque. Le rachat permet souvent d&apos;obtenir de meilleures conditions car la mise en concurrence fait baisser les taux, mais il entra&icirc;ne des frais suppl&eacute;mentaires (IRA, dossier, garantie).
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Les IRA (indemnit&eacute;s de remboursement anticip&eacute;)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lors d&apos;un rachat de cr&eacute;dit, votre ancienne banque peut exiger des <strong>indemnit&eacute;s de remboursement anticip&eacute;</strong>. Elles sont l&eacute;galement plafonn&eacute;es au plus faible de ces deux montants&nbsp;: <strong>3&nbsp;% du capital restant d&ucirc;</strong> ou <strong>6 mois d&apos;int&eacute;r&ecirc;ts</strong>. Certaines banques y renoncent &agrave; la n&eacute;gociation. V&eacute;rifiez les clauses de votre contrat.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Le bon moment pour racheter</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le rachat est plus int&eacute;ressant pendant les <strong>premi&egrave;res ann&eacute;es du pr&ecirc;t</strong>, quand les mensualit&eacute;s sont compos&eacute;es majoritairement d&apos;int&eacute;r&ecirc;ts. En fin de pr&ecirc;t, vous remboursez surtout du capital et le gain potentiel est faible. R&egrave;gle g&eacute;n&eacute;rale&nbsp;: &eacute;cart de taux &ge;&nbsp;0,7 point et au moins 70&nbsp;000&nbsp;&euro; de capital restant.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">D&eacute;marches et d&eacute;lais</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Un rachat de cr&eacute;dit prend en moyenne <strong>4 &agrave; 8 semaines</strong>&nbsp;: demande d&apos;offre, &eacute;tude du dossier, accord de principe, &eacute;dition de l&apos;offre de pr&ecirc;t, d&eacute;lai l&eacute;gal de r&eacute;flexion (10 jours pour un pr&ecirc;t immobilier), puis d&eacute;blocage des fonds. Pensez &agrave; comparer plusieurs offres et &agrave; passer par un <strong>courtier</strong> pour gagner en efficacit&eacute;.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="rachat-bottom" format="horizontal" />
        </div>
      </div>
    </>
  );
}
