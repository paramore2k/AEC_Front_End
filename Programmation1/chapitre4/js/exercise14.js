/*
Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15. Si tel est le cas, affichez ces deux nombres.
 */
var tabNombres = [];
var trouver = false;

for(var i=0;i<12;i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
    console.log(tabNombres);
}
for (var j=0;j<tabNombres.length;j++) {
    for (var k = 0; k < tabNombres.length; k++) {
        if (tabNombres[j] + tabNombres[k] === 15) {
            document.write(`Le nombre à l'indice ${j} (nombre ${tabNombres[j]}) ainsi que le nombre à l'indice ${k} (nombre ${tabNombres[k]}) = 15 <br>`);
            trouver = true;
        }
    }
}
if (!trouver){
    document.write("Aucune solution possible");
}