import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Charges micro-entrepreneur 2026 : taux, calcul et simulation",
  description:
    "Tous les taux de cotisations sociales du micro-entrepreneur en 2026 par activité. Exemples de calcul, plafonds de chiffre d'affaires et franchise TVA expliqués.",
  keywords: [
    "charges micro-entrepreneur 2026",
    "cotisations auto-entrepreneur 2026",
    "taux micro-entrepreneur",
    "plafond chiffre affaires micro",
    "calcul charges micro-entreprise",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/charges-micro-entrepreneur-2026",
  },
  openGraph: {
    title: "Charges micro-entrepreneur 2026 : taux et calcul",
    description:
      "Taux par activité, plafonds CA, franchise TVA et versement libératoire : tout comprendre sur les charges du micro-entrepreneur en 2026.",
    url: "https://www.boncalcul.fr/blog/charges-micro-entrepreneur-2026",
    type: "article",
    locale: "fr_FR",
  },
};

export default function MicroEntrepreneurArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Charges micro-entrepreneur 2026 : taux, calcul et simulation",
          description:
            "Taux de cotisations, plafonds de CA et franchise TVA pour le micro-entrepreneur en 2026.",
          url: "https://www.boncalcul.fr/blog/charges-micro-entrepreneur-2026",
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
            <span>Fiscalité &amp; indépendants</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Charges micro-entrepreneur 2026 : taux, plafonds et simulation
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Le régime micro-entrepreneur est souvent présenté comme simple — et il l&apos;est,
            comparé à d&apos;autres. Mais les taux de cotisations varient selon l&apos;activité, et
            quelques pièges existent. Voici ce qu&apos;il faut connaître pour 2026.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-10">10 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray prose-lg max-w-none">
          <h2>Le principe : on paye sur ce qu&apos;on encaisse</h2>
          <p>
            C&apos;est la grande force du régime micro : pas de chiffre d&apos;affaires, pas de
            charges. Les cotisations sont calculées en appliquant un taux fixe directement sur
            votre CA encaissé, sans déduction de frais. Simple, mais cela signifie aussi que vous
            cotisez même si votre activité n&apos;est pas rentable.
          </p>
          <p>
            Ce mode de calcul s&apos;appelle le <strong>prélèvement forfaitaire libératoire</strong>{" "}
            pour les cotisations sociales — et il existe une version équivalente pour l&apos;impôt
            sur le revenu (le versement libératoire d&apos;impôt, optionnel).
          </p>

          <h2>Les taux de cotisations sociales en 2026</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Type d&apos;activité
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    Taux cotisations sociales
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    Plafond CA annuel
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Vente de marchandises (BIC)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-blue-700">
                    12,3 %
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">188 700 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Prestations de services commerciales ou artisanales (BIC)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-blue-700">
                    21,2 %
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">77 700 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Activités libérales (BNC — CIPAV)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-blue-700">
                    21,1 %
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">77 700 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Activités libérales (BNC — Sécurité sociale des indépendants)
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-blue-700">
                    23,1 %
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">77 700 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ces taux couvrent l&apos;assurance maladie, la retraite de base, la retraite
            complémentaire, les allocations familiales et la CSG-CRDS. Tout inclus — c&apos;est le
            seul prélèvement social que vous aurez à gérer.
          </p>

          <h2>Exemples chiffrés</h2>

          <h3>Exemple 1 — Consultant en informatique (BIC services), 4 000 €/mois de CA</h3>
          <ul>
            <li>CA annuel : 48 000 €</li>
            <li>Cotisations : 48 000 × 21,2 % = <strong>10 176 €/an</strong> (848 €/mois)</li>
            <li>
              Revenu restant avant impôt sur le revenu : 48 000 − 10 176 = <strong>37 824 €/an</strong>
            </li>
          </ul>

          <h3>Exemple 2 — Revendeur en ligne (BIC vente), 8 000 €/mois de CA</h3>
          <ul>
            <li>CA annuel : 96 000 €</li>
            <li>Cotisations : 96 000 × 12,3 % = <strong>11 808 €/an</strong> (984 €/mois)</li>
            <li>
              Revenu restant avant IR : 96 000 − 11 808 = <strong>84 192 €/an</strong>
              <br />
              <em>
                (Attention : dans la vente, le &laquo; revenu &raquo; affiché ne tient pas compte
                de vos achats de marchandises — le régime micro ne permet pas de déduire les
                charges réelles)
              </em>
            </li>
          </ul>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-1">Quand le régime micro devient défavorable</p>
            <p className="text-amber-700 text-sm">
              Si vos charges professionnelles réelles dépassent l&apos;abattement forfaitaire fiscal
              (71 % pour la vente, 50 % pour les services), le régime réel devient plus avantageux.
              À partir d&apos;un certain niveau de CA, quitter la micro-entreprise pour une EURL ou
              SASU peut faire sens — à étudier avec un comptable.
            </p>
          </div>

          <h2>La franchise en base de TVA</h2>
          <p>
            En micro-entreprise, vous êtes dispensé de facturer la TVA — et donc de la
            reverser — tant que vous ne dépassez pas certains seuils. En 2026 :
          </p>
          <ul>
            <li>
              <strong>37 500 €</strong> de CA pour les prestations de services et activités
              libérales
            </li>
            <li>
              <strong>85 000 €</strong> de CA pour la vente de marchandises et l&apos;hébergement
            </li>
          </ul>
          <p>
            Au-delà, vous devez facturer la TVA à vos clients. Si vos clients sont des
            professionnels assujettis, c&apos;est neutre pour eux. Si ce sont des particuliers,
            votre prix TTC augmente mécaniquement — ce qui peut vous rendre moins compétitif.
          </p>

          <h2>Le versement libératoire d&apos;impôt (option)</h2>
          <p>
            En plus des cotisations sociales, vous pouvez opter pour le{" "}
            <strong>versement libératoire d&apos;impôt</strong> : vous payez l&apos;IR en même
            temps que vos cotisations, à un taux fixe sur votre CA.
          </p>

          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Activité</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Taux IR libératoire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Vente de marchandises</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 %</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Prestations de services BIC</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1,7 %</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Activités libérales BNC</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">2,2 %</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Cette option n&apos;est intéressante que si votre revenu fiscal de référence est
            modéré (conditions de revenus à respecter). Si vous êtes en tranche à 30 % ou plus,
            elle est souvent défavorable par rapport au barème progressif standard.
          </p>

          <h2>Déclaration et paiement des charges</h2>
          <p>
            Les cotisations se déclarent sur <strong>autoentrepreneur.urssaf.fr</strong>, tous les
            mois ou tous les trimestres selon votre choix à la création. Même si vous n&apos;avez
            encaissé aucun chiffre d&apos;affaires, vous devez déclarer — en mettant zéro. Oublier
            de déclarer, même à zéro, peut entraîner une pénalité forfaitaire.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-charges-micro-entrepreneur"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Calculer mes charges micro-entrepreneur
            </p>
            <p className="text-blue-100 text-sm mt-1">Résultat immédiat selon votre activité</p>
          </Link>
          <Link
            href="/outils/simulateur-impot-revenu"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
              Simuler mon impôt sur le revenu
            </p>
            <p className="text-gray-500 text-sm mt-1">Barème progressif 2026</p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Articles liés</h2>
          <ul>
            <li>
              <Link href="/blog/bareme-impot-revenu-2026">
                Barème impôt sur le revenu 2026 : tranches et taux
              </Link>
            </li>
            <li>
              <Link href="/blog/bareme-kilometrique-2026">
                Barème kilométrique 2026 (utile si vous utilisez votre voiture pro)
              </Link>
            </li>
            <li>
              <Link href="/fiscalite">Tous nos outils fiscalité</Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
