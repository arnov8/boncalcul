import type { Metadata } from "next";
import SimulateurSmic from "./SimulateurSmic";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import InfographieSmic from "@/components/infographics/InfographieSmic";

export const metadata: Metadata = {
  title: "Simulateur SMIC 2026 — Calcul brut et net, temps partiel",
  description:
    "Calculez le SMIC 2026 brut et net selon vos heures de travail. Temps partiel ou temps plein, cadre ou non-cadre. SMIC horaire, mensuel et annuel. Gratuit et sans inscription.",
  keywords: [
    "SMIC 2026",
    "SMIC brut",
    "SMIC net",
    "SMIC horaire",
    "SMIC mensuel",
    "SMIC annuel",
    "SMIC temps partiel",
    "salaire minimum",
    "simulateur SMIC",
    "SMIC cadre non-cadre",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/simulateur-smic",
  },
  openGraph: {
    title: "Simulateur SMIC 2026 — Calcul brut et net | BonCalcul.fr",
    description:
      "Calculez le SMIC 2026 brut et net selon vos heures. Temps partiel, cadre ou non-cadre, horaire, mensuel et annuel.",
    url: "https://www.boncalcul.fr/outils/simulateur-smic",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=simulateur-smic`,
        width: 1200,
        height: 630,
        alt: "Simulateur Smic — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Quel est le montant du SMIC en 2026 ?",
    answer:
      "Le SMIC horaire brut 2026 est estime a 11,88 euros, soit un SMIC mensuel brut de 1 801,84 euros pour 35 heures par semaine (151,67 heures mensuelles). Le SMIC net avant impot est d&apos;environ 1 405,44 euros pour un non-cadre et 1 351,38 euros pour un cadre, apres deduction des cotisations salariales.",
  },
  {
    question: "Comment est calcule le SMIC mensuel a partir du SMIC horaire ?",
    answer:
      "Le SMIC mensuel se calcule en multipliant le SMIC horaire brut par le nombre d&apos;heures mensuelles. Pour un temps plein a 35h/semaine, on utilise 151,67 heures (35h x 52 semaines / 12 mois). Ainsi : 11,88 euros x 151,67 = 1 801,84 euros brut par mois.",
  },
  {
    question: "Quand le SMIC est-il revalorise ?",
    answer:
      "Le SMIC est revalorise chaque annee au 1er janvier, sur la base de l&apos;inflation et de l&apos;evolution des salaires ouvriers. Une revalorisation anticipee en cours d&apos;annee est possible si l&apos;indice des prix a la consommation augmente de plus de 2% par rapport a l&apos;indice de la derniere revalorisation. Le gouvernement peut egalement decider d&apos;un coup de pouce supplementaire.",
  },
  {
    question: "Comment calculer le SMIC pour un temps partiel ?",
    answer:
      "Le SMIC a temps partiel est proportionnel au nombre d&apos;heures travaillees. Par exemple, pour un 24h/semaine : le nombre d&apos;heures mensuelles est de (24/35) x 151,67 = 103,89h. Le SMIC mensuel brut sera alors de 11,88 x 103,89 = 1 234,21 euros. Utilisez notre simulateur en ajustant le curseur d&apos;heures pour obtenir le calcul exact.",
  },
  {
    question: "Quelle est la difference entre SMIC brut et SMIC net ?",
    answer:
      "Le SMIC brut est le montant avant deduction des cotisations sociales salariales (CSG-CRDS, retraite, complementaire sante, etc.). Le SMIC net est ce que vous recevez effectivement sur votre compte bancaire, avant prelevement a la source de l&apos;impot sur le revenu. Les cotisations representent environ 22% du brut pour un non-cadre et 25% pour un cadre.",
  },
];

export default function PageSimulateurSmic() {
  const appJsonLd = webApplicationJsonLd({
    name: "Simulateur SMIC 2026",
    description:
      "Outil gratuit pour calculer le SMIC 2026 brut et net. Temps partiel ou temps plein, cadre ou non-cadre.",
    url: "https://www.boncalcul.fr/outils/simulateur-smic",
  });

  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur <span className="text-blue-600">SMIC 2026</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculez instantanement le SMIC brut et net selon votre nombre
            d&apos;heures de travail. Temps plein ou temps partiel, cadre ou
            non-cadre, avec le detail horaire, mensuel et annuel.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <SimulateurSmic />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="simulateur-smic" />

        <InfographieSmic />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le SMIC 2026
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

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur le SMIC en 2026
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le SMIC en 2026 : montants et revalorisation</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>SMIC (Salaire Minimum Interprofessionnel de Croissance)</strong> est le salaire horaire minimum legal en France. En 2026, le SMIC horaire brut est estime a <strong>11,88&nbsp;&euro;</strong>, soit <strong>1&nbsp;801,84&nbsp;&euro; brut par mois</strong> pour un temps plein a 35 heures. Il est revalorise automatiquement chaque 1er janvier en fonction de l&apos;inflation et de l&apos;evolution des salaires. Environ 2 millions de salaries sont directement concernes par le SMIC en France.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">SMIC brut vs SMIC net : les cotisations</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La difference entre le <strong>SMIC brut</strong> et le <strong>SMIC net</strong> correspond aux cotisations sociales salariales obligatoires. Elles representent environ <strong>22% pour un non-cadre</strong> et <strong>25% pour un cadre</strong>. Ces cotisations financent la Securite sociale (CSG-CRDS ~9,7%), la retraite de base et complementaire (~11%), et la complementaire sante (~1,5%). Depuis octobre 2018, la cotisation chomage salariale a ete supprimee.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">SMIC et temps partiel</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le SMIC a <strong>temps partiel</strong> se calcule proportionnellement au nombre d&apos;heures travaillees par semaine. La base de calcul est de <strong>151,67 heures mensuelles pour 35h/semaine</strong> (35 x 52 / 12). Pour un mi-temps a 17,5h, le SMIC mensuel brut est divise par deux, soit environ 900,92&nbsp;&euro;. Les salaries a temps partiel beneficient des memes droits proportionnels en matiere de conges payes, anciennete et protection sociale.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Droits et protections au SMIC</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aucun employeur ne peut remunerer un salarie en dessous du SMIC, sous peine de sanctions penales. Le SMIC garantit un <strong>pouvoir d&apos;achat minimum</strong> et sert de reference pour de nombreux calculs : indemnites de licenciement, seuils d&apos;exoneration de charges, prime d&apos;activite, etc. En cas de non-respect, le salarie peut saisir le conseil de prud&apos;hommes pour obtenir un rappel de salaire avec effet retroactif.
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
