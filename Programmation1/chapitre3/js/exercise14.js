/*
Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer). Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.
 */

let nbpositifs = 0;
let nbNeg = 0;
while (nombre !== 0) {
    var nombre = Number(prompt("Veuillez entrer des nombres au hasard, entrez 0 pour terminer"));
    if (nombre > 0){
        nbNeg+= nombre;
    }
    else if(nombre < 0){
        nbpositifs+= nombre;
    }

}
document.write(`<ul><li>La somme des nombres positifs est de <b>${nbpositifs}</b>.</li><li>La somme des nombres négatifs est de <b>${nbNeg}</b></li></ul>`);