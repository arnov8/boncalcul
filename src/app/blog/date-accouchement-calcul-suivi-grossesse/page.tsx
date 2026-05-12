// FILE: src/app/blog/date-accouchement-calcul-suivi-grossesse/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Date d'accouchement : méthodes de calcul, fiabilité et suivi semaine par semaine",
  description:
    "Règle de Naegele, calcul par date de conception, échographie du 1er trimestre : comment est calculée votre date prévue d'accouchement et pourquoi seulement 5 % des bébés naissent à J+0.",
  keywords: [
    "date accouchement calcul",
    "règle de Naegele",
    "date prévue accouchement",
    "semaines d'aménorrhée",
    "suivi grossesse semaine",
    "terme grossesse calcul",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/date-accouchement-calcul-suivi-grossesse" },
  openGraph: {
    title: "Date d'accouchement : méthodes de calcul, fiabilité et suivi semaine par semaine",
    description: "Comment calculer sa date d'accouchement, pourquoi 95 % des bébés ne naissent pas à la date prévue, et les jalons clés de la grossesse.",
    url: "https://www.boncalcul.fr/blog/date-accouchement-calcul-suivi-grossesse",
    type: "article",
    locale: "fr_FR",
  },
};

export default function DateAccouchementArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Date d'accouchement : méthodes de calcul, fiabilité et suivi semaine par semaine",
          description: "Comment calculer sa date d'accouchement, pourquoi 95 % des bébés ne naissent pas à la date prévue, et les jalons clés de la grossesse.",
          url: "https://www.boncalcul.fr/blog/date-accouchement-calcul-suivi-grossesse",
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
            Date d&apos;accouchement : méthodes de calcul, fiabilité et suivi semaine par semaine
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            La date prévue d&apos;accouchement (DPA) est l&apos;une des premières informations qu&apos;on cherche
            quand on apprend une grossesse. Voici comment elle est calculée, pourquoi elle n&apos;est qu&apos;une
            estimation, et quels sont les jalons importants à connaître semaine après semaine.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2>La règle de Naegele : la méthode de référence</h2>
          <p>
            La <strong>règle de Naegele</strong> est la méthode standard utilisée depuis le XIX<sup>e</sup> siècle
            pour calculer la date prévue d&apos;accouchement. Son principe est simple :
          </p>
          <p>
            <strong>DPA = Date des dernières règles (DDR) + 280 jours</strong> (soit 40 semaines d&apos;aménorrhée)
          </p>
          <p>
            Exemple : si vos dernières règles ont débuté le 1er janvier 2026, votre DPA est le 8 octobre 2026
            (1er janvier + 280 jours). En pratique, on ajoute 7 jours à la DDR puis on avance d&apos;un an
            tout en reculant de 3 mois — ce qui donne le même résultat plus rapidement de tête.
          </p>
          <p>
            Cette règle suppose un cycle de 28 jours avec ovulation au 14e jour. Si votre cycle est plus
            long ou plus court, la date est à ajuster en conséquence.
          </p>

          <h2>Calcul à partir de la date de conception</h2>
          <p>
            Si vous connaissez précisément la date de conception (rapport sexuel fécondant ou FIV), le calcul
            s&apos;adapte :
          </p>
          <p>
            <strong>DPA = Date de conception + 266 jours</strong> (38 semaines de grossesse réelle)
          </p>
          <p>
            L&apos;écart de 14 jours avec la règle de Naegele correspond à la période entre les dernières
            règles et l&apos;ovulation (conception). Les deux méthodes arrivent donc exactement au même terme.
          </p>

          <h2>Pourquoi l&apos;échographie du 1er trimestre est plus fiable ?</h2>
          <p>
            L&apos;échographie réalisée entre 11 et 13 semaines d&apos;aménorrhée (SA+6 jours maximum) est
            considérée comme <strong>la méthode la plus précise</strong> pour dater une grossesse. Elle mesure
            la longueur cranio-caudale (LCC) du fœtus — une mesure très standardisée à ce stade. La précision
            est de ± 5 jours.
          </p>
          <p>
            En pratique, si l&apos;échographie donne un terme qui s&apos;écarte de moins de 7 jours par rapport
            à la règle de Naegele, le médecin conserve la date calculée. Si l&apos;écart dépasse 7 jours,
            c&apos;est la date échographique qui fait foi. Pour les cycles irréguliers ou les grossesses
            consécutives à une contraception orale, l&apos;écho du T1 est indispensable.
          </p>

          <h2>La réalité : seulement 5 % des bébés naissent à la date prévue</h2>
          <p>
            C&apos;est la statistique qui rassure (et qui perturbe) les futurs parents : <strong>à peine 5 %
            des accouchements surviennent exactement à la DPA</strong>. La grande majorité des naissances
            se concentre dans la fenêtre allant de 38 SA à 42 SA, avec un pic statistique autour de
            <strong>41 SA +1 ou +2</strong> pour les primipares (premier enfant).
          </p>
          <p>
            Les secondes grossesses arrivent en moyenne 3 à 5 jours plus tôt que la première. Moralité :
            la DPA est un cap, pas un rendez-vous. Prévoyez vos préparatifs pour la semaine 38 et gardez
            l&apos;esprit ouvert jusqu&apos;à 41 SA.
          </p>

          <h2>Les semaines clés de grossesse à connaître</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Semaine (SA)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Jalon important</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">À faire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 6 – 8</td>
                  <td className="border border-gray-200 px-4 py-2">1re consultation médicale</td>
                  <td className="border border-gray-200 px-4 py-2">Déclarer la grossesse à la Sécu et la CAF (avant 14 SA)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 11 – 13+6</td>
                  <td className="border border-gray-200 px-4 py-2">Échographie du 1er trimestre + dépistage T21</td>
                  <td className="border border-gray-200 px-4 py-2">Prise de sang marqueurs sériques</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 14</td>
                  <td className="border border-gray-200 px-4 py-2">Fin du 1er trimestre</td>
                  <td className="border border-gray-200 px-4 py-2">Déclarer la grossesse à l&apos;employeur si souhaité</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 22 – 24</td>
                  <td className="border border-gray-200 px-4 py-2">Échographie morphologique (2e trimestre)</td>
                  <td className="border border-gray-200 px-4 py-2">Préparer la liste de naissance, visiter la maternité</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 28</td>
                  <td className="border border-gray-200 px-4 py-2">Début du 3e trimestre</td>
                  <td className="border border-gray-200 px-4 py-2">Préparation à la naissance (cours), bilan du 3e trimestre</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 32 – 34</td>
                  <td className="border border-gray-200 px-4 py-2">Échographie du 3e trimestre</td>
                  <td className="border border-gray-200 px-4 py-2">Préparer la valise maternité</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 34 – 37</td>
                  <td className="border border-gray-200 px-4 py-2">Début du congé maternité prénatal (grossesse simple)</td>
                  <td className="border border-gray-200 px-4 py-2">Arrêt de travail, prévenir la maternité</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 37</td>
                  <td className="border border-gray-200 px-4 py-2">Terme théorique &quot;à terme&quot;</td>
                  <td className="border border-gray-200 px-4 py-2">Prêt pour l&apos;accouchement à tout moment</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">SA 41 – 41+6</td>
                  <td className="border border-gray-200 px-4 py-2">Dépassement de terme</td>
                  <td className="border border-gray-200 px-4 py-2">Surveillance renforcée, déclenchement discuté</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Le congé maternité : comment calculer les dates ?</h2>
          <p>
            Pour une grossesse simple (premier ou deuxième enfant), le congé maternité se décompose en :
          </p>
          <ul>
            <li><strong>6 semaines avant la DPA</strong> (congé prénatal) — début à 34 SA</li>
            <li><strong>10 semaines après l&apos;accouchement</strong> (congé postnatal)</li>
          </ul>
          <p>
            À partir du 3e enfant, la durée totale passe à 26 semaines (8 avant + 18 après). Pour des
            jumeaux : 34 semaines (12 avant + 22 après). Ces durées sont fixes et indépendantes de la
            DPA réelle : si bébé arrive en avance ou en retard, le congé postnatal s&apos;ajuste automatiquement.
          </p>

          <p>
            La DPA reste donc bien plus qu&apos;une date sur un calendrier — c&apos;est le point de repère
            autour duquel s&apos;organisent neuf mois de préparation, de rendez-vous médicaux et de
            démarches administratives. Notre calculateur vous donne la date et les échéances automatiquement.
          </p>

        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-date-accouchement"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de date d&apos;accouchement</p>
            <p className="text-blue-100 text-sm mt-1">Obtenez votre DPA et toutes les échéances importantes</p>
          </Link>
          <Link
            href="/outils/calcul-ovulation"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur d&apos;ovulation</p>
            <p className="text-gray-500 text-sm mt-1">Identifiez votre fenêtre fertile et la date probable de conception</p>
          </Link>
        </div>
      </article>
    </>
  );
}
