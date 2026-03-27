import type { Metadata } from "next";
import CalculPourcentage from "./CalculPourcentage";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul Pourcentage — Calculer un pourcentage en ligne",
  description:
    "Calculez un pourcentage instantanement : X% d'un nombre, quel pourcentage represente X de Y, variation en pourcentage. Gratuit, sans inscription.",
  keywords: [
    "calcul pourcentage",
    "calculer un pourcentage",
    "pourcentage en ligne",
    "X pourcent de Y",
    "variation pourcentage",
    "pourcentage d'un nombre",
    "taux de variation",
    "calculatrice pourcentage",
    "calcul pourcentage gratuit",
  ],
  openGraph: {
    title: "Calcul Pourcentage — Calculer un pourcentage en ligne | BonCalcul.fr",
    description:
      "Calculez un pourcentage en ligne : X% d'un nombre, proportion, variation. Resultat immediat et gratuit.",
    url: "https://boncalcul.fr/outils/calcul-pourcentage",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-pourcentage",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer X % d'un nombre ?",
    answer:
      "Pour calculer X % d'un nombre, multipliez ce nombre par X puis divisez par 100. Par exemple, 20 % de 150 = 150 x 20 / 100 = 30. C'est la methode la plus courante pour appliquer une remise, calculer un pourboire ou determiner une part.",
  },
  {
    question: "Comment trouver quel pourcentage represente un nombre par rapport a un autre ?",
    answer:
      "Pour savoir quel pourcentage X represente de Y, divisez X par Y puis multipliez par 100. Par exemple, 30 represente quel pourcentage de 150 ? Le calcul est : (30 / 150) x 100 = 20 %. Cette formule est utile pour calculer un taux de reussite, une proportion ou une part de marche.",
  },
  {
    question: "Comment calculer une variation en pourcentage ?",
    answer:
      "La variation en pourcentage se calcule avec la formule : ((valeur finale - valeur initiale) / valeur initiale) x 100. Par exemple, si un prix passe de 100 a 130 euros, la variation est ((130 - 100) / 100) x 100 = +30 %. Un resultat positif indique une hausse, un resultat negatif une baisse.",
  },
  {
    question: "Quelle est la difference entre un pourcentage et un point de pourcentage ?",
    answer:
      "Un point de pourcentage mesure la difference absolue entre deux pourcentages, tandis qu'un pourcentage mesure la variation relative. Par exemple, si un taux passe de 10 % a 15 %, il a augmente de 5 points de pourcentage, mais la hausse en pourcentage est de 50 % ((15 - 10) / 10 x 100).",
  },
  {
    question: "Les calculs de pourcentage sont-ils fiables sur BonCalcul.fr ?",
    answer:
      "Oui, nos calculs utilisent les formules mathematiques standard. Le calculateur fonctionne integralement dans votre navigateur : aucune donnee n'est envoyee a nos serveurs. Les resultats sont instantanes et precis a deux decimales pres.",
  },
];

