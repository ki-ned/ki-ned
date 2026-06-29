# CV — KONGO Nancy Emmanuel

CV imprimable en HTML/CSS pur (zéro dépendance, fonctionne hors-ligne).

## Utilisation

1. Ouvrir [`index.html`](index.html) dans un navigateur.
2. `Ctrl` + `P` → destination **« Enregistrer en PDF »**, format **A4**, marges **« Aucune »**, et activer **« Graphiques d'arrière-plan »** pour conserver les couleurs.

Le bouton **« Imprimer / PDF »** (visible à l'écran, masqué à l'impression) déclenche la même action.

## Données sensibles (hors-git)

Téléphone, adresse précise et photo ne sont **pas** versionnés (repo public).

```bash
cp cv.data.example.js cv.data.js   # puis renseigne tes infos dans cv.data.js
# place ta photo dans cv/assets/photo.jpg (optionnel)
```

- `cv.data.js` et `cv/assets/photo.*` sont ignorés par git (voir `.gitignore` racine).
- Sans `cv.data.js`, le CV affiche des replis : monogramme « EK », « Brazzaville, Congo », téléphone masqué.

## Modifier le contenu

Tout le texte est dans [`index.html`](index.html). Les sections sont commentées (PAGE 1 / PAGE 2).
Le seul accent couleur est la variable CSS `--accent` (en haut du `<style>`).
