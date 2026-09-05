# Handoff — Claude Code (terminal + GitHub)

> Ce fichier liste ce que tu peux laisser faire à **Claude Code** (CLI, dans VS Code, avec accès à
> ton terminal et ton compte GitHub) — des choses que la session Cowork ne pouvait pas faire
> elle-même : pousser sur GitHub (pas d'identifiants dans son bac à sable), et ajouter des serveurs
> MCP arbitraires (Cowork n'a qu'un registre de connecteurs fermé, Claude Code accepte n'importe
> quel serveur MCP via `claude mcp add`).
> Mis à jour le 05/09/2026. Ne duplique pas [audit-2026-08.md](audit-2026-08.md) (section
> « À valider »), [wishlist.md](wishlist.md) ni [roadmap-competences.md](roadmap-competences.md) —
> ce fichier ne fait que pointer vers eux et ajouter ce qui est spécifique à Claude Code.

---

## Suivi (session Claude Code du 05/09/2026)

- **§1 push** : fait. `main` local = `origin/main`, les commits Cowork étaient déjà poussés
  (dont `7352b17` qui reprenait les retouches CV du snapshot).
- **§2 MCP Upwork** : `claude mcp add` fait (config projet). Reste le login OAuth via `/mcp`
  dans une session interactive.
- **§3 skills** : `humanizer` et `emil-design-eng` présents dans `~/.claude/skills/`.
- **§4 humanizer** : passé sur l'étude de cas DGTT, `fiverr/gigs.md`, les 3 bios
  (`comeup/bio.md`, `cv/profil-freelance.md`, `cv/about-me.md`), les 9 CV HTML,
  le portfolio (`index.html`, `travaux.html`, `404.html`, `data/projects.json`,
  `social/facebook-cover.html`) et le `README.md`. Commits `aefd11a` + `9d9a20c`,
  poussés sur `main`. Pages redéployé.

---

## 1. Immédiat — mécanique (aucun MCP requis)

- [x] **Pousser les commits en attente.** Cowork a fait les commits en local (pas d'accès réseau
  GitHub depuis son bac à sable) :
  - `f074e19` — grille TJM validée + étude de cas DGTT
  - `ef46875` — retrait Moonshop + précision ROSARIOSIS/installeur pour Eduverse
  - `ee23d82` — 6 gigs Fiverr dupliqués depuis ComeUp
  - `f7bdd00` — catégories/sous-catégories Fiverr ajoutées
  → `git log --oneline -6` pour vérifier, puis `git push origin main`.
- [ ] **(Optionnel, à ta discrétion)** si tu veux qu'une future session Cowork puisse pousser
  elle-même sans repasser par toi, il faudrait un `git credential.helper` avec un *personal access
  token* GitHub configuré **dans le bac à sable Cowork** (pas sur ta machine). C'est un choix de
  sécurité — un token stocké là reste un secret à gérer. Claude Code, lui, a déjà tes identifiants
  locaux : rien à faire de ce côté.

## 2. Serveurs MCP à ajouter (Claude Code seulement — pas dans le registre Cowork)

### Upwork — MCP officiel
Existe et fonctionne (lancé août 2026), mais absent du registre de connecteurs Cowork. Claude Code
peut s'y connecter directement :
```
claude mcp add --transport http upwork https://mcp.upwork.com/mcp
```
Puis dans une session Claude Code : `/mcp` pour compléter le login OAuth (tes identifiants Upwork,
dans le navigateur). Permissions révocables à tout moment depuis Upwork → Paramètres du compte →
Apps connectées. Utile pour le chantier Upwork (profil + candidatures) encore en attente.

> Pas d'équivalent officiel pour ComeUp, Fiverr ou LinkedIn à ce jour (vérifié début septembre
> 2026) — seuls des scrapers communautaires non officiels existent, avec un vrai risque de
> bannissement de compte. À éviter.

## 3. Skills (skills.sh) à installer — Claude Code seulement

Cowork n'a pas d'équivalent à `npx skills add`. Depuis le terminal, dans le dossier `ki-ned` :

```
npx skills add blader/humanizer --global
```
Retire les tournures qui sonnent « écrit par une IA » d'un texte (CV, descriptions de gigs, bio) —
utile pour repasser sur tout ce que Cowork a rédigé (étude de cas DGTT, gigs Fiverr, bios) avant
publication.

```
npx -y skills add emilkowalski/skill --skill emil-design-eng --agent claude-code
```
Le 2ᵉ skill design que tu avais mentionné apprécier, à côté d'« impeccable » (déjà installé,
voir l'audit section « Outillage design »). Revue des micro-interactions/animations (easing,
durée < 300 ms) — pertinent si tu retouches le portfolio (`index.html`, `travaux.html`) ou les
sites clients.

## 4. Contenu encore en attente (avec ou sans MCP)

- **Upwork** (chantier non démarré) : compléter le profil (portfolio, historique), rédiger 2-3
  templates de proposition (candidature) à partir du texte déjà prêt dans
  [cv/profil-freelance.md](../cv/profil-freelance.md) (section anglaise). Le MCP Upwork (§2) permet
  d'aller plus loin : lire les offres en cours, préparer une proposition contextualisée.
- **ComeUp — checklist de lancement restante** (voir [comeup/strategie-premieres-ventes.md](../comeup/strategie-premieres-ventes.md)) :
  logo posé sur les 6 couvertures, `bugs-resolve.png` à refaire, vidéo de présentation (30-60 s).
  Travail visuel — pas de MCP utile, juste du temps.
- **Fiverr — checklist de lancement** (voir [fiverr/gigs.md](../fiverr/gigs.md)) : valider les prix
  proposés en $, redimensionner les visuels ComeUp au format Fiverr (1280×769), tourner au moins
  une vidéo de gig (fortement recommandé par l'algo Fiverr).
- **Prospection directe** : fichier déjà livré (`prospection_ki-ned.xlsx`, hors dépôt git — envoyé
  en conversation Cowork). Le connecteur Crustdata (déjà actif côté Cowork) n'est pas disponible
  côté Claude Code sauf à l'ajouter aussi comme MCP si tu veux continuer ce travail depuis le
  terminal.

## 5. Pour aller plus loin

Le reste des idées (roadmap compétences, wishlist portfolio) est déjà suivi dans
[roadmap-competences.md](roadmap-competences.md) et [wishlist.md](wishlist.md) — rien de spécifique
à Claude Code à ajouter là, ce sont des chantiers de fond, pas des tâches d'outillage.
