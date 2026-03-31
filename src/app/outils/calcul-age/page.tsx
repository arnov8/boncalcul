import type { Metadata } from "next";
import CalculAge from "./CalculAge";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographieAge from "@/components/infographics/InfographieAge";

export const metadata: Metadata = {
  title: "Calculer son age exact — Calculateur en ligne gratuit",
  description:
    "Calculez votre age exact en annees, mois et jours. Decouvrez votre jour de naissance, signe astrologique et nombre de jours avant votre prochain anniversaire.",
  keywords: [
    "calculer son age",
    "calcul age exact",
    "calculateur age",
    "age en jours",
    "age en semaines",
    "prochain anniversaire",
    "jour de naissance",
    "signe astrologique",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-age",
  },
  openGraph: {
    title: "Calculer son age exact — Calculateur en ligne gratuit | BonCalcul.fr",
    description:
      "Calculez votre age exact en annees, mois et jours. Jour de naissance, signe astrologique, prochain anniversaire. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-age",
    type: "website",
    images: [
      {
        url: `https://boncalcul.fr/api/og?slug=calcul-age`,
        width: 1200,
        height: 630,
        alt: "Calcul Age — BonCalcul.fr",
      },
    ],
  },
};

const faqQuestions = [
  {
    question: "Comment calculer son age exact ?",
    answer:
      "Pour calculer votre age exact, il faut soustraire votre date de naissance de la date actuelle en tenant compte des annees, mois et jours. Notre calculateur effectue ce calcul automatiquement : entrez simplement votre date de naissance pour obtenir votre age precis en annees, mois et jours, ainsi qu'en nombre total de jours, semaines et heures.",
  },
  {
    question: "Comment connaitre son jour de naissance ?",
    answer:
      "Il suffit d'entrer votre date de naissance dans notre calculateur. L'outil determine automatiquement le jour de la semaine correspondant (lundi, mardi, mercredi, etc.) grace a un algorithme calendaire. Par exemple, le 14 juillet 1789 etait un mardi.",
  },
  {
    question: "Quand est mon prochain anniversaire et dans combien de jours ?",
    answer:
      "Notre outil calcule automatiquement la date de votre prochain anniversaire et le nombre de jours restants. Si votre anniversaire est deja passe cette annee, il affiche la date pour l'annee prochaine. C'est pratique pour planifier une fete ou simplement savoir combien de temps il reste a attendre.",
  },
  {
    question: "A quel age est-on majeur en France ?",
    answer:
      "En France, la majorite civile est fixee a 18 ans. A cet age, une personne acquiert la pleine capacite juridique : droit de vote, droit de passer le permis de conduire, droit de signer des contrats, etc. Pour certains actes, des ages differents s'appliquent : 16 ans pour l'emancipation, 15 ans pour le consentement sexuel, et 64 ans pour l'age legal de depart a la retraite (reforme 2023).",
  },
  {
    question: "Comment determine-t-on le signe astrologique a partir de la date de naissance ?",
    answer:
      "Le signe astrologique est determine par la position du Soleil dans le zodiaque au moment de la naissance. Chaque signe correspond a une periode d'environ un mois : Belier (21 mars - 19 avril), Taureau (20 avril - 20 mai), Gemeaux (21 mai - 20 juin), Cancer (21 juin - 22 juillet), Lion (23 juillet - 22 aout), Vierge (23 aout - 22 septembre), Balance (23 septembre - 22 octobre), Scorpion (23 octobre - 21 novembre), Sagittaire (22 novembre - 21 decembre), Capricorne (22 decembre - 19 janvier), Verseau (20 janvier - 18 fevrier), Poissons (19 fevrier - 20 mars).",
  },
];

export default function PageCalculAge() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calculer son age exact — Calculateur en ligne gratuit",
          description:
            "Calculez votre age exact en annees, mois et jours. Decouvrez votre jour de naissance, signe astrologique et prochain anniversaire.",
          url: "https://boncalcul.fr/outils/calcul-age",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calculer son age exact{" "}
            <span className="text-blue-600">gratuitement</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Decouvrez votre age precis en annees, mois et jours, votre jour de
            naissance, votre signe astrologique et votre prochain anniversaire.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculAge />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographieAge />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le calcul de l&apos;age
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
          Tout savoir sur le calcul de l&apos;age
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment calculer son age exact ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Calculer son <strong>age exact</strong> en annees, mois et jours demande de tenir compte des irregularites du calendrier : mois de 28 a 31 jours, <strong>annees bissextiles</strong>, etc. Le principe : on soustrait la date de naissance de la date de reference pour obtenir les annees completes, les mois restants puis les jours restants. Notre calculateur gere automatiquement toutes ces subtilites pour un resultat fiable a la journee pres.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Ages legaux en France</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Plusieurs <strong>ages legaux</strong> jalonnent la vie d&apos;un citoyen : <strong>6 ans</strong> (instruction obligatoire), <strong>13 ans</strong> (responsabilite penale), <strong>15 ans</strong> (consentement sexuel, loi 2021), <strong>16 ans</strong> (emancipation, conduite accompagnee), <strong>18 ans</strong> (majorite civile, droit de vote, permis), <strong>25 ans</strong> (RSA jeune actif), <strong>64 ans</strong> (retraite, reforme 2023) et <strong>67 ans</strong> (retraite a taux plein automatique).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">L&apos;age dans differentes cultures</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Systeme occidental</strong> : un bebe nait a 0 an et gagne un an a chaque anniversaire. <strong>Systeme coreen traditionnel</strong> : 1 an a la naissance, +1 an au Nouvel An (un bebe ne le 31 decembre a 2 ans le lendemain !). Depuis 2023, la Coree utilise le systeme occidental pour l&apos;administratif. <strong>Systeme chinois</strong> : similaire au coreen, l&apos;age augmente au Nouvel An lunaire. <strong>Calendrier islamique (Hijri)</strong> : base sur 354 jours par an, soit environ 3 % de plus qu&apos;en gregorien.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Age en jours, semaines et heures</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connaitre son age en <strong>nombre total de jours</strong> ou en <strong>heures</strong> a des usages pratiques et ludiques : <strong>celebrations originales</strong> (10 000e jour de vie, 1 000e semaine), <strong>calculs medicaux</strong> (suivi pediatrique des nourrissons et prematures en semaines), <strong>calculs juridiques</strong> (determination precise de la majorite, calcul de delais), et <strong>astrologie/numerologie</strong> qui utilisent la date de naissance exacte.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Jour de naissance et calendrier</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Notre calculateur determine automatiquement le <strong>jour de la semaine</strong> correspondant a votre date de naissance. Dans certaines cultures, le jour de naissance est associe a des traits de personnalite (comptine anglaise <em>Monday&apos;s child</em>). Le calcul repose sur des algorithmes calendaires (Zeller, Tomohiko Sakamoto) tenant compte des <strong>annees bissextiles</strong> et de la structure irreguliere des mois.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Le signe astrologique</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chaque date de naissance correspond a un <strong>signe du zodiaque</strong>, le zodiaque etant divise en 12 signes de 30 degres correspondant approximativement a un mois du calendrier. Notre outil determine automatiquement votre signe selon les dates traditionnelles de l&apos;<strong>astrologie occidentale</strong>. Les dates exactes de changement de signe peuvent varier d&apos;un jour selon les annees, l&apos;annee tropique ne correspondant pas exactement a 365 jours.
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
