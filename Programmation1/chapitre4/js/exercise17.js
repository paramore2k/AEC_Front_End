/*
Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.
a) Vous pouvez utiliser la méthode sort()
b) Essayez SANS la méthode sort()
 */

var tabNombres = [10,20,30,40,50];
// Sans la méthode sort ?
var sorting = tabNombres.sort(function(a,b){return b-a});
// avec la méthode sort
document.write(sorting + "<br/>");

// Sans la méthode sort.

document.write(tabNombres);

