// FILE: src/app/blog/apl-2026-conditions-calcul-montant/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "APL 2026 : qui y a droit, comment sont-elles calculées et combien espérer ?",
  description:
    "Conditions d'éligibilité aux APL en 2026, formule de calcul CAF, montants selon les zones et les revenus. Étudiant, couple, actif : exemples chiffrés et démarches en ligne.",
  keywords: [
    "APL 2026",
    "aide personnalisée logement",
    "calcul APL",
    "simulateur APL",
    "conditions APL",
    "CAF logement",
    "APL étudiant",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/apl-2026-conditions-calcul-montant" },
  openGraph: {
    title: "APL 2026 : conditions, calcul et montants à espérer",
    description: "Tout savoir sur les APL en 2026 : éligibilité, formule de calcul CAF, exemples étudiant et couple actif, revalorisation et démarches.",
    url: "https://www.boncalcul.fr/blog/apl-2026-conditions-calcul-montant",
    type: "article",
    locale: "fr_FR",
  },
};

export default function ArticleApl2026() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "APL 2026 : qui y a droit, comment sont-elles calculées et combien espérer ?",
          description:
            "Conditions d'éligibilité aux APL en 2026, formule de calcul CAF, montants selon les zones et les revenus.",
          url: "https://www.boncalcul.fr/blog/apl-2026-conditions-calcul-montant",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Social</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            APL 2026 : qui y a droit, comment sont-elles calculées et combien espérer ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Les APL (Aide Personnalisée au Logement) sont versées par la CAF à des millions de
            locataires français — mais beaucoup ne savent pas s&apos;ils y ont droit ni comment le montant
            est calculé. En 2026, après la revalorisation de janvier, les barèmes ont évolué.
            Voici tout ce qu&apos;il faut savoir, avec des exemples concrets pour un étudiant et un couple actif.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>7 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Conditions d&apos;éligibilité aux APL en 2026</h2>
          <p>
            Les APL ne s&apos;adressent pas à tous les locataires. Pour en bénéficier, trois conditions
            cumulatives doivent être réunies.
          </p>

          <h3>1. Un logement conventionné</h3>
          <p>
            C&apos;est la condition la plus restrictive et la moins connue. Le logement doit faire l&apos;objet
            d&apos;une <strong>convention APL signée entre le propriétaire et l&apos;État</strong>. En pratique,
            cela concerne principalement :
          </p>
          <ul>
            <li>Les logements HLM et logements sociaux (OPAC, bailleurs sociaux...)</li>
            <li>Les logements du parc privé dont le propriétaire a signé une convention avec l&apos;Anah ou l&apos;État</li>
            <li>Les résidences étudiantes conventionnées (CROUS notamment)</li>
            <li>Certains foyers de travailleurs et résidences sociales</li>
          </ul>
          <p>
            Si vous louez un appartement dans le parc privé classique, vous ne toucherez généralement
            pas les APL mais les <strong>ALS (Allocation de Logement Sociale)</strong> ou
            <strong> ALF (Allocation de Logement Familiale)</strong>, dont le calcul est très proche.
            Nos simulateurs couvrent les trois types.
          </p>

          <h3>2. La résidence principale</h3>
          <p>
            Le logement doit être votre <strong>résidence principale</strong>, occupé au moins 8 mois
            par an. Les résidences secondaires, locations saisonnières et sous-locations ne sont pas
            éligibles. Le loyer doit être effectivement payé.
          </p>

          <h3>3. Des ressources sous le plafond</h3>
          <p>
            Le montant de l&apos;aide diminue à mesure que les revenus augmentent, jusqu&apos;à s&apos;annuler
            au-delà d&apos;un certain seuil. La CAF prend en compte le <strong>Revenu Fiscal de Référence
            (RFR) de l&apos;année N-2</strong>, actualisé chaque année. Depuis 2021, ce calcul est effectué
            en temps réel (contemporain) pour les revenus salariaux via la DSN.
          </p>

          <h2>Comment la CAF calcule-t-elle le montant de vos APL ?</h2>
          <p>
            La formule officielle est la suivante :
          </p>
          <p>
            <strong>APL = Loyer plafonné − Participation personnelle du locataire (PP)</strong>
          </p>
          <p>
            La participation personnelle dépend de vos ressources, de votre situation familiale
            et de la zone géographique de votre logement. Il existe trois zones :
          </p>
          <ul>
            <li><strong>Zone 1</strong> : Île-de-France (loyers plafonds les plus élevés)</li>
            <li><strong>Zone 2</strong> : Grandes agglomérations de plus de 100 000 habitants</li>
            <li><strong>Zone 3</strong> : Reste du territoire (plafonds les plus bas)</li>
          </ul>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Situation</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Zone 1</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Zone 2</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Zone 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Personne seule</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">302 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">244 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">222 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Couple sans enfant</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">369 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">299 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">272 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Couple + 1 enfant</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">414 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">335 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">305 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Personne seule + 1 enfant</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">374 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">302 €</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">275 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 -mt-4 mb-6">Loyers plafonds APL 2026 (valeurs indicatives après revalorisation de janvier 2026).</p>

          <h2>Exemples concrets : étudiant et couple actif</h2>

          <h3>Exemple 1 : Léa, étudiante à Lyon (zone 2)</h3>
          <p>
            Léa loue un studio 430 € par mois dans une résidence étudiante conventionnée CROUS.
            Elle travaille quelques heures par semaine et déclare 6 000 € de revenus annuels (RFR N-2).
            Sa participation personnelle calculée par la CAF est faible compte tenu de ses ressources.
            Elle touche environ <strong>200 à 230 € d&apos;APL par mois</strong>, ramenant son loyer
            effectif à environ 200 €. La résidence CROUS étant conventionnée, elle est bien éligible.
          </p>

          <h3>Exemple 2 : Antoine et Sarah, couple actif à Bordeaux (zone 2)</h3>
          <p>
            Ils louent un T3 en HLM à 720 € par mois. Revenus combinés nets : 3 800 €/mois, soit un
            RFR annuel d&apos;environ 38 000 €. Avec deux revenus, leur participation personnelle est plus
            élevée. Ils touchent environ <strong>80 à 110 € d&apos;APL</strong>. Le montant peut sembler
            modeste, mais sur 12 mois c&apos;est entre 960 € et 1 320 € d&apos;aide.
          </p>

          <h2>Revalorisation 2026 et démarches CAF</h2>
          <p>
            Les APL sont revalorisées chaque année au <strong>1er janvier</strong> en fonction de
            l&apos;Indice de Référence des Loyers (IRL). En janvier 2026, la revalorisation a été de
            <strong> +1,8%</strong> par rapport à 2025. Les plafonds de loyers ont été relevés dans
            les mêmes proportions.
          </p>
          <p>
            Pour faire votre demande, tout se passe <strong>en ligne sur caf.fr</strong>. La démarche
            prend environ 15 minutes. Vous aurez besoin de vos avis d&apos;imposition N-2, de votre bail,
            de l&apos;attestation de loyer signée par votre propriétaire et de votre RIB. Le versement
            intervient le mois suivant la demande (pas de rétroactivité au-delà du mois de la demande,
            donc n&apos;attendez pas).
          </p>

          <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <p className="font-semibold text-blue-800 mb-2">À savoir : APL et patrimoine</p>
            <p className="text-blue-900 text-sm">
              Depuis 2021, la CAF tient compte du patrimoine dans le calcul. Si vous disposez d&apos;un
              patrimoine immobilier ou financier supérieur à <strong>30 000 €</strong> (hors résidence
              principale), un revenu fictif de 3% par an est ajouté à vos ressources pour le calcul
              des APL. Cela peut réduire significativement votre aide.
            </p>
          </div>
        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/simulateur-apl"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Simulateur APL 2026</p>
            <p className="text-blue-100 text-sm mt-1">Estimez votre aide au logement en moins de 2 minutes</p>
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur salaire brut/net</p>
            <p className="text-gray-500 text-sm mt-1">Connaissez votre revenu net pour estimer votre RFR</p>
          </Link>
        </div>
      </article>
    </>
  );
}
