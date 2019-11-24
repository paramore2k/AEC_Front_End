// Exercise 13
// 13. Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

var nombre = prompt("Entrer un nombre au hasard");
var secondNombre = prompt("Entrez un second nombre au hasard");

if (nombre > secondNombre) {
    document.write("Le plus petit nombre est" + secondNombre + " " + "et le plus grande est" + " " + nombre);
}
    // Comparaison des 2 nombres à l'inverse
    else if(secondNombre > nombre){
        document.write("Le plus petit nombre est" + " " + nombre + " " + "et le plus grand est" + " " + secondNombre);
    }
//    Si les 2 nombres sont égaux
else if (nombre === secondNombre){
    document.write("Erreur: Vous devez entrer 2 nombres différents !");
}

