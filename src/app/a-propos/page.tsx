import type { Metadata } from "next";
import Link from "next/link";
import { IconLock, IconCircleCheck, IconBolt, IconDeviceMobile } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez BonCalcul.fr : des outils de calcul gratuits, fiables et respectueux de votre vie privée.",
  alternates: { canonical: "https://boncalcul.fr/a-propos" },
};

export default function APropos() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        À propos de BonCalcul.fr
      </h1>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2>Notre mission</h2>
          <p>
            BonCalcul.fr est né d'un constat simple : trop souvent, les outils
            de calcul en ligne sont envahis de publicités, demandent une
            inscription ou affichent des résultats peu fiables.
          </p>
          <p>
            Notre mission est de proposer des{" "}
            <strong>
              outils de calcul gratuits, instantanés et fiables
            </strong>
            , accessibles à tous sans aucune inscription. Que vous prépariez un
            achat immobilier, négociez votre salaire ou ayez simplement besoin
            de calculer une TVA, vous trouverez ici un outil simple et
            efficace.
          </p>
        </section>

        <section>
          <h2>Nos engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-4">
            <div className="bg-blue-50 rounded-xl p-5">
              <IconLock size={28} className="text-blue-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Respect de la vie privée
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Tous les calculs sont effectués dans votre navigateur. Aucune
                donnée personnelle n'est envoyée à nos serveurs.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5">
              <IconCircleCheck size={28} className="text-green-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Résultats fiables
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Nos outils utilisent les formules officielles et les barèmes
                en vigueur, régulièrement mis à jour.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-5">
              <IconBolt size={28} className="text-yellow-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Rapide et gratuit
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Pas d'inscription, pas de limite. Des résultats instantanés,
                disponibles 24h/24 sur tous vos appareils.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-5">
              <IconDeviceMobile size={28} className="text-purple-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Accessible partout
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Nos outils fonctionnent sur ordinateur, tablette et mobile,
                avec une interface adaptée à chaque écran.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Comment nous finançons le site</h2>
          <p>
            BonCalcul.fr est un projet indépendant. Pour rester gratuit et sans
            inscription, le site est financé par de la publicité non intrusive
            via Google AdSense. Nous veillons à ce que les publicités ne
            gênent jamais l'utilisation des outils.
          </p>
        </section>

        <section>
          <h2>Nos outils</h2>
          <p>
            Nous proposons actuellement des outils dans les domaines suivants :
          </p>
          <ul>
            <li>
              <strong>Finance & Immobilier</strong> : simulateur de prêt
              immobilier, calcul de frais de notaire, convertisseur salaire
              brut/net, calcul de TVA
            </li>
            <li>
              <strong>Santé</strong> : calcul de l'IMC (Indice de Masse
              Corporelle)
            </li>
          </ul>
          <p>
            De nouveaux outils sont ajoutés régulièrement. Si vous avez une
            suggestion, n'hésitez pas à nous contacter !
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Une question, une suggestion, un bug à signaler ? Écrivez-nous à :{" "}
            <strong>contact@boncalcul.fr</strong>
          </p>
        </section>

        <div className="not-prose mt-8">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Découvrir nos outils
          </Link>
        </div>
      </div>
    </div>
  );
}
