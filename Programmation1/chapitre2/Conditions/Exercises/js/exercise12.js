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


function calculAge() {
    var age = Number(prompt("Quel âge avez-vous"));

    if (sexe === 'm' && age > 16 && age < 25){

        // On demande la valeur du véhicule seulement si la personne est âgée entre 16 et 25 ans
        var valVehicule = Number(prompt("Quel est la valeur de votre véhicule ?"));
        var gars1625 = (valVehicule*5/100);
        document.write("Le montant des assurances est de" + "<p id='gars'>" + gars1625 + "$</p>");
    }

    else if (sexe === "m" && age > 25){
        // On demande la valeur du véhicule seulement si la personne est âgée de + de 26 ans
        var valVehicule = Number(prompt("Quel est la valeur de votre véhicule ?"));
        var garsAutre = (valVehicule*3/100);
        document.write("Le montant des assurances est de" + "<p id='gars'> " + garsAutre + "$</p>");
    }

    else if (sexe === "f" && age > 16 && age < 25){

        var valVehicule = Number(prompt("Quel est la valeur de votre véhicule ?"));
        var fille1625 = (valVehicule*3/100);
        document.write("Le montant des assurances est de" + "<p id='filles'> " + fille1625 + "</p>");
    }
    else if (sexe === "f" && age > 25){
        var valVehicule = Number(prompt("Quel est la valeur de votre véhicule ?"));
        var filleAutre = (valVehicule*2/100);
        document.write("Le montant des assurances est de" + "<p id='filles'> " + filleAutre + "</p>");
    }

    else {
        document.write("Vous devez être agé de 16 ans et + pour conduire une voiture");
    }

}
// function calc() {
//     var prime;
//     if (sexe === 'm' || sexe === 'f') {
//         var classe = sexe === 'm' ? 'gars' : 'fille';
//         var age = prompt('');
//         if (age >= 16 && age <= 25) {
//             val = prompt('');
//             prime = sexe === 'm' ? (calculgars) : (calcul            fille        )            ;
//
//         } else if (age > 25) {
//             prime = sexe === 'm' ? (calculgars) : (calcul            fille        )            ;
//         } else {
//             document.write(`Le montant de ...<p class="${classe}">${val}</p>`);
//             return;
//         }
//
//
//         document.write(`Le montant de ...<p class="${classe}">${prime}</p>`);
//     }
//     else
//         document.write('sexe invalide');
// }







