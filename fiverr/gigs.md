# Fiverr — gigs (duplication depuis ComeUp)

> Adaptation des 6 services [ComeUp](../comeup/current-service.md) au format Fiverr : 3 paliers
> fixes (Basic/Standard/Premium) au lieu d'un prix de base + options à la carte, description et
> échanges en **anglais** (marché Fiverr très majoritairement anglophone), prix en **$**.
> Prix proposés ci-dessous — **à valider par toi**, même logique que la grille TJM (`F2`) : je
> pars de tes prix ComeUp validés, majorés pour la commission Fiverr (**20 %**, contre les frais
> ComeUp) et le marché plus concurrentiel sur le prix. Une fois validés, ils deviennent la
> référence unique pour créer les gigs sur fiverr.com.

## Différences avec ComeUp — à savoir avant de publier

- **Format des paliers** : Fiverr impose 3 paquets fixes (Basic/Standard/Premium), pas d'options
  à la carte illimitées comme sur ComeUp. J'ai regroupé les options ComeUp les plus demandées dans
  Standard et Premium plutôt que de toutes les lister.
- **Devise** : $ (Fiverr facture en dollars). Les montants ci-dessous sont arrondis, pas une
  conversion € → $ au taux du jour — ce sont des prix de marché Fiverr, pas une simple conversion.
- **Commission** : Fiverr prélève **20 %** sur chaque vente (contre les frais ComeUp) — c'est
  intégré dans les prix proposés, pas à soustraire en plus.
- **Vidéo de gig** : Fiverr favorise fortement les gigs avec une vidéo de présentation (30-60 s)
  dans son algorithme de recommandation — plus important que sur ComeUp. La vidéo Mobembo déjà
  tournée (`comeup/captures/final/mobile-mobembo-demo-2min.mp4`) peut servir pour le gig mobile
  (service 6) ; à tourner : une vidéo générique de présentation (visage + voix) pour les 5 autres.
- **Visuels réutilisables** : mêmes couvertures et captures que ComeUp
  (voir [comeup/README.md](../comeup/README.md)) — pas besoin de tout refaire, juste les
  redimensionner au format Fiverr (1280×769 px pour la couverture).
