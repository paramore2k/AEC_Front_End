/*
Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.
 */

var nbImpairs = 1;
var car = 0;
for (i=nbImpairs;i<=49;i+=2) {
    document.write(i + " ");
    car++;
    if (car === 5){

        document.write('<br/>');
    car = 0;
    }
}