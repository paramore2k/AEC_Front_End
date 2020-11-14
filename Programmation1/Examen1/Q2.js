/* Question 2
Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :

			      tranche à afficher	                      age

		  enfant			           0  <=  age  <= 12
		  adolescent		         13  <=  age  <= 17
		  adulte			         18  <=  age  <= 54
		   senior			         55  et plus

Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.

 */
var agePersonne = Number(prompt("Quel âge avez-vous ?"));

if (agePersonne <= 0 || agePersonne <=12){
    document.write("Enfant");
}
else if (agePersonne <= 13|| agePersonne <=17){
    document.write("Adolescent");
}
else if (agePersonne <= 18|| agePersonne <= 54){
    document.write("Adulte");
}
else if (agePersonne >= 55){
    document.write("Senior");
}
else {
    document.write("Pas encore né.");
}
