// Exercise 12
//Calculer le prix des assurances pour un véhicule.
//
//
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
//
//
// S’il est plus vieux, le taux sera de 3 %.
//
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

// Déclaration de la variable pour connaître le sexe
var sexe;
// boucle while tant que f (avec string to lowercase) ou m (avec string to lowercase) n'est pas écris

while (sexe !== "m" || sexe !== "f"){
    sexe = prompt("Quel est votre genre ? (M pour Masculin, F pour féminin").toLowerCase();
    if (sexe === "f" || sexe === "m") {
        calculAge(sexe)
        break;
    }
}


function calculAge(sexe) {

    var age = Number(prompt("Quel âge avez-vous"));

    if (age >= 16 || age >= 25) {
        var valVehicule = Number(prompt("Quel est la valeur de votre véhicule ?"));
        var gars1625 = (valVehicule*5/100);
        var garsAutre = (valVehicule*3/100);
        var fille1625 = (valVehicule*3/100);
        var filleAutre = (valVehicule*2/100);
    }

    if (age >= 16 && age <= 25){
        var prime = sexe === 'm' ? (gars1625):(fille1625);
        document.write("Le montant de la prime de vos assurances est de" + " " + `<span id='${sexe}'>${prime}</span> $`);
    }

    else if (age > 25){
        prime = sexe === 'm' ? (garsAutre):(filleAutre);
        document.write("Le montant de la prme de vos assurances est de" + " " + `<span id='${sexe}'>${prime}'$</span>`);
    }

    else {
        document.write("Vous devez être agé de 16 ans et + pour conduire une voiture");
    }

}






