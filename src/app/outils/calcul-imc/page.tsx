import type { Metadata } from "next";
import CalculIMC from "./CalculIMC";
import { JsonLd, webApplicationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { AdBanner } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Calcul IMC — Indice de masse corporelle gratuit",
  description:
    "Calculez votre Indice de Masse Corporelle (IMC) gratuitement. Interpretez votre resultat selon les categories de l'OMS et decouvrez votre poids ideal.",
  keywords: [
    "calcul IMC",
    "indice de masse corporelle",
    "calculateur IMC gratuit",
    "IMC OMS",
    "poids ideal",
    "BMI calculator",
    "obesite",
    "surpoids",
  ],
  alternates: {
    canonical: "https://boncalcul.fr/outils/calcul-imc",
  },
  openGraph: {
    title: "Calcul IMC — Indice de masse corporelle gratuit | BonCalcul.fr",
    description:
      "Calculez votre IMC instantanement et decouvrez votre categorie selon l'OMS. Gratuit, sans inscription.",
    url: "https://boncalcul.fr/outils/calcul-imc",
    type: "website",
  },
};

const faqQuestions = [
  {
    question: "Comment calculer son IMC ?",
    answer:
      "L'IMC se calcule en divisant votre poids (en kilogrammes) par le carre de votre taille (en metres). Par exemple, pour une personne de 70 kg mesurant 1,75 m : IMC = 70 / (1,75 x 1,75) = 22,9. Un IMC entre 18,5 et 25 est considere comme normal par l'Organisation mondiale de la sante (OMS).",
  },
  {
    question: "Quel est l'IMC ideal ?",
    answer:
      "Selon l'OMS, un IMC compris entre 18,5 et 24,9 correspond a un poids normal pour la plupart des adultes. Cependant, l'IMC ideal peut varier selon l'age, le sexe, la morphologie et le niveau d'activite physique. Un IMC autour de 21-22 est souvent cite comme optimal pour la sante.",
  },
  {
    question: "L'IMC est-il fiable pour tout le monde ?",
    answer:
      "Non, l'IMC a des limites. Il ne distingue pas la masse graisseuse de la masse musculaire. Un sportif tres muscle peut avoir un IMC eleve sans etre en surpoids. L'IMC n'est pas non plus adapte aux enfants, aux adolescents, aux femmes enceintes ou aux personnes agees. Il doit etre considere comme un indicateur parmi d'autres et ne remplace pas un avis medical.",
  },
  {
    question: "A partir de quel IMC faut-il consulter un medecin ?",
    answer:
      "Il est recommande de consulter un medecin si votre IMC est inferieur a 18,5 (insuffisance ponderale) ou superieur a 30 (obesite). Un IMC entre 25 et 30 (surpoids) merite egalement une attention particuliere, surtout s'il s'accompagne d'autres facteurs de risque comme l'hypertension, le diabete ou un tour de taille eleve.",
  },
  {
    question: "Quelle est la difference entre IMC et IMG ?",
    answer:
      "L'IMC (Indice de Masse Corporelle) est un ratio poids/taille simple qui ne distingue pas les types de masse. L'IMG (Indice de Masse Grasse) mesure specifiquement le pourcentage de graisse corporelle. L'IMG est plus precis pour evaluer la composition corporelle, mais il necessite des mesures complementaires (plis cutanes, impedancemetrie). Les deux indicateurs sont complementaires.",
  },
];

