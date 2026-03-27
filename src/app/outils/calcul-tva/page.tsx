import type { Metadata } from "next";
import CalculTVA from "./CalculTVA";
import {
  JsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

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
    url: "https://boncalcul.fr/outils/calcul-tva",
    type: "website",
  },
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-tva",
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
          url: "https://boncalcul.fr/outils/calcul-tva",
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
        <AdBanner slot="tva-top" format="horizontal" className="mb-8" />

        <CalculTVA />

        <AdBanner slot="tva-mid" format="auto" className="mt-8" />
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

      {/* Contenu SEO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <h2>Qu'est-ce que la TVA ?</h2>
          <p>
            La <strong>TVA (Taxe sur la Valeur Ajoutee)</strong> est un impot
            indirect sur la consommation, preleve a chaque etape de la chaine de
            production et de distribution. Instauree en France en 1954, elle
            represente aujourd'hui la premiere source de recettes fiscales de
            l'Etat, devant l'impot sur le revenu. Contrairement a ce que l'on
            pense souvent, ce n'est pas l'entreprise qui supporte la charge
            finale de la TVA, mais bien le consommateur final. Les entreprises
            jouent le role de collecteur : elles facturent la TVA a leurs
            clients, deduisent la TVA qu'elles ont payee sur leurs propres
            achats, et reversent la difference au Tresor public.
          </p>
          <p>
            La TVA s'applique a la quasi-totalite des biens et services vendus
            en France. Seules quelques operations en sont exonerees, comme
            certaines activites medicales, les operations bancaires et
            financieres, ou encore l'enseignement.
          </p>

          <h2>Les 4 taux de TVA en France</h2>
          <p>
            La legislation francaise prevoit quatre taux de TVA, chacun
            s'appliquant a des categories specifiques de biens et services :
          </p>

          <h3>Taux normal : 20 %</h3>
          <p>
            C'est le taux par defaut qui s'applique a la majorite des biens et
            des prestations de services : electronique, vetements, mobilier,
            electromenager, services de conseil, honoraires d'avocats,
            prestations informatiques, etc. Si aucun taux specifique n'est
            prevu par la loi, c'est le taux de 20 % qui s'applique.
          </p>

          <h3>Taux intermediaire : 10 %</h3>
          <p>
            Le taux de 10 % concerne notamment la restauration sur place (hors
            boissons alcoolisees), les travaux de renovation et d'amelioration
            des logements de plus de deux ans, les transports de voyageurs,
            l'hebergement en hotel, les produits agricoles non transformes,
            les medicaments non remboursables, et les spectacles vivants
            (theatre, concerts).
          </p>

          <h3>Taux reduit : 5,5 %</h3>
          <p>
            Ce taux s'applique aux produits de premiere necessite et aux biens
            consideres comme essentiels : alimentation (sauf confiseries,
            chocolat noir, caviar et certains produits de luxe), livres
            (imprimes et numeriques), abonnements au gaz et a l'electricite,
            equipements pour personnes handicapees, travaux d'amelioration
            energetique des logements, billets de cinema, et cantines
            scolaires.
          </p>

          <h3>Taux super reduit : 2,1 %</h3>
          <p>
            Le taux le plus bas est reserve a un nombre limite de produits :
            les medicaments rembourses par la Securite sociale, la presse
            (journaux et publications periodiques, y compris en ligne), la
            redevance de contribution a l'audiovisuel public, et les
            representations theatrales dans certains cas. Ce taux s'applique
            egalement en Corse et dans les DOM, ou des taux specifiques encore
            plus bas peuvent exister.
          </p>

          <h2>Comment calculer la TVA ?</h2>
          <p>
            Le calcul de la TVA repose sur deux formules simples selon que vous
            partez du montant <strong>HT (Hors Taxes)</strong> ou du montant{" "}
            <strong>TTC (Toutes Taxes Comprises)</strong> :
          </p>
          <p>
            <strong>Du HT vers le TTC :</strong> Montant TTC = Montant HT x
            (1 + taux de TVA). Par exemple, pour 500 € HT avec une TVA a 20 % :
            500 x 1,20 = 600 € TTC. La TVA est de 500 x 0,20 = 100 €.
          </p>
          <p>
            <strong>Du TTC vers le HT :</strong> Montant HT = Montant TTC /
            (1 + taux de TVA). Par exemple, pour 600 € TTC avec TVA a 20 % :
            600 / 1,20 = 500 € HT. La TVA est de 600 - 500 = 100 €.
          </p>
          <p>
            Pour obtenir uniquement le montant de la TVA a partir du HT, il
            suffit de multiplier le montant HT par le taux : TVA = HT x taux.
            A partir du TTC, on utilise la formule : TVA = TTC - (TTC /
            (1 + taux)).
          </p>

          <h2>Auto-entrepreneur et TVA</h2>
          <p>
            Les <strong>auto-entrepreneurs</strong> (ou micro-entrepreneurs)
            beneficient d'un regime simplifie appele{" "}
            <strong>franchise en base de TVA</strong>. Cela signifie qu'ils ne
            facturent pas la TVA a leurs clients et ne la reversent pas a
            l'Etat. En contrepartie, ils ne peuvent pas deduire la TVA sur
            leurs achats professionnels.
          </p>
          <p>
            Ce regime s'applique tant que le chiffre d'affaires annuel ne
            depasse pas les seuils suivants (valeurs 2024) :
          </p>
          <ul>
            <li>
              <strong>91 900 €</strong> pour les activites de vente de
              marchandises, objets, fournitures et denrees a emporter ou a
              consommer sur place, et les prestations d'hebergement ;
            </li>
            <li>
              <strong>36 800 €</strong> pour les prestations de services
              relevant des BIC (benefices industriels et commerciaux) et les
              professions liberales relevant des BNC (benefices non
              commerciaux).
            </li>
          </ul>
          <p>
            En cas de depassement, l'auto-entrepreneur doit commencer a
            facturer la TVA a compter du premier jour du mois de depassement.
            Il peut aussi opter volontairement pour l'assujettissement a la
            TVA s'il le souhaite, ce qui peut etre avantageux lorsqu'il
            realise des achats importants soumis a TVA.
          </p>

          <h2>TVA intracommunautaire : les bases</h2>
          <p>
            Lorsque des entreprises realisent des echanges de biens ou de
            services au sein de l'Union europeenne, des regles specifiques
            s'appliquent. Chaque entreprise assujettie a la TVA dans l'UE
            dispose d'un <strong>numero de TVA intracommunautaire</strong>,
            qui permet d'identifier les operations transfrontalieres.
          </p>
          <p>
            Pour les <strong>ventes de biens</strong> entre professionnels
            (B2B), la TVA n'est generalement pas facturee par le vendeur : c'est
            l'acheteur qui auto-liquide la TVA dans son pays. Cette mecanique
            permet d'eviter la double imposition. Le vendeur doit toutefois
            mentionner le numero de TVA intracommunautaire de l'acheteur sur
            sa facture et declarer l'operation dans sa Declaration Europeenne
            de Services (DES) ou sa Declaration d'Echanges de Biens (DEB).
          </p>
          <p>
            Pour les <strong>prestations de services</strong> en B2B, la TVA
            est en principe due dans le pays de l'acheteur (autoliquidation).
            En B2C (vente aux particuliers), la TVA est generalement due dans
            le pays du prestataire, sauf pour les services electroniques ou le
            systeme du guichet unique (OSS) peut s'appliquer.
          </p>
          <p>
            Comprendre ces mecanismes est essentiel pour toute entreprise qui
            realise des operations avec des partenaires europeens. En cas de
            doute, il est recommande de consulter un expert-comptable ou les
            services fiscaux.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdBanner slot="tva-bottom" format="horizontal" />
      </div>
    </>
  );
}
