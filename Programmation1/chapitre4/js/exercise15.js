/*
Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.
 */

var tabNombres = [];
var nb, nb1, nbtemp;

for (i=0;i<12;i++){
    tabNombres[i] = Math.floor(Math.random()* 10);
    console.log(tabNombres[i]);
}
document.write(tabNombres + "<br/>");

nb = Number(prompt("Quel valeur veut-tu inverser ?"));
nb1 = Number(prompt("Quel autre valeur veux-tu inverser ?"));

nbtemp = tabNombres[nb];
tabNombres[nb] = tabNombres[nb1];
tabNombres[nb1] = nbtemp;
document.write(tabNombres);

