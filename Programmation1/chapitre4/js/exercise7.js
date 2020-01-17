/*
À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean).
Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.

 */

var NbVrai = 0;

var NbFaux = 0;
var TabVraiOuFaux = [];

for (var i=0;i<1000;i++){

    TabVraiOuFaux[i] = Boolean(Math.floor(Math.random()*2));
    var x = TabVraiOuFaux.filter(Boolean,false);
    var y = x.length;
    if(TabVraiOuFaux[i] === false){
        NbFaux++;

    }
    else{
        NbVrai++;
    }

}
console.log(x);
console.log(y);
document.write(`Le nombre de vrai est de ${NbVrai} <br/> Le nombre de faux est de ${NbFaux}`);