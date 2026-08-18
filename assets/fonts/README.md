# Polices auto-hébergées

Le site ne dépend plus de Google Fonts : les `woff2` sont servis depuis ce dossier
(gain de performance — plus de requête bloquante vers un tiers — et pas d'appel externe
côté visiteur).

| Rôle | Police | Graisses |
|---|---|---|
| Affichage (titres) | Clash Display *(Fontshare, ITF Free Font License)* | 500, 600, 700 |
| Texte courant | IBM Plex Sans | 400, 500, 600 |
| Code, données, mesures | JetBrains Mono | 400, 500 |

Sous-ensembles `latin` et `latin-ext` uniquement (Clash Display est livrée en un seul fichier par graisse).

> Clash Display vient de **Fontshare**, pas de Google Fonts. Pour la récupérer :
> `curl "https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap"`
> puis télécharger les `.woff2` référencés. Elle s'arrête à **700** : le titre principal
> utilise 700 (là où Bricolage montait à 800) et les sous-titres 600.

## Régénérer

```bash
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=<FAMILLE>&display=swap"
```

Récupérer les blocs `@font-face` des sous-ensembles latin / latin-ext, télécharger chaque
`woff2` dans ce dossier, puis les référencer dans `fonts.css` **par leur nom de fichier seul**
(les `url()` sont relatives au CSS, pas à la page).
