import type { Metadata } from "next";
import CalculOvulation from "./CalculOvulation";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

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
    canonical: "https://boncalcul.fr/outils/calcul-ovulation",
  },
  openGraph: {
    title: "Calcul ovulation — Calculez votre periode fertile | BonCalcul.fr",
    description:
      "Calculez votre date d'ovulation et identifiez votre fenetre de fertilite. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-ovulation",
    type: "website",
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
          url: "https://boncalcul.fr/outils/calcul-ovulation",
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
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="ovulation-top" format="horizontal" className="my-8" />
      </div>

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

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="ovulation-mid" format="horizontal" className="my-8" />
      </div>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu&apos;est-ce que l&apos;ovulation ?</h2>
          <p>
            L&apos;<strong>ovulation</strong> est le processus par lequel un
            ovaire libere un ovule mature dans la trompe de Fallope, ou il
            pourra etre feconde par un spermatozoide. Ce phenomene se produit
            une fois par cycle menstruel et constitue le moment le plus fertile
            du cycle. L&apos;ovule libere reste viable pendant 12 a 24 heures,
            ce qui fait de l&apos;ovulation un evenement bref mais essentiel
            pour la conception.
          </p>
          <p>
            L&apos;ovulation est declenchee par un pic de l&apos;hormone
            luteinisante (LH), produite par l&apos;hypophyse. Ce pic hormonal
            survient environ 24 a 36 heures avant la liberation de
            l&apos;ovule. C&apos;est ce mecanisme que detectent les tests
            d&apos;ovulation disponibles en pharmacie.
          </p>

          <h2>Comprendre le cycle menstruel</h2>
          <p>
            Le <strong>cycle menstruel</strong> se divise en plusieurs phases
            distinctes. La <strong>phase folliculaire</strong> debute le premier
            jour des regles et dure jusqu&apos;a l&apos;ovulation. Pendant
            cette periode, les follicules ovariens se developpent sous
            l&apos;effet des hormones FSH et estrogenes. La duree de cette
            phase est variable d&apos;une femme a l&apos;autre, ce qui explique
            les differences de longueur de cycle.
          </p>
          <p>
            Apres l&apos;ovulation commence la{" "}
            <strong>phase luteale</strong>, qui dure generalement 14 jours
            (entre 12 et 16 jours). Le follicule vide se transforme en corps
            jaune et produit de la progesterone, qui prepare l&apos;uterus a
            une eventuelle grossesse. Si l&apos;ovule n&apos;est pas feconde,
            le corps jaune degenere, les taux hormonaux chutent et les regles
            surviennent, marquant le debut d&apos;un nouveau cycle.
          </p>
          <p>
            C&apos;est la relative constance de la phase luteale (environ 14
            jours) qui permet d&apos;estimer la date d&apos;ovulation en
            soustrayant 14 jours a la duree totale du cycle. Ainsi, pour un
            cycle de 28 jours, l&apos;ovulation a lieu vers le jour 14 ; pour
            un cycle de 32 jours, vers le jour 18.
          </p>

          <h2>Comment identifier sa fenetre fertile ?</h2>
          <p>
            La <strong>fenetre de fertilite</strong> correspond a la periode du
            cycle ou un rapport sexuel peut mener a une grossesse. Elle
            s&apos;etend sur environ 6 jours : les 5 jours precedant
            l&apos;ovulation et le jour de l&apos;ovulation lui-meme. Cette
            duree s&apos;explique par la capacite des spermatozoides a survivre
            jusqu&apos;a 5 jours dans les voies genitales feminines, combinee a
            la duree de vie de l&apos;ovule (12 a 24 heures).
          </p>
          <p>
            Pour identifier cette fenetre, plusieurs methodes peuvent etre
            combinees :
          </p>
          <ul>
            <li>
              <strong>Le calcul calendaire</strong> : basee sur la duree
              habituelle de votre cycle, cette methode est celle utilisee par
              notre calculateur. Elle fonctionne mieux pour les femmes ayant des
              cycles reguliers.
            </li>
            <li>
              <strong>La courbe de temperature</strong> : la temperature basale
              augmente de 0,2 a 0,5 °C apres l&apos;ovulation sous l&apos;effet
              de la progesterone. En prenant votre temperature chaque matin
              avant de vous lever, vous pouvez reperer cette hausse. Cette
              methode confirme l&apos;ovulation a posteriori.
            </li>
            <li>
              <strong>L&apos;observation de la glaire cervicale</strong> : a
              l&apos;approche de l&apos;ovulation, la glaire devient abondante,
              transparente et filante (aspect &laquo; blanc d&apos;oeuf
              &raquo;). Ce changement facilite le passage des spermatozoides
              vers l&apos;uterus.
            </li>
            <li>
              <strong>Les tests d&apos;ovulation</strong> : ces tests urinaires
              detectent le pic de LH qui precede l&apos;ovulation de 24 a 36
              heures, offrant une indication precise du moment le plus fertile.
            </li>
          </ul>

          <h2>Les signes de l&apos;ovulation</h2>
          <p>
            Outre la glaire cervicale et la temperature, certaines femmes
            ressentent des <strong>signes physiques</strong> au moment de
            l&apos;ovulation :
          </p>
          <ul>
            <li>
              <strong>Douleur ovarienne</strong> (Mittelschmerz) : une douleur
              legere a moderee d&apos;un cote du bas-ventre, correspondant au
              cote de l&apos;ovaire qui ovule. Cette douleur peut durer
              quelques minutes a quelques heures.
            </li>
            <li>
              <strong>Spotting</strong> : de legeres pertes rosees ou brunes
              peuvent survenir au moment de l&apos;ovulation chez certaines
              femmes, dues a la chute breve des estrogenes.
            </li>
            <li>
              <strong>Sensibilite mammaire</strong> : les seins peuvent etre
              plus sensibles ou legerement douloureux autour de
              l&apos;ovulation, en raison des fluctuations hormonales.
            </li>
            <li>
              <strong>Augmentation de la libido</strong> : de nombreuses femmes
              rapportent une augmentation du desir sexuel dans les jours
              precedant l&apos;ovulation, un mecanisme lie a la hausse des
              estrogenes.
            </li>
            <li>
              <strong>Modification du col de l&apos;uterus</strong> : a
              l&apos;approche de l&apos;ovulation, le col devient plus haut,
              plus mou et plus ouvert pour faciliter le passage des
              spermatozoides.
            </li>
          </ul>

          <h2>Quand consulter un medecin ?</h2>
          <p>
            Si vous utilisez le calcul d&apos;ovulation dans le cadre d&apos;un
            projet de conception, certaines situations meritent une consultation
            medicale :
          </p>
          <ul>
            <li>
              Vous essayez de concevoir depuis <strong>plus de 12 mois</strong>{" "}
              sans succes (ou 6 mois si vous avez plus de 35 ans).
            </li>
            <li>
              Vos cycles sont tres <strong>irreguliers</strong> (duree variant
              de plus de 7 jours d&apos;un cycle a l&apos;autre) ou tres courts
              (moins de 21 jours) ou tres longs (plus de 35 jours).
            </li>
            <li>
              Vous n&apos;avez <strong>pas de regles</strong> (amenorrhee) en
              dehors d&apos;une grossesse.
            </li>
            <li>
              Vous ressentez des <strong>douleurs pelviennes intenses</strong>{" "}
              pendant vos regles ou en dehors de celles-ci.
            </li>
            <li>
              Vous avez des <strong>antecedents</strong> de problemes
              gynecologiques (endometriose, syndrome des ovaires polykystiques,
              fibromes) ou des antecedents de fausse couche a repetition.
            </li>
          </ul>
          <p>
            Un gynecologue pourra realiser un bilan de fertilite complet
            (dosages hormonaux, echographie pelvienne, hysterosalpingographie)
            et vous orienter vers un accompagnement adapte, y compris vers un
            centre de procreation medicalement assistee (PMA) si necessaire.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="ovulation-bottom" format="horizontal" />
      </div>
    </>
  );
}
