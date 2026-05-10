import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul retraite 2026 : comment estimer sa future pension (avec exemples)",
  description:
    "Comment calculer votre retraite en 2026 : âge légal, trimestres requis, taux plein, décote et surcote. Exemples chiffrés pour les régimes général et complémentaire.",
  keywords: [
    "calcul retraite 2026",
    "pension retraite montant",
    "trimestres retraite",
    "taux plein retraite",
    "simulateur retraite",
  ],
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/simulateur-retraite-2026-calcul-pension",
  },
  openGraph: {
    title: "Calcul retraite 2026 : comment estimer sa future pension",
    description:
      "Âge légal, trimestres, taux plein, décote et surcote — tout ce qu'il faut comprendre avant de demander votre retraite.",
    url: "https://www.boncalcul.fr/blog/simulateur-retraite-2026-calcul-pension",
    type: "article",
    locale: "fr_FR",
  },
};

export default function RetraiteArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Calcul retraite 2026 : comment estimer sa future pension (avec exemples)",
          description:
            "Comment calculer votre retraite en 2026 : âge légal, trimestres requis, taux plein, décote et surcote.",
          url: "https://www.boncalcul.fr/blog/simulateur-retraite-2026-calcul-pension",
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
            <span>Emploi &amp; retraite</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Calcul retraite 2026 : comment estimer sa future pension
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Vous approchez de la retraite — ou vous essayez juste de savoir où vous en êtes — et
            les notions de trimestres, de taux plein et de décote vous semblent floues ? Ce guide
            reprend les bases du calcul avec des exemples concrets, y compris après la réforme de
            2023.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-10">10 mai 2026</time>
            <span>8 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray prose-lg max-w-none">
          <h2>L'âge légal de départ : 64 ans depuis 2023</h2>
          <p>
            La réforme des retraites de 2023 a décalé l&apos;âge légal de départ de 62 à 64 ans.
            Ce décalage est progressif selon l&apos;année de naissance — si vous êtes né(e) en
            1961, vous pouvez partir à 62 ans et 6 mois ; si vous êtes né(e) en 1968 ou après,
            c&apos;est 64 ans.
          </p>
          <p>
            Mais attention : l&apos;âge légal n&apos;est pas l&apos;âge idéal. Partir plus tôt que
            le taux plein coûte cher (on y revient). Partir plus tard peut, au contraire, augmenter
            votre pension via la surcote.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Année de naissance
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    Âge légal de départ
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                    Trimestres requis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1961</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">62 ans 6 mois</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">169</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">1962</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">63 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">169</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1963</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">63 ans 6 mois</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">170</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">1964</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">63 ans 9 mois</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">171</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1965 et après</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold">64 ans</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold">172</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>La formule de calcul de la pension de base</h2>
          <p>
            La pension de retraite au régime général se calcule avec une formule à trois variables :
          </p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-6 text-center font-mono text-sm leading-relaxed">
            Pension = SAM × Taux × (Trimestres validés / 172)
          </div>

          <ul>
            <li>
              <strong>SAM</strong> : Salaire Annuel Moyen des 25 meilleures années de votre
              carrière (plafonné au plafond Sécurité sociale)
            </li>
            <li>
              <strong>Taux</strong> : 50 % au maximum (le taux plein), réduit en cas de décote
            </li>
            <li>
              <strong>172</strong> : nombre de trimestres requis pour une carrière complète (pour
              les générations 1965+)
            </li>
          </ul>

          <p>
            En clair : si vous avez cotisé exactement 172 trimestres avec un SAM de 2 400 €/mois,
            votre pension de base sera de 2 400 × 50 % = <strong>1 200 €/mois</strong>. Le plafond
            de la Sécurité sociale en 2026 est de 3 925 €/mois — au-delà, la part excédentaire
            n&apos;entre pas dans le calcul du SAM.
          </p>

          <h2>Décote : le coût d&apos;un départ anticipé</h2>
          <p>
            Si vous partez avant d&apos;avoir vos 172 trimestres (ou avant 67 ans, âge auquel la
            décote disparaît automatiquement), une pénalité s&apos;applique : <strong>1,25 % par
            trimestre manquant</strong>, dans la limite de 25 %.
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-amber-800 mb-2">Exemple concret — décote</p>
            <p className="text-amber-700 text-sm">
              Marie, née en 1965, part à 64 ans avec seulement 160 trimestres validés (12 manquants
              au lieu de 172). Sa pension théorique sans décote serait de 1 200 €/mois.
              <br />
              Décote : 12 × 1,25 % = 15 %<br />
              <strong>Pension réelle : 1 200 × (1 − 0,15) = 1 020 €/mois</strong>. Soit 180 € de
              moins, à vie.
            </p>
          </div>

          <h2>Surcote : le bonus pour ceux qui restent</h2>
          <p>
            À l&apos;inverse, chaque trimestre travaillé au-delà du taux plein ajoute{" "}
            <strong>1,25 % à votre pension</strong>. Il n&apos;y a pas de plafond légal à la
            surcote — techniquement, on peut dépasser les 50 % de taux.
          </p>
          <p>
            Concrètement, rester deux ans de plus (8 trimestres) après avoir atteint ses 172
            trimestres rapporte 8 × 1,25 % = 10 % de pension supplémentaire. Sur 1 200 €, ça fait
            120 € de plus par mois — à vie. Ce n&apos;est pas anodin.
          </p>

          <h2>La retraite complémentaire AGIRC-ARRCO</h2>
          <p>
            En plus de la pension de base, les salariés du privé perçoivent une pension
            complémentaire via AGIRC-ARRCO. Celle-ci fonctionne en points — vous en accumulez
            tout au long de votre carrière, proportionnellement à vos cotisations.
          </p>
          <p>
            En 2026, la valeur du point AGIRC-ARRCO est de <strong>1,4159 €</strong>. Un salarié
            cadre ayant accumulé 10 000 points touchera donc : 10 000 × 1,4159 = <strong>14 159 €/an</strong>,
            soit environ <strong>1 180 €/mois</strong> de retraite complémentaire.
          </p>
          <p>
            Là aussi, partir tôt a un coût : si vous liquidez votre retraite complémentaire avant
            67 ans et sans avoir le taux plein, un malus temporaire de 10 % s&apos;applique pendant
            3 ans (sauf exceptions).
          </p>

          <h2>Les trimestres assimilés comptent aussi</h2>
          <p>
            Beaucoup l&apos;ignorent : les trimestres validés ne sont pas uniquement ceux où vous
            avez travaillé. Sont également comptés :
          </p>
          <ul>
            <li>Chômage indemnisé (1 trimestre par 50 jours)</li>
            <li>Maladie, maternité, accident du travail</li>
            <li>Maternité (4 trimestres par enfant pour la mère)</li>
            <li>Service militaire</li>
            <li>Certaines périodes de chômage non indemnisé (dans la limite de 6 trimestres)</li>
          </ul>
          <p>
            Ces trimestres &laquo; assimilés &raquo; peuvent faire une vraie différence dans votre
            solde final.
          </p>

          <h2>Exemple complet</h2>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
            <p className="font-semibold text-blue-800 mb-2">Thomas, 63 ans, né en 1963</p>
            <ul className="text-blue-700 text-sm space-y-1 list-none pl-0">
              <li>• SAM calculé sur ses 25 meilleures années : <strong>2 800 €/mois</strong></li>
              <li>• Trimestres validés : <strong>172</strong> (taux plein atteint)</li>
              <li>• Âge légal pour sa génération : 63 ans 6 mois → il part à 64 ans</li>
              <li>• Trimestres au-delà du taux plein : 2 → surcote de 2,5 %</li>
              <li>
                • Pension de base :{" "}
                <strong>2 800 × 50 % × (172/170) × 1,025 ≈ 1 454 €/mois</strong>
              </li>
              <li>• Retraite complémentaire (estimée) : 900 €/mois</li>
              <li>
                • <strong>Pension totale estimée : ~2 354 €/mois brut</strong>
              </li>
            </ul>
          </div>

          <h2>Ce que le simulateur calcule, et ce qu&apos;il ne peut pas faire</h2>
          <p>
            Notre simulateur donne une estimation rapide basée sur vos revenus actuels et votre
            âge. Mais il ne connaît pas vos 25 meilleures années réelles, ni vos trimestres
            assimilés. Pour une projection fiable, consultez votre{" "}
            <strong>relevé de carrière</strong> sur info-retraite.fr — c&apos;est gratuit et
            mis à jour régulièrement.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-retraite"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">
              Estimer ma future pension
            </p>
            <p className="text-blue-100 text-sm mt-1">Simulateur gratuit, résultat immédiat</p>
          </Link>
          <Link
            href="/outils/calcul-heures-supplementaires"
            className="flex-1 block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition group text-center"
          >
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
              Calcul heures supplémentaires
            </p>
            <p className="text-gray-500 text-sm mt-1">Impact sur votre salaire et cotisations</p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Articles liés</h2>
          <ul>
            <li>
              <Link href="/blog/salaire-brut-net-comment-calculer">
                Comment calculer son salaire brut en net en 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/allocation-chomage-are-2026-calcul">
                Allocation chômage (ARE) 2026 : calcul et durée
              </Link>
            </li>
            <li>
              <Link href="/emploi">Tous nos outils emploi &amp; retraite</Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
