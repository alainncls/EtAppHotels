# Projet AngularJS - Et'App Hôtels
Une application web permettant de lister les hôtels à proximité, mais aussi d'en chercher d'autres par nom, etc.
Affichage des résultat sur une carte Google Maps

## Installations requises
* bower install underscore
* bower install angular-google-maps
* bower install font-awesome --save

### En cas de problème
* Récupérer le dossier 'dist'
* Exécuter node.js pour lancer le fichier index.html

### Lancement de l'application
* Aller dans le dossier de l'application
* Lancement *via* la commande `grunt serve`

## Cahier des charges respecté
* Utilisation de Bootstrap
  - Application entièrement réalisée via Bootstrap
  - Application responsive (s'adapte à toutes les tailles d'écrans, avec adaptation des informations à afficher ou non)
* Utilisation de SASS
  - Utilisations de mixins, nesting du code CSS et variables représentant les couleurs principalement utilisées dans l'application
  - Design simple mais orienté sur l'expérience de l'utilisateur (peu de compétences en design pur...)
* Utilisation du framework AngularJS
  - Architecture Model - View - Controller (MVC), respectant les normes AngularJS
  - Plusieurs filtres de recherches d'hôtels (distance en rayon autour de la position, nom des hôtels, nombre d'étoiles des hôtels)
  - Utilisation d'un routeProvider pour diriger l'utilisateur dans sa navigation entre les différentes pages
  - Création de directives pour afficher un hôtel, une liste d'hôtels et des pages de résultats
* Facilité d'utilisation de l'application
  - Page d'accueil :
    - Affichage d'un carousel de photos d'hôtels partenaires (avec liens sans rapport avec les photos...)
    - 

## Perspectives d'amélioration