- **Tags/SEO** : Fiverr classe sur des mots-clés de recherche précis. Tags suggérés indiqués par
  gig ci-dessous (5 max par gig, c'est la limite Fiverr).
- **0 avis** : même mur qu'au lancement ComeUp, mais la concurrence prix est plus rude sur Fiverr
  (marché mondial, y compris vendeurs à bas coût). Le gig **Débogage** reste la meilleure porte
  d'entrée : périmètre net, risque faible pour l'acheteur, comme sur ComeUp.
- **Buyer requirements** : sur Fiverr, ce sont des questions posées automatiquement à la commande
  (pas un texte libre comme les "consignes" ComeUp) — reformulées en questions ci-dessous.

---

# Gig 1 — Automatisation IA & workflows n8n

**Titre (≤ 80 car.) :** I will build your n8n automation workflow or AI agent

**Tags :** n8n, automation, ai agent, workflow, chatgpt

| Palier | Prix | Délai | Révisions | Contenu |
|---|---|---|---|---|
| **Basic** | **70 $** | 2 jours | 2 | 1 workflow n8n opérationnel, jusqu'à 5 étapes/nœuds, export JSON + guide d'installation |
| **Standard** | **140 $** | 3 jours | 2 | + prompts système avancés (OpenAI/Claude, format strict) + vidéo Loom de 5 min expliquant le fonctionnement |
| **Premium** | **220 $** | 5 jours | 3 | Agent IA autonome complet (jusqu'à 10 étapes) capable d'analyser des documents, classer des e-mails ou générer du contenu |

**Description (à coller dans le champ Fiverr) :**
```
Losing hours every week copying data between your tools? Want AI (ChatGPT, Claude) at the core
of your business, handling leads, emails or documents automatically?

I'm a fullstack engineer specialized in n8n. I design automations that remove repetitive tasks
and make your processes reliable — every workflow is tested before delivery, no fragile setup
that breaks on the first edge case.

What you get with Basic:
A working n8n workflow with up to 5 steps/nodes (example: web form → validation/filter → save to
database → Slack notification → personalized email).
Included: process analysis and API check, error handling logic, a JSON export file ready to
import into your n8n instance, a short setup guide.

Standard adds advanced system prompts (OpenAI/Claude) in strict format to reduce AI errors and
hallucinations, plus a 5-minute Loom video walking through the workflow so you can edit it
yourself later.

Premium builds a full autonomous AI agent inside n8n — analyzing documents, classifying emails or
generating content across up to 10 steps.

You need an existing n8n instance (cloud or self-hosted). Don't have one yet? Check my VPS
deployment gig — I can set that up too. Third-party subscriptions and API keys (OpenAI etc.) stay
on your side. The workflow (JSON export) and prompts are 100% yours.

A short message before ordering helps me confirm scope — happy to answer questions first.
```

**Requirements (questions posées à la commande) :**
```
1. Describe the process you want automated, step by step.
2. Which apps/tools need to be connected? (e.g. Google Sheets, Slack, OpenAI, Shopify)
3. Do you have API keys or access to the services involved? If you already have n8n hosted,
   please share the URL and access.
4. Any example files (documents, JSON, sample emails) I should use for testing?
```

---

# Gig 2 — Débogage & correction express

**Titre (≤ 80 car.) :** I will fix a bug on your react, next.js, node.js or flutter app

**Tags :** bug fix, react, next.js, flutter, debugging

| Palier | Prix | Délai | Révisions | Contenu |
|---|---|---|---|---|
| **Basic** | **60 $** | 1 jour | 2 | Diagnostic + correction d'1 bug frontend ciblé (UI/style/composant), non-régression vérifiée |
| **Standard** | **115 $** | 2 jours | 2 | 1 bug backend/API (Node.js/NestJS, requête SQL/ORM, auth JWT) + correctif lié |
| **Premium** | **175 $** | 3 jours | 3 | Bug complexe (SSR/hydration, state global, erreur de build) + rapport de cause racine + PR propre |

**Description (à coller dans le champ Fiverr) :**
```
A blocking bug on your site or app? A blank page, a display glitch, or a form that fails and
frustrates your users?

I specialize in the JavaScript/TypeScript ecosystem (React, Next.js, Node.js) and Flutter for
mobile. I isolate the root cause and fix it cleanly and durably — without breaking anything else.

Basic covers diagnosis and correction of 1 targeted frontend bug (UI, styling or component —
React, Next.js, HTML/CSS, Tailwind, Flutter): root-cause identification, a clean-code fix,
regression check, delivered as corrected files or a Git pull request.

Standard covers a backend/API bug instead: a failing REST API (Node.js/NestJS), a broken SQL/ORM
query, or an authentication issue (JWT/cookies) — plus any directly related fix.

Premium takes on complex cases: build errors (Vercel/Docker), Next.js hydration issues, or global
state management problems — with a written root-cause report on top of the fix.

Scope is 1 targeted, reproducible bug. If the diagnosis reveals several distinct bugs, I'll send
a clear quote before going further. Not included: redesigns, new features, or broad technical
debt (available as a separate project). The fixed code is 100% yours.
```

**Requirements (questions posées à la commande) :**
```
1. What's the bug, and what should happen instead?
2. Exact steps to reproduce it.
3. Console logs / screenshots (browser dev tools, terminal, or server logs).
4. A link to your Git repository (GitHub, GitLab, Bitbucket) with temporary access, or a .zip of
   the project.
```

---

# Gig 3 — Déploiement VPS avec Docker & HTTPS

**Titre (≤ 80 car.) :** I will deploy your app on a vps with docker and https traefik

**Tags :** docker, vps deployment, devops, traefik, linux server

| Palier | Prix | Délai | Révisions | Contenu |
|---|---|---|---|---|
| **Basic** | **100 $** | 2 jours | 1 | 1 service conteneurisé et déployé, domaine + HTTPS (Traefik/Let's Encrypt), pare-feu de base |
| **Standard** | **190 $** | 3 jours | 2 | + base de données, variables d'environnement, procédure de redéploiement simplifiée |
| **Premium** | **290 $** | 5 jours | 2 | Architecture multi-services (front + API + BDD) + monitoring léger + sauvegardes automatiques quotidiennes |

**Description (à coller dans le champ Fiverr) :**
```
Want your web app or API live on your own VPS, without paying for costly cloud subscriptions?
Looking for an isolated, secure, easy-to-maintain setup?

I'm a fullstack/DevOps engineer. I containerize your project and configure your Linux server for
a clean, durable production setup. A backup is taken before any intervention on your server.

Basic delivers containerization and live deployment of 1 service on your Linux VPS: optimized
Dockerfile and docker-compose.yml (multi-stage build), basic server hardening (SSH, UFW
firewall), a reverse proxy (Traefik or Nginx) with automatic HTTPS (Let's Encrypt), a
pre-intervention backup and a startup check.

Standard adds a database and environment variables, plus a simplified redeploy process for
future updates.

Premium builds a full multi-container architecture (frontend + backend + PostgreSQL/MySQL +
Redis cache), lightweight monitoring with failure alerts (Slack/email), and automatic daily
database backups to external storage.

The VPS itself (OVH, Hetzner, Contabo…) is not included — I can advise on the right provider if
you're not sure. All Docker and configuration files are 100% yours.
```

**Requirements (questions posées à la commande) :**
```
1. Tech stack of the application (e.g. React, NestJS, PostgreSQL).
2. Domain or subdomain that should point to the app (e.g. app.yoursite.com).
3. VPS IP address and SSH access (root or sudo account).
4. Link to your Git repository, or a project archive with an .env.example file.
```

---

# Gig 4 — PrestaShop & intégrations e-commerce

**Titre (≤ 80 car.) :** I will install and configure your prestashop payment or tracking module

**Tags :** prestashop, ecommerce, payment integration, google tag manager, module

| Palier | Prix | Délai | Révisions | Contenu |
|---|---|---|---|---|
| **Basic** | **90 $** | 2 jours | 1 | Installation, paramétrage & recette complète d'1 module de paiement ou de tracking |
| **Standard** | **165 $** | 3 jours | 2 | + optimisation des performances (cache, nettoyage des tables de logs) |
| **Premium** | **300 $** | 6 jours | 2 | Module PrestaShop sur mesure développé selon votre besoin (hooks, override, controllers) |

**Description (à coller dans le champ Fiverr) :**
```
A broken payment module or inaccurate tracking means lost revenue. Want to add a payment method
or connect your PrestaShop store to third-party tools, without risking your sales?

I'm an experienced PrestaShop developer. I install, configure and build e-commerce modules for
you. A full backup of your store and database is taken before any intervention.

Basic covers full installation, configuration and testing of 1 payment module (Stripe, PayPal,
PayPlug) or 1 tracking module (Google Tag Manager, Meta Pixel): API keys and webhooks setup,
sandbox testing, test orders to validate the flow, final production validation with zero
downtime.

Standard adds performance optimization — cleaning log tables and tuning cache settings to speed
up your page loads.

Premium builds a custom PrestaShop module tailored to your specific business need (hooks,
overrides, controllers), delivered as an installable .zip archive.

Scope covers 1 payment or 1 tracking module. Third-party accounts (Stripe, PayPal, GTM…) need to
be created and provided by you. Not included: custom development beyond the module (Premium
covers this) or theme redesigns.
```

**Requirements (questions posées à la commande) :**
```
1. Your exact PrestaShop version (e.g. 1.7.8.x, 8.1.x).
2. Which module/API you need (Stripe, PayPal, GTM, etc.).
3. Temporary admin access to your PrestaShop back office.
4. FTP/SFTP access or hosting access (cPanel/Plesk), and sandbox/test API keys for the service.
```

---

# Gig 5 — Site web sur mesure Next.js

**Titre (≤ 80 car.) :** I will build your 5 page responsive next.js website

**Tags :** next.js, react, website development, landing page, web design

| Palier | Prix | Délai | Révisions | Contenu |
|---|---|---|---|---|
| **Basic** | **135 $** | 3 jours | 2 | Site vitrine responsive Next.js, 5 pages, formulaire de contact, SEO de base |
| **Standard** | **290 $** | 6 jours | 2 | + CMS headless (contenu éditable sans coder) + SEO avancé & balises réseaux sociaux |
| **Premium** | **480 $** | 10 jours | 2 | + backend/API NestJS sur mesure (petit MVP fullstack) |

**Description (à coller dans le champ Fiverr) :**
```
Looking for a fast, modern website optimized for Google, or a custom API that can handle real
load? Want clean, structured, easy-to-evolve code?

I'm a fullstack engineer building custom web apps with the modern Next.js, React and NestJS
stack. Code is documented, delivered, and fully yours.

Basic delivers a responsive Next.js website with up to 5 pages (e.g. Home, About, Services,
Portfolio, Contact): type-safe TypeScript architecture, responsive design (mobile/tablet/desktop),
a working contact form with validation, basic on-page SEO and metadata, and full source code.

Standard adds a headless CMS (Sanity/Strapi) so you can edit your own text, articles and images
without touching code, plus advanced SEO — sitemap.xml, robots.txt, and OpenGraph social sharing
cards.

Premium adds a custom NestJS backend/API — PostgreSQL/MySQL database (Prisma/Drizzle), JWT
authentication, and Swagger documentation — turning the site into a small fullstack MVP.

Content (text, images, logo) is provided by you. Domain and hosting purchase are not included
(deployment happens on your own hosting/domain). The source code is 100% yours.
```

**Requirements (questions posées à la commande) :**
```
1. Site content: text, logo, images, and the page structure you want.
2. Any mockups or reference sites whose style you like (Figma/Adobe XD if available).
3. Your domain/hosting credentials, if you want me to publish it directly.
```

---

# Gig 6 — Application mobile MVP Flutter

**Titre (≤ 80 car.) :** I will build your flutter mobile app mvp with 4 screens

**Tags :** flutter, mobile app development, ios app, android app, mvp

| Palier | Prix | Délai | Révisions | Contenu |
|---|---|---|---|---|
| **Basic** | **240 $** | 5 jours | 2 | App mobile MVP (iOS & Android), jusqu'à 4 écrans interactifs, données de démo |
| **Standard** | **580 $** | 12 jours | 2 | + connexion à une API REST (inscription, connexion, jetons JWT, synchronisation) |
| **Premium** | **890 $** | 20 jours | 2 | + notifications push, géolocalisation temps réel, mode hors-ligne, préparation des builds stores |

**Description (à coller dans le champ Fiverr) :**
```
Want to bring your idea to life as a real, smooth mobile app for iOS and Android, without
doubling your development costs?

I'm a mobile/fullstack engineer building cross-platform apps with Flutter. Clean, documented,
delivered code.

Basic delivers a mobile app MVP (iOS & Android) with up to 4 interactive screens and a polished
interface (e.g. Home, List, Detail view, Profile/Settings): Clean Architecture with professional
state management (Riverpod/BLoC), local data storage, smooth navigation matching iOS/Android
standards, tested on emulators, full documented source code.

Standard connects the app to your real REST API: sign-up, login, JWT tokens, and data
synchronization.

Premium adds push notifications, real-time geolocation, offline mode, and prepares publication
builds for the App Store and Google Play.

Scope is an MVP with up to 4 screens, using demo data unless the API package is added. App store
publication itself (Apple/Google developer accounts) is on your side; store screenshots are
available as an add-on. The source code is 100% yours.
```

**Requirements (questions posées à la commande) :**
```
1. Describe your app concept and the features expected on each screen.
2. Target platforms: iOS, Android, or both?
3. Any UI mockups (Figma, Adobe XD) or sketches?
4. If the app connects to an API, please share its documentation.
```

---

## Checklist de lancement (parallèle à celle de [ComeUp](../comeup/strategie-premieres-ventes.md))

- [ ] Prix des 6 gigs validés par toi (proposition ci-dessus, en $)
- [ ] Bio/description de profil Fiverr publiée (`cv/profil-freelance.md`, section "Fiverr / Freelancer")
- [ ] Couvertures des 6 gigs (réutiliser + redimensionner les visuels ComeUp, format 1280×769)
- [ ] Au moins 1 vidéo de gig tournée (Fiverr favorise fortement les gigs vidéo)
- [ ] Service d'entrée : débogage 60 $ / 1 jour (même logique que ComeUp — porte d'entrée à 0 avis)
- [ ] Réactivité : notifications Fiverr activées, répondre en minutes
