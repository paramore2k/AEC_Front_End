// Exercise mélanger un tableau

var tabNombres = [1,2,3,4,5,6,7,8,9];
var temp;
var r;

for (var i=0;i<tabNombres.length-1;i++){
    r = Math.floor(Math.random()*9);
    temp = tabNombres[i];
    tabNombres[i] = tabNombres[r];
    tabNombres[r] = temp;
}
document.write(`${tabNombres} <br/>`);