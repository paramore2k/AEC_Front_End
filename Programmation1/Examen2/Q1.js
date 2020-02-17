/*
Fait par David Champagne
Le 2019-02-15
 */

/*
Vous demandez au client le type de Jeep
Sport 33290$
SportS 37240$
Havane 39235$.
Vous demandez ensuite le terme (24, 48, 60 ou 84) mois.
Vous demandez la couleur, si c’est rouge ou vert, ajoutez 1399$ au prix du véhicule.
Vous demandez si la transmission est manuelle (0$), automatique (1500$) ou automatique 8 vitesses (2400$).

Calculez une taxe de 15%.
Le taux d’intérêt est toujours 0%
Affichez le paiement mensuel incluant la taxe et un résumé de la transaction.

 */
let modeleSport =  33290;
let modeleSportS = 37240;
let modeleHavane = 39235;
let couleurRougeouVert = 1399;
let transAuto = 1500;
let transAuto8 = 2400;
let prixtotal = 0;


let choixModele = prompt("Veuillez entrez la lettre correspondant au modèle que vous désirez: A: Sport, B: SportS, C: Havane").toLowerCase();
if (choixModele === "a"){
    choixModele = "Sport";
    prixtotal+= modeleSport;
}
else if (choixModele === "b"){
    choixModele = "SportS";
    prixtotal += modeleSportS;
}
else {
    choixModele = "Havane";
    prixtotal += modeleHavane;
}
let choixCouleur = prompt("Quel couleur désirez-vous ?").toLowerCase();
if (choixCouleur === "rouge" || "vert"){
    prixtotal += couleurRougeouVert;
}
let choixTransmission = prompt("Veuillez entrez la lettre correspondant au type de transmission que vous désirez: M: Manuelle, AT: Automatique, AT8: Automatique 8 vitesses").toLowerCase();
if (choixTransmission === "m"){
    choixTransmission = "manuelle";
}
else if (choixTransmission === "at"){
    choixTransmission = "automatique";
    prixtotal += transAuto;
}
else{
    choixTransmission = "automatique 8 vitesses";
    prixtotal += transAuto8;
}
let choixTerme = Number(prompt("Sur combien de mois désirez-vous étalez les paiements ? - 24, 48, 60 ou 84"));


let prixTx = prixtotal*15/100+prixtotal;
let prixTxParMois = prixTx/choixTerme;
document.write(`Votre Véhicule: 
<ul><li>Jeep modèle <b>${choixModele}</b></li></ul>
<ul><li>Couleur <b>${choixCouleur}</b></li></ul>
<ul><li>Transmission <b>${choixTransmission}</b></li></ul>
<ul><li>Financement sur: <b>${choixTerme} mois</b></li></ul><br/>

Le montant total s'élève <b>${prixTx}$</b> taxes incluses, cela vous reviens à ${Math.round(prixTxParMois)} / mois $`);



