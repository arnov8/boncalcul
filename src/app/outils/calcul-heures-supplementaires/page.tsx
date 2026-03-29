import type { Metadata } from "next";
import CalculHeuresSup from "./CalculHeuresSup";
import { AdBanner } from "@/lib/adsense";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul heures supplementaires 2026 — Simulateur majoration",
  description:
    "Calculez le montant de vos heures supplementaires : majoration 25% et 50%, estimation nette, exoneration fiscale. Taux 2026 a jour. Gratuit et sans inscription.",
  keywords: [
    "heures supplementaires",
    "calcul heures sup",
    "majoration heures supplementaires",
    "heures sup 25%",
    "heures sup 50%",
    "simulateur heures supplementaires",
    "exoneration heures sup",
    "heures supplementaires 2026",
    "taux horaire majore",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-heures-supplementaires",
  },
  openGraph: {
    title: "Calcul heures supplementaires 2026 — Simulateur majoration | BonCalcul.fr",
    description:
      "Calculez vos heures sup avec majoration 25% et 50%. Estimation nette et exoneration fiscale.",
    url: "https://boncalcul.fr/outils/calcul-heures-supplementaires",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Comment sont majorees les heures supplementaires en France ?",
    answer:
      "Les heures supplementaires sont majorees de 25% pour les 8 premieres heures (de la 36e a la 43e heure hebdomadaire) et de 50% au-dela (a partir de la 44e heure). Ces taux sont les taux legaux, mais une convention collective peut prevoir des taux differents (minimum 10%). La base de calcul est le taux horaire brut normal du salarie.",
  },
  {
    question: "Les heures supplementaires sont-elles exonerees d'impots ?",
    answer:
      "Oui, depuis 2019, les heures supplementaires beneficient d'une exoneration d'impot sur le revenu dans la limite de 7 500 euros nets par an. Au-dela de ce plafond, les heures supplementaires sont imposables normalement. Cette mesure permet aux salaries de gagner plus sans augmentation proportionnelle de l'impot.",
  },
  {
    question: "Quelle est la difference entre heures supplementaires et complementaires ?",
    answer:
      "Les heures supplementaires s'appliquent aux salaries a temps plein qui depassent la duree legale de 35 heures par semaine. Les heures complementaires concernent les salaries a temps partiel qui depassent la duree prevue a leur contrat mais restent en dessous de 35 heures. Les taux de majoration sont differents : 10% pour les heures complementaires dans la limite de 1/10e de la duree contractuelle, 25% au-dela.",
  },
  {
    question: "Un employeur peut-il obliger un salarie a faire des heures supplementaires ?",
    answer:
      "Oui, l'employeur peut imposer des heures supplementaires dans la limite du contingent annuel (220 heures par an par defaut, sauf convention collective differente). Le salarie ne peut pas refuser sauf motif legitime (probleme de sante, non-respect du repos obligatoire). Au-dela du contingent, l'accord du salarie est requis et une contrepartie obligatoire en repos s'ajoute a la majoration salariale.",
  },
  {
    question: "Comment sont calculees les cotisations sur les heures supplementaires ?",
    answer:
      "Les heures supplementaires beneficient d'une reduction de cotisations salariales d'environ 11,31%, ce qui porte le taux effectif de charges a environ 11% au lieu de 22%. Cote employeur, une deduction forfaitaire de cotisations patronales s'applique egalement pour les entreprises de moins de 250 salaries (1,50 euro par heure supplementaire).",
  },
];

export default function PageHeuresSupplementaires() {
  const appJsonLd = webApplicationJsonLd({
    name: "Simulateur heures supplementaires 2026",
    description:
      "Outil gratuit pour calculer le montant de vos heures supplementaires avec majoration 25% et 50%, estimation nette et exoneration fiscale.",
    url: "https://boncalcul.fr/outils/calcul-heures-supplementaires",
  });

  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul <span className="text-blue-600">heures suppl&eacute;mentaires</span> 2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estimez le gain de vos heures suppl&eacute;mentaires : majoration 25% et 50%,
            montant brut et net, exon&eacute;ration fiscale jusqu&apos;&agrave; 7&nbsp;500&nbsp;&euro; par an.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CalculHeuresSup />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions fr&eacute;quentes sur les heures suppl&eacute;mentaires
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
          Comprendre les heures suppl&eacute;mentaires en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les taux de majoration l&eacute;gaux</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le Code du travail pr&eacute;voit une <strong>majoration de 25%</strong> pour les 8 premi&egrave;res heures suppl&eacute;mentaires (de la 36e &agrave; la 43e heure) et de <strong>50% au-del&agrave;</strong> (44e heure et plus). Une convention ou un accord de branche peut fixer des taux diff&eacute;rents, avec un <strong>minimum l&eacute;gal de 10%</strong>. V&eacute;rifiez votre convention collective pour conna&icirc;tre les taux applicables.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">L&apos;exon&eacute;ration fiscale</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Depuis janvier 2019, les heures suppl&eacute;mentaires sont <strong>exon&eacute;r&eacute;es d&apos;imp&ocirc;t sur le revenu</strong> dans la limite de <strong>7&nbsp;500&nbsp;&euro; nets par an</strong>. Ce plafond a &eacute;t&eacute; temporairement relev&eacute; &agrave; 7&nbsp;500&nbsp;&euro; puis p&eacute;rennis&eacute;. Les heures suppl&eacute;mentaires b&eacute;n&eacute;ficient &eacute;galement d&apos;une <strong>r&eacute;duction de cotisations salariales</strong> d&apos;environ 11%, ce qui augmente le gain net r&eacute;el.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le contingent annuel</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>contingent annuel d&apos;heures suppl&eacute;mentaires</strong> est fix&eacute; &agrave; <strong>220 heures par salari&eacute;</strong> (sauf accord collectif diff&eacute;rent). Au-del&agrave;, l&apos;employeur doit obtenir l&apos;accord du salari&eacute; et accorder une <strong>contrepartie obligatoire en repos</strong> : 50% des heures effectu&eacute;es pour les entreprises de 20 salari&eacute;s ou moins, 100% pour les plus grandes. Les heures au-del&agrave; du contingent restent major&eacute;es normalement.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Droits et obligations</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;employeur doit <strong>d&eacute;compter pr&eacute;cis&eacute;ment les heures</strong> de travail et faire figurer les heures suppl&eacute;mentaires sur le <strong>bulletin de paie</strong>. Le salari&eacute; ne peut pas refuser les heures suppl&eacute;mentaires dans la limite du contingent, sauf en cas de <strong>d&eacute;passement des dur&eacute;es maximales</strong> (48h/semaine, 44h en moyenne sur 12 semaines, 10h/jour). En cas de litige, c&apos;est &agrave; l&apos;employeur de prouver les heures effectu&eacute;es.
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
