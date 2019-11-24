// Exercise 18
// Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.

var noteExamen = Number(prompt("Veuillez entrer votre note (sans le pourcentage)"));

if (noteExamen >= 60){
    document.write("Bravo !!");
}
else if(noteExamen < 60){
    document.write("Désolé, vous êtes en Échec.");
}