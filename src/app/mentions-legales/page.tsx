import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site BonCalcul.fr",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://boncalcul.fr/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Mentions légales
      </h1>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>BonCalcul.fr</strong> est édité par :
          </p>
          <ul>
            <li>
              <strong>Nom :</strong> AGENCE 140
            </li>
            <li>
              <strong>Statut :</strong> SARL
            </li>
            <li>
              <strong>SIRET :</strong> 530 379 551 00019
            </li>
            <li>
              <strong>Adresse :</strong> Bd de la Marne, 97200 Fort-de-France
            </li>
            <li>
              <strong>Email :</strong> contact@boncalcul.fr
            </li>
          </ul>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong>
            </li>
            <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li>Site web : vercel.com</li>
          </ul>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site BonCalcul.fr
            (textes, images, graphismes, logo, icônes, logiciels, code source)
            est protégé par les dispositions du Code de la propriété
            intellectuelle et appartient à l'éditeur ou fait l'objet d'une
            autorisation d'utilisation.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou
            adaptation de tout ou partie des éléments du site, quel que soit
            le moyen ou le procédé utilisé, est interdite sans autorisation
            écrite préalable de l'éditeur.
          </p>
        </section>

        <section>
          <h2>Limitation de responsabilité</h2>
          <p>
            Les outils de calcul proposés sur BonCalcul.fr fournissent des
            résultats <strong>à titre indicatif uniquement</strong>. Ils ne
            constituent en aucun cas un conseil financier, juridique, fiscal
            ou médical.
          </p>
          <p>
            Les résultats sont basés sur les formules et barèmes en vigueur
            au moment du calcul. L'éditeur ne saurait être tenu responsable
            de toute décision prise sur la base des résultats fournis par les
            outils du site.
          </p>
          <p>
            Pour toute décision importante (investissement immobilier,
            fiscalité, santé), nous vous recommandons de consulter un
            professionnel qualifié.
          </p>
        </section>

        <section>
          <h2>Cookies et publicité</h2>
          <p>
            Le site utilise Google AdSense pour afficher des publicités.
            Google AdSense peut utiliser des cookies pour diffuser des
            annonces adaptées aux centres d'intérêt des visiteurs. Pour en
            savoir plus, consultez la{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              politique de confidentialité de Google
            </a>
            .
          </p>
          <p>
            Vous pouvez désactiver la personnalisation des annonces dans les{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              paramètres de publicité Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites. L'éditeur
            n'exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français.
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
}
