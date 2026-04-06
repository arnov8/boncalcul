import type { Metadata } from "next";
import CalculPension from "./CalculPension";
import { AdBanner } from "@/lib/adsense";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import InfographiePension from "@/components/infographics/InfographiePension";

export const metadata: Metadata = {
  title: "Calcul pension alimentaire 2026 — Simulateur bareme Justice",
  description:
    "Calculez le montant indicatif de la pension alimentaire avec le bareme officiel du ministere de la Justice. Droit de visite classique, garde alternee ou reduite. Gratuit et sans inscription.",
  keywords: [
    "pension alimentaire",
    "calcul pension alimentaire",
    "bareme pension alimentaire",
    "simulateur pension alimentaire",
    "pension alimentaire 2026",
    "pension alimentaire garde alternee",
    "pension alimentaire droit de visite",
    "table de reference pension",
    "pension par enfant",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-pension-alimentaire",
  },
  openGraph: {
    title: "Calcul pension alimentaire 2026 — Simulateur bareme Justice | BonCalcul.fr",
    description:
      "Estimez la pension alimentaire selon le bareme du ministere de la Justice. Garde classique, alternee ou reduite.",
    url: "https://www.boncalcul.fr/outils/calcul-pension-alimentaire",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=calcul-pension-alimentaire`,
        width: 1200,
        height: 630,
        alt: "Calcul Pension Alimentaire — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Comment est calculee la pension alimentaire en France ?",
    answer:
      "La pension alimentaire est calculee en fonction des revenus du parent debiteur, du nombre d'enfants et du mode de garde. Le ministere de la Justice publie une table de reference indicative : on deduit un minimum vital (636 euros en 2026, equivalent au RSA) du revenu net mensuel, puis on applique un pourcentage qui varie selon le nombre d'enfants et le type de droit de visite.",
  },
  {
    question: "Le bareme du ministere de la Justice est-il obligatoire ?",
    answer:
      "Non, la table de reference du ministere de la Justice est indicative. Le juge aux affaires familiales fixe le montant en tenant compte de l'ensemble de la situation : revenus et charges de chaque parent, besoins reels des enfants, niveau de vie anterieur de la famille. Le bareme sert de base de discussion, mais le montant final peut s'en ecarter.",
  },
  {
    question: "Quelle est la difference entre les trois modes de garde ?",
    answer:
      "Le droit de visite classique correspond a un week-end sur deux et la moitie des vacances (le parent debiteur heberge l'enfant environ 25% du temps). La garde alternee signifie un partage egal du temps (50/50). La garde reduite correspond a un hebergement inferieur au droit de visite classique (moins de 25% du temps). Plus le parent debiteur heberge l'enfant, moins la pension est elevee.",
  },
  {
    question: "Le montant de la pension alimentaire peut-il etre revise ?",
    answer:
      "Oui, la pension alimentaire peut etre revisee a tout moment en cas de changement important de situation : hausse ou baisse significative des revenus, changement de mode de garde, naissance d'un nouvel enfant, etc. Il faut saisir le juge aux affaires familiales ou convenir d'un accord amiable homologue par le juge.",
  },
  {
    question: "La pension alimentaire est-elle deductible des impots ?",
    answer:
      "Oui, pour le parent qui verse la pension alimentaire, celle-ci est deductible du revenu imposable dans la limite de 6 674 euros par enfant et par an (montant 2026). Pour le parent qui la recoit, elle doit etre declaree comme un revenu. En cas de garde alternee, la deduction n'est pas applicable car chaque parent beneficie d'une demi-part fiscale supplementaire.",
  },
];

export default function PagePensionAlimentaire() {
  const appJsonLd = webApplicationJsonLd({
    name: "Simulateur pension alimentaire 2026",
    description:
      "Outil gratuit pour calculer le montant indicatif de la pension alimentaire selon le bareme du ministere de la Justice.",
    url: "https://www.boncalcul.fr/outils/calcul-pension-alimentaire",
  });

  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul <span className="text-blue-600">pension alimentaire</span> 2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estimez le montant indicatif de la pension alimentaire selon le
            bar&egrave;me du minist&egrave;re de la Justice. S&eacute;lectionnez le mode de garde,
            le nombre d&apos;enfants et le revenu du parent d&eacute;biteur.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CalculPension />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographiePension />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur la pension alimentaire
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

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Comprendre la pension alimentaire en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le bar&egrave;me du minist&egrave;re de la Justice</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>table de r&eacute;f&eacute;rence</strong> du minist&egrave;re de la Justice est un outil indicatif utilis&eacute; par les juges aux affaires familiales. Elle d&eacute;finit un pourcentage du revenu du parent d&eacute;biteur (apr&egrave;s d&eacute;duction du <strong>minimum vital</strong>) en fonction du nombre d&apos;enfants et du temps d&apos;h&eacute;bergement. Ce bar&egrave;me est r&eacute;guli&egrave;rement mis &agrave; jour et constitue la base de calcul la plus couramment utilis&eacute;e.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le minimum vital (RSA)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Avant d&apos;appliquer le pourcentage, on d&eacute;duit un <strong>minimum vital</strong> du revenu du parent d&eacute;biteur, correspondant au montant du <strong>RSA pour une personne seule</strong> (environ 636&nbsp;&euro; en 2026). Cette d&eacute;duction garantit que le parent conserve un revenu minimum pour subvenir &agrave; ses propres besoins. Si le revenu est inf&eacute;rieur au minimum vital, la pension calcul&eacute;e sera nulle.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les diff&eacute;rents modes de garde</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le mode de garde influence directement le montant de la pension. En <strong>droit de visite classique</strong> (un week-end sur deux), le taux est interm&eacute;diaire. En <strong>garde altern&eacute;e</strong> (r&eacute;sidence paritaire), le taux est plus faible car les frais sont partag&eacute;s &eacute;galement. En <strong>garde r&eacute;duite</strong>, le parent non-gardien h&eacute;berge peu l&apos;enfant et la pension est plus &eacute;lev&eacute;e pour compenser.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Au-del&agrave; du bar&egrave;me : les crit&egrave;res du juge</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le juge prend en compte de nombreux &eacute;l&eacute;ments au-del&agrave; du simple bar&egrave;me : les <strong>charges fixes</strong> de chaque parent (loyer, cr&eacute;dits), les <strong>besoins sp&eacute;cifiques des enfants</strong> (frais de scolarit&eacute;, activit&eacute;s, sant&eacute;), le <strong>niveau de vie ant&eacute;rieur</strong> de la famille, et les <strong>revenus de chaque parent</strong>. Le bar&egrave;me est un point de d&eacute;part, pas une r&egrave;gle absolue.
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
