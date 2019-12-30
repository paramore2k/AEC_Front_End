/*
Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin).
Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.
 */

let nbMasculin = 0;
let nbFeminin = 0;
let choixSexe;
while (choixSexe !== "t") {
    choixSexe = prompt("Veuillez entrer votre sexe. M pour masculin F pour fémninin. Entrer T pour terminer").toLowerCase();
    if (choixSexe === "m"){
        nbMasculin++;
    }
    else if (choixSexe === "f"){
        nbFeminin++;
    }
}
document.write(`<ul><li>Personnes masculines: <b>${nbMasculin}</b></li><li>Personnes féminines: <b>${nbFeminin}</b></li></ul>`)