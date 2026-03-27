import OutilCard from "@/components/OutilCard";
import { outils, categories } from "@/data/outils";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

const faqQuestions = [
  {
    question: "Les outils de BonCalcul.fr sont-ils vraiment gratuits ?",
    answer:
      "Oui, tous nos outils de calcul sont 100% gratuits, sans inscription et sans limite d'utilisation. Nous nous finançons grâce à la publicité non intrusive.",
  },
  {
    question: "Les résultats sont-ils fiables ?",
    answer:
      "Nos calculateurs utilisent les formules officielles et les taux en vigueur (barèmes fiscaux, taux de cotisations sociales, grilles IMC de l'OMS). Les résultats sont indicatifs et régulièrement mis à jour.",
  },
  {
    question: "Mes données personnelles sont-elles collectées ?",
    answer:
      "Non. Tous les calculs sont effectués directement dans votre navigateur. Aucune donnée personnelle n'est envoyée à nos serveurs ni stockée.",
  },
  {
    question: "Comment est calculée la mensualité d'un prêt immobilier ?",
    answer:
      "La mensualité est calculée avec la formule d'annuité constante : M = C × t / (1 - (1+t)^(-n)), où C est le capital emprunté, t le taux mensuel et n le nombre de mensualités. Notre simulateur intègre aussi l'assurance emprunteur.",
  },
  {
    question: "Quelle est la différence entre salaire brut et salaire net ?",
    answer:
      "Le salaire brut est la rémunération avant déduction des cotisations sociales (retraite, maladie, chômage). Le salaire net est ce que vous recevez sur votre compte. En France, les cotisations salariales représentent environ 22 à 25% du brut pour un non-cadre et 23 à 26% pour un cadre.",
  },
  {
    question: "Les frais de notaire sont-ils les mêmes partout en France ?",
    answer:
      "Non. Les droits de mutation varient selon le département (la plupart appliquent un taux de 4.5%, certains 3.8%). De plus, les frais diffèrent entre l'ancien (7-8% du prix) et le neuf (2-3% du prix). Notre calculateur prend en compte ces différences.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculez tout, <span className="text-blue-600">simplement.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simulateurs et outils de calcul gratuits pour vos finances, vos
            projets immobiliers et votre quotidien. Résultats instantanés, sans
            inscription.
          </p>
        </div>
      </section>

      {/* Outils par catégorie */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <AdBanner slot="home-top" format="horizontal" className="mb-8" />

        {categories.map((cat) => {
          const outilsCat = outils.filter((o) => o.categorie === cat.id);
          if (outilsCat.length === 0) return null;
          return (
            <div key={cat.id} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {outilsCat.map((outil) => (
                  <OutilCard key={outil.slug} outil={outil} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <AdBanner slot="home-mid" format="auto" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>Pourquoi utiliser BonCalcul.fr ?</h2>
          <p>
            Que vous soyez en train de préparer un achat immobilier, de
            négocier votre salaire ou simplement de vérifier un montant TTC,
            avoir accès à des outils de calcul fiables fait toute la
            différence. <strong>BonCalcul.fr</strong> met à votre disposition
            une collection de simulateurs et calculateurs conçus pour être
            simples, rapides et précis.
          </p>

          <h3>Des outils financiers pour vos projets</h3>
          <p>
            Notre <strong>simulateur de prêt immobilier</strong> vous permet de
            calculer vos mensualités en quelques secondes, en tenant compte du
            taux d'intérêt, de la durée du prêt et de l'assurance emprunteur.
            Vous obtenez un tableau d'amortissement complet et le coût total de
            votre crédit. Un outil indispensable avant de pousser la porte de
            votre banque.
          </p>
          <p>
            Le <strong>convertisseur salaire brut/net</strong> est l'un des
            outils les plus recherchés en France. Que vous soyez candidat en
            entretien d'embauche, salarié qui vérifie sa fiche de paie ou
            employeur qui prépare une offre, notre calculateur utilise les taux
            de cotisations à jour pour vous donner une estimation précise en un
            clic.
          </p>
          <p>
            Les <strong>frais de notaire</strong> représentent souvent une
            surprise pour les acheteurs immobiliers. Notre outil décompose les
            frais en détail : droits de mutation, émoluments du notaire, frais
            de formalités et contributions de sécurité immobilière. Vous saurez
            exactement combien prévoir en plus du prix d'achat.
          </p>

          <h3>Calculs du quotidien</h3>
          <p>
            Le <strong>calcul de TVA</strong> est un besoin quotidien pour les
            entrepreneurs, auto-entrepreneurs et comptables. Convertissez
            instantanément un montant HT en TTC (et inversement) avec tous les
            taux français : 20%, 10%, 5,5% et 2,1%.
          </p>
          <p>
            Côté santé, notre <strong>calculateur d'IMC</strong> (Indice de
            Masse Corporelle) vous situe sur l'échelle de l'OMS et vous aide à
            comprendre ce que signifie votre résultat, de l'insuffisance
            pondérale à l'obésité.
          </p>

          <h3>Gratuit, rapide, respectueux de votre vie privée</h3>
          <p>
            Tous les calculs sont effectués{" "}
            <strong>directement dans votre navigateur</strong>. Aucune donnée
            n'est envoyée à nos serveurs. Pas d'inscription, pas de compte à
            créer, pas de limite d'utilisation. Nos outils sont disponibles
            24h/24 et fonctionnent sur ordinateur, tablette et mobile.
          </p>
          <p>
            BonCalcul.fr est un projet indépendant, financé par la publicité
            non intrusive. Nous ajoutons régulièrement de nouveaux outils pour
            couvrir toujours plus de besoins du quotidien.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Questions fréquentes
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
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {q.answer}
              </p>
            </details>
          ))}
        </div>

        <AdBanner slot="home-bottom" format="horizontal" className="mt-8" />
      </section>
    </>
  );
}
