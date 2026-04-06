import type { Metadata } from "next";
import SimulateurPTZ from "./SimulateurPTZ";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Simulateur PTZ 2026 — Calculez votre Pret a Taux Zero",
  description:
    "Simulateur PTZ 2026 gratuit : calculez votre eligibilite au Pret a Taux Zero, le montant du PTZ et l'economie realisee. Primo-accedants, zones A, B, C. Resultat instantane.",
  keywords: [
    "simulateur PTZ 2026",
    "pret a taux zero",
    "PTZ 2026",
    "primo-accedant",
    "pret immobilier gratuit",
    "aide achat immobilier",
    "PTZ zones ABC",
    "eligibilite PTZ",
    "montant PTZ",
    "calculateur PTZ",
  ],
  openGraph: {
    title: "Simulateur PTZ 2026 — Calculez votre Pret a Taux Zero - BonCalcul.fr",
    description:
      "Simulateur PTZ 2026 gratuit : verifiez votre eligibilite et calculez le montant de votre Pret a Taux Zero.",
    url: "https://www.boncalcul.fr/outils/simulateur-ptz-2026",
    type: "website",
    locale: "fr_FR",
    siteName: "BonCalcul.fr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simulateur PTZ 2026 - BonCalcul.fr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur PTZ 2026 — Pret a Taux Zero",
    description:
      "Calculez votre eligibilite et le montant de votre PTZ 2026 gratuitement.",
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/simulateur-ptz-2026",
  },
};

const faqQuestions = [
  {
    question: "Qui peut beneficier du PTZ en 2026 ?",
    answer:
      "Le PTZ est reserve aux primo-accedants, c'est-a-dire aux personnes qui n'ont pas ete proprietaires de leur residence principale au cours des deux dernieres annees. Il est soumis a des plafonds de ressources qui varient selon la zone geographique du bien et le nombre de personnes dans le foyer. Le revenu fiscal de reference de l'annee N-2 est pris en compte.",
  },
  {
    question: "Quelles sont les zones A, B1, B2 et C du PTZ ?",
    answer:
      "Les zones correspondent a la tension du marche immobilier local. La zone A bis regroupe Paris et sa proche banlieue, la zone A les grandes agglomerations comme Lyon, Marseille, Lille ou Montpellier. La zone B1 comprend les villes de plus de 250 000 habitants, la zone B2 les villes de 50 000 a 250 000 habitants, et la zone C le reste du territoire. Les plafonds de ressources et la quotite du PTZ dependent de cette classification.",
  },
  {
    question: "Quels sont les plafonds de revenus pour le PTZ 2026 ?",
    answer:
      "Les plafonds varient selon la zone et la taille du foyer. Par exemple, pour un couple (2 personnes) : 73 500 euros en zone A bis/A, 51 750 euros en zone B1, 47 250 euros en zone B2, et 42 750 euros en zone C. Le revenu fiscal de reference de l'annee N-2 est compare a ces seuils pour determiner l'eligibilite.",
  },
  {
    question: "Comment est calcule le montant du PTZ ?",
    answer:
      "Le montant du PTZ depend de la quotite appliquee au prix de l'operation immobiliere. En zone A bis/A, la quotite est de 50 % pour un bien neuf et 40 % pour un ancien avec travaux. En zone B1, elle est de 40 % dans les deux cas. En zones B2 et C, la quotite est de 20 %. Le montant est ensuite plafonne selon la zone et la taille du foyer. Le PTZ ne peut pas financer la totalite de l'operation et doit etre complete par un ou plusieurs prets.",
  },
  {
    question: "Peut-on combiner le PTZ avec un pret immobilier classique ?",
    answer:
      "Oui, le PTZ doit obligatoirement etre combine avec un ou plusieurs prets (pret bancaire classique, pret Action Logement, pret epargne logement, etc.). Le PTZ ne peut pas representer plus de 50 % du cout total de l'operation. L'avantage est que le PTZ ne genere aucun interet ni frais de dossier : les interets sont pris en charge par l'Etat. Cela permet de reduire significativement le cout total de votre financement immobilier.",
  },
];

