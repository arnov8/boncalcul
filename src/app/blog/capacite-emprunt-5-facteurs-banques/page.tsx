// FILE: src/app/blog/capacite-emprunt-5-facteurs-banques/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Capacité d'emprunt : les 5 facteurs que les banques examinent vraiment",
  description:
    "Taux d'endettement 35%, reste à vivre, CDI vs CDD, apport minimum et taux d'usure : tout ce que les banques analysent avant de vous accorder un prêt immobilier.",
  keywords: [
    "capacité emprunt immobilier",
    "taux endettement 35%",
    "reste à vivre banque",
    "apport minimum immobilier",
    "calcul capacité emprunt 2026",
    "HCSF règles emprunt",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/capacite-emprunt-5-facteurs-banques",
  },
  openGraph: {
    title: "Capacité d'emprunt : les 5 facteurs que les banques examinent vraiment",
    description:
      "Taux d'endettement, reste à vivre, stabilité emploi, apport et taux d'usure : le vrai mode d'emploi du dossier bancaire.",
    url: "https://www.boncalcul.fr/blog/capacite-emprunt-5-facteurs-banques",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleCapaciteEmprunt() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Capacité d'emprunt : les 5 facteurs que les banques examinent vraiment",
          description:
            "Taux d'endettement 35%, reste à vivre, CDI vs CDD, apport minimum et taux d'usure : tout ce que les banques analysent avant de vous accorder un prêt.",
          url: "https://www.boncalcul.fr/blog/capacite-emprunt-5-facteurs-banques",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <span>/</span>
            <span>Immobilier</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Capacité d'emprunt : les 5 facteurs que les banques examinent
            vraiment
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Une banque ne regarde pas uniquement vos revenus pour décider de vous
            prêter de l'argent. Elle passe votre dossier au crible selon cinq
            critères précis — et certains d'entre eux peuvent faire toute la
            différence entre un refus et un accord.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray max-w-none">
          <h2>Facteur n°1 : le taux d'endettement (plafonné à 35% TAEG inclus)</h2>
          <p>
            C'est le critère le plus connu, et pourtant il est souvent mal
            compris. Depuis les recommandations du HCSF (Haut Conseil de
            Stabilité Financière) appliquées à partir de 2022, les banques ne
            peuvent pas accorder un prêt si votre <strong>taux d'endettement
            dépasse 35%</strong> — assurance emprunteur incluse.
          </p>
          <p>
            La formule est simple : <em>(total des charges de crédit mensuelles
            ÷ revenus nets mensuels) × 100</em>. Si vous gagnez 4 000 € nets à
            deux et que vous avez déjà un crédit voiture à 300 €/mois, votre
            capacité de remboursement mensuelle maximale pour un prêt immobilier
            est de <strong>1 100 €</strong> (35% de 4 000 € = 1 400 € − 300 €
            déjà engagés).
          </p>
          <p>
            Ce que peu de gens savent : les banques peuvent déroger à cette règle
            pour <strong>20% de leur production trimestrielle</strong>, en
            priorité pour les primo-accédants. Autrement dit, un dossier
            excellent à 36% peut passer… si la banque n'a pas encore épuisé son
            quota de dérogations.
          </p>

          <h2>Facteur n°2 : le reste à vivre</h2>
          <p>
            Moins visible mais tout aussi scruté : le <strong>reste à vivre</strong>,
            c'est-à-dire ce qu'il vous reste chaque mois une fois les crédits
            payés. Les banques ont des seuils indicatifs, généralement :
          </p>
          <ul>
            <li>
              <strong>~800-900 €</strong> minimum pour une personne seule
            </li>
            <li>
              <strong>~1 200-1 400 €</strong> pour un couple
            </li>
            <li>
              <strong>~150-200 €</strong> supplémentaires par enfant à charge
            </li>
          </ul>
          <p>
            En pratique : Julie, seule avec un enfant de 5 ans, gagne 2 800 €
            nets. Son taux d'endettement maximal lui permettrait théoriquement
            980 € de mensualité. Mais avec ce niveau de revenus, son reste à
            vivre tomberait à 1 820 €, ce qui peut suffire — ou pas, selon la
            banque et la région.
          </p>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>Facteur n°3 : la stabilité de l'emploi (CDI, fonctionnaire vs CDD, indépendant)</h2>
          <p>
            Les banques adorent le CDI période d'essai passée, et encore plus le
            statut de fonctionnaire. Mais ce n'est pas une règle absolue : un
            CDD peut obtenir un prêt s'il est dans le même secteur depuis plus
            de 2 ans, ou si le co-emprunteur est en CDI.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Type de contrat
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Facilité d'obtention
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Points de vigilance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">CDI (hors période d'essai)</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Excellente</td>
                  <td className="border border-gray-200 px-4 py-2">Aucun</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Fonctionnaire titulaire</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Excellente</td>
                  <td className="border border-gray-200 px-4 py-2">Aucun</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">CDI en période d'essai</td>
                  <td className="border border-gray-200 px-4 py-2 text-orange-500 font-semibold">Difficile</td>
                  <td className="border border-gray-200 px-4 py-2">Co-emprunteur en CDI recommandé</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">CDD / intérim</td>
                  <td className="border border-gray-200 px-4 py-2 text-orange-500 font-semibold">Compliquée</td>
                  <td className="border border-gray-200 px-4 py-2">2 ans de bulletins dans le même secteur</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Indépendant / TNS</td>
                  <td className="border border-gray-200 px-4 py-2 text-orange-500 font-semibold">Variable</td>
                  <td className="border border-gray-200 px-4 py-2">3 bilans stables requis, revenu moyen retenu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Facteur n°4 : l'apport personnel (minimum 10%)</h2>
          <p>
            En 2026, rares sont les banques qui accordent un prêt sans apport.
            Le minimum généralement exigé est de <strong>10% du prix d'achat</strong>,
            pour couvrir les frais de notaire (7-8% dans l'ancien) et laisser un
            minimum de liquidités. Pour un bien à 250 000 €, comptez donc au
            moins <strong>25 000 €</strong> d'apport.
          </p>
          <p>
            Un apport plus élevé (15-20%) joue un double rôle : il rassure la
            banque sur votre capacité à épargner, et il réduit le capital
            emprunté — donc la mensualité et le coût total. Certaines banques
            réservent leurs meilleurs taux aux dossiers avec apport supérieur
            à 20%.
          </p>

          <h2>Facteur n°5 : le taux d'usure HCSF et le TAEG</h2>
          <p>
            Le <strong>taux d'usure</strong> est le taux maximum légal
            au-dessus duquel aucune banque ne peut vous prêter. Il est fixé par
            la Banque de France chaque trimestre et inclut tous les frais (taux
            nominal + assurance + frais de dossier). En mai 2026, le taux
            d'usure sur 20 ans et plus se situe autour de <strong>6,18%</strong>.
          </p>
          <p>
            En pratique, ce plafond est rarement atteint pour les profils
            standards aujourd'hui. Mais certains profils spécifiques — assurances
            majorées pour raisons de santé, frais de garantie élevés — peuvent
            se retrouver bloqués par ce plafond sans le savoir.
          </p>

          <h3>Ce que les banques ne disent pas</h3>
          <p>
            Les banques prennent aussi en compte, de manière informelle, la
            qualité de votre <strong>historique de compte</strong> (pas de
            découvert chronique, pas d'incidents de paiement) et votre{" "}
            <strong>épargne résiduelle</strong> après apport — ce qu'on appelle
            l'"épargne de précaution". Un emprunteur qui met tout son apport
            et n'a plus rien en réserve inquiète plus qu'un emprunteur avec 10 000 €
            qui restent sur un livret A après la vente.
          </p>
        </div>

        <AdBanner slot="blog-mid2" format="auto" className="my-8" />

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-capacite-emprunt"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer ma capacité d'emprunt
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Estimez en 30 secondes combien vous pouvez emprunter
            </p>
          </Link>
          <Link
            href="/outils/simulateur-pret-immobilier"
            className="flex-1 block bg-white border-2 border-blue-200 text-blue-700 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Simulateur de prêt immobilier
            </p>
            <p className="text-blue-400 text-sm mt-1">
              Calculez vos mensualités et coût total
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Articles liés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/pret-immobilier-2026-mensualite-cout-total"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                Mensualité et coût total d'un prêt immobilier en 2026
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                La formule, les taux actuels et un comparatif 20 vs 25 ans.
              </p>
            </Link>
            <Link
              href="/blog/ptz-2026-conditions-plafonds-simulation"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                PTZ 2026 : conditions, plafonds et simulation
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Primo-accédants : le PTZ peut booster votre capacité d'emprunt.
              </p>
            </Link>
          </div>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />
      </article>
    </>
  );
}
