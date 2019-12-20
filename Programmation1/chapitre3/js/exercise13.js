/*
Le premier jour de l'ouverture de votre compte, vous déposez .01 .
À chaque jour pendant 10 jours, vous déposez le double de la veille. Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.
 */

var montant = .01;

for (var i=2;i<=10;i++){
    montant= montant*2;
    document.write('Montant déposé pour la journée' + ' ' + i + ' ' + ': ' + montant + ' ' + '<br/>');
}