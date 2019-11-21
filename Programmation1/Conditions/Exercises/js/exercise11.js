// exercise 11
//11.Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'.
// Si c'est autre chose, écrire un message d'erreur.
var lettre = prompt("Veuillez écrire une lettre").toLowerCase();
if (lettre === "w"){
    document.write("Avancer");
}
else if (lettre === "a"){
    document.write("Gauche");
}
else if (lettre === "s"){
    document.write("Droite");
}
else if (lettre === "d"){
    document.write("Reculer");
}
else{
    document.write("Erreur ! Lettre non valide");
}