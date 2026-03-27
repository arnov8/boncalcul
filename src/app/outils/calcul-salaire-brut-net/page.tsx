import type { Metadata } from "next";
import CalculSalaire from "./CalculSalaire";
import { AdBanner } from "@/lib/adsense";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul salaire brut net 2026 — Convertisseur instantane",
  description:
    "Convertissez votre salaire brut en net (et inversement) en un clic. Cadre ou non-cadre, mensuel ou annuel. Taux de cotisations 2026 a jour. Gratuit et sans inscription.",
  keywords: [
    "salaire brut net",
    "convertisseur salaire",
    "calcul salaire net",
    "brut en net",
    "net en brut",
    "salaire cadre",
    "salaire non cadre",
    "cotisations salariales",
    "simulateur salaire 2026",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-salaire-brut-net",
  },
  openGraph: {
    title: "Calcul salaire brut net 2026 — Convertisseur instantane | BonCalcul.fr",
    description:
      "Convertissez votre salaire brut en net et inversement. Cadre ou non-cadre, taux 2026 a jour.",
    url: "https://boncalcul.fr/outils/calcul-salaire-brut-net",
    type: "website",
  },
};

const faqQuestions = [
  {
    question:
      "Quelle est la difference entre le salaire brut et le salaire net ?",
    answer:
      "Le salaire brut est le montant total de votre remuneration avant deduction des cotisations sociales obligatoires (CSG-CRDS, retraite, complementaire sante, etc.). Le salaire net est ce que vous recevez effectivement sur votre compte bancaire chaque mois. En France, les cotisations salariales representent environ 22% du brut pour un non-cadre et 25% pour un cadre.",
  },
  {
    question: "Pourquoi un cadre a-t-il des cotisations plus elevees ?",
    answer:
      "Les cadres cotisent davantage principalement en raison de cotisations de retraite complementaire plus elevees (AGIRC-ARRCO tranche 2) et d'une contribution a l'APEC (Association pour l'emploi des cadres). En contrepartie, ils beneficient de droits a la retraite complementaire plus importants et d'un accompagnement specifique en cas de perte d'emploi.",
  },
  {
    question:
      "Le taux de cotisation chomage est-il vraiment de 0% pour les salaries ?",
    answer:
      "Oui. Depuis le 1er octobre 2018, la part salariale de la cotisation chomage a ete supprimee en France. Seul l'employeur cotise desormais a l'assurance chomage (a hauteur d'environ 4,05% du brut). C'est pourquoi le taux affiche pour le salarie est de 0%.",
  },
  {
    question: "Ce calculateur prend-il en compte le prelevement a la source ?",
    answer:
      "Non. Notre convertisseur calcule le salaire net avant impot sur le revenu. Le prelevement a la source (PAS) depend de votre taux d'imposition personnel, qui varie selon vos revenus globaux, votre situation familiale et vos deductions. Le montant affiche correspond au net a payer avant impot, tel qu'il figure en haut de votre bulletin de salaire.",
  },
  {
    question: "Comment negocier son salaire en brut ou en net ?",
    answer:
      "En France, les salaires sont generalement negocies et communiques en brut annuel, surtout pour les postes cadres. Pour un poste non-cadre, il est courant de raisonner en net mensuel. Dans tous les cas, utilisez notre convertisseur pour comparer les offres sur une base identique. Pensez aussi a prendre en compte les avantages complementaires : mutuelle, tickets restaurant, interessement, qui peuvent representer un complement significatif.",
  },
];

