// FILE: src/app/blog/auto-entrepreneur-2026-charges-seuils/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Auto-entrepreneur 2026 : charges, seuils et simulateur de rentabilité",
  description:
    "Taux de cotisations micro-entrepreneur 2026 par activité (BIC/BNC), seuils de chiffre d'affaires, versement libératoire, ACRE et comparaison avec le portage salarial.",
  keywords: [
    "auto-entrepreneur 2026",
    "micro-entrepreneur charges 2026",
    "taux cotisations auto-entrepreneur",
    "seuils micro-entreprise 2026",
    "versement libératoire impôt",
    "ACRE auto-entrepreneur",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/auto-entrepreneur-2026-charges-seuils",
  },
  openGraph: {
    title: "Auto-entrepreneur 2026 : charges, seuils et rentabilité",
    description: "Taux par activité, seuils CA, versement libératoire et ACRE expliqués.",
    url: "https://www.boncalcul.fr/blog/auto-entrepreneur-2026-charges-seuils",
    type: "article",
    locale: "fr_FR",
  },
};

export default function AutoEntrepreneurArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Auto-entrepreneur 2026 : charges, seuils et simulateur de rentabilité",
          description: "Taux par activité, seuils CA, versement libératoire et ACRE expliqués.",
          url: "https://www.boncalcul.fr/blog/auto-entrepreneur-2026-charges-seuils",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Emploi / Fiscalité</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Auto-entrepreneur 2026 : charges, seuils et simulateur de rentabilité
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Julien vient de quitter son CDI pour se lancer comme consultant freelance. Il a entendu parler du régime micro-entrepreneur, du versement libératoire, de l&apos;ACRE — mais il ne sait pas exactement combien il lui restera après charges. Voici les chiffres 2026, sans approximation.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Les taux de cotisations 2026 selon l&apos;activité</h2>
          <p>
            En micro-entreprise, les cotisations sociales sont calculées sur le <strong>chiffre d&apos;affaires encaissé</strong>, pas sur un bénéfice. C&apos;est l&apos;avantage principal du régime : zéro CA = zéro charge. Mais le taux dépend strictement de la nature de l&apos;activité :
          </p>
        </div>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Type d&apos;activité</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux cotisations sociales</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Plafond CA 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Vente de marchandises (BIC)</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-green-700">12,3 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">188 700 €</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Prestations de services BIC (artisans, commerce)</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-blue-700">21,2 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">77 700 €</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Prestations de services BNC (professions libérales, freelances)</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-orange-700">23,1 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">77 700 €</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Activités libérales réglementées (CIPAV)</td>
                <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-purple-700">23,2 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">77 700 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-sm text-gray-500 italic">
            Taux 2026 en vigueur depuis le 1er janvier 2026. Sources : URSSAF, article L613-7 du Code de la Sécurité Sociale. Les plafonds sont révisés chaque année en fonction de l&apos;indice des prix.
          </p>

          <h2>Seuils de chiffre d&apos;affaires : les dépasser coûte cher</h2>
          <p>
            Les seuils indiqués ci-dessus sont des seuils de <strong>tolérance sur deux ans</strong> (non des plafonds annuels stricts). Concrètement : si vous dépassez le seuil deux années consécutives, vous basculez au régime réel d&apos;imposition l&apos;année suivante. Un dépassement ponctuel sur une seule année ne fait pas perdre le régime — mais attention, les impôts suivent de près.
          </p>
          <p>
            Ce qu&apos;on oublie souvent : il existe aussi des <strong>seuils de franchise en base de TVA</strong> (36 800 € pour les services, 91 900 € pour les ventes en 2026). En dessous, vous ne facturez pas la TVA. Au-dessus, vous devenez redevable et devez la reverser à l&apos;État — ce qui change radicalement votre modèle de prix.
          </p>

          <h2>Le versement libératoire de l&apos;impôt</h2>
          <p>
            Si votre revenu fiscal de référence de l&apos;année N-2 ne dépasse pas certains seuils (27 478 € pour une personne seule en 2026), vous pouvez opter pour le <strong>versement libératoire</strong>. Plutôt que de déclarer votre bénéfice dans votre IR classique, vous payez un pourcentage fixe sur votre CA en même temps que vos cotisations :
          </p>
          <ul>
            <li>Vente de marchandises BIC : <strong>1 %</strong> du CA</li>
            <li>Prestations de services BIC : <strong>1,7 %</strong> du CA</li>
            <li>Prestations de services BNC : <strong>2,2 %</strong> du CA</li>
          </ul>
          <p>
            C&apos;est avantageux si votre taux marginal d&apos;imposition est élevé (tranche à 30 % ou plus). Pour quelqu&apos;un dans la tranche à 11 %, l&apos;IR classique est souvent moins cher — surtout si vous avez des charges déductibles dans votre foyer fiscal (enfants, déficits fonciers, etc.).
          </p>

          <h2>L&apos;ACRE : une aide précieuse la première année</h2>
          <p>
            L&apos;Aide à la Création et à la Reprise d&apos;Entreprise (ACRE) permet de bénéficier d&apos;une <strong>exonération partielle de cotisations sociales pendant 12 mois</strong> pour les créateurs de micro-entreprise remplissant certaines conditions (demandeur d&apos;emploi, bénéficiaire du RSA, jeune de moins de 26 ans, etc.).
          </p>
          <p>
            Avec l&apos;ACRE, les taux de cotisations sont réduits de <strong>50 %</strong> la première année. Pour un freelance BNC à 23,1 %, cela tombe à 11,55 % — un avantage significatif en phase de lancement. La demande s&apos;effectue via le formulaire ACRE auprès de l&apos;URSSAF dans les 45 jours suivant l&apos;immatriculation.
          </p>

          <h2>Exemple de rentabilité : consultant freelance à 60 000 € de CA annuel</h2>
          <p>
            Pierre, consultant BNC, réalise 60 000 € de CA. Il est au versement libératoire, ACRE expirée :
          </p>
          <ul>
            <li>Cotisations sociales : 60 000 × 23,1 % = <strong>13 860 €</strong></li>
            <li>Versement libératoire IR : 60 000 × 2,2 % = <strong>1 320 €</strong></li>
            <li>Contribution à la formation professionnelle : 60 000 × 0,2 % = <strong>120 €</strong></li>
            <li><strong>Revenu net disponible : 60 000 − 15 300 = 44 700 €</strong> soit <strong>3 725 €/mois</strong></li>
          </ul>
          <p>
            Concrètement, il conserve environ <strong>74,5 % de son chiffre d&apos;affaires</strong>. C&apos;est nettement plus qu&apos;un salarié au même niveau de coût employeur — mais à condition de ne pas avoir de charges professionnelles (matériel, loyer, déplacements) car rien n&apos;est déductible en micro-entreprise.
          </p>

          <h2>Micro-entreprise vs portage salarial : quand changer ?</h2>
          <p>
            Le portage salarial devient intéressant lorsque :
          </p>
          <ul>
            <li>Votre CA dépasse régulièrement les seuils (risque de bascule au réel)</li>
            <li>Vous avez des charges professionnelles élevées non déductibles en micro (matériel, logiciels, déplacements)</li>
            <li>Vous voulez cotiser pour une retraite plus avantageuse (le micro-entrepreneur cotise, mais ses droits retraite sont généralement inférieurs à ceux d&apos;un salarié cadre)</li>
            <li>Votre client impose un contrat de travail ou vous souhaitez sécuriser un crédit immobilier (le statut salarié est mieux vu par les banques)</li>
          </ul>
          <p>
            En portage salarial, les frais de gestion représentent entre 5 % et 10 % du CA HT, mais vous bénéficiez de droits chômage, d&apos;une meilleure protection sociale et d&apos;une déductibilité des frais professionnels réels.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-charges-micro-entrepreneur"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur micro-entrepreneur 2026</p>
            <p className="text-blue-100 text-sm mt-1">Charges, revenu net, versement libératoire, ACRE</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Comparateur salarié / freelance</p>
            <p className="text-gray-500 text-sm mt-1">Simulez votre revenu net selon le statut</p>
          </Link>
        </div>
      </article>
    </>
  );
}
