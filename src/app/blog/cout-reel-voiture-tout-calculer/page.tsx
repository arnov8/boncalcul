// FILE: src/app/blog/cout-reel-voiture-tout-calculer/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Coût réel d'une voiture : tout ce qu'on oublie de calculer",
  description:
    "Assurance, entretien, dépréciation, carburant, pneumatiques : découvrez les 6 postes qui composent le vrai coût d'une voiture, avec des exemples chiffrés sur une Citroën C3 neuve vs une Clio d'occasion.",
  keywords: [
    "coût réel voiture",
    "coût kilomètre voiture",
    "dépréciation voiture",
    "entretien voiture coût",
    "assurance voiture budget",
    "voiture neuve vs occasion",
  ],
  alternates: { canonical: "https://www.boncalcul.fr/blog/cout-reel-voiture-tout-calculer" },
  openGraph: {
    title: "Coût réel d'une voiture : tout ce qu'on oublie de calculer",
    description: "Les 6 postes de coût réel d'une voiture, dépréciation incluse. Exemples chiffrés Citroën C3 neuve vs Clio d'occasion.",
    url: "https://www.boncalcul.fr/blog/cout-reel-voiture-tout-calculer",
    type: "article",
    locale: "fr_FR",
  },
};

export default function CoutReelVoitureArticle() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Coût réel d'une voiture : tout ce qu'on oublie de calculer",
          description: "Les 6 postes de coût réel d'une voiture, dépréciation incluse. Exemples chiffrés Citroën C3 neuve vs Clio d'occasion.",
          url: "https://www.boncalcul.fr/blog/cout-reel-voiture-tout-calculer",
          datePublished: "2026-05-12",
          dateModified: "2026-05-12",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span>Auto &amp; Transport</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coût réel d&apos;une voiture : tout ce qu&apos;on oublie de calculer (assurance, entretien, dépréciation)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Quand on pense au coût d&apos;une voiture, on pense d&apos;abord à l&apos;essence. Erreur. Le carburant
            ne représente souvent que 20 à 25 % du budget total. Les vrais gouffres sont ailleurs — et ils
            sont invisibles sur votre relevé de compte.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <time dateTime="2026-05-12">12 mai 2026</time>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2>Les 6 postes du coût réel d&apos;une voiture</h2>

          <h3>1. Le carburant — celui qu&apos;on surveille, mais pas le plus lourd</h3>
          <p>
            Pour 15 000 km/an avec un véhicule essence consommant 7 L/100 km et un prix moyen de 1,75 €/L :
            <strong> 1 837 € par an</strong>, soit environ 153 €/mois. C&apos;est visible, c&apos;est douloureux à
            la pompe — mais c&apos;est loin d&apos;être le poste le plus coûteux.
          </p>

          <h3>2. L&apos;assurance — de 500 € à 2 000 € selon votre profil</h3>
          <p>
            Un jeune conducteur paiera facilement 1 800 € pour une assurance tous risques sur une voiture
            neuve. Un conducteur expérimenté avec un bon bonus descendra à 600-700 € pour une couverture
            équivalente. Comptez en moyenne <strong>900 € par an</strong> toutes catégories confondues. Ce
            poste évolue aussi avec la valeur du véhicule : une voiture qui se déprécie vous permet souvent
            de passer d&apos;une assurance tous risques à une formule au tiers après quelques années.
          </p>

          <h3>3. L&apos;entretien — le budget qui surprend toujours</h3>
          <p>
            Vidanges, filtres, plaquettes de frein, distribution, embrayage, révisions constructeur... Sur
            une voiture de segment B parcourant 15 000 km/an, prévoyez entre <strong>600 et 900 € par an</strong>.
            Les années &quot;creuses&quot; (juste une vidange) vous coûteront 200 €. Mais l&apos;année de la
            distribution ou de l&apos;embrayage peut brutalement grimper à 1 500 €. Lissé sur 10 ans, on arrive
            facilement à 750 €/an en moyenne.
          </p>

          <h3>4. Les pneumatiques — 4 pneus tous les 4-5 ans</h3>
          <p>
            Un jeu de 4 pneus de qualité moyenne pour une citadine : entre 300 et 450 €, pose comprise.
            Si vous changez tous les 4 ans, cela représente <strong>80 à 110 € par an</strong>. Avec des
            pneus hiver en plus, doublez ce budget. Un poste souvent négligé dans les calculs.
          </p>

          <h3>5. La dépréciation — LE poste numéro un, et le plus ignoré</h3>
          <p>
            C&apos;est là que la réalité frappe. <strong>Une voiture neuve perd entre 20 et 25 % de sa valeur
            dès la première année.</strong> Une Citroën C3 achetée neuve 22 000 € en vaut environ 16 500 €
            un an plus tard. C&apos;est <strong>5 500 € évaporés</strong> — sans un seul accident. Sur 5 ans,
            la C3 vaut 10 500 € : la dépréciation totale atteint 11 500 €, soit 2 300 €/an.
          </p>
          <p>
            Une Renault Clio achetée d&apos;occasion à 3 ans pour 12 500 € perdra en revanche beaucoup moins :
            environ 1 200 €/an en moyenne sur les 4 années suivantes. La voiture d&apos;occasion a déjà encaissé
            le choc de la première dépréciation.
          </p>

          <h3>6. Le crédit ou le leasing — l&apos;argent du temps</h3>
          <p>
            Un crédit auto de 20 000 € sur 5 ans à 5 % génère environ 2 645 € d&apos;intérêts totaux, soit
            529 € par an. Le leasing (LOA, LLD) intègre souvent entretien et assurance, mais la mensualité
            ne construit aucun capital : vous rendez le véhicule à l&apos;issue.
          </p>

          <h2>Tableau comparatif : Citroën C3 neuve vs Clio d&apos;occasion 3 ans</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Poste de coût</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">C3 neuve (22 000 €)</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Clio occ. 3 ans (12 500 €)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Carburant (15 000 km/an)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 837 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">1 837 €/an</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Assurance tous risques</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">900 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">650 €/an</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Entretien moyen</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">600 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">850 €/an</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Pneumatiques</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">90 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">90 €/an</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Dépréciation</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold text-red-600">2 300 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-semibold">1 200 €/an</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Intérêts crédit</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">530 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">300 €/an</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-200 px-4 py-2 font-bold">TOTAL annuel</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-red-600">6 257 €/an</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-700">4 927 €/an</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-bold">Coût au kilomètre</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">41,7 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">32,8 c/km</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Coût au kilomètre selon le type de véhicule</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Type de véhicule</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Coût/km estimé</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Principal poste</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Citadine neuve (segment A/B)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">38 – 45 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Dépréciation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Citadine d&apos;occasion (3-5 ans)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">28 – 36 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Carburant</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">SUV compact neuf</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">52 – 65 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Dépréciation + crédit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Berline électrique neuve</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">45 – 60 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Dépréciation + batterie</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Monospace familial (7 ans)</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">22 – 30 c/km</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">Entretien + carburant</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>La bonne question : neuf ou occasion ?</h2>
          <p>
            Sur 15 000 km/an, la Clio d&apos;occasion coûte <strong>1 330 € de moins par an</strong> que la C3
            neuve. Sur 5 ans, l&apos;écart atteint 6 650 €. Et ce calcul ne tient pas compte du fait que
            l&apos;occasion a été achetée avec un apport moindre, donc avec moins d&apos;intérêts de crédit.
          </p>
          <p>
            La voiture neuve a néanmoins des avantages réels : garantie constructeur, technologies récentes,
            consommation optimisée, et tranquillité d&apos;esprit sur les 3 premières années. Si vous parcourez
            moins de 8 000 km/an, le calcul peut s&apos;inverser : la dépréciation devient acceptable, et
            l&apos;entretien d&apos;une neuve coûte moins cher.
          </p>

          <h2>Le bon réflexe : calculer avant d&apos;acheter</h2>
          <p>
            Avant de signer, prenez 5 minutes pour estimer votre coût au kilomètre réel. Il vous permettra
            aussi de comparer ce que vous coûte réellement votre voiture actuelle versus les transports en
            commun, le covoiturage, ou un véhicule plus frugal. La surprise est souvent salutaire.
          </p>

        </div>

        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/outils/cout-km-voiture"
            className="flex-1 block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de coût au kilomètre</p>
            <p className="text-blue-100 text-sm mt-1">Estimez le vrai prix de revient de votre voiture</p>
          </Link>
          <Link
            href="/outils/calcul-consommation-essence"
            className="flex-1 block bg-white border border-gray-200 text-gray-800 rounded-2xl p-6 hover:shadow-lg transition group text-center"
          >
            <p className="text-lg font-bold group-hover:underline">Calculateur de consommation</p>
            <p className="text-gray-500 text-sm mt-1">Calculez votre consommation réelle et votre budget carburant</p>
          </Link>
        </div>
      </article>
    </>
  );
}
