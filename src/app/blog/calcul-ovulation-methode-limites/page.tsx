// FILE: src/app/blog/calcul-ovulation-methode-limites/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul de l'ovulation : méthode, fenêtre fertile et limites des outils en ligne",
  description: "Comment estimer sa date d'ovulation, comprendre la fenêtre fertile réelle et savoir pourquoi les applications ont leurs limites — surtout avec des cycles irréguliers.",
  keywords: ["calcul ovulation", "fenêtre fertile", "cycle menstruel", "date ovulation", "SOPK", "cycles irréguliers", "température basale"],
  alternates: { canonical: "https://www.boncalcul.fr/blog/calcul-ovulation-methode-limites" },
  openGraph: {
    title: "Calcul de l'ovulation : méthode, fenêtre fertile et limites des outils en ligne",
    description: "Comment estimer sa date d'ovulation, comprendre la fenêtre fertile réelle et savoir pourquoi les applications ont leurs limites — surtout avec des cycles irréguliers.",
    url: "https://www.boncalcul.fr/blog/calcul-ovulation-methode-limites",
    type: "article",
    locale: "fr_FR",
  },
};

export default function CalculOvulation() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Calcul de l'ovulation : méthode, fenêtre fertile et limites des outils en ligne",
          description: "Comment estimer sa date d'ovulation, comprendre la fenêtre fertile réelle et savoir pourquoi les applications ont leurs limites — surtout avec des cycles irréguliers.",
          url: "https://www.boncalcul.fr/blog/calcul-ovulation-methode-limites",
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
            Calcul de l'ovulation : méthode, fenêtre fertile et limites des outils en ligne
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Connaître sa fenêtre fertile peut être utile pour concevoir un enfant — ou simplement mieux comprendre son cycle. Mais les outils de calcul ont des limites importantes, surtout quand les cycles ne sont pas parfaitement réguliers.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>La règle des 14 jours : le point de départ théorique</h2>
          <p>
            La méthode classique repose sur une observation biologique : l'ovulation survient environ <strong>14 jours avant les prochaines règles</strong>. C'est la phase lutéale — la période entre l'ovulation et les règles suivantes — qui est relativement stable chez la plupart des femmes (12 à 16 jours).
          </p>
          <p>
            Pour un cycle de <strong>28 jours</strong> qui commence le 1er du mois, l'ovulation est estimée autour du jour 14. Pour un cycle de <strong>35 jours</strong>, elle tombe plutôt autour du jour 21. C'est la phase folliculaire (du début des règles jusqu'à l'ovulation) qui varie d'une femme à l'autre — pas la phase lutéale.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Durée du cycle</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Ovulation estimée (jour)</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Fenêtre fertile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">24 jours</td>
                  <td className="border border-gray-200 px-4 py-2">Jour 10</td>
                  <td className="border border-gray-200 px-4 py-2">Jours 7 à 12</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">28 jours</td>
                  <td className="border border-gray-200 px-4 py-2">Jour 14</td>
                  <td className="border border-gray-200 px-4 py-2">Jours 11 à 16</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">32 jours</td>
                  <td className="border border-gray-200 px-4 py-2">Jour 18</td>
                  <td className="border border-gray-200 px-4 py-2">Jours 15 à 20</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">35 jours</td>
                  <td className="border border-gray-200 px-4 py-2">Jour 21</td>
                  <td className="border border-gray-200 px-4 py-2">Jours 18 à 23</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>La fenêtre fertile est plus large qu'on ne le croit</h2>
          <p>
            L'ovocyte n'est viable que pendant 12 à 24 heures après l'ovulation. Mais les spermatozoïdes, eux, peuvent survivre jusqu'à 5 jours dans les voies génitales féminines. La <strong>fenêtre de fertilité réelle s'étend donc sur environ 5 à 6 jours</strong> : les 4 à 5 jours précédant l'ovulation, et le jour J lui-même.
          </p>
          <p>
            Les 2 ou 3 jours juste avant l'ovulation sont généralement les plus favorables à une conception.
          </p>

          <h2>Pourquoi les applications ne suffisent pas</h2>
          <p>
            Les outils de calcul — applications ou calculateurs en ligne — fonctionnent bien quand les cycles sont réguliers et prévisibles. Mais plusieurs situations les mettent en défaut :
          </p>
          <ul>
            <li><strong>Cycles irréguliers :</strong> si la durée de vos cycles varie de 5 à 10 jours d'un mois à l'autre, la marge d'erreur sur l'ovulation estimée devient trop large pour être utile.</li>
            <li><strong>SOPK (syndrome des ovaires polykystiques) :</strong> l'ovulation peut être retardée, absente certains cycles, ou difficile à prédire même avec beaucoup de données.</li>
            <li><strong>Stress intense, voyage, maladie :</strong> ces facteurs peuvent décaler l'ovulation de plusieurs jours dans n'importe quel sens.</li>
            <li><strong>Post-pilule :</strong> les cycles mettent parfois plusieurs mois à se régulariser après l'arrêt d'une contraception hormonale.</li>
          </ul>

          <h2>Les signes physiques d'ovulation à observer</h2>
          <p>
            Pour affiner l'estimation d'un calculateur, deux méthodes complémentaires sont bien documentées :
          </p>
          <p>
            <strong>La température basale :</strong> la température corporelle au repos augmente légèrement (0,2 à 0,5 °C) juste après l'ovulation sous l'effet de la progestérone. En prenant sa température chaque matin avant de se lever et en notant les valeurs, on peut repérer ce décalage — même si cette méthode confirme l'ovulation après coup, pas avant.
          </p>
          <p>
            <strong>La glaire cervicale :</strong> dans les jours précédant l'ovulation, les sécrétions vaginales deviennent plus abondantes, transparentes et filantes — une texture souvent comparée au blanc d'œuf cru. C'est un signe que le corps est en phase fertile.
          </p>

          <h2>Quand aller consulter ?</h2>
          <p>
            Si vous essayez de concevoir depuis plus de 12 mois sans succès (ou 6 mois si vous avez plus de 35 ans), si vos cycles sont très irréguliers ou absents, ou si vous avez un antécédent de SOPK ou d'endométriose, une consultation médicale est recommandée. Un gynécologue ou un médecin spécialisé en fertilité peut proposer des examens plus précis pour évaluer la situation.
          </p>
          <p>
            Les outils de calcul d'ovulation sont un bon point de départ pour mieux se connaître — mais ils ne remplacent pas un suivi médical adapté.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/calcul-ovulation"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculer ma date d'ovulation</p>
            <p className="text-blue-100 text-sm mt-1">Estimez votre fenêtre fertile à partir de la date de vos dernières règles</p>
          </Link>
          <Link
            href="/outils/calcul-date-accouchement"
            className="flex-1 block bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Date d'accouchement prévue</p>
            <p className="text-blue-100 text-sm mt-1">Calculez votre terme à partir de la date de conception ou des dernières règles</p>
          </Link>
        </div>
      </article>
    </>
  );
}
