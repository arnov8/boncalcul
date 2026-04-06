import type { Metadata } from "next";
import CalculOvulation from "./CalculOvulation";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";
import InfographieOvulation from "@/components/infographics/InfographieOvulation";

export const metadata: Metadata = {
  title: "Calcul ovulation — Calculez votre periode fertile",
  description:
    "Calculez votre date d'ovulation et votre periode fertile gratuitement. Identifiez les jours les plus propices a la conception grace a notre calculateur d'ovulation en ligne.",
  keywords: [
    "calcul ovulation",
    "calculateur ovulation",
    "periode fertile",
    "date ovulation",
    "fenetre de fertilite",
    "cycle menstruel",
    "jours fertiles",
    "conception",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-ovulation",
  },
  openGraph: {
    title: "Calcul ovulation — Calculez votre periode fertile | BonCalcul.fr",
    description:
      "Calculez votre date d'ovulation et identifiez votre fenetre de fertilite. Gratuit, sans inscription.",
    url: "https://www.boncalcul.fr/outils/calcul-ovulation",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=calcul-ovulation`,
        width: 1200,
        height: 630,
        alt: "Calcul Ovulation — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Comment calculer sa date d'ovulation ?",
    answer:
      "L'ovulation survient generalement 14 jours avant le debut des prochaines regles. Pour un cycle de 28 jours, l'ovulation a lieu autour du jour 14. Pour un cycle de 30 jours, elle survient vers le jour 16. Notre calculateur utilise cette methode en soustrayant 14 jours (duree de la phase luteale) a la duree totale de votre cycle.",
  },
  {
    question: "Combien de jours dure la periode fertile ?",
    answer:
      "La periode fertile s'etend sur environ 6 jours : les 5 jours precedant l'ovulation et le jour de l'ovulation lui-meme. Les spermatozoides peuvent survivre jusqu'a 5 jours dans les voies genitales feminines, tandis que l'ovule n'est viable que 12 a 24 heures apres sa liberation. Les rapports les plus fecondants ont lieu dans les 2 jours precedant l'ovulation.",
  },
  {
    question: "Le calcul d'ovulation est-il fiable pour eviter une grossesse ?",
    answer:
      "Non, le calcul d'ovulation base sur le calendrier n'est pas une methode de contraception fiable. La duree du cycle peut varier d'un mois a l'autre, meme chez les femmes ayant des cycles reguliers. De nombreux facteurs (stress, maladie, voyages, changement d'habitudes) peuvent decaler l'ovulation. Pour une contraception efficace, consultez un professionnel de sante.",
  },
  {
    question: "Quels sont les signes physiques de l'ovulation ?",
    answer:
      "Plusieurs signes peuvent indiquer l'ovulation : une augmentation de la glaire cervicale (qui devient transparente et filante, semblable a du blanc d'oeuf), une legere douleur au bas-ventre du cote de l'ovaire qui ovule, une hausse de la temperature basale de 0,2 a 0,5 °C apres l'ovulation, et parfois une sensibilite des seins ou une augmentation de la libido.",
  },
  {
    question: "Quand consulter un medecin en cas de difficulte a concevoir ?",
    answer:
      "Il est recommande de consulter un medecin apres 12 mois de rapports reguliers non proteges sans grossesse (6 mois si vous avez plus de 35 ans). Consultez plus tot si vous presentez des cycles tres irreguliers (moins de 21 jours ou plus de 35 jours), une absence de regles, des douleurs pelviennes importantes ou des antecedents de problemes gynecologiques.",
  },
];

export default function PageCalculOvulation() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul ovulation — Calculez votre periode fertile",
          description:
            "Calculez votre date d'ovulation et votre periode fertile gratuitement. Identifiez les jours les plus propices a la conception.",
          url: "https://www.boncalcul.fr/outils/calcul-ovulation",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul d&apos;ovulation{" "}
            <span className="text-blue-600">gratuit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez votre date d&apos;ovulation et votre periode fertile pour
            mieux comprendre votre cycle menstruel.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculOvulation />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="calcul-ovulation" />

        <InfographieOvulation />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;ovulation
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
          Tout savoir sur l&apos;ovulation et la fertilite
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que l&apos;ovulation ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>ovulation</strong> est la liberation d&apos;un ovule mature par l&apos;ovaire dans la trompe de Fallope, une fois par <strong>cycle menstruel</strong>. L&apos;ovule reste viable 12 a 24 heures. Ce processus est declenche par un pic de l&apos;hormone luteinisante (<strong>LH</strong>), produit par l&apos;hypophyse 24 a 36 heures avant la liberation de l&apos;ovule. C&apos;est ce mecanisme que detectent les tests d&apos;ovulation en pharmacie.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comprendre le cycle menstruel</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le cycle comporte deux phases principales. La <strong>phase folliculaire</strong> debute au premier jour des regles et dure jusqu&apos;a l&apos;ovulation (duree variable). La <strong>phase luteale</strong> suit l&apos;ovulation et dure generalement 14 jours (12 a 16). C&apos;est cette constance qui permet d&apos;estimer la date d&apos;ovulation : cycle de 28 jours = ovulation vers J14 ; cycle de 32 jours = ovulation vers J18.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Identifier sa fenetre fertile</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>fenetre de fertilite</strong> dure environ 6 jours : 5 jours avant l&apos;ovulation + le jour meme (les spermatozoides survivent jusqu&apos;a 5 jours). Pour l&apos;identifier, combinez le <strong>calcul calendaire</strong> (notre methode), la <strong>courbe de temperature</strong> (+0,2 a 0,5 °C apres ovulation), l&apos;<strong>observation de la glaire cervicale</strong> (transparente et filante a l&apos;approche) et les <strong>tests d&apos;ovulation</strong> urinaires (detectent le pic de LH).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les signes de l&apos;ovulation</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Certaines femmes ressentent des <strong>signes physiques</strong> : <strong>douleur ovarienne</strong> (Mittelschmerz) d&apos;un cote du bas-ventre, <strong>spotting</strong> (legeres pertes rosees dues a la chute des estrogenes), <strong>sensibilite mammaire</strong> liee aux fluctuations hormonales, <strong>augmentation de la libido</strong> sous l&apos;effet des estrogenes, et modification du col de l&apos;uterus qui devient plus haut, mou et ouvert.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">Quand consulter un medecin ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Consultez si vous essayez de concevoir depuis <strong>plus de 12 mois</strong> sans succes (6 mois apres 35 ans), si vos cycles sont tres <strong>irreguliers</strong> (&lt; 21 jours ou &gt; 35 jours), en cas d&apos;<strong>amenorrhee</strong>, de <strong>douleurs pelviennes intenses</strong>, ou d&apos;<strong>antecedents</strong> gynecologiques (endometriose, SOPK, fibromes, fausses couches). Un gynecologue pourra realiser un bilan de fertilite complet et vous orienter vers un centre de <strong>PMA</strong> si necessaire.
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
