/*
Vous devez calculer les dommages de l’attaque Darkest Lariat du pokémon Incineroar.

Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages seront doublés car les pokémons du type eau ont une faiblesse contre le feu.

Il faut ensuite faire deux pile ou face. Pour cela, il faut générer un nombre aléatoire entre 0 et 1.
Si c’est face (1), l’attaque fait 100 de dégâts. Si c’est faux l’attaque fait 0 dégât. Répétez les opérations pour le second lancé.

Exemple :
type = “eau” face face → 400 de dégâts
type = “ténèbre” pile face → 100 dégâts

 */
let dommageAttaque = 0;

let typeAttaque = prompt("Quel est le type d'attaque ?").toLowerCase();

// Pile ou face de la première attaque

let premiereAttaque = Math.floor(Math.random()*2);
/*
Facultatif: On retourne dans la console le nombre générer ci-haut.
*/
console.log(premiereAttaque);
// Pile ou face de la seconde attaque

let deuxiemeAttaque = Math.floor(Math.random()*2);

/*
Si notre première attaque est de type 1 et qu'elle n'est pas de type eau
 */
if (premiereAttaque === 1 && typeAttaque !== "eau") {
    dommageAttaque += 100;
}
/*
Conditions si notre attaque est de type eau
 */

else if (premiereAttaque === 1 && typeAttaque === "eau"){
    dommageAttaque += 200;
}

if (deuxiemeAttaque === 1 && typeAttaque !== "eau"){
    dommageAttaque += 100;
}
else if (deuxiemeAttaque === 1 && typeAttaque === "eau"){
    dommageAttaque += 200;
}
// On retourne au navigateur les dommages de l'attaque.
document.write(`Type d'attaque: <b>${typeAttaque}</b><br/> Dommages de l'attaque: <b>${dommageAttaque}</b>`);
