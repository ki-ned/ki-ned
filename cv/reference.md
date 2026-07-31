# Référence projets — KONGO Nancy Emmanuel

> **But** : source de vérité unique de mes rôles et contributions réels, pour alimenter CV,
> portfolio et candidatures (aujourd'hui et à l'avenir). On enrichit ce fichier projet par projet.
>
> **Règle de confidentialité** (ce fichier est public) : pour les projets à **dépôt privé**, on
> indique le **nom seul** (pas d'URL de dépôt privé ni d'infra interne). Les **liens** ne sont
> donnés que pour les ressources **publiques** (produits en ligne, dépôts publics, presse).
>
> **Légende rôles** : `Co-fondateur · dev unique` · `Lead Frontend` · `Lead Mobile` ·
> `Lead intégration front/back` · `Concepteur & mainteneur` · `Contributeur`.

---

## 1. Co-fondations (produits personnels)

### Mobembo — TravelTech
- **Rôle** : Co-fondateur & **unique développeur** (stack, architecture, dev, déploiement — tout décidé et construit seul).
- **Période** : depuis **2024** · en ligne en **pré-lancement** (dev ~98 %, à temps partiel, je pilote roadmap & livrables).
- **Stack** : Monorepo Turborepo + Bun · API **NestJS** · apps mobiles **Expo** · dashboards **Next.js** · PostgreSQL/Prisma.
- **Périmètre** : réserver bus/train/avion domestique et payer par **Mobile Money** (MTN, Airtel) ; **réconciliation** de paiement offline ; **billet QR vérifiable hors ligne** ; 6 grands axes. J'ai aussi mis en place le **service mail** du projet (voir Infra).
- **Public** : site vitrine **mobembo.cg** · apps « bientôt » sur les stores.

