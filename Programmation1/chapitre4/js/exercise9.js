/*
Lire 10 nombres quelconques et les placer dans un tableau. Par la suite, trouver le plus petit et le plus grand de ces nombres.
 */

// var tabNombres = [];
// var tabPlusPetit;
// var tabPlusGrand;
//
// for (var i=0;i<10;i++){
//     tabNombres[i] = Math.floor((Math.random() * 20) + 1)
//     console.log(tabNombres[i]);
//     tabNombres.sort(function(a,b){return a - b});
//     tabPlusPetit = tabNombres[0];
//     tabPlusGrand = tabNombres[tabNombres.length-1];
// }
// document.write(`Le plus petit nombre est ${tabPlusPetit} et le plus grand est ${tabPlusGrand}`);

// 2e façon de trouver le min et le max

var tab = [];
var min = 999999;
var max = 0;

for (var i=0;i<10;i++){
    tab[i] = Math.floor(Math.random()* 100);
}
for (var j=0;j<10;j++){
    if(tab[j] < min){
        min = tab[j];
    }
    if (tab[j] > max){
        max = tab[j];
    }
}
document.write(`Le plus petit nombre est ${min} et le plus grand est ${max}`);

