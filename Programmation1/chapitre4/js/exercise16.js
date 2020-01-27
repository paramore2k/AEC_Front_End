/*
Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
Par la suite, lire une nouvelle valeur et afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.
 */

var tabNombres = [5,10,15,20,25,30,35,40,45,50];
var rndNumber, temp, temp2;
var nbAplacer = false;
// Génération d'un nombre aléatoire qui sera l'indice i dans tabNombres à remplacer.
rndNumber = Math.floor(Math.random() * 100);
document.write("On veut ajouter" + " " +  rndNumber + " dans le tableau" + "<br/>");
for(i=0;i<tabNombres.length;i++) {
    // Si le nombre est déjà dans le tableau, on décale les nombre à la droite.
    if(nbAplacer){
        temp2 = tabNombres[i];
        tabNombres[i] = temp;
        temp = temp2;
    }
    // Chercher ou placer le nombre dans le tableau
    if (rndNumber <= tabNombres[i] && !nbAplacer){
        temp = tabNombres[i];
        tabNombres[i] = rndNumber;
        nbAplacer = true;
    }

}
// Si le nombre est placé dans le tableau on doit ajouter le dernier nombre <- ?
if (nbAplacer){
    tabNombres.push(temp);
}
else{
//    Le nombre n'a pas été placer, on l'ajoute a la fin du tableau.
    tabNombres.push(rndNumber);
}
document.write(tabNombres + '<br/>');