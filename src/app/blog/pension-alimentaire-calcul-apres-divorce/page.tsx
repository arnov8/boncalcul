// FILE: src/app/blog/pension-alimentaire-calcul-apres-divorce/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pension alimentaire après divorce : sur quelle base est-elle calculée ?",
  description:
    "Barème du Ministère de la Justice, besoin de l'enfant, capacités contributives, garde alternée et déductibilité fiscale : tout sur le calcul de la pension alimentaire en 2026.",
  keywords: [
    "pension alimentaire calcul",
    "barème pension alimentaire",
    "pension alimentaire divorce",
    "calcul pension alimentaire 2026",
    "déductibilité pension",
    "garde alternée pension",
    "révision pension alimentaire",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/pension-alimentaire-calcul-apres-divorce" },
  openGraph: {
    title: "Pension alimentaire après divorce : comment est-elle calculée ?",
    description: "Barème indicatif du Ministère de la Justice, impact de la garde alternée et fiscalité de la pension alimentaire expliqués avec des exemples chiffrés.",
    url: "https://www.boncalcul.fr/blog/pension-alimentaire-calcul-apres-divorce",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticlePensionAlimentaire() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Pension alimentaire après divorce : sur quelle base est-elle calculée ?",
          description:
            "Barème du Ministère de la Justice, besoin de l'enfant, garde alternée et fiscalité de la pension alimentaire en 2026.",
          url: "https://www.boncalcul.fr/blog/pension-alimentaire-calcul-apres-divorce",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Famille</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pension alimentaire après divorce : sur quelle base est-elle calculée ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Après une séparation, la question de la pension alimentaire est souvent source de tension.
            Contrairement à ce que beaucoup pensent, il n&apos;existe pas de formule magique imposée par
            la loi — mais un barème indicatif du Ministère de la Justice qui sert de référence aux
            juges. Comprendre comment il fonctionne, c&apos;est se donner les moyens de négocier sereinement.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Le barème indicatif du Ministère de la Justice</h2>
          <p>
            Le Ministère de la Justice publie régulièrement une table de référence qui permet d&apos;estimer
            le montant de la pension alimentaire en fonction de deux variables clés :
            le <strong>revenu net mensuel du parent débiteur</strong> (celui qui paie) et le
            <strong> nombre d&apos;enfants à charge</strong>. Ce barème n&apos;est pas contraignant — le juge
            peut s&apos;en écarter — mais il est massivement utilisé comme point de départ.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Revenu net mensuel du parent débiteur</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">1 enfant</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">2 enfants</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">3 enfants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">145 – 195 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">225 – 305 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">285 – 375 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">2 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">190 – 255 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">295 – 400 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">380 – 510 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">235 – 320 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">365 – 490 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">465 – 625 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">3 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">325 – 440 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">505 – 680 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">640 – 865 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">5 000 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">455 – 615 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">705 – 955 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">900 – 1 215 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 -mt-4 mb-6">
            Source : table de référence du Ministère de la Justice (valeurs indicatives, résidence principale chez l&apos;autre parent).
          </p>

          <p>
            Ces fourchettes correspondent au cas où l&apos;enfant réside principalement chez l&apos;autre parent
            (résidence habituelle). La fourchette basse correspond à une situation où le parent débiteur
            a peu de charges extérieures ; la fourchette haute, à une situation plus aisée.
          </p>

          <h2>Les deux critères fondamentaux : besoin et capacités</h2>
          <p>
            Le juge apprécie toujours la pension à travers deux prismes, quelle que soit la méthode utilisée :
          </p>
          <ul>
            <li>
              <strong>Le besoin de l&apos;enfant</strong> : scolarité, activités extra-scolaires, santé,
              vêtements, loisirs. Un enfant lycéen avec des activités sportives a des besoins supérieurs
              à un enfant en primaire. Le coût de la vie local entre en compte.
            </li>
            <li>
              <strong>Les capacités contributives du parent débiteur</strong> : son revenu, certes,
              mais aussi ses propres charges obligatoires (loyer, crédit, enfants d&apos;une autre union).
              Un parent au SMIC avec un loyer de 800 € a des capacités contributives bien inférieures
              à un même revenu avec un logement gratuit.
            </li>
          </ul>

          <h2>Garde alternée : la pension n&apos;est pas automatiquement nulle</h2>
          <p>
            Beaucoup pensent qu&apos;en garde alternée, il n&apos;y a pas de pension alimentaire. C&apos;est souvent
            vrai quand les revenus des deux parents sont équivalents — mais pas toujours. Si l&apos;un des
            parents gagne significativement plus que l&apos;autre, une <strong>pension différentielle</strong>
            peut être fixée pour compenser le déséquilibre.
          </p>
          <p>
            Exemple : Nicolas gagne 4 200 € nets, son ex-conjoint 1 600 € nets. Garde alternée à 50%.
            Le juge peut fixer une pension de 180 à 250 € par enfant pour rééquilibrer les conditions
            d&apos;accueil. Le barème indicatif intègre un coefficient réducteur pour la garde alternée
            (environ 0,5 à 0,6 selon la pratique des tribunaux).
          </p>

          <h2>Fiscalité de la pension alimentaire : déduction et déclaration</h2>
          <p>
            La pension alimentaire versée pour un enfant mineur est <strong>déductible du revenu
            imposable</strong> du parent qui la verse — sans plafond légal, à hauteur du montant
            effectivement versé et justifié. C&apos;est une déduction, pas une réduction : elle diminue
            directement votre revenu imposable.
          </p>
          <p>
            Côté parent qui reçoit : la pension est en principe <strong>imposable</strong> en tant que
            revenu pour le parent gardien. Toutefois, si l&apos;enfant est rattaché à votre foyer fiscal,
            vous bénéficiez de la part correspondante dans votre quotient familial, ce qui compense
            souvent l&apos;imposition.
          </p>

          <h2>Revalorisation automatique et révision judiciaire</h2>
          <p>
            La pension est automatiquement revalorisée chaque année en janvier grâce à
            l&apos;<strong>Indice des Prix à la Consommation des Ménages Urbains (IPCV)</strong>
            hors tabac. La revalorisation 2026 était de +1,6%. C&apos;est automatique si la clause est
            prévue dans le jugement (ce qui est quasi-systématique), sans intervention du juge.
          </p>
          <p>
            En revanche, si votre situation change significativement — perte d&apos;emploi, nouveau
            salaire très inférieur, remariage, naissance d&apos;un autre enfant — vous pouvez demander
            une <strong>révision judiciaire</strong> auprès du Juge aux Affaires Familiales (JAF).
            Le simple accord amiable entre parents ne modifie pas l&apos;ordonnance : il faut une
            homologation par le juge pour avoir force exécutoire.
          </p>

          <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <p className="font-semibold text-blue-800 mb-2">Impayés : comment récupérer les sommes dues ?</p>
            <p className="text-blue-900 text-sm">
              En cas de non-paiement de la pension, deux recours sont possibles : le
              <strong> paiement direct</strong> (saisie sur salaire auprès de l&apos;employeur) et
              l&apos;<strong>Agence de Recouvrement des Impayés de Pensions Alimentaires (ARIPA)</strong>,
              gérée par la CAF, qui peut avancer les sommes dues et se charger du recouvrement.
            </p>
          </div>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-pension-alimentaire"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de pension alimentaire</p>
            <p className="text-blue-100 text-sm mt-1">Estimez le montant selon le barème du Ministère de la Justice</p>
          </Link>
          <Link
            href="/outils/simulateur-impot-revenu"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Impact fiscal de la pension</p>
            <p className="text-gray-500 text-sm mt-1">Simulez l&apos;effet de la déduction sur votre impôt</p>
          </Link>
        </div>
      </article>
    </>
  );
}
