import OutilCard from "@/components/OutilCard";
import TablerIcon from "@/components/TablerIcon";
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
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-10 md:py-16">
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
      <section id="outils" className="max-w-6xl mx-auto px-4 py-8 md:py-12 scroll-mt-16">
        <AdBanner slot="home-after-hero" format="horizontal" className="mb-8" />

        {categories.map((cat) => {
          const outilsCat = outils.filter((o) => o.categorie === cat.id);
          if (outilsCat.length === 0) return null;
          return (
            <div key={cat.id} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TablerIcon name={cat.icon} size={26} className="text-blue-600" /> {cat.label}
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
      <section className="max-w-5xl mx-auto px-4 py-12">
        <AdBanner slot="home-after-tools" format="auto" className="mb-8" />

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Tous vos calculs du quotidien au même endroit
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            BonCalcul.fr regroupe aujourd'hui <strong className="text-gray-700">plus de 30 outils de calcul gratuits</strong> couvrant
            la finance, l'immobilier, l'emploi, la santé et l'automobile. Et ce n'est qu'un début : de nouveaux calculateurs sont ajoutés régulièrement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <TablerIcon name="coins" size={22} className="text-blue-600" />
              <h3 className="font-bold text-gray-800">Finance & Immobilier</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simulez votre <strong>prêt immobilier</strong> avec tableau d'amortissement,
              estimez vos <strong>frais de notaire</strong> par département,
              calculez votre <strong>capacité d'emprunt</strong> (règle HCSF 35%),
              convertissez votre <strong>salaire brut en net</strong> 2026,
              projetez vos <strong>intérêts composés</strong>,
              simulez votre <strong>impôt sur le revenu</strong> et calculez vos <strong>indemnités de licenciement</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <TablerIcon name="heartbeat" size={22} className="text-blue-600" />
              <h3 className="font-bold text-gray-800">Santé & Bien-être</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Calculez votre <strong>IMC</strong>, estimez votre <strong>poids idéal</strong> selon 4 formules,
              évaluez votre <strong>masse grasse (IMG)</strong>,
              déterminez vos <strong>besoins caloriques</strong> journaliers,
              suivez votre <strong>cycle d'ovulation</strong> et votre <strong>date d'accouchement</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <TablerIcon name="briefcase" size={22} className="text-blue-600" />
              <h3 className="font-bold text-gray-800">Emploi & Juridique</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simulez votre <strong>allocation chômage (ARE)</strong>,
              calculez le <strong>coût d'un salarié</strong> pour l'employeur,
              estimez une <strong>pension alimentaire</strong>,
              vos <strong>heures supplémentaires</strong> et consultez le <strong>SMIC 2026</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <TablerIcon name="building-bank" size={22} className="text-blue-600" />
              <h3 className="font-bold text-gray-800">Immobilier avancé</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Calculez la <strong>rentabilité locative</strong> de votre investissement,
              estimez votre <strong>plus-value immobilière</strong> et l'impôt associé,
              mesurez la <strong>surface Carrez</strong>,
              simulez un <strong>crédit consommation</strong> ou un <strong>rachat de crédit</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <TablerIcon name="home" size={22} className="text-blue-600" />
              <h3 className="font-bold text-gray-800">Quotidien & Auto</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Calcul de TVA</strong> HT/TTC, <strong>pourcentages</strong>,
              <strong> conversion d'unités</strong>, <strong>durée entre deux dates</strong>,
              <strong> calcul d'âge</strong> exact, <strong>consommation d'essence</strong> en L/100km
              et <strong>coût réel au kilomètre</strong> de votre véhicule.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <TablerIcon name="lock" size={22} className="text-blue-600" />
              <h3 className="font-bold text-gray-800">Gratuit & respectueux de votre vie privée</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tous les calculs sont effectués <strong>directement dans votre navigateur</strong>.
              Aucune donnée envoyée à nos serveurs. Pas d'inscription, pas de limite, disponible
              24h/24 sur tous vos appareils.
            </p>
          </div>
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

        <AdBanner slot="home-after-faq" format="horizontal" className="mt-8" />
      </section>
    </>
  );
}
