import type { Metadata } from "next";
import CalculTVA from "./CalculTVA";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";
import InfographieTVA from "@/components/infographics/InfographieTVA";

export const metadata: Metadata = {
  title: "Calcul TVA — Convertisseur HT ↔ TTC instantane",
  description:
    "Calculez la TVA instantanement : convertissez un montant HT en TTC ou TTC en HT avec les taux francais (20 %, 10 %, 5,5 %, 2,1 %). Gratuit, sans inscription.",
  keywords: [
    "calcul TVA",
    "convertisseur HT TTC",
    "TVA 20%",
    "TVA 10%",
    "TVA 5.5%",
    "TVA 2.1%",
    "calcul TVA en ligne",
    "montant HT TTC",
    "taxe sur la valeur ajoutee",
  ],
  openGraph: {
    title: "Calcul TVA — Convertisseur HT ↔ TTC instantane | BonCalcul.fr",
    description:
      "Convertissez un montant HT en TTC ou TTC en HT avec tous les taux de TVA francais. Resultat immediat.",
    url: "https://www.boncalcul.fr/outils/calcul-tva",
    type: "website",
    images: [
      {
        url: `https://www.boncalcul.fr/api/og?slug=calcul-tva`,
        width: 1200,
        height: 630,
        alt: "Calcul Tva — BonCalcul.fr",
      },
    ],
  },
  alternates: {
    canonical: "https://www.boncalcul.fr/outils/calcul-tva",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer la TVA a partir d'un montant HT ?",
    answer:
      "Pour obtenir le montant TTC a partir du HT, multipliez le montant HT par (1 + taux de TVA). Par exemple, pour un montant de 100 € HT avec une TVA a 20 % : 100 x 1,20 = 120 € TTC. Le montant de la TVA est de 100 x 0,20 = 20 €.",
  },
  {
    question: "Comment retrouver le montant HT a partir du TTC ?",
    answer:
      "Pour passer du TTC au HT, divisez le montant TTC par (1 + taux de TVA). Exemple : 120 € TTC avec TVA a 20 % donne 120 / 1,20 = 100 € HT. Le montant de TVA est 120 - 100 = 20 €.",
  },
  {
    question: "Quels sont les 4 taux de TVA en France ?",
    answer:
      "La France applique 4 taux de TVA : le taux normal de 20 % (la plupart des biens et services), le taux intermediaire de 10 % (restauration, travaux de renovation, transports), le taux reduit de 5,5 % (alimentation, livres, energie) et le taux super reduit de 2,1 % (medicaments rembourses, presse).",
  },
  {
    question: "Un auto-entrepreneur doit-il facturer la TVA ?",
    answer:
      "Un auto-entrepreneur beneficie de la franchise en base de TVA tant que son chiffre d'affaires ne depasse pas certains seuils (36 800 € pour les prestations de services, 91 900 € pour les activites de vente en 2024). Au-dela, il doit facturer et reverser la TVA. La mention 'TVA non applicable, article 293 B du CGI' doit figurer sur ses factures tant qu'il est en franchise.",
  },
  {
    question: "Les calculs de TVA sont-ils fiables sur BonCalcul.fr ?",
    answer:
      "Oui, nos calculs utilisent les formules mathematiques standard appliquees par l'administration fiscale francaise. Le convertisseur fonctionne integralement dans votre navigateur : aucune donnee n'est envoyee a nos serveurs. Les resultats sont indicatifs et ne remplacent pas un conseil fiscal professionnel.",
  },
];

export default function PageCalculTVA() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul TVA — Convertisseur HT ↔ TTC",
          description:
            "Calculez la TVA instantanement : convertissez un montant HT en TTC ou TTC en HT avec les taux francais (20 %, 10 %, 5,5 %, 2,1 %).",
          url: "https://www.boncalcul.fr/outils/calcul-tva",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de TVA en ligne
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convertissez instantanement un montant HT en TTC ou TTC en HT avec
            tous les taux de TVA francais. Gratuit, sans inscription.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CalculTVA />

        <AdBanner slot="tool-after-result" format="auto" className="mt-8" />

        <InfographieTVA />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions frequentes sur la TVA
          </h2>
          <div className="space-y-3">
            {faqQuestions.map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">&#9660;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdBanner slot="tool-after-faq" format="horizontal" />
      </div>

      {/* Contenu SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Tout savoir sur la TVA en France
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Qu&apos;est-ce que la TVA ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              La <strong>TVA (Taxe sur la Valeur Ajoutee)</strong> est un impot indirect sur la consommation, preleve a chaque etape de la production et de la distribution. Instauree en France en 1954, elle est la premiere source de recettes fiscales de l&apos;Etat. Ce n&apos;est pas l&apos;entreprise qui supporte la charge finale, mais le <strong>consommateur final</strong>. Les entreprises collectent la TVA, deduisent celle payee sur leurs achats et reversent la difference au Tresor public. Elle s&apos;applique a la quasi-totalite des biens et services, sauf certaines activites medicales, bancaires et l&apos;enseignement.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Les 4 taux de TVA en France</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Taux normal (20 %)</strong> : s&apos;applique par defaut a la majorite des biens et services (electronique, vetements, mobilier, prestations informatiques, etc.). <strong>Taux intermediaire (10 %)</strong> : restauration sur place, travaux de renovation, transports, hebergement, spectacles vivants. <strong>Taux reduit (5,5 %)</strong> : alimentation, livres, abonnements gaz et electricite, travaux d&apos;amelioration energetique, cinema, cantines scolaires. <strong>Taux super reduit (2,1 %)</strong> : medicaments rembourses, presse, redevance audiovisuelle, et certains cas en Corse et DOM.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Comment calculer la TVA ?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Du HT vers le TTC :</strong> Montant TTC = Montant HT x (1 + taux). Exemple : 500 € HT a 20 % = 500 x 1,20 = 600 € TTC (TVA = 100 €). <strong>Du TTC vers le HT :</strong> Montant HT = Montant TTC / (1 + taux). Exemple : 600 € TTC a 20 % = 600 / 1,20 = 500 € HT. Pour obtenir uniquement la TVA : TVA = HT x taux, ou depuis le TTC : TVA = TTC - (TTC / (1 + taux)).
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-3">Auto-entrepreneur et TVA</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les <strong>auto-entrepreneurs</strong> beneficient de la <strong>franchise en base de TVA</strong> : ils ne facturent pas la TVA et ne la reversent pas, mais ne peuvent pas la deduire sur leurs achats. Ce regime s&apos;applique sous les seuils annuels (2024) : <strong>91 900 €</strong> pour les activites de vente et hebergement, <strong>36 800 €</strong> pour les prestations de services (BIC/BNC). Au-dela, la TVA doit etre facturee des le premier jour du mois de depassement. L&apos;option volontaire pour la TVA peut etre avantageuse si les achats professionnels sont importants.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-3">TVA intracommunautaire : les bases</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour les echanges au sein de l&apos;UE, chaque entreprise assujettie dispose d&apos;un <strong>numero de TVA intracommunautaire</strong>. En B2B, les <strong>ventes de biens</strong> ne sont pas facturees avec TVA par le vendeur : l&apos;acheteur auto-liquide la TVA dans son pays, evitant la double imposition. Le vendeur doit mentionner le numero intracommunautaire sur sa facture et declarer l&apos;operation (DES ou DEB). Pour les <strong>prestations de services</strong> en B2B, la TVA est due dans le pays de l&apos;acheteur. En B2C, elle est due dans le pays du prestataire, sauf pour les services electroniques (guichet unique OSS).
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="tool-bottom" format="horizontal" />
      </div>
    </>
  );
}
