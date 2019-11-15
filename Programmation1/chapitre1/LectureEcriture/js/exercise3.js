// Étape 1 : Bien identifier les variables

var largeurRectangle = Number(prompt("Quel est la largeur du rectangle ?"));
var longueurRectangle = Number(prompt("Quel est la longueur du rectangle ?"));

// Étape 2 : Calcul de la surface du rectangle

// Étape 3 : affiche de la réponse
var surfaceRectangle = largeurRectangle * longueurRectangle;
console.log("La surface du rectangle mesure" + " " + surfaceRectangle);
document.getElementById('exercise3').innerHTML = "Exercise 3" + '<br/>';
document.getElementById('surfaceRectangle').innerHTML = "Le calcul de la surface du rectangle est" + " " + surfaceRectangle;