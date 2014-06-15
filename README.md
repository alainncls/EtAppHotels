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
  - Navigation via des boutons aux titres explicites
  - Renseignements 'standards' en bas de toutes les pages

## Mode d'emploi et contenu
* Page 'Accueil' :
  - Affichage d'un carousel de photos d'hôtels partenaires (avec liens sans rapport avec les photos...)
  - La carte (centrée sur la France) affiche une centaine d'hôtels sur les 12.000 disponibles (pour alléger le chargement)
  - Possibilité de filtrer les marqueurs des hôtels par nom *via* le champ juste au dessus de la carte
  - Cliquer sur les marqueurs pour aller sur la fiche de l'hôtel correspondant
* Page 'Recherche' :
  - Filtre par nom d'hôtel *via* le champ de texte
  - Filtre par classement (étoiles) *via* des clics sur les étoiles souhaitées
  - Affichage de 12 résultats par page
  - Navigation dans les résultats via des pages auto-générées
  - Cliquer sur 'En savoir plus' dans la liste des résultats pour aller sur la fiche de l'hôtel correspondant
* Page 'A proximité' :
  - ! Autoriser le navigateur à recueillir les données de localication !
  - Affichage des hôtels dans un certain rayon autour de la position détectée
  - Possibilité de régler le rayon de recherche via le menu déroulant
  - Affichage d'un maximum de 60 résultats maximum pour garantir la fluidité de l'application
  - Cliquer sur les marqueurs pour aller sur la fiche de l'hôtel correspondant
  - Cliquer sur 'En savoir plus' dans la liste des résultats pour aller sur la fiche de l'hôtel correspondant
* Pages 'Fiche Hôtel' :
  - Affichage de toutes les informations disponibles sur l'hôtel sélectionné
* Page 'A propos' :
  - Descriptions du projet, des technologies employées et de l'équipe réalisatrice
*  Page 'CGU' :
  - Mockup de Conditions Générales d'Utilisation
  - Liste (en partie fictive) de nos partenaires

## Perspectives d'amélioration
* Affichage de texte 'par défaut' pour les informations non disponibles pour un hôtel
* Affichage d'informations réduites sur un hôtel au survol du marqueur correspondant sur une carte
* Recherche automatique (et mise à jour des résultats) en se déplaçant sur une carte
* Exploitation plus poussée des API Google Maps (possibilités quasi-infinies)