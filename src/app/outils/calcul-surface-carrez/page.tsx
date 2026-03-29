import type { Metadata } from "next";
import CalculSurfaceCarrez from "./CalculSurfaceCarrez";
import { AdBanner } from "@/lib/adsense";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul surface loi Carrez 2026 — Simulateur gratuit",
  description:
    "Calculez gratuitement la surface loi Carrez de votre logement. Ajoutez vos pi\u00e8ces, v\u00e9rifiez la hauteur sous plafond et obtenez la superficie Carrez exacte.",
  keywords: [
    "surface carrez",
    "calcul surface carrez",
    "loi carrez",
    "superficie carrez",
    "mesurage carrez",
    "hauteur sous plafond 1.80m",
    "surface privative",
    "diagnostic carrez",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-surface-carrez",
  },
  openGraph: {
    title: "Calcul surface loi Carrez 2026 — Simulateur gratuit | BonCalcul.fr",
    description:
      "Calculez gratuitement la surface loi Carrez de votre logement. R\u00e9sultat instantan\u00e9.",
    url: "https://boncalcul.fr/outils/calcul-surface-carrez",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Qu\u2019est-ce que la surface loi Carrez ?",
    answer:
      "La surface loi Carrez correspond \u00e0 la superficie privative d\u2019un lot de copropri\u00e9t\u00e9. Elle mesure la surface des planchers des locaux clos et couverts, apr\u00e8s d\u00e9duction des surfaces occup\u00e9es par les murs, cloisons, marches et cages d\u2019escalier, gaines, embrasures de portes et fen\u00eatres. Seules les parties dont la hauteur sous plafond est \u00e9gale ou sup\u00e9rieure \u00e0 1,80 m sont comptabilis\u00e9es.",
  },
  {
    question: "Quelle diff\u00e9rence entre surface Carrez et surface habitable ?",
    answer:
      "La surface Carrez s\u2019applique uniquement aux lots de copropri\u00e9t\u00e9 (appartements) tandis que la surface habitable concerne tous les logements, y compris les maisons individuelles. La surface habitable exclut en plus les combles non am\u00e9nag\u00e9s, les sous-sols, remises, garages, terrasses, loggias, balcons, s\u00e9choirs ext\u00e9rieurs et v\u00e9randas non chauff\u00e9es. La surface Carrez est g\u00e9n\u00e9ralement l\u00e9g\u00e8rement sup\u00e9rieure.",
  },
  {
    question: "La loi Carrez est-elle obligatoire pour vendre ?",
    answer:
      "Oui, le mesurage loi Carrez est obligatoire pour toute vente d\u2019un lot de copropri\u00e9t\u00e9 d\u2019une superficie sup\u00e9rieure \u00e0 8 m\u00b2. Le diagnostic doit \u00eatre r\u00e9alis\u00e9 par un professionnel certifi\u00e9 et mentionn\u00e9 dans l\u2019acte de vente. En cas d\u2019erreur sup\u00e9rieure \u00e0 5 %, l\u2019acheteur peut demander une r\u00e9duction proportionnelle du prix dans un d\u00e9lai d\u2019un an.",
  },
  {
    question: "Pourquoi la hauteur de 1,80 m est-elle importante ?",
    answer:
      "La loi Carrez fixe un seuil minimum de 1,80 m de hauteur sous plafond. Toute surface dont la hauteur est inf\u00e9rieure \u00e0 1,80 m est exclue du calcul. Cela concerne typiquement les parties sous les toits mansard\u00e9s, les recoins sous escalier ou les mezzanines basses. Cette r\u00e8gle prot\u00e8ge l\u2019acheteur en garantissant que seuls les espaces r\u00e9ellement utilisables sont comptabilis\u00e9s.",
  },
  {
    question: "Quelles pi\u00e8ces sont exclues du calcul Carrez ?",
    answer:
      "Sont exclus du calcul Carrez : les caves, garages, parkings, greniers non am\u00e9nag\u00e9s et toutes les parties communes de la copropri\u00e9t\u00e9. Les balcons, terrasses et loggias sont \u00e9galement exclus car ce sont des espaces ouverts. En revanche, les v\u00e9randas chauff\u00e9es et closes sont incluses si leur hauteur sous plafond est suffisante.",
  },
];

export default function PageSurfaceCarrez() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul surface loi Carrez 2026",
          description:
            "Calculez gratuitement la surface loi Carrez de votre logement en ajoutant vos pi\u00e8ces une par une.",
          url: "https://boncalcul.fr/outils/calcul-surface-carrez",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-t\u00eate ---------- */}
        <header className="text-center mb-10 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calcul de la surface loi Carrez
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ajoutez vos pi&egrave;ces une par une, renseignez leurs dimensions et
            la hauteur sous plafond pour obtenir la surface Carrez exacte de
            votre logement.
          </p>
        </header>

        {/* ---------- Pub ---------- */}
        <div className="mb-8">
          <AdBanner slot="carrez-top" format="horizontal" />
        </div>

        {/* ---------- Calculateur ---------- */}
        <CalculSurfaceCarrez />

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="carrez-mid" format="horizontal" />
        </div>

        {/* ---------- FAQ ---------- */}
        <section className="bg-gray-50 rounded-2xl py-10 px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur la surface Carrez
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
            Tout savoir sur la loi Carrez
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que la loi Carrez&nbsp;?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                La <strong>loi Carrez</strong> (loi n&deg;&nbsp;96-1107 du 18&nbsp;d&eacute;cembre 1996) impose de mentionner la <strong>superficie privative</strong> dans tout acte de vente d&apos;un lot de copropri&eacute;t&eacute;. Cette mesure prot&egrave;ge l&apos;acheteur en lui garantissant une information pr&eacute;cise sur la surface r&eacute;elle du bien qu&apos;il acquiert.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Le seuil de 1,80&nbsp;m</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seules les surfaces dont la <strong>hauteur sous plafond est &eacute;gale ou sup&eacute;rieure &agrave; 1,80&nbsp;m</strong> sont prises en compte. Les zones sous rampants, combles bas ou sous-pentes sont donc exclues si elles ne respectent pas ce seuil. Cette r&egrave;gle &eacute;vite de comptabiliser des espaces non fonctionnels.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Qui peut mesurer&nbsp;?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le propri&eacute;taire peut r&eacute;aliser le mesurage lui-m&ecirc;me, mais en cas d&apos;erreur de plus de 5&nbsp;%, l&apos;acheteur peut exiger une <strong>r&eacute;duction du prix proportionnelle</strong>. Il est donc fortement recommand&eacute; de faire appel &agrave; un <strong>diagnostiqueur certifi&eacute;</strong> pour &eacute;viter tout litige.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Dur&eacute;e de validit&eacute;</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le diagnostic Carrez a une <strong>dur&eacute;e de validit&eacute; illimit&eacute;e</strong>, sauf si des travaux modifient la surface du lot (abattement de cloisons, am&eacute;nagement de combles, etc.). Dans ce cas, un nouveau mesurage doit &ecirc;tre effectu&eacute; avant la vente.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="carrez-bottom" format="horizontal" />
        </div>
      </div>
    </>
  );
}
