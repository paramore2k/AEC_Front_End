// Exercise 10
//10.Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».
var nb = Number(prompt("Entrer un nombre entre 1 et 12"));


if (nb === 1){
    document.write("Janvier");
}
if (nb === 2){
    document.write("Février");
}

if (nb === 3){
    document.write("Mars");
}

if (nb === 4){
    document.write("Avril");
}

if (nb === 5){
    document.write("Mai");
}

if (nb === 6){
    document.write("Juin");
}

if (nb === 7){
    document.write("Juillet");
}

if (nb === 8){
    document.write("Août");
}

if (nb === 9){
    document.write("Septembre");
}

if (nb === 10){
    document.write("Octobre");
}
if (nb === 11){
    document.write("Novembre");
}
if (nb === 12){
    document.write("Décembre");
}
else if (nb < 0 || nb > 12){
    document.write("Mois invalide");
}