/*
Fait par David Champagne
Le 2019-02-15
 */

/*
Nous allons programer un générateur de lettres aléatoires en utilisant les propriétés du unicode. L’encodage unicode est un système qui permet de représenter les caractères du clavier d’un ordinateur par des nombres.

Nous nous intéressons particulièrement aux nombres 65 à 90 de l’encodage unicode car ils représentent les lettres A à Z en majuscules sur le clavier.

C’est la fonction String.fromCharCode(nombre) qui permet de passer d’un nombre à du unicode.

Ex :
let maLettre = String.fromCharCode(65);
//La variable maLettre vaut maintenant la lettre A
let maLettre = String.fromCharCode(90);
//La variable maLettre vaut maintenant la lettre Z

LE GÉNÉRATEUR DE LETTRES ALÉATOIRES

Créez un tableau nommé tabNombres de 10000 cellules.
Remplissez toutes les cellules de ce tableau de nombres aléatoires entre 65 et 90 inclusivement.

Créez un second tableau nommé tabLettres de 10000 cellules.
Vous devez remplir ce tableau à partir du tableau précédent en y inscrivant le caractère unicode correspondant au chiffre stocké dans le tableau tabNombres au même indice.

Exemple  (avec des tableaux de 10 cellules plutôt que 100000:

tabNombres (tous les nombres sont générés aléatoirement entre 65 et 90)

65
72
66
68
65
68
83
77
67
88

tabLettres (en utilisant la fonction String.fromCharCode(mon nombre))

A
H
B
D
A
D
S
M
C
X

Il y a 0 lettre E
Il y a 2 voyelles
Le mot DAD se trouve dans le tableau et débute à l’indice 3
______________________________________________________________________________


Une fois que votre tableau tabLettres est généré, vous devez répondre aux questions suivantes :
Affichez le nombre de lettres E dans le tableau.
Affichez le nombre de voyelles (la somme du nombre de A E I O U Y)
Affichez si oui ou non la séquence de lettres “DAD” se retrouve dans le tableau.
Si oui, indiquez l’indice où débute le mot DAD.
Une fois le mot trouvé, vous pouvez cesser la recherche (pas obligé de trouver tous les mots DAD)
 */

let petitNombre = 65;
let grandNombre = 91;
let tabNombres = [];
let tabLettres = [];
let nombreDeE = 0;
let nombreDeVoyelles = 0;
let trouver = 0;

for (var i=0;i<10000;i++){
    tabNombres = Math.floor((Math.random() * (grandNombre-petitNombre)) + petitNombre);
    tabLettres[i] = String.fromCharCode(tabNombres);
    if (tabLettres[i] === "E"){
        nombreDeE++;
    }
    if (tabLettres[i] === "A" || tabLettres[i] === "E" || tabLettres[i] === "I" || tabLettres[i] === "O" || tabLettres[i] === "U" || tabLettres[i] === "Y"){
        nombreDeVoyelles++;
    }
    if (tabLettres[i]+tabLettres[i] === "DA"){
        trouver++;
        console.log(tabLettres[i]);
        console.log("Dad trouver !");
    }

}
document.write(`Il y a ${nombreDeE} lettre(s) E, il y a ${nombreDeVoyelles} voyelles + ${trouver}.`);
