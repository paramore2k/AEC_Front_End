 // Exercise 4
// 4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro.
 // Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez imprimer le résultat.

 var nb1 = Number(prompt("Entrer un nombre"));
 var nb2 = Number(prompt("Entrer un second nombre"));
 var nb1DivNb2 = (nb1/nb2);

 if (nb2 !== 0){
     document.write("Le premier nombre divisé par le second égale: " + nb1DivNb2);
 }
 else if (nb2 === 0){
     document.write("Division par zéro interdit!")
 }