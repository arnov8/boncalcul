import type { Metadata } from "next";
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
        <AdBanner slot="pret-top" format="horizontal" className="mb-6" />

        <SimulateurPret />

        <AdBanner slot="pret-mid" format="auto" className="mt-8" />
      </section>

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <h2>Comment fonctionne notre simulateur de pret immobilier ?</h2>
          <p>
            Notre simulateur de pret immobilier vous permet d&apos;estimer en
            quelques secondes le montant de vos mensualites et le cout total de
            votre credit. Il vous suffit de renseigner le montant que vous
            souhaitez emprunter, le taux d&apos;interet propose par votre banque,
            la duree souhaitee du pret et le taux d&apos;assurance emprunteur. Le
            calcul est effectue directement dans votre navigateur, sans qu&apos;aucune
            donnee personnelle ne soit envoyee a nos serveurs.
          </p>
          <p>
            L&apos;outil genere instantanement un recapitulatif complet comprenant la
            mensualite hors assurance, la mensualite d&apos;assurance, la mensualite
            totale, le cout total des interets, le cout total de l&apos;assurance et
            le montant global rembourse sur toute la duree du pret. Vous pouvez
            egalement consulter un tableau d&apos;amortissement detaille qui vous
            montre, mois par mois, la repartition entre capital rembourse,
            interets et assurance.
          </p>

          <h2>La formule de calcul des mensualites</h2>
          <p>
            Le calcul des mensualites d&apos;un pret immobilier repose sur la formule
            mathematique de l&apos;annuite constante, utilisee par toutes les banques
            francaises. Cette formule s&apos;ecrit :
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-lg">
            M = C &times; (t/12) / (1 - (1 + t/12)<sup>-n&times;12</sup>)
          </p>
          <p>
            Dans cette formule, <strong>M</strong> represente la mensualite hors
            assurance, <strong>C</strong> est le capital emprunte (montant du pret
            moins l&apos;apport personnel), <strong>t</strong> est le taux d&apos;interet
            annuel exprime en decimal (par exemple 0,035 pour 3,5%) et{" "}
            <strong>n</strong> est la duree du pret en annees. Le terme t/12
            correspond au taux mensuel, tandis que n&times;12 donne le nombre
            total de mensualites.
          </p>
          <p>
            Cette formule garantit que chaque mensualite est identique tout au
            long du pret (on parle de pret a annuites constantes). Au debut du
            pret, la part des interets dans chaque mensualite est elevee et la
            part du capital remboursee est faible. Au fil du temps, cette
            proportion s&apos;inverse progressivement : on rembourse de plus en plus
            de capital et de moins en moins d&apos;interets. C&apos;est ce que montre
            clairement le tableau d&apos;amortissement.
          </p>

          <h2>Comment obtenir le meilleur taux pour votre pret immobilier ?</h2>
          <p>
            Le taux d&apos;interet est le facteur qui influence le plus le cout
            total de votre credit immobilier. Une difference de seulement 0,5
            point peut representer plusieurs milliers d&apos;euros sur la duree du
            pret. Voici les strategies les plus efficaces pour obtenir le
            meilleur taux possible.
          </p>
          <p>
            <strong>Comparez les offres de plusieurs banques.</strong> Les taux
            varient significativement d&apos;un etablissement a l&apos;autre. Ne vous
            contentez pas de la premiere proposition de votre banque principale.
            Sollicitez au minimum trois ou quatre banques differentes pour mettre
            les offres en concurrence. Un courtier en credit immobilier peut
            egalement vous aider a acceder aux meilleurs taux du marche, car il
            negocie des volumes importants avec les banques partenaires.
          </p>
          <p>
            <strong>Soignez votre profil emprunteur.</strong> Les banques
            accordent les meilleurs taux aux profils les plus solides. Un apport
            personnel d&apos;au moins 10% du prix du bien (idealement 20%), une
            situation professionnelle stable (CDI, anciennete), un taux
            d&apos;endettement inferieur a 35% et une gestion saine de vos comptes
            bancaires (pas de decouvert) sont autant d&apos;elements qui jouent en
            votre faveur. Les banques analysent generalement vos trois derniers
            releves de compte.
          </p>
          <p>
            <strong>Choisissez la bonne duree.</strong> Plus la duree du pret est
            courte, plus le taux propose sera bas. Un pret sur 15 ans sera
            generalement propose avec un taux inferieur a un pret sur 25 ans.
            Neanmoins, une duree plus courte implique des mensualites plus
            elevees. Utilisez notre simulateur pour trouver le meilleur compromis
            entre mensualite supportable et cout total acceptable.
          </p>

          <h2>L&apos;importance de l&apos;assurance emprunteur</h2>
          <p>
            L&apos;assurance emprunteur est souvent sous-estimee par les acheteurs
            immobiliers, alors qu&apos;elle peut representer jusqu&apos;a 30% du cout
            total du credit. Elle couvre le remboursement du pret en cas de deces,
            d&apos;invalidite ou d&apos;incapacite de travail de l&apos;emprunteur. Bien que
            non obligatoire par la loi, toutes les banques l&apos;exigent en pratique
            pour accorder un pret.
          </p>
          <p>
            Le taux d&apos;assurance moyen se situe autour de 0,30% a 0,40% du
            capital emprunte par an pour les contrats de groupe proposes par les
            banques. Cependant, en faisant jouer la concurrence grace a la
            delegation d&apos;assurance, il est possible d&apos;obtenir des taux bien
            plus bas, parfois inferieurs a 0,10% pour les profils jeunes et en
            bonne sante. Depuis la loi Lemoine de 2022, vous pouvez changer
            d&apos;assurance emprunteur a tout moment, sans frais et sans delai de
            preavis. C&apos;est un levier puissant pour reduire le cout de votre
            credit.
          </p>
          <p>
            Notre simulateur integre le taux d&apos;assurance dans le calcul afin de
            vous donner une vision realiste du cout total de votre emprunt. Le
            taux par defaut de 0,34% correspond a la moyenne des contrats de
            groupe bancaires, mais nous vous encourageons a ajuster cette valeur
            en fonction des devis que vous aurez obtenus.
          </p>

          <h2>Conseils pour reussir votre projet immobilier</h2>
          <p>
            Au-dela du calcul des mensualites, plusieurs elements sont essentiels
            pour mener a bien votre projet d&apos;achat immobilier. Tout d&apos;abord,
            definissez clairement votre budget global en incluant non seulement
            le prix du bien, mais aussi les frais de notaire (environ 7 a 8% dans
            l&apos;ancien, 2 a 3% dans le neuf), les eventuels travaux, les frais de
            demenagement et une reserve de securite. Notre{" "}
            <a
              href="/outils/calcul-frais-de-notaire"
              className="text-blue-600 hover:underline"
            >
              calculateur de frais de notaire
            </a>{" "}
            peut vous aider a estimer precisement ce poste.
          </p>
          <p>
            Pensez egalement a verifier votre eligibilite aux aides a
            l&apos;accession comme le Pret a Taux Zero (PTZ) pour les
            primo-accedants, le pret Action Logement (ex-1% patronal) si votre
            employeur y cotise, ou encore les aides des collectivites locales.
            Ces dispositifs peuvent significativement reduire le montant que vous
            devez emprunter au taux du marche.
          </p>
          <p>
            Enfin, gardez a l&apos;esprit que votre capacite d&apos;emprunt ne se resume
            pas au montant maximal que la banque accepte de vous preter. Il est
            prudent de conserver une marge de manoeuvre dans votre budget mensuel
            pour faire face aux imprevus : reparations, augmentation des charges,
            evolution de la situation familiale. Un taux d&apos;endettement de 30%
            est generalement plus confortable que le plafond de 35% impose par
            le Haut Conseil de stabilite financiere.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Questions frequentes sur le pret immobilier
        </h2>
        <div className="space-y-4">
          {faqQuestions.map((q, i) => (
            <details
              key={i}
              className="bg-white rounded-xl shadow p-5 group"
            >
              <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
                {q.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {q.answer}
              </p>
            </details>
          ))}
        </div>

        <AdBanner slot="pret-bottom" format="horizontal" className="mt-8" />
      </section>
    </>
  );
}
