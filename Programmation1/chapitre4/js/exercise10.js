/*
Le collège offre 6 options aux étudiants. Ces options sont :
INFORMATIQUE
ADMINISTRATION
HISTOIRE
GÉNIE
GEOGRAPHIE
BUREAUTIQUE

 */
var trouver = false;
var coursCollege = ["INFORMATIQUE","ADMINISTRATION","HISTOIRE","GENIE","GEOGRAPHIE","BUREAUTIQUE"];

var choix = prompt("Entrez un choix de cours pour vérifier s'il est disponible au collège").toUpperCase();

for (var i=0;i<coursCollege.length;i++){

    if(choix === coursCollege[i]){
        var trouver = true;

    }
}
if (trouver){
    document.write("Le cours est donné au collèege");
}
else{
    document.write("Le cours ne se donne pas au collège");
}
