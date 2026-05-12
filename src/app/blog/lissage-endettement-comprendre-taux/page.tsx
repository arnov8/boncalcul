// FILE: src/app/blog/lissage-endettement-comprendre-taux/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Taux d'endettement : comment le calculer et que faire quand on dépasse les 35 % ?",
  description:
    "Définition exacte du taux d'endettement, ce qui entre (et n'entre pas) dans les charges, les 15 % de flexibilité HCSF, et les solutions concrètes pour retrouver de la capacité d'emprunt.",
  keywords: [
    "taux endettement 35%",
    "calcul taux endettement",
    "capacité emprunt immobilier",
    "dépasser taux endettement",
    "HCSF flexibilité crédit",
    "réduire taux endettement",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/lissage-endettement-comprendre-taux" },
  openGraph: {
    title: "Taux d'endettement : comment le calculer et que faire quand on dépasse les 35 % ?",
    description: "Calcul du taux d'endettement, règle des 35 %, flexibilité HCSF et solutions pour emprunter malgré un taux trop élevé.",
    url: "https://www.boncalcul.fr/blog/lissage-endettement-comprendre-taux",
    type: "article",
    locale: "fr_FR",
  },
};

export default function TauxEndettementArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Taux d'endettement : comment le calculer et que faire quand on dépasse les 35 % ?",
          description: "Calcul du taux d'endettement, règle des 35 %, flexibilité HCSF et solutions pour emprunter malgré un taux trop élevé.",
          url: "https://www.boncalcul.fr/blog/lissage-endettement-comprendre-taux",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Immobilier</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Taux d&apos;endettement : comment le calculer et que faire quand on dépasse les 35 % ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            La règle des 35 % est la première chose que votre banquier regarde quand vous déposez un
            dossier de prêt immobilier. Comprendre exactement comment elle est calculée — et surtout
            comment agir quand on la dépasse — peut changer le résultat de votre demande.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2>La définition exacte du taux d&apos;endettement</h2>
          <p>
            Le taux d&apos;endettement se calcule ainsi :
          </p>
          <p className="font-mono bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm">
            Taux d&apos;endettement = (Charges fixes mensuelles ÷ Revenus nets mensuels avant impôts) × 100
          </p>
          <p>
            Notez bien : <strong>revenus nets avant impôts</strong> — et non pas le salaire net perçu
            après prélèvement à la source. Cette précision change le calcul en votre faveur : si vous
            gagnez 3 200 € net perçu et que le PAS prélève 320 €, la banque retiendra 3 520 € de revenus.
          </p>

          <h2>Ce qui entre dans les charges — et ce qui n&apos;y entre pas</h2>

          <h3>Ce qui est compté comme charges :</h3>
          <ul>
            <li>Mensualités de crédit immobilier (le nouveau + les existants)</li>
            <li>Mensualités de crédit à la consommation (auto, travaux, perso)</li>
            <li>Mensualités de crédit revolving utilisé</li>
            <li>Loyer garanti en cas de caution sur un bail (si vous vous portez garant pour un tiers)</li>
            <li>Pension alimentaire versée (fixée par jugement)</li>
          </ul>

          <h3>Ce qui n&apos;entre PAS dans les charges :</h3>
          <ul>
            <li>Abonnements téléphoniques, internet, streaming</li>
            <li>Loyer de votre résidence principale actuelle (si vous achetez pour y habiter)</li>
            <li>Charges de copropriété courantes</li>
            <li>Impôts et taxes (taxe foncière, etc.)</li>
            <li>Dépenses alimentaires, transports, loisirs</li>
          </ul>
          <p>
            Cette distinction est importante : beaucoup de candidats à l&apos;emprunt surestiment leur
            taux d&apos;endettement en y incluant des dépenses qui n&apos;y ont pas leur place.
          </p>

          <h2>Exemples de profils avec calcul du taux</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Profil</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Revenus nets av. impôts</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Charges actuelles</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Mensualité max 35 %</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux endettement actuel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Célibataire CDI</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">2 800 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">250 € (auto)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">730 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">8,9 %</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Couple double salaire</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">5 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">400 € (conso)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 525 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">7,3 %</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Investisseur locatif</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">4 200 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">900 € (immo existant)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">570 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">21,4 %</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Profil tendu (multi-crédits)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">3 500 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 050 € (auto + conso)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">175 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-red-600">30 %</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Les 15 % de flexibilité HCSF : qui en bénéficie ?</h2>
          <p>
            Le Haut Conseil de Stabilité Financière (HCSF) autorise les banques à dépasser le seuil des
            35 % pour <strong>20 % de leur production trimestrielle de crédits immobiliers</strong>. Dans
            ces cas, le taux peut monter jusqu&apos;à <strong>37 à 40 %</strong> selon les établissements.
          </p>
          <p>
            Cette flexibilité est prioritairement accordée aux :
          </p>
          <ul>
            <li><strong>Primo-accédants</strong> qui achètent leur résidence principale</li>
            <li>Profils avec un <strong>reste à vivre élevé</strong> malgré le taux d&apos;endettement</li>
            <li>Dossiers présentant un <strong>apport personnel significatif</strong> (20 % ou plus)</li>
          </ul>
          <p>
            Il ne s&apos;agit pas d&apos;un droit, mais d&apos;une dérogation discrétionnaire. Pour en bénéficier,
            votre dossier doit être solide sur les autres critères.
          </p>

          <h2>Comment réduire son taux d&apos;endettement concrètement ?</h2>

          <h3>Option 1 : Racheter ses crédits à la consommation</h3>
          <p>
            Un rachat de crédit (regroupement) permet de fondre plusieurs mensualités en une seule, plus
            faible. Si vous avez un crédit auto à 350 €/mois et un crédit travaux à 180 €/mois, un rachat
            pourrait ramener l&apos;ensemble à 280 €/mois — libérant 250 € de capacité de remboursement.
            <strong> Attention</strong> : vous allongez la durée et le coût total augmente. C&apos;est un
            outil tactique pour un achat immobilier, pas une solution d&apos;optimisation long terme.
          </p>

          <h3>Option 2 : Augmenter son apport personnel</h3>
          <p>
            Un apport plus important réduit le capital emprunté, donc la mensualité du futur crédit.
            Passer de 10 % à 20 % d&apos;apport sur un achat de 300 000 € (soit 30 000 € supplémentaires)
            réduit la mensualité d&apos;environ 160 € sur 20 ans à taux constant — ce qui peut faire basculer
            un dossier de 36,5 % à 34,8 %.
          </p>

          <h3>Option 3 : Allonger la durée du prêt (avec précautions)</h3>
          <p>
            Passer de 20 à 25 ans réduit mécaniquement la mensualité. Sur 200 000 € à 3,5 %, la mensualité
            passe de 1 160 € (20 ans) à 1 001 € (25 ans) — soit 159 € de moins. Mais le coût total des
            intérêts augmente de 14 000 €. C&apos;est un levier à utiliser avec discernement.
          </p>

          <h3>Option 4 : Intégrer les revenus locatifs au calcul</h3>
          <p>
            Pour un investissement locatif, les banques prennent en compte les loyers futurs — généralement
            à hauteur de <strong>70 % du loyer brut</strong> (les 30 % couvrent vacance locative et charges).
            Un loyer de 800 €/mois ajoute 560 € de revenus dans le calcul. Cette prise en compte peut
            significativement améliorer le ratio d&apos;endettement apparent.
          </p>

          <h2>Le reste à vivre : l&apos;indicateur que la banque regarde aussi</h2>
          <p>
            Au-delà du taux d&apos;endettement brut, la banque calcule le <strong>reste à vivre</strong> :
            ce qu&apos;il vous reste après toutes les charges fixes. Un taux d&apos;endettement de 33 % sur
            un revenu de 2 200 € (reste à vivre : 1 474 €) est perçu comme bien plus risqué que le même
            taux sur un revenu de 8 000 € (reste à vivre : 5 360 €). Pour une famille avec enfants, les
            banques exigent généralement un reste à vivre d&apos;au moins 1 200 à 1 500 € par mois.
          </p>

        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-capacite-emprunt"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de capacité d&apos;emprunt</p>
            <p className="text-blue-100 text-sm mt-1">Calculez votre taux d&apos;endettement et votre capacité d&apos;emprunt maximale</p>
          </Link>
          <Link
            href="/outils/simulateur-rachat-credit"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur de rachat de crédit</p>
            <p className="text-gray-500 text-sm mt-1">Estimez le gain d&apos;un regroupement de vos crédits</p>
          </Link>
        </div>
      </article>
    </>
  );
}
