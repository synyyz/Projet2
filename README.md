# IFT1005A-Projet2
Projet 2 sur le design et développement Web réalisé en équipe dans le cadre du cours IFT1005 A, H2019.

Le résultat final est disponible à l'adresse : https://www.webdepot.umontreal.ca/Usagers/p1215167/MonDepotPublic/IFT1005-Projet-2/index.html?uniq=6y4q18&fbclid=IwAR2rDU9RpDlkuhM3G15VYxpk0Ky7FLOIWmbDvoJB7JsuQc-hwsbV58QqNGg

## Échéance

Date de remise : 21 avril 2019

## Coéquipiers

- Sylvain Laporte, matricule : C3874
- Yuning Sun, matricule : 20141918

## Consignes

Les consignes sont disponibles à l'adresse : https://mihai-teaching.github.io/web_home-cooking/

## Contenu du projet

Le présent projet utilise les librairies Bootstrap, Font Awesome et jQuery, téléchargées directement de leur CDN.

Le présent projet contient les fichiers et dossiers suivants :
- *README.md :* le présent fichier. Contient le rapport de notre projet;
- *assets/ :* dossier contenant les images, icones et autres médias;
- *fonts/ :* dossier contenant les polices de caractères;
- *css/ :* dossier contenant les feuilles de style CSS;
  - *styles.css :* feuille de styles principale;
- *js/ :* dossier contenant les scripts JavaScript;
  - *_data_.js :* script fourni par le professeur. Télécharge le contenu du site au format JSON;
  - *scripts.js :* nos scripts permettant l'affichage du contenu téléchargé sur la page;
- *index.html :* page Web principale.

## Répartition des tâches

Dans la réalisation de notre projet, nous nous sommes réparti les tâches de la manière suivante :

- Sylvain Laporte :

  - le code HTML et l'importation du contenu depuis l'objet JSON;
  - l'ajout des classes Bootstrap pour les élément de layout;
  - l'image SVG artice1.svg;

- Yuning Sun :

  - le design de la présentation et de l'esthétisme du site;
  - le code CSS et l'ajout des classes Bootstrap de contenu et de composantes;
  - l'intgration des polices et des images;
  - la correction du code et le déboguage.

## Difficultés rencontrées

- L'objet JSON prévoyait contenir les adresse URL pour les images accompagnant les articles et les recettes. Toutefois, aucune adresse n'a été fournie. Pour palier à cela, nous avons choisi d'ajouter un objet JavaScript contenant les noms d'images que nous avons choisies, et de les injecter dans la fonction récupérant le contenu, en lieu et place des URL manquants. Cette solution, bien qu'imparfaite, permet l'affichage d'images sur notre site Web.
