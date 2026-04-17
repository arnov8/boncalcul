// Server-side calculation functions (pure, no React state)

export function fmtEur(n: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function fmtEurDec(n: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export function fmtNum(n: number): string {
  return new Intl.NumberFormat('fr-FR').format(n);
}

// ─── TVA ──────────────────────────────────────────────────────────────────────
export function calculerTVA(ht: number, taux: number) {
  const tva = ht * (taux / 100);
  const ttc = ht + tva;
  return { ht, tva, ttc, taux };
}

// ─── Salaire brut/net ─────────────────────────────────────────────────────────
export function calculerSalaire(brutMensuel: number, statut: 'non-cadre' | 'cadre') {
  const charges = statut === 'cadre' ? 0.25 : 0.22;
  const netMensuel = brutMensuel * (1 - charges);
  return {
    brutMensuel,
    netMensuel,
    brutAnnuel: brutMensuel * 12,
    netAnnuel: netMensuel * 12,
    charges,
    totalChargesMensuel: brutMensuel - netMensuel,
  };
}

// ─── Simulateur prêt immobilier ───────────────────────────────────────────────
export function calculerPret(
  montant: number,
  dureeAns: number,
  tauxPct: number = 3.5,
  tauxAssurancePct: number = 0.34,
) {
  const t = tauxPct / 100;
  const ta = tauxAssurancePct / 100;
  const nbMois = dureeAns * 12;
  const mensuel = t / 12;
  // M = C * (t/12) / (1 - (1 + t/12)^(-n*12))
  const mensualite = (montant * mensuel) / (1 - Math.pow(1 + mensuel, -nbMois));
  const mensualiteAssurance = (montant * ta) / 12;
  const mensualiteTotale = mensualite + mensualiteAssurance;
  const coutTotalCredit = mensualite * nbMois - montant;
  const coutTotalAssurance = mensualiteAssurance * nbMois;
  return {
    montant,
    dureeAns,
    tauxPct,
    nbMois,
    mensualite,
    mensualiteAssurance,
    mensualiteTotale,
    coutTotalCredit,
    coutTotalAssurance,
    montantTotalRembourse: mensualiteTotale * nbMois,
  };
}

// ─── Frais de notaire ─────────────────────────────────────────────────────────
function calculerEmoluments(prix: number): number {
  if (prix <= 6500) return prix * 0.0387;
  if (prix <= 17000) return 6500 * 0.0387 + (prix - 6500) * 0.01596;
  if (prix <= 60000)
    return (
      6500 * 0.0387 + (17000 - 6500) * 0.01596 + (prix - 17000) * 0.01064
    );
  return (
    6500 * 0.0387 +
    (17000 - 6500) * 0.01596 +
    (60000 - 17000) * 0.01064 +
    (prix - 60000) * 0.00799
  );
}

export function calculerNotaire(
  prix: number,
  type: 'ancien' | 'neuf',
  tauxDept: number = 4.5,
) {
  const emoluments = calculerEmoluments(prix);
  const droits =
    type === 'neuf'
      ? prix * 0.00715
      : prix * (tauxDept / 100 + 0.012 + 0.001);
  const fraisDivers = type === 'ancien' ? 1200 : 1000;
  const totalFrais = droits + emoluments + fraisDivers;
  return {
    prix,
    type,
    droits,
    emoluments,
    fraisDivers,
    totalFrais,
    prixTotal: prix + totalFrais,
    pourcentage: (totalFrais / prix) * 100,
  };
}
