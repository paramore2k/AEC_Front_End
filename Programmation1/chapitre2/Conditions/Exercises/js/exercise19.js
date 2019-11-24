// Exercise 19
// Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12%
// et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montantVente = Number(prompt("Veuillez entrer le montant de la vente"));

if (montantVente >= 500){
    escompte = (montantVente*12/100);
    montantFinal = (montantVente-escompte);
    document.write(`Votre escompte est de =><b>${escompte}</b> $ <=, vous ne paierez donc que <b><i>${montantFinal} $</i></b>`);
}
else {
    document.write(`Vous n'avez pas droit à l'escompte`);
}