// La question
// Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

var nomPersonne = prompt("Quel est votre nom ?");
var agePersonne = Number(prompt("Quel âge avez-vous ?"));

// Calcul de l'opération

var calculAgeJours = (agePersonne*365);

console.log(calculAgeJours);
document.getElementById('exerciseage').innerHTML = "Exercise 7 (Journées vécus par la personne selon son âge)" + '<br/>';
document.getElementById('calculAgeJours').innerHTML = nomPersonne + " " + "Vous avez actuellement" + " " + calculAgeJours + " " + "journées de vécus";


