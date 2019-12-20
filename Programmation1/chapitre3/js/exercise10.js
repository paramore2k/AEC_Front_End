/*
Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.
 */

var montant;
var taxes = montant*9/100+5;

for (var i=5;i<=100;i+=5){
    var taxes = i*9/100+i;
    document.write('Le montant de ' + i  + '$ ' + 'nous donne' + ' ' + taxes + '$ ' + 'avec la taxe'+ '<br/>');
}
