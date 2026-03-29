import type { Metadata } from "next";
import CalculDateAccouchement from "./CalculDateAccouchement";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul date d'accouchement — Date prevue gratuit",
  description:
    "Calculez votre date prevue d'accouchement (DPA) gratuitement. Entrez la date de vos dernieres regles ou la date de conception pour connaitre votre terme, votre semaine de grossesse et votre trimestre.",
  keywords: [
    "calcul date accouchement",
    "date prevue accouchement",
    "DPA",
    "calculateur grossesse",
    "semaine amenorrhee",
    "date terme grossesse",
    "regle de Naegele",
    "calendrier grossesse",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-date-accouchement",
  },
  openGraph: {
    title:
      "Calcul date d'accouchement — Date prevue gratuit | BonCalcul.fr",
    description:
      "Calculez votre date prevue d'accouchement instantanement. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-date-accouchement",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer sa date d'accouchement ?",
    answer:
      "La methode la plus courante est la regle de Naegele : on ajoute 280 jours (40 semaines) a la date du premier jour de vos dernieres regles (DDR). Si vous connaissez votre date de conception, ajoutez 266 jours (38 semaines). Ces deux methodes donnent la meme date prevue d'accouchement (DPA), car on considere que l'ovulation a lieu environ 14 jours apres le debut des regles.",
  },
  {
    question: "Quelle est la difference entre semaines d'amenorrhee et semaines de grossesse ?",
    answer:
      "Les semaines d'amenorrhee (SA) se comptent a partir du premier jour des dernieres regles, tandis que les semaines de grossesse (SG) se comptent a partir de la date de conception. Il y a donc environ 2 semaines de difference : 40 SA correspondent a 38 SG. En France, les professionnels de sante utilisent principalement les semaines d'amenorrhee.",
  },
  {
    question: "La date prevue d'accouchement est-elle fiable ?",
    answer:
      "La DPA est une estimation. Seulement 4 a 5 % des bebes naissent exactement a la date prevue. La plupart des naissances ont lieu entre 37 et 42 semaines d'amenorrhee. L'echographie du premier trimestre (entre 11 et 14 SA) permet d'affiner la date de terme avec une precision de plus ou moins 3 a 5 jours.",
  },
  {
    question: "Qu'est-ce que la regle de Naegele ?",
    answer:
      "La regle de Naegele est la formule medicale de reference pour calculer la date prevue d'accouchement. Elle consiste a ajouter 280 jours (soit 40 semaines ou 9 mois et 7 jours) a la date du premier jour des dernieres regles. Cette methode suppose un cycle menstruel regulier de 28 jours. Elle a ete etablie au XIXe siecle par le gynecologue allemand Franz Karl Naegele.",
  },
  {
    question: "A partir de quand le bebe est-il considere a terme ?",
    answer:
      "Un bebe est considere a terme a partir de 37 semaines d'amenorrhee (SA). Entre 37 et 41 SA, on parle de grossesse a terme. Au-dela de 41 SA, on parle de depassement de terme et une surveillance renforcee est mise en place. Au-dela de 42 SA, un declenchement de l'accouchement est generalement propose.",
  },
];

export default function PageCalculDateAccouchement() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul date d'accouchement — Date prevue gratuit",
          description:
            "Calculez votre date prevue d'accouchement (DPA) gratuitement a partir de la date de vos dernieres regles ou de la date de conception.",
          url: "https://boncalcul.fr/outils/calcul-date-accouchement",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de la date d&apos;accouchement{" "}
            <span className="text-blue-600">gratuit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez votre date prevue d&apos;accouchement (DPA), votre semaine
            de grossesse et votre trimestre en quelques secondes.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculDateAccouchement />
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="accouchement-top" format="horizontal" className="my-8" />
      </div>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la date d&apos;accouchement
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
        <AdBanner slot="accouchement-mid" format="horizontal" className="my-8" />
      </div>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur le calcul de la date d&apos;accouchement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment est calculee la date prevue d&apos;accouchement ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>date prevue d&apos;accouchement</strong> (DPA) est calculee selon la <strong>regle de Naegele</strong> : on ajoute <strong>280 jours (40 semaines)</strong> a la date du premier jour des dernieres regles (DDR), en supposant un cycle de 28 jours. Si vous connaissez votre <strong>date de conception</strong>, ajoutez <strong>266 jours (38 semaines)</strong>. Les deux methodes aboutissent au meme resultat, les 14 jours de difference correspondant au delai regles-ovulation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les trois trimestres de la grossesse</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Premier trimestre (1 a 14 SA)</strong> : formation des organes (organogenese), echographie de datation entre 11 et 14 SA avec depistage de la trisomie 21. <strong>Deuxieme trimestre (15 a 28 SA)</strong> : croissance rapide, mouvements perceptibles, echographie morphologique vers 22 SA. <strong>Troisieme trimestre (29 a 41 SA)</strong> : prise de poids et preparation a la naissance, echographie de croissance vers 32 SA. A partir de 37 SA, le bebe est considere a terme.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Amenorrhee ou date de conception : quelle difference ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>semaines d&apos;amenorrhee</strong> (SA) se comptent depuis le premier jour des dernieres regles (methode utilisee par les medecins en France). Les <strong>semaines de grossesse</strong> (SG) se comptent depuis la conception, environ 14 jours apres. La correspondance est simple : <strong>SA = SG + 2 semaines</strong>. Ainsi, 40 SA equivaut a 38 semaines de grossesse effective. Notre calculateur affiche les deux valeurs.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Quelle est la fiabilite du calcul ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La DPA est une <strong>estimation statistique</strong> : seulement 4 a 5 % des bebes naissent exactement a la date prevue. La majorite des accouchements surviennent dans une fenetre de <strong>plus ou moins 2 semaines</strong> (38 a 42 SA). La precision depend de la regularite de vos cycles, de la certitude de la date de conception et des caracteristiques individuelles de chaque grossesse.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">Le role essentiel de l&apos;echographie</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;echographie du <strong>premier trimestre</strong> (11 a 14 SA) est le moyen le plus fiable pour dater une grossesse. En mesurant la longueur cranio-caudale (LCC), le medecin determine l&apos;age gestationnel avec une precision de <strong>plus ou moins 3 a 5 jours</strong>. Si l&apos;ecart avec la date calculee depasse 5 jours, c&apos;est la date echographique qui fait reference. Notre calculateur reste un outil d&apos;estimation ; seul votre medecin ou sage-femme peut confirmer votre date de terme.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="accouchement-bottom" format="horizontal" />
      </div>
    </>
  );
}
