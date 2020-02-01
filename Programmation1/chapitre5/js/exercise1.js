/*
Créez une classe JoueurHockey.
nom
nbButs
nbPasses

Instanciez :
Sydney Crosy 454 buts 787 passes
Mario Lemieux 690 buts 1033 passes
Jaromir Jagr 766 buts 1155 passes

Créez une méthode nommée Total qui affiche le nombre de points (buts + passes)

Créez une classe Equipe qui contient 3 joueurs

Instanciez votre équipe avec vos 3 joueurs

Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.

Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points des 3 joueurs de l’équipe (454+787+690+1033+766+1155).

 */
/*
Classe JoueurHockey
 */
class JoueurHockey{

    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
        this.total = nbPasses + nbButs;

    }
    /*
    Méthode Total
     */
    Total(){
       document.write(`Bonjour je suis <b>${this.nom}</b> et j'ai <i>${this.total}</i> points en tout.<br/>`);
    }
    /*
    Méthode AfficherPointsTotaux
     */
    AfficherPointsTotaux(){
        document.write(`Le total de points des trois joueurs de l'équipe est de ${tout}  <br/>`);
    }

}
/*
Instanciation des 3 joueurs de l'équipe
 */
let Sydney = new JoueurHockey("Sydney Crosby",454,787);
let Mario = new JoueurHockey("Mario Lemieux",690,1033);
let Jaromir = new JoueurHockey("Jaromir Jagr",766,1155);

Mario.Total();
Sydney.Total();
Jaromir.Total();
let tout = Sydney.total + Mario.total + Jaromir.total;
Mario.AfficherPointsTotaux();

/*
Classe Équipe
 */
class Equipe{

    constructor(joueur1,joueur2,joueur3) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
        this.afficheralignement = `<ul><li>${joueur1.nom}</li><li>${joueur2.nom}</li><li>${joueur3.nom}</li>`;
    }
    /*
    Méthode AfficherAlignement
     */

    AfficherAlignement(){
        document.write(`Voici les joueurs de l'équipe 1: ${this.afficheralignement}`);
    }
}
let equipe1 = new Equipe(Mario,Sydney,Jaromir);
equipe1.AfficherAlignement();

