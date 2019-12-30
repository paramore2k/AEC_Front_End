/*
Faire un programme qui boucle 10 fois. À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1 et vous demande aussi de choisir un nombre entre 0 et 1.
Si le nombre est identique, vous gagnez, perdez sinon. Vous affichez le pointage à la fin des 10 itérations.
 */

var ptsGagnes = 0;
var ptsPerdus = 0;
var nb;
var nb2;
for (var i = 0;i!==10;i++){
    nb = Math.floor(Math.random()*2);
    nb2 = Number(prompt("Entrez un nombre entre 0 et 1"));
    if (nb === nb2){
        ptsGagnes++;
    }
    else if(nb !== nb2){
        ptsPerdus++;
    }


}
document.write(`<ul><li>Parties gagnés: <b>${ptsGagnes}</b></li><li>Parties perdues: <b>${ptsPerdus}</b></li></ul>`)