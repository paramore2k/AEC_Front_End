// Exercise 23
// Programme pour la lecture de qualitée de l'environnement
//Une valeur comprise entre 0,04 et 0,31 est dite normale.
// Si sa valeur de l’indice dépasse 0,31 les industries de la liste A sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale.
// Si l’indice excède 0,40, on avise également la liste B et s’il excède 0,50, on avise aussi les industries de la liste C. Pour toutes les autres valeurs, écrire « Valeur impossible ».

var indiceQualitee = Number(prompt("Quel est la valeur de l'indice de qualitée actuellement ?"));

if (indiceQualitee >= 0.04 && indiceQualitee <= 0.31) {
    document.write("Valeur de qualité normal");
}
    else if (indiceQualitee >= 0.04 && indiceQualitee < 0.40){
        document.write("Les industries de la liste A ont été avisées");
    }
    else if (indiceQualitee >= 0.04 && indiceQualitee < 0.50){
        document.write("Les industries de la liste A et B ont été avisés.");
    }
    else if (indiceQualitee >= 0.04 && indiceQualitee > 0.50){
        document.write("Les industries de la liste A, B et C ont été avisés");
    }
    else {
        document.write("Valeur impossible");
}
