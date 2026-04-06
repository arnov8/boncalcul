import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "SMIC 2026 : montant horaire, mensuel et annuel (brut et net)",
  description:
    "Le SMIC 2026 en détail : montant horaire brut et net, mensuel et annuel. Tableau récapitulatif, historique et simulateur de salaire à temps partiel.",
  keywords: [
    "SMIC 2026",
    "SMIC horaire 2026",
    "SMIC mensuel 2026",
    "SMIC net 2026",
    "montant SMIC",
    "salaire minimum",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/smic-2026-montant-horaire-mensuel",
  },
  openGraph: {
    title: "SMIC 2026 : montant horaire, mensuel et annuel",
    description: "Tous les montants du SMIC 2026 en brut et net, avec tableau récapitulatif.",
    url: "https://www.boncalcul.fr/blog/smic-2026-montant-horaire-mensuel",
    type: "article",
    locale: "fr_FR",
  },
};

export default function SmicArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "SMIC 2026 : montant horaire, mensuel et annuel (brut et net)",
          description: "Le SMIC 2026 en détail avec tous les montants brut et net.",
          url: "https://www.boncalcul.fr/blog/smic-2026-montant-horaire-mensuel",
          datePublished: "2026-04-06",
          dateModified: "2026-04-06",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Emploi</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SMIC 2026 : montant horaire, mensuel et annuel
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est revalorisé chaque année au 1er janvier.
            Voici les montants en vigueur en 2026, en brut et en net.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-04-06">6 avril 2026</time>
            <span>4 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Tableau récapitulatif du SMIC 2026</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Période</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Brut</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Net (≈)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2 font-medium">Horaire</td><td className="border border-gray-200 px-4 py-2 text-center">11,88 €</td><td className="border border-gray-200 px-4 py-2 text-center">9,27 €</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2 font-medium">Mensuel (35h)</td><td className="border border-gray-200 px-4 py-2 text-center">1 802,67 €</td><td className="border border-gray-200 px-4 py-2 text-center">1 406,08 €</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2 font-medium">Annuel</td><td className="border border-gray-200 px-4 py-2 text-center">21 632,04 €</td><td className="border border-gray-200 px-4 py-2 text-center">16 872,96 €</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 italic">
            Base : 151,67 heures/mois (35h × 52 semaines / 12 mois). Net approximatif après cotisations salariales (~22 %).
            Source :{" "}
            <a href="https://www.service-public.fr/particuliers/vosdroits/F2300" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Service-public.fr
            </a>
          </p>

          <h2>Comment est calculé le SMIC mensuel ?</h2>
          <p>
            Le SMIC mensuel brut se calcule ainsi :
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono not-prose">
            SMIC mensuel = SMIC horaire × 151,67 heures
          </p>
          <p>
            Les 151,67 heures correspondent à <strong>35 heures × 52 semaines / 12 mois</strong>.
            Pour un temps partiel, il suffit de multiplier le SMIC horaire par le nombre d&apos;heures mensuelles contractuelles.
          </p>

          <h2>SMIC à temps partiel : exemples</h2>
          <ul>
            <li><strong>24h/semaine</strong> : 11,88 × (24 × 52 / 12) = 11,88 × 104 = <strong>1 235,52 € brut</strong></li>
            <li><strong>28h/semaine</strong> : 11,88 × (28 × 52 / 12) = 11,88 × 121,33 = <strong>1 441,44 € brut</strong></li>
            <li><strong>20h/semaine</strong> : 11,88 × (20 × 52 / 12) = 11,88 × 86,67 = <strong>1 029,64 € brut</strong></li>
          </ul>

          <h2>Cas particuliers</h2>
          <ul>
            <li>
              <strong>Apprentis</strong> : rémunération en pourcentage du SMIC selon l&apos;âge et l&apos;année d&apos;apprentissage (de 27 % à 100 %).
            </li>
            <li>
              <strong>Mineurs</strong> : abattement de 20 % (avant 17 ans) ou 10 % (17-18 ans) sur le SMIC.
            </li>
            <li>
              <strong>Outre-mer</strong> : le SMIC est identique à celui de la métropole.
            </li>
          </ul>

          <h2>Erreurs fréquentes</h2>
          <ul>
            <li><strong>Confondre brut et net</strong> : le SMIC affiché dans les médias est toujours en brut. Le net est environ 22 % inférieur.</li>
            <li><strong>Oublier que le SMIC est un minimum</strong> : votre convention collective peut prévoir un salaire minimum conventionnel supérieur au SMIC.</li>
          </ul>

          <h2>Calculez votre salaire au SMIC</h2>
          <p>
            Utilisez notre simulateur pour calculer le SMIC en brut et en net selon votre temps de travail :
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-smic"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur SMIC 2026</p>
            <p className="text-blue-100 text-sm mt-1">Brut, net, temps partiel</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Convertisseur brut/net</p>
            <p className="text-gray-500 text-sm mt-1">Cadre et non-cadre</p>
          </Link>
        </div>
      </article>
    </>
  );
}
