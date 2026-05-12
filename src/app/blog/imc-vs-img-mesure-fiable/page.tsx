// FILE: src/app/blog/imc-vs-img-mesure-fiable/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "IMC vs IMG : quelle mesure est réellement plus fiable pour évaluer son poids santé ?",
  description: "IMC et IMG ne mesurent pas la même chose. Découvrez pourquoi l'IMC peut être trompeur chez les sportifs et les seniors, et quand l'indice de masse grasse donne une image plus juste.",
  keywords: ["IMC", "IMG", "indice de masse corporelle", "indice de masse grasse", "poids santé", "Deurenberg", "masse grasse"],
  alternates: { canonical: "https://www.boncalcul.fr/blog/imc-vs-img-mesure-fiable" },
  openGraph: {
    title: "IMC vs IMG : quelle mesure est réellement plus fiable pour évaluer son poids santé ?",
    description: "IMC et IMG ne mesurent pas la même chose. Découvrez pourquoi l'IMC peut être trompeur chez les sportifs et les seniors, et quand l'indice de masse grasse donne une image plus juste.",
    url: "https://www.boncalcul.fr/blog/imc-vs-img-mesure-fiable",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ImcVsImg() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "IMC vs IMG : quelle mesure est réellement plus fiable pour évaluer son poids santé ?",
          description: "IMC et IMG ne mesurent pas la même chose. Découvrez pourquoi l'IMC peut être trompeur chez les sportifs et les seniors, et quand l'indice de masse grasse donne une image plus juste.",
          url: "https://www.boncalcul.fr/blog/imc-vs-img-mesure-fiable",
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
            IMC vs IMG : quelle mesure est réellement plus fiable pour évaluer son poids santé ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deux personnes peuvent afficher exactement le même IMC et avoir des compositions corporelles radicalement différentes. L'une peut être en excellente santé, l'autre en surpoids de graisse. Voici ce que chaque indice mesure vraiment — et lequel choisir selon votre profil.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>L'IMC : une formule rapide, mais pas universelle</h2>
          <p>
            L'Indice de Masse Corporelle se calcule en divisant le poids (en kg) par le carré de la taille (en mètres) : <strong>IMC = poids / taille²</strong>. C'est la mesure la plus connue, utilisée partout des cabinets médicaux aux formulaires d'assurance.
          </p>
          <p>
            Son avantage ? Il est simple, rapide, et ne nécessite aucun équipement. Mais il a un défaut majeur : il ne distingue pas la masse grasse de la masse musculaire. Un kilo de muscle et un kilo de graisse pèsent pareil sur la balance — et donc dans la formule.
          </p>

          <h2>Les seuils OMS de l'IMC</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">IMC</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Catégorie OMS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Moins de 18,5</td>
                  <td className="border border-gray-200 px-4 py-2">Insuffisance pondérale</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">18,5 – 24,9</td>
                  <td className="border border-gray-200 px-4 py-2">Poids normal</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">25,0 – 29,9</td>
                  <td className="border border-gray-200 px-4 py-2">Surpoids</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">30,0 – 34,9</td>
                  <td className="border border-gray-200 px-4 py-2">Obésité modérée (classe I)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">35,0 – 39,9</td>
                  <td className="border border-gray-200 px-4 py-2">Obésité sévère (classe II)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">40 et plus</td>
                  <td className="border border-gray-200 px-4 py-2">Obésité morbide (classe III)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>L'IMG : quand on veut vraiment savoir ce que contient le corps</h2>
          <p>
            L'Indice de Masse Grasse exprime le pourcentage de graisse dans le corps total. La formule la plus répandue est celle de <strong>Deurenberg (1991)</strong> :
          </p>
          <p>
            <strong>IMG = (1,20 × IMC) + (0,23 × âge) − (10,8 × sexe) − 5,4</strong><br />
            (où sexe = 1 pour les hommes, 0 pour les femmes)
          </p>
          <p>
            C'est plus complexe, mais ça prend en compte ce que l'IMC ignore : l'âge (on stocke plus de graisse en vieillissant, même à poids égal) et le sexe (les femmes ont naturellement plus de masse grasse que les hommes).
          </p>

          <h2>Interprétation de l'IMG selon l'âge et le sexe</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Âge</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">IMG normal – Femme</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">IMG normal – Homme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">20–39 ans</td>
                  <td className="border border-gray-200 px-4 py-2">21 – 32 %</td>
                  <td className="border border-gray-200 px-4 py-2">8 – 19 %</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">40–59 ans</td>
                  <td className="border border-gray-200 px-4 py-2">23 – 33 %</td>
                  <td className="border border-gray-200 px-4 py-2">11 – 21 %</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">60 ans et plus</td>
                  <td className="border border-gray-200 px-4 py-2">24 – 35 %</td>
                  <td className="border border-gray-200 px-4 py-2">13 – 24 %</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>L'exemple qui illustre tout : Karim et Thomas</h2>
          <p>
            Karim et Thomas ont tous les deux 35 ans, mesurent 1,78 m et pèsent 85 kg. Leur IMC est identique : <strong>26,8</strong> — ce qui les classe tous les deux en "surpoids" selon l'OMS.
          </p>
          <p>
            Mais Karim fait de la musculation 4 fois par semaine depuis 5 ans. Son IMG est de <strong>14 %</strong>, bien dans la norme masculine. Thomas, lui, est sédentaire depuis plusieurs années. Son IMG atteint <strong>29 %</strong>, ce qui correspond à de l'obésité par la masse grasse.
          </p>
          <p>
            Même IMC, situations radicalement différentes. L'IMC a mis Karim en "surpoids" à tort. C'est le cas typique du sportif musclé pénalisé par une formule qui ne distingue pas les tissus.
          </p>

          <h2>Le cas des seniors : l'IMC sous-estime le problème</h2>
          <p>
            Chez les personnes de plus de 60 ans, c'est souvent l'inverse : l'IMC peut paraître normal alors que la masse musculaire a fondu (c'est ce qu'on appelle la sarcopénie) et a été remplacée par de la graisse. Un IMC à 23 peut cacher un IMG de 33 % chez une femme de 68 ans — ce que seul l'IMG révèle.
          </p>

          <h2>Alors, lequel utiliser ?</h2>
          <p>
            L'IMC reste utile pour une première orientation rapide, dans le cadre d'un suivi de population générale. Mais si vous êtes sportif, senior, ou si votre bilan IMC vous semble incohérent avec votre ressenti, l'IMG apporte une couche de précision essentielle.
          </p>
          <p>
            Dans tous les cas, ces indices sont des outils d'orientation, pas des diagnostics. Seul un professionnel de santé peut interpréter ces chiffres dans leur contexte global.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-imc"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mon IMC</p>
            <p className="text-blue-100 text-sm mt-1">Résultat instantané avec interprétation par catégorie OMS</p>
          </Link>
          <Link
            href="/outils/calcul-img"
            className="flex-1 block bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer mon IMG</p>
            <p className="text-blue-100 text-sm mt-1">Estimez votre pourcentage de masse grasse selon la formule Deurenberg</p>
          </Link>
        </div>
      </article>
    </>
  );
}
