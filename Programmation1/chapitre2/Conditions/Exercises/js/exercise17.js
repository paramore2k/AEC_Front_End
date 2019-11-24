// Exercise 17
// Lire une lettre de l'alphabet.
// Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

var lettre = prompt("Entrer une lettre de l'alphabet").toLowerCase();

if (lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y") {

    document.write(`La lettre entrée est une voyelle`);
}
    else{
        document.write(`La lettre entrée est une consonne`);
    }

