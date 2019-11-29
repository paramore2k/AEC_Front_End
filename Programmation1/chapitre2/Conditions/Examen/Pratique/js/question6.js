/* Exmane pratique: Question 6
L’usager doit sélectionner le contrôleur
55$ pour un RaspBerry Pi
15$ pour un Raspberry Pi Zero

L’usager doit décider du nombre de moteurs entre 2 et 24.
Un moteur coûte 5$

L’usager décide s’il veut une caméra USB ou non
La caméra coûte 35$

L’usager décide s’il veut une matrice de LEDS pour les yeux
La matrice coûte 10$ pour les deux yeux.

Il faut ensuite ajouter 20$ pour le filament 3D.
Il faut ajouter 15$ pour la batterie USB.
 */

/*
Ce qu'il faut faire afficher:
un résumé de l’achat
ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
le prix
le prix avec la livraison de 15%.

 */
var typeRobot = prompt("Quel type de RaspBerry désirez-vous ? (Pi ou Pi Zero)").toLowerCase();
var coutRobot = 35;

var message = " ";


if (typeRobot === "pi"){
    message += "Robot Raspbery Pi ";
    coutRobot += 15;
    do {
        var moteurs = Number(prompt("Combien de moteurs désirez-vous ? * Entre 2 et 24 *"));

    }
    while (moteurs <= 2 && moteurs <= 24);
    var coutMoteurs = moteurs*5;
    coutRobot += coutMoteurs;
    var camera = prompt("Désirez-vous une caméra USB avec celui-ci ? * Oui ou non *").toLowerCase();
    if (camera === "oui"){
        coutRobot += 35;
        message += "Avec une caméra USB ";
    }
    else if(camera === "non"){
        message += "Sans caméra USB ";
    }

    var matrice = prompt("Désirez-vous une matrice LEDS pour les yeux? * Oui ou non *").toLowerCase();
    if (matrice === "oui"){
        coutRobot += 10;
        message += "Avec une matrice LEDS pour les yeux "
    }
    else if (matrice === "non"){
        message += "Sans matrice LEDS pour les yeux ";
    }

    coutLivraison = (coutRobot)*15/100 + coutRobot;
    document.write(`Résumé de l'achat: ${message} au cout de ${coutRobot} $ pour un total de ${coutLivraison} avec la livraison`);
}
    if (typeRobot === "pi zero"){
    message += "Robot Raspbery Pi Zero ";
    coutRobot += 55;
    while (moteurs <= 2 && moteurs <= 24) {
        var moteurs = Number(prompt("Combien de moteurs désirez-vous ? * Entre 2 et 24 *"));
    }
    var coutMoteurs = moteurs*5;
    coutRobot += coutMoteurs;
    var camera = prompt("Désirez-vous une caméra USB avec celui-ci ? * Oui ou non *").toLowerCase();
    if (camera === "oui"){
        coutRobot += 35;
        message += "Avec une caméra USB ";
    }
    else if(camera === "non"){
        message += "Sans caméra USB ";
    }

    var matrice = prompt("Désirez-vous une matrice LEDS pour les yeux? * Oui ou non *").toLowerCase();
    if (matrice === "oui"){
        coutRobot += 10;
        message += "Avec une matrice LEDS pour les yeux "
    }
    else if (matrice === "non"){
        message += "Sans matrice LEDS pour les yeux ";
    }
    coutLivraison = (coutRobot)*15/100 + coutRobot;
    document.write(`Résumé de l'achat: ${message} au cout de ${coutRobot} $ pour un total de ${coutLivraison} $ avec la livraison`);

}