export default function PageSalaireBrutNet() {
  const appJsonLd = webApplicationJsonLd({
    name: "Convertisseur salaire brut net 2026",
    description:
      "Outil gratuit pour convertir un salaire brut en net et inversement. Cadre ou non-cadre, mensuel ou annuel.",
    url: "https://boncalcul.fr/outils/calcul-salaire-brut-net",
  });

  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul salaire{" "}
            <span className="text-blue-600">brut &harr; net</span> 2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Convertissez instantanement votre salaire brut en net ou votre
            salaire net en brut. Cadre ou non-cadre, mensuel ou annuel, avec le
            detail des cotisations salariales.
          </p>
        </div>
      </section>

      {/* Ad before tool */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdBanner slot="salaire-top" format="horizontal" className="mb-6" />
      </div>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CalculSalaire />
      </section>

      {/* Ad after results */}
      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="salaire-mid" format="auto" className="my-8" />
      </div>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le calcul brut/net
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

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Comprendre le salaire brut et le salaire net en France</h2>
          <p>
            En France, le bulletin de salaire affiche deux montants bien
            distincts : le <strong>salaire brut</strong> et le{" "}
            <strong>salaire net</strong>. La difference entre les deux correspond
            aux <strong>cotisations sociales salariales</strong>, un ensemble de
            prelevements obligatoires qui financent la protection sociale
            (maladie, retraite, chomage, etc.). Comprendre ce mecanisme est
            essentiel pour tout salarie, qu'il soit en poste ou en recherche
            d'emploi.
          </p>

          <h3>Qu'est-ce que le salaire brut ?</h3>
          <p>
            Le salaire brut est le montant total convenu entre l'employeur et le
            salarie avant toute deduction. C'est le montant qui figure dans
            votre contrat de travail et qui sert de reference pour les
            negociations salariales, surtout pour les postes cadres. Il inclut
            le salaire de base, les primes eventuelles (13e mois, prime
            d'anciennete), les heures supplementaires et tout autre element de
            remuneration.
          </p>

          <h3>Qu'est-ce que le salaire net ?</h3>
          <p>
            Le salaire net, souvent appele{" "}
            <strong>net a payer avant impot</strong>, est le montant que vous
            recevez effectivement sur votre compte bancaire. Il correspond au
            brut moins l'ensemble des cotisations salariales. Attention : depuis
            2019, le prelevement a la source de l'impot sur le revenu vient
            encore reduire le montant vire, mais le &laquo; salaire net &raquo;
            au sens strict designe le net avant impot.
          </p>

          <h3>Comment sont calculees les cotisations salariales ?</h3>
          <p>
            Les cotisations salariales representent en moyenne{" "}
            <strong>22% du salaire brut pour un non-cadre</strong> et environ{" "}
            <strong>25% pour un cadre</strong>. Elles se decomposent en
            plusieurs postes :
          </p>
          <ul>
            <li>
              <strong>CSG-CRDS (~9,7%)</strong> : la Contribution Sociale
              Generalisee et la Contribution au Remboursement de la Dette
              Sociale financent la Securite sociale. C'est le poste le plus
              important des cotisations salariales.
            </li>
            <li>
              <strong>Retraite de base et complementaire (~11%)</strong> : les
              cotisations retraite sont partagees entre employeur et salarie.
              Elles permettent de constituer vos droits pour la retraite de base
              (regime general) et complementaire (AGIRC-ARRCO).
            </li>
            <li>
              <strong>Assurance chomage (0% part salariale)</strong> : depuis
              octobre 2018, les salaries ne cotisent plus directement a
              l'assurance chomage. Seul l'employeur supporte cette charge.
            </li>
            <li>
              <strong>Complementaire sante (~1,5%)</strong> : depuis 2016,
              l'employeur est tenu de proposer une mutuelle d'entreprise. La
              cotisation est generalement partagee a 50/50 entre employeur et
              salarie.
            </li>
          </ul>

          <h3>Cadre vs non-cadre : quelles differences sur la fiche de paie ?</h3>
          <p>
            Historiquement, la distinction entre cadre et non-cadre entrainait
            des differences importantes en termes de cotisations sociales. Depuis
            la fusion des regimes AGIRC et ARRCO en 2019, l'ecart s'est reduit,
            mais il subsiste des differences notables :
          </p>
          <ul>
            <li>
              Les cadres cotisent a l'<strong>APEC</strong> (Association pour
              l'emploi des cadres), une cotisation specifique d'environ 0,024%
              du brut.
            </li>
            <li>
              Les tranches de cotisation retraite complementaire different : les
              cadres ont souvent une tranche 2 plus significative, ce qui
              augmente leurs cotisations totales mais aussi leurs droits futurs.
            </li>
            <li>
              En moyenne, un cadre paie environ{" "}
              <strong>3 points de cotisations de plus</strong> qu'un non-cadre,
              soit 25% contre 22% du brut.
            </li>
          </ul>

          <h3>Salaire brut net : les pieges a eviter</h3>
          <p>
            Lors d'un entretien d'embauche ou d'une negociation salariale,
            plusieurs erreurs sont courantes :
          </p>
          <ul>
            <li>
              <strong>Confondre brut et net</strong> : une offre a 40 000 euros
              brut annuel correspond a environ 2 600 euros net par mois pour un
              non-cadre, et 2 500 euros pour un cadre. La difference est
              significative.
            </li>
            <li>
              <strong>Oublier les avantages en nature</strong> : tickets
              restaurant, voiture de fonction, mutuelle avantageuse ou
              interessement peuvent representer plusieurs centaines d'euros par
              mois en complement du salaire.
            </li>
            <li>
              <strong>Ne pas comparer sur la meme base</strong> : certaines
              offres sont exprimees en brut annuel sur 12 mois, d'autres sur 13
              ou 14 mois. Ramenez toujours au net mensuel pour comparer.
            </li>
          </ul>

          <h3>Conseils pour negocier votre salaire</h3>
          <p>
            Que vous soyez en poste ou en recherche d'emploi, voici quelques
            conseils pour aborder la question salariale sereinement :
          </p>
          <ul>
            <li>
              <strong>Renseignez-vous sur les salaires du marche</strong> :
              consultez les etudes de remuneration de votre secteur (APEC,
              cabinets de recrutement, sites d'emploi) pour connaitre la
              fourchette habituelle pour votre poste et votre experience.
            </li>
            <li>
              <strong>Raisonnez en package global</strong> : le salaire fixe
              n'est qu'une composante. Pensez au variable, a
              l'interessement/participation, aux jours de conge supplementaires,
              au teletravail et a la qualite de la mutuelle.
            </li>
            <li>
              <strong>Preparez vos arguments</strong> : vos competences, vos
              realisations concretes et votre valeur ajoutee sont vos meilleurs
              atouts. Chiffrez vos contributions passees quand c'est possible.
            </li>
            <li>
              <strong>Utilisez un convertisseur fiable</strong> : notre outil
              vous permet de comparer instantanement brut et net, pour etre sur
              de ne pas vous tromper lors de la negociation.
            </li>
          </ul>

          <h3>Quand utiliser un convertisseur brut/net ?</h3>
          <p>
            Un convertisseur salaire brut net est utile dans de nombreuses
            situations : lorsque vous recevez une offre d'emploi exprimee en
            brut annuel, quand vous souhaitez verifier votre fiche de paie,
            pour preparer une demande d'augmentation, ou simplement pour
            comprendre combien vous coutez reellement a votre employeur. Notre
            outil est mis a jour avec les taux de cotisations 2026 et fournit
            une estimation fiable en quelques secondes.
          </p>
        </div>
      </section>

      {/* Ad before footer */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <AdBanner slot="salaire-bottom" format="horizontal" />
      </div>
    </>
  );
}
