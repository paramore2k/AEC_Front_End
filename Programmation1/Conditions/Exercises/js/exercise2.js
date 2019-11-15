// Exercise 2
//2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.


var achat1 = Number(prompt("Quel est le montant de votre achat ?"));

var reductionAchat = achat1-(achat1*15/100);

if (achat1 > 200) {
    document.write("Puisque votre achat est de + de 200$, vous avez droit à 15% de rabais, le montant total est donc de:" + " " + reductionAchat + " $");
}
else if (achat1 <= 200){
    document.write("Le montant que vous devez payer est de" + " " + achat1 + "$." + " Dépensez plus de 200$ pour obtenir un rabais de 15%.");
}