export default function SimulateurPTZ2026Page() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Simulateur PTZ 2026",
          description:
            "Calculez votre eligibilite au Pret a Taux Zero 2026, le montant du PTZ et l'economie realisee. Gratuit et instantane.",
          url: "https://www.boncalcul.fr/outils/simulateur-ptz-2026",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* En-tete */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur PTZ 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Verifiez votre eligibilite au Pret a Taux Zero et calculez le
            montant auquel vous avez droit. Gratuit, instantane, sans
            inscription.
          </p>
        </div>
      </section>

      {/* Outil */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <SimulateurPTZ />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur le PTZ 2026
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
          Tout comprendre sur le Pret a Taux Zero
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que le PTZ ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>Pret a Taux Zero (PTZ)</strong> est un dispositif de l&apos;Etat
              permettant aux <strong>primo-accedants</strong> de financer une partie de
              leur achat immobilier sans payer d&apos;interets. Les interets sont
              integralement pris en charge par l&apos;Etat, ce qui reduit
              significativement le cout total du financement. Le PTZ ne peut pas
              financer la totalite de l&apos;acquisition : il doit obligatoirement
              etre complete par un ou plusieurs autres prets (pret bancaire
              classique, pret Action Logement, pret epargne logement, etc.).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Conditions d&apos;eligibilite 2026</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour obtenir le <strong>PTZ en 2026</strong>, vous devez remplir
              plusieurs conditions : ne pas avoir ete proprietaire de votre
              residence principale au cours des <strong>deux dernieres annees</strong>,
              respecter les <strong>plafonds de ressources</strong> correspondant
              a votre zone geographique et a la composition de votre foyer, et
              acheter un <strong>bien neuf</strong> ou un <strong>logement ancien
              avec travaux</strong> representant au moins 25 % du cout total.
              Le logement doit devenir votre residence principale dans un delai
              d&apos;un an apres l&apos;achat.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les zones A bis, A, B1, B2 et C</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le <strong>zonage geographique</strong> determine les plafonds de
              ressources, la quotite du PTZ et le plafond de l&apos;operation.
              La <strong>zone A bis</strong> (Paris et communes limitrophes) et
              la <strong>zone A</strong> (grandes metropoles) offrent les quotites
              les plus elevees (jusqu&apos;a 50 % pour le neuf) car les prix
              immobiliers y sont les plus tendus. La <strong>zone B1</strong> couvre
              les grandes villes et certaines communes d&apos;Ile-de-France.
              Les <strong>zones B2 et C</strong> correspondent aux villes moyennes
              et aux zones rurales, avec des quotites de 20 %.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Montant et quotite du PTZ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>quotite</strong> est le pourcentage du prix du bien
              pouvant etre finance par le PTZ. Elle varie selon la zone et le
              type de bien : <strong>50 %</strong> pour un logement neuf en zone
              A bis/A, <strong>40 %</strong> en zone B1, et <strong>20 %</strong> en
              zones B2/C. Pour l&apos;ancien avec travaux, la quotite est de
              40 % en zones A bis/A et B1, et 20 % en zones B2/C. Le montant
              est ensuite plafonne selon le nombre de personnes du foyer et la
              zone. Ce mecanisme permet d&apos;adapter l&apos;aide a la realite
              des marches locaux.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Duree de remboursement du PTZ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>duree de remboursement</strong> du PTZ varie de 20 a
              25 ans selon les revenus du foyer. Elle comprend une <strong>periode
              de differe</strong> pendant laquelle vous ne remboursez pas le PTZ
              (seuls les autres prets sont rembourses), suivie d&apos;une
              <strong> periode de remboursement</strong>. Plus vos revenus sont
              modestes, plus le differe est long (jusqu&apos;a 15 ans), ce qui
              allegue vos mensualites totales durant les premieres annees. Ce
              mecanisme de differe est un avantage majeur du PTZ par rapport a
              un pret classique.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Combiner PTZ et pret classique</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le PTZ doit etre combine avec au moins un <strong>pret
              complementaire</strong>. Le montage le plus courant associe PTZ +
              pret bancaire classique, mais vous pouvez aussi ajouter un{" "}
              <strong>pret Action Logement</strong>, un <strong>PEL</strong> ou
              un <strong>pret conventione</strong>. L&apos;avantage est double :
              le PTZ reduit le montant emprunte au taux du marche, et son
              differe de remboursement allege vos mensualites initiales. Utilisez
              notre{" "}
              <a
                href="/outils/simulateur-pret-immobilier"
                className="text-blue-600 hover:underline"
              >
                simulateur de pret immobilier
              </a>{" "}
              pour estimer la mensualite de votre pret complementaire et notre{" "}
              <a
                href="/outils/calcul-capacite-emprunt"
                className="text-blue-600 hover:underline"
              >
                calculateur de capacite d&apos;emprunt
              </a>{" "}
              pour verifier votre budget total.
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