export default function PageCalculIMC() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "Calcul IMC — Indice de masse corporelle gratuit",
          description:
            "Calculez votre Indice de Masse Corporelle (IMC) gratuitement et interpretez votre resultat selon les categories de l'OMS.",
          url: "https://boncalcul.fr/outils/calcul-imc",
        })}
      />
      <JsonLd data={faqJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcul de l&apos;IMC{" "}
            <span className="text-green-600">gratuit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculez votre Indice de Masse Corporelle en quelques secondes et
            decouvrez votre categorie selon l&apos;OMS.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-4 -mt-4 relative z-10">
        <CalculIMC />
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="imc-mid" format="horizontal" className="my-8" />
      </div>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <h2>Qu&apos;est-ce que l&apos;IMC (Indice de Masse Corporelle) ?</h2>
          <p>
            L&apos;<strong>Indice de Masse Corporelle</strong>, ou{" "}
            <strong>IMC</strong> (en anglais <em>Body Mass Index</em> ou{" "}
            <em>BMI</em>), est un indicateur qui permet d&apos;evaluer la
            corpulence d&apos;une personne en fonction de sa taille et de son
            poids. Developpe par le mathematicien belge Adolphe Quetelet au XIXe
            siecle, il est aujourd&apos;hui utilise dans le monde entier par les
            professionnels de sante comme outil de depistage du surpoids et de
            l&apos;obesite.
          </p>
          <p>
            L&apos;Organisation mondiale de la sante (OMS) a adopte l&apos;IMC
            comme reference internationale pour classifier les differentes
            categories de corpulence chez l&apos;adulte. C&apos;est un outil
            simple, rapide et non invasif qui donne une premiere indication sur
            les risques pour la sante lies au poids.
          </p>

          <h2>Comment calculer son IMC ?</h2>
          <p>
            La formule de calcul de l&apos;IMC est tres simple. Il suffit de
            diviser votre <strong>poids</strong> (exprime en kilogrammes) par le{" "}
            <strong>carre de votre taille</strong> (exprimee en metres) :
          </p>
          <p className="text-center">
            <strong className="text-lg">
              IMC = Poids (kg) / Taille (m) x Taille (m)
            </strong>
          </p>
          <p>
            Par exemple, pour une personne pesant 68 kg et mesurant 1,72 m :{" "}
            <em>IMC = 68 / (1,72 x 1,72) = 68 / 2,9584 = 22,99</em>. Cet IMC
            de 23,0 se situe dans la categorie &laquo; poids normal &raquo;
            selon les criteres de l&apos;OMS. Notre calculateur effectue ce
            calcul automatiquement : il vous suffit d&apos;entrer votre poids en
            kilogrammes et votre taille en centimetres pour obtenir
            instantanement votre resultat.
          </p>

          <h2>Les categories de l&apos;OMS</h2>
          <p>
            L&apos;OMS a defini des seuils precis pour interpreter la valeur de
            l&apos;IMC chez l&apos;adulte (a partir de 18 ans). Ces categories
            sont les memes pour les hommes et les femmes :
          </p>
          <ul>
            <li>
              <strong>Denutrition</strong> (IMC &lt; 16,5) : poids tres
              insuffisant, risque majeur pour la sante. Des carences
              nutritionnelles graves peuvent entrainer des troubles cardiaques,
              immunitaires et hormonaux.
            </li>
            <li>
              <strong>Maigreur</strong> (IMC 16,5 - 18,5) : poids insuffisant.
              Un suivi medical est recommande pour identifier les causes
              (alimentation, maladie, troubles du comportement alimentaire).
            </li>
            <li>
              <strong>Poids normal</strong> (IMC 18,5 - 25) : poids
              correspondant a un risque minimal pour la sante. C&apos;est la
              fourchette consideree comme ideale pour la majorite des adultes.
            </li>
            <li>
              <strong>Surpoids</strong> (IMC 25 - 30) : poids legerement
              excessif. Le risque de maladies cardiovasculaires, de diabete de
              type 2 et d&apos;hypertension commence a augmenter.
            </li>
            <li>
              <strong>Obesite moderee</strong> (IMC 30 - 35) : le risque pour la
              sante est nettement accru. Un accompagnement medical et un
              changement d&apos;hygiene de vie sont generalement recommandes.
            </li>
            <li>
              <strong>Obesite severe</strong> (IMC 35 - 40) : risque eleve de
              complications de sante. Une prise en charge medicale pluridisciplinaire
              est necessaire.
            </li>
            <li>
              <strong>Obesite morbide</strong> (IMC &gt; 40) : risque tres eleve
              de comorbidites graves. La chirurgie bariatrique peut etre
              envisagee dans certains cas.
            </li>
          </ul>

          <h2>Les limites de l&apos;IMC</h2>
          <p>
            Si l&apos;IMC est un indicateur utile pour le depistage a grande
            echelle, il presente plusieurs <strong>limites importantes</strong>{" "}
            qu&apos;il convient de connaitre :
          </p>
          <ul>
            <li>
              <strong>Il ne distingue pas la masse musculaire de la masse
              graisseuse.</strong> Un sportif ou un bodybuilder peut avoir un IMC
              superieur a 25 tout en etant en excellente sante, car ses kilos
              supplementaires sont dus au muscle et non a la graisse.
            </li>
            <li>
              <strong>Il ne prend pas en compte la repartition des graisses.</strong>{" "}
              Or, la graisse abdominale (graisse viscerale) est bien plus
              dangereuse pour la sante que la graisse situee sur les hanches ou
              les cuisses. Le tour de taille est un indicateur complementaire
              important.
            </li>
            <li>
              <strong>Il ne tient pas compte de l&apos;age.</strong> La
              composition corporelle evolue avec l&apos;age : apres 60-65 ans,
              une legere surcharge ponderale (IMC 25-27) peut meme etre
              protectrice.
            </li>
            <li>
              <strong>Il n&apos;est pas adapte aux enfants et aux
              adolescents.</strong> Pour les moins de 18 ans, des courbes de
              corpulence specifiques tenant compte de l&apos;age et du sexe sont
              utilisees.
            </li>
            <li>
              <strong>Il ne convient pas aux femmes enceintes</strong>, dont la
              prise de poids est normale et necessaire pour le bon developpement
              du bebe.
            </li>
          </ul>

          <h2>Quand consulter un medecin ?</h2>
          <p>
            L&apos;IMC est un outil de depistage, pas un diagnostic. Il est
            recommande de consulter un professionnel de sante dans les
            situations suivantes :
          </p>
          <ul>
            <li>
              Votre IMC est <strong>inferieur a 18,5</strong> ou{" "}
              <strong>superieur a 30</strong>.
            </li>
            <li>
              Votre IMC se situe entre 25 et 30 et vous presentez d&apos;autres
              facteurs de risque : hypertension arterielle, diabete, cholesterol
              eleve, antecedents familiaux de maladies cardiovasculaires.
            </li>
            <li>
              Vous constatez une <strong>prise ou perte de poids rapide et
              inexpliquee</strong>.
            </li>
            <li>
              Vous avez des <strong>difficultes a maintenir un poids stable</strong>{" "}
              malgre une alimentation equilibree.
            </li>
          </ul>
          <p>
            Votre medecin pourra completer l&apos;evaluation par d&apos;autres
            mesures (tour de taille, bilan sanguin, impedancemetrie) et vous
            proposer un accompagnement adapte a votre situation.
          </p>

          <h2>Conseils pour maintenir un poids sain</h2>
          <p>
            Maintenir un poids de forme ne se resume pas a un chiffre sur la
            balance. Voici quelques recommandations fondees sur les
            preconisations des autorites de sante :
          </p>
          <ul>
            <li>
              <strong>Adoptez une alimentation equilibree</strong> : privilegiez
              les fruits, legumes, cereales completes, proteines maigres et
              bonnes graisses. Limitez les produits ultra-transformes, le sucre
              ajoute et les graisses saturees.
            </li>
            <li>
              <strong>Pratiquez une activite physique reguliere</strong> :{" "}
              l&apos;OMS recommande au moins 150 minutes d&apos;activite
              moderee par semaine (marche rapide, velo, natation) ou 75 minutes
              d&apos;activite intense.
            </li>
            <li>
              <strong>Dormez suffisamment</strong> : le manque de sommeil
              favorise la prise de poids en perturbant les hormones de la faim
              (gheline et leptine). Visez 7 a 9 heures par nuit.
            </li>
            <li>
              <strong>Gerez votre stress</strong> : le stress chronique peut
              entrainer des comportements alimentaires compulsifs et favoriser
              le stockage de graisse abdominale.
            </li>
            <li>
              <strong>Evitez les regimes restrictifs</strong> : ils sont souvent
              contre-productifs a long terme (effet yoyo). Privilegiez des
              changements d&apos;habitudes progressifs et durables.
            </li>
          </ul>
          <p>
            N&apos;oubliez pas que l&apos;IMC n&apos;est qu&apos;un indicateur
            parmi d&apos;autres. Votre bien-etre general, votre niveau
            d&apos;energie, votre sante mentale et votre qualite de vie sont
            tout aussi importants que le chiffre affiche sur la balance ou dans
            un calcul d&apos;IMC.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdBanner slot="imc-content" format="auto" className="my-8" />
      </div>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Questions frequentes sur l&apos;IMC
        </h2>
        <div className="space-y-4">
          {faqQuestions.map((q, i) => (
            <details
              key={i}
              className="bg-white rounded-xl shadow p-5 group"
            >
              <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
                {q.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {q.answer}
              </p>
            </details>
          ))}
        </div>

        <AdBanner slot="imc-bottom" format="horizontal" className="mt-8" />
      </section>
    </>
  );
}
