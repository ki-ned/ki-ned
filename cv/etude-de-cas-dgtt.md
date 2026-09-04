# Étude de cas — DGTT : digitaliser le permis de conduire et la carte grise au Congo

> Brouillon `F4` de [l'audit](../notes/audit-2026-08.md), choisi comme priorité (actif de crédibilité n°1). Structure : problème → contraintes → décisions → résultat. Sourcé uniquement sur [reference.md](reference.md) et [experiences.md](experiences.md) — aucun chiffre inventé. Section "Impact" volontairement laissée sans volume (`E5` : pas de donnée disponible pour l'instant) plutôt que d'en approximer un.

---

## Le projet en une phrase

Remplacer le passage au guichet par un parcours numérique pour la délivrance des permis de conduire et des cartes grises en République du Congo — enrôlement biométrique, caisse numérique, paiement mobile, politique « zéro cash ».

## Le contexte

Projet mené pour la DGTT (Direction Générale des Transports Terrestres) avec le cabinet **CEIPI**, prestataire mandaté par l'administration congolaise. Le système a été **inauguré par le ministre des Transports** et couvert par la presse nationale et internationale (ADIAC, Xinhua, Africa Press) — un projet d'État, pas un produit interne.

## Le problème à résoudre

Un service public qui reposait sur des files physiques, des dossiers papier et des paiements en espèces — donc lent, difficile à auditer, et sensible à la fraude documentaire. L'objectif : un parcours où un agent enrôle biométriquement un usager, encaisse numériquement, et où chaque dossier reste traçable, sans manipulation de cash à aucune étape.

## Les contraintes

- **Équipe resserrée** : 3 leads seulement pour un système d'État — un lead backend (Symfony), moi en lead frontend, un lead mobile (Java, pour l'app d'enrôlement biométrique sur tablettes dédiées aux agents). Pas de marge pour un dev intermédiaire ; chaque lead porte son périmètre de bout en bout.
- **Stack imposée par le client** : Next.js. Ce n'était pas notre premier choix au kickoff — nous l'avons challengé (questions d'architecture, de délais, de rendu SSR pour un back-office administratif), puis adopté une fois les réponses posées.
- **Zéro cash comme exigence métier, pas comme option technique** : ça engage la conception du paiement et de la caisse numérique dès le départ, pas comme une fonctionnalité ajoutée après coup.

## Les décisions

- **Frontend Next.js 15 / React 19, porté seul.** J'ai pris l'intégralité du frontend : les interfaces d'enrôlement pour les agents, la caisse numérique, et le parcours de paiement mobile.
- **Intégration du stockage S3/MinIO**, pour les pièces jointes du dossier (documents d'identité, photos d'enrôlement) — gérée par moi, côté frontend et son interfaçage avec le stockage objet.
- **Interface pensée pour des agents, pas pour des usagers grand public** : le vrai utilisateur quotidien de l'outil n'est pas le citoyen (qui vient une fois), mais l'agent public qui l'opère toute la journée — ça change les priorités d'ergonomie (rapidité de saisie, tolérance à l'erreur, reprise après interruption) par rapport à un site vitrine.

## Ce qui a été livré

Un système en production, inauguré officiellement, qui couvre l'enrôlement biométrique, la caisse numérique et le paiement mobile pour la délivrance des permis de conduire et cartes grises — sans manipulation d'espèces à aucune étape du parcours.

## Ce que ça dit de ma façon de travailler

Sur un projet d'État avec une équipe minimale, il n'y a pas de place pour un rôle flou : chacun des 3 leads porte un périmètre entier, du choix technique jusqu'à la mise en production. C'est la même logique que je retrouve sur mes propres produits (Mobembo, Iba Alongi) — porter un périmètre de bout en bout plutôt que se répartir des tâches.

---

**Ce qui manque pour une version plus forte** (`E5`, à compléter si tu as la donnée, même approximative et datée) :
- Un ordre de grandeur : nombre d'enrôlements, de dossiers traités, ou de centres équipés.
- Un détail concret sur un point de friction technique résolu pendant le projet (le genre d'anecdote qui distingue un CV d'une étude de cas).
