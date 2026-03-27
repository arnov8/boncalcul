import type { Metadata } from "next";
import SimulateurImpot from "./SimulateurImpot";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Simulateur impôt sur le revenu 2026 — Calcul gratuit et instantané",
  description:
    "Simulez votre impôt sur le revenu 2026 (revenus 2025) gratuitement. Barème progressif, quotient familial, taux marginal et moyen d'imposition. Résultat instantané, sans inscription.",
  keywords: [
    "simulateur impot 2026",
    "calcul impot sur le revenu",
    "simulateur impot revenu",
    "barème impôt 2025",
    "quotient familial",
    "taux marginal imposition",
    "calcul impot en ligne",
    "impôt sur le revenu France",
    "simulateur fiscal",
    "tranches imposition 2025",
  ],
  openGraph: {
    title: "Simulateur impôt sur le revenu 2026 — Calcul gratuit | BonCalcul.fr",
    description:
      "Calculez votre impôt sur le revenu 2026 avec le barème progressif, le quotient familial et le détail par tranche. Gratuit et instantané.",
    url: "https://boncalcul.fr/outils/simulateur-impot-revenu",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/simulateur-impot-revenu",
  },
};

const faqQuestions = [
  {
    question: "Comment est calcule l'impot sur le revenu en France ?",
    answer:
      "L'impot sur le revenu est calcule selon un bareme progressif compose de 5 tranches. Le revenu net imposable est d'abord divise par le nombre de parts fiscales du foyer (quotient familial). Ce quotient est ensuite soumis au bareme, et l'impot obtenu est multiplie par le nombre de parts. Ce mecanisme permet de tenir compte de la situation familiale du contribuable.",
  },
  {
    question: "Quelles sont les tranches d'imposition en 2025 ?",
    answer:
      "Le bareme progressif de l'impot sur le revenu 2025 (applique aux revenus 2024) comporte 5 tranches : 0 % jusqu'a 11 294 euros, 11 % de 11 295 a 28 797 euros, 30 % de 28 798 a 82 341 euros, 41 % de 82 342 a 177 106 euros, et 45 % au-dela de 177 106 euros. Ces seuils sont revalorises chaque annee en fonction de l'inflation.",
  },
  {
    question: "Qu'est-ce que le quotient familial et comment fonctionne-t-il ?",
    answer:
      "Le quotient familial est un mecanisme qui divise le revenu imposable par un nombre de parts fiscales dependant de la composition du foyer. Une personne celibataire a 1 part, un couple marie ou pacse a 2 parts. Chacun des deux premiers enfants a charge ajoute 0,5 part, et chaque enfant a partir du troisieme ajoute 1 part. Ce systeme reduit l'impot des familles en abaissant le taux marginal applique.",
  },
  {
    question: "Quelle est la difference entre le taux marginal et le taux moyen d'imposition ?",
    answer:
      "Le taux marginal d'imposition (TMI) est le taux de la tranche la plus elevee dans laquelle se situe votre revenu. Il s'applique uniquement a la fraction de revenu qui depasse le seuil de cette tranche. Le taux moyen d'imposition represente le pourcentage reel de votre revenu total consacre a l'impot (impot divise par le revenu). Le taux moyen est toujours inferieur au taux marginal grace a la progressivite du bareme.",
  },
  {
    question: "Les resultats de ce simulateur sont-ils fiables ?",
    answer:
      "Ce simulateur utilise le bareme officiel de l'impot sur le revenu 2025 et la methode de calcul par quotient familial conforme a la legislation fiscale francaise. Les calculs sont effectues integralement dans votre navigateur, aucune donnee n'est transmise a nos serveurs. Les resultats sont indicatifs et ne tiennent pas compte de certains dispositifs specifiques (decote, plafonnement du quotient familial, credits et reductions d'impot). Pour une declaration officielle, consultez le site impots.gouv.fr.",
  },
];