export default function PageCalculPourcentage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul Pourcentage — Calculer un pourcentage en ligne",
          description:
            "Calculez un pourcentage instantanement : X% d'un nombre, quel pourcentage represente X de Y, variation en pourcentage entre deux valeurs.",
          url: "https://boncalcul.fr/outils/calcul-pourcentage",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de pourcentage en ligne
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez instantanement un pourcentage, une proportion ou une
            variation en pourcentage. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <AdBanner slot="pourcentage-top" format="horizontal" className="mb-8" />

        <CalculPourcentage />

        <AdBanner slot="pourcentage-mid" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le calcul de pourcentage
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

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu'est-ce qu'un pourcentage ?</h2>
          <p>
            Un <strong>pourcentage</strong> est une facon d'exprimer une
            proportion sous forme de fraction de 100. Le symbole % signifie
            litteralement &laquo; pour cent &raquo;. Dire que 25 % des eleves
            ont reussi un examen revient a dire que 25 eleves sur 100 l'ont
            reussi, soit un quart du groupe. Les pourcentages sont
            omnipresents dans la vie quotidienne : remises en magasin, taux
            d'interet bancaires, resultats sportifs, statistiques de sondages,
            notes scolaires, et bien plus encore.
          </p>
          <p>
            Mathematiquement, un pourcentage est un rapport multiplie par 100.
            Si vous avez 15 bonnes reponses sur 60 questions, votre taux de
            reussite est (15 / 60) x 100 = 25 %. Cette notion simple est
            pourtant a l'origine de nombreuses erreurs d'interpretation,
            notamment lorsqu'on confond pourcentage et points de pourcentage.
          </p>

          <h2>Les 3 types de calcul de pourcentage</h2>
          <p>
            Il existe trois grands types de calculs de pourcentage que l'on
            rencontre au quotidien. Notre calculateur couvre ces trois cas
            de figure :
          </p>

          <h3>1. Calculer X % d'un nombre</h3>
          <p>
            C'est le calcul le plus courant. Vous connaissez le pourcentage et
            le nombre de reference, et vous cherchez la valeur
            correspondante. La formule est :{" "}
            <strong>resultat = nombre x pourcentage / 100</strong>.
          </p>
          <p>
            <strong>Exemples concrets :</strong>
          </p>
          <ul>
            <li>
              <strong>Remise en magasin :</strong> un article a 80 euros avec
              une reduction de 30 % coute 80 - (80 x 30 / 100) = 80 - 24 =
              56 euros.
            </li>
            <li>
              <strong>Pourboire :</strong> 15 % de pourboire sur une addition
              de 45 euros = 45 x 15 / 100 = 6,75 euros.
            </li>
            <li>
              <strong>Interets bancaires :</strong> un placement de 10 000
              euros a 3 % par an rapporte 10 000 x 3 / 100 = 300 euros
              d'interets annuels.
            </li>
          </ul>

          <h3>2. Trouver quel pourcentage X represente de Y</h3>
          <p>
            Ici, vous connaissez deux nombres et vous cherchez la proportion
            de l'un par rapport a l'autre. La formule est :{" "}
            <strong>pourcentage = (X / Y) x 100</strong>.
          </p>
          <p>
            <strong>Exemples concrets :</strong>
          </p>
          <ul>
            <li>
              <strong>Note scolaire :</strong> 14 points sur 20 = (14 / 20) x
              100 = 70 % de reussite.
            </li>
            <li>
              <strong>Part de marche :</strong> une entreprise qui realise 5
              millions d'euros de chiffre d'affaires sur un marche de 50
              millions = (5 / 50) x 100 = 10 % de part de marche.
            </li>
            <li>
              <strong>Budget :</strong> si vous depensez 450 euros de loyer
              sur un salaire de 1 800 euros, le loyer represente (450 / 1 800)
              x 100 = 25 % de vos revenus.
            </li>
          </ul>

          <h3>3. Calculer la variation en pourcentage</h3>
          <p>
            Ce calcul mesure l'evolution entre deux valeurs. La formule
            est :{" "}
            <strong>
              variation = ((valeur finale - valeur initiale) / valeur
              initiale) x 100
            </strong>
            .
          </p>
          <p>
            <strong>Exemples concrets :</strong>
          </p>
          <ul>
            <li>
              <strong>Evolution de prix :</strong> un loyer passe de 800 a 850
              euros, soit une hausse de ((850 - 800) / 800) x 100 = +6,25 %.
            </li>
            <li>
              <strong>Performance boursiere :</strong> une action passe de 120
              a 96 euros, soit une baisse de ((96 - 120) / 120) x 100 =
              -20 %.
            </li>
            <li>
              <strong>Evolution du chiffre d'affaires :</strong> un CA qui
              passe de 200 000 a 260 000 euros a progresse de ((260 000 -
              200 000) / 200 000) x 100 = +30 %.
            </li>
          </ul>

          <h2>Erreurs courantes avec les pourcentages</h2>
          <p>
            Les pourcentages sont source de nombreuses confusions. Voici les
            erreurs les plus frequentes :
          </p>
          <ul>
            <li>
              <strong>
                Confondre pourcentage et points de pourcentage :
              </strong>{" "}
              si un taux d'interet passe de 2 % a 3 %, il a augmente de 1
              point de pourcentage, mais la hausse relative est de 50 %
              (le taux a ete multiplie par 1,5).
            </li>
            <li>
              <strong>Additionner des pourcentages :</strong> une hausse de
              20 % suivie d'une baisse de 20 % ne ramene pas au prix initial.
              Exemple : 100 euros + 20 % = 120 euros, puis 120 euros - 20 % =
              96 euros (et non 100 euros).
            </li>
            <li>
              <strong>Inverser la base de calcul :</strong> 30 est 50 % de 60,
              mais 60 n'est pas 50 % de 30 (c'est 200 %). La base de
              reference change tout.
            </li>
            <li>
              <strong>Oublier la base de reference :</strong> dire &laquo; les
              ventes ont augmente de 200 % &raquo; signifie qu'elles ont
              triple (x3), et non double.
            </li>
          </ul>

          <h2>Pourcentages et vie quotidienne</h2>
          <p>
            Les pourcentages interviennent dans de nombreux aspects de la vie
            courante. Les <strong>soldes et promotions</strong> utilisent des
            pourcentages pour exprimer les reductions : -30 %, -50 %, etc.
            Les <strong>taux d'interet</strong> des prets immobiliers, des
            livrets d'epargne et des placements financiers sont exprimes en
            pourcentage annuel. Les <strong>impots</strong> sont souvent
            calcules a partir de tranches exprimees en pourcentage du revenu.
          </p>
          <p>
            En entreprise, les pourcentages servent a mesurer la{" "}
            <strong>marge commerciale</strong>, le{" "}
            <strong>taux de conversion</strong> d'un site web, le{" "}
            <strong>taux de croissance</strong> du chiffre d'affaires, ou
            encore le <strong>taux d'absenteisme</strong>. Maitriser le
            calcul de pourcentage est donc une competence essentielle, tant
            dans la vie personnelle que professionnelle.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="pourcentage-bottom" format="horizontal" />
      </div>
    </>
  );
}
