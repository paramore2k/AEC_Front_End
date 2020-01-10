/*
Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs à l’aide d’une boucle Pour.
 */

var PileouFace = [];

for (var i=0;i<=10;i++){
    PileouFace[i] = prompt("Pile ou Face ?");
    document.write(PileouFace[i] + '<br/>');
}