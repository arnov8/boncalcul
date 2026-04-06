import type { Metadata } from "next";
import CalculChargesMicro from "./CalculChargesMicro";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul charges micro-entrepreneur 2026 — Simulateur gratuit",
  description:
    "Calculez vos charges de micro-entrepreneur en 2026 : cotisations sociales URSSAF, CFP, versement liberatoire, ACRE. Simulateur gratuit et a jour.",
  keywords: [
    "micro-entrepreneur",
    "auto-entrepreneur",
    "charges sociales",
    "URSSAF",
    "cotisations micro-entreprise",
    "simulateur micro-entrepreneur",
    "calcul charges auto-entrepreneur",
    "ACRE",
    "versement liberatoire",
    "CFP micro-entreprise",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-charges-micro-entrepreneur",
  },
  openGraph: {
    title:
      "Calcul charges micro-entrepreneur 2026 — Simulateur gratuit | BonCalcul.fr",
    description:
      "Calculez vos charges de micro-entrepreneur : cotisations URSSAF, CFP, versement liberatoire, ACRE. Taux 2026 a jour.",
    url: "https://www.boncalcul.fr/outils/calcul-charges-micro-entrepreneur",
    type: "website",
  },
};

const faqQuestions = [
  {
    question:
      "Quels sont les taux de cotisations sociales en micro-entreprise en 2026 ?",
    answer:
      "En 2026, les taux de cotisations sociales pour les micro-entrepreneurs sont de 12,3 % pour la vente de marchandises (BIC), 21,2 % pour les prestations de services BIC, 21,1 % pour les prestations de services BNC et 21,2 % pour les activites liberales BNC. Ces taux couvrent l'ensemble des cotisations sociales obligatoires : maladie, retraite, invalidite-deces, allocations familiales et CSG-CRDS.",
  },
  {
    question:
      "Quel est le plafond de chiffre d'affaires en micro-entreprise en 2026 ?",
    answer:
      "Le plafond de chiffre d'affaires annuel en micro-entreprise est de 188 700 euros pour les activites de vente de marchandises (BIC) et de 77 700 euros pour les prestations de services (BIC et BNC) et les activites liberales. Si vous depassez ces seuils pendant deux annees consecutives, vous basculez automatiquement vers le regime reel d'imposition.",
  },
  {
    question: "L'ACRE, c'est quoi et comment en beneficier ?",
    answer:
      "L'ACRE (Aide a la Creation ou a la Reprise d'une Entreprise) est un dispositif qui permet aux createurs de micro-entreprise de beneficier d'une reduction de 50 % sur leurs cotisations sociales pendant la premiere annee d'activite. Pour en beneficier, vous devez etre demandeur d'emploi, beneficiaire du RSA, avoir moins de 26 ans, ou remplir d'autres conditions specifiques. La demande se fait aupres de l'URSSAF lors de la creation de l'entreprise.",
  },
  {
    question:
      "Un micro-entrepreneur doit-il payer la CFE et l'impot sur le revenu ?",
    answer:
      "Oui. La CFE (Cotisation Fonciere des Entreprises) est due chaque annee par les micro-entrepreneurs, sauf la premiere annee d'activite. Son montant depend de la commune et de la valeur locative du local utilise. Concernant l'impot sur le revenu, le micro-entrepreneur peut opter pour le versement liberatoire (1 a 2,2 % du CA selon l'activite) ou integrer ses revenus dans sa declaration annuelle avec un abattement forfaitaire (71 % vente, 50 % services BIC, 34 % BNC).",
  },
  {
    question:
      "Quelle est la difference entre micro-entreprise et EURL ?",
    answer:
      "La micro-entreprise est un regime fiscal simplifie avec des cotisations calculees sur le chiffre d'affaires, sans deduction de charges reelles, des plafonds de CA et une comptabilite allegee. L'EURL (Entreprise Unipersonnelle a Responsabilite Limitee) est une societe avec une personnalite morale distincte, qui permet de deduire les charges reelles, n'a pas de plafond de CA et offre une meilleure protection du patrimoine personnel. La micro-entreprise est ideale pour demarrer, tandis que l'EURL convient mieux aux activites avec des charges importantes ou un CA eleve.",
  },
];

