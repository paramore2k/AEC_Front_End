// Lire un nombre et afficher et afficher le carré et le cube de ce nombre

// Étape 1: trouver les variables

var nombre;
var nombreAuCarre;
var nombreAuCube;

// Étape 2: Demander à l'usager un nombre è entrer

nombre = Number(prompt("Veuillez entrer un nombre svp"));

// Étape 3: Les calcul du nombre
nombreAuCarre = nombre * nombre;
nombreAuCube = nombre * nombre * nombre;

// ÉTape 4: On affiche les résultats de l'étape no 3
console.log("Le nombre choisi est" + " " + nombre);
console.log("Le carré du nombre choisi est" + " " + nombreAuCarre);
console.log("Le cube du nombre choisi est" + " " + nombreAuCube);
document.getElementById('exercise2').innerHTML = "Exercise 2" + '<br/>';
document.getElementById('nombreAuCarre').innerHTML = "Le nombre" + " " + nombre + " " + "au carré est" + " " + nombreAuCarre +'<br/>';
document.getElementById('nombreAuCube').innerHTML = "Le nombre" + " " + nombre + " " + "au cube est" + " " + nombreAuCube + '<br/>';