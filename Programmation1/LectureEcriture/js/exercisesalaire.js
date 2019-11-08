// La question : Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant le taux horaire et le nombre d’heures travaillées sont fournies en entrée.

var tauxHoraire = Number(prompt("Quel est votre taux horaire ?"));
var nbHeures = Number(prompt("Combien d'heures avez-vous travaillées ?"));

var calculSalaire = tauxHoraire*nbHeures;


console.log("Votre salaire pour cette semaine sera de" + " " + calculSalaire + "$");
document.getElementById('exercisesalaire').innerHTML = "Exercise 5 (Salaire de l'employé)" + '<br/>';
document.getElementById('calculSalaire').innerHTML = "Votre salaire pour cette semaine sera de" + " " + calculSalaire + "$";
