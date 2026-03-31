import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import SimulateurPret from "./SimulateurPret";

export const metadata: Metadata = {
  title: "Simulateur de Pret Immobilier Gratuit - Calcul Mensualites",
  description:
    "Calculez vos mensualites de pret immobilier gratuitement. Simulateur avec tableau d'amortissement, assurance emprunteur et cout total du credit. Resultat instantane.",
  keywords: [
    "simulateur pret immobilier",
    "calcul mensualite pret",
    "tableau amortissement",
    "credit immobilier",
    "taux pret immobilier",
    "assurance emprunteur",
    "cout credit immobilier",
    "calculateur pret",
    "mensualite credit",
    "simulation pret maison",
  ],
  openGraph: {
    title: "Simulateur de Pret Immobilier Gratuit - BonCalcul.fr",
    description:
      "Calculez vos mensualites de pret immobilier avec notre simulateur gratuit. Tableau d'amortissement et cout total inclus.",
    url: "https://boncalcul.fr/outils/simulateur-pret-immobilier",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simulateur de Pret Immobilier - BonCalcul.fr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur de Pret Immobilier Gratuit",
    description:
      "Calculez vos mensualites de pret immobilier avec notre simulateur gratuit.",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/simulateur-pret-immobilier",
  },
};

const faqQuestions = [
  {
    question:
      "Comment calculer la mensualite d'un pret immobilier ?",
    answer:
      "La mensualite se calcule avec la formule d'annuite constante : M = C x (t/12) / (1 - (1 + t/12)^(-n x 12)), ou C est le capital emprunte, t le taux d'interet annuel et n la duree en annees. Notre simulateur effectue ce calcul automatiquement et y ajoute l'assurance emprunteur pour vous donner la mensualite totale.",
  },
  {
    question: "Quel taux de pret immobilier peut-on obtenir en 2025 ?",
    answer:
      "Les taux de pret immobilier varient selon la duree, le profil de l'emprunteur et la banque. En 2025, les taux moyens se situent entre 3% et 4% sur 20 ans. Pour obtenir le meilleur taux, il est recommande de comparer les offres de plusieurs banques et de faire appel a un courtier. Un bon apport personnel (au moins 10% du prix du bien) et un taux d'endettement inferieur a 35% sont des atouts majeurs.",
  },
  {
    question: "L'assurance emprunteur est-elle obligatoire ?",
    answer:
      "Legalement, l'assurance emprunteur n'est pas obligatoire. En pratique, toutes les banques l'exigent pour accorder un pret immobilier. Depuis la loi Lemoine (2022), vous pouvez changer d'assurance emprunteur a tout moment, sans frais ni preavis, ce qui permet de realiser des economies significatives sur le cout total du credit.",
  },
  {
    question: "Qu'est-ce qu'un tableau d'amortissement ?",
    answer:
      "Le tableau d'amortissement est un document qui detaille mois par mois la repartition de chaque mensualite entre le remboursement du capital, le paiement des interets et l'assurance. Il indique egalement le capital restant du apres chaque echeance. C'est un outil essentiel pour comprendre le cout reel de votre credit et planifier un eventuel remboursement anticipe.",
  },
  {
    question:
      "Comment reduire le cout total de son credit immobilier ?",
    answer:
      "Plusieurs leviers permettent de reduire le cout total : negocier un taux d'interet plus bas en comparant les offres, choisir une duree plus courte (les interets sont proportionnels a la duree), augmenter son apport personnel pour emprunter moins, deleguer son assurance emprunteur a un assureur externe moins cher, et envisager un remboursement anticipe partiel si votre situation financiere le permet.",
  },
];

export default function SimulateurPretImmobilierPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur de Pret Immobilier",
          description:
            "Calculez vos mensualites de pret immobilier gratuitement avec tableau d'amortissement et assurance emprunteur.",
          url: "https://boncalcul.fr/outils/simulateur-pret-immobilier",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* En-tete */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de Pret Immobilier
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Calculez vos mensualites, le cout total de votre credit et consultez
            le tableau d&apos;amortissement de votre pret immobilier. Gratuit,
            instantane, sans inscription.
          </p>
        </div>
      </section>

      {/* Outil */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <SimulateurPret />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le pret immobilier
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
          href="/blog/acheter-immobilier-printemps-2026"
          className="block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition group"
        >
          <p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
            Article associe
          </p>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
            Acheter en 2026 : taux immobiliers, frais de notaire et capacite d&apos;emprunt
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Taux a 3,2-3,4%, frais de notaire, capacite d&apos;emprunt, aides 2026 : tout ce qu&apos;il faut savoir pour acheter un bien immobilier au printemps 2026.
          </p>
        </Link>
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout comprendre sur le pret immobilier
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment fonctionne notre simulateur ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Notre <strong>simulateur de pret immobilier</strong> calcule en quelques secondes vos <strong>mensualites</strong> et le <strong>cout total du credit</strong>. Renseignez le montant emprunte, le taux d&apos;interet, la duree et le taux d&apos;assurance emprunteur. Le calcul s&apos;effectue dans votre navigateur, sans envoi de donnees personnelles. L&apos;outil genere un recapitulatif complet (mensualite hors assurance, mensualite totale, cout des interets, cout de l&apos;assurance) ainsi qu&apos;un <strong>tableau d&apos;amortissement</strong> detaillant mois par mois la repartition entre capital, interets et assurance.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">La formule de calcul des mensualites</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Le calcul repose sur la formule de l&apos;<strong>annuite constante</strong>, utilisee par toutes les banques francaises :
            </p>
            <p className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center font-mono text-sm mb-3">
              M = C &times; (t/12) / (1 - (1 + t/12)<sup>-n&times;12</sup>)
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>M</strong> = mensualite hors assurance, <strong>C</strong> = capital emprunte, <strong>t</strong> = taux annuel en decimal, <strong>n</strong> = duree en annees. Au debut du pret, la part des interets est elevee ; elle s&apos;inverse progressivement au profit du capital rembourse, comme le montre le tableau d&apos;amortissement.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Obtenir le meilleur taux immobilier</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>taux d&apos;interet</strong> influence le plus le cout total : 0,5 point d&apos;ecart represente plusieurs milliers d&apos;euros. <strong>Comparez les offres</strong> d&apos;au moins 3-4 banques ou faites appel a un <strong>courtier en credit immobilier</strong>. <strong>Soignez votre profil</strong> : apport personnel d&apos;au moins 10 % (idealement 20 %), CDI avec anciennete, taux d&apos;endettement sous 35 %, comptes bancaires sans decouvert. <strong>Choisissez la bonne duree</strong> : un pret sur 15 ans offre un taux inferieur a un pret sur 25 ans, mais avec des mensualites plus elevees. Notre simulateur vous aide a trouver le meilleur compromis.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">L&apos;assurance emprunteur</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;<strong>assurance emprunteur</strong> peut representer jusqu&apos;a <strong>30 % du cout total</strong> du credit. Elle couvre deces, invalidite et incapacite de travail. Le taux moyen des contrats de groupe bancaires est de 0,30 a 0,40 %, mais la <strong>delegation d&apos;assurance</strong> permet d&apos;obtenir des taux inferieurs a 0,10 % pour les profils jeunes. Depuis la <strong>loi Lemoine (2022)</strong>, vous pouvez changer d&apos;assurance a tout moment, sans frais ni preavis. Notre simulateur integre ce taux pour une estimation realiste.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">Conseils pour reussir votre projet immobilier</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Definissez votre <strong>budget global</strong> en incluant le prix du bien, les <strong>frais de notaire</strong> (7-8 % dans l&apos;ancien, 2-3 % dans le neuf), les travaux et une reserve de securite. Notre{" "}
              <a href="/outils/calcul-frais-de-notaire" className="text-blue-600 hover:underline">calculateur de frais de notaire</a>{" "}
              peut vous aider. Verifiez votre eligibilite au <strong>PTZ</strong> (primo-accedants), au pret Action Logement ou aux aides locales pour reduire le montant emprunte au taux du marche. Conservez une marge de manoeuvre : un taux d&apos;endettement de 30 % est plus confortable que le plafond de 35 % du HCSF, pour faire face aux imprevus.
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
