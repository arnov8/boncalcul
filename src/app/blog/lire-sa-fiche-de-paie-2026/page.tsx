// FILE: src/app/blog/lire-sa-fiche-de-paie-2026/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Salaire brut / net en 2026 : comment lire réellement sa fiche de paie ?",
  description:
    "Décryptez chaque ligne de votre fiche de paie 2026 : cotisations sociales, CSG/CRDS, mutuelle, net imposable vs net à payer. Taux réels et exemples concrets.",
  keywords: [
    "lire fiche de paie",
    "fiche de paie 2026",
    "cotisations salariales",
    "net imposable net à payer",
    "CSG CRDS 2026",
    "comprendre bulletin de salaire",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/lire-sa-fiche-de-paie-2026",
  },
  openGraph: {
    title: "Salaire brut / net en 2026 : comment lire réellement sa fiche de paie ?",
    description: "Décryptez chaque ligne de votre bulletin de salaire avec les taux 2026.",
    url: "https://www.boncalcul.fr/blog/lire-sa-fiche-de-paie-2026",
    type: "article",
    locale: "fr_FR",
  },
};

export default function FicheDePayeArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Salaire brut / net en 2026 : comment lire réellement sa fiche de paie ?",
          description: "Décryptez chaque ligne de votre bulletin de salaire avec les taux 2026.",
          url: "https://www.boncalcul.fr/blog/lire-sa-fiche-de-paie-2026",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
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
            Salaire brut / net en 2026 : comment lire réellement sa fiche de paie ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Marie, assistante commerciale à Lyon, reçoit chaque mois un bulletin de salaire de deux pages qu&apos;elle parcourt en diagonale avant de vérifier le virement. Elle n&apos;est pas seule. Pourtant, cette feuille contient tout ce qu&apos;il faut pour savoir si on est payé correctement — et comprendre pourquoi il y a autant d&apos;écart entre le brut annoncé à l&apos;embauche et le net qui tombe sur le compte.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Le haut de la fiche : les informations de base</h2>
          <p>
            Avant même les chiffres, la fiche de paie doit obligatoirement mentionner l&apos;identité de l&apos;employeur (raison sociale, adresse, numéro SIRET), votre nom, votre emploi, votre classification conventionnelle et la convention collective applicable. Ce dernier point est souvent négligé, mais il détermine les minima salariaux, les règles sur les heures sup&apos; et les primes légales.
          </p>
          <p>
            On y trouve aussi le <strong>nombre d&apos;heures</strong> : base contractuelle (151,67h pour un temps plein) et heures réellement effectuées si elles diffèrent. C&apos;est là que se cache souvent la première erreur de paie.
          </p>

          <h2>Décomposition ligne par ligne des cotisations</h2>
          <p>
            La colonne de droite de votre bulletin liste toutes les retenues sur votre salaire brut. Voici ce que chaque poste signifie concrètement en 2026 :
          </p>

          <h3>La CSG et la CRDS</h3>
          <p>
            La Contribution Sociale Généralisée et la Contribution au Remboursement de la Dette Sociale représentent <strong>9,7 % de l&apos;assiette</strong> (98 % du brut). C&apos;est le poste le plus lourd sur votre fiche. À noter : 6,8 % de CSG sont non déductibles fiscalement — ce qui explique pourquoi votre <em>net imposable</em> est légèrement supérieur à votre net à payer.
          </p>

          <h3>La retraite de base et complémentaire</h3>
          <p>
            La retraite de base (CNAV) représente <strong>6,9 % du salaire brut</strong> dans la limite du plafond de la Sécurité Sociale (3 864 €/mois en 2026). Au-delà, le taux tombe à 0,4 %. La retraite complémentaire Agirc-Arrco ajoute environ <strong>3,15 % jusqu&apos;au plafond</strong> et 8,64 % entre 1 et 8 fois le plafond — cette partie varie selon que vous êtes cadre ou non.
          </p>

          <h3>L&apos;assurance maladie et prévoyance</h3>
          <p>
            La part salariale de l&apos;assurance maladie est nulle depuis 2018. En revanche, votre mutuelle d&apos;entreprise génère une cotisation prélevée sur le bulletin : en général 1 à 2 % du brut selon le contrat, dont votre employeur doit obligatoirement prendre en charge <strong>au moins 50 %</strong> (article L911-7 du Code de la Sécurité Sociale).
          </p>

          <h2>Tableau récapitulatif des cotisations salariales 2026</h2>
        </div>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Ligne de cotisation</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux salarial</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Assiette</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">CSG déductible</td>
                <td className="border border-gray-200 px-4 py-2 text-center">6,80 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">98 % du brut</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">CSG non déductible + CRDS</td>
                <td className="border border-gray-200 px-4 py-2 text-center">2,90 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">98 % du brut</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Retraite de base (≤ plafond SS)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">6,90 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Brut dans la limite de 3 864 €</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Retraite complémentaire Agirc-Arrco (tranche 1)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">3,15 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Jusqu&apos;au plafond SS</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Retraite complémentaire Agirc-Arrco (tranche 2)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">8,64 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Entre 1 et 8 plafonds SS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Mutuelle (part salariale min.)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">~1,00 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Variable selon contrat</td>
              </tr>
              <tr className="font-semibold bg-blue-50">
                <td className="border border-gray-200 px-4 py-2">Total approximatif non-cadre</td>
                <td className="border border-gray-200 px-4 py-2 text-center">~22 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">–</td>
              </tr>
              <tr className="font-semibold bg-blue-50">
                <td className="border border-gray-200 px-4 py-2">Total approximatif cadre</td>
                <td className="border border-gray-200 px-4 py-2 text-center">~25 %</td>
                <td className="border border-gray-200 px-4 py-2 text-center">–</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Net imposable vs net à payer : quelle différence ?</h2>
          <p>
            C&apos;est la confusion la plus fréquente. En bas de votre fiche de paie, vous trouverez deux lignes distinctes :
          </p>
          <ul>
            <li><strong>Net à payer</strong> (ou &laquo; net à payer avant impôt sur le revenu &raquo;) : c&apos;est la somme qui arrive sur votre compte bancaire, après prélèvement à la source.</li>
            <li><strong>Net imposable</strong> : montant légèrement supérieur, car il réintègre la CSG et la CRDS non déductibles (2,9 % × 98 % du brut). C&apos;est ce chiffre que vous déclarez aux impôts — et que l&apos;administration fiscale a déjà en face d&apos;elle grâce à la DSN.</li>
          </ul>
          <p>
            En clair : si votre net à payer est 2 100 €, votre net imposable sera autour de 2 155 €. C&apos;est sur ce second chiffre que se calcule votre impôt sur le revenu et donc votre taux de prélèvement à la source.
          </p>

          <h2>Ce qu&apos;on oublie souvent : les lignes sous le net</h2>
          <p>
            Depuis 2019, la fiche de paie comporte une zone récapitulative obligatoire en bas à gauche qui mentionne le <strong>coût total employeur</strong>. Si vous voyez 2 800 € brut pour un net de 2 200 €, sachez que votre employeur a lui-même versé environ 1 000 € supplémentaires en charges patronales, portant le coût réel à ~3 800 €.
          </p>
          <p>
            Autre point souvent mal compris : la ligne <strong>prélèvement à la source</strong>. Ce n&apos;est pas une cotisation sociale — c&apos;est votre avance d&apos;impôt prélevée directement par l&apos;employeur pour le compte du fisc. Le taux figure sur votre espace impôt.gouv.fr et peut être individualisé si vous êtes en couple.
          </p>

          <h2>Exemple chiffré complet</h2>
          <p>
            Thomas, technicien non-cadre, salaire brut mensuel de <strong>2 500 €</strong> :
          </p>
          <ul>
            <li>CSG/CRDS : 2 450 × 9,7 % = <strong>−237,65 €</strong></li>
            <li>Retraite base + complémentaire : 2 500 × ~10 % = <strong>−250 €</strong></li>
            <li>Mutuelle salariale : <strong>−25 €</strong></li>
            <li><strong>Net à payer avant PAS : ~1 987 €</strong></li>
            <li>Prélèvement à la source (taux 8 %) : <strong>−159 €</strong></li>
            <li><strong>Net versé : ~1 828 €</strong></li>
          </ul>
          <p>
            Son net imposable : 2 500 × (1 − 0,22) + (2 450 × 0,029) ≈ <strong>2 041 €</strong>, soit ~54 € de plus que le net à payer — c&apos;est la CSG non déductible réintégrée.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur brut / net 2026</p>
            <p className="text-blue-100 text-sm mt-1">Résultat instantané, cadre et non-cadre</p>
          </Link>
          <Link
            href="/outils/simulateur-smic"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Simulateur SMIC 2026</p>
            <p className="text-gray-500 text-sm mt-1">Temps plein, partiel, net et brut</p>
          </Link>
        </div>
      </article>
    </>
  );
}
