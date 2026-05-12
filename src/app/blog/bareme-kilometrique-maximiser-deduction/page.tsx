// FILE: src/app/blog/bareme-kilometrique-maximiser-deduction/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Barème kilométrique 2026 : comment vraiment maximiser sa déduction fiscale",
  description:
    "Frais réels vs déduction forfaitaire 10 % : quand vaut-il mieux opter pour les frais kilométriques ? Calcul du seuil, cas pratique consultant 25 000 km/an, erreurs fréquentes à éviter.",
  keywords: [
    "barème kilométrique 2026 stratégie",
    "frais réels vs forfait 10%",
    "frais kilométriques impôts",
    "optimisation fiscale véhicule",
    "déduction frais domicile travail",
    "frais réels voiture consultant",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/bareme-kilometrique-maximiser-deduction" },
  openGraph: {
    title: "Barème kilométrique 2026 : comment vraiment maximiser sa déduction fiscale",
    description: "Frais réels vs forfait 10 % : la stratégie pour payer moins d'impôts grâce au barème kilométrique 2026.",
    url: "https://www.boncalcul.fr/blog/bareme-kilometrique-maximiser-deduction",
    type: "article",
    locale: "fr_FR",
  },
};

export default function BaremeKmMaximiserArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Barème kilométrique 2026 : comment vraiment maximiser sa déduction fiscale",
          description: "Frais réels vs forfait 10 % : la stratégie pour payer moins d'impôts grâce au barème kilométrique 2026.",
          url: "https://www.boncalcul.fr/blog/bareme-kilometrique-maximiser-deduction",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Fiscalité</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Barème kilométrique 2026 : comment vraiment maximiser sa déduction fiscale
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            L&apos;administration fiscale vous offre deux options pour déduire vos frais professionnels :
            la déduction forfaitaire de 10 % (automatique) ou les frais réels avec le barème kilométrique.
            Choisir la mauvaise option, c&apos;est laisser des centaines — parfois des milliers — d&apos;euros
            sur la table.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2>La déduction forfaitaire 10 % : simple, mais pas toujours optimale</h2>
          <p>
            Par défaut, l&apos;impôt déduit automatiquement 10 % de vos salaires bruts pour couvrir vos frais
            professionnels. Le plafond 2026 est fixé à <strong>14 426 €</strong> par foyer fiscal. Si vous
            gagnez 35 000 € brut, la déduction automatique est de 3 500 €.
          </p>
          <p>
            C&apos;est confortable — mais si vos frais réels dépassent cette somme, vous payez des impôts en
            trop. Et avec le barème kilométrique, les dépasser est souvent possible dès 10 000 km/an.
          </p>

          <h2>Les frais réels : quand basculer vaut vraiment le coup ?</h2>
          <p>
            Le seuil de bascule dépend de deux variables : votre salaire et la puissance fiscale de votre
            véhicule. Plus votre véhicule est puissant, plus le barème est généreux. Plus votre salaire est
            bas, plus le forfait 10 % est faible — et plus les frais réels deviennent intéressants rapidement.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Salaire brut annuel</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Forfait 10 %</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Seuil km pour 5 CV (aller simple)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Seuil km pour 7 CV (aller simple)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">25 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">2 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 8 000 km/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 7 200 km/an</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">35 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">3 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 11 000 km/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 10 000 km/an</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">50 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">5 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 15 500 km/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 14 300 km/an</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">70 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">7 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 22 000 km/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">≈ 20 000 km/an</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 italic">
            Estimations basées sur le barème 2026, tranche 5 001-20 000 km. Distances aller-retour quotidiennes
            × 228 jours travaillés.
          </p>

          <h2>Cas pratique : le consultant qui fait 25 000 km/an</h2>
          <p>
            Marc est consultant indépendant salarié, 48 000 € de salaire brut annuel. Il utilise son véhicule
            personnel 7 CV pour ses déplacements professionnels : 25 000 km sur l&apos;année (clients, réunions,
            formations).
          </p>
          <ul>
            <li><strong>Déduction forfaitaire 10 %</strong> : 4 800 €</li>
            <li>
              <strong>Barème kilométrique 7 CV, 25 000 km</strong> (tranche au-delà de 20 000 km) :{" "}
              25 000 × 0,470 = <strong>11 750 €</strong>
            </li>
            <li>
              <strong>Gain brut en optant pour les frais réels</strong> : 11 750 − 4 800 = <strong>6 950 €</strong>
            </li>
            <li>
              <strong>Économie d&apos;impôt nette</strong> (TMI 30 %) : 6 950 × 30 % = <strong>2 085 €</strong>
            </li>
          </ul>
          <p>
            Pour Marc, ne pas opter pour les frais réels lui coûte <strong>plus de 2 000 € d&apos;impôts en trop</strong>.
            Et il peut encore ajouter d&apos;autres frais réels : mutuelle professionnelle, abonnement téléphonique
            pro, formation...
          </p>

          <h2>Les erreurs fréquentes qui font perdre des milliers d&apos;euros</h2>

          <h3>Oublier les trajets domicile-travail &quot;atypiques&quot;</h3>
          <p>
            Seul le trajet domicile-lieu de travail habituel est déductible — mais la notion de &quot;lieu
            de travail&quot; est large. Si vous avez plusieurs sites, si vous partez parfois directement d&apos;un
            client, si vous faites des formations hors site : ces km sont souvent oubliés alors qu&apos;ils
            sont déductibles.
          </p>

          <h3>Sous-estimer ses kilomètres réels</h3>
          <p>
            Beaucoup de salariés déclarent le trajet &quot;théorique&quot; maison-bureau sans tenir compte des
            jours où ils partent d&apos;un autre point, des rendez-vous professionnels en voiture, des
            déplacements inter-sites. Un carnet de bord ou un suivi GPS est votre meilleure protection
            en cas de contrôle fiscal.
          </p>

          <h3>Oublier la limite des 40 km</h3>
          <p>
            Pour les trajets supérieurs à 40 km (aller simple), le barème n&apos;est appliqué que sur
            40 km — sauf si vous justifiez que l&apos;éloignement est contraint (mutation, impossibilité de
            se loger plus près, etc.). Cette limite touche principalement les salariés en zone rurale.
          </p>

          <h3>Négliger le covoiturage</h3>
          <p>
            Si vous pratiquez le covoiturage en tant que conducteur, les indemnités perçues via une plateforme
            agréée (BlaBlaCar Daily par exemple) ne sont pas imposables jusqu&apos;à un certain seuil — et vos
            frais kilométriques restent entièrement déductibles. Double avantage.
          </p>

          <h2>Frais réels : ce qu&apos;on peut ajouter en plus du kilométrique</h2>
          <p>
            Le barème kilométrique couvre déjà le carburant, l&apos;entretien, l&apos;assurance et la dépréciation.
            En revanche, vous pouvez déduire <strong>en plus</strong> : les péages (conservez les justificatifs),
            les frais de parking professionnels, et les intérêts d&apos;un crédit auto si le véhicule est
            utilisé à des fins professionnelles (au prorata).
          </p>

          <p>
            La règle d&apos;or : simulez les deux options avant de cocher la case &quot;frais réels&quot; sur votre
            déclaration. La différence peut changer significativement votre impôt final.
          </p>

        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-frais-kilometriques"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de frais kilométriques</p>
            <p className="text-blue-100 text-sm mt-1">Calculez vos frais déductibles selon le barème 2026</p>
          </Link>
          <Link
            href="/outils/simulateur-impot-revenu"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur d&apos;impôt sur le revenu</p>
            <p className="text-gray-500 text-sm mt-1">Estimez l&apos;économie d&apos;impôt réelle selon votre TMI</p>
          </Link>
        </div>
      </article>
    </>
  );
}
