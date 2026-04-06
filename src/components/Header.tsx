import Link from "next/link";
import { IconCalculator } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <IconCalculator size={28} className="text-blue-600" stroke={1.5} />
          <span className="text-lg font-bold text-gray-800">
            Bon<span className="text-blue-600">Calcul</span>
            <span className="text-gray-400">.fr</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/immobilier"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Immobilier
          </Link>
          <Link
            href="/emploi"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Emploi
          </Link>
          <Link
            href="/fiscalite"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Fiscalité
          </Link>
          <Link
            href="/sante"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Santé
          </Link>
          <Link
            href="/auto-transport"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Auto
          </Link>
          <Link
            href="/#outils"
            className="text-blue-600 font-medium hover:text-blue-700 transition"
          >
            Tous les outils
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
