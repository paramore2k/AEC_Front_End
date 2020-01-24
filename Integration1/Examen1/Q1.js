/* Question no1:
Mise en situation:
Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
    Aucun rabais pour moins de 10 personnes.
10 personnes et plus, 5% de rabais.
20 personnes et plus, 10% de rabais.
30 personnes et plus, 15% de rabais.
40 personnes et plus, 20% de rabais.

Programme à écrire:

Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin
*/

var nbPersonnes = Number(prompt("Combien de billets avez-vous besoin pour votre séjour à la ronde aujourd'hui ?"));

if (nbPersonnes >= 10) {
    rabais5 = (50)-(5*50/100);
    prixTotal = (nbPersonnes*50)-rabais5;

    // Utilisation de Math.round pour éviter les 10 chiffres après la virgule.
    prixparPersonne = Math.round(prixTotal/nbPersonnes);
    document.write(`Le cout de l'inscription est de ${prixTotal}$ en tout, ce qui signifie ${prixparPersonne} $ par personne.`);
}
else if(nbPersonnes >= 20) {
    rabais5 = (50)-(10*50/100);
    prixTotal = (nbPersonnes*50)-rabais5;

    // Utilisation de Math.round pour éviter les 10 chiffres après la virgule.
    prixparPersonne = Math.round(prixTotal/nbPersonnes);
    document.write(`Le cout de l'inscription est de ${prixTotal}$ en tout, ce qui signifie ${prixparPersonne} $ par personne.`);
}
else if(nbPersonnes >= 30){
    rabais5 = (50)-(15*50/100);
    prixTotal = (nbPersonnes*50)-rabais5;

    // Utilisation de Math.round pour éviter les 10 chiffres après la virgule.
    prixparPersonne = Math.round(prixTotal/nbPersonnes);
    document.write(`Le cout de l'inscription est de ${prixTotal}$ en tout, ce qui signifie ${prixparPersonne} $ par personne.`);
}
else if (nbPersonnes >= 40){
    rabais5 = (50)-(20*50/100);
    prixTotal = (nbPersonnes*50)-rabais5;

    // Utilisation de Math.round pour éviter les 10 chiffres après la virgule.
    prixparPersonne = Math.round(prixTotal/nbPersonnes);
    document.write(`Le cout de l'inscription est de ${prixTotal}$ en tout, ce qui signifie ${prixparPersonne} $ par personne.`);
}
else if (nbPersonnes < 10) {
    prixTotal = (nbPersonnes*50);
    prixparPersonne = prixTotal/nbPersonnes;
    document.write(`Le cout de l'inscription est de ${prixTotal}$ en tout, ce qui signifie ${prixparPersonne} $ par personne.`);
}


