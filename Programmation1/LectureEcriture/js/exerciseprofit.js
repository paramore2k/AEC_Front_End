// Définir les variables

var nomProduit = prompt("Quel est le nom du produit ?")
var prixProduit = Number(prompt("Quel est le prix du produit ?"));

var coutProduit = (prixProduit*0.66);
var profitProduit = (prixProduit+coutProduit).toFixed((2));


console.log(coutProduit);
console.log(profitProduit);
console.log(prixProduit);
document.getElementById('exerciseprofit').innerHTML = "Exercise sur le profit d'un produit";
document.getElementById('nomProduit').innerHTML = "Votre article étant à" + " " + prixProduit+"$"+", " + "votre profit est donc de" + " " + profitProduit+"$";
