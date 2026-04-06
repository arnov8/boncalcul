import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Méthodologie — Comment nous garantissons la fiabilité de nos outils",
  description:
    "Découvrez comment BonCalcul.fr sélectionne ses sources, met à jour ses barèmes et garantit la fiabilité de ses outils de calcul gratuits.",
  alternates: { canonical: "https://www.boncalcul.fr/methodologie" },
};

export default function MethodologiePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Notre méthodologie
      </h1>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        BonCalcul.fr propose des outils de calcul dans des domaines sensibles
        (finances, fiscalité, emploi, santé). Voici comment nous garantissons la
        fiabilité de nos résultats.
      </p>

      <div className="prose prose-gray max-w-none space-y-8">
        {/* 1. Sources */}
        <section>
          <h2>1. Sources officielles uniquement</h2>
          <p>
            Chaque outil s&apos;appuie sur des sources institutionnelles et des
            textes réglementaires vérifiables :
          </p>
          <ul>
            <li>
              <strong>Fiscalité :</strong>{" "}
              <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer">
                impots.gouv.fr
              </a>
              , BOFIP (Bulletin Officiel des Finances Publiques),{" "}
              <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer">
                Legifrance
              </a>
            </li>
            <li>
              <strong>Emploi et cotisations :</strong>{" "}
              <a href="https://www.urssaf.fr" target="_blank" rel="noopener noreferrer">
                URSSAF
              </a>
              ,{" "}
              <a href="https://www.francetravail.fr" target="_blank" rel="noopener noreferrer">
                France Travail
              </a>
              ,{" "}
              <a href="https://www.unedic.org" target="_blank" rel="noopener noreferrer">
                Unédic
              </a>
              , Code du travail
            </li>
            <li>
              <strong>Immobilier :</strong>{" "}
              <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">
                Service-public.fr
              </a>
              , Banque de France, HCSF, ANIL
            </li>
            <li>
              <strong>Santé :</strong> OMS,{" "}
              <a href="https://www.ameli.fr" target="_blank" rel="noopener noreferrer">
                Ameli.fr
              </a>
              , HAS, publications scientifiques (PubMed)
            </li>
          </ul>
          <p>
            Les sources précises utilisées par chaque outil sont listées en bas
            de chaque page de calculateur, dans le bloc &laquo;Sources et
            fiabilité&raquo;.
          </p>
        </section>

        {/* 2. Barèmes */}
        <section>
          <h2>2. Barèmes et formules vérifiables</h2>
          <p>
            Nous appliquons les barèmes officiels en vigueur, sans
            interprétation ni approximation :
          </p>
          <ul>
            <li>
              <strong>Barème de l&apos;impôt sur le revenu</strong> : tranches
              et taux publiés au Journal Officiel
            </li>
            <li>
              <strong>Taux de cotisations sociales</strong> : taux URSSAF
              actualisés au 1er janvier
            </li>
            <li>
              <strong>Barème kilométrique</strong> : publié chaque année au
              BOFIP
            </li>
            <li>
              <strong>Formules médicales</strong> : formules publiées dans des
              revues à comité de lecture (Mifflin-St Jeor 1990, Deurenberg 1991)
            </li>
            <li>
              <strong>Formules financières</strong> : annuité constante,
              intérêts composés, rendement locatif
            </li>
          </ul>
          <p>
            Chaque page outil détaille les formules et barèmes utilisés afin que
            vous puissiez vérifier vous-même les calculs.
          </p>
        </section>

        {/* 3. Mises à jour */}
        <section>
          <h2>3. Processus de mise à jour</h2>
          <p>
            Les barèmes évoluent (fiscalité au 1er janvier, SMIC, taux de
            cotisations, taux d&apos;usure trimestriel). Notre processus :
          </p>
          <ol>
            <li>
              <strong>Veille réglementaire</strong> : suivi des publications
              officielles (Journal Officiel, BOFIP, URSSAF, Banque de France)
            </li>
            <li>
              <strong>Mise à jour des données</strong> : intégration des
              nouveaux barèmes dès leur publication officielle
            </li>
            <li>
              <strong>Vérification croisée</strong> : comparaison des résultats
              avec les simulateurs institutionnels (impots.gouv.fr, CAF, France
              Travail)
            </li>
            <li>
              <strong>Date affichée</strong> : chaque outil affiche la date de
              dernière mise à jour de ses données
            </li>
          </ol>
        </section>

        {/* 4. Limites */}
        <section>
          <h2>4. Limites et avertissements</h2>
          <p>
            Nos outils fournissent des <strong>résultats indicatifs</strong>.
            Nous sommes transparents sur les limites :
          </p>
          <ul>
            <li>
              Les calculateurs ne peuvent pas prendre en compte toutes les
              spécificités individuelles (convention collective, situation
              familiale complexe, régimes spéciaux)
            </li>
            <li>
              Les résultats ne constituent pas un conseil fiscal, juridique ou
              médical
            </li>
            <li>
              Pour toute décision importante, nous recommandons de consulter un
              professionnel (notaire, expert-comptable, médecin)
            </li>
            <li>
              Les outils santé utilisent des formules statistiques reconnues mais
              ne remplacent pas un diagnostic médical
            </li>
          </ul>
          <p>
            Chaque outil affiche un avertissement spécifique adapté à son
            domaine.
          </p>
        </section>

        {/* 5. Confidentialité */}
        <section>
          <h2>5. Calcul 100% côté navigateur</h2>
          <p>
            Tous les calculs sont effectués{" "}
            <strong>
              directement dans votre navigateur (côté client)
            </strong>
            . Aucune donnée personnelle (salaire, revenus, poids, dates) n&apos;est
            transmise à nos serveurs ni stockée. C&apos;est un choix de conception
            fondamental de BonCalcul.fr.
          </p>
        </section>

        {/* 6. Signalement */}
        <section>
          <h2>6. Signalement d&apos;erreurs</h2>
          <p>
            Malgré notre rigueur, une erreur peut toujours se glisser. Si vous
            constatez un résultat incorrect ou un barème obsolète, contactez-nous
            à{" "}
            <strong>contact@boncalcul.fr</strong> en précisant l&apos;outil
            concerné et le résultat attendu. Nous corrigeons sous 48h.
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/a-propos"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          À propos de BonCalcul.fr
        </Link>
        <Link
          href="/"
          className="inline-block bg-white border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl hover:border-blue-300 hover:text-blue-600 transition"
        >
          Découvrir nos outils
        </Link>
      </div>
    </div>
  );
}
