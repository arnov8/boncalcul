# BonCalcul.fr

**BonCalcul.fr** est un site web de calculateurs et simulateurs gratuits destiné au grand public français. Il regroupe plus de 30 outils couvrant la finance, l'immobilier, l'emploi, la santé et la vie quotidienne — sans inscription, sans collecte de données personnelles, avec des résultats instantanés calculés directement dans le navigateur.

URL de production : [https://www.boncalcul.fr](https://www.boncalcul.fr)

---

## Description

BonCalcul.fr s'adresse à toute personne ayant besoin d'effectuer des calculs courants :

- Simuler un prêt immobilier ou calculer sa capacité d'emprunt
- Convertir un salaire brut en net (et inversement)
- Estimer les frais de notaire pour un achat immobilier
- Calculer sa TVA, son IMC, ses indemnités de licenciement, etc.

Le site intègre également un **blog** avec des articles informatifs et des **infographies** exportables pour chaque outil.

---

## Stack technique

| Technologie | Usage |
|---|---|
| **Next.js 16** (App Router) | Framework React fullstack, SSR/SSG |
| **React 19** | Interface utilisateur |
| **TypeScript 6** | Typage statique |
| **Tailwind CSS v4** | Styles utilitaires |
| **@tabler/icons-react** | Icônes |
| **Google AdSense** | Monétisation par publicité |
| **Google Analytics (GA4)** | Mesure d'audience |
| **Vercel** | Déploiement et hébergement |

---

## Structure du projet

```
boncalcul/
├── src/
│   ├── app/
│   │   ├── page.tsx                           # Page d'accueil (grille de tous les outils)
│   │   ├── layout.tsx                         # Layout global (Header, Footer, SEO, GA4)
│   │   ├── sitemap.ts                         # Sitemap dynamique
│   │   ├── robots.ts
│   │   ├── outils/                            # Tous les outils de calcul (~36 pages)
│   │   │   ├── simulateur-pret-immobilier/
│   │   │   ├── calcul-salaire-brut-net/
│   │   │   ├── calcul-frais-de-notaire/
│   │   │   ├── calcul-tva/
│   │   │   ├── calcul-imc/
│   │   │   ├── simulateur-impot-revenu/
│   │   │   ├── simulateur-chomage-are/
│   │   │   ├── calcul-indemnites-licenciement/
│   │   │   ├── calcul-rentabilite-locative/
│   │   │   ├── simulateur-ptz-2026/
│   │   │   └── ... (et +25 autres)
│   │   ├── blog/                              # Articles de blog (SEO)
│   │   ├── fiscalite/ emploi/
│   │   │   immobilier/ sante/                 # Hubs de catégorie SEO
│   │   ├── a-propos/ confidentialite/
│   │   │   mentions-legales/                  # Pages institutionnelles
│   │   └── api/og/route.tsx                   # Génération image OG dynamique
│   ├── components/
│   │   ├── Header.tsx / Footer.tsx
│   │   ├── OutilCard.tsx                      # Carte d'outil (grille d'accueil)
│   │   ├── ExportPDF.tsx                      # Export PDF des résultats
│   │   ├── ShareResult.tsx                    # Partage des résultats
│   │   ├── Infographic.tsx
│   │   ├── SiloHub.tsx                        # Hub de catégorie SEO
│   │   ├── SourcesBadge.tsx
│   │   └── infographics/                      # Infographies spécifiques par outil (30+)
│   ├── data/
│   │   ├── outils.ts                          # Métadonnées de tous les outils
│   │   ├── articles.ts                        # Métadonnées du blog
│   │   └── silos.ts                           # Structure des silos SEO
│   └── lib/
│       ├── seo-boncalcul.ts                   # Helpers SEO (métadonnées, JSON-LD)
│       ├── adsense.tsx                         # Composant bannière AdSense
│       └── calculateurs-server.ts             # Fonctions de calcul côté serveur
├── articles-stock/                            # Articles Markdown en stock
├── next.config.ts
└── tsconfig.json
```

---

## Installation

### Prérequis

- Node.js >= 18

### Étapes

```bash
git clone https://github.com/arnov8/boncalcul.git
cd boncalcul
npm install
npm run dev
# Accessible sur http://localhost:3000
```

```bash
npm run build   # Build de production
npm run start   # Démarrer le serveur de production
npm run lint    # Vérifier la qualité du code
```

---

## Fonctionnalités clés

- **30+ calculateurs gratuits** : Finance, Immobilier, Emploi, Santé, Vie quotidienne, Auto & Transport.
- **Calculs 100% côté navigateur** : aucune donnée personnelle envoyée ou stockée.
- **Routes dynamiques** pour pré-remplissage via URL (prêt immobilier, salaire, frais de notaire, TVA).
- **Infographies exportables** : chaque outil génère une infographie visuelle des résultats.
- **Export PDF** et **partage des résultats** depuis chaque outil.
- **Blog SEO** avec articles informatifs régulièrement mis à jour.
- **Hubs de catégorie** pour le maillage interne SEO.
- **Données structurées JSON-LD** (FAQ, WebSite, BreadcrumbList).
- **Monétisation** : Google AdSense intégré.

---

## Déploiement

```bash
npx vercel --prod
```

Aucune variable d'environnement côté serveur n'est requise — tous les calculs s'effectuent dans le navigateur.
