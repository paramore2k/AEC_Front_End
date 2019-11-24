// exercise 15
// 15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var largeur = Number(prompt("Entrer la mesure de la largeur du rectangle"));
var longueur = Number(prompt("Entrez la mesure de la longueur du rectangle"));

var perimetre = (largeur*longueur);
if (perimetre >= 100){

    document.write(`La mesure de la surface du rectangle est de <b>${perimetre}</b>`)
}
else{
    document.write("La valeur de la surface ne peut être calculer car elle est en bas de 100");
}