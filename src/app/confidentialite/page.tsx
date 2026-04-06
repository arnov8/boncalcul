import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de BonCalcul.fr",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.boncalcul.fr/confidentialite" },
};

export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Politique de confidentialité
      </h1>

      <div className="prose prose-gray max-w-none space-y-6">
        <p>
          <strong>Dernière mise à jour :</strong> mars 2026
        </p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            La protection de vos données personnelles est une priorité pour
            BonCalcul.fr. Cette politique de confidentialité explique quelles
            informations sont collectées lors de votre visite et comment elles
            sont utilisées.
          </p>
        </section>

        <section>
          <h2>2. Données collectées</h2>
          <h3>2.1. Calculs et données saisies</h3>
          <p>
            <strong>
              Aucune donnée saisie dans nos outils n'est collectée ni
              transmise à nos serveurs.
            </strong>{" "}
            Tous les calculs sont effectués localement dans votre navigateur
            (côté client). Vos montants, salaires, poids, taille et autres
            informations saisies ne quittent jamais votre appareil.
          </p>

          <h3>2.2. Données de navigation</h3>
          <p>
            Nous pouvons collecter de manière anonyme des données de
            navigation à des fins statistiques :
          </p>
          <ul>
            <li>Pages visitées et durée de visite</li>
            <li>Type de navigateur et système d'exploitation</li>
            <li>Résolution d'écran</li>
            <li>Pays d'origine (sans géolocalisation précise)</li>
          </ul>
          <p>
            Ces données sont collectées de manière agrégée et ne permettent
            pas de vous identifier personnellement.
          </p>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <h3>3.1. Cookies techniques</h3>
          <p>
            Le site peut utiliser des cookies strictement nécessaires à son
            fonctionnement. Ces cookies ne nécessitent pas votre
            consentement.
          </p>

          <h3>3.2. Cookies publicitaires (Google AdSense)</h3>
          <p>
            Le site utilise Google AdSense pour afficher des publicités.
            Google peut déposer des cookies pour :
          </p>
          <ul>
            <li>Diffuser des annonces adaptées à vos centres d'intérêt</li>
            <li>Limiter le nombre de fois où vous voyez une annonce</li>
            <li>Mesurer l'efficacité des campagnes publicitaires</li>
          </ul>
          <p>
            Vous pouvez gérer vos préférences publicitaires sur{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              adssettings.google.com
            </a>{" "}
            ou désactiver les cookies tiers dans les paramètres de votre
            navigateur.
          </p>
        </section>

        <section>
          <h2>4. Utilisation des données</h2>
          <p>Les données de navigation collectées servent exclusivement à :</p>
          <ul>
            <li>Améliorer le fonctionnement et le contenu du site</li>
            <li>Comprendre comment les outils sont utilisés</li>
            <li>Assurer la sécurité du site</li>
          </ul>
          <p>
            <strong>
              Nous ne vendons, ne louons et ne partageons aucune donnée
              personnelle avec des tiers
            </strong>
            , à l'exception des services techniques nécessaires au
            fonctionnement du site (hébergement, publicité).
          </p>
        </section>

        <section>
          <h2>5. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez des
            droits suivants :
          </p>
          <ul>
            <li>
              <strong>Droit d'accès :</strong> obtenir la confirmation que des
              données vous concernant sont traitées et en obtenir une copie
            </li>
            <li>
              <strong>Droit de rectification :</strong> demander la correction
              de données inexactes
            </li>
            <li>
              <strong>Droit à l'effacement :</strong> demander la suppression
              de vos données
            </li>
            <li>
              <strong>Droit d'opposition :</strong> vous opposer au
              traitement de vos données
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> recevoir vos données
              dans un format structuré
            </li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <strong>contact@boncalcul.fr</strong>
          </p>
        </section>

        <section>
          <h2>6. Sécurité</h2>
          <p>
            Le site est servi via HTTPS (connexion chiffrée). Nous mettons en
            œuvre des mesures techniques et organisationnelles pour protéger
            les données contre tout accès non autorisé.
          </p>
        </section>

        <section>
          <h2>7. Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout
            moment. La date de dernière mise à jour est indiquée en haut de
            cette page.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Pour toute question relative à cette politique de
            confidentialité, vous pouvez nous contacter à :{" "}
            <strong>contact@boncalcul.fr</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