### Iba Alongi — Plateforme du mariage africain
- **Rôle** : Co-fondateur & **unique développeur** (aux commandes techniques complètes).
- **Période** : depuis **2024** · **bêta**, prête au lancement (dev quasi finalisé).
- **Stack** : Monorepo **NestJS + Next.js** · PostgreSQL/Prisma.
- **Décision produit fondatrice (moi)** : un mariage = un **parcours de cérémonies** (Dot, Civil, Religieux, Réception), chacune avec sa date, son lieu et **sa propre liste d'invités** → structure toute l'archi (RSVP par cérémonie, mini-site invité, cagnotte, livre d'or, annuaire fournisseurs).
- **Public** : pas encore de domaine public.

---

## 2. Plateformes métier & systèmes critiques (Webtinix / clients)

### DGTT — Digitalisation d'un service public national
- **Rôle** : **Lead Frontend (Next.js)** — j'ai porté **tout le frontend**, dont l'**intégration du stockage S3/MinIO**.
- **Équipe** : 3 leads (backend Symfony · **frontend = moi** · mobile Java pour l'app d'enrôlement biométrique sur tablettes dédiées). Avec le cabinet **CEIPI**. Le client a imposé la stack Next.js + un kickoff qu'on a **challengé puis mis en place**.
- **Période** : ~**2024**.
- **Stack** : **Next.js 15 · React 19 · MinIO/S3** · back Symfony.
- **Périmètre** : délivrance des permis de conduire & cartes grises pour l'administration congolaise — enrôlement biométrique, caisse numérique & paiement mobile, politique « zéro cash ».
- **Preuve publique (presse)** : ADIAC — <https://www.adiac-congo.com/content/transport-routier-le-congo-lance-le-permis-de-conduire-et-la-carte-grise-biometriques-149221> · Xinhua — <https://french.news.cn/20240622/9ec9efc2f35145559b62136ea98268b6/c.html> · Africa Press. **Inauguré par le ministre des Transports.**

### SIS — Système Intégré de Santé
- **Rôle** : **Lead Frontend** — choix de la techno (Next.js), participation à l'**analyse / conception / structure globale** en corrélation avec le lead Backend (Symfony), **construction entière de l'app Admin**. Puis **direction d'une équipe de dev** pour les autres apps front.
- **Équipe** : projet **multi-apps** (un dépôt par app), équipe front dirigée par moi + lead back.
- **Période** : ~**2025** (app Admin construite avril → juillet 2025).
- **Stack** : **Next.js / TypeScript** (front) · **Symfony** (back).
- **Périmètre** : interconnexion entre plusieurs hôpitaux / structures de santé. Apps par rôle : **admin, admin-hospital, doctor, patient, patient-desktop, agent-accueil, urgence** (dépôts privés).
- **Public** : étude de cas — <https://webtinix.com/portfolio/sis-sante> (démo sur demande).

### Caisse Unique — Plateforme de règlement « zéro cash » (État)
- **Rôle** : **Lead Frontend (Next.js 15)** — j'ai géré **tout le frontend** ; ensuite **consultant & dev** auprès de l'**ACSI** (responsable légal des projets étatiques de cette ampleur) pour appliquer les amendements demandés.
- **Équipe** : 2 leads (frontend = moi · backend Symfony).
- **Période** : **2025** — ~2 mois de création + ~2 mois de passation/consultance.
- **Statut** : **non déployé — en pause**.
- **Périmètre** : plateforme de règlement dématérialisé pour **toutes les administrations congolaises**, ministères inclus.
- **Public** : ACSI — <https://acsi.cg/>.

### SMEO — Pilotage de la performance (client Ressource Added, France)
- **Rôle** : **Lead intégration front/back** — transformer les **specs client en specs techniques**, les faire valider, cadrer les délais, puis assurer la **liaison front ↔ back** (contrats JSON, intégration, boucle de bugs, garantir les interactions).
- **Équipe** : 3 (1 front, 1 back, **moi au centre**).
- **Période** : **2023 → 2026** (démarré en 2023, poursuivi puis **maintenu après déploiement**).
- **Stack** : **Next.js 13 · Symfony 5**.
- **Périmètre** : SaaS de pilotage de la performance (KPI temps réel, cycle PDCA) pour **Ressource Added**, cabinet d'excellence opérationnelle (Lean, 6 Sigma) dirigé par **Jean-Michel Bouzon**.
- **Statut** : **en production & maintenu ~2,5 ans** (déployé sur app1.webard.fr).

### Satisfaction Client — Formulaires dynamiques (SERVTEC)
- **Rôle** : Développeur front (second du lead front) → **devenu lead front total**.
- **Équipe** : 4 au départ puis 2 (lead front + back). En collaboration avec le **Cabinet CEIPI**.
- **Période** : **2024** (mai → août).
- **Stack** : **Next.js / TypeScript**.
- **Périmètre** : construction de **formulaires dynamiques** (façon Google Forms) pour recueillir les avis clients selon les services de la société **SERVTEC**.

---

## 3. Mobile

### Wapi — Adressage & navigation au Congo
- **Rôle** : **Concepteur & développeur (seul)** & mainteneur — je pilote la **prochaine refonte**.
- **Période** : **2024 → présent** (dév. & maintenance).
- **Stack** : **Flutter** (front) sur une **API Laravel**.
- **Périmètre** : recherche d'adresses & itinéraires par coordonnées lat/lng, là où l'adressage classique manque. Villes : Brazzaville, Pointe-Noire, Oyo, Dolisie.
- **Public** : produit Webtinix — <https://webtinix.com/wapi>.

### FakoDrop — Application de livraison
- **Rôle** : **Développeur mobile** — j'ai géré **toute l'app mobile** (Android & iOS).
- **Période** : **2023**.
- **Stack** : **Flutter · Riverpod** · Clean Architecture.
- **Périmètre** : app de livraison en production en **Côte d'Ivoire**, publiée sur **Play Store & App Store**.
- **Public** : **fakodrop.com** · étude de cas <https://webtinix.com/portfolio/app-fakodrop>.

### Wayo / Woyo — VTC (commande de taxi)
- **Rôle** : **Lead Mobile** — encadrement d'une **junior** (stagiaire dev mobile).
- **Équipe** : 3 (lead mobile = moi · junior mobile · lead backend).
- **Période** : **2023** (janv. → mars).
- **Stack** : **Flutter / Dart**.
- **Statut** : **non mis en production** (arrêté par le client pour scission interne).

---

## 4. Sites vitrines & e-commerce (PrestaShop / Next.js)

### ps-wx-sodibiz — Vitrine Webtinix & Sodibiz (PrestaShop 8)
- **Rôle** : Développeur (seul) — **intégration d'une maquette** avec cahier des charges + **création de modules custom** pour répondre à des besoins PrestaShop 8.
- **Période** : **2026**. **Stack** : PrestaShop 8 (PHP).

### les-principes-retrouves — Site client
- **Rôle** : Développeur (seul) — **intégration** à partir du cahier des charges du client et de ses goûts.
- **Période** : **2026**. **Stack** : TypeScript / front. *(Dépôt & URL privés — non listés.)*

### wx-refonte-with-launchpad — Refonte du site Webtinix
- **Rôle** : **Cadrage & amorçage** — j'ai **décidé la techno**, défini le cadre et les concepts, **démarré le projet**, puis **remis à une équipe de dev** que j'ai **coordonnée**.
- **Période** : **2025-12 → 2026-02**. **Stack** : **Strapi LaunchPad** (Next.js / TypeScript).
- **Public** : dépôt **public** — <https://github.com/webtinix1/wx-refonte-with-launchpad>.

### wx_dialogueinsight — Module CRM Dialog Insight (PrestaShop)
- **Rôle** : Concepteur & développeur (seul) — **module créé de A à Z**.
- **Période** : **2026**. **Stack** : PHP (PrestaShop).
- **Périmètre** : connecteur **PrestaShop ↔ Dialog Insight** (clients, newsletter, commandes, paniers abandonnés, emails transactionnels, webhooks & tracking comportemental).

### wx-form-multi-steps-15 — Parcours de devis dynamique
- **Rôle** : Développeur (seul).
- **Période** : **2025-01**. **Stack** : **Next.js 15**.
- **Périmètre** : parcours dynamique multi-étapes aboutissant à l'**émission de devis** pour des travaux de maison.

### Intégrations & modules PrestaShop (client TALAE / Mattera)
- **Rôle** : création & amélioration de **modules sur mesure** et **intégrations tierces**.
- **Périmètre** : moyens de paiement (**PayPal, PayPlug**…), **Google Tag Manager**, connecteur CRM **Dialog Insight**.
- **Public (boutiques)** : [Megacrea](https://www.megacrea.com/) · [Les Bons Gamins](https://www.lesbonsgamins.fr/) · [Les Bretelles de Léon](https://www.lesbretellesdeleon.com/) · [Le Polystyrène](https://www.lepolystyrene.com/) · [C-Top Signature](https://www.ctopsignature.eu/).

---

## 5. Design System, outils & automatisation

### Sodinix — Design System multi-plateforme
- **Rôle** : **Concepteur & mainteneur**.
- **Stack** : Monorepo Turborepo · **6 packages** (tokens, ui, ui-native, tailwind-config, charts, email) · **26 composants** React & React Native · tokens **oklch** (3 couches) · **WCAG 2.2 AA** · Storybook.
- **Public** : docs — <https://ds-docs.sodibiz.fr/> · Storybook — <https://storybook.sodibiz.fr/>.

### MDM Platform — Gestion de parc de tablettes Android
- **Rôle** : Développeur, DevOps & référent technique — **open source**.
- **Stack** : agent **Kotlin (Device Owner)** · backend **Fastify + TS** · dashboard **React + Vite** · JSON Schema · Docker/Traefik (Postgres, Redis, MinIO).
- **Périmètre** : kiosk, commandes à distance, **streaming d'écran temps réel**, transferts, moteur de **règles d'alerte**, exports CSV/PDF.
- **Public** : dépôt **public** — <https://github.com/webtinix1/wx-mdm-platform> · dashboard mdm.webtinix.com.

### Orchestra — Hub d'automatisation
- **Rôle** : **Concepteur (seul)** — tout conçu selon le besoin Webtinix ; **reconstructible** pour d'autres besoins.
- **Période** : **2026**. **Stack** : **Fastify + Zod** (core-api) · **n8n** · **Postiz** · Docker + Traefik + Redis.
- **Périmètre** : planification & publication de contenu (« n8n orchestre, le métier vit dans une API découplée »). *(Infra interne — URLs non listées.)*

### Moonshop — SaaS e-commerce (Afrique francophone)
- **Rôle** : Développeur.
- **Stack** : Next.js standalone · Drizzle/Postgres · Better Auth · **paiement Mobile Money (PawaPay)** · WhatsApp/SMS · Docker + Caddy.

### Autres outils réutilisables
- **WebpConverter** — microservice + CLI de conversion d'images en WebP (`TypeScript · Express · Sharp · Docker`). Dépôt **public** — <https://github.com/ki-ned/WebpConverter>.
- **CongoWallet** — package paiement/wallet avec SDK multi-plateformes (JS, RN, Flutter) — `OpenAPI · Node/TS`.
- **Tandem — Table & Form kit** *(nom provisoire · repo open source à finaliser)* — socle CRUD réutilisable, évolution de tnks-data-table. Table dynamique (TanStack : resize persistant, état URL, filtres à facettes, recherche/pagination serveur, export, nav clavier) + formulaire piloté par config (11 types de champs, Zod, create/update, CRUD intégré). Extrait de `Bomba-Doc/front-bomba-doc/components/features/{data-table, form/dialog-form}` — déjà en prod (utilisateurs, permissions, groupes, workflows, pipelines). — `TanStack Table · React · Zod · TS`.

---

## 6. Infrastructure self-hosted & DevOps (conteneurisé, Docker + Traefik)

> **Rôle** : conception, déploiement et administration **en solo** sur Linux (Docker Compose, Traefik, scripts d'installation, persistance versionnée). **Période** : principalement **2026**.

| Service | Rôle / note |
|---|---|
| **Serveur mail** (Docker Mailserver + GUI + Roundcube) | Pour **Sodibiz** ; **ma version perso** réutilisée pour **Mobembo** (j'ai aussi mis en place le mail de Mobembo). |
| **Nextcloud** | Stockage & collaboration auto-hébergés. |
| **Vaultwarden** | Gestionnaire de mots de passe. |
| **Dolibarr** (ERP) | ERP auto-hébergé, personnalisé. |
| **OpenProject** | Gestion de projet. |
| **Plane** | Gestion de projet / suivi. |

---

## Débuts (2021)

### Kongosoft — Développeur Web & Mobile · 2021
- Espace membre web ; prototype de la version mobile de l'application **Kelasi**.

---

## Formation
- **Licence — Informatique** · Institut des Sciences et Techniques Professionnelles (ISTP) · 2020–2021.
- **Baccalauréat** · École Victor Hugo · 2016–2017.

---

## Transverse
- **Masterclass IA interne** (concepteur & animateur, 2025) — 7 modules : modèle mental des LLM, cadrage, prompting, ingénierie de contexte, workflow Claude Code, IA sur legacy, qualité & sécurité.
- **Mentorat** — formé et fait monter en compétence plusieurs stagiaires & coéquipiers (back & front).
- **Documentation** — specs, dictionnaires de données, ADR, guides d'installation & de déploiement.
