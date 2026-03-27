import type { Metadata } from "next";
import CalculPoidsIdeal from "./CalculPoidsIdeal";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul poids ideal — Estimez votre poids de forme",
  description:
    "Calculez votre poids ideal gratuitement selon plusieurs formules medicales reconnues : Lorentz, Devine, Creff et IMC. Comparez les resultats et trouvez votre poids de forme.",
  keywords: [
    "calcul poids idéal",
    "poids ideal",
    "poids de forme",
    "formule de Lorentz",
    "formule de Devine",
    "formule de Creff",
    "poids sante",
    "poids ideal femme",
    "poids ideal homme",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-poids-ideal",
  },
  openGraph: {
    title: "Calcul poids ideal — Estimez votre poids de forme | BonCalcul.fr",
    description:
      "Estimez votre poids ideal selon 4 formules medicales reconnues. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-poids-ideal",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer son poids ideal ?",
    answer:
      "Il n'existe pas une seule formule universelle pour calculer le poids ideal. Plusieurs methodes coexistent (Lorentz, Devine, Creff, IMC) et donnent chacune un resultat different. L'approche la plus fiable consiste a comparer les resultats de plusieurs formules pour obtenir une fourchette de poids de forme. Notre calculateur applique automatiquement 4 formules reconnues et vous donne une synthese.",
  },
  {
    question: "Quelle est la formule la plus fiable pour le poids ideal ?",
    answer:
      "Aucune formule n'est parfaite. La formule de Lorentz est la plus utilisee en France car elle tient compte du sexe. La formule de Creff est plus complete car elle integre l'age et la morphologie. La fourchette basee sur l'IMC (18,5 a 25) est celle recommandee par l'OMS. En pratique, la meilleure approche est de croiser plusieurs formules et de considerer le resultat comme une estimation, pas un objectif strict.",
  },
  {
    question: "Le poids ideal est-il le meme pour un homme et une femme ?",
    answer:
      "Non, le poids ideal differe entre hommes et femmes a taille egale. Les hommes ont generalement une masse musculaire et une ossature plus importantes, ce qui se traduit par un poids ideal plus eleve. Les formules de Lorentz et Devine appliquent des coefficients differents selon le sexe. La difference peut atteindre 5 a 10 kg pour une meme taille.",
  },
  {
    question: "Pourquoi mon poids ideal calcule ne correspond pas a mon poids reel ?",
    answer:
      "Le poids ideal calcule par les formules est une estimation statistique basee sur des moyennes de population. Votre poids reel peut etre different pour de nombreuses raisons : masse musculaire, morphologie osseuse, genetique, niveau d'activite physique. Un sportif peut legitimement peser plus que son poids ideal calcule. L'important est de se sentir bien dans son corps et d'avoir des indicateurs de sante satisfaisants.",
  },
  {
    question: "A quel age le poids ideal change-t-il ?",
    answer:
      "La composition corporelle evolue tout au long de la vie. Apres 30 ans, la masse musculaire tend a diminuer progressivement tandis que la masse graisseuse augmente. La formule de Creff est la seule a integrer l'age dans son calcul. En general, un leger surplus de poids (IMC 25-27) est considere comme normal et meme protecteur apres 65 ans. Il est recommande de suivre l'evolution de son poids avec un professionnel de sante.",
  },
];

