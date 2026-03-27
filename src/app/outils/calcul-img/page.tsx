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
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>
            Qu&apos;est-ce que l&apos;IMG (Indice de Masse Grasse) ?
          </h2>
          <p>
            L&apos;<strong>Indice de Masse Grasse</strong>, ou{" "}
            <strong>IMG</strong> (en anglais <em>Body Fat Percentage</em>),
            est un indicateur qui estime la proportion de graisse dans le
            corps par rapport au poids total. Contrairement a l&apos;
            <strong>IMC</strong> (Indice de Masse Corporelle) qui se contente
            d&apos;un ratio poids/taille, l&apos;IMG prend en compte le{" "}
            <strong>sexe</strong> et l&apos;<strong>age</strong> de la
            personne pour fournir une estimation plus fine de la composition
            corporelle.
          </p>
          <p>
            La graisse corporelle joue un role essentiel dans le
            fonctionnement de l&apos;organisme : isolation thermique,
            protection des organes, reserve d&apos;energie et regulation
            hormonale. Cependant, un exces de masse grasse est associe a un
            risque accru de maladies cardiovasculaires, de diabete de type 2,
            de certains cancers et de troubles musculo-squelettiques.
          </p>

          <h2>Difference entre IMG et IMC</h2>
          <p>
            L&apos;<strong>IMC</strong> est un indicateur simple et rapide,
            mais il ne distingue pas la masse musculaire de la masse
            graisseuse. Un sportif tres muscle peut ainsi avoir un IMC eleve
            (superieur a 25) tout en ayant un taux de graisse corporelle tres
            bas. A l&apos;inverse, une personne sedentaire avec un IMC normal
            peut avoir un pourcentage de graisse excessif (on parle
            d&apos;&laquo; obesite a poids normal &raquo; ou{" "}
            <em>skinny fat</em>).
          </p>
          <p>
            L&apos;<strong>IMG</strong> corrige en partie ce biais en
            integrant le sexe et l&apos;age dans le calcul. Les femmes ont
            naturellement un taux de graisse plus eleve que les hommes (en
            moyenne 5 a 10 points de plus) en raison de besoins
            physiologiques lies a la reproduction. De meme, le pourcentage de
            graisse tend a augmenter avec l&apos;age, meme a poids constant,
            car la masse musculaire diminue progressivement.
          </p>

          <h2>La formule de Deurenberg</h2>
          <p>
            Notre calculateur utilise la{" "}
            <strong>formule de Deurenberg</strong> (1991), l&apos;une des plus
            repandues pour estimer la masse grasse a partir de l&apos;IMC.
            Elle s&apos;exprime ainsi :
          </p>
          <p className="text-center">
            <strong className="text-lg">
              IMG = (1,20 x IMC) + (0,23 x age) - (10,8 x S) - 5,4
            </strong>
          </p>
          <p>
            ou <strong>S = 1</strong> pour les hommes et{" "}
            <strong>S = 0</strong> pour les femmes, et ou l&apos;IMC se
            calcule par la formule classique : poids (kg) / taille (m)&sup2;.
            Cette equation a ete validee par comparaison avec des mesures de
            densite corporelle par pesee hydrostatique et presente une bonne
            correlation pour la population adulte generale.
          </p>

          <h2>
            Plages de reference selon le sexe
          </h2>
          <p>
            L&apos;interpretation de l&apos;IMG differe entre hommes et
            femmes en raison des differences physiologiques naturelles :
          </p>
          <h3>Chez l&apos;homme</h3>
          <ul>
            <li>
              <strong>Moins de 6 %</strong> : masse grasse insuffisante. Ce
              taux tres bas peut entrainer des troubles hormonaux, une fatigue
              chronique et une baisse de l&apos;immunite.
            </li>
            <li>
              <strong>6 a 14 %</strong> : profil athletique. Ce taux est
              courant chez les sportifs entraines. La definition musculaire
              est bien visible.
            </li>
            <li>
              <strong>14 a 18 %</strong> : taux normal et sain. C&apos;est la
              fourchette recommandee pour la majorite des hommes adultes.
            </li>
            <li>
              <strong>18 a 25 %</strong> : surpoids. Un exces de graisse
              commence a s&apos;accumuler, augmentant les risques pour la
              sante.
            </li>
            <li>
              <strong>Plus de 25 %</strong> : obesite. Un suivi medical et un
              changement d&apos;hygiene de vie sont recommandes.
            </li>
          </ul>
          <h3>Chez la femme</h3>
          <ul>
            <li>
              <strong>Moins de 14 %</strong> : masse grasse insuffisante.
              Peut provoquer une amenorrhee (arret des regles), des troubles
              hormonaux et une fragilite osseuse.
            </li>
            <li>
              <strong>14 a 21 %</strong> : profil athletique. Taux courant
              chez les sportives de haut niveau.
            </li>
            <li>
              <strong>21 a 25 %</strong> : taux normal et sain pour la
              majorite des femmes adultes.
            </li>
            <li>
              <strong>25 a 32 %</strong> : surpoids. L&apos;exces de graisse
              augmente les risques metaboliques et cardiovasculaires.
            </li>
            <li>
              <strong>Plus de 32 %</strong> : obesite. Une prise en charge
              medicale est conseillee.
            </li>
          </ul>

          <h2>Pourquoi la masse grasse est-elle importante ?</h2>
          <p>
            Connaitre son pourcentage de graisse corporelle est plus parlant
            que le simple poids affiche sur la balance. Deux personnes de meme
            poids et de meme taille peuvent avoir des compositions corporelles
            radicalement differentes : l&apos;une avec beaucoup de muscle et
            peu de graisse, l&apos;autre dans la situation inverse. Seul le
            taux de masse grasse permet de faire cette distinction.
          </p>
          <p>
            Un exces de graisse corporelle, en particulier la{" "}
            <strong>graisse viscerale</strong> (situee autour des organes
            abdominaux), est un facteur de risque majeur pour de nombreuses
            pathologies : maladies cardiovasculaires, diabete de type 2,
            syndrome metabolique, apnee du sommeil, certains cancers
            (colorectal, sein, endometre) et troubles articulaires.
          </p>
          <p>
            A l&apos;inverse, un taux de graisse trop bas est egalement
            problematique. La graisse corporelle est indispensable au bon
            fonctionnement hormonal, a la thermoregulation et a la protection
            des organes internes. Chez la femme, un deficit de masse grasse
            peut entrainer une amenorrhee et augmenter le risque
            d&apos;osteoporose.
          </p>

          <h2>Methodes de mesure de la masse grasse</h2>
          <p>
            La formule de Deurenberg utilisee dans ce calculateur fournit une{" "}
            <strong>estimation</strong> basee sur des donnees facilement
            accessibles (poids, taille, age, sexe). Pour une mesure plus
            precise, plusieurs methodes existent :
          </p>
          <ul>
            <li>
              <strong>Impedancemetrie bioelectrique</strong> : un faible
              courant electrique traverse le corps. La graisse et le muscle
              conduisent l&apos;electricite differemment, ce qui permet
              d&apos;estimer la composition corporelle. De nombreuses balances
              connectees utilisent cette technologie.
            </li>
            <li>
              <strong>Mesure des plis cutanes</strong> (adipometre ou
              caliper) : un professionnel mesure l&apos;epaisseur des plis de
              peau a differents endroits du corps (triceps, abdomen, cuisse,
              etc.) a l&apos;aide d&apos;une pince calibree. Les valeurs sont
              ensuite reportees dans des equations specifiques.
            </li>
            <li>
              <strong>DEXA</strong> (absorptiometrie biphotonique a rayons X) :
              consideree comme la methode de reference, elle permet de
              distinguer avec precision la masse grasse, la masse maigre et
              la masse osseuse. Elle necessite un equipement medical
              specialise.
            </li>
            <li>
              <strong>Pesee hydrostatique</strong> : le sujet est immerge dans
              l&apos;eau et sa densite corporelle est calculee a partir du
              volume d&apos;eau deplace. Methode tres precise mais peu
              pratique au quotidien.
            </li>
            <li>
              <strong>Bodpod</strong> (pletismographie par deplacement
              d&apos;air) : similaire a la pesee hydrostatique, mais utilise
              l&apos;air au lieu de l&apos;eau pour mesurer le volume
              corporel. Plus confortable et tout aussi precis.
            </li>
          </ul>
          <p>
            Quelle que soit la methode choisie, l&apos;important est de
            toujours utiliser la meme pour suivre son evolution dans le temps,
            car les valeurs absolues peuvent varier d&apos;une technique a
            l&apos;autre.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="img-bottom" format="horizontal" />
      </div>
    </>
  );
}
