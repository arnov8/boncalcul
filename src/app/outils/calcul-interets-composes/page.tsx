import type { Metadata } from "next";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import CalculInteretsComposes from "./CalculInteretsComposes";

export const metadata: Metadata = {
  title: "Calcul Interets Composes — Simulateur d'Epargne Gratuit",
  description:
    "Calculez vos interets composes gratuitement. Simulateur d'epargne avec versements mensuels, tableau d'evolution annuel et comparaison interets simples vs composes. Resultat instantane.",
  keywords: [
    "calcul interets composes",
    "simulateur epargne",
    "interets composes calculateur",
    "simulateur placement",
    "rendement epargne",
    "capitalisation interets",
    "epargne mensuelle",
    "calcul rendement placement",
    "interet compose formule",
    "simulateur investissement",
  ],
  openGraph: {
    title: "Calcul Interets Composes — Simulateur d'Epargne | BonCalcul.fr",
    description:
      "Simulez la croissance de votre epargne grace aux interets composes. Versements mensuels, tableau d'evolution et comparaison avec les interets simples.",
    url: "https://boncalcul.fr/outils/calcul-interets-composes",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calcul Interets Composes - BonCalcul.fr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcul Interets Composes — Simulateur d'Epargne Gratuit",
    description:
      "Simulez la croissance de votre epargne grace aux interets composes avec notre calculateur gratuit.",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-interets-composes",
  },
};

const faqQuestions = [
  {
    question: "Qu'est-ce que les interets composes ?",
    answer:
      "Les interets composes sont des interets calcules non seulement sur le capital initial, mais aussi sur les interets deja accumules au cours des periodes precedentes. Contrairement aux interets simples (calcules uniquement sur le capital de depart), les interets composes generent une croissance exponentielle de votre epargne. C'est ce qu'Albert Einstein aurait qualifie de 'huitieme merveille du monde'. Plus la duree de placement est longue, plus l'effet boule de neige est spectaculaire.",
  },
  {
    question: "Comment calculer les interets composes ?",
    answer:
      "La formule de base des interets composes est A = P(1 + r/n)^(nt), ou A est le montant final, P le capital initial, r le taux d'interet annuel (en decimal), n le nombre de fois ou les interets sont capitalises par an, et t la duree en annees. Si vous ajoutez des versements reguliers, la formule devient plus complexe : il faut ajouter le terme PMT x [((1 + r/n)^(nt) - 1) / (r/n)], ou PMT est le montant du versement periodique.",
  },
  {
    question:
      "Quelle est la difference entre interets simples et interets composes ?",
    answer:
      "Avec les interets simples, seul le capital initial produit des interets : si vous placez 10 000 euros a 5% pendant 20 ans, vous gagnez 10 000 euros d'interets (500 euros par an x 20). Avec les interets composes, les interets de chaque periode s'ajoutent au capital et produisent eux-memes des interets : le meme placement rapporte environ 16 533 euros d'interets composes. La difference de 6 533 euros represente les 'interets sur les interets'.",
  },
  {
    question:
      "Quel est l'impact de la frequence de capitalisation ?",
    answer:
      "Plus les interets sont capitalises frequemment, plus le rendement effectif est eleve. Par exemple, pour un placement de 10 000 euros a 5% sur 10 ans : une capitalisation annuelle donne 16 288,95 euros, une capitalisation trimestrielle donne 16 386,16 euros, et une capitalisation mensuelle donne 16 470,09 euros. La difference reste modeste sur des taux classiques, mais elle s'amplifie avec des taux plus eleves et des durees plus longues.",
  },
  {
    question:
      "Combien faut-il epargner par mois pour devenir millionnaire ?",
    answer:
      "Cela depend du rendement et de la duree. Avec un rendement annuel moyen de 7% (historique de la bourse sur longue periode) et des interets composes mensuels : il faut epargner environ 1 920 euros par mois pendant 20 ans, environ 820 euros par mois pendant 30 ans, ou seulement 380 euros par mois pendant 40 ans. Cet exemple illustre parfaitement la puissance du temps avec les interets composes : commencer tot est le facteur le plus determinant.",
  },
];

