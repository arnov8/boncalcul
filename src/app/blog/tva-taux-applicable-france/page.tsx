// FILE: src/app/blog/tva-taux-applicable-france/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "TVA à 20%, 10%, 5,5% ou 2,1% : quel taux s'applique à quoi en France ?",
  description:
    "Guide complet des taux de TVA en France 2026 : 20%, 10%, 5,5%, 2,1%. Aliments, travaux, presse, santé — tableau des catégories et erreurs fréquentes des entrepreneurs.",
  keywords: [
    "taux TVA France",
    "TVA 5,5%",
    "TVA 10%",
    "TVA travaux",
    "TVA aliments",
    "calcul TVA",
    "micro-entrepreneur TVA",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/tva-taux-applicable-france" },
  openGraph: {
    title: "TVA à 20%, 10%, 5,5% ou 2,1% : quel taux s'applique à quoi ?",
    description: "Tableau complet des taux de TVA français avec exemples concrets et erreurs à éviter pour les entrepreneurs.",
    url: "https://www.boncalcul.fr/blog/tva-taux-applicable-france",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleTvaTaux() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "TVA à 20%, 10%, 5,5% ou 2,1% : quel taux s'applique à quoi en France ?",
          description:
            "Guide complet des taux de TVA en France 2026 avec tableau des catégories et erreurs fréquentes.",
          url: "https://www.boncalcul.fr/blog/tva-taux-applicable-france",
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
            TVA à 20%, 10%, 5,5% ou 2,1% : quel taux s&apos;applique à quoi en France ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            En France, il n&apos;y a pas un seul taux de TVA mais quatre. Et les subtilités sont nombreuses :
            un même repas peut être taxé à 5,5% ou à 10% selon qu&apos;il est consommé sur place ou emporté.
            Une facture de travaux à 20% au lieu de 10% peut coûter des milliers d&apos;euros de TVA en trop.
            Voici le guide complet, avec les erreurs que font le plus souvent les entrepreneurs.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Les quatre taux de TVA en vigueur en France</h2>
          <p>
            La France applique quatre niveaux de TVA, fixés par le Code général des impôts.
            Le taux normal est de <strong>20%</strong> et s&apos;applique par défaut à tout ce qui
            n&apos;est pas expressément listé dans les taux réduits. Si vous ne savez pas,
            c&apos;est 20%.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Taux</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Catégories principales</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Exemples concrets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-bold text-gray-800">20%</td>
                  <td className="border border-gray-200 px-4 py-2">Taux normal — tout ce qui n&apos;est pas listé ci-dessous</td>
                  <td className="border border-gray-200 px-4 py-2">Vêtements, électronique, voitures, services, alcool, tabac</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-bold text-blue-700">10%</td>
                  <td className="border border-gray-200 px-4 py-2">Restauration, hébergement, transports, travaux de rénovation, produits agricoles non transformés</td>
                  <td className="border border-gray-200 px-4 py-2">Restaurant, hôtel, taxi, bois de chauffage, médicaments non remboursés</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-bold text-green-700">5,5%</td>
                  <td className="border border-gray-200 px-4 py-2">Alimentation (produits alimentaires de base), énergie domestique, livres, équipements pour personnes handicapées, travaux de rénovation énergétique</td>
                  <td className="border border-gray-200 px-4 py-2">Pain, viande, légumes, fruits, eau, gaz, électricité, livres papier et numérique</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-bold text-purple-700">2,1%</td>
                  <td className="border border-gray-200 px-4 py-2">Presse, médicaments remboursables, animaux vivants de boucherie, spectacles vivants (100 premières représentations)</td>
                  <td className="border border-gray-200 px-4 py-2">Journal, magazine, médicaments sur ordonnance remboursés par la Sécu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Les cas qui piègent le plus souvent : aliments, travaux et restauration</h2>

          <h3>Aliments : la frontière entre 5,5% et 10%</h3>
          <p>
            La règle de base : les produits alimentaires <strong>destinés à être consommés à
            domicile</strong> sont à 5,5%. Mais dès qu&apos;il y a une notion de service ou de
            consommation immédiate sur place, le taux passe à 10%. Exemples :
          </p>
          <ul>
            <li>Un sandwich emporté au supermarché → <strong>5,5%</strong></li>
            <li>Un sandwich consommé dans une boulangerie avec service → <strong>10%</strong></li>
            <li>Un plateau de fruits de mer livré à domicile (non cuisiné) → <strong>5,5%</strong></li>
            <li>Un plateau de fruits de mer servi dans un restaurant → <strong>10%</strong></li>
            <li>Le chocolat, les confiseries, la margarine, le caviar → <strong>20%</strong> (produits de luxe ou plaisir)</li>
          </ul>
          <p>
            Attention : <strong>les boissons alcoolisées sont toujours à 20%</strong>, même dans un
            restaurant où le reste du repas est à 10%.
          </p>

          <h3>Travaux : l&apos;erreur classique qui coûte cher</h3>
          <p>
            C&apos;est l&apos;erreur la plus fréquente parmi les artisans et leurs clients. Les
            <strong> travaux de rénovation dans un logement de plus de 2 ans</strong> sont taxés
            à <strong>10%</strong>, et non à 20%. Pour les travaux d&apos;amélioration de la performance
            énergétique (isolation, pompe à chaleur, chaudière à basse consommation), le taux tombe
            même à <strong>5,5%</strong>.
          </p>
          <p>
            Un artisan du bâtiment qui facture ses travaux de rénovation à 20% commet une erreur
            qui peut lui valoir un redressement fiscal, et son client paie inutilement 10 points de
            TVA en trop. Sur des travaux à 30 000 €, c&apos;est 3 000 € de TVA payée à tort.
          </p>
          <p>
            Conditions pour bénéficier du taux réduit sur les travaux :
          </p>
          <ul>
            <li>Le logement doit être achevé depuis plus de 2 ans</li>
            <li>Il doit être destiné à l&apos;habitation (résidence principale ou secondaire)</li>
            <li>Le client fournit une <strong>attestation sur l&apos;honneur</strong> au prestataire</li>
            <li>Les travaux ne doivent pas conduire à une construction neuve ou une extension de plus de 10%</li>
          </ul>

          <h2>Comment calculer la TVA à reverser : le principe de base</h2>
          <p>
            Si vous êtes entrepreneur soumis à la TVA (chiffre d&apos;affaires au-delà de la franchise
            en base — 37 500 € pour les prestations de services, 85 000 € pour les ventes en 2026),
            vous collectez la TVA pour l&apos;État. Votre obligation :
          </p>
          <p>
            <strong>TVA à reverser = TVA collectée (sur vos ventes) − TVA déductible (sur vos achats)</strong>
          </p>
          <p>
            Exemple : une TPE de nettoyage facture 10 000 € HT de prestations au taux de 20%.
            Elle collecte 2 000 € de TVA. Elle a acheté pour 3 000 € HT de matériel (produits, équipement)
            et payé 600 € de TVA. Elle reverse à l&apos;État : 2 000 − 600 = <strong>1 400 €</strong>.
          </p>

          <div className="not-prose my-8 p-6 bg-orange-50 border border-orange-200 rounded-2xl">
            <p className="font-semibold text-orange-800 mb-2">Attention aux auto-entrepreneurs</p>
            <p className="text-orange-900 text-sm">
              En franchise en base de TVA (en dessous des seuils), vous ne facturez pas de TVA et ne
              la récupérez pas non plus. La mention &quot;TVA non applicable — article 293 B du CGI&quot; est
              obligatoire sur vos factures. Si vous dépassez le seuil en cours d&apos;année, la TVA
              est due dès le 1er jour du mois de dépassement.
            </p>
          </div>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-tva"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de TVA</p>
            <p className="text-blue-100 text-sm mt-1">HT vers TTC, TTC vers HT, tous les taux en un clic</p>
          </Link>
          <Link
            href="/outils/calcul-charges-micro-entrepreneur"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Charges micro-entrepreneur</p>
            <p className="text-gray-500 text-sm mt-1">Calculez vos cotisations selon votre activité</p>
          </Link>
        </div>
      </article>
    </>
  );
}
