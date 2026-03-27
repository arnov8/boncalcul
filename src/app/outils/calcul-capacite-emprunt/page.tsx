import type { Metadata } from "next";
import CalculCapaciteEmprunt from "./CalculCapaciteEmprunt";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul Capacité d'Emprunt — Combien pouvez-vous emprunter ?",
  description:
    "Calculez votre capacité d'emprunt immobilier gratuitement. Estimez le montant maximum que vous pouvez emprunter selon vos revenus, charges et la règle des 35 % du HCSF. Résultat instantané.",
  keywords: [
    "calcul capacité emprunt",
    "capacité d'emprunt",
    "combien emprunter",
    "capacité emprunt immobilier",
    "simulation capacité emprunt",
    "taux endettement 35%",
    "HCSF",
    "montant empruntable",
    "calculateur emprunt",
    "budget immobilier",
  ],
  openGraph: {
    title: "Calcul Capacité d'Emprunt — BonCalcul.fr",
    description:
      "Estimez le montant maximum que vous pouvez emprunter selon vos revenus et la règle des 35 % du HCSF. Gratuit et instantané.",
    url: "https://boncalcul.fr/outils/calcul-capacite-emprunt",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calcul Capacité d'Emprunt - BonCalcul.fr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcul Capacité d'Emprunt Gratuit",
    description:
      "Estimez le montant maximum que vous pouvez emprunter selon vos revenus et charges.",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-capacite-emprunt",
  },
};

const faqQuestions = [
  {
    question: "Comment est calculee la capacite d'emprunt ?",
    answer:
      "La capacite d'emprunt repose sur la regle des 35 % du Haut Conseil de stabilite financiere (HCSF). La mensualite maximale que vous pouvez consacrer au remboursement de vos credits (y compris les credits en cours) ne doit pas depasser 35 % de vos revenus nets mensuels. A partir de cette mensualite maximale, on calcule le capital empruntable en appliquant la formule d'annuite inversee, en tenant compte du taux d'interet et de la duree du pret.",
  },
  {
    question: "Quels revenus sont pris en compte pour la capacite d'emprunt ?",
    answer:
      "Les banques prennent en compte vos revenus nets mensuels reguliers : salaire net (avant prelevement a la source), revenus fonciers (generalement ponderes a 70 %), pensions de retraite, allocations permanentes et revenus d'activite non salariee (moyenne des 3 derniers exercices). Les primes exceptionnelles et revenus variables sont souvent pris en compte partiellement, voire exclus si leur regularite n'est pas demontree.",
  },
  {
    question: "La regle des 35 % est-elle obligatoire ?",
    answer:
      "Depuis janvier 2022, la recommandation du HCSF est devenue juridiquement contraignante pour les banques. Le taux d'endettement maximal est fixe a 35 % (assurance emprunteur incluse) et la duree maximale a 25 ans (27 ans pour un achat en VEFA ou avec travaux importants). Cependant, les banques peuvent deroger a ces criteres pour 20 % de leur production trimestrielle, dont au moins 70 % reserves aux acquireurs de residence principale (et 30 % aux primo-accedants).",
  },
  {
    question: "Comment augmenter sa capacite d'emprunt ?",
    answer:
      "Plusieurs leviers permettent d'augmenter votre capacite d'emprunt : rembourser vos credits en cours pour liberer de la mensualite disponible, augmenter la duree du pret (jusqu'a 25 ans), negocier un taux d'interet plus bas, reduire le taux d'assurance emprunteur en faisant jouer la concurrence, integrer un co-emprunteur pour cumuler les revenus, ou encore beneficier d'un pret a taux zero (PTZ) qui n'est pas comptabilise dans le taux d'endettement.",
  },
  {
    question: "Quelle difference entre capacite d'emprunt et capacite d'achat ?",
    answer:
      "La capacite d'emprunt correspond au montant maximal que la banque peut vous preter. La capacite d'achat est plus large : elle inclut la capacite d'emprunt plus votre apport personnel. En revanche, il faut retrancher les frais annexes (frais de notaire, frais de garantie, frais de dossier) pour obtenir le budget reel que vous pouvez consacrer au prix du bien. Par exemple, avec une capacite d'emprunt de 200 000 euros et un apport de 30 000 euros, votre capacite d'achat brute est de 230 000 euros, mais votre budget reel sera d'environ 213 000 euros apres deduction des frais de notaire dans l'ancien.",
  },
];

