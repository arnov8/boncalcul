import type { Metadata } from "next";
import CalculNotaire from "./CalculNotaire";
import { AdBanner } from "@/lib/adsense";
import {
  JsonLd,
  webApplicationJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcul frais de notaire 2026 — Estimation gratuite",
  description:
    "Estimez gratuitement vos frais de notaire pour un achat immobilier ancien ou neuf. Calcul instantané avec le barème officiel 2026 des émoluments et droits de mutation.",
  keywords: [
    "frais de notaire",
    "calcul frais de notaire",
    "simulation frais de notaire",
    "frais de notaire ancien",
    "frais de notaire neuf",
    "droits de mutation",
    "émoluments notaire",
    "frais acquisition immobilier",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-frais-de-notaire",
  },
  openGraph: {
    title: "Calcul frais de notaire 2026 — Estimation gratuite | BonCalcul.fr",
    description:
      "Estimez gratuitement vos frais de notaire pour un achat immobilier ancien ou neuf. Résultat instantané.",
    url: "https://boncalcul.fr/outils/calcul-frais-de-notaire",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Que comprennent les frais de notaire ?",
    answer:
      "Les frais de notaire comprennent trois éléments principaux : les droits de mutation (taxes reversées à l'État, au département et à la commune), les émoluments du notaire (sa rémunération calculée selon un barème officiel dégressif) et les frais divers (débours, formalités, copies d'actes). Contrairement à ce que l'on pense, la rémunération du notaire ne représente qu'une petite partie du total : environ 1 % du prix de vente.",
  },
  {
    question:
      "Quelle est la différence de frais de notaire entre un bien ancien et un bien neuf ?",
    answer:
      "Pour un bien ancien (plus de 5 ans), les frais de notaire s'élèvent à environ 7 à 8 % du prix d'achat, principalement à cause des droits de mutation élevés (environ 5,80 %). Pour un bien neuf (moins de 5 ans ou VEFA), les frais sont nettement plus faibles, autour de 2 à 3 % du prix, car les droits de mutation sont remplacés par une taxe de publicité foncière de seulement 0,715 %.",
  },
  {
    question: "Peut-on négocier les frais de notaire ?",
    answer:
      "Les droits de mutation (la plus grande partie) sont des taxes non négociables. En revanche, depuis 2021, le notaire peut accorder une remise allant jusqu'à 20 % sur ses émoluments pour les transactions dont le prix dépasse 100 000 €. Cette remise doit être appliquée de manière uniforme à tous les clients du notaire. Les frais divers (débours) ne sont pas négociables non plus car ils correspondent à des dépenses réelles.",
  },
  {
    question: "Comment réduire ses frais de notaire ?",
    answer:
      "Plusieurs astuces permettent de réduire la note. Premièrement, déduisez la valeur du mobilier (cuisine équipée, meubles) du prix de vente, car les frais de notaire se calculent uniquement sur le bien immobilier. Deuxièmement, séparez les frais d'agence du prix : si vous payez l'agence en sus du prix net vendeur, les frais sont calculés sur un montant inférieur. Enfin, demandez au notaire s'il applique la remise de 20 % sur ses émoluments.",
  },
  {
    question: "Quand faut-il payer les frais de notaire ?",
    answer:
      "Les frais de notaire sont réglés le jour de la signature de l'acte authentique de vente, c'est-à-dire le jour où vous devenez officiellement propriétaire. Le notaire demande généralement une provision (estimation) quelques jours avant la signature. Si le montant réel est inférieur à la provision, le notaire vous rembourse la différence dans les semaines ou mois suivants. Il est donc important de prévoir cette somme en plus de votre apport personnel et de votre emprunt.",
  },
];

