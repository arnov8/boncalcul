# BonCalcul.fr — Instructions pour Claude

## Stack technique
- **Framework** : Next.js 16 (App Router), TypeScript strict, React 19
- **Styling** : Tailwind CSS 4 (PostCSS), pas de CSS modules
- **Icons** : @tabler/icons-react
- **Hébergement** : Vercel (deploy auto sur push main)
- **Analytics** : Google Analytics (G-1SRYNGFWJE), chargé en `lazyOnload`
- **Monétisation** : Google AdSense via `src/lib/adsense.tsx`

## Architecture du projet

```
src/
├── app/
│   ├── layout.tsx              # Root layout (metadata globale, GA, Header/Footer, JSON-LD WebSite)
│   ├── page.tsx                # Homepage (hero + grille outils + FAQ + SEO content)
│   ├── sitemap.ts              # Sitemap dynamique (outils, silos, articles, pages)
│   ├── robots.ts               # Robots.txt
│   │
│   ├── outils/                 # 36 calculateurs — chacun dans son dossier
│   │   └── [slug]/
│   │       ├── page.tsx        # Page serveur (metadata, JSON-LD, FAQ, SEO content, AdBanner)
│   │       └── Component.tsx   # Composant client ("use client") avec le formulaire et calculs
│   │
│   ├── blog/                   # Articles SEO
│   │   ├── page.tsx            # Listing dynamique depuis articles.ts
│   │   └── [slug]/page.tsx     # Page article
│   │
│   ├── immobilier/             # Hubs catégories (silos SEO)
│   ├── emploi/
│   ├── fiscalite/
│   ├── sante/
│   ├── auto-transport/
│   │
│   ├── methodologie/           # Page méthodologie E-E-A-T
│   ├── a-propos/               # Page à propos (crédibilité E-E-A-T)
│   ├── mentions-legales/
│   └── confidentialite/
│
├── components/
│   ├── Header.tsx              # Navigation avec liens silos
│   ├── Footer.tsx              # Footer 5 colonnes (catégories, outils, ressources, légal)
│   ├── OutilCard.tsx           # Card outil pour les grilles
│   ├── SiloHub.tsx             # Composant réutilisable pour les pages hub catégories
│   ├── SourcesBadge.tsx        # Bloc E-E-A-T (sources, barèmes, date MAJ, disclaimer)
│   ├── ToolSourcesBadge.tsx    # Wrapper SourcesBadge + liens catégories parentes
│   ├── ShareResult.tsx         # Partage résultat (copier, embed, PDF)
│   ├── ExportPDF.tsx           # Export PDF via window.print()
│   ├── TablerIcon.tsx          # Wrapper icônes Tabler
│   ├── Infographic.tsx         # Container infographie embedable
│   └── infographics/           # 30+ composants infographie
│
├── data/
│   ├── outils.ts               # Metadata des 36 outils (slug, title, categorie, icon, keywords)
│   ├── outils-images.ts        # Images pour sitemap
│   ├── articles.ts             # Metadata des articles blog
│   ├── silos.ts                # Définition des 5 silos (slugs outils, intro, meta)
│   └── sources.ts              # Sources E-E-A-T par outil (sources officielles, barèmes, date MAJ)
│
└── lib/
    ├── jsonld.tsx              # Helpers JSON-LD (WebApplication, FAQPage, Article)
    └── adsense.tsx             # Composant AdBanner
```

## Conventions de création

### Nouvel outil (`/outils/[slug]`)

1. **Ajouter dans `data/outils.ts`** : slug, title, shortTitle, description, categorie, icon, keywords
2. **Créer `src/app/outils/[slug]/`** avec :
   - `Component.tsx` : composant `"use client"` avec formulaire, calculs, résultats, `ShareResult`
   - `page.tsx` : page serveur avec :
     - `export const metadata` (title, description, keywords, canonical, openGraph)
     - `JsonLd` : `webApplicationJsonLd` + `faqJsonLd`
     - Hero section avec h1 + description
     - Le composant calculateur
     - `AdBanner slot="tool-after-result"`
     - `ToolSourcesBadge slug="..."` (sources E-E-A-T)
     - Section FAQ avec `<details>` accordéons
     - `AdBanner slot="tool-after-faq"`
     - Lien vers article associé (si existant)
     - Section contenu SEO (grille de cards explicatives)
     - `AdBanner slot="tool-bottom"`
3. **Ajouter dans `data/sources.ts`** : sources officielles, barèmes, date MAJ, disclaimer
4. **Ajouter dans les silos** (`data/silos.ts`) : ajouter le slug dans le(s) silo(s) pertinent(s)
5. **Optionnel** : créer une infographie dans `components/infographics/`

### Nouvel article blog (`/blog/[slug]`)

1. **Ajouter dans `data/articles.ts`** : slug, title, description, datePublished, dateModified, readTime, tags
2. **Créer `src/app/blog/[slug]/page.tsx`** avec :
   - `export const metadata` (title, description, keywords, canonical, openGraph type article)
   - `JsonLd` : `articleJsonLd`
   - Breadcrumb (Blog / Catégorie)
   - Contenu éditorial (h2, exemples chiffrés, tableaux, erreurs fréquentes)
   - CTA vers l'outil associé (Link bleu gradient)
   - Liens vers articles liés
3. Le sitemap et la page listing blog se mettent à jour automatiquement

### Nouveau silo / hub catégorie

1. **Ajouter dans `data/silos.ts`** : slug, title, shortTitle, description, metaDescription, icon, color, intro, toolSlugs
2. **Créer `src/app/[slug]/page.tsx`** utilisant le composant `SiloHub`
3. **Mettre à jour** : Header.tsx, Footer.tsx (liens navigation)
4. Les couleurs disponibles : blue, emerald, amber, rose, violet

## SEO et E-E-A-T

- **Chaque outil** doit avoir : sources officielles citées, barèmes/formules listés, date de dernière MAJ, disclaimer adapté au domaine
- **JSON-LD obligatoire** : `WebApplication` + `FAQPage` sur chaque outil, `Article` sur chaque article blog
- **Maillage interne** : les outils lient vers leur(s) silo(s) parent(s) via ToolSourcesBadge, les silos lient vers tous leurs outils, les articles lient vers les outils avec des CTA
- **Canonical URL** : toujours `https://www.boncalcul.fr/...`
- **Sources dans `data/sources.ts`** : impots.gouv.fr, URSSAF, Service-public.fr, OMS, Ameli, Legifrance, etc.

## Performance

- **Scripts tiers** : GA en `lazyOnload`, preconnect vers googletagmanager et googlesyndication
- **Calculs côté client** : tous les calculs dans le navigateur, aucune API, pas de données envoyées
- **Static generation** : toutes les pages sont pré-rendues (○ Static dans le build)
- **Pas de `ssr: false`** dans les dynamic imports : les composants `"use client"` sont déjà code-split par l'App Router

## Commits

- Format : `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Courts et descriptifs
- Push direct sur `main` (pas de PR)
- Toujours builder (`next build`) avant de push pour vérifier 0 erreur

## À ne pas faire

- Ne pas utiliser `next/dynamic` avec `ssr: false` dans les Server Components (erreur Next.js 16)
- Ne pas hardcoder les articles dans le sitemap (utiliser `articles.ts`)
- Ne pas ajouter de dépendances lourdes pour l'export PDF (window.print suffit)
- Ne pas oublier le ToolSourcesBadge sur les nouvelles pages outils
