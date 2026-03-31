import type { Metadata } from "next";
import Link from "next/link";
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
        <CalculCapaciteEmprunt />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
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

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Article associe */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <Link
          href="/blog/comment-calculer-capacite-emprunt-2026"
          className="block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition group"
        >
          <p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
            Article associe
          </p>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
            Comment calculer sa capacite d&apos;emprunt en 2026 : le guide complet
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Decouvrez comment calculer votre capacite d&apos;emprunt immobilier : regle des 35%, facteurs cles et astuces pour emprunter plus.
          </p>
        </Link>
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout comprendre sur la capacite d&apos;emprunt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que la capacite d&apos;emprunt ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>capacite d&apos;emprunt</strong> (ou capacite d&apos;endettement) designe le montant maximum qu&apos;un menage peut emprunter pour financer un projet immobilier, tout en conservant des charges compatibles avec ses revenus. C&apos;est le premier indicateur a calculer avant toute recherche de bien : il evite de viser trop haut ou de se limiter inutilement, et donne une base solide pour negocier avec les banques et agents immobiliers.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Formule et methode de calcul</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Le <strong>HCSF</strong> impose que vos charges de credit ne depassent pas <strong>35 % de vos revenus nets</strong>. La mensualite max = Revenus nets x 0,35 - Credits en cours. Le capital empruntable se deduit par la formule d&apos;annuite inversee :
            </p>
            <p className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center font-mono text-sm mb-3">
              C = M &times; (1 - (1 + t/12)<sup>-n&times;12</sup>) / (t/12)
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Exemple</strong> : un couple gagnant 5 000 euros nets/mois avec un credit auto de 300 euros dispose de 1 450 euros de mensualite. A 3,5 % sur 20 ans, il peut emprunter environ <strong>240 000 euros</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Facteurs cles : revenus et charges</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les banques privilegient les <strong>revenus reguliers</strong> : CDI (apres periode d&apos;essai), pensions, fonction publique. Les revenus variables sont ponderes sur plusieurs annees, les revenus fonciers retenus a 70 %. Chaque <strong>credit en cours</strong> (auto, consommation, renouvelable) et les pensions alimentaires reduisent mecaniquement la mensualite disponible. Solder ses credits avant de deposer un dossier immobilier est souvent judicieux.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Taux, duree et assurance</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Un <strong>taux d&apos;interet</strong> plus bas augmente le capital empruntable : 0,3 % d&apos;ecart sur 250 000 euros/20 ans represente ~10 000 euros. <strong>Allonger la duree</strong> de 20 a 25 ans augmente la capacite de 15-20 % (max HCSF : 25 ans, 27 ans en VEFA). L&apos;<strong>assurance emprunteur</strong> est incluse dans le taux d&apos;endettement a 35 % : la <strong>delegation d&apos;assurance</strong> (loi Lemoine) peut diviser son cout par 2 ou 3, liberant de la capacite d&apos;emprunt supplementaire.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">Conseils pour augmenter sa capacite d&apos;emprunt</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Soldez vos credits en cours</strong> : rembourser 300 euros/mois de credit auto libere 50 000-60 000 euros de capacite sur 20 ans. <strong>Allongez la duree</strong> jusqu&apos;a 25 ans pour reduire la mensualite, meme si le cout total augmente. <strong>Negociez le taux</strong> en comparant plusieurs banques ou via un courtier. <strong>Optimisez l&apos;assurance</strong> par la delegation, qui peut diviser le cout par 2 ou 3. <strong>Integrez un co-emprunteur</strong> pour cumuler les revenus. <strong>Utilisez les prets aides</strong> : le PTZ et le pret Action Logement ne sont generalement pas comptabilises dans le taux d&apos;endettement, completant votre financement sans grever votre capacite bancaire.
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
