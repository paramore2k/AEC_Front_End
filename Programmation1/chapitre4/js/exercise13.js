/*
Lire 12 nombres quelconques et les mettre dans un tableau.
Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15. Si tel est le cas, afficher ces 2 nombres.
 */

var trouver = false;
var tabNombres = [];

for (var i=0;i<12;i++){
    tabNombres[i] = Math.floor(Math.random() * 10)
    console.log(tabNombres);
}

for (var j=0;j<tabNombres.length;j++){

    if(tabNombres[j] + tabNombres[11] === 15){
        document.write(`Le nombre à l'indice ${j} (nombre ${tabNombres[j]}) avec le nombre ${tabNombres[11]} = 15`);
        trouver = true;
    }
 }
if (!trouver){
    document.write("Aucun solution possible");
}