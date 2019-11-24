// Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

var agePersonne = Number(prompt("Veuillez entrer votre âge"));

if (agePersonne >= 18) {
    document.write(`Vous êtes un Adulte`);
}
 else if(agePersonne >= 12 || agePersonne >=17){
     document.write(`Vous êtes un Adolescent`);
}
 else if(agePersonne < 12){
     document.write(`Vous êtes un Enfant`);
}