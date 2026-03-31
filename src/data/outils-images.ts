/**
 * Données des images et infographies associées à chaque outil.
 * Utilisé par le sitemap images et les métadonnées OpenGraph.
 */
export interface OutilImage {
  /** Chemin relatif depuis la racine du site (ex: /images/infographies/...) */
  url: string;
  /** Titre descriptif en français pour le SEO */
  title: string;
  /** Légende / description SEO */
  caption: string;
}

export interface OutilImageEntry {
  slug: string;
  images: OutilImage[];
}

export const outilsImages: OutilImageEntry[] = [
  {
    slug: "simulateur-pret-immobilier",
    images: [
      {
        url: "/images/infographies/infographie-pret-immobilier.png",
        title: "Infographie simulateur de prêt immobilier — Comprendre vos mensualités",
        caption:
          "Infographie expliquant le calcul des mensualités de prêt immobilier, le tableau d'amortissement et le coût total du crédit en France.",
      },
    ],
  },
  {
    slug: "calcul-salaire-brut-net",
    images: [
      {
        url: "/images/infographies/infographie-salaire-brut-net.png",
        title: "Infographie conversion salaire brut en net 2026",
        caption:
          "Infographie détaillant la conversion du salaire brut en net pour cadre et non-cadre avec les taux de charges sociales 2026.",
      },
    ],
  },
  {
    slug: "calcul-frais-de-notaire",
    images: [
      {
        url: "/images/infographies/infographie-frais-de-notaire.png",
        title: "Infographie frais de notaire 2026 — Ancien vs Neuf",
        caption:
          "Infographie comparant les frais de notaire pour un achat dans l'ancien et dans le neuf, avec détail des droits de mutation.",
      },
    ],
  },
  {
    slug: "calcul-tva",
    images: [
      {
        url: "/images/infographies/infographie-calcul-tva.png",
        title: "Infographie taux de TVA en France 2026",
        caption:
          "Infographie présentant les 4 taux de TVA français (20%, 10%, 5.5%, 2.1%) avec exemples de produits et services concernés.",
      },
    ],
  },
  {
    slug: "calcul-imc",
    images: [
      {
        url: "/images/infographies/infographie-calcul-imc.png",
        title: "Infographie IMC — Catégories de l'OMS",
        caption:
          "Infographie illustrant les catégories d'IMC selon l'Organisation Mondiale de la Santé : sous-poids, normal, surpoids, obésité.",
      },
    ],
  },
  {
    slug: "calcul-capacite-emprunt",
    images: [
      {
        url: "/images/infographies/infographie-capacite-emprunt.png",
        title: "Infographie capacité d'emprunt — Règle des 35%",
        caption:
          "Infographie expliquant le calcul de la capacité d'emprunt immobilier avec la règle HCSF des 35% de taux d'endettement maximum.",
      },
    ],
  },
  {
    slug: "calcul-pourcentage",
    images: [
      {
        url: "/images/infographies/infographie-calcul-pourcentage.png",
        title: "Infographie calcul de pourcentage — 3 méthodes",
        caption:
          "Infographie présentant les trois modes de calcul de pourcentage : pourcentage d'un nombre, proportion et variation.",
      },
    ],
  },
  {
    slug: "calcul-interets-composes",
    images: [
      {
        url: "/images/infographies/infographie-interets-composes.png",
        title: "Infographie intérêts composés — La puissance de l'épargne",
        caption:
          "Infographie illustrant l'effet des intérêts composés sur la croissance d'un placement à long terme avec graphique d'évolution.",
      },
    ],
  },
  {
    slug: "simulateur-impot-revenu",
    images: [
      {
        url: "/images/infographies/infographie-impot-revenu.png",
        title: "Infographie barème impôt sur le revenu 2026",
        caption:
          "Infographie détaillant les tranches du barème progressif de l'impôt sur le revenu 2026 et le quotient familial.",
      },
    ],
  },
  {
    slug: "calcul-indemnites-licenciement",
    images: [
      {
        url: "/images/infographies/infographie-indemnites-licenciement.png",
        title: "Infographie calcul indemnité de licenciement 2026",
        caption:
          "Infographie expliquant le calcul de l'indemnité légale de licenciement selon l'ancienneté et le salaire de référence.",
      },
    ],
  },
  {
    slug: "simulateur-chomage-are",
    images: [
      {
        url: "/images/infographies/infographie-allocation-chomage-are.png",
        title: "Infographie allocation chômage ARE 2026",
        caption:
          "Infographie détaillant le calcul de l'allocation chômage ARE : salaire journalier de référence, durée d'indemnisation et montant.",
      },
    ],
  },
  {
    slug: "cout-salarie-employeur",
    images: [
      {
        url: "/images/infographies/infographie-cout-salarie-employeur.png",
        title: "Infographie coût d'un salarié pour l'employeur 2026",
        caption:
          "Infographie montrant la décomposition du coût total d'un salarié : salaire brut, charges patronales, mutuelle et taxes.",
      },
    ],
  },
  {
    slug: "calcul-pension-alimentaire",
    images: [
      {
        url: "/images/infographies/infographie-pension-alimentaire.png",
        title: "Infographie barème pension alimentaire 2026",
        caption:
          "Infographie présentant le barème indicatif de la pension alimentaire du ministère de la Justice selon les revenus et le nombre d'enfants.",
      },
    ],
  },
  {
    slug: "calcul-heures-supplementaires",
    images: [
      {
        url: "/images/infographies/infographie-heures-supplementaires.png",
        title: "Infographie majorations heures supplémentaires",
        caption:
          "Infographie détaillant les majorations légales des heures supplémentaires : 25% pour les 8 premières, 50% au-delà.",
      },
    ],
  },
  {
    slug: "simulateur-smic",
    images: [
      {
        url: "/images/infographies/infographie-smic-2026.png",
        title: "Infographie SMIC 2026 — Horaire, mensuel, annuel",
        caption:
          "Infographie présentant le SMIC 2026 : montant horaire brut et net, mensuel et annuel pour un temps plein.",
      },
    ],
  },
  {
    slug: "calcul-rentabilite-locative",
    images: [
      {
        url: "/images/infographies/infographie-rentabilite-locative.png",
        title: "Infographie rentabilité locative — Brute, nette et nette-nette",
        caption:
          "Infographie expliquant les trois niveaux de rentabilité locative et comment les calculer pour un investissement immobilier.",
      },
    ],
  },
  {
    slug: "calcul-plus-value-immobiliere",
    images: [
      {
        url: "/images/infographies/infographie-plus-value-immobiliere.png",
        title: "Infographie plus-value immobilière 2026",
        caption:
          "Infographie détaillant les abattements pour durée de détention et le calcul de l'impôt sur la plus-value immobilière.",
      },
    ],
  },
  {
    slug: "calcul-surface-carrez",
    images: [
      {
        url: "/images/infographies/infographie-surface-carrez.png",
        title: "Infographie loi Carrez — Surfaces à inclure et exclure",
        caption:
          "Infographie illustrant les règles de la loi Carrez : hauteur minimale de 1,80 m, surfaces à mesurer et exclusions.",
      },
    ],
  },
  {
    slug: "simulateur-credit-consommation",
    images: [
      {
        url: "/images/infographies/infographie-credit-consommation.png",
        title: "Infographie crédit à la consommation — Mensualités et TAEG",
        caption:
          "Infographie expliquant le fonctionnement du crédit consommation : mensualités, coût total, TAEG et durée.",
      },
    ],
  },
  {
    slug: "simulateur-rachat-credit",
    images: [
      {
        url: "/images/infographies/infographie-rachat-credit.png",
        title: "Infographie rachat de crédit — Économies potentielles",
        caption:
          "Infographie comparant avant/après rachat de crédit : nouvelle mensualité, durée, coût total et économie réalisée.",
      },
    ],
  },
  {
    slug: "conversion-unites",
    images: [
      {
        url: "/images/infographies/infographie-conversion-unites.png",
        title: "Infographie conversion d'unités — Tableau récapitulatif",
        caption:
          "Infographie récapitulant les conversions courantes : longueur, masse, volume, température, surface et vitesse.",
      },
    ],
  },
  {
    slug: "calcul-age",
    images: [
      {
        url: "/images/infographies/infographie-calcul-age.png",
        title: "Infographie calcul d'âge exact",
        caption:
          "Infographie présentant le calcul d'âge exact en années, mois, jours et semaines avec jour de naissance.",
      },
    ],
  },
  {
    slug: "calcul-duree-entre-dates",
    images: [
      {
        url: "/images/infographies/infographie-duree-entre-dates.png",
        title: "Infographie calcul de jours entre deux dates",
        caption:
          "Infographie illustrant le calcul du nombre de jours, semaines et mois entre deux dates avec jours ouvrés.",
      },
    ],
  },
  {
    slug: "calcul-consommation-essence",
    images: [
      {
        url: "/images/infographies/infographie-consommation-essence.png",
        title: "Infographie consommation de carburant en L/100km",
        caption:
          "Infographie expliquant le calcul de consommation de carburant et l'estimation du coût d'un trajet.",
      },
    ],
  },
  {
    slug: "cout-km-voiture",
    images: [
      {
        url: "/images/infographies/infographie-cout-km-voiture.png",
        title: "Infographie coût au kilomètre voiture — Tous les postes",
        caption:
          "Infographie décomposant le coût réel au kilomètre : carburant, assurance, entretien, décote et contrôle technique.",
      },
    ],
  },
  {
    slug: "calcul-date-accouchement",
    images: [
      {
        url: "/images/infographies/infographie-date-accouchement.png",
        title: "Infographie calcul date d'accouchement prévue",
        caption:
          "Infographie expliquant le calcul de la date prévue d'accouchement (DPA) à partir des dernières règles ou de la conception.",
      },
    ],
  },
  {
    slug: "calcul-calories",
    images: [
      {
        url: "/images/infographies/infographie-besoins-caloriques.png",
        title: "Infographie besoins caloriques journaliers",
        caption:
          "Infographie détaillant le calcul des besoins caloriques avec la formule Mifflin-St Jeor selon l'âge, le sexe et l'activité.",
      },
    ],
  },
  {
    slug: "calcul-poids-ideal",
    images: [
      {
        url: "/images/infographies/infographie-poids-ideal.png",
        title: "Infographie poids idéal — 4 formules comparées",
        caption:
          "Infographie comparant les formules de Lorentz, Devine, Creff et la plage IMC pour estimer le poids idéal.",
      },
    ],
  },
  {
    slug: "calcul-img",
    images: [
      {
        url: "/images/infographies/infographie-masse-grasse-img.png",
        title: "Infographie indice de masse grasse (IMG)",
        caption:
          "Infographie présentant le calcul de l'IMG avec la formule de Deurenberg et l'interprétation par sexe.",
      },
    ],
  },
  {
    slug: "calcul-ovulation",
    images: [
      {
        url: "/images/infographies/infographie-calcul-ovulation.png",
        title: "Infographie cycle menstruel et période fertile",
        caption:
          "Infographie illustrant le calcul de la date d'ovulation et la fenêtre de fertilité selon la durée du cycle.",
      },
    ],
  },
];

/**
 * Retrouve les images associées à un outil par son slug.
 */
export function getOutilImages(slug: string): OutilImage[] {
  return outilsImages.find((o) => o.slug === slug)?.images ?? [];
}
