import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title:
    "Comment calculer sa capacite d'emprunt en 2026 : le guide complet",
  description:
    "Decouvrez comment calculer votre capacite d'emprunt en 2026 : regle des 35%, methode de calcul detaillee, exemple concret et astuces pour emprunter plus.",
  keywords: [
    "capacite emprunt 2026",
    "calcul capacite emprunt",
    "combien emprunter",
    "taux endettement 35%",
    "simulation pret immobilier",
  ],
  openGraph: {
    title: "Comment calculer sa capacite d'emprunt en 2026",
    description:
      "Regle des 35%, methode de calcul, exemple concret et astuces pour augmenter votre capacite d'emprunt.",
    type: "article",
    publishedTime: "2026-03-27",
    authors: ["BonCalcul.fr"],
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/blog/comment-calculer-capacite-emprunt-2026",
  },
};

export default function ArticleCapaciteEmprunt() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title:
            "Comment calculer sa capacite d'emprunt en 2026 : le guide complet",
          description:
            "Decouvrez comment calculer votre capacite d'emprunt en 2026 : regle des 35%, methode de calcul detaillee, exemple concret et astuces pour emprunter plus.",
          url: "https://www.boncalcul.fr/blog/comment-calculer-capacite-emprunt-2026",
          datePublished: "2026-03-27",
        })}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Capacite d'emprunt 2026</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Comment calculer sa capacite d'emprunt en 2026 : le guide complet
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-27">27 mars 2026</time>
            <span>·</span>
            <span>10 min de lecture</span>
          </div>
        </header>

        <AdBanner slot="blog-top" format="horizontal" className="mb-8" />

        <div className="prose prose-gray prose-lg max-w-none">
          {/* 1. Introduction */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Avant meme de visiter un bien ou de pousser la porte d'une banque,
            la premiere question a se poser est :{" "}
            <strong>combien puis-je emprunter ?</strong> Connaitre sa capacite
            d'emprunt, c'est poser les bases solides de tout projet immobilier.
            C'est elle qui determine votre budget, oriente vos recherches et
            vous evite de perdre du temps sur des biens hors de portee. Dans ce
            guide, nous vous expliquons comment la calculer pas a pas, avec les
            regles en vigueur en 2026.
          </p>

          {/* 2. Qu'est-ce que la capacite d'emprunt ? */}
          <h2>Qu'est-ce que la capacite d'emprunt ?</h2>
          <p>
            La <strong>capacite d'emprunt</strong> (ou capacite de financement)
            correspond au montant maximum qu'une banque accepte de vous preter,
            compte tenu de vos revenus, de vos charges et de la duree du pret.
            Elle se distingue d'un autre concept important : la{" "}
            <strong>capacite d'achat</strong>.
          </p>
          <p>La difference est simple :</p>
          <ul>
            <li>
              <strong>Capacite d'emprunt</strong> = montant maximum du pret que
              la banque peut vous accorder
            </li>
            <li>
              <strong>Capacite d'achat</strong> = capacite d'emprunt + apport
              personnel - frais annexes (
              <Link
                href="/outils/calcul-frais-de-notaire"
                className="text-blue-600 hover:underline font-medium"
              >
                frais de notaire
              </Link>
              , garantie, frais de dossier)
            </li>
          </ul>
          <p>
            Autrement dit, votre capacite d'achat represente le prix maximum du
            bien que vous pouvez viser. Si vous pouvez emprunter 250 000 € et
            que vous disposez de 40 000 € d'apport, votre capacite d'achat sera
            d'environ 270 000 € une fois les frais de notaire deduits (environ
            20 000 € dans l'ancien).
          </p>

          {/* 3. La regle des 35% du HCSF */}
          <h2>La regle des 35% du HCSF</h2>
          <p>
            Depuis janvier 2022, le <strong>Haut Conseil de Stabilite
            Financiere (HCSF)</strong> impose aux banques une regle stricte :
            le <strong>taux d'endettement</strong> de l'emprunteur ne doit pas
            depasser <strong>35% de ses revenus nets</strong> (assurance
            emprunteur incluse). Cette norme, auparavant une simple
            recommandation a 33%, est devenue juridiquement contraignante.
          </p>
          <p>
            Concretement, cela signifie que la somme de toutes vos mensualites
            de credit (immobilier, auto, consommation) plus l'assurance
            emprunteur ne peut pas exceder 35% de vos revenus nets mensuels.
          </p>
          <p>Les charges prises en compte dans le calcul incluent :</p>
          <ul>
            <li>La mensualite du pret immobilier envisage (capital + interets)</li>
            <li>L'assurance emprunteur</li>
            <li>Les mensualites de credits en cours (auto, consommation, autre immobilier)</li>
            <li>Les pensions alimentaires versees</li>
          </ul>
          <p>
            Les banques disposent toutefois d'une <strong>marge de
            flexibilite</strong> : elles peuvent deroger a cette regle pour 20%
            de leurs dossiers chaque trimestre, a condition que ces derogations
            concernent principalement l'achat de la residence principale et les
            primo-accedants.
          </p>

          <AdBanner slot="blog-mid" format="auto" className="my-8" />

          {/* 4. Comment calculer sa capacite d'emprunt */}
          <h2>Comment calculer sa capacite d'emprunt : methode et exemple</h2>
          <p>Le calcul se fait en trois etapes :</p>

          <h3>Etape 1 : determiner la mensualite maximale</h3>
          <p>
            Appliquez la regle des 35% a vos revenus nets, puis soustrayez vos
            charges de credit existantes.
          </p>
          <p>
            <strong>Mensualite maximale = (Revenus nets x 35%) - charges de
            credit en cours</strong>
          </p>

          <h3>Etape 2 : calculer le montant empruntable</h3>
          <p>
            A partir de la mensualite maximale, on deduit le montant total
            empruntable en fonction du taux d'interet et de la duree du pret.
            La formule financiere utilisee est celle des annuites constantes :
          </p>
          <p>
            <strong>Capital empruntable = Mensualite x [(1 - (1 + t)^(-n)) / t]</strong>
          </p>
          <p>
            Ou <em>t</em> est le taux mensuel (taux annuel / 12) et{" "}
            <em>n</em> le nombre de mensualites (duree en annees x 12).
          </p>

          <h3>Etape 3 : deduire l'assurance</h3>
          <p>
            L'assurance emprunteur est incluse dans le calcul du taux
            d'endettement. Il faut donc en tenir compte : elle reduit d'autant
            la mensualite disponible pour le remboursement du capital.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 not-prose">
            <p className="font-semibold text-blue-800 mb-1">Exemple concret</p>
            <p className="text-blue-700 text-sm">
              Un couple gagne <strong>4 500 € nets/mois</strong> et rembourse
              deja un credit auto de <strong>500 €/mois</strong>.
            </p>
            <p className="text-blue-700 text-sm mt-2">
              <strong>1.</strong> Mensualite maximale = 4 500 x 35% - 500 ={" "}
              <strong>1 075 €/mois</strong>
            </p>
            <p className="text-blue-700 text-sm mt-1">
              <strong>2.</strong> En retirant environ 75 €/mois d'assurance
              emprunteur (0,30% du capital), il reste{" "}
              <strong>1 000 €/mois</strong> pour le remboursement du pret.
            </p>
            <p className="text-blue-700 text-sm mt-1">
              <strong>3.</strong> A un taux de <strong>3,5%</strong> sur{" "}
              <strong>25 ans</strong> (300 mensualites), le capital empruntable
              est d'environ <strong>199 000 €</strong>.
            </p>
            <p className="text-blue-700 text-sm mt-2">
              Avec un apport de 30 000 € et environ 16 000 € de frais de
              notaire, ce couple peut viser un bien a{" "}
              <strong>213 000 €</strong> environ.
            </p>
          </div>

          <p>
            Plutot que de faire ces calculs a la main, utilisez notre{" "}
            <Link
              href="/outils/calcul-capacite-emprunt"
              className="text-blue-600 hover:underline font-medium"
            >
              simulateur de capacite d'emprunt
            </Link>{" "}
            pour obtenir un resultat precis en quelques secondes.
          </p>

          {/* 5. Les facteurs qui influencent votre capacite */}
          <h2>Les facteurs qui influencent votre capacite d'emprunt</h2>
          <p>
            Plusieurs parametres font varier significativement le montant que
            vous pouvez emprunter :
          </p>

          <h3>Le taux d'interet</h3>
          <p>
            C'est le levier le plus puissant. A mensualite egale, un taux plus
            bas permet d'emprunter davantage. Par exemple, a 1 000 €/mois sur
            25 ans : a 3% vous empruntez environ 211 000 €, a 3,5% environ
            199 000 €, et a 4% environ 189 000 €. Un demi-point de taux
            represente plus de 10 000 € de capacite d'emprunt.
          </p>

          <h3>La duree du pret</h3>
          <p>
            Plus la duree est longue, plus la mensualite est faible pour un
            meme montant emprunte — donc plus vous pouvez emprunter. Le HCSF
            limite cependant la duree a <strong>25 ans maximum</strong> (27 ans
            en cas d'achat en VEFA ou avec travaux importants). Allonger de 20
            a 25 ans peut augmenter votre capacite d'emprunt de 15 a 20%.
          </p>

          <h3>L'assurance emprunteur</h3>
          <p>
            L'assurance est incluse dans le calcul du taux d'endettement. Son
            cout varie considerablement selon votre age, votre etat de sante et
            le contrat choisi (assurance groupe de la banque vs delegation
            externe). Une assurance moins chere libere de la capacite
            d'emprunt.
          </p>

          <h3>L'apport personnel</h3>
          <p>
            L'apport n'augmente pas directement votre capacite d'emprunt (qui
            depend de vos revenus et charges), mais il augmente votre{" "}
            <strong>capacite d'achat</strong>. Un apport important rassure aussi
            la banque et peut vous permettre d'obtenir un meilleur taux.
          </p>

          <h3>Le type de revenus</h3>
          <p>
            Les banques ne traitent pas tous les revenus de la meme maniere :
          </p>
          <ul>
            <li>
              <strong>CDI (hors periode d'essai)</strong> : 100% des revenus
              sont pris en compte — c'est le profil ideal
            </li>
            <li>
              <strong>CDD, interim, freelance</strong> : la banque regarde la
              moyenne des revenus sur 2 a 3 ans et applique souvent une decote
            </li>
            <li>
              <strong>Revenus locatifs</strong> : generalement retenus a
              hauteur de 70% (pour tenir compte du risque de vacance)
            </li>
            <li>
              <strong>Primes et 13e mois</strong> : pris en compte s'ils sont
              recurrents et justifiables sur les 3 derniers bulletins
            </li>
          </ul>

          <AdBanner slot="blog-mid2" format="auto" className="my-8" />

          {/* 6. 5 astuces pour augmenter sa capacite d'emprunt */}
          <h2>5 astuces pour augmenter votre capacite d'emprunt</h2>

          <h3>1. Remboursez vos credits en cours</h3>
          <p>
            C'est le levier le plus immediat. Chaque mensualite de credit
            rembousee libere de la capacite. Le credit auto de 500 €/mois de
            notre exemple precedent ampute la capacite de plus de 100 000 €.
            Si vous pouvez le solder avant de deposer votre dossier de pret,
            faites-le. Certaines banques acceptent meme de financer le
            remboursement anticipe dans le montage global.
          </p>

          <h3>2. Allongez la duree du pret</h3>
          <p>
            Passer de 20 a 25 ans augmente significativement le montant
            empruntable. Certes, le cout total du credit sera plus eleve (vous
            payez des interets plus longtemps), mais cela peut faire la
            difference entre obtenir le bien qui vous plait ou non. Pensez
            aussi que vous pourrez toujours rembourser par anticipation si
            votre situation s'ameliore.
          </p>

          <h3>3. Negociez le taux d'interet</h3>
          <p>
            Ne vous arretez pas a la premiere offre. Faites jouer la
            concurrence entre au moins 3 banques et envisagez de passer par un
            courtier. Un bon dossier (CDI, anciennete, epargne reguliere,
            comptes bien tenus) peut vous faire gagner 0,2 a 0,4 point de taux
            — soit plusieurs dizaines de milliers d'euros de capacite
            d'emprunt supplementaire.
          </p>

          <h3>4. Optez pour la delegation d'assurance</h3>
          <p>
            Depuis la loi Lemoine (2022), vous pouvez changer d'assurance
            emprunteur a tout moment. Les assurances externes (delegation)
            sont souvent 30 a 50% moins cheres que l'assurance groupe proposee
            par la banque. Cette economie reduit votre taux d'endettement et
            augmente mecaniquement votre capacite d'emprunt. Sur 25 ans, la
            difference peut atteindre 15 000 a 20 000 € d'economie.
          </p>

          <h3>5. Empruntez a deux</h3>
          <p>
            Le co-emprunt permet de cumuler les revenus des deux emprunteurs
            pour le calcul du taux d'endettement. Meme si le second emprunteur
            a des revenus modestes, cela peut considerablement augmenter la
            capacite d'emprunt du menage. Attention cependant : les charges du
            co-emprunteur sont aussi prises en compte.
          </p>

          {/* 7. Conclusion avec CTA */}
          <h2>Calculez votre capacite d'emprunt en quelques clics</h2>
          <p>
            Connaitre sa capacite d'emprunt est la premiere etape
            incontournable de tout projet immobilier. Cela vous permet de
            definir un budget realiste, de cibler les bons biens et de vous
            presenter en acheteur serieux aupres des vendeurs et des banques.
          </p>
          <p>
            Plutot que de sortir la calculatrice, utilisez notre{" "}
            <Link
              href="/outils/calcul-capacite-emprunt"
              className="text-blue-600 hover:underline font-medium"
            >
              outil de calcul de capacite d'emprunt
            </Link>{" "}
            : renseignez vos revenus, vos charges et la duree souhaitee, et
            obtenez instantanement le montant que vous pouvez emprunter. Vous
            pouvez ensuite affiner votre projet avec notre{" "}
            <Link
              href="/outils/simulateur-pret-immobilier"
              className="text-blue-600 hover:underline font-medium"
            >
              simulateur de pret immobilier
            </Link>{" "}
            pour connaitre vos mensualites exactes.
          </p>
        </div>

        <AdBanner slot="blog-bottom" format="horizontal" className="mt-8" />

        {/* CTA vers l'outil */}
        <div className="mt-10 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Calculez votre capacite d'emprunt maintenant
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Resultat instantane, gratuit, sans inscription.
          </p>
          <Link
            href="/outils/calcul-capacite-emprunt"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Calculer ma capacite d'emprunt
          </Link>
        </div>

        {/* Outils associes */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Outils associes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/outils/calcul-capacite-emprunt"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <span className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l18 0" /><path d="M3 10l18 0" /><path d="M5 6l7 -3l7 3" /><path d="M4 10l0 11" /><path d="M20 10l0 11" /><path d="M8 14l0 3" /><path d="M12 14l0 3" /><path d="M16 14l0 3" /></svg></span>
              <h4 className="font-semibold mt-2">
                Calcul de capacite d'emprunt
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Decouvrez combien vous pouvez emprunter selon vos revenus.
              </p>
            </Link>
            <Link
              href="/outils/simulateur-pret-immobilier"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <span className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></span>
              <h4 className="font-semibold mt-2">
                Simulateur de pret immobilier
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Calculez vos mensualites et le cout total de votre credit.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