export default function PageCalculCapaciteEmprunt() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul Capacite d'Emprunt",
          description:
            "Calculez votre capacite d'emprunt immobilier gratuitement selon vos revenus, charges et la regle des 35 % du HCSF.",
          url: "https://boncalcul.fr/outils/calcul-capacite-emprunt",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de capacite d&apos;emprunt
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez le montant maximum que vous pouvez emprunter en fonction de
            vos revenus, de vos charges et de la regle des 35 % du HCSF.
            Gratuit, instantane, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <AdBanner slot="capacite-top" format="horizontal" className="mb-8" />

        <CalculCapaciteEmprunt />

        <AdBanner slot="capacite-mid" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la capacite d&apos;emprunt
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
          <h2>Qu&apos;est-ce que la capacite d&apos;emprunt ?</h2>
          <p>
            La <strong>capacite d&apos;emprunt</strong> (ou capacite
            d&apos;endettement) designe le montant maximum qu&apos;un menage peut
            emprunter aupres d&apos;une banque pour financer un projet immobilier,
            tout en conservant un niveau de charges compatible avec ses revenus.
            C&apos;est le premier indicateur a calculer avant de se lancer dans
            une recherche de bien immobilier, car il definit concretement le
            budget dont vous disposez.
          </p>
          <p>
            Connaitre sa capacite d&apos;emprunt permet d&apos;eviter deux ecueils
            frequents : viser des biens trop chers que la banque refusera de
            financer, ou se limiter inutilement en sous-estimant ses
            possibilites. Un calcul precis vous donne une base solide pour
            negocier avec les agents immobiliers et les banques en toute
            connaissance de cause.
          </p>

          <h2>Comment calculer sa capacite d&apos;emprunt ?</h2>
          <p>
            Le calcul de la capacite d&apos;emprunt repose sur un principe simple
            impose par le{" "}
            <strong>Haut Conseil de stabilite financiere (HCSF)</strong> : le
            total de vos charges de credit ne doit pas depasser{" "}
            <strong>35 % de vos revenus nets mensuels</strong>. Ce taux de 35 %
            inclut tous vos credits en cours (credit auto, credit a la
            consommation, etc.) ainsi que l&apos;assurance emprunteur du futur pret
            immobilier.
          </p>

          <h3>La formule de calcul</h3>
          <p>
            La mensualite maximale se calcule ainsi :{" "}
            <strong>Mensualite max = Revenus nets x 0,35 - Charges de credits en cours</strong>.
            A partir de cette mensualite disponible, on determine le capital
            empruntable en utilisant la formule d&apos;annuite inversee :
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-lg">
            C = M &times; (1 - (1 + t/12)<sup>-n&times;12</sup>) / (t/12)
          </p>
          <p>
            Dans cette formule, <strong>C</strong> est le capital empruntable,{" "}
            <strong>M</strong> la mensualite maximale disponible (hors
            assurance), <strong>t</strong> le taux d&apos;interet annuel en decimal
            et <strong>n</strong> la duree du pret en annees. Notre calculateur
            prend egalement en compte le cout de l&apos;assurance emprunteur pour
            vous donner un resultat conforme aux exigences reelles des banques.
          </p>

          <h3>Exemple concret</h3>
          <p>
            Prenons un couple avec des revenus nets mensuels de 5 000 euros et
            un credit auto en cours de 300 euros par mois. Leur mensualite
            maximale autorisee est de 5 000 x 0,35 = 1 750 euros. En retirant
            le credit auto, il reste 1 450 euros disponibles pour le futur pret
            immobilier. Avec un taux de 3,5 % sur 20 ans et une assurance a
            0,34 %, ce couple pourrait emprunter environ 240 000 euros. En
            ajoutant un eventuel apport personnel, on obtient la capacite
            d&apos;achat totale.
          </p>

          <h2>Les facteurs qui influencent la capacite d&apos;emprunt</h2>
          <p>
            Plusieurs parametres jouent un role determinant dans le montant que
            la banque acceptera de vous preter. Les connaitre permet
            d&apos;optimiser son dossier et de maximiser sa capacite d&apos;emprunt.
          </p>

          <h3>Les revenus du menage</h3>
          <p>
            Plus vos revenus sont eleves et stables, plus votre capacite
            d&apos;emprunt augmente. Les banques privilegient les revenus
            reguliers : salaires en CDI (apres periode d&apos;essai), pensions de
            retraite, revenus de la fonction publique. Les revenus variables
            (primes, commissions, revenus d&apos;independants) sont souvent
            ponderes ou moyennes sur plusieurs annees. Les revenus fonciers
            sont generalement pris en compte a hauteur de 70 % pour tenir
            compte des charges et du risque de vacance locative.
          </p>

          <h3>Les charges et credits en cours</h3>
          <p>
            Chaque credit en cours (credit auto, credit a la consommation,
            credit renouvelable) reduit mecaniquement la mensualite disponible
            pour un nouveau pret. C&apos;est pourquoi il est souvent judicieux de
            solder ses credits a la consommation avant de deposer un dossier de
            pret immobilier. Les pensions alimentaires versees sont egalement
            comptees dans les charges.
          </p>

          <h3>Le taux d&apos;interet</h3>
          <p>
            Un taux d&apos;interet plus bas permet d&apos;emprunter davantage pour la
            meme mensualite. Chaque dixieme de point compte : sur un pret de
            250 000 euros sur 20 ans, une difference de 0,3 % de taux
            represente environ 10 000 euros sur le cout total et modifie
            significativement la capacite d&apos;emprunt. Comparer les offres de
            plusieurs banques ou faire appel a un courtier peut vous permettre
            de gagner en capacite d&apos;emprunt.
          </p>

          <h3>La duree du pret</h3>
          <p>
            Allonger la duree du pret permet de reduire la mensualite et donc
            d&apos;emprunter un montant plus important. Passer de 20 a 25 ans peut
            augmenter la capacite d&apos;emprunt de 15 a 20 %. Cependant, la
            duree maximale autorisee par le HCSF est de 25 ans (27 ans en cas
            d&apos;achat sur plan en VEFA ou de travaux representant au moins 25 %
            du cout de l&apos;operation). Attention toutefois : une duree plus
            longue signifie egalement un cout total du credit plus eleve.
          </p>

          <h3>L&apos;assurance emprunteur</h3>
          <p>
            Le taux d&apos;assurance emprunteur impacte directement la capacite
            d&apos;emprunt car, depuis les regles du HCSF, la mensualite
            d&apos;assurance est incluse dans le calcul du taux d&apos;endettement a
            35 %. Reduire son taux d&apos;assurance en faisant jouer la delegation
            (loi Lemoine) permet d&apos;augmenter la mensualite disponible pour le
            remboursement du capital, et donc d&apos;emprunter davantage. Un
            emprunteur jeune et en bonne sante peut obtenir un taux
            d&apos;assurance inferieur a 0,10 %, contre 0,30 a 0,40 % pour les
            contrats de groupe bancaires.
          </p>

          <h2>Conseils pour augmenter sa capacite d&apos;emprunt</h2>
          <p>
            Si votre capacite d&apos;emprunt est insuffisante pour votre projet,
            plusieurs strategies peuvent vous aider a l&apos;ameliorer de maniere
            significative.
          </p>
          <p>
            <strong>Soldez vos credits en cours.</strong> C&apos;est le levier le
            plus immediat. Rembourser un credit auto de 300 euros par mois
            libere immediatement 300 euros de mensualite, ce qui peut
            representer 50 000 a 60 000 euros de capacite d&apos;emprunt
            supplementaire sur 20 ans. Si vous disposez d&apos;une epargne
            suffisante, le calcul est souvent tres favorable.
          </p>
          <p>
            <strong>Allongez la duree du pret.</strong> Passer de 20 a 25 ans
            reduit la mensualite et augmente le capital empruntable. Cela
            augmente aussi le cout total du credit, mais cette strategie peut
            etre pertinente si elle vous permet d&apos;acceder a un bien mieux
            situe ou plus grand, dont la plus-value potentielle compensera le
            surcout d&apos;interets.
          </p>
          <p>
            <strong>Negociez le taux d&apos;interet.</strong> Faites jouer la
            concurrence entre les banques. Un courtier peut souvent obtenir des
            taux plus bas grace aux volumes qu&apos;il apporte aux etablissements
            partenaires. Chaque dixieme de point gagne sur le taux augmente
            votre capacite d&apos;emprunt.
          </p>
          <p>
            <strong>Optimisez votre assurance emprunteur.</strong> La delegation
            d&apos;assurance (choisir un assureur externe a la banque) peut diviser
            le cout de l&apos;assurance par deux, voire par trois. Cette economie
            se traduit directement en capacite d&apos;emprunt supplementaire puisque
            l&apos;assurance est incluse dans le calcul du taux d&apos;endettement.
          </p>
          <p>
            <strong>Integrez un co-emprunteur.</strong> Emprunter a deux permet
            de cumuler les revenus et donc d&apos;augmenter considerablement la
            capacite d&apos;emprunt. C&apos;est particulierement avantageux lorsque les
            deux emprunteurs disposent de revenus reguliers et stables.
          </p>
          <p>
            <strong>Utilisez les prets aides.</strong> Le Pret a Taux Zero (PTZ)
            pour les primo-accedants ou le pret Action Logement ne sont
            generalement pas comptabilises dans le taux d&apos;endettement (ou
            alors partiellement). Ils permettent donc de completer votre
            financement sans grever votre capacite d&apos;emprunt bancaire
            classique. Renseignez-vous egalement sur les aides locales proposees
            par votre commune ou votre departement.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="capacite-bottom" format="horizontal" />
      </div>
    </>
  );
}
