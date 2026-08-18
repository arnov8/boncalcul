# BonCalcul.fr — Instructions pour Claude

## Stack technique
- **Framework** : Next.js 16 (App Router), TypeScript strict, React 19
- **Styling** : Tailwind CSS 4 (PostCSS), pas de CSS modules
- **Hébergement** : Vercel — PAS d'auto-deploy, toujours `npx vercel --prod` manuellement
- **Repo local** : `/Users/arnaudvalere/Documents/Projects/boncalcul`
- **Analytics** : Google Analytics (G-1SRYNGFWJE), lazyOnload. Accès API via compte de service GA4 (`ga4-reader@boncalculbonnedemarche.iam.gserviceaccount.com`, Lecteur sur `properties/530185792`) — clé JSON hors repo, dans le scratchpad de session Claude.
- **Monétisation** : Ezoic refusé (Incubator), AdSense en cours de re-demande — voir détail ci-dessous

## Monétisation — état au 19/08/2026

### Trafic réel (GA4, 28 derniers jours au 18/08)
~900 sessions/mois, ~920 pages vues/mois. Top pages : simulateur SMIC, heures sup, calcul poids idéal. Aucune des 145 pages `[params]` (TVA/salaire/prêt/notaire) n'apparaît dans le top trafic — trop faible pour Mediavine (50k sessions/mois) ou Raptive (100k pages vues/mois) ; seul Ezoic n'a pas de seuil, mais refusé quand même.

### Ezoic Incubator
- **Refusé** ("Not Approved", raison non détaillée par Ezoic). Ne pas retenter tant que le trafic n'a pas significativement augmenté.
- Scripts encore intégrés dans `layout.tsx` (GateKeeper privacy + sa.min.js + ezoicanalytics) — inertes tant que non approuvé, à retirer si on abandonne définitivement la piste.
- ⚠️ Le redirect `/ads.txt` vers Ezoic dans `next.config.ts` a été **supprimé** le 18/08 (pointait vers un `EZOIC_PUBLISHER_ID` placeholder jamais rempli → 404 en prod, cassait le vrai ads.txt AdSense depuis mai).
- Placements prévus si approbation future : home-after-hero(101), home-after-tools(102), home-after-faq(103), hub-after-hero(104), hub-bottom(105), tool-after-result(106), tool-after-faq(107), tool-bottom(108) — mapping dans `lib/adsense.tsx`.

### AdSense
- Publisher ID : ca-pub-3309542681536044 (compte partagé avec BonneDemarche — un seul compte AdSense par personne, recommandé par Google)
- 1er refus 12/05 : "contenu insuffisant"
- 2e refus (constaté 18/08) : **"Contenu à faible valeur informative"** — cause identifiée : 145 pages générées par combinaison de paramètres (TVA 52, salaire 26, prêt 45, notaire 22) contre 81 pages rédigées à la main (36 outils + 45 articles), donc majorité du site en gabarits quasi-dupliqués.
- **Fix appliqué et déployé le 18/08** (commit `a5ead36`) : ajout d'un bloc de contenu réel et différenciant par gabarit — PAS de noindex/masquage (décision explicite : pas de manip qui se ferait démasquer par un re-contrôle AdSense après approbation) :
  - Prêt immobilier → tableau mensualité selon 4 taux (3%/3,5%/4%/4,5%)
  - TVA → encadré "à quoi s'applique ce taux" (usage réel par taux en France)
  - Frais de notaire → note sur la variation départementale du taux (biens anciens)
  - Salaire brut/net → comparaison en % du SMIC
- **Prochaine étape** : attendre le recrawl Google (3-5 jours après déploiement, donc ~22-23/08) avant de recocher "Je confirme que j'ai corrigé les problèmes" + "Demander un examen" dans le dashboard AdSense. Ne PAS redemander l'examen avant ce délai.

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
