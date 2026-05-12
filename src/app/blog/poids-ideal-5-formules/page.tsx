// FILE: src/app/blog/poids-ideal-5-formules/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Poids idéal : les 5 formules qui existent et pourquoi elles donnent des résultats différents",
  description: "Lorentz, Broca, Devine, Hamwi, Monnerot-Dumaine : cinq formules pour calculer le poids idéal, cinq résultats différents. Comparatif et explications pour un homme de 1m75.",
  keywords: ["poids idéal", "formule Lorentz", "formule Broca", "formule Devine", "formule Hamwi", "Monnerot-Dumaine", "poids santé", "calcul poids idéal"],
  alternates: { canonical: "https://www.boncalcul.fr/blog/poids-ideal-5-formules" },
  openGraph: {
    title: "Poids idéal : les 5 formules qui existent et pourquoi elles donnent des résultats différents",
    description: "Lorentz, Broca, Devine, Hamwi, Monnerot-Dumaine : cinq formules pour calculer le poids idéal, cinq résultats différents. Comparatif et explications pour un homme de 1m75.",
    url: "https://www.boncalcul.fr/blog/poids-ideal-5-formules",
    type: "article",
    locale: "fr_FR",
  },
};

export default function PoidsIdeal5Formules() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Poids idéal : les 5 formules qui existent et pourquoi elles donnent des résultats différents",
          description: "Lorentz, Broca, Devine, Hamwi, Monnerot-Dumaine : cinq formules pour calculer le poids idéal, cinq résultats différents. Comparatif et explications pour un homme de 1m75.",
          url: "https://www.boncalcul.fr/blog/poids-ideal-5-formules",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Santé</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Poids idéal : les 5 formules qui existent et pourquoi elles donnent des résultats différents
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Si vous cherchez votre "poids idéal" en ligne, vous risquez de tomber sur des chiffres qui varient de 5 à 10 kg selon la source. Ce n'est pas une erreur : il existe cinq grandes formules, chacune avec sa propre logique — et ses propres limites.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Les 5 formules de référence</h2>
          <p>
            Prenons un exemple concret pour les comparer : <strong>Julien, homme de 1,75 m</strong>. Voici ce que donne chaque formule :
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Formule</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Formule (homme)</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Résultat pour 1,75 m</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Lorentz</td>
                  <td className="border border-gray-200 px-4 py-2">Taille (cm) − 100 − (Taille − 150) / 4</td>
                  <td className="border border-gray-200 px-4 py-2">68,75 kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">Broca</td>
                  <td className="border border-gray-200 px-4 py-2">Taille (cm) − 100</td>
                  <td className="border border-gray-200 px-4 py-2">75 kg</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Devine</td>
                  <td className="border border-gray-200 px-4 py-2">50 + 2,3 × (taille en pouces − 60)</td>
                  <td className="border border-gray-200 px-4 py-2">≈ 71,5 kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">Hamwi</td>
                  <td className="border border-gray-200 px-4 py-2">48 + 2,7 × (taille en pouces − 60)</td>
                  <td className="border border-gray-200 px-4 py-2">≈ 73,5 kg</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Monnerot-Dumaine</td>
                  <td className="border border-gray-200 px-4 py-2">(Taille − 100 + 4 × IMC ciblé) / 2</td>
                  <td className="border border-gray-200 px-4 py-2">≈ 67 kg (IMC 22)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Pour le même homme d'1,75 m, les résultats s'échelonnent de <strong>67 kg à 75 kg</strong> selon la formule utilisée. Un écart de 8 kg — ce n'est pas anodin.
          </p>

          <h2>Pourquoi autant de divergences ?</h2>
          <p>
            Chaque formule a été conçue avec une logique différente et dans un contexte différent.
          </p>
          <p>
            <strong>Broca (1871)</strong> est la plus ancienne et la plus simple. Elle a été mise au point par un chirurgien français comme référence clinique rapide — elle tend à surestimer le poids idéal, surtout pour les personnes de petite taille.
          </p>
          <p>
            <strong>Lorentz</strong> corrige Broca en introduisant un terme correctif qui réduit le poids idéal pour les tailles plus élevées. Elle est souvent plus raisonnable sur la fourchette haute.
          </p>
          <p>
            <strong>Devine (1974)</strong> et <strong>Hamwi (1964)</strong> sont d'origine américaine, conçues à l'origine pour le dosage médicamenteux en milieu hospitalier — pas vraiment pour définir un "idéal esthétique". Elles utilisent les pouces comme unité de base, ce qui explique leur aspect moins intuitif en France.
          </p>
          <p>
            <strong>Monnerot-Dumaine</strong> est la seule à faire référence explicitement à un IMC cible. En visant un IMC de 22 ou 23 (milieu de la fourchette normale OMS), elle donne un résultat ajustable selon l'objectif choisi.
          </p>

          <h2>La notion de "poids de forme" : ce que les formules ne capturent pas</h2>
          <p>
            Au-delà des calculs, les professionnels de santé parlent souvent de <strong>poids de forme</strong> : le poids auquel une personne se sent bien, maintient facilement sa condition physique, et que son corps semble vouloir naturellement garder sur le long terme.
          </p>
          <p>
            Ce poids peut varier selon la morphologie (ossature fine, moyenne ou solide), le niveau d'activité habituel, et des facteurs génétiques. Pour deux femmes de 1,65 m, le poids de forme peut légitimement différer de 6 à 8 kg.
          </p>

          <h2>Des outils utiles, mais pas des verdicts</h2>
          <p>
            Ces formules ont toutes le même angle mort : elles ne connaissent pas votre composition corporelle. Une femme de 60 ans musclée et active aura un poids de forme très différent d'une femme sédentaire du même âge et de la même taille — même si les deux formules renverraient le même chiffre.
          </p>
          <p>
            Considérez le résultat d'un calculateur de poids idéal comme une fourchette de référence, pas comme un chiffre à atteindre absolument. Si vous avez des doutes ou des objectifs de santé précis, un médecin ou un diététicien est mieux placé pour vous guider.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-poids-ideal"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mon poids idéal</p>
            <p className="text-blue-100 text-sm mt-1">Comparez les 5 formules en une seule fois selon votre profil</p>
          </Link>
          <Link
            href="/outils/calcul-imc"
            className="flex-1 block bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mon IMC</p>
            <p className="text-blue-100 text-sm mt-1">Situez-vous par rapport aux catégories OMS</p>
          </Link>
        </div>
      </article>
    </>
  );
}
