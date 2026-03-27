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
        <AdBanner slot="duree-top" format="horizontal" className="mb-8" />

        <CalculDureeEntreDates />

        <AdBanner slot="duree-mid" format="auto" className="mt-8" />
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

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Comment compter les jours entre deux dates ?</h2>
          <p>
            Compter le <strong>nombre de jours entre deux dates</strong> semble
            simple en apparence, mais plusieurs subtilites rendent ce calcul
            plus complexe qu'il n'y parait. Les mois n'ont pas tous le meme
            nombre de jours (28, 29, 30 ou 31), et les{" "}
            <strong>annees bissextiles</strong> ajoutent un jour supplementaire
            tous les quatre ans. Notre calculateur gere automatiquement toutes
            ces particularites pour vous fournir un resultat precis et fiable.
          </p>
          <p>
            Le principe de base est simple : on soustrait la date de debut de
            la date de fin. Par exemple, du 1er janvier au 31 janvier, il y a
            30 jours. Mais du 1er janvier au 1er mars, le resultat depend de
            l'annee : 59 jours en annee normale, 60 jours en annee bissextile
            (grace au 29 fevrier).
          </p>

          <h2>Annees bissextiles : comment ca marche ?</h2>
          <p>
            Une <strong>annee bissextile</strong> est une annee qui comporte
            366 jours au lieu de 365. Elle se produit tous les 4 ans, avec une
            exception : les annees divisibles par 100 ne sont pas bissextiles,
            sauf si elles sont egalement divisibles par 400. Ainsi, l'an 2000
            etait bissextile, mais 1900 ne l'etait pas.
          </p>
          <p>
            Cette regle est essentielle pour calculer correctement la duree
            entre deux dates qui enjambent un mois de fevrier. Notre outil
            applique automatiquement cette regle du calendrier gregorien pour
            garantir la precision du resultat, quelle que soit la periode
            concernee.
          </p>

          <h2>Jours ouvres vs jours calendaires</h2>
          <p>
            La distinction entre <strong>jours ouvres</strong> et{" "}
            <strong>jours calendaires</strong> est cruciale dans de nombreux
            contextes professionnels et juridiques. Les jours calendaires
            comptent chaque jour sans exception, tandis que les jours ouvres
            excluent les samedis et dimanches.
          </p>
          <p>
            En droit du travail francais, de nombreux delais sont exprimes en
            jours ouvres : preavis de demission, delai de retractation, conges
            payes, etc. Un mois calendaire (30 jours) correspond en moyenne a
            environ 22 jours ouvres. Notre calculateur vous donne les deux
            valeurs simultanement pour faciliter vos demarches.
          </p>
          <p>
            Attention : les <strong>jours ouvres</strong> (lundi a vendredi,
            5 jours) ne doivent pas etre confondus avec les{" "}
            <strong>jours ouvrables</strong> (lundi a samedi, 6 jours), qui
            sont utilises dans d'autres contextes juridiques comme le calcul
            des conges payes dans certaines conventions collectives.
          </p>

          <h2>Utilisations pratiques du calcul de duree</h2>
          <p>
            Le calcul de la duree entre deux dates intervient dans de nombreuses
            situations de la vie courante et professionnelle :
          </p>
          <ul>
            <li>
              <strong>Gestion de projet :</strong> determiner le nombre de
              jours ouvres disponibles pour respecter une echeance, planifier
              les etapes d'un projet ou calculer la duree totale d'un chantier.
            </li>
            <li>
              <strong>Ressources humaines :</strong> calculer l'anciennete
              d'un salarie, le nombre de jours de conges restants, la duree
              d'un preavis ou verifier le respect des delais legaux.
            </li>
            <li>
              <strong>Finance et comptabilite :</strong> calculer les interets
              sur une periode donnee, determiner la duree d'un pret ou d'un
              placement, verifier l'echeance d'une facture a 30 ou 60 jours.
            </li>
            <li>
              <strong>Vie personnelle :</strong> compter les jours avant un
              evenement (mariage, vacances, naissance prevue), calculer son
              age exact ou determiner la duree d'un voyage.
            </li>
            <li>
              <strong>Juridique :</strong> verifier le respect des delais
              legaux (prescription, recours, retractation), calculer la duree
              d'un bail ou d'un contrat.
            </li>
          </ul>

          <h2>Decomposition en annees, mois et jours</h2>
          <p>
            En plus du nombre total de jours, notre calculateur decompose la
            duree en <strong>annees, mois et jours</strong>. Cette
            representation est souvent plus parlante : savoir qu'il y a
            &laquo; 2 ans, 3 mois et 15 jours &raquo; entre deux dates est
            plus intuitif que &laquo; 837 jours &raquo;.
          </p>
          <p>
            Le calcul en semaines est egalement affiche, avec le nombre de
            semaines completes et les jours restants. Cette information est
            particulierement utile pour la planification de projets en sprints
            ou pour le suivi de grossesse, qui se compte traditionnellement en
            semaines.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="duree-bottom" format="horizontal" />
      </div>
    </>
  );
}
