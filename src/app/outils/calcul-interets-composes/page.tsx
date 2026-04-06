import type { Metadata } from "next";
import CalculInteretsComposes from "./CalculInteretsComposes";
import Link from "next/link";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";

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
    url: "https://www.boncalcul.fr/outils/calcul-interets-composes",
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
    canonical: "https://www.boncalcul.fr/outils/calcul-interets-composes",
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
          url: "https://www.boncalcul.fr/outils/calcul-interets-composes",
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
        <CalculInteretsComposes />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="calcul-interets-composes" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur les interets composes
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

      {/* Article associe */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <Link
          href="/blog/interets-composes-guide-epargne"
          className="block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition group"
        >
          <p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
            Article associe
          </p>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
            Interets composes : comment faire fructifier votre epargne en 2026
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Comprendre les interets composes, la formule, des exemples concrets avec les placements francais et les strategies pour optimiser votre epargne.
          </p>
        </Link>
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout comprendre sur les interets composes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que les interets composes ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>interets composes</strong> sont un mecanisme ou les interets generes par un placement sont reinvestis et produisent eux-memes des interets. Cette <strong>capitalisation</strong> cree une croissance exponentielle, contrairement aux interets simples (croissance lineaire). C&apos;est le principe fondamental des livrets bancaires, assurance-vie, placements boursiers et plans d&apos;epargne retraite. Exemple : 10 000 euros a 5% pendant 30 ans atteignent 43 219 euros, dont 33 219 euros d&apos;interets cumules.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">La formule des interets composes</h3>
            <p className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center font-mono text-sm mb-3">
              A = P &times; (1 + r/n)<sup>n&times;t</sup>
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>A</strong> = montant final, <strong>P</strong> = capital initial, <strong>r</strong> = taux annuel en decimal, <strong>n</strong> = frequence de capitalisation par an, <strong>t</strong> = duree en annees.
            </p>
            <p className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center font-mono text-sm mb-3">
              A = P &times; (1 + r/n)<sup>n&times;t</sup> + PMT &times; [((1 + r/n)<sup>n&times;t</sup> - 1) / (r/n)]
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Avec versements reguliers, <strong>PMT</strong> represente le montant periodique (mensuel si n = 12). Notre simulateur effectue ces calculs automatiquement.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Interets simples vs composes : la puissance du temps</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Avec les <strong>interets simples</strong>, 10 000 euros a 5% rapportent 500 euros/an, soit 25 000 euros apres 30 ans. Avec les <strong>interets composes</strong>, le meme capital atteint 43 219 euros, soit <strong>18 219 euros de plus</strong>. Cet ecart provient des &quot;interets sur les interets&quot; qui s&apos;accumulent de maniere exponentielle. C&apos;est pourquoi commencer a epargner tot est bien plus efficace que d&apos;attendre pour investir des montants plus importants.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Exemples avec des placements francais</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Livret A (3%) :</strong> 10 000 euros + 200 euros/mois pendant 20 ans = environ 75 641 euros, nets d&apos;impots. <strong>Assurance-vie fonds euros (2,5%) :</strong> meme schema = environ 71 780 euros, avec fiscalite avantageuse apres 8 ans. <strong>Bourse (7% historique) :</strong> meme schema = environ 114 562 euros, dont 56 562 euros de gains. Le PEA beneficie d&apos;une fiscalite reduite apres 5 ans.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment maximiser l&apos;effet des interets composes ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Commencez tot</strong> : le temps est l&apos;allie numero un. 200 euros/mois des 25 ans rapportent plus que 400 euros/mois des 35 ans. <strong>Epargnez regulierement</strong> : la regularite compte plus que le montant. <strong>Reinvestissez tous les gains</strong> : chaque euro retire ne produira plus d&apos;interets futurs. Privilegiez les enveloppes qui capitalisent automatiquement (assurance-vie, PEA, PER). <strong>Optimisez le rendement</strong> : 5% au lieu de 3% sur 30 ans rapporte pratiquement le double.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Interets composes et fiscalite</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>prelevement forfaitaire unique (PFU)</strong> de 30% s&apos;applique par defaut aux revenus de l&apos;epargne (12,8% IR + 17,2% prelevements sociaux). Cependant, certaines enveloppes reduisent cette charge : le <strong>Livret A</strong> et le <strong>LDDS</strong> sont totalement exoneres, l&apos;<strong>assurance-vie</strong> beneficie d&apos;un abattement apres 8 ans, le <strong>PEA</strong> est exonere d&apos;IR apres 5 ans, et le <strong>PER</strong> permet de deduire les versements du revenu imposable.
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
