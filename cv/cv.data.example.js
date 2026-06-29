/**
 * Données personnelles SENSIBLES du CV.
 *
 * 1. Copier ce fichier en `cv.data.js` (dans le même dossier).
 * 2. Renseigner les valeurs ci-dessous.
 *
 * `cv.data.js` et la photo sont gitignorés : ils ne partent JAMAIS sur le repo public.
 * Si `cv.data.js` est absent, le CV affiche des replis propres
 * (monogramme « EK », « Brazzaville, Congo », et masque le téléphone).
 */
window.CV_PRIVATE = {
  // Téléphone (laisser vide "" pour masquer la ligne)
  phone: "+242 06 000 00 00",

  // Adresse précise affichée à la place de "Brazzaville, Congo"
  address: "Quartier, Brazzaville",

  // Chemin de la photo (place le fichier dans cv/assets/, ex: "assets/photo.jpg")
  // Laisser vide "" pour garder le monogramme "EK".
  photo: "",
};
