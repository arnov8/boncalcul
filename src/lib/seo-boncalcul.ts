// Dimension definitions for BonCalcul programmatic SEO

export const TVA_MONTANTS = [
  100, 200, 500, 1000, 1500, 2000, 3000, 5000,
  10000, 15000, 20000, 50000, 100000,
];

export const TVA_TAUX: { taux: number; slug: string; label: string }[] = [
  { taux: 20, slug: 'taux-20', label: '20 %' },
  { taux: 10, slug: 'taux-10', label: '10 %' },
  { taux: 5.5, slug: 'taux-5-5', label: '5,5 %' },
  { taux: 2.1, slug: 'taux-2-1', label: '2,1 %' },
];

export const TVA_USAGE: Record<number, { nom: string; description: string }> = {
  20: {
    nom: 'Taux normal',
    description:
      "S'applique par défaut à la majorité des biens et services : électronique, habillement, prestations de services courantes, automobile, alcool.",
  },
  10: {
    nom: 'Taux intermédiaire',
    description:
      'Concerne la restauration et vente à consommer sur place, les transports de voyageurs, les travaux de rénovation dans les logements de plus de 2 ans, et certains produits agricoles non transformés.',
  },
  5.5: {
    nom: 'Taux réduit',
    description:
      "S'applique aux produits alimentaires, aux abonnements gaz et électricité, aux livres, aux équipements pour personnes handicapées, et aux travaux d'amélioration énergétique du logement.",
  },
  2.1: {
    nom: 'Taux particulier',
    description:
      'Réservé aux médicaments remboursables par la Sécurité sociale et à la presse. C\'est le taux de TVA le plus bas en France.',
  },
};

export function parseTVAParams(params: string): { montant: number; taux: number } | null {
  // Format: "{montant}-euros-taux-{slug}" e.g. "1000-euros-taux-20" or "1000-euros-taux-5-5"
  const tauxEntry = TVA_TAUX.find((t) => params.endsWith(`-${t.slug}`));
  if (!tauxEntry) return null;
  const prefix = params.slice(0, -(tauxEntry.slug.length + 1)); // remove "-taux-XX"
  const montantStr = prefix.replace(/-euros$/, '');
  const montant = parseInt(montantStr, 10);
  if (isNaN(montant) || !TVA_MONTANTS.includes(montant)) return null;
  return { montant, taux: tauxEntry.taux };
}

export function buildTVASlug(montant: number, taux: number): string {
  const entry = TVA_TAUX.find((t) => t.taux === taux);
  if (!entry) return '';
  return `${montant}-euros-${entry.slug}`;
}

// ─── Salaire ──────────────────────────────────────────────────────────────────
export const SALAIRE_MONTANTS = [
  1400, 1600, 1800, 2000, 2200, 2500, 3000, 3500,
  4000, 4500, 5000, 6000, 8000,
];

export const SALAIRE_STATUTS: { statut: 'non-cadre' | 'cadre'; slug: string; label: string; charges: number }[] = [
  { statut: 'non-cadre', slug: 'non-cadre', label: 'non-cadre', charges: 0.22 },
  { statut: 'cadre', slug: 'cadre', label: 'cadre', charges: 0.25 },
];

export function parseSalaireParams(params: string): { montant: number; statut: 'non-cadre' | 'cadre' } | null {
  // Format: "{montant}-euros-brut" or "{montant}-euros-brut-cadre"
  const isCadre = params.endsWith('-cadre');
  const base = isCadre ? params.slice(0, -'-cadre'.length) : params;
  const montantStr = base.replace(/-euros-brut$/, '');
  const montant = parseInt(montantStr, 10);
  if (isNaN(montant) || !SALAIRE_MONTANTS.includes(montant)) return null;
  return { montant, statut: isCadre ? 'cadre' : 'non-cadre' };
}

export function buildSalaireSlug(montant: number, statut: 'non-cadre' | 'cadre'): string {
  return statut === 'cadre' ? `${montant}-euros-brut-cadre` : `${montant}-euros-brut`;
}

// ─── Prêt immobilier ──────────────────────────────────────────────────────────
export const PRET_MONTANTS = [50000, 80000, 100000, 150000, 200000, 250000, 300000, 400000, 500000];
export const PRET_DUREES = [10, 15, 20, 25, 30];
export const PRET_TAUX_DEFAULT = 3.5;
export const PRET_TAUX_COMPARAISON = [3, 3.5, 4, 4.5];

export const SMIC_BRUT_MENSUEL = 1801.84; // 11,88 €/h x 151,67h (2026)

export function parsePretParams(params: string): { montant: number; duree: number } | null {
  // Format: "{montant}-euros-{duree}-ans"
  const match = params.match(/^(\d+)-euros-(\d+)-ans$/);
  if (!match) return null;
  const montant = parseInt(match[1], 10);
  const duree = parseInt(match[2], 10);
  if (!PRET_MONTANTS.includes(montant) || !PRET_DUREES.includes(duree)) return null;
  return { montant, duree };
}

export function buildPretSlug(montant: number, duree: number): string {
  return `${montant}-euros-${duree}-ans`;
}

// ─── Frais de notaire ─────────────────────────────────────────────────────────
export const NOTAIRE_MONTANTS = [
  50000, 80000, 100000, 150000, 200000,
  250000, 300000, 400000, 500000, 600000, 800000,
];

export const NOTAIRE_TYPES: { type: 'ancien' | 'neuf'; slug: string; label: string }[] = [
  { type: 'ancien', slug: 'ancien', label: 'ancien' },
  { type: 'neuf', slug: 'neuf', label: 'neuf' },
];

export function parseNotaireParams(params: string): { montant: number; type: 'ancien' | 'neuf' } | null {
  // Format: "{montant}-euros" (ancien default) or "{montant}-euros-neuf"
  const isNeuf = params.endsWith('-euros-neuf');
  const montantStr = isNeuf
    ? params.slice(0, -'-euros-neuf'.length)
    : params.replace(/-euros$/, '');
  const montant = parseInt(montantStr, 10);
  if (isNaN(montant) || !NOTAIRE_MONTANTS.includes(montant)) return null;
  return { montant, type: isNeuf ? 'neuf' : 'ancien' };
}

export function buildNotaireSlug(montant: number, type: 'ancien' | 'neuf'): string {
  return type === 'neuf' ? `${montant}-euros-neuf` : `${montant}-euros`;
}

// ─── Schema.org helpers ───────────────────────────────────────────────────────
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
