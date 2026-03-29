import type { Metadata } from "next";
import CalculIMG from "./CalculIMG";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul IMG — Indice de masse grasse en ligne",
  description:
    "Calculez votre Indice de Masse Grasse (IMG) gratuitement avec la formule de Deurenberg. Estimez votre pourcentage de graisse corporelle selon votre sexe, age, taille et poids.",
  keywords: [
    "calcul IMG",
    "indice de masse grasse",
    "pourcentage masse grasse",
    "body fat percentage",
    "formule Deurenberg",
    "composition corporelle",
    "taux de graisse",
    "IMG calcul en ligne",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-img",
  },
  openGraph: {
    title: "Calcul IMG — Indice de masse grasse en ligne | BonCalcul.fr",
    description:
      "Estimez votre pourcentage de graisse corporelle instantanement avec la formule de Deurenberg. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-img",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Qu'est-ce que l'IMG (Indice de Masse Grasse) ?",
    answer:
      "L'IMG, ou Indice de Masse Grasse, est un indicateur qui estime le pourcentage de graisse corporelle d'une personne. Contrairement a l'IMC qui evalue simplement le rapport poids/taille, l'IMG prend en compte le sexe et l'age pour fournir une estimation plus precise de la composition corporelle. Il s'exprime en pourcentage du poids total.",
  },
  {
    question: "Comment est calculee l'IMG avec la formule de Deurenberg ?",
    answer:
      "La formule de Deurenberg est : IMG = (1,20 x IMC) + (0,23 x age) - (10,8 x sexe) - 5,4, ou sexe vaut 1 pour les hommes et 0 pour les femmes, et l'IMC = poids (kg) / taille (m)². Cette formule a ete validee scientifiquement et donne une bonne estimation du taux de graisse corporelle pour la majorite des adultes.",
  },
  {
    question: "Quel est le pourcentage de graisse corporelle ideal ?",
    answer:
      "Le pourcentage de graisse ideal varie selon le sexe. Pour les hommes : 14 a 18 % est considere comme normal, 6 a 14 % comme athletique. Pour les femmes : 21 a 25 % est normal, 14 a 21 % est athletique. Les femmes ont naturellement un taux de graisse plus eleve en raison de besoins physiologiques lies a la reproduction.",
  },
  {
    question: "Quelle est la difference entre l'IMG et l'IMC ?",
    answer:
      "L'IMC (Indice de Masse Corporelle) est un ratio simple poids/taille qui ne distingue pas la graisse du muscle. L'IMG estime specifiquement le pourcentage de graisse corporelle en tenant compte du sexe et de l'age. Un sportif muscle peut avoir un IMC eleve mais un IMG normal, car ses kilos supplementaires sont du muscle, pas de la graisse.",
  },
  {
    question:
      "La formule de Deurenberg est-elle fiable pour tout le monde ?",
    answer:
      "La formule de Deurenberg donne une bonne estimation pour la majorite des adultes, mais elle a des limites. Elle est moins precise pour les sportifs de haut niveau, les personnes tres agees, les enfants et les personnes ayant une morphologie atypique. Pour une mesure plus exacte, des methodes comme l'impedancemetrie bioelectrique (balance impedancemetre), les plis cutanes ou le DEXA scan sont recommandees.",
  },
];

export default function PageCalculIMG() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul IMG — Indice de masse grasse en ligne",
          description:
            "Calculez votre Indice de Masse Grasse (IMG) gratuitement avec la formule de Deurenberg. Estimez votre pourcentage de graisse corporelle.",
          url: "https://boncalcul.fr/outils/calcul-img",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de l&apos;IMG{" "}
            <span className="text-blue-600">gratuit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez votre pourcentage de masse grasse en quelques secondes
            avec la formule de Deurenberg.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculIMG />
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="img-top" format="horizontal" className="my-8" />
      </div>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;IMG
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
        <AdBanner slot="img-mid" format="horizontal" className="my-8" />
      </div>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Comprendre l&apos;Indice de Masse Grasse
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que l&apos;IMG ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>Indice de Masse Grasse</strong> (<strong>IMG</strong>, <em>Body Fat Percentage</em>) estime la proportion de graisse dans le corps. Contrairement a l&apos;<strong>IMC</strong> (ratio poids/taille), l&apos;IMG integre le <strong>sexe</strong> et l&apos;<strong>age</strong> pour une estimation plus fine. La graisse corporelle est essentielle (isolation, protection, energie, hormones), mais un exces augmente les risques de maladies cardiovasculaires, diabete de type 2 et certains cancers.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Difference entre IMG et IMC</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>IMC</strong> ne distingue pas muscle et graisse : un sportif muscle peut avoir un IMC &gt; 25 avec un taux de graisse bas, tandis qu&apos;une personne sedentaire peut avoir un IMC normal mais un exces de graisse (<em>skinny fat</em>). L&apos;<strong>IMG</strong> corrige ce biais en integrant sexe et age. Les femmes ont naturellement 5 a 10 points de graisse de plus que les hommes, et le taux augmente avec l&apos;age meme a poids constant.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">La formule de Deurenberg</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Notre calculateur utilise la <strong>formule de Deurenberg</strong> (1991), validee par pesee hydrostatique :
            </p>
            <p className="text-sm text-gray-800 font-semibold text-center my-2">
              IMG = (1,20 x IMC) + (0,23 x age) - (10,8 x S) - 5,4
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              ou <strong>S = 1</strong> pour les hommes et <strong>S = 0</strong> pour les femmes, et IMC = poids (kg) / taille (m)&sup2;. Bonne correlation pour la population adulte generale.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Plages de reference</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Chez l&apos;homme</strong> : &lt; 6 % masse grasse insuffisante (risques hormonaux), <strong>6-14 %</strong> profil athletique, <strong>14-18 %</strong> taux normal et sain, 18-25 % surpoids, &gt; 25 % obesite. <strong>Chez la femme</strong> : &lt; 14 % insuffisant (risque d&apos;amenorrhee), <strong>14-21 %</strong> profil athletique, <strong>21-25 %</strong> taux normal, 25-32 % surpoids, &gt; 32 % obesite.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Pourquoi la masse grasse compte</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Deux personnes de meme poids peuvent avoir des compositions corporelles radicalement differentes. Seul le taux de masse grasse fait la distinction. L&apos;exces de <strong>graisse viscerale</strong> (autour des organes) est un facteur de risque majeur pour les maladies cardiovasculaires, le syndrome metabolique et certains cancers. A l&apos;inverse, un taux trop bas perturbe les hormones, la thermoregulation et peut entrainer une amenorrhee chez la femme.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Methodes de mesure alternatives</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour plus de precision que la formule de Deurenberg : l&apos;<strong>impedancemetrie bioelectrique</strong> (balances connectees), la <strong>mesure des plis cutanes</strong> (adipometre), le <strong>DEXA</strong> (methode de reference par rayons X), la <strong>pesee hydrostatique</strong> et le <strong>Bodpod</strong> (deplacement d&apos;air). L&apos;essentiel est d&apos;utiliser toujours la meme methode pour suivre son evolution dans le temps.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="img-bottom" format="horizontal" />
      </div>
    </>
  );
}
