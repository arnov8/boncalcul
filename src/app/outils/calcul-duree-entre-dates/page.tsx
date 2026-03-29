import type { Metadata } from "next";
import CalculDureeEntreDates from "./CalculDureeEntreDates";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul de jours entre deux dates — Calculateur gratuit",
  description:
    "Calculez le nombre de jours entre deux dates instantanement : jours calendaires, semaines, mois, annees, jours ouvres et week-ends. Gratuit, sans inscription.",
  keywords: [
    "calcul jours entre deux dates",
    "duree entre deux dates",
    "nombre de jours entre deux dates",
    "calculer jours entre dates",
    "difference entre deux dates",
    "jours ouvres entre deux dates",
    "calculateur de jours",
    "combien de jours entre",
    "calcul duree entre dates",
  ],
  openGraph: {
    title: "Calcul de jours entre deux dates — Calculateur gratuit | BonCalcul.fr",
    description:
      "Calculez le nombre de jours entre deux dates : jours calendaires, semaines, mois, annees, jours ouvres. Resultat immediat et gratuit.",
    url: "https://boncalcul.fr/outils/calcul-duree-entre-dates",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-duree-entre-dates",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer le nombre de jours entre deux dates ?",
    answer:
      "Pour calculer le nombre de jours entre deux dates, soustrayez la date de debut de la date de fin. Notre calculateur effectue cette operation automatiquement en tenant compte des mois de longueurs differentes et des annees bissextiles. Entrez simplement vos deux dates et le resultat s'affiche instantanement.",
  },
  {
    question: "Quelle est la difference entre jours calendaires et jours ouvres ?",
    answer:
      "Les jours calendaires comptent tous les jours sans exception (lundi au dimanche). Les jours ouvres ne comptent que les jours de travail, du lundi au vendredi, en excluant les samedis et dimanches. Par exemple, une semaine complete compte 7 jours calendaires mais seulement 5 jours ouvres.",
  },
  {
    question: "Le calculateur tient-il compte des annees bissextiles ?",
    answer:
      "Oui, notre calculateur prend en compte les annees bissextiles automatiquement. Une annee bissextile ajoute un jour supplementaire (le 29 fevrier) tous les 4 ans, sauf les annees divisibles par 100 (sauf si elles sont aussi divisibles par 400). Par exemple, 2024 est bissextile, 1900 ne l'etait pas, mais 2000 l'etait.",
  },
  {
    question: "Comment calculer la duree en mois et en annees entre deux dates ?",
    answer:
      "Le calcul en mois et annees est plus complexe car les mois n'ont pas tous le meme nombre de jours. Notre outil decompose automatiquement la duree en annees completes, mois restants et jours restants, en respectant la longueur reelle de chaque mois.",
  },
  {
    question: "Les jours feries sont-ils exclus du calcul des jours ouvres ?",
    answer:
      "Notre calculateur exclut les samedis et dimanches pour le calcul des jours ouvres. Les jours feries ne sont pas exclus automatiquement car ils varient selon les pays et les regions. Pour un calcul precis incluant les jours feries, soustrayez manuellement le nombre de jours feries du resultat des jours ouvres affiche.",
  },
];

export default function PageCalculDureeEntreDates() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul de jours entre deux dates — Calculateur gratuit",
          description:
            "Calculez le nombre de jours entre deux dates instantanement : jours calendaires, semaines, mois, annees, jours ouvres et week-ends.",
          url: "https://boncalcul.fr/outils/calcul-duree-entre-dates",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de la duree entre deux dates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez instantanement le nombre de jours, semaines, mois et
            annees entre deux dates. Jours ouvres inclus. Gratuit, sans
            inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CalculDureeEntreDates />
        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le calcul de duree entre dates
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

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur le calcul de duree entre deux dates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment compter les jours entre deux dates ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Compter le <strong>nombre de jours entre deux dates</strong> implique de gerer des mois de longueurs differentes (28, 29, 30 ou 31 jours) et les <strong>annees bissextiles</strong>. Le principe : soustraire la date de debut de la date de fin. Du 1er janvier au 1er mars, le resultat varie selon l&apos;annee : 59 jours en annee normale, 60 en annee bissextile. Notre calculateur gere automatiquement toutes ces particularites.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Annees bissextiles : comment ca marche ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Une <strong>annee bissextile</strong> comporte 366 jours au lieu de 365 et se produit tous les 4 ans. Exception : les annees divisibles par 100 ne sont pas bissextiles, sauf si elles sont aussi divisibles par 400. Ainsi, 2000 etait bissextile mais 1900 ne l&apos;etait pas. Notre outil applique automatiquement cette regle du <strong>calendrier gregorien</strong> pour garantir la precision du resultat.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Jours ouvres vs jours calendaires</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>jours calendaires</strong> comptent chaque jour sans exception. Les <strong>jours ouvres</strong> excluent samedis et dimanches (lundi a vendredi, 5 jours). En droit du travail francais, de nombreux delais sont en jours ouvres : preavis, retractation, conges payes. Un mois calendaire (30 jours) correspond a environ 22 jours ouvres. Attention a ne pas confondre avec les <strong>jours ouvrables</strong> (lundi a samedi, 6 jours), utilises dans d&apos;autres contextes juridiques.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Utilisations pratiques du calcul de duree</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Gestion de projet :</strong> planifier les etapes et calculer les jours ouvres disponibles. <strong>Ressources humaines :</strong> anciennete, conges, preavis et delais legaux. <strong>Finance :</strong> interets, duree d&apos;un pret, echeance de facture a 30 ou 60 jours. <strong>Vie personnelle :</strong> compte a rebours avant un evenement, age exact, duree d&apos;un voyage. <strong>Juridique :</strong> delais de prescription, recours, retractation, duree d&apos;un bail.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">Decomposition en annees, mois et jours</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Notre calculateur decompose la duree en <strong>annees, mois et jours</strong> pour une lecture plus intuitive : &laquo;&nbsp;2 ans, 3 mois et 15 jours&nbsp;&raquo; est plus parlant que &laquo;&nbsp;837 jours&nbsp;&raquo;. Le nombre de <strong>semaines completes</strong> et jours restants est egalement affiche, particulierement utile pour la planification en sprints ou le suivi de grossesse.
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