export default function PageChargesMicroEntrepreneur() {
  const appJsonLd = webApplicationJsonLd({
    name: "Calculateur charges micro-entrepreneur 2026",
    description:
      "Simulateur gratuit pour calculer vos charges de micro-entrepreneur : cotisations sociales, CFP, versement liberatoire, ACRE. Taux 2026 a jour.",
    url: "https://www.boncalcul.fr/outils/calcul-charges-micro-entrepreneur",
  });

  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul charges{" "}
            <span className="text-blue-600">micro-entrepreneur</span> 2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estimez vos cotisations sociales, contributions et revenu net en
            micro-entreprise. Taux URSSAF 2026 a jour, avec option ACRE et
            versement liberatoire.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CalculChargesMicro />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur les charges micro-entrepreneur
          </h2>
          <div className="space-y-3">
            {faqQuestions.map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9660;
                  </span>
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
          Tout savoir sur les charges micro-entrepreneur en 2026
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              Le statut micro-entrepreneur en 2026
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>statut micro-entrepreneur</strong> (anciennement
              auto-entrepreneur) est le regime le plus simple pour creer une
              activite en France. Les cotisations sont calculees en pourcentage
              du <strong>chiffre d&apos;affaires encaisse</strong> : pas de CA,
              pas de charges. Ce regime beneficie d&apos;une comptabilite
              ultra-simplifiee (livre de recettes et registre des achats) et
              d&apos;une franchise de TVA sous certains seuils. En 2026, il
              reste le choix privilegie de plus de 2 millions d&apos;actifs en
              France.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              Les cotisations sociales
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>cotisations sociales URSSAF</strong> couvrent
              l&apos;assurance maladie, la retraite de base et complementaire,
              les allocations familiales, l&apos;invalidite-deces et la
              CSG-CRDS. Le taux varie selon l&apos;activite :{" "}
              <strong>12,3 %</strong> pour la vente de marchandises,{" "}
              <strong>21,2 %</strong> pour les services BIC,{" "}
              <strong>21,1 %</strong> pour les services BNC et{" "}
              <strong>21,2 %</strong> pour les professions liberales. Ces
              cotisations sont declarees et payees mensuellement ou
              trimestriellement via le site autoentrepreneur.urssaf.fr.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              Le versement liberatoire de l&apos;impot
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>versement liberatoire</strong> permet de payer
              l&apos;impot sur le revenu en meme temps que les cotisations
              sociales, a un taux fixe applique sur le CA :{" "}
              <strong>1,0 %</strong> pour la vente,{" "}
              <strong>1,7 %</strong> pour les services BIC et{" "}
              <strong>2,2 %</strong> pour les BNC. Cette option est accessible
              si le revenu fiscal de reference du foyer ne depasse pas un
              certain seuil (environ 27 478 euros par part en 2026). Elle
              simplifie la gestion fiscale mais n&apos;est pas toujours
              avantageuse, notamment pour les foyers peu ou pas imposes.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              Les plafonds de chiffre d&apos;affaires
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              En 2026, le plafond de CA est de{" "}
              <strong>188 700 euros</strong> pour les activites de vente de
              marchandises et de <strong>77 700 euros</strong> pour les
              prestations de services et activites liberales. En cas de
              depassement deux annees consecutives, le micro-entrepreneur bascule
              au regime reel. Attention egalement aux seuils de TVA : au-dela de
              91 900 euros (vente) ou 36 800 euros (services), la TVA doit etre
              facturee aux clients. Ces plafonds sont proratises en cas de
              creation en cours d&apos;annee.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              L&apos;ACRE en premiere annee
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>ACRE</strong> (Aide a la Creation ou a la Reprise
              d&apos;une Entreprise) offre une{" "}
              <strong>reduction de 50 % des cotisations sociales</strong> pendant
              les 12 premiers mois d&apos;activite. Ainsi, un prestataire de
              services BNC paiera 10,55 % au lieu de 21,1 %. L&apos;ACRE est
              accessible sous conditions (demandeur d&apos;emploi, beneficiaire
              RSA, jeune de moins de 26 ans, etc.) et doit etre demandee a
              l&apos;URSSAF dans les 45 jours suivant la creation de
              l&apos;entreprise. C&apos;est un levier puissant pour demarrer
              avec des charges reduites.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">
              La CFE et autres taxes
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Au-dela des cotisations sociales, le micro-entrepreneur paie
              la <strong>Contribution Formation Professionnelle</strong> (CFP :
              0,1 a 0,2 % du CA), la{" "}
              <strong>Taxe pour Frais de Chambre Consulaire</strong> (TFC : 0 a
              0,044 % selon l&apos;activite) et la{" "}
              <strong>CFE</strong> (Cotisation Fonciere des Entreprises), dont le
              montant depend de la commune (entre 200 et 2 000 euros environ).
              La CFE est exoneree la premiere annee d&apos;activite. La CFP
              ouvre droit a des formations financees par les fonds de formation
              (AGEFICE, FIFPL, FAFCEA).
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
