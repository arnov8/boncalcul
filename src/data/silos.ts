import type { OutilMeta } from "./outils";
import { outils } from "./outils";

export interface Silo {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  icon: string;
  color: string;
  intro: string;
  toolSlugs: string[];
}

export const silos: Silo[] = [
  {
    slug: "immobilier",
    title: "Calculateurs immobiliers gratuits — Prêt, notaire, PTZ, capacité d'emprunt",
    shortTitle: "Immobilier",
    description: "Tous les outils pour votre projet immobilier : simulateur de prêt, frais de notaire, capacité d'emprunt, PTZ, rentabilité locative, plus-value et plus encore.",
    metaDescription: "Simulateurs immobiliers gratuits : prêt immobilier, frais de notaire, capacité d'emprunt, PTZ 2026, rentabilité locative, plus-value, surface Carrez. Résultats instantanés.",
    icon: "home",
    color: "blue",
    intro: "Préparez votre projet immobilier avec nos outils de calcul gratuits. Que vous soyez primo-accédant ou investisseur, simulez votre prêt, estimez vos frais de notaire, vérifiez votre éligibilité au PTZ ou calculez la rentabilité d'un investissement locatif. Tous les calculs sont basés sur les barèmes officiels en vigueur.",
    toolSlugs: [
      "simulateur-pret-immobilier",
      "calcul-frais-de-notaire",
      "calcul-capacite-emprunt",
      "simulateur-ptz-2026",
      "calcul-rentabilite-locative",
      "calcul-plus-value-immobiliere",
      "calcul-surface-carrez",
      "simulateur-credit-consommation",
      "simulateur-rachat-credit",
      "simulateur-apl",
      "calcul-interets-composes",
    ],
  },
  {
    slug: "emploi",
    title: "Calculateurs emploi & salaire gratuits — Brut/net, chômage, retraite, SMIC",
    shortTitle: "Emploi & Salaire",
    description: "Outils gratuits pour l'emploi : conversion salaire brut/net, simulation chômage ARE, heures supplémentaires, coût salarié, SMIC 2026, retraite, rupture conventionnelle.",
    metaDescription: "Calculateurs emploi gratuits : salaire brut/net, allocation chômage ARE, heures supplémentaires, coût salarié employeur, SMIC 2026, retraite, rupture conventionnelle.",
    icon: "briefcase",
    color: "emerald",
    intro: "Retrouvez tous les outils de calcul liés à l'emploi et au salaire. Convertissez votre salaire brut en net, estimez vos allocations chômage, calculez vos heures supplémentaires ou simulez votre future pension de retraite. Nos simulateurs utilisent les taux de cotisations et barèmes officiels URSSAF et France Travail.",
    toolSlugs: [
      "calcul-salaire-brut-net",
      "simulateur-chomage-are",
      "cout-salarie-employeur",
      "calcul-heures-supplementaires",
      "simulateur-smic",
      "calcul-indemnites-licenciement",
      "simulateur-rupture-conventionnelle",
      "simulateur-retraite",
      "calcul-charges-micro-entrepreneur",
    ],
  },
  {
    slug: "fiscalite",
    title: "Calculateurs fiscalité gratuits — Impôt, TVA, frais km, micro-entreprise",
    shortTitle: "Fiscalité",
    description: "Outils de calcul fiscaux gratuits : simulateur d'impôt sur le revenu, TVA HT/TTC, frais kilométriques, charges micro-entrepreneur. Barèmes 2026.",
    metaDescription: "Simulateurs fiscaux gratuits : impôt sur le revenu 2026, calcul TVA, frais kilométriques barème fiscal, charges micro-entrepreneur. Résultats instantanés.",
    icon: "building-columns",
    color: "amber",
    intro: "Gérez votre fiscalité avec nos calculateurs gratuits. Simulez votre impôt sur le revenu avec le barème progressif 2026, convertissez vos montants HT/TTC, calculez vos frais kilométriques déductibles ou estimez vos charges en micro-entreprise. Tous les barèmes sont issus du Code général des impôts et de l'URSSAF.",
    toolSlugs: [
      "simulateur-impot-revenu",
      "calcul-tva",
      "calcul-frais-kilometriques",
      "calcul-charges-micro-entrepreneur",
      "calcul-plus-value-immobiliere",
    ],
  },
  {
    slug: "sante",
    title: "Calculateurs santé gratuits — IMC, poids idéal, calories, grossesse",
    shortTitle: "Santé",
    description: "Outils santé gratuits : calcul IMC, poids idéal, masse grasse IMG, besoins caloriques, date d'accouchement, ovulation. Formules médicales reconnues.",
    metaDescription: "Calculateurs santé gratuits : IMC, poids idéal, masse grasse IMG, besoins caloriques, date d'accouchement, ovulation. Formules OMS et médicales reconnues.",
    icon: "heartbeat",
    color: "rose",
    intro: "Suivez votre santé et votre bien-être avec nos calculateurs gratuits. Calculez votre IMC selon les critères de l'OMS, estimez votre poids idéal avec 4 formules reconnues, évaluez vos besoins caloriques ou suivez votre cycle. Nos outils utilisent des formules médicales validées (Mifflin-St Jeor, Deurenberg, Lorentz).",
    toolSlugs: [
      "calcul-imc",
      "calcul-poids-ideal",
      "calcul-img",
      "calcul-calories",
      "calcul-date-accouchement",
      "calcul-ovulation",
    ],
  },
  {
    slug: "auto-transport",
    title: "Calculateurs auto & transport gratuits — Consommation, coût km, frais kilométriques",
    shortTitle: "Auto & Transport",
    description: "Outils auto gratuits : consommation essence L/100km, coût au kilomètre, frais kilométriques fiscaux. Barème 2026 inclus.",
    metaDescription: "Calculateurs auto gratuits : consommation carburant L/100km, coût réel au km, frais kilométriques barème fiscal 2026. Résultats instantanés.",
    icon: "car",
    color: "violet",
    intro: "Maîtrisez le budget de votre véhicule avec nos outils gratuits. Calculez votre consommation de carburant en L/100km, estimez le coût réel au kilomètre de votre voiture ou calculez vos frais kilométriques déductibles des impôts avec le barème fiscal 2026.",
    toolSlugs: [
      "calcul-consommation-essence",
      "cout-km-voiture",
      "calcul-frais-kilometriques",
    ],
  },
];

export function getSilo(slug: string): Silo | undefined {
  return silos.find((s) => s.slug === slug);
}

export function getSiloTools(silo: Silo): OutilMeta[] {
  return silo.toolSlugs
    .map((slug) => outils.find((o) => o.slug === slug))
    .filter((o): o is OutilMeta => o !== undefined);
}

export function getSilosForTool(toolSlug: string): Silo[] {
  return silos.filter((s) => s.toolSlugs.includes(toolSlug));
}
