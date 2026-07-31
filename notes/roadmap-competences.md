# Roadmap compétences — KONGO Nancy Emmanuel

> Plan d'évolution, calé sur ma séquence : **stabiliser mon profil actuel d'abord, combler les trous ensuite** pour faire les sauts suivants.
> Deux profils : **Ingénieur Fullstack Produit** (principal) · **Référent IA & Automatisation** (spécialité).
>
> **Règle d'or : build & publish > certs.** Chaque compétence doit sortir un **livrable public** (repo, article, projet du portfolio), sinon ça ne se voit pas sur le marché.
> Voir aussi [rappels.md](rappels.md) · [wishlist.md](wishlist.md).

---

## Phase 1 — Maintenant (août → sept. 2026) · Anglais + consolidation

**Objectif : verrouiller ce que je sais déjà et débloquer l'international.**

- [ ] **Anglais oral** (levier n°1, non technique) — filtre plus d'entretiens que n'importe quelle techno.
  - Actions : mock interviews réguliers (outil vocal IA ou partenaire), m'enregistrer, pratiquer le « parle-moi de ton projet » à l'oral.
  - Preuve : tenir un entretien technique de 30 min en anglais sans blocage.
- [ ] **Revisiter & mettre à jour mes stacks** (ne pas apprendre du neuf — consolider).
  - Actions : refresh sur les versions récentes de mon cœur de stack (Next.js / React Server Components, NestJS, Symfony, Flutter), relire mes propres projets d'un œil critique.
  - Preuve : notes de mise à jour + 1 dépendance/pattern modernisé sur un projet réel.
- [ ] **Stabiliser le profil (preuve publique propre).**
  - Actions : finaliser **Tandem** (voir rappels), README soignés sur mes repos publics, captures manquantes au catalogue (Orchestra, SIS…), **1 article technique**.
  - Preuve : portfolio + 2-3 repos publics « vitrine » impeccables.

---

## Phase 2 — 3 à 6 mois (oct. 2026 → mars 2027) · Combler les trous

**Choisir UN axe principal et l'approfondir à fond (ne pas faire les deux à moitié).**

### Axe A — Ingénieur IA (mon différenciateur, marché chaud)
- [ ] **RAG sérieux** : embeddings + base vectorielle → **pgvector** (je connais déjà Postgres) ou Qdrant · chunking · reranking.
- [ ] **Frameworks d'agents** : LangGraph / LlamaIndex.
- [ ] **Évals & FinOps LLM** : **Langfuse** (tracing, coût/latence des tokens, détection de régression) — *le seul domaine que j'ai reconnu ne pas maîtriser (offre insyco)*.
- [ ] **Muscler Python** (FastAPI, Pydantic) — l'écosystème IA vit en Python, mon n8n/JS ne suffit pas en équipe IA.
- [ ] **Preuve** : un agent RAG open source **avec évals + suivi de coût**.

### Axe B — Plateforme / Senior
- [ ] **Kubernetes** (au-delà de mon Docker/Traefik mono-serveur).
- [ ] **Un cloud managé** (GCP *ou* AWS — en choisir **un**) → cert *associate* (crédibilise le profil autodidacte à l'international).
- [ ] **Observabilité** : OpenTelemetry + Grafana/Prometheus.
- [ ] **Preuve** : un déploiement k8s documenté + un dashboard d'observabilité.

---

## Phase 3 — Continu · Les sauts suivants (2027+)

- [ ] **Systèmes distribués** (saut vers *architecte*) : files/événements (Kafka / NATS), stratégies de cache, scaling BDD.
- [ ] **Discipline de tests** industrialisée : contract testing, E2E (je l'ai en germe avec Vitest/Playwright sur MDM).
- [ ] **Sécurité / DevSecOps** : bases solides pour les rôles production.

---

## À évaluer — pas prioritaire

- [ ] **Angular** *(avec des pincettes)*. Mon écosystème est React/Next (dominant) ; Angular est un paradigme différent (RxJS, DI, décorateurs) → investissement réel pour un retour incrémental.
  - **Quand ça vaut le coup** : uniquement si un marché/client cible le demande explicitement (certaines ESN / grands comptes FR, banque, assurance). Sinon, **approfondir React/Next (RSC, perf)** rapporte plus.
  - Décision : le garder en veille, l'apprendre *à la demande* d'une vraie opportunité — pas « à vide ».

---

## Garde-fous

- **Ne pas m'éparpiller** : 1 axe principal par période, approfondi — pas une 6ᵉ techno superficielle.
- **Rien « à vide »** : chaque item → un livrable public.
- **Séquence** : anglais + consolidation → 1 axe (IA ou plateforme) → sauts distribué/archi.