export default function PageSimulateurImpot() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur impot sur le revenu 2026",
          description:
            "Simulez votre impot sur le revenu 2026 gratuitement. Bareme progressif, quotient familial, taux marginal et moyen d'imposition.",
          url: "https://boncalcul.fr/outils/simulateur-impot-revenu",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur d&apos;impot sur le revenu 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez instantanement votre impot sur le revenu avec le bareme
            progressif 2025, le quotient familial et le detail par tranche.
            Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <AdBanner slot="impot-top" format="horizontal" className="mb-8" />

        <SimulateurImpot />

        <AdBanner slot="impot-mid" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur l&apos;impot sur le revenu
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
          <h2>Comment fonctionne l&apos;impot sur le revenu en France ?</h2>
          <p>
            L&apos;<strong>impot sur le revenu (IR)</strong> est un impot direct
            preleve sur les revenus des personnes physiques residant en France.
            Il est calcule chaque annee sur la base des revenus percus l&apos;annee
            precedente. Depuis 2019, le <strong>prelevement a la source</strong>{" "}
            permet de collecter l&apos;impot directement sur les salaires, pensions
            et revenus de remplacement chaque mois, evitant ainsi un decalage
            d&apos;un an entre la perception du revenu et le paiement de l&apos;impot.
          </p>
          <p>
            L&apos;impot sur le revenu est <strong>progressif</strong> : plus vos
            revenus sont eleves, plus le taux d&apos;imposition augmente. Ce
            principe de progressivite vise a repartir la charge fiscale de
            maniere equitable en fonction de la capacite contributive de chaque
            foyer. Il se distingue des impots proportionnels (comme la CSG) qui
            appliquent un taux unique quel que soit le niveau de revenu.
          </p>

          <h2>Le bareme progressif de l&apos;impot sur le revenu 2025</h2>
          <p>
            Le bareme de l&apos;impot sur le revenu est compose de{" "}
            <strong>5 tranches</strong> avec des taux croissants. Chaque tranche
            ne s&apos;applique qu&apos;a la portion de revenu qui la concerne, et non a
            l&apos;ensemble du revenu. Voici le bareme applicable aux revenus 2024
            (declaration 2025) :
          </p>
          <ul>
            <li>
              <strong>Jusqu&apos;a 11 294 euros :</strong> 0 % (franchise d&apos;impot)
            </li>
            <li>
              <strong>De 11 295 a 28 797 euros :</strong> 11 %
            </li>
            <li>
              <strong>De 28 798 a 82 341 euros :</strong> 30 %
            </li>
            <li>
              <strong>De 82 342 a 177 106 euros :</strong> 41 %
            </li>
            <li>
              <strong>Au-dela de 177 106 euros :</strong> 45 %
            </li>
          </ul>
          <p>
            Ces seuils sont revalorises chaque annee par l&apos;administration
            fiscale en fonction de l&apos;evolution de l&apos;indice des prix a la
            consommation, afin d&apos;eviter que l&apos;inflation ne fasse mecaniquement
            augmenter l&apos;impot des contribuables dont le pouvoir d&apos;achat reel
            n&apos;a pas progresse.
          </p>

          <h2>Le quotient familial : comment ca marche ?</h2>
          <p>
            Le <strong>quotient familial</strong> est un mecanisme propre au
            systeme fiscal francais qui permet d&apos;adapter l&apos;impot a la taille du
            foyer. Le principe est simple : le revenu net imposable du foyer
            est divise par un nombre de <strong>parts fiscales</strong>, qui
            depend de la situation familiale et du nombre de personnes a charge.
          </p>
          <p>
            Le nombre de parts se calcule ainsi :
          </p>
          <ul>
            <li>
              <strong>Celibataire, divorce ou veuf :</strong> 1 part
            </li>
            <li>
              <strong>Marie ou pacse (declaration commune) :</strong> 2 parts
            </li>
            <li>
              <strong>Chaque enfant a charge (les 2 premiers) :</strong>{" "}
              + 0,5 part par enfant
            </li>
            <li>
              <strong>A partir du 3e enfant a charge :</strong> + 1 part par
              enfant supplementaire
            </li>
          </ul>
          <p>
            Le quotient familial (revenu divise par le nombre de parts) est
            ensuite soumis au bareme progressif. L&apos;impot obtenu est alors
            multiplie par le nombre de parts pour determiner l&apos;impot total du
            foyer. Ce systeme avantage les familles nombreuses en reduisant le
            taux marginal d&apos;imposition effectif.
          </p>
          <p>
            Attention : l&apos;avantage fiscal lie au quotient familial est{" "}
            <strong>plafonne</strong>. Pour chaque demi-part supplementaire
            au-dela de 2 parts (couple) ou 1 part (celibataire), la reduction
            d&apos;impot ne peut pas depasser un certain montant (1 759 euros par
            demi-part en 2025). Ce plafonnement limite l&apos;avantage pour les
            foyers a tres hauts revenus.
          </p>

          <h2>Deductions, reductions et credits d&apos;impot</h2>
          <p>
            Au-dela du bareme et du quotient familial, plusieurs mecanismes
            permettent de <strong>reduire son impot</strong> :
          </p>
          <ul>
            <li>
              <strong>Les deductions du revenu imposable :</strong> elles
              diminuent le montant du revenu soumis au bareme. Par exemple,
              les pensions alimentaires versees, les cotisations d&apos;epargne
              retraite (PER), ou l&apos;abattement de 10 % pour frais
              professionnels sur les salaires.
            </li>
            <li>
              <strong>Les reductions d&apos;impot :</strong> elles diminuent
              directement le montant de l&apos;impot a payer. Elles ne peuvent pas
              generer de remboursement si l&apos;impot est nul. Exemples : dons aux
              associations, investissements locatifs (Pinel), souscription au
              capital de PME.
            </li>
            <li>
              <strong>Les credits d&apos;impot :</strong> comme les reductions, ils
              diminuent l&apos;impot, mais contrairement a celles-ci, ils peuvent
              donner lieu a un remboursement si leur montant depasse l&apos;impot du.
              Exemples : frais de garde d&apos;enfants de moins de 6 ans, emploi d&apos;un
              salarie a domicile, travaux de renovation energetique.
            </li>
          </ul>

          <h2>Comment optimiser son impot sur le revenu ?</h2>
          <p>
            Plusieurs strategies legales permettent de reduire sa charge
            fiscale :
          </p>
          <ul>
            <li>
              <strong>Epargne retraite (PER) :</strong> les versements sur un
              Plan d&apos;Epargne Retraite sont deductibles du revenu imposable dans
              la limite d&apos;un plafond annuel (10 % des revenus professionnels,
              avec un minimum et un maximum). C&apos;est l&apos;un des leviers les plus
              efficaces pour reduire son impot, notamment pour les
              contribuables dans les tranches a 30 % ou plus.
            </li>
            <li>
              <strong>Dons aux associations :</strong> un don a un organisme
              d&apos;interet general ouvre droit a une reduction d&apos;impot de 66 % du
              montant verse (dans la limite de 20 % du revenu imposable), voire
              75 % pour les dons aux organismes d&apos;aide aux personnes en
              difficulte (dans une limite annuelle).
            </li>
            <li>
              <strong>Emploi a domicile :</strong> les depenses liees a
              l&apos;emploi d&apos;un salarie a domicile (menage, garde d&apos;enfants, aide
              aux personnes agees) ouvrent droit a un credit d&apos;impot de 50 %
              des sommes versees, dans la limite de 12 000 euros par an
              (majoree selon la composition du foyer).
            </li>
            <li>
              <strong>Investissement locatif :</strong> des dispositifs comme le
              Pinel (pour les logements neufs dans certaines zones) ou le Denormandie
              (ancien avec travaux) permettent de beneficier de reductions
              d&apos;impot etalees sur plusieurs annees.
            </li>
          </ul>
          <p>
            Ce simulateur vous permet d&apos;estimer rapidement votre impot brut
            avant application de ces dispositifs. Pour une estimation complete
            tenant compte des reductions et credits d&apos;impot, consultez le
            simulateur officiel sur{" "}
            <strong>impots.gouv.fr</strong>.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="impot-bottom" format="horizontal" />
      </div>
    </>
  );
}
