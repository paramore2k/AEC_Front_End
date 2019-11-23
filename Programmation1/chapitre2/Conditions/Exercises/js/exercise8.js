// Exercise 8
//8.    Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées. Une semaine de travail normale est de 40 heures.

var tauxH = Number(prompt("Quel est votre taux horaire"));

var nbH = Number(prompt("Combien d'heures avez-vous travailler ?"));

var salaireEmploye = (tauxH*nbH);

var hSupp = (nbH-40)*(tauxH*2)+salaireEmploye;

if (nbH > 0 && nbH < 40){
    document.write("Votre salaire est de " + " " + salaireEmploye + "$");
}
else if (nbH > 40){
    document.write("Votre salaire est de" + " " + hSupp + "$");
}
