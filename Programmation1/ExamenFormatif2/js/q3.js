/*
Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points)
Demandez un nombre à l’usager entre 1 et 200. (1 point)
Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager. (5 points)
 */
let nombreUsager;
let nombreTrouver = false;
let tabChance = [];
nombreUsager = Number(prompt("Entrez un nombre entre 1 et 200"));
for (i=0;i<100;i++) {
    tabChance[i] = Math.floor(Math.random() * 200);
    if (nombreUsager === tabChance[i]){
        nombreTrouver = true;
    }
}
if (nombreTrouver === true){
    document.write(`Le nombre se retrouve dans le tableau !`);
}
else{
    document.write(`Le nombre n'est pas dans le tableau !`);
}
