/*
 Exercise 16
 16. Lire 2 nombres au clavier.
     Si ces 2 nombres sont :
     supérieurs ou égaux à 10, affichez leur somme
 s'ils sont inférieurs à 10, affichez leur produit
 Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.
*/

var num1 = Number(prompt("Veuillez choisir un nonbre au hasard (1/2)"));
var num2 = Number(prompt("Veuillez en choisir un second (2/2)"));

let somme = (num1+num2);
let produit = (num1*num2);

// Calculer  la somme des nombres si + ou = que 10
if (num1 >=10 && num2 >= 10){
    document.write(`La somme de ces deux nombres est ${somme}`);
}
// Sinon calculer le produit des nombres
else if(num1 < 10 && num2 < 10){
    document.write(`Le produit de ces deux nombres est ${produit}`);
}
// Si un des 2 chiffres est plus petit que 10, calculer la différence entre les 2
else if(num1 >= 10 && num2 < 10 || num2 >= 10 && num1 < 10){
    // Pour déterminer quel chiffre  entre les 2 est le plus grand pour en faire la différence (éviter 15 - 40 et obtenir un négatif)
    if(num1 > num2){
        let difference = (num1-num2);
        document.write(`La différence entre les 2 nombres est de ${difference}`);
    }
    else if (num2 > num1){
        let difference = (num2-num1);
        document.write(`La différence entre les 2 nombres est de ${difference}`);
    }
    // 2e façon pour trouver le plus grand des 2 nombres entrés si l'un des 2 est plus petit que 10
    if(num1 >= 10 && num2 < 10 || num2 >= 10 && num1 < 10){
        let pluspetit = Math.min(num1,num2);
        let plusgrand = Math.max(num1,num2);
        difference = (plusgrand - pluspetit);
        console.log(difference);
    }

}



