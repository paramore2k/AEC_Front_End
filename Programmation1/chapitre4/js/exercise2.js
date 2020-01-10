/*
Créez un tableau qui contient les 12 mois de l’année en utilisant une technique différente du numéro 1 et affichez-le à l’aide d’une boucle Pour.
 */

var mois = ["Janvier", 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

for (i=0;i<mois.length;i++){
    if(mois[i] === "Janvier"){
        mois[i]+= " => Hey! Fais-tu frette";
    }
    document.write(mois[i] + '<br/>');
}

