/**
 * Sources officielles et métadonnées E-E-A-T pour chaque outil.
 * Utilisé par le composant SourcesBadge affiché sur chaque page outil.
 */

export interface ToolSource {
  slug: string;
  /** Sources officielles utilisées */
  sources: { name: string; url: string }[];
  /** Barèmes / références appliqués */
  baremes: string[];
  /** Date de dernière mise à jour des données (YYYY-MM-DD) */
  lastUpdated: string;
  /** Limites / avertissements spécifiques */
  disclaimer?: string;
}

const defaultDisclaimer =
  "Les résultats sont fournis à titre indicatif et ne constituent pas un conseil professionnel. Consultez un spécialiste pour toute décision importante.";

export const toolSources: ToolSource[] = [
  // --- Immobilier & Finance ---
  {
    slug: "simulateur-pret-immobilier",
    sources: [
      { name: "Banque de France", url: "https://www.banque-france.fr" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F10871" },
    ],
    baremes: ["Formule d'annuité constante", "Taux d'usure Banque de France"],
    lastUpdated: "2026-01-15",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "calcul-frais-de-notaire",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F17759" },
      { name: "Notaires.fr", url: "https://www.notaires.fr" },
    ],
    baremes: ["Droits de mutation par département", "Émoluments du notaire (barème réglementé)", "Taxe de publicité foncière"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. Les frais réels peuvent varier selon le notaire et les spécificités du dossier.",
  },
  {
    slug: "calcul-capacite-emprunt",
    sources: [
      { name: "HCSF", url: "https://www.economie.gouv.fr/hcsf" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F10871" },
    ],
    baremes: ["Règle HCSF : taux d'endettement max 35%", "Durée maximale 25 ans (27 ans avec différé)"],
    lastUpdated: "2026-01-15",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "simulateur-ptz-2026",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F10871" },
      { name: "ANIL", url: "https://www.anil.org/pret-a-taux-zero/" },
    ],
    baremes: ["Plafonds de ressources PTZ 2026", "Zonage A/B1/B2/C", "Quotités par zone"],
    lastUpdated: "2026-01-20",
    disclaimer: "Simulation indicative. L'éligibilité définitive est déterminée par l'établissement prêteur.",
  },
  {
    slug: "calcul-rentabilite-locative",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F31894" },
    ],
    baremes: ["Rentabilité brute, nette et nette-nette", "Charges déductibles standard"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. La rentabilité réelle dépend de nombreux facteurs (vacance locative, travaux, fiscalité personnelle).",
  },
  {
    slug: "calcul-plus-value-immobiliere",
    sources: [
      { name: "impots.gouv.fr", url: "https://www.impots.gouv.fr/particulier/questions/comment-est-imposee-la-plus-value-immobiliere" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F10864" },
    ],
    baremes: ["Abattements pour durée de détention (IR + prélèvements sociaux)", "Taux forfaitaire 19% + 17,2% PS"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. La plus-value réelle peut différer selon les travaux, les frais d'acquisition et les exonérations applicables.",
  },
  {
    slug: "calcul-surface-carrez",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F18682" },
      { name: "Legifrance — Loi n°96-1107", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310" },
    ],
    baremes: ["Hauteur minimale 1,80 m", "Exclusion caves, garages, parkings, combles non aménagés"],
    lastUpdated: "2025-06-01",
    disclaimer: "Estimation indicative. Seul un diagnostic réalisé par un professionnel certifié a valeur légale.",
  },
  {
    slug: "simulateur-credit-consommation",
    sources: [
      { name: "Banque de France", url: "https://www.banque-france.fr" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F2456" },
    ],
    baremes: ["Formule d'annuité constante", "TAEG (Taux Annuel Effectif Global)"],
    lastUpdated: "2026-01-15",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "simulateur-rachat-credit",
    sources: [
      { name: "Banque de France", url: "https://www.banque-france.fr" },
    ],
    baremes: ["Indemnités de remboursement anticipé (IRA)", "Formule d'annuité constante"],
    lastUpdated: "2026-01-15",
    disclaimer: "Estimation indicative. Le gain réel dépend des conditions de votre contrat actuel et de l'offre de rachat.",
  },
  {
    slug: "simulateur-apl",
    sources: [
      { name: "CAF", url: "https://www.caf.fr/allocataires/droits-et-prestations/connaitre-vos-droits-selon-votre-situation/vous-louez-un-logement/les-aides-au-logement" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F12006" },
    ],
    baremes: ["Barème APL 2026", "Plafonds de loyer par zone", "Forfait charges"],
    lastUpdated: "2026-01-20",
    disclaimer: "Estimation indicative. Le montant réel est calculé par la CAF sur la base de votre déclaration de ressources.",
  },
  {
    slug: "calcul-interets-composes",
    sources: [
      { name: "AMF", url: "https://www.amf-france.org" },
    ],
    baremes: ["Formule des intérêts composés : C × (1 + r)^n"],
    lastUpdated: "2025-06-01",
    disclaimer: "Simulation indicative. Les rendements passés ne préjugent pas des rendements futurs.",
  },

  // --- Emploi & Salaire ---
  {
    slug: "calcul-salaire-brut-net",
    sources: [
      { name: "URSSAF", url: "https://www.urssaf.fr/accueil/taux-baremes.html" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F2302" },
    ],
    baremes: ["Taux de cotisations salariales 2026 (cadre / non-cadre)", "CSG-CRDS"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. Le salaire net réel dépend de votre convention collective, de votre mutuelle et de votre situation fiscale.",
  },
  {
    slug: "simulateur-chomage-are",
    sources: [
      { name: "France Travail", url: "https://www.francetravail.fr" },
      { name: "Unédic", url: "https://www.unedic.org/la-reglementation/fiches-thematiques/allocation-daide-au-retour-a-lemploi-are" },
    ],
    baremes: ["Formule ARE : 57% du SJR ou 40,4% du SJR + partie fixe", "Durée d'indemnisation selon l'âge"],
    lastUpdated: "2026-01-15",
    disclaimer: "Estimation indicative. Le montant réel est calculé par France Travail sur la base de votre dossier.",
  },
  {
    slug: "cout-salarie-employeur",
    sources: [
      { name: "URSSAF", url: "https://www.urssaf.fr/accueil/taux-baremes.html" },
    ],
    baremes: ["Taux de cotisations patronales 2026", "Mutuelle obligatoire", "Réduction Fillon"],
    lastUpdated: "2026-01-10",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "calcul-heures-supplementaires",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F2391" },
      { name: "Code du travail", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020517" },
    ],
    baremes: ["Majoration légale : +25% (8 premières heures), +50% (au-delà)", "Exonération fiscale jusqu'à 7 500 €/an"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. Votre convention collective peut prévoir des taux de majoration différents.",
  },
  {
    slug: "simulateur-smic",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F2300" },
      { name: "INSEE", url: "https://www.insee.fr/fr/statistiques/serie/001515333" },
    ],
    baremes: ["SMIC horaire brut 2026", "151,67 heures/mois (base 35h)"],
    lastUpdated: "2026-01-01",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "calcul-indemnites-licenciement",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F987" },
      { name: "Code du travail", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035643828" },
    ],
    baremes: ["Indemnité légale : 1/4 mois par an (≤10 ans) + 1/3 mois par an (>10 ans)", "Salaire de référence : moyenne des 3 ou 12 derniers mois"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative de l'indemnité légale minimale. Votre convention collective peut prévoir des indemnités plus favorables.",
  },
  {
    slug: "simulateur-rupture-conventionnelle",
    sources: [
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F19030" },
    ],
    baremes: ["Indemnité minimale = indemnité légale de licenciement", "Forfait social employeur 30%"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. L'indemnité négociée peut être supérieure au minimum légal.",
  },
  {
    slug: "simulateur-retraite",
    sources: [
      { name: "L'Assurance retraite", url: "https://www.lassuranceretraite.fr" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F19666" },
    ],
    baremes: ["Réforme des retraites 2023", "Taux plein : 50% du SAM", "Trimestres requis selon l'année de naissance"],
    lastUpdated: "2026-01-15",
    disclaimer: "Estimation très simplifiée. Utilisez le simulateur officiel info-retraite.fr pour une projection personnalisée.",
  },
  {
    slug: "calcul-charges-micro-entrepreneur",
    sources: [
      { name: "URSSAF", url: "https://www.urssaf.fr/accueil/taux-baremes/taux-cotisations-ac.html" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F23267" },
    ],
    baremes: ["Taux micro-social 2026 par activité", "ACRE (taux réduit 1re année)", "Versement libératoire de l'IR"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative. Les taux peuvent évoluer en cours d'année.",
  },
  {
    slug: "calcul-pension-alimentaire",
    sources: [
      { name: "Ministère de la Justice", url: "https://www.justice.gouv.fr/simulateurs/pensions/bareme" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F991" },
    ],
    baremes: ["Barème indicatif du ministère de la Justice", "Pourcentage du revenu selon le nombre d'enfants et le droit de visite"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative basée sur le barème du ministère. Le juge aux affaires familiales fixe le montant définitif.",
  },

  // --- Fiscalité ---
  {
    slug: "simulateur-impot-revenu",
    sources: [
      { name: "impots.gouv.fr", url: "https://www.impots.gouv.fr/particulier/le-bareme-de-limpot" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/particuliers/vosdroits/F1419" },
    ],
    baremes: ["Barème progressif IR 2026 (revenus 2025)", "Quotient familial", "Décote", "Plafonnement du QF"],
    lastUpdated: "2026-01-15",
    disclaimer: "Estimation indicative. Votre situation fiscale réelle (réductions, crédits d'impôt) peut différer.",
  },
  {
    slug: "calcul-tva",
    sources: [
      { name: "impots.gouv.fr", url: "https://www.impots.gouv.fr/professionnel/tva" },
      { name: "Service-public.fr", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F23566" },
    ],
    baremes: ["Taux normal 20%", "Taux intermédiaire 10%", "Taux réduit 5,5%", "Taux super-réduit 2,1%"],
    lastUpdated: "2025-06-01",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "calcul-frais-kilometriques",
    sources: [
      { name: "impots.gouv.fr", url: "https://www.impots.gouv.fr/particulier/questions/comment-calculer-mes-frais-kilometriques" },
      { name: "BOFIP", url: "https://bofip.impots.gouv.fr/bofip/2568-PGP.html" },
    ],
    baremes: ["Barème kilométrique fiscal 2026 (voitures)", "Barème motos/scooters", "Majoration +20% véhicules électriques"],
    lastUpdated: "2026-02-01",
    disclaimer: "Estimation indicative basée sur le barème fiscal officiel. À utiliser dans le cadre de la déclaration de frais réels.",
  },

  // --- Santé ---
  {
    slug: "calcul-imc",
    sources: [
      { name: "OMS", url: "https://www.who.int/fr/health-topics/obesity" },
      { name: "Ameli.fr", url: "https://www.ameli.fr/assure/sante/themes/surpoids-obesite-adulte/definition-causes-risques" },
    ],
    baremes: ["IMC = poids (kg) / taille² (m)", "Classification OMS : insuffisance pondérale, normal, surpoids, obésité"],
    lastUpdated: "2025-06-01",
    disclaimer: "Indicateur général. L'IMC ne tient pas compte de la masse musculaire, de l'ossature ou de la répartition des graisses. Consultez un professionnel de santé.",
  },
  {
    slug: "calcul-poids-ideal",
    sources: [
      { name: "OMS", url: "https://www.who.int/fr/health-topics/obesity" },
    ],
    baremes: ["Formule de Lorentz", "Formule de Devine", "Formule de Creff", "Plage IMC normal (18,5-24,9)"],
    lastUpdated: "2025-06-01",
    disclaimer: "Estimation indicative. Le poids idéal est une notion relative qui dépend de nombreux facteurs individuels. Consultez un professionnel de santé.",
  },
  {
    slug: "calcul-img",
    sources: [
      { name: "Formule de Deurenberg (1991)", url: "https://pubmed.ncbi.nlm.nih.gov/2010699/" },
    ],
    baremes: ["IMG = 1,2 × IMC + 0,23 × âge − 10,8 × sexe − 5,4"],
    lastUpdated: "2025-06-01",
    disclaimer: "Estimation indicative basée sur une formule statistique. La mesure exacte de la masse grasse nécessite des outils médicaux (DEXA, impédancemétrie). Consultez un professionnel de santé.",
  },
  {
    slug: "calcul-calories",
    sources: [
      { name: "Formule Mifflin-St Jeor (1990)", url: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
      { name: "Ameli.fr", url: "https://www.ameli.fr/assure/sante/themes/alimentation-adulte" },
    ],
    baremes: ["Métabolisme de base (Mifflin-St Jeor)", "Coefficients d'activité physique (NAP)"],
    lastUpdated: "2025-06-01",
    disclaimer: "Estimation indicative. Les besoins caloriques réels varient selon de nombreux facteurs individuels. Consultez un diététicien pour un suivi personnalisé.",
  },
  {
    slug: "calcul-date-accouchement",
    sources: [
      { name: "Ameli.fr", url: "https://www.ameli.fr/assure/sante/themes/grossesse" },
      { name: "HAS", url: "https://www.has-sante.fr" },
    ],
    baremes: ["Règle de Naegele : DDR + 280 jours (40 semaines d'aménorrhée)"],
    lastUpdated: "2025-06-01",
    disclaimer: "Estimation indicative. La date réelle d'accouchement peut varier de plusieurs semaines. Suivez les consultations prénatales avec votre médecin ou sage-femme.",
  },
  {
    slug: "calcul-ovulation",
    sources: [
      { name: "Ameli.fr", url: "https://www.ameli.fr/assure/sante/themes/contraception/cycle-menstruel" },
    ],
    baremes: ["Ovulation estimée : durée du cycle − 14 jours", "Fenêtre de fertilité : J-5 à J+1 autour de l'ovulation"],
    lastUpdated: "2025-06-01",
    disclaimer: "Estimation indicative basée sur un cycle régulier. Ne constitue pas une méthode de contraception fiable. Consultez un professionnel de santé.",
  },

  // --- Quotidien ---
  {
    slug: "calcul-pourcentage",
    sources: [],
    baremes: ["Opérations mathématiques standard"],
    lastUpdated: "2025-06-01",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "conversion-unites",
    sources: [
      { name: "Bureau international des poids et mesures", url: "https://www.bipm.org/fr/" },
    ],
    baremes: ["Système international d'unités (SI)"],
    lastUpdated: "2025-06-01",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "calcul-age",
    sources: [],
    baremes: ["Calcul calendaire standard"],
    lastUpdated: "2025-06-01",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "calcul-duree-entre-dates",
    sources: [],
    baremes: ["Calcul calendaire standard", "Jours ouvrés (lundi-vendredi)"],
    lastUpdated: "2025-06-01",
    disclaimer: defaultDisclaimer,
  },

  // --- Auto & Transport ---
  {
    slug: "calcul-consommation-essence",
    sources: [],
    baremes: ["Consommation = (litres / distance) × 100"],
    lastUpdated: "2025-06-01",
    disclaimer: defaultDisclaimer,
  },
  {
    slug: "cout-km-voiture",
    sources: [
      { name: "Automobile Club Association", url: "https://www.automobile-club.org/budget-de-l-automobiliste" },
    ],
    baremes: ["Coûts moyens : carburant, assurance, entretien, décote, contrôle technique"],
    lastUpdated: "2026-01-10",
    disclaimer: "Estimation indicative basée sur des coûts moyens. Le coût réel dépend de votre véhicule, de votre utilisation et de votre région.",
  },
];

export function getToolSources(slug: string): ToolSource | undefined {
  return toolSources.find((s) => s.slug === slug);
}
