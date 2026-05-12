// FILE: src/app/blog/cout-reel-salarie-charges-patronales/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Coût réel d'un salarié : ce que paye vraiment l'employeur au-delà du salaire brut",
  description:
    "Décomposition des charges patronales 2026 : URSSAF, retraite, chômage, formation, prévoyance. Coût total pour un SMIC et pour un cadre à 45 000 € brut annuel.",
  keywords: [
    "coût salarié employeur 2026",
    "charges patronales 2026",
    "coût total salarié",
    "charges URSSAF employeur",
    "cotisations patronales retraite chômage",
    "coût embauche salarié",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/cout-reel-salarie-charges-patronales",
  },
  openGraph: {
    title: "Coût réel d'un salarié : tout ce que paye l'employeur en 2026",
    description: "Charges patronales détaillées, exemples SMIC et cadre 45k.",
    url: "https://www.boncalcul.fr/blog/cout-reel-salarie-charges-patronales",
    type: "article",
    locale: "fr_FR",
  },
};

export default function CoutSalarieArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Coût réel d'un salarié : ce que paye vraiment l'employeur au-delà du salaire brut",
          description: "Charges patronales détaillées, exemples SMIC et cadre 45k.",
          url: "https://www.boncalcul.fr/blog/cout-reel-salarie-charges-patronales",
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
            Coût réel d&apos;un salarié : ce que paye vraiment l&apos;employeur au-delà du salaire brut
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un gérant de PME qui embauche son premier salarié au SMIC pense débourser 1 803 € par mois. La réalité est plus proche de 2 350 €. Ce gap de 550 €, c&apos;est la masse des charges patronales — souvent mal connues, jamais négligeables. Voici comment se décompose le vrai coût d&apos;un salarié en 2026.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>La structure des charges patronales en 2026</h2>
          <p>
            Les charges patronales sont les cotisations sociales versées par l&apos;employeur <em>en plus</em> du salaire brut. Elles ne sont pas visibles sur le bulletin de paie du salarié (sauf dans la zone récapitulative introduite en 2019), mais elles représentent en moyenne <strong>40 à 45 % du salaire brut</strong> pour un non-cadre, et peuvent dépasser 50 % pour un cadre.
          </p>
          <p>
            Ces charges financent les mêmes protections sociales que les cotisations salariales, mais aussi des dispositifs supplémentaires comme la formation professionnelle ou la médecine du travail.
          </p>

          <h2>Décomposition des charges patronales poste par poste</h2>
        </div>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Cotisation patronale</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux indicatif 2026</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Ce que ça finance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Assurance maladie, maternité, invalidité, décès</td>
                <td className="border border-gray-200 px-4 py-2 text-center">7,00 %</td>
                <td className="border border-gray-200 px-4 py-2">Remboursements Sécu</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Allocations familiales</td>
                <td className="border border-gray-200 px-4 py-2 text-center">3,45 % (taux réduit &lt;3,5 SMIC) / 5,25 %</td>
                <td className="border border-gray-200 px-4 py-2">CAF, aides familiales</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Accidents du travail / maladies professionnelles</td>
                <td className="border border-gray-200 px-4 py-2 text-center">Variable (0,5 % à 15 %)</td>
                <td className="border border-gray-200 px-4 py-2">Risques AT/MP selon secteur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Retraite de base (part patronale)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">8,55 % (≤ plafond SS)</td>
                <td className="border border-gray-200 px-4 py-2">CNAV, retraite de base</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Retraite complémentaire Agirc-Arrco (patronale)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">4,72 % (tranche 1) / 12,95 % (tranche 2)</td>
                <td className="border border-gray-200 px-4 py-2">Points retraite complémentaire</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Assurance chômage (part patronale)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">4,05 %</td>
                <td className="border border-gray-200 px-4 py-2">Allocations ARE (France Travail)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">AGS (garantie des salaires)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">0,15 %</td>
                <td className="border border-gray-200 px-4 py-2">Protection en cas de faillite</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Formation professionnelle (CPF)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">0,55 % à 1 % selon effectif</td>
                <td className="border border-gray-200 px-4 py-2">Compte Personnel de Formation</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Taxe d&apos;apprentissage</td>
                <td className="border border-gray-200 px-4 py-2 text-center">0,68 % (hors Alsace-Moselle)</td>
                <td className="border border-gray-200 px-4 py-2">Financement de l&apos;apprentissage</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Mutuelle (part patronale min.)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">≥ 50 % de la cotisation totale</td>
                <td className="border border-gray-200 px-4 py-2">Complémentaire santé obligatoire</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Médecine du travail (SPSTI)</td>
                <td className="border border-gray-200 px-4 py-2 text-center">~100 à 150 €/an/salarié</td>
                <td className="border border-gray-200 px-4 py-2">Suivi médical obligatoire</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Exemple 1 : salarié au SMIC (non-cadre, secteur tertiaire)</h2>
          <p>
            Salaire brut mensuel : <strong>1 802,67 €</strong> (SMIC 2026, 35h)
          </p>
          <ul>
            <li>Charges patronales estimées (~30 % du brut après réduction Fillon) : <strong>540 €</strong></li>
            <li><strong>Coût employeur total : ~2 343 €/mois</strong></li>
            <li>Net salarié perçu : ~1 406 €</li>
            <li>Ratio net/coût total : <strong>60 %</strong></li>
          </ul>
          <p>
            La réduction générale des cotisations patronales (dite &laquo; réduction Fillon &raquo;, article L241-13 du Code de la Sécurité Sociale) permet à un employeur de diviser par presque deux les charges patronales au niveau du SMIC. Sans cette réduction, le coût serait proche de 2 600 €.
          </p>

          <h2>Exemple 2 : cadre à 45 000 € brut annuel</h2>
          <p>
            Salaire brut mensuel : <strong>3 750 €</strong>
          </p>
          <ul>
            <li>Charges patronales estimées (~45 % du brut — pas de réduction Fillon au-delà de 1,6 SMIC) : <strong>1 688 €</strong></li>
            <li><strong>Coût employeur total : ~5 438 €/mois</strong>, soit <strong>65 250 €/an</strong></li>
            <li>Net salarié perçu : ~2 813 €</li>
            <li>Ratio net/coût total : <strong>52 %</strong></li>
          </ul>
          <p>
            Autrement dit, pour un cadre à 45 000 € de brut annuel, l&apos;employeur débourse réellement plus de 65 000 € par an. C&apos;est le chiffre qui compte dans un budget d&apos;embauche.
          </p>

          <h2>Ce qu&apos;on oublie souvent dans le coût réel</h2>
          <p>
            Au-delà des charges URSSAF, plusieurs postes invisibles s&apos;ajoutent au coût global :
          </p>
          <ul>
            <li><strong>Participation aux titres-restaurant</strong> : entre 4 € et 7 € par jour travaillé à charge de l&apos;employeur</li>
            <li><strong>Remboursement 50 % des transports en commun</strong> : obligatoire (article L3261-2 du Code du travail)</li>
            <li><strong>Coût du recrutement</strong> : annonce, cabinet, temps RH — entre 2 000 et 10 000 € selon le profil</li>
            <li><strong>Formation initiale</strong> : 1 à 3 mois de productivité réduite pour un nouveau poste qualifié</li>
            <li><strong>Congés payés</strong> : représentent +10 % de la masse salariale (25 jours ouvrés / 230 jours travaillés)</li>
          </ul>
          <p>
            Intégré, le coût global d&apos;un salarié dépasse souvent <strong>70 à 80 % du salaire brut annuel</strong> — c&apos;est la donnée que tout dirigeant de TPE/PME devrait avoir en tête avant une embauche.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/cout-salarie-employeur"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur coût salarié employeur</p>
            <p className="text-blue-100 text-sm mt-1">Coût total, charges patronales, réduction Fillon</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Convertisseur brut / net</p>
            <p className="text-gray-500 text-sm mt-1">Ce que touche réellement le salarié</p>
          </Link>
        </div>
      </article>
    </>
  );
}
