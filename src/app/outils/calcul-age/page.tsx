import type { Metadata } from "next";
import CalculAge from "./CalculAge";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

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
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="age-top" format="horizontal" className="my-8" />
      </div>

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

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Comment calculer son age exact ?</h2>
          <p>
            Calculer son <strong>age exact</strong> parait simple en apparence,
            mais le calcul precis en annees, mois et jours demande de tenir
            compte des irregularites du calendrier : mois de 28, 29, 30 ou 31
            jours, annees bissextiles, etc. Notre calculateur gere
            automatiquement toutes ces subtilites pour vous donner un resultat
            fiable a la journee pres.
          </p>
          <p>
            Le principe est le suivant : on soustrait la date de naissance de la
            date de reference (par defaut aujourd&apos;hui). On obtient d&apos;abord
            le nombre d&apos;annees completes, puis le nombre de mois restants,
            et enfin le nombre de jours restants. Le calcul tient compte du fait
            que chaque mois n&apos;a pas le meme nombre de jours.
          </p>

          <h2>Age legal en France : les seuils importants</h2>
          <p>
            En France, plusieurs <strong>ages legaux</strong> jalonnent la vie
            d&apos;un citoyen et conditionnent l&apos;acces a differents droits
            et obligations :
          </p>
          <ul>
            <li>
              <strong>6 ans</strong> : age de l&apos;instruction obligatoire
              (scolarisation).
            </li>
            <li>
              <strong>13 ans</strong> : age de la responsabilite penale. Un
              mineur de 13 ans peut faire l&apos;objet de sanctions penales.
            </li>
            <li>
              <strong>15 ans</strong> : age du consentement sexuel en France
              depuis la loi du 21 avril 2021.
            </li>
            <li>
              <strong>16 ans</strong> : possibilite d&apos;emancipation, droit
              de conduire un vehicule avec accompagnateur (conduite
              accompagnee), ouverture d&apos;un compte bancaire avec
              autorisation parentale.
            </li>
            <li>
              <strong>18 ans</strong> : majorite civile. Droit de vote, permis
              de conduire, capacite juridique pleine et entiere, droit de
              consommer de l&apos;alcool.
            </li>
            <li>
              <strong>25 ans</strong> : age limite pour le RSA jeune actif, fin
              de la couverture obligatoire en tant qu&apos;ayant droit pour
              certaines mutuelles.
            </li>
            <li>
              <strong>64 ans</strong> : age legal de depart a la retraite depuis
              la reforme de 2023 (progressivement releve de 62 a 64 ans).
            </li>
            <li>
              <strong>67 ans</strong> : age de la retraite a taux plein
              automatique, quel que soit le nombre de trimestres cotises.
            </li>
          </ul>

          <h2>Le calcul de l&apos;age dans differentes cultures</h2>
          <p>
            La facon de compter l&apos;age varie selon les cultures et les
            traditions du monde entier :
          </p>
          <ul>
            <li>
              <strong>Systeme occidental</strong> : c&apos;est le systeme
              utilise en France et dans la plupart des pays. Un bebe nait a 0
              an et gagne un an a chaque anniversaire. C&apos;est le calcul que
              notre outil effectue.
            </li>
            <li>
              <strong>Systeme coreen (age traditionnel)</strong> : en Coree du
              Sud, un bebe a 1 an a la naissance (les neuf mois de grossesse
              sont comptes). Tout le monde vieillit d&apos;un an supplementaire
              au Nouvel An, et non le jour de l&apos;anniversaire. Ainsi, un
              bebe ne le 31 decembre a 2 ans des le lendemain ! Depuis 2023, la
              Coree du Sud a officiellement adopte le systeme occidental pour
              les documents administratifs.
            </li>
            <li>
              <strong>Systeme chinois traditionnel</strong> : similaire au
              systeme coreen, le bebe a 1 an a la naissance (le temps passe
              dans le ventre de la mere est compte comme une premiere annee).
              L&apos;age augmente au Nouvel An chinois (lunaire), pas a
              l&apos;anniversaire.
            </li>
            <li>
              <strong>Calendrier islamique (Hijri)</strong> : l&apos;age peut
              etre calcule selon le calendrier lunaire islamique, qui compte
              environ 354 jours par an. Une personne de 30 ans selon le
              calendrier gregorien a environ 31 ans selon le calendrier Hijri.
            </li>
          </ul>

          <h2>Age en jours, semaines et heures : a quoi ca sert ?</h2>
          <p>
            Connaitre son age en <strong>nombre total de jours</strong> ou en{" "}
            <strong>heures</strong> peut sembler anecdotique, mais ces chiffres
            ont plusieurs utilisations pratiques et ludiques :
          </p>
          <ul>
            <li>
              <strong>Celebrations originales</strong> : certaines personnes
              fetent leur 10 000e jour de vie (environ 27 ans et 5 mois) ou
              leur 1 000e semaine. C&apos;est une facon originale de marquer
              un jalon.
            </li>
            <li>
              <strong>Calculs medicaux</strong> : en pediatrie, l&apos;age en
              jours ou en semaines est essentiel pour le suivi des nourrissons
              et des prematures. Les courbes de croissance utilisent souvent
              l&apos;age en semaines durant les premiers mois.
            </li>
            <li>
              <strong>Calculs juridiques</strong> : certaines procedures legales
              necessitent de connaitre l&apos;age exact en jours, par exemple
              pour le calcul de delais ou la determination de la majorite a un
              instant precis.
            </li>
            <li>
              <strong>Astrologie et numerologie</strong> : ces disciplines
              utilisent la date de naissance precise pour leurs calculs.
              Le signe astrologique depend directement de la date de naissance.
            </li>
          </ul>

          <h2>Jour de naissance et calendrier</h2>
          <p>
            Notre calculateur determine automatiquement le{" "}
            <strong>jour de la semaine</strong> correspondant a votre date de
            naissance. Savoir si l&apos;on est ne un lundi, un mercredi ou un
            samedi est une curiosite appreciee. Dans certaines cultures, le jour
            de naissance est associe a des traits de personnalite : en
            Angleterre, une comptine populaire (<em>Monday&apos;s child</em>)
            attribue une qualite a chaque jour de la semaine.
          </p>
          <p>
            Le calcul du jour de la semaine pour une date donnee repose sur des
            algorithmes calendaires comme celui de Zeller ou de Tomohiko Sakamoto.
            Ces formules tiennent compte des annees bissextiles (tous les 4 ans,
            sauf les siecles non divisibles par 400) et de la structure
            irreguliere de nos mois.
          </p>

          <h2>Le signe astrologique</h2>
          <p>
            Chaque date de naissance correspond a un{" "}
            <strong>signe du zodiaque</strong>. Le zodiaque est divise en 12
            signes de 30 degres chacun, correspondant approximativement a un mois
            du calendrier. Notre outil determine automatiquement votre signe
            astrologique a partir de votre date de naissance, selon les dates
            traditionnelles utilisees en astrologie occidentale.
          </p>
          <p>
            Attention : les dates exactes de changement de signe peuvent varier
            d&apos;un jour selon les annees, car l&apos;annee tropique ne
            correspond pas exactement a 365 jours. Notre calculateur utilise les
            dates standard les plus couramment admises.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="age-mid" format="auto" className="my-8" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="age-bottom" format="horizontal" />
      </div>
    </>
  );
}
