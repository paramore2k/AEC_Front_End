/* Question 4:

Vous devez compléter un programme qui permet de calculer l’aire de formes.
En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
- "O" pour cercle : PI * rayon2
- "R" pour rectangle : longueur * largeur
- "T" pour triangle rectangle : (longueur * largeur) / 2
- "C" pour carré : côté2

L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules.

En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire.


Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.

 */
formeChoisie = prompt("Veuillez choisir une forme pour en connaître l'air: O pour cercle, R pour rectangle, T pour triangle-rectangle, C pour carré").toLowerCase();

var message = "Voici les détails de la figure choisie <ul>";

if (formeChoisie === "o"){
    figure = "Cercle";
    rayon = Number(prompt("Veuillez entrer la mesure du rayon"));
    aireCercle = 3.14*(rayon*rayon);
    message += `<li>L'air du ${figure} est de ${aireCercle}</li></ul>`;
    document.write(message);
}
else if(formeChoisie === "r"){
    figure = "Rectangle";
    longueur = Number(prompt("Quel est la longueur du rectangle ?"));
    largeur = Number(prompt("Quel est la largeur du rectangle ?"));
    aireRectangle = longueur*largeur;
    message+= `<li>L'air du ${figure} est de ${aireRectangle}</li></ul>`;
    document.write(message);
}
else if (formeChoisie === "t"){
    figure = "Triangle-rectangle";
    longueur = Number(prompt("Quel est la longueur du triangle-rectangle ?"));
    largeur = Number(prompt("Quel est la largeur du triangle-rectangle ?"));
    aireTriangleRectangle = (longueur*largeur)/2;
    message+=`<li>L'air du ${figure} est de ${aireTriangleRectangle}</li></ul>`;
    document.write(message);
}
else if (formeChoisie === "c"){
    figure = "Carré";
    cote = Number(prompt("Quel est la mesure du côté ?"));
    aireCarre = (cote*cote);
    message += `<li>L'air du ${figure} est de ${aireCarre}</li></ul>`;
    document.write(message);
}