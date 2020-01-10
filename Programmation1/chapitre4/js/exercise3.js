/*
Affichez les mois précédents de Décembre à Janvier à l’aide d’une boucle for (inversée).
 */

var mois = ["Janvier", 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

for (let i=mois.length-1;i>=0;i--){

    document.write(mois[i] + '<br/>');
}

