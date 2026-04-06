import type { Metadata } from "next";
import Link from "next/link";
import { IconLock, IconCircleCheck, IconBolt, IconDeviceMobile, IconRefresh, IconShieldCheck } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "À propos — Qui sommes-nous et comment nous garantissons la fiabilité",
  description:
    "Découvrez BonCalcul.fr : outils de calcul gratuits, fiables et respectueux de votre vie privée. Sources officielles, barèmes à jour, calcul 100% côté navigateur.",
  alternates: { canonical: "https://www.boncalcul.fr/a-propos" },
};

export default function APropos() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        À propos de BonCalcul.fr
      </h1>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Des outils de calcul gratuits, fiables et transparents pour vos
        finances, votre emploi, votre fiscalité et votre santé.
      </p>

      <div className="prose prose-gray max-w-none space-y-8">
        {/* Mission */}
        <section>
          <h2>Notre mission</h2>
          <p>
            BonCalcul.fr est né d&apos;un constat simple : trop d&apos;outils de calcul
            en ligne sont envahis de publicités, demandent une inscription ou
            affichent des résultats sans citer leurs sources.
          </p>
          <p>
            Notre mission : proposer des{" "}
            <strong>outils de calcul gratuits, instantanés et sourcés</strong>,
            accessibles à tous sans inscription. Chaque résultat est
            accompagné de ses sources officielles, du barème utilisé et de la
            date de dernière mise à jour.
          </p>
        </section>

        {/* Qui maintient */}
        <section>
          <h2>Qui maintient BonCalcul.fr ?</h2>
          <p>
            BonCalcul.fr est un projet indépendant maintenu par une équipe de
            développeurs et de passionnés de données publiques. Nous ne sommes
            affiliés à aucune banque, assurance ou institution financière.
          </p>
          <p>
            Cette indépendance nous permet de proposer des outils objectifs,
            sans orientation commerciale. Le site est financé par de la
            publicité non intrusive via Google AdSense, qui ne gêne jamais
            l&apos;utilisation des outils.
          </p>
        </section>

        {/* Engagements */}
        <section>
          <h2>Nos engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-4">
            <div className="bg-blue-50 rounded-xl p-5">
              <IconShieldCheck size={28} className="text-blue-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Sources officielles
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Chaque outil cite ses sources : impots.gouv.fr, URSSAF,
                Service-public.fr, OMS. Vous pouvez vérifier vous-même.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5">
              <IconRefresh size={28} className="text-green-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Barèmes à jour
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Nous mettons à jour les barèmes dès leur publication
                officielle. La date de dernière MAJ est affichée sur chaque
                outil.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-5">
              <IconLock size={28} className="text-purple-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Vie privée protégée
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Tous les calculs s&apos;exécutent dans votre navigateur. Aucune
                donnée personnelle n&apos;est envoyée à nos serveurs.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-5">
              <IconCircleCheck size={28} className="text-yellow-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Transparent sur les limites
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Chaque outil affiche un avertissement clair : les résultats
                sont indicatifs et ne remplacent pas un conseil professionnel.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-5">
              <IconBolt size={28} className="text-orange-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Gratuit et rapide
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Pas d&apos;inscription, pas de limite. Résultats instantanés,
                24h/24 sur tous vos appareils.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-5">
              <IconDeviceMobile size={28} className="text-indigo-600" stroke={1.5} />
              <h3 className="font-semibold mt-2 text-gray-800">
                Accessible partout
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Interface adaptée à tous les écrans : ordinateur, tablette et
                mobile.
              </p>
            </div>
          </div>
        </section>

        {/* Nos domaines */}
        <section>
          <h2>Nos domaines</h2>
          <p>
            BonCalcul.fr propose plus de 35 outils organisés en 5 catégories :
          </p>
          <ul>
            <li>
              <Link href="/immobilier" className="text-blue-600 hover:underline">
                <strong>Immobilier</strong>
              </Link>{" "}
              — prêt, notaire, capacité d&apos;emprunt, PTZ, rentabilité locative, plus-value
            </li>
            <li>
              <Link href="/emploi" className="text-blue-600 hover:underline">
                <strong>Emploi & Salaire</strong>
              </Link>{" "}
              — brut/net, chômage ARE, heures sup, SMIC, retraite, rupture conventionnelle
            </li>
            <li>
              <Link href="/fiscalite" className="text-blue-600 hover:underline">
                <strong>Fiscalité</strong>
              </Link>{" "}
              — impôt sur le revenu, TVA, frais kilométriques, micro-entreprise
            </li>
            <li>
              <Link href="/sante" className="text-blue-600 hover:underline">
                <strong>Santé</strong>
              </Link>{" "}
              — IMC, poids idéal, masse grasse, calories, grossesse
            </li>
            <li>
              <Link href="/auto-transport" className="text-blue-600 hover:underline">
                <strong>Auto & Transport</strong>
              </Link>{" "}
              — consommation essence, coût au km, frais kilométriques fiscaux
            </li>
          </ul>
        </section>

        {/* Méthodologie */}
        <section>
          <h2>Notre méthodologie</h2>
          <p>
            Nous appliquons un processus rigoureux pour chaque outil : sélection
            de sources institutionnelles, implémentation des formules et barèmes
            officiels, vérification croisée avec les simulateurs de référence,
            et mise à jour dès la publication de nouveaux barèmes.
          </p>
          <p>
            Consultez notre page{" "}
            <Link href="/methodologie" className="text-blue-600 hover:underline">
              Méthodologie
            </Link>{" "}
            pour en savoir plus sur notre processus de qualité.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2>Contact</h2>
          <p>
            Une question, une suggestion, un barème obsolète à signaler ?
            Écrivez-nous à : <strong>contact@boncalcul.fr</strong>
          </p>
          <p>
            Nous nous engageons à corriger toute erreur signalée sous 48h.
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/methodologie"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Notre méthodologie
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
