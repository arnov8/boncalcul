import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🧮</span>
          <span className="text-lg font-bold text-gray-800">
            Bon<span className="text-blue-600">Calcul</span>
            <span className="text-gray-400">.fr</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/outils/simulateur-pret-immobilier"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Prêt immobilier
          </Link>
          <Link
            href="/outils/calcul-salaire-brut-net"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Salaire brut/net
          </Link>
          <Link
            href="/outils/calcul-frais-de-notaire"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Frais de notaire
          </Link>
          <Link
            href="/outils/calcul-tva"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            TVA
          </Link>
          <Link
            href="/outils/calcul-imc"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            IMC
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Blog
          </Link>
        </nav>
        <Link
          href="/"
          className="md:hidden text-sm text-blue-600 font-medium"
        >
          Tous les outils
        </Link>
      </div>
    </header>
  );
}
