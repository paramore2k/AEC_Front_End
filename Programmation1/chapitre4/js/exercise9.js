/*
Lire 10 nombres quelconques et les placer dans un tableau. Par la suite, trouver le plus petit et le plus grand de ces nombres.
 */

var tabNombres = [];
var tabPlusPetit;
var tabPlusGrand;

for (var i=0;i<10;i++){
    tabNombres[i] = Math.floor((Math.random() * 20) + 1)
    console.log(tabNombres[i]);
    tabNombres.sort(function(a,b){return a - b});
    tabPlusPetit = tabNombres[0];
    tabPlusGrand = tabNombres[tabNombres.length-1];
}
document.write(`Le plus petit nombre est ${tabPlusPetit} et le plus grand est ${tabPlusGrand}`);