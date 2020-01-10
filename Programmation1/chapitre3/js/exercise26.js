/*
Jeu du Yablon révisé
 */

var carte1;
var carte2;
var carteJoueur;
var parisGagnes = 0;



function guessNumber() {

    var petitecarte;
    var grandecarte;
    carte1 = Math.floor(Math.random()*14);
    carte2 = Math.floor(Math.random()*14);
    if (carte1 < carte2){
        petitecarte = carte1;
        grandecarte = carte2;
    }
    else if (carte1 > carte2){
        petitecarte = carte2;
        grandecarte = carte1;
    }
    carteJoueur = Math.floor(Math.random()*14);


        var choixJoueur = prompt("Est-ce que la valeur de la prochaine carte sera entre la carte" + " " + petitecarte + " " + "et la carte" + " " + grandecarte + " " + "?");

        if (choixJoueur === "non" && carteJoueur < petitecarte && carteJoueur > grandecarte) {
            parisGagnes++;
            guessNumber();

        } else if (choixJoueur === "non" && carteJoueur > petitecarte && carteJoueur < grandecarte) {
            document.write('Vous avez perdue' + '<br/>');
            console.log(petitecarte);
            console.log(grandecarte);
            console.log(carteJoueur);
        }
        else if (choixJoueur === "oui" && carteJoueur > petitecarte && carteJoueur < grandecarte){
            parisGagnes++;
            guessNumber();
        }
        else if (choixJoueur === "oui" && carteJoueur < petitecarte && carteJoueur > grandecarte){
            document.write("Vous avez perdue" + '<br/>');
            console.log(petitecarte);
            console.log(grandecarte);
            console.log(carteJoueur);
        }

}
guessNumber();
document.write("Nombre de paris gagné:" + " " + parisGagnes);
