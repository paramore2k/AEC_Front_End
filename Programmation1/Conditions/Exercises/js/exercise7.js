// Exercise 7
// 7.    Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nb = Number(prompt("Veuillez entrer un nombre"));

if (nb < 0){
    document.write("Nombre Négatif");
}
if (nb > 0){
    document.write("Nombre Positif");
}
else if (nb === 0){
    document.write("Le nombre est 0");
}
