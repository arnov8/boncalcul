import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marque */}
          <div>
            <span className="text-lg font-bold text-gray-800">
              Bon<span className="text-blue-600">Calcul</span>
              <span className="text-gray-400">.fr</span>
            </span>
            <p className="text-sm text-gray-500 mt-2">
              Outils de calcul gratuits pour le quotidien. Simulateurs fiables,
              rapides et sans inscription.
            </p>
          </div>

          {/* Outils populaires */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">
              Outils populaires
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  href="/outils/simulateur-pret-immobilier"
                  className="hover:text-blue-600 transition"
                >
                  Simulateur prêt immobilier
                </Link>
              </li>
              <li>
                <Link
                  href="/outils/calcul-salaire-brut-net"
                  className="hover:text-blue-600 transition"
                >
                  Salaire brut / net
                </Link>
              </li>
              <li>
                <Link
                  href="/outils/calcul-frais-de-notaire"
                  className="hover:text-blue-600 transition"
                >
                  Frais de notaire
                </Link>
              </li>
              <li>
                <Link
                  href="/outils/calcul-tva"
                  className="hover:text-blue-600 transition"
                >
                  Calcul TVA
                </Link>
              </li>
              <li>
                <Link
                  href="/outils/calcul-imc"
                  className="hover:text-blue-600 transition"
                >
                  Calcul IMC
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">
              Ressources
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-600 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-blue-600 transition"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-blue-600 transition"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="hover:text-blue-600 transition"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} BonCalcul.fr — Tous droits réservés.
          </p>
          <p className="mt-1">
            Les résultats fournis sont indicatifs et ne constituent pas un
            conseil professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}