export default function PageCalculPoidsIdeal() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul poids ideal — Estimez votre poids de forme",
          description:
            "Calculez votre poids ideal gratuitement selon plusieurs formules medicales reconnues : Lorentz, Devine, Creff et IMC.",
          url: "https://boncalcul.fr/outils/calcul-poids-ideal",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul du poids ideal{" "}
            <span className="text-blue-600">multi-formules</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez votre poids de forme selon 4 formules medicales reconnues
            et comparez les resultats instantanement.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculPoidsIdeal />
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="poids-top" format="horizontal" className="my-8" />
      </div>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le poids ideal
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
        <AdBanner slot="poids-mid" format="horizontal" className="my-8" />
      </div>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu&apos;est-ce que le poids ideal ?</h2>
          <p>
            Le <strong>poids ideal</strong> est une estimation theorique du
            poids auquel une personne serait en meilleure sante, en fonction
            de sa taille, de son sexe, de son age et de sa morphologie. Il ne
            s&apos;agit pas d&apos;un chiffre absolu : chaque individu est
            unique et le poids &laquo; ideal &raquo; varie considerablement
            d&apos;une personne a l&apos;autre.
          </p>
          <p>
            Il est important de distinguer le poids ideal du poids souhaite.
            Le premier est une reference medicale basee sur des donnees
            statistiques, tandis que le second est souvent influence par des
            criteres esthetiques ou sociaux. Un poids de forme est celui
            auquel vous vous sentez bien, avec de bons indicateurs de sante
            (tension arterielle, glycemie, cholesterol).
          </p>

          <h2>Les differentes formules et leur histoire</h2>
          <p>
            Depuis le XIXe siecle, de nombreux medecins et chercheurs ont
            propose des formules pour estimer le poids ideal. Chacune repose
            sur des hypotheses et des populations d&apos;etude differentes :
          </p>
          <h3>La formule de Lorentz (1929)</h3>
          <p>
            Mise au point par le medecin allemand Paul Lorentz, cette formule
            est la plus repandue en France. Elle tient compte du sexe et de
            la taille. Pour les hommes :{" "}
            <em>Poids = Taille (cm) - 100 - (Taille - 150) / 4</em>. Pour
            les femmes :{" "}
            <em>Poids = Taille (cm) - 100 - (Taille - 150) / 2,5</em>. Sa
            limite principale est de ne pas considerer l&apos;age ni la
            morphologie.
          </p>
          <h3>La formule de Devine (1974)</h3>
          <p>
            Initialement developpee par le Dr Ben J. Devine pour calculer les
            doses de medicaments, cette formule est devenue une reference en
            medecine anglo-saxonne. Elle utilise la taille en centimetres et
            differe selon le sexe : pour les hommes,{" "}
            <em>Poids = 50 + 0,9 x (Taille - 152,4)</em> ; pour les femmes,{" "}
            <em>Poids = 45,5 + 0,9 x (Taille - 152,4)</em>. Cette formule
            tend a donner des resultats plus bas que Lorentz pour les grandes
            tailles.
          </p>
          <h3>La formule de Creff</h3>
          <p>
            Plus complete que les precedentes, la formule de Creff integre
            trois facteurs : la taille, l&apos;age et la morphologie
            (gracile, normale ou large). La formule est :{" "}
            <em>
              Poids = ((Taille - 100) + (Age / 10)) x 0,9 x Coefficient
            </em>
            , ou le coefficient vaut 0,9 pour une morphologie mince, 1,0
            pour une morphologie normale et 1,1 pour une morphologie large.
            C&apos;est la formule la plus personnalisee parmi les formules
            classiques.
          </p>
          <h3>La fourchette IMC (OMS)</h3>
          <p>
            Plutot qu&apos;un poids ideal unique, l&apos;Organisation
            mondiale de la sante recommande de se situer dans une{" "}
            <strong>fourchette de poids</strong> correspondant a un IMC entre
            18,5 et 25. Cette approche est plus realiste car elle reconnait
            qu&apos;il n&apos;existe pas un seul poids ideal mais une zone
            de poids sain.
          </p>

          <h2>Limites des formules de poids ideal</h2>
          <p>
            Toutes les formules de poids ideal presentent des{" "}
            <strong>limites importantes</strong> qu&apos;il faut garder a
            l&apos;esprit :
          </p>
          <ul>
            <li>
              <strong>
                Elles ne tiennent pas compte de la masse musculaire.
              </strong>{" "}
              Un sportif ou une personne tres active peut avoir un poids
              superieur a son poids ideal calcule sans que cela soit
              preoccupant. Le muscle est plus dense que la graisse.
            </li>
            <li>
              <strong>
                Elles sont basees sur des populations specifiques.
              </strong>{" "}
              Les formules ont ete developpees a partir de populations
              occidentales et peuvent ne pas etre adaptees a toutes les
              origines ethniques.
            </li>
            <li>
              <strong>
                Elles ne considerent pas la repartition des graisses.
              </strong>{" "}
              La graisse abdominale est plus dangereuse pour la sante que la
              graisse peripherique. Le tour de taille est un indicateur
              complementaire essentiel.
            </li>
            <li>
              <strong>
                Elles donnent un chiffre unique (ou une fourchette etroite).
              </strong>{" "}
              Or, le poids ideal est en realite une zone assez large dans
              laquelle votre corps fonctionne de maniere optimale.
            </li>
          </ul>

          <h2>Approche saine du poids</h2>
          <p>
            Plutot que de chercher a atteindre un chiffre precis sur la
            balance, les professionnels de sante recommandent une approche
            globale du bien-etre :
          </p>
          <ul>
            <li>
              <strong>Privilegiez une alimentation equilibree</strong> : riche
              en fruits, legumes, cereales completes et proteines de qualite.
              Evitez les regimes restrictifs qui entrainent l&apos;effet yoyo.
            </li>
            <li>
              <strong>Bougez regulierement</strong> : l&apos;activite
              physique ameliore la composition corporelle, meme sans perte de
              poids sur la balance. Elle augmente la masse musculaire et reduit
              la masse graisseuse.
            </li>
            <li>
              <strong>Ecoutez votre corps</strong> : la faim, la satiete et le
              niveau d&apos;energie sont de meilleurs indicateurs que le
              chiffre sur la balance. Un poids stable sans effort est souvent
              un bon signe.
            </li>
            <li>
              <strong>Consultez un professionnel</strong> : un medecin ou un
              dieteticien peut evaluer votre composition corporelle (masse
              grasse, masse maigre) et vous accompagner de maniere
              personnalisee.
            </li>
          </ul>
          <p>
            Le poids ideal est un repere utile, mais il ne doit pas devenir
            une obsession. Votre sante globale — physique et mentale — est
            bien plus importante qu&apos;un chiffre issu d&apos;une formule
            mathematique. Utilisez ces resultats comme point de depart pour
            une reflexion sur votre hygiene de vie, pas comme un objectif
            rigide a atteindre a tout prix.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="poids-bottom" format="horizontal" />
      </div>
    </>
  );
}
