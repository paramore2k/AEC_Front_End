// Étape 1 : Bien identifier les variables et les calculs

var nbGallons = Number(prompt("Combien de gallons désirez-vous convertir ?"));
// Étape 2 : Conversion des gallons en litre.
var nbLitres = nbGallons*4.55;

// Étape 3: Afficher la réponse
console.log(nbGallons + "gallons équivaut à" + " " + nbLitres + " " + "Litres");
document.getElementById('exercise4').innerHTML = "Exercise 4 (Gallons en litres)" + '<br/>';
document.getElementById('nbLitres').innerHTML = nbGallons + " " + "gallons équivaut à" + " " + nbLitres + " " + "Litres" + '<br/>';
