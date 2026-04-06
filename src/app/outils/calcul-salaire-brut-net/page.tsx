import type { Metadata } from "next";
import Link from "next/link";
import CalculSalaire from "./CalculSalaire";
import { AdBanner } from "@/lib/adsense";
import ToolSourcesBadge from "@/components/ToolSourcesBadge";
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
    canonical: "https://www.boncalcul.fr/outils/calcul-salaire-brut-net",
  },
  openGraph: {
    title: "Calcul salaire brut net 2026 — Convertisseur instantane | BonCalcul.fr",
    description:
      "Convertissez votre salaire brut en net et inversement. Cadre ou non-cadre, taux 2026 a jour.",
    url: "https://www.boncalcul.fr/outils/calcul-salaire-brut-net",
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
    url: "https://www.boncalcul.fr/outils/calcul-salaire-brut-net",
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

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CalculSalaire />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
        <ToolSourcesBadge slug="calcul-salaire-brut-net" />
      </section>

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

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Article associe */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <Link
          href="/blog/declaration-impots-2026-guide"
          className="block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition group"
        >
          <p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
            Article associe
          </p>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
            Declaration d&apos;impots 2026 : guide complet pour bien declarer vos revenus 2025
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Comprenez le lien entre votre salaire net et votre declaration d&apos;impots. Guide complet avec le bareme 2026.
          </p>
        </Link>
      </div>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Comprendre le salaire brut et net en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Salaire brut vs salaire net</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>salaire brut</strong> est le montant total avant deduction, inscrit dans votre contrat de travail. Il inclut le salaire de base, les primes (13e mois, anciennete) et les heures supplementaires. Le <strong>salaire net</strong> (<strong>net a payer avant impot</strong>) est ce que vous recevez sur votre compte bancaire, apres deduction des <strong>cotisations sociales salariales</strong> qui financent la protection sociale (maladie, retraite, chomage). Depuis 2019, le prelevement a la source reduit encore le montant vire, mais le salaire net designe le net avant impot.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Detail des cotisations salariales</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les cotisations representent environ <strong>22 % du brut pour un non-cadre</strong> et <strong>25 % pour un cadre</strong>. Elles se decomposent en : <strong>CSG-CRDS (~9,7 %)</strong>, le poste le plus important, finançant la Securite sociale ; <strong>retraite de base et complementaire (~11 %)</strong> via le regime general et AGIRC-ARRCO ; <strong>assurance chomage (0 % part salariale)</strong> depuis octobre 2018, seul l&apos;employeur cotise ; <strong>complementaire sante (~1,5 %)</strong>, mutuelle obligatoire partagee 50/50 avec l&apos;employeur depuis 2016.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Cadre vs non-cadre : les differences</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Depuis la fusion AGIRC-ARRCO en 2019, l&apos;ecart s&apos;est reduit mais reste notable. Les cadres cotisent a l&apos;<strong>APEC</strong> (~0,024 % du brut) et ont une tranche 2 de retraite complementaire plus elevee, augmentant leurs cotisations mais aussi leurs droits futurs. En moyenne, un cadre paie <strong>3 points de cotisations de plus</strong> qu&apos;un non-cadre (25 % contre 22 % du brut).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les pieges a eviter</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Confondre brut et net</strong> : 40 000 euros brut annuel donne environ 2 600 euros net/mois (non-cadre) ou 2 500 euros (cadre). <strong>Oublier les avantages en nature</strong> : tickets restaurant, voiture de fonction, interessement peuvent representer plusieurs centaines d&apos;euros mensuels. <strong>Ne pas comparer sur la meme base</strong> : certaines offres sont sur 12, 13 ou 14 mois. Ramenez toujours au net mensuel pour comparer les propositions.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conseils pour negocier votre salaire</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Renseignez-vous sur les salaires du marche</strong> via les etudes APEC, cabinets de recrutement et sites d&apos;emploi. <strong>Raisonnez en package global</strong> : variable, interessement/participation, conges supplementaires, teletravail et mutuelle comptent autant que le fixe. <strong>Preparez vos arguments</strong> en chiffrant vos realisations concretes. Utilisez notre <strong>convertisseur brut/net</strong> pour comparer les offres sans erreur.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Quand utiliser un convertisseur brut/net ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Un <strong>convertisseur salaire brut net</strong> est utile pour evaluer une offre d&apos;emploi exprimee en brut annuel, verifier votre fiche de paie, preparer une demande d&apos;augmentation, ou comprendre votre cout reel pour l&apos;employeur. Notre outil est mis a jour avec les <strong>taux de cotisations 2026</strong> et fournit une estimation fiable en quelques secondes.
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
