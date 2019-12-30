/*
Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.
 */

let nbpositifs = 0;
let nbNeg = 0;
while (nombre !== 0) {
    var nombre = Number(prompt("Veuillez entrer des nombres au hasard, entrez 0 pour terminer"));
    if (nombre > 0){
        nbNeg++;
    }
    else if(nombre < 0){
        nbpositifs++;
    }

}
document.write(`<ul><li>Il y a eu <b>${nbpositifs}</b> nombre(s) positif entrés.</li><li>Il y a eu <b>${nbNeg}</b> nombre(s) négatifs entrés</li></ul>`);