export default function CalculInteretsComposesPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul Interets Composes",
          description:
            "Calculez vos interets composes gratuitement avec versements mensuels, tableau d'evolution et comparaison interets simples vs composes.",
          url: "https://boncalcul.fr/outils/calcul-interets-composes",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul d&apos;Interets Composes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Simulez la croissance de votre epargne grace aux interets composes.
            Ajoutez des versements mensuels et visualisez l&apos;evolution de
            votre capital annee par annee. Gratuit, instantane, sans inscription.
          </p>
        </div>
      </section>

      {/* Outil */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="interets-top" format="horizontal" className="mb-6" />

        <CalculInteretsComposes />

        <AdBanner slot="interets-mid" format="auto" className="mt-8" />
      </section>

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <h2>Qu&apos;est-ce que les interets composes ?</h2>
          <p>
            Les <strong>interets composes</strong> sont un mecanisme financier
            dans lequel les interets generes par un placement sont reinvestis et
            produisent eux-memes des interets lors des periodes suivantes. Ce
            phenomene de &quot;capitalisation&quot; cree une croissance
            exponentielle du capital, contrairement aux interets simples qui ne
            generent qu&apos;une croissance lineaire. C&apos;est le principe
            fondamental qui sous-tend la plupart des produits d&apos;epargne et
            d&apos;investissement : livrets bancaires, assurance-vie, placements
            boursiers et plans d&apos;epargne retraite.
          </p>
          <p>
            Pour illustrer, prenons un placement de 10 000 euros a 5% par an.
            La premiere annee, vous gagnez 500 euros d&apos;interets. La
            deuxieme annee, les interets sont calcules sur 10 500 euros (votre
            capital initial plus les interets de la premiere annee), soit
            525 euros. La troisieme annee, les interets portent sur 11 025 euros,
            soit 551,25 euros. Et ainsi de suite, chaque annee un peu plus que
            la precedente. Au bout de 30 ans, votre capital atteint
            43 219 euros, dont 33 219 euros d&apos;interets cumules, soit plus
            de trois fois le capital de depart.
          </p>

          <h2>La formule des interets composes</h2>
          <p>
            Le calcul des interets composes repose sur une formule mathematique
            elegante, applicable a tout placement avec reinvestissement des
            gains :
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-lg">
            A = P &times; (1 + r/n)<sup>n&times;t</sup>
          </p>
          <p>
            Dans cette formule, <strong>A</strong> represente le montant final
            (capital + interets), <strong>P</strong> est le capital initial
            investi, <strong>r</strong> est le taux d&apos;interet annuel
            exprime en decimal (par exemple 0,05 pour 5%), <strong>n</strong>{" "}
            est le nombre de fois ou les interets sont capitalises par an
            (12 pour une capitalisation mensuelle, 4 pour trimestrielle, 1 pour
            annuelle), et <strong>t</strong> est la duree du placement en
            annees.
          </p>
          <p>
            Lorsque vous effectuez des versements reguliers (par exemple chaque
            mois), il faut ajouter un second terme a la formule pour prendre en
            compte la croissance de ces versements successifs. Le montant final
            devient alors :
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-lg">
            A = P &times; (1 + r/n)<sup>n&times;t</sup> + PMT &times;
            [((1 + r/n)<sup>n&times;t</sup> - 1) / (r/n)]
          </p>
          <p>
            Ou <strong>PMT</strong> represente le montant du versement
            periodique (mensuel si n = 12). Notre simulateur effectue ces
            calculs automatiquement et vous presente les resultats de maniere
            claire et detaillee.
          </p>

          <h2>
            Interets simples vs interets composes : la puissance du temps
          </h2>
          <p>
            La difference entre interets simples et interets composes devient
            spectaculaire sur de longues periodes. Avec les interets simples,
            un capital de 10 000 euros place a 5% rapporte exactement 500 euros
            chaque annee, quel que soit le nombre d&apos;annees. Au bout de
            30 ans, vous avez gagne 15 000 euros d&apos;interets (30 &times;
            500 euros), pour un total de 25 000 euros.
          </p>
          <p>
            Avec les interets composes a 5%, le meme capital de 10 000 euros
            atteint 43 219 euros au bout de 30 ans, soit{" "}
            <strong>18 219 euros de plus</strong> qu&apos;avec les interets
            simples. Cet ecart s&apos;explique par les &quot;interets sur les
            interets&quot; qui s&apos;accumulent de maniere exponentielle au fil
            du temps. C&apos;est pourquoi commencer a epargner tot, meme de
            petites sommes, est bien plus efficace que d&apos;attendre pour
            investir des montants plus importants.
          </p>

          <h2>Exemples concrets avec des placements francais</h2>
          <p>
            Voici comment les interets composes fonctionnent avec les principaux
            produits d&apos;epargne disponibles en France :
          </p>
          <p>
            <strong>Livret A (3% en 2024) :</strong> Un capital de 10 000 euros
            place sur un Livret A avec des versements mensuels de 200 euros
            pendant 20 ans atteint environ 75 641 euros, dont 17 641 euros
            d&apos;interets nets d&apos;impots (le Livret A etant exonere de
            fiscalite). Les interets du Livret A sont capitalises le 1er
            janvier et le 1er juillet, soit deux fois par an.
          </p>
          <p>
            <strong>Assurance-vie en fonds euros (2,5% en moyenne) :</strong>{" "}
            Le meme placement de 10 000 euros avec 200 euros par mois pendant
            20 ans donne environ 71 780 euros. Apres application des
            prelevements sociaux (17,2%) et de la fiscalite avantageuse apres
            8 ans (abattement de 4 600 euros ou 9 200 euros pour un couple), le
            rendement net reste attractif. L&apos;assurance-vie capitalise les
            interets annuellement.
          </p>
          <p>
            <strong>Investissement en bourse (7% historique moyen) :</strong>{" "}
            Historiquement, les marches actions ont offert un rendement annuel
            moyen d&apos;environ 7% (dividendes reinvestis, avant inflation).
            Avec le meme schema de 10 000 euros initiaux et 200 euros par mois
            pendant 20 ans, le capital atteint environ 114 562 euros, dont
            56 562 euros de gains. Attention cependant : ce rendement n&apos;est
            pas garanti et les marches connaissent des fluctuations importantes
            a court terme. L&apos;investissement en bourse via un PEA
            (Plan d&apos;Epargne en Actions) beneficie d&apos;une fiscalite
            avantageuse apres 5 ans de detention.
          </p>

          <h2>Comment maximiser l&apos;effet des interets composes ?</h2>
          <p>
            Quatre leviers permettent de maximiser la puissance des interets
            composes sur votre patrimoine :
          </p>
          <p>
            <strong>Commencez le plus tot possible.</strong> Le temps est
            l&apos;allie numero un des interets composes. Une personne qui
            commence a epargner 200 euros par mois a 25 ans aura accumule bien
            plus a 65 ans qu&apos;une personne qui commence a 35 ans avec
            400 euros par mois, malgre un effort d&apos;epargne mensuel deux
            fois moins important. Chaque annee supplementaire permet a
            l&apos;effet boule de neige de s&apos;amplifier.
          </p>
          <p>
            <strong>Epargnez regulierement.</strong> Les versements mensuels
            reguliers, meme modestes, ont un impact considerable sur le long
            terme. La regularite est plus importante que le montant. Mettre en
            place un virement automatique le jour du salaire est la strategie
            la plus efficace pour epargner sans y penser.
          </p>
          <p>
            <strong>Reinvestissez tous les gains.</strong> Pour beneficier
            pleinement des interets composes, les interets, dividendes et
            plus-values doivent etre reinvestis plutot que retires. Chaque euro
            retire est un euro qui ne produira plus d&apos;interets futurs.
            C&apos;est pourquoi les enveloppes fiscales qui capitalisent
            automatiquement (assurance-vie, PEA, PER) sont particulierement
            adaptees.
          </p>
          <p>
            <strong>Recherchez le meilleur rendement ajuste au risque.</strong>{" "}
            Un ecart de rendement apparemment faible a un impact enorme sur le
            long terme. Un placement a 5% au lieu de 3% sur 30 ans ne rapporte
            pas &quot;un peu plus&quot; mais pratiquement le double d&apos;interets. Utilisez
            notre simulateur pour comparer differents scenarios et trouver
            l&apos;equilibre optimal entre rendement et risque selon votre
            horizon de placement.
          </p>

          <h2>Interets composes et fiscalite</h2>
          <p>
            En France, la fiscalite a un impact direct sur le rendement reel
            de votre epargne. Le prelevement forfaitaire unique (PFU ou
            &quot;flat tax&quot;) de 30% s&apos;applique par defaut aux revenus
            de l&apos;epargne (12,8% d&apos;impot sur le revenu + 17,2% de
            prelevements sociaux). Cependant, certaines enveloppes permettent
            de differer ou de reduire cette fiscalite. Le Livret A et le LDDS
            sont totalement exoneres. L&apos;assurance-vie beneficie d&apos;un
            abattement apres 8 ans. Le PEA est exonere d&apos;impot sur le
            revenu apres 5 ans (seuls les prelevements sociaux de 17,2%
            s&apos;appliquent). Le PER permet de deduire les versements du
            revenu imposable. Choisir la bonne enveloppe fiscale est donc
            essentiel pour optimiser l&apos;effet des interets composes sur le
            long terme.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Questions frequentes sur les interets composes
        </h2>
        <div className="space-y-4">
          {faqQuestions.map((q, i) => (
            <details
              key={i}
              className="bg-white rounded-xl shadow p-5 group"
            >
              <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
                {q.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {q.answer}
              </p>
            </details>
          ))}
        </div>

        <AdBanner slot="interets-bottom" format="horizontal" className="mt-8" />
      </section>
    </>
  );
}
