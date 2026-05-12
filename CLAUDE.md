# BonCalcul.fr — Instructions pour Claude

## Stack technique
- **Framework** : Next.js 16 (App Router), TypeScript strict, React 19
- **Styling** : Tailwind CSS 4 (PostCSS), pas de CSS modules
- **Hébergement** : Vercel — PAS d'auto-deploy, toujours `npx vercel --prod` manuellement
- **Repo local** : `/Users/arnaudvalere/Documents/Projects/boncalcul`
- **Analytics** : Google Analytics (G-1SRYNGFWJE), lazyOnload
- **Monétisation** : Ezoic Incubator (en attente approbation) + AdSense en attente

## Monétisation — état au 12 mai 2026

### Ezoic Incubator
- Candidature déposée, review "In Progress" (1-2 semaines)
- Scripts intégrés dans `layout.tsx` : GateKeeper privacy + sa.min.js + ezoicanalytics
- `EzoicPageView.tsx` : rechargement annonces sur navigation SPA
- `next.config.ts` : redirect `/ads.txt` → `srv.adstxtmanager.com/EZOIC_PUBLISHER_ID/boncalcul.fr`
  → **remplacer EZOIC_PUBLISHER_ID** par le vrai ID une fois approuvé

### Placements Ezoic (à créer dans le dashboard une fois approuvé)
- slot `home-after-hero` → ID 101
- slot `home-after-tools` → ID 102
- slot `home-after-faq` → ID 103
- slot `hub-after-hero` → ID 104
- slot `hub-bottom` → ID 105
- slot `tool-after-result` → ID 106
- slot `tool-after-faq` → ID 107
- slot `tool-bottom` → ID 108

### AdSense
- Publisher ID : ca-pub-3309542681536044
- Script dans `<head>` de layout.tsx
- Refusé (contenu insuffisant) — à repostuler dans 6-8 semaines

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Ezoic scripts + AdSense + GA + Header/Footer
│   ├── page.tsx            # Homepage
│   ├── blog/               # 45 articles (listing + pages individuelles)
│   └── outils/             # 36 calculateurs
│
├── components/
│   ├── EzoicPageView.tsx   # showAds() sur chaque navigation
│   └── SiloHub.tsx         # Composant réutilisable hubs catégories
│
├── data/
│   ├── articles.ts         # 45 articles — ajouter ici pour tout nouvel article
│   ├── outils.ts           # 36 outils
│   └── silos.ts            # 5 silos SEO
│
└── lib/
    └── adsense.tsx         # AdBanner → Ezoic placeholders (mapping slot → ID numérique)
```

## Conventions

### Nouvel outil
1. `data/outils.ts` + `data/sources.ts` + `data/silos.ts`
2. `outils/[slug]/Component.tsx` (use client) + `page.tsx` (server)
3. Structure page.tsx : metadata → JsonLd → hero → composant → AdBanner(tool-after-result) → FAQ → AdBanner(tool-after-faq) → SEO → AdBanner(tool-bottom)

### Nouvel article blog
1. `data/articles.ts` (slug, title, description, datePublished, dateModified, readTime, tags)
2. `blog/[slug]/page.tsx` : 700-900 mots, tableaux, CTAs vers outils
3. Sitemap et listing se mettent à jour automatiquement

## Déploiement
```bash
npm run build        # toujours vérifier 0 erreur avant push
git add . && git commit -m "feat: ..."
git push origin main
npx vercel --prod    # depuis /Users/arnaudvalere/Documents/Projects/boncalcul
```

## Interdits
- `next/dynamic` avec `ssr: false` dans les Server Components
- Hardcoder les articles dans le sitemap (toujours passer par articles.ts)
- Pousser sans builder
