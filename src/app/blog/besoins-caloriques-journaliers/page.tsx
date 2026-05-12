// FILE: src/app/blog/besoins-caloriques-journaliers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Besoins caloriques journaliers : métabolisme de base, activité physique et réalité",
  description: "Combien de calories avez-vous vraiment besoin par jour ? Formules Harris-Benedict et Mifflin-St Jeor, facteurs d'activité, exemples concrets et les erreurs que presque tout le monde commet.",
  keywords: ["besoins caloriques", "métabolisme de base", "Harris-Benedict", "Mifflin-St Jeor", "calories journalières", "activité physique", "dépense énergétique"],
  alternates: { canonical: "https://www.boncalcul.fr/blog/besoins-caloriques-journaliers" },
  openGraph: {
    title: "Besoins caloriques journaliers : métabolisme de base, activité physique et réalité",
    description: "Combien de calories avez-vous vraiment besoin par jour ? Formules Harris-Benedict et Mifflin-St Jeor, facteurs d'activité, exemples concrets et les erreurs que presque tout le monde commet.",
    url: "https://www.boncalcul.fr/blog/besoins-caloriques-journaliers",
    type: "article",
    locale: "fr_FR",
  },
};

export default function BesoinsCaloriques() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Besoins caloriques journaliers : métabolisme de base, activité physique et réalité",
          description: "Combien de calories avez-vous vraiment besoin par jour ? Formules Harris-Benedict et Mifflin-St Jeor, facteurs d'activité, exemples concrets et les erreurs que presque tout le monde commet.",
          url: "https://www.boncalcul.fr/blog/besoins-caloriques-journaliers",
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
            Besoins caloriques journaliers : métabolisme de base, activité physique et réalité
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            "1 500 calories par jour pour maigrir" — cette phrase répétée partout ne tient pas compte de qui vous êtes. Votre corps a des besoins précis, calculables, qui dépendent de votre âge, votre poids, votre taille et ce que vous faites de vos journées.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Le métabolisme de base : ce que votre corps brûle au repos</h2>
          <p>
            Même allongé toute la journée, votre corps dépense de l'énergie pour maintenir les fonctions vitales : respiration, circulation, température corporelle, fonctionnement des organes. C'est le <strong>métabolisme de base (MB)</strong>, et il représente 60 à 70 % de votre dépense énergétique totale.
          </p>
          <p>
            Deux formules scientifiques permettent de l'estimer. La plus ancienne, <strong>Harris-Benedict (1919, révisée en 1984)</strong> :
          </p>
          <ul>
            <li><strong>Femme :</strong> MB = 9,740 × poids (kg) + 172,9 × taille (m) − 4,737 × âge + 667,051</li>
            <li><strong>Homme :</strong> MB = 13,707 × poids (kg) + 492,3 × taille (m) − 6,673 × âge + 77,607</li>
          </ul>
          <p>
            La plus récente et aujourd'hui considérée comme plus précise, <strong>Mifflin-St Jeor (1990)</strong> :
          </p>
          <ul>
            <li><strong>Femme :</strong> MB = (10 × poids) + (6,25 × taille en cm) − (5 × âge) − 161</li>
            <li><strong>Homme :</strong> MB = (10 × poids) + (6,25 × taille en cm) − (5 × âge) + 5</li>
          </ul>
          <p>
            La différence entre les deux est généralement faible (50 à 100 kcal), mais Mifflin-St Jeor tend à être plus juste pour les personnes en surpoids.
          </p>

          <h2>Multiplier par le facteur d'activité</h2>
          <p>
            Le métabolisme de base n'est que la première étape. On le multiplie par un <strong>coefficient d'activité physique</strong> pour obtenir la dépense énergétique totale (DET), c'est-à-dire vos besoins caloriques réels.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Niveau d'activité</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Description</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Coefficient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Sédentaire</td>
                  <td className="border border-gray-200 px-4 py-2">Peu ou pas de sport, travail de bureau</td>
                  <td className="border border-gray-200 px-4 py-2">× 1,2</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Légèrement actif</td>
                  <td className="border border-gray-200 px-4 py-2">Sport 1 à 3 fois par semaine</td>
                  <td className="border border-gray-200 px-4 py-2">× 1,375</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Modérément actif</td>
                  <td className="border border-gray-200 px-4 py-2">Sport 3 à 5 fois par semaine</td>
                  <td className="border border-gray-200 px-4 py-2">× 1,55</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Très actif</td>
                  <td className="border border-gray-200 px-4 py-2">Sport intense 6 à 7 fois par semaine</td>
                  <td className="border border-gray-200 px-4 py-2">× 1,725</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Extrêmement actif</td>
                  <td className="border border-gray-200 px-4 py-2">Sportif professionnel ou travail physique intense</td>
                  <td className="border border-gray-200 px-4 py-2">× 1,9</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Deux exemples concrets</h2>
          <p>
            <strong>Sophie, 30 ans, 1,65 m, 60 kg</strong>, graphiste (sédentaire). Son MB selon Mifflin : (10 × 60) + (6,25 × 165) − (5 × 30) − 161 = <strong>1 401 kcal/jour</strong>. Sa dépense totale : 1 401 × 1,2 = <strong>environ 1 680 kcal/jour</strong>.
          </p>
          <p>
            <strong>Marc, 40 ans, 1,80 m, 80 kg</strong>, commercial qui fait du vélo 4 fois par semaine (modérément actif). Son MB : (10 × 80) + (6,25 × 180) − (5 × 40) + 5 = <strong>1 830 kcal/jour</strong>. Sa dépense totale : 1 830 × 1,55 = <strong>environ 2 836 kcal/jour</strong>.
          </p>
          <p>
            Imposer 1 500 kcal à Marc serait un déficit de plus de 1 300 kcal par jour — brutal, non soutenable, et probablement contre-productif à terme.
          </p>

          <h2>Les erreurs classiques qui faussent tout</h2>
          <p>
            La première erreur est de <strong>sous-estimer ce qu'on mange</strong>. Des études montrent qu'on sous-estime spontanément ses apports de 20 à 40 %. Un café avec du sucre par-ci, une poignée d'amandes par-là — ça monte vite.
          </p>
          <p>
            La deuxième est de <strong>surestimer les calories brûlées au sport</strong>. Une heure de marche rapide brûle environ 250 à 350 kcal — l'équivalent d'une barre de céréales. Le sport est essentiel pour la santé, mais compenser une mauvaise alimentation avec l'exercice est très difficile.
          </p>
          <p>
            La troisième : <strong>croire que le même chiffre convient à tout le monde</strong>. Sophie a besoin de 1 680 kcal pour maintenir son poids. Proposer ce même chiffre à Marc serait lui demander de se mettre en déficit de plus de 1 000 kcal. Ce n'est pas du tout la même situation.
          </p>

          <h2>Ce que le calcul ne remplace pas</h2>
          <p>
            Ces formules donnent une excellente base de départ, mais elles restent des estimations. La génétique, le microbiome intestinal, la qualité du sommeil, le stress chronique — tous ces facteurs influencent la façon dont votre corps utilise l'énergie. Pour un suivi personnalisé, un diététicien-nutritionniste reste l'interlocuteur le mieux placé.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-calories"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mes besoins caloriques</p>
            <p className="text-blue-100 text-sm mt-1">Formule Mifflin-St Jeor avec coefficient d'activité personnalisé</p>
          </Link>
          <Link
            href="/outils/calcul-imc"
            className="flex-1 block bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mon IMC</p>
            <p className="text-blue-100 text-sm mt-1">Situer votre poids par rapport aux références OMS</p>
          </Link>
        </div>
      </article>
    </>
  );
}
