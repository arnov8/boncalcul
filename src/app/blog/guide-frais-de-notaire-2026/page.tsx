import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title:
    "Frais de notaire 2026 : guide complet pour estimer vos frais d'achat immobilier",
  description:
    "Tout savoir sur les frais de notaire en 2026 : calcul détaillé, différence ancien/neuf, barèmes en vigueur et astuces pour les réduire.",
  keywords: [
    "frais de notaire 2026",
    "calcul frais notaire",
    "frais achat immobilier",
    "droits de mutation",
    "émoluments notaire",
  ],
  openGraph: {
    title: "Frais de notaire 2026 : guide complet",
    description:
      "Tout savoir sur les frais de notaire en 2026 : calcul, barèmes et astuces.",
    type: "article",
    publishedTime: "2026-03-27",
    authors: ["BonCalcul.fr"],
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/guide-frais-de-notaire-2026",
  },
};

export default function ArticleFraisNotaire() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Frais de notaire 2026 : guide complet pour estimer vos frais d'achat immobilier",
          description:
            "Tout savoir sur les frais de notaire en 2026 : calcul détaillé, différence ancien/neuf, barèmes en vigueur et astuces pour les réduire.",
          url: "https://www.boncalcul.fr/blog/guide-frais-de-notaire-2026",
          datePublished: "2026-03-27",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Frais de notaire 2026</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Frais de notaire 2026 : guide complet pour bien estimer vos frais
            d'achat immobilier
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-27">27 mars 2026</time>
            <span>·</span>
            <span>8 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray prose-lg max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Vous projetez d'acheter un bien immobilier en 2026 ? Avant de
            signer, il est essentiel de bien comprendre les{" "}
            <strong>frais de notaire</strong> — ces coûts supplémentaires qui
            s'ajoutent au prix d'achat et qui représentent souvent une
            surprise pour les primo-accédants. Ce guide vous explique tout :
            composition, calcul, barèmes en vigueur et astuces pour les
            optimiser.
          </p>

          <h2>Que sont les « frais de notaire » ?</h2>
          <p>
            L'expression « frais de notaire » est en réalité un abus de
            langage. Sur la totalité de ces frais, le notaire ne conserve
            qu'une petite partie (ses émoluments). L'essentiel est reversé à
            l'État et aux collectivités locales sous forme de{" "}
            <strong>droits de mutation</strong> (aussi appelés « droits
            d'enregistrement »).
          </p>
          <p>Concrètement, les frais de notaire se décomposent en :</p>
          <ul>
            <li>
              <strong>Les droits de mutation</strong> (taxes reversées à
              l'État, au département et à la commune) — c'est la part la plus
              importante
            </li>
            <li>
              <strong>Les émoluments du notaire</strong> — sa rémunération,
              encadrée par un barème officiel
            </li>
            <li>
              <strong>Les frais et débours</strong> — les sommes avancées par
              le notaire pour le compte de l'acheteur (cadastre, hypothèque,
              copies d'actes…)
            </li>
            <li>
              <strong>La contribution de sécurité immobilière</strong> — 0,10%
              du prix de vente, pour la publicité foncière
            </li>
          </ul>

          <h2>Combien représentent les frais de notaire en 2026 ?</h2>
          <p>En règle générale :</p>
          <ul>
            <li>
              <strong>Dans l'ancien</strong> (bien de plus de 5 ans) : les
              frais représentent environ <strong>7 à 8%</strong> du prix
              d'achat
            </li>
            <li>
              <strong>Dans le neuf</strong> (VEFA ou bien de moins de 5 ans) :
              les frais sont réduits à environ <strong>2 à 3%</strong> du prix
              d'achat
            </li>
          </ul>
          <p>
            Cette différence considérable s'explique par le taux des droits de
            mutation, beaucoup plus faible dans le neuf.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 not-prose">
            <p className="font-semibold text-blue-800 mb-1">Exemple concret</p>
            <p className="text-blue-700 text-sm">
              Pour un appartement ancien à <strong>250 000 €</strong> : les
              frais de notaire seront d'environ <strong>19 000 à 20 000 €</strong>,
              soit un budget total de <strong>269 000 à 270 000 €</strong>.
            </p>
            <p className="text-blue-700 text-sm mt-1">
              Le même bien en VEFA (neuf) : environ <strong>5 500 à 7 000 €</strong>
              de frais.
            </p>
          </div>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          <h2>Le détail des droits de mutation en 2026</h2>
          <p>Les droits de mutation dans l'ancien se décomposent ainsi :</p>

          <table>
            <thead>
              <tr>
                <th>Composante</th>
                <th>Taux</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Taxe départementale</td>
                <td>
                  4,50% (majorité des départements) ou 3,80% (quelques
                  départements)
                </td>
              </tr>
              <tr>
                <td>Taxe communale</td>
                <td>1,20%</td>
              </tr>
              <tr>
                <td>Taxe État</td>
                <td>
                  2,37% de la taxe départementale (soit ~0,107%)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>~5,81%</strong> du prix de vente
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Dans le neuf, les droits de mutation sont remplacés par une{" "}
            <strong>taxe de publicité foncière</strong> de seulement 0,715%.
          </p>

          <h2>Le barème des émoluments du notaire</h2>
          <p>
            Les émoluments sont calculés selon un barème dégressif fixé par
            décret. Voici les tranches en vigueur en 2026 :
          </p>

          <table>
            <thead>
              <tr>
                <th>Tranche de prix</th>
                <th>Taux</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>De 0 à 6 500 €</td>
                <td>3,870%</td>
              </tr>
              <tr>
                <td>De 6 500 à 17 000 €</td>
                <td>1,596%</td>
              </tr>
              <tr>
                <td>De 17 000 à 60 000 €</td>
                <td>1,064%</td>
              </tr>
              <tr>
                <td>Au-delà de 60 000 €</td>
                <td>0,799%</td>
              </tr>
            </tbody>
          </table>

          <p>
            Important : le notaire peut accorder une{" "}
            <strong>remise de 20%</strong> sur ses émoluments pour la partie
            du prix qui dépasse 100 000 €. N'hésitez pas à le demander !
          </p>

          <h2>Peut-on réduire les frais de notaire ?</h2>
          <p>
            Oui, il existe plusieurs leviers pour diminuer la facture :
          </p>

          <h3>1. Déduire la valeur du mobilier</h3>
          <p>
            Si le bien est vendu meublé (ou partiellement meublé), la valeur
            des meubles peut être déduite du prix de vente pour le calcul des
            droits de mutation. Cuisine équipée, dressing intégré, luminaires
            fixés au mur — tout ce qui est « meuble » au sens juridique peut
            être valorisé séparément. La convention est de ne pas dépasser 5%
            du prix de vente.
          </p>

          <h3>2. Séparer les frais d'agence</h3>
          <p>
            Si les frais d'agence immobilière sont à la charge de l'acheteur
            (mandat « charge acquéreur »), ils peuvent être déduits de
            l'assiette des droits de mutation. Concrètement, sur un bien à
            250 000 € dont 12 000 € de frais d'agence, les droits de mutation
            sont calculés sur 238 000 € au lieu de 250 000 €.
          </p>

          <h3>3. Acheter dans le neuf</h3>
          <p>
            Les frais de notaire dans le neuf (VEFA) sont 3 à 4 fois
            inférieurs à ceux de l'ancien. C'est un avantage financier
            significatif à prendre en compte dans votre comparaison
            ancien/neuf.
          </p>

          <h3>4. Demander la remise sur les émoluments</h3>
          <p>
            Depuis 2021, les notaires peuvent accorder une remise allant
            jusqu'à 20% sur leurs émoluments pour les transactions
            supérieures à 100 000 €. Cette remise n'est pas automatique : il
            faut la demander au notaire, qui peut l'accepter ou la refuser.
          </p>

          <AdBanner slot="blog-mid2" format="auto" className="my-8" />

          <h2>Quand et comment payer les frais de notaire ?</h2>
          <p>
            Les frais de notaire sont versés le jour de la signature de
            l'acte authentique de vente. Le notaire vous demandera le montant
            quelques jours avant, par virement bancaire. Ce montant est
            généralement une estimation haute (« provision »). Si le montant
            réel s'avère inférieur, le notaire vous rembourse la différence
            dans les mois qui suivent.
          </p>

          <h2>Frais de notaire et crédit immobilier</h2>
          <p>
            Les banques ne financent généralement pas les frais de notaire.
            Elles demandent un{" "}
            <strong>apport personnel couvrant au minimum les frais de
            notaire</strong>
            . C'est pourquoi on dit souvent qu'il faut « au moins 10%
            d'apport » pour acheter dans l'ancien (7-8% de frais de notaire +
            un peu de marge).
          </p>
          <p>
            Certains prêts à 110% existent (financement du bien + frais de
            notaire), mais ils sont plus rares et réservés aux profils
            solides avec des revenus confortables.
          </p>

          <h2>Calculez vos frais de notaire en quelques clics</h2>
          <p>
            Pour obtenir une estimation précise et personnalisée de vos frais
            de notaire, utilisez notre{" "}
            <Link
              href="/outils/calcul-frais-de-notaire"
              className="text-blue-600 hover:underline font-medium"
            >
              calculateur de frais de notaire gratuit
            </Link>
            . Il prend en compte le type de bien (ancien ou neuf), le taux
            départemental et le barème des émoluments en vigueur pour vous
            donner un résultat détaillé en quelques secondes.
          </p>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />

        {/* CTA vers l'outil */}
        <div className="mt-10 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Estimez vos frais de notaire maintenant
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Résultat instantané, gratuit, sans inscription.
          </p>
          <Link
            href="/outils/calcul-frais-de-notaire"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Calculer mes frais de notaire
          </Link>
        </div>

        {/* Articles liés */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Outils associés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/outils/simulateur-pret-immobilier"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <span className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></span>
              <h4 className="font-semibold mt-2">
                Simulateur de prêt immobilier
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Calculez vos mensualités et le coût total de votre crédit.
              </p>
            </Link>
            <Link
              href="/outils/calcul-tva"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <span className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M12 6v2m0 8v2" /></svg></span>
              <h4 className="font-semibold mt-2">Calcul de TVA</h4>
              <p className="text-sm text-gray-500 mt-1">
                Convertissez un montant HT en TTC instantanément.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