export default function PageFraisNotaire() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul frais de notaire 2026",
          description:
            "Estimez gratuitement vos frais de notaire pour un achat immobilier ancien ou neuf avec le barème officiel.",
          url: "https://boncalcul.fr/outils/calcul-frais-de-notaire",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* ---------- En-tête ---------- */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calcul des frais de notaire 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimez gratuitement et instantanément le montant des frais de
            notaire pour votre achat immobilier, qu&apos;il s&apos;agisse d&apos;un bien
            ancien ou neuf.
          </p>
        </header>

        {/* ---------- Calculateur ---------- */}
        <CalculNotaire />

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="notaire-mid" format="horizontal" />
        </div>

        {/* ---------- Contenu SEO ---------- */}
        <article className="prose prose-blue max-w-none">
          <h2>Qu&apos;est-ce que les frais de notaire&nbsp;?</h2>
          <p>
            Lorsque vous achetez un bien immobilier en France, vous devez
            r&eacute;gler, en plus du prix de vente, ce que l&apos;on appelle
            couramment les &laquo;&nbsp;frais de notaire&nbsp;&raquo;. Cette
            appellation est en r&eacute;alit&eacute; trompeuse, car la
            r&eacute;mun&eacute;ration du notaire (&eacute;moluments) ne
            repr&eacute;sente qu&apos;une part minoritaire du total. La majeure
            partie de ces frais est constitu&eacute;e de taxes collect&eacute;es
            pour le compte de l&apos;&Eacute;tat, du d&eacute;partement et de la
            commune. Il est donc plus juste de parler de &laquo;&nbsp;frais
            d&apos;acquisition&nbsp;&raquo;.
          </p>
          <p>
            Concr&egrave;tement, les frais de notaire se d&eacute;composent en
            trois cat&eacute;gories&nbsp;: les droits de mutation (ou taxe de
            publicit&eacute; fonci&egrave;re pour le neuf), les
            &eacute;moluments du notaire et les frais divers (d&eacute;bours,
            formalit&eacute;s, copies d&apos;actes, etc.). Leur montant total
            varie consid&eacute;rablement selon que vous achetez un bien ancien
            ou neuf.
          </p>

          <h2>
            Frais de notaire dans l&apos;ancien vs. dans le neuf&nbsp;: quelles
            diff&eacute;rences&nbsp;?
          </h2>
          <p>
            Pour un <strong>bien ancien</strong> (construit depuis plus de 5
            ans), les frais de notaire repr&eacute;sentent g&eacute;n&eacute;ralement
            entre <strong>7&nbsp;% et 8&nbsp;%</strong> du prix de vente. Cette
            proportion &eacute;lev&eacute;e s&apos;explique par les droits de mutation
            &agrave; titre on&eacute;reux (DMTO), qui se composent de la taxe
            d&eacute;partementale (4,5&nbsp;% dans la quasi-totalit&eacute; des
            d&eacute;partements, 3,8&nbsp;% dans quelques exceptions), de la
            taxe communale (1,2&nbsp;%) et d&apos;un pr&eacute;l&egrave;vement pour
            l&apos;&Eacute;tat (0,1&nbsp;%).
          </p>
          <p>
            Pour un <strong>bien neuf</strong> (moins de 5 ans ou achat sur
            plan en VEFA), les frais de notaire sont nettement inf&eacute;rieurs&nbsp;:
            entre <strong>2&nbsp;% et 3&nbsp;%</strong> du prix d&apos;achat.
            En effet, l&apos;acqu&eacute;reur paie la TVA immobili&egrave;re
            (20&nbsp;%, d&eacute;j&agrave; incluse dans le prix de vente) mais
            b&eacute;n&eacute;ficie d&apos;une taxe de publicit&eacute;
            fonci&egrave;re r&eacute;duite &agrave; 0,715&nbsp;% au lieu des
            droits de mutation classiques. C&apos;est l&apos;un des avantages
            financiers majeurs de l&apos;achat dans le neuf.
          </p>

          <h2>Comment sont calcul&eacute;s les &eacute;moluments du notaire&nbsp;?</h2>
          <p>
            Les &eacute;moluments du notaire sont fix&eacute;s par un
            bar&egrave;me officiel, publi&eacute; par d&eacute;cret, et
            appliqu&eacute; de mani&egrave;re identique par tous les notaires de
            France. Ce bar&egrave;me est <strong>d&eacute;gressif</strong>&nbsp;:
            plus le prix du bien est &eacute;lev&eacute;, plus le taux appliqu&eacute;
            diminue. Les tranches actuelles sont les suivantes&nbsp;: 3,870&nbsp;%
            jusqu&apos;&agrave; 6&nbsp;500&nbsp;&euro;, 1,596&nbsp;% de
            6&nbsp;500 &agrave; 17&nbsp;000&nbsp;&euro;, 1,064&nbsp;% de
            17&nbsp;000 &agrave; 60&nbsp;000&nbsp;&euro;, et 0,799&nbsp;%
            au-del&agrave; de 60&nbsp;000&nbsp;&euro;.
          </p>
          <p>
            Pour un bien &agrave; 250&nbsp;000&nbsp;&euro; par exemple, les
            &eacute;moluments repr&eacute;sentent environ 2&nbsp;000&nbsp;&euro;,
            soit moins de 1&nbsp;% du prix de vente. C&apos;est donc bien
            loin de la totalit&eacute; des &laquo;&nbsp;frais de
            notaire&nbsp;&raquo; que l&apos;on r&egrave;gle.
          </p>

          <h2>
            Peut-on n&eacute;gocier les frais de notaire&nbsp;?
          </h2>
          <p>
            La partie fiscale (droits de mutation, taxe de publicit&eacute;
            fonci&egrave;re) n&apos;est absolument pas n&eacute;gociable&nbsp;:
            ce sont des taxes l&eacute;gales. En revanche, depuis la loi
            Macron de 2015 et ses ajustements ult&eacute;rieurs, le notaire
            peut consentir une <strong>remise pouvant aller jusqu&apos;&agrave;
            20&nbsp;%</strong> sur ses &eacute;moluments lorsque le prix du
            bien d&eacute;passe 100&nbsp;000&nbsp;&euro;. Cette remise,
            si elle est appliqu&eacute;e, doit l&apos;&ecirc;tre de
            mani&egrave;re &eacute;gale &agrave; l&apos;ensemble des clients
            de l&apos;&eacute;tude. N&apos;h&eacute;sitez pas &agrave;
            poser la question &agrave; votre notaire.
          </p>

          <h2>Astuces pour r&eacute;duire vos frais de notaire</h2>
          <p>
            M&ecirc;me si les marges de man&oelig;uvre sont limit&eacute;es,
            plusieurs leviers permettent de diminuer la facture&nbsp;:
          </p>
          <ul>
            <li>
              <strong>D&eacute;duire le mobilier&nbsp;:</strong> la cuisine
              &eacute;quip&eacute;e, les meubles fix&eacute;s ou les
              &eacute;quipements &eacute;lectrom&eacute;nagers peuvent &ecirc;tre
              valoris&eacute;s s&eacute;par&eacute;ment. Les frais ne sont
              calcul&eacute;s que sur la valeur immobili&egrave;re.
            </li>
            <li>
              <strong>S&eacute;parer les frais d&apos;agence&nbsp;:</strong> si
              les honoraires d&apos;agence sont &agrave; la charge de
              l&apos;acqu&eacute;reur (mandat de recherche), le prix net
              vendeur servant de base au calcul des frais est plus faible.
            </li>
            <li>
              <strong>Demander la remise de 20&nbsp;%&nbsp;:</strong> comme
              expliqu&eacute; ci-dessus, cette remise sur les &eacute;moluments
              est l&eacute;gale et peut repr&eacute;senter quelques centaines
              d&apos;euros d&apos;&eacute;conomie.
            </li>
            <li>
              <strong>Comparer les d&eacute;partements&nbsp;:</strong> quelques
              d&eacute;partements appliquent encore un taux r&eacute;duit de
              3,8&nbsp;% au lieu de 4,5&nbsp;%, ce qui r&eacute;duit les droits
              de mutation.
            </li>
          </ul>

          <h2>Quand et comment payer les frais de notaire&nbsp;?</h2>
          <p>
            Les frais de notaire sont r&eacute;gl&eacute;s au moment de la
            signature de l&apos;acte authentique de vente, chez le notaire.
            Quelques jours avant cette date, le notaire vous adresse un appel de
            fonds d&eacute;taillant le montant &agrave; provisionner. Si la
            provision s&apos;av&egrave;re sup&eacute;rieure au montant
            d&eacute;finitif (ce qui est fr&eacute;quent), le notaire vous
            restitue le trop-per&ccedil;u dans les semaines suivantes.
          </p>
          <p>
            Il est important de noter que les frais de notaire ne peuvent
            g&eacute;n&eacute;ralement pas &ecirc;tre inclus dans votre
            pr&ecirc;t immobilier principal. Vous devez les financer sur fonds
            propres ou via un pr&ecirc;t compl&eacute;mentaire. C&apos;est
            pourquoi les banques exigent souvent un apport personnel
            repr&eacute;sentant au minimum le montant des frais de notaire, soit
            7 &agrave; 10&nbsp;% du prix du bien dans l&apos;ancien.
          </p>
          <p>
            Utilisez notre simulateur ci-dessus pour obtenir une estimation
            fiable de vos frais de notaire et mieux pr&eacute;parer votre
            budget d&apos;acquisition. Le calcul est bas&eacute; sur le
            bar&egrave;me officiel en vigueur en 2026 et prend en compte le
            type de bien (ancien ou neuf) ainsi que le taux d&eacute;partemental
            applicable.
          </p>
        </article>

        {/* ---------- Pub ---------- */}
        <div className="my-10">
          <AdBanner slot="notaire-bottom" format="horizontal" />
        </div>

        {/* ---------- FAQ ---------- */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions fr&eacute;quentes sur les frais de notaire
          </h2>
          <div className="space-y-4">
            {faqQuestions.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-gray-900 font-medium hover:text-blue-600 transition">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                    &#9662;
                  </span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- Pub ---------- */}
        <div className="mt-10">
          <AdBanner slot="notaire-footer" format="auto" />
        </div>
      </div>
    </>
  );
}
