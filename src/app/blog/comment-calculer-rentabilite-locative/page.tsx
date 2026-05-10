import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Rentabilité locative : comment la calculer (et les pièges à éviter)",
  description:
    "Comprendre la rentabilité brute, nette et nette-nette de votre investissement locatif. Formules, exemples chiffrés et erreurs fréquentes des investisseurs débutants.",
  keywords: [
    "rentabilité locative calcul",
    "rendement locatif",
    "investissement locatif rentable",
    "rendement brut net",
    "calcul rendement immobilier",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/comment-calculer-rentabilite-locative",
  },
  openGraph: {
    title: "Rentabilité locative : comment la calculer vraiment",
    description:
      "Rentabilité brute, nette, nette-nette — les trois calculs que tout investisseur doit maîtriser avant d'acheter.",
    url: "https://www.boncalcul.fr/blog/comment-calculer-rentabilite-locative",
    type: "article",
    locale: "fr_FR",
  },
};

export default function RentabiliteLocativeArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Rentabilité locative : comment la calculer (et les pièges à éviter)",
          description:
            "Rentabilité brute, nette et nette-nette : formules, exemples et erreurs à éviter pour votre investissement locatif.",
          url: "https://www.boncalcul.fr/blog/comment-calculer-rentabilite-locative",
          datePublished: "2026-05-10",
          dateModified: "2026-05-10",
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
            Rentabilité locative : comment la calculer (et les pièges à éviter)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un investisseur vous parle de &laquo; 8 % de rendement &raquo; et vous êtes impressionné.
            Mais de quoi parle-t-il exactement ? Brut, net, nette-nette ? Trois calculs différents
            qui peuvent donner des résultats radicalement opposés — et beaucoup de déçus chez ceux
            qui ne font pas la distinction.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-10">10 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray prose-lg max-w-none">
          <h2>La rentabilité brute : le chiffre qu&apos;on vous montre</h2>
          <p>
            C&apos;est la formule la plus simple, et la plus utilisée dans les annonces. Elle ne
            tient compte ni des charges ni de la fiscalité.
          </p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-6 text-center font-mono text-sm">
            Rentabilité brute = (Loyer annuel / Prix d&apos;acquisition total) × 100
          </div>

          <p>
            Le prix d&apos;acquisition total comprend le prix du bien <em>et</em> les frais de
            notaire. Beaucoup l&apos;oublient — c&apos;est pourtant 7 à 8 % supplémentaires dans
            l&apos;ancien.
          </p>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-blue-800 mb-2">Exemple</p>
            <p className="text-blue-700 text-sm">
              Appartement acheté 150 000 € + 11 000 € de frais de notaire = 161 000 €.
              <br />
              Loyer mensuel : 750 € → 9 000 €/an.
              <br />
              <strong>Rentabilité brute : 9 000 / 161 000 × 100 = 5,6 %</strong>
            </p>
          </div>

          <h2>La rentabilité nette : ce qui vous reste vraiment</h2>
          <p>
            On retire maintenant toutes les charges annuelles : taxe foncière, charges non
            récupérables sur le locataire, frais de gestion si vous passez par une agence,
            assurance propriétaire non occupant (PNO), provisions pour travaux.
          </p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-6 text-center font-mono text-sm">
            Rentabilité nette = ((Loyers annuels − Charges) / Prix d&apos;acquisition) × 100
          </div>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Charge annuelle (exemple)
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-700">
                    Montant
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Taxe foncière</td>
                  <td className="border border-gray-200 px-4 py-2 text-right">800 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Charges copropriété non récupérables
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-right">600 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Assurance PNO</td>
                  <td className="border border-gray-200 px-4 py-2 text-right">150 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Frais de gestion (8 % des loyers)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-right">720 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Provision travaux</td>
                  <td className="border border-gray-200 px-4 py-2 text-right">300 €</td>
                </tr>
                <tr className="font-semibold">
                  <td className="border border-gray-200 px-4 py-2">Total charges</td>
                  <td className="border border-gray-200 px-4 py-2 text-right">2 570 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Sur notre exemple : (9 000 − 2 570) / 161 000 × 100 = <strong>3,99 %</strong>. On
            passe de 5,6 % à 4 %. Et on n&apos;a pas encore parlé des impôts.
          </p>

          <h2>La rentabilité nette-nette : après le fisc</h2>
          <p>
            C&apos;est la vraie rentabilité. Les loyers perçus sont imposés — soit au barème de
            l&apos;impôt sur le revenu (régime réel ou micro-foncier), soit via une flat tax pour
            la location meublée (LMNP). Selon votre tranche marginale d&apos;imposition, la
            différence peut être brutale.
          </p>
          <p>
            Un investisseur à 30 % de TMI, sans déductions spécifiques, verra sa rentabilité
            nette de 4 % amputée d&apos;environ 1,4 point de prélèvements sociaux (17,2 %) et
            d&apos;un impôt sur les revenus fonciers. En pratique, on tombe souvent autour de
            2,5 à 3 % de rentabilité réelle.
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-1">À savoir</p>
            <p className="text-amber-700 text-sm">
              Le régime LMNP (Location Meublée Non Professionnelle) permet d&apos;amortir le bien
              et le mobilier, ce qui peut réduire significativement l&apos;imposition sur les loyers
              — parfois jusqu&apos;à zéro pendant plusieurs années. Un bon point de départ si vous
              hésitez entre nu et meublé.
            </p>
          </div>

          <h2>Quelle rentabilité viser en 2026 ?</h2>
          <p>
            Il n&apos;existe pas de réponse universelle, mais voici les repères généralement admis :
          </p>
          <ul>
            <li>
              <strong>Paris intramuros</strong> : 2 à 3,5 % brut. Les prix sont trop élevés pour
              viser mieux. On mise sur la plus-value.
            </li>
            <li>
              <strong>Grandes métropoles (Lyon, Bordeaux, Nantes)</strong> : 4 à 6 % brut selon
              les quartiers.
            </li>
            <li>
              <strong>Villes moyennes (Limoges, Le Mans, Metz)</strong> : 7 à 10 % brut parfois
              accessibles, mais la liquidité à la revente est moins garantie.
            </li>
          </ul>
          <p>
            Une rentabilité brute de 6 % minimum est souvent citée comme seuil pour un
            investissement locatif classique intéressant — à condition que le bien soit dans une
            zone avec de la demande locative réelle.
          </p>

          <h2>Les 4 erreurs classiques</h2>
          <ol>
            <li>
              <strong>Oublier les frais de notaire</strong> dans le prix d&apos;acquisition. On
              l&apos;a dit, mais c&apos;est l&apos;erreur numéro un.
            </li>
            <li>
              <strong>Ne pas provisionner les travaux</strong>. Un appartement ancien aura besoin
              de rénovations. 1 à 2 % du prix par an est une base raisonnable.
            </li>
            <li>
              <strong>Ignorer la vacance locative</strong>. Si votre bien reste vide deux mois
              par an, votre rendement réel baisse mécaniquement de 16 %.
            </li>
            <li>
              <strong>Se tromper de régime fiscal</strong>. Opter pour le micro-foncier (abattement
              forfaitaire de 30 %) alors que vos charges réelles dépassent 30 %, c&apos;est payer
              plus d&apos;impôts que nécessaire.
            </li>
          </ol>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-rentabilite-locative"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer la rentabilité de mon bien
            </p>
            <p className="text-blue-100 text-sm mt-1">Brut, net, nette-nette — en un clic</p>
          </Link>
          <Link
            href="/outils/simulateur-pret-immobilier"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
              Simuler mon prêt immobilier
            </p>
            <p className="text-gray-500 text-sm mt-1">Mensualité, coût total, tableau</p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Articles liés</h2>
          <ul>
            <li>
              <Link href="/blog/guide-frais-de-notaire-2026">
                Frais de notaire 2026 : guide complet
              </Link>
            </li>
            <li>
              <Link href="/blog/acheter-immobilier-printemps-2026">
                Acheter en 2026 : taux, frais et capacité d&apos;emprunt
              </Link>
            </li>
            <li>
              <Link href="/immobilier">Tous nos outils immobilier</Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
