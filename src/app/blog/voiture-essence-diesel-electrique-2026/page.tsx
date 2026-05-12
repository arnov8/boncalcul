// FILE: src/app/blog/voiture-essence-diesel-electrique-2026/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Voiture essence vs diesel vs électrique : le vrai calcul au kilomètre en 2026",
  description:
    "Coût carburant, révisions, batterie, bonus écologique, recharge : le comparatif complet essence / diesel / électrique sur 150 000 km de vie d'un véhicule, avec tableau chiffré.",
  keywords: [
    "essence vs diesel vs électrique",
    "coût kilomètre voiture 2026",
    "voiture électrique rentable",
    "comparatif motorisation voiture",
    "coût recharge électrique",
    "diesel vs essence entretien",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/voiture-essence-diesel-electrique-2026" },
  openGraph: {
    title: "Voiture essence vs diesel vs électrique : le vrai calcul au kilomètre en 2026",
    description: "Le comparatif chiffré complet des 3 motorisations sur 150 000 km de vie d'un véhicule en 2026.",
    url: "https://www.boncalcul.fr/blog/voiture-essence-diesel-electrique-2026",
    type: "article",
    locale: "fr_FR",
  },
};

export default function EssenceDieselElectriqueArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Voiture essence vs diesel vs électrique : le vrai calcul au kilomètre en 2026",
          description: "Le comparatif chiffré complet des 3 motorisations sur 150 000 km de vie d'un véhicule en 2026.",
          url: "https://www.boncalcul.fr/blog/voiture-essence-diesel-electrique-2026",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Auto &amp; Transport</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voiture essence vs diesel vs électrique : le vrai calcul au kilomètre en 2026
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            L&apos;électrique est moins cher à la pompe, mais plus cher à l&apos;achat. Le diesel coûte
            moins en carburant, mais plus en entretien. L&apos;essence reste le choix par défaut — mais
            est-ce vraiment le plus économique ? Voici le calcul complet sur la durée de vie d&apos;un véhicule.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2>Le coût carburant/énergie au kilomètre</h2>
          <p>
            Commençons par le plus visible. Sur la base des prix moyens de mai 2026 :
          </p>
          <ul>
            <li>
              <strong>Essence (SP95-E10)</strong> : 1,75 €/L × 7 L/100 km = <strong>12,25 c/km</strong>
            </li>
            <li>
              <strong>Diesel (B7)</strong> : 1,65 €/L × 5 L/100 km = <strong>8,25 c/km</strong>
            </li>
            <li>
              <strong>Électrique (tarif domicile)</strong> : 0,25 €/kWh × 16 kWh/100 km = <strong>4,00 c/km</strong>
            </li>
          </ul>
          <p>
            L&apos;électrique est trois fois moins cher au kilomètre en énergie que l&apos;essence.
            Mais ce n&apos;est qu&apos;un poste parmi d&apos;autres.
          </p>

          <h2>Les révisions et l&apos;entretien : l&apos;avantage discret de l&apos;électrique</h2>
          <p>
            Une voiture diesel a un moteur plus complexe qu&apos;un moteur essence : distribution, filtre à
            particules (FAP), vanne EGR, injecteurs haute pression... Les révisions sont plus fréquentes et
            plus coûteuses. Comptez <strong>800 à 1 200 € par an</strong> d&apos;entretien en moyenne sur un
            diesel récent, contre 500 à 750 € pour une essence équivalente.
          </p>
          <p>
            L&apos;électrique, lui, n&apos;a pas de vidange, pas de distribution, pas d&apos;embrayage sur la
            plupart des modèles. L&apos;entretien se limite aux plaquettes (régénération), aux pneus et aux
            fluides. Budget moyen : <strong>250 à 400 € par an</strong>. Sur 150 000 km (10 ans à 15 000 km/an),
            l&apos;écart avec le diesel peut atteindre 8 000 €.
          </p>

          <h2>La batterie électrique : l&apos;inconnue à 10 000 €</h2>
          <p>
            C&apos;est le sujet qui cristallise les craintes sur l&apos;électrique — souvent de manière
            exagérée, mais pas totalement infondée. Les fabricants garantissent généralement la batterie
            8 ans ou 160 000 km avec une capacité minimale de 70 %. Dans la réalité, la plupart des
            batteries atteignent 120 000 à 160 000 km sans remplacement.
          </p>
          <p>
            Mais si un remplacement est nécessaire, la facture est lourde : <strong>entre 8 000 et 14 000 €</strong>
            selon le modèle, les prix baissant progressivement avec les nouvelles générations. Pour une
            voiture achetée neuve et gardée 10 ans, ce risque est réel mais minoritaire. Pour une voiture
            électrique d&apos;occasion, il faut vérifier l&apos;état de santé de la batterie avant d&apos;acheter.
          </p>

          <h2>Bonus écologique et aides à l&apos;achat en 2026</h2>
          <p>
            En 2026, le bonus écologique pour un véhicule électrique neuf atteint <strong>4 000 €</strong>
            pour un ménage standard, et jusqu&apos;à <strong>7 000 €</strong> sous conditions de revenus
            modestes (+ super-bonus). Le leasing social à 100 €/mois pour les ménages éligibles peut
            également fortement changer l&apos;équation. Ces aides réduisent directement le coût
            d&apos;acquisition — et donc la dépréciation effective supportée par l&apos;acheteur.
          </p>

          <h2>Recharge à domicile vs borne publique</h2>
          <p>
            Recharger à domicile (tarif heures creuses ~0,16 €/kWh) revient à environ <strong>2,56 c/km</strong>
            pour 16 kWh/100. Recharger sur une borne rapide publique (0,40-0,60 €/kWh) monte à
            <strong>6,4 à 9,6 c/km</strong> — presque au niveau du diesel. L&apos;économie de l&apos;électrique
            est donc fortement conditionnée à la possibilité de recharger chez soi ou au bureau.
          </p>

          <h2>Comparatif complet sur 150 000 km de vie du véhicule</h2>
          <p>
            Hypothèses : véhicule de segment C (compacte familiale), 15 000 km/an, 10 ans de vie.
            Prix d&apos;achat neufs : essence 28 000 €, diesel 30 000 €, électrique 36 000 € (après bonus 4 000 €
            = 32 000 € net). Valeur résiduelle à 10 ans estimée : 4 500 € / 5 000 € / 8 000 €.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Poste de coût (10 ans / 150 000 km)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Essence</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Diesel</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Électrique</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Dépréciation nette</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">23 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">25 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">24 000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Carburant / énergie</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">18 375 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">12 375 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">6 000 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Entretien / révisions</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">6 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">10 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">3 500 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Assurance</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">9 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">9 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">9 500 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Pneumatiques</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">900 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">900 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 200 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Batterie (risque, provisionné)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">—</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">—</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">2 000 €*</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-200 px-4 py-2 font-bold">TOTAL sur 10 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">58 275 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">57 775 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">46 200 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-bold">Coût au kilomètre</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">38,8 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">38,5 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">30,8 c/km</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 italic">
            * Provision pour risque de remplacement partiel de batterie (probabilité ~20-25% avant 150 000 km).
            Prix carburants et énergie : mai 2026. Ces chiffres sont des estimations moyennes — votre situation
            peut varier selon les tarifs d&apos;assurance, le kilométrage réel et les prix énergétiques futurs.
          </p>

          <h2>Le verdict : l&apos;électrique gagne sur la durée... avec des conditions</h2>
          <p>
            Sur 150 000 km, l&apos;électrique est <strong>12 000 € moins cher que l&apos;essence</strong> dans
            notre scénario. Mais ce gain est conditionné à :
          </p>
          <ul>
            <li>Un kilométrage annuel significatif (moins de 8 000 km/an, l&apos;écart se réduit fortement)</li>
            <li>La possibilité de recharger à domicile ou au bureau (tarif préférentiel)</li>
            <li>Un maintien des aides à l&apos;achat à leur niveau actuel</li>
          </ul>
          <p>
            Essence et diesel se retrouvent quasiment à égalité sur la durée — le diesel ne dégage plus
            l&apos;avantage qu&apos;il avait dans les années 2000, notamment à cause de ses coûts d&apos;entretien
            plus élevés et du malus de dépréciation lié à l&apos;image de la motorisation.
          </p>

        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-consommation-essence"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de consommation</p>
            <p className="text-blue-100 text-sm mt-1">Calculez votre consommation réelle et comparez les motorisations</p>
          </Link>
          <Link
            href="/outils/cout-km-voiture"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Coût au kilomètre</p>
            <p className="text-gray-500 text-sm mt-1">Estimez le coût total de possession de votre véhicule</p>
          </Link>
        </div>
      </article>
    </>
  );
}
