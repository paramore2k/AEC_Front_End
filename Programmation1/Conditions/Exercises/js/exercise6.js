// exercise 6
// 6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E

var note1 = Number(prompt("Quel est la note que vous avez obtenue ?"));

if (note1 >= 90){
    document.write("Vous obtenez un A !");
}
if (note1 >= 80 && note1 < 90){
    document.write("Vous obtenez un B");
}
if (note1 >= 70 && note1 < 80){
    document.write("Vous obtenez un C");
}

if (note1 >=60 && note1 < 70){
    document.write("Vous obtenez un D");
}
if (note1 < 60){
    document.write("Vous obtenez un E (Forcez-vous un peu...)");
}
