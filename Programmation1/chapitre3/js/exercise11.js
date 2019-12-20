/*
Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.
 */
var nbAuCarre;
var nbAuCube;

for (var i=1;i<=10;i++){
    nbAuCarre = i*i;
    nbAuCube = i*i*i;
    document.write('Soit le nombre' + ' ' + i + ' ' + 'et son carré' + ' ' + nbAuCarre + ' ' + 'et son cube' + ' ' + nbAuCube + '<br/>');
}