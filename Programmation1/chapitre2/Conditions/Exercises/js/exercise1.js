//

var premierNombre = Number(prompt("Veuillez entrer un nombre"));
var secondNombre = Number(prompt("Veuillez entrer un second nombre"));

if(premierNombre >= secondNombre){
    document.write("Le premier nombre" + " " + premierNombre + " "  + "est plus grande que le second");
}
if (secondNombre > premierNombre){
    document.write("Le second nombre" + " " + secondNombre + " " + "est plus grand que le premier," + " " + premierNombre);
}
else if (isNaN(secondNombre) || (isNaN(premierNombre))){
    document.write("Vous devez entrer un nombre, recommencer");
}
