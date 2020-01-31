/*
Créez une classe JoueurHockey.
nom
nbButs
nbPasses

Instanciez :
Sydney Crosy 454 buts 787 passes
Mario Lemieux 690 buts 1033 passes
Jaromir Jagr 766 buts 1155 passes

 */
class JoueurHockey{

    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
        this.total = nbPasses + nbButs;
    }
    Total(){
       document.write("Bonjour je suis" + " " + Sydney.nom + " " + "et j'ai" + " " + Sydney.total + " " + "points en tout." + '<br/>');
    }

}
let Sydney = new JoueurHockey("Sydney Crosby",454,787);
let Mario = new JoueurHockey("Mario Lemieux",690,1033);
let Jaromir = new JoueurHockey("Jaromir Jagr",766,1155);
let total = Sydney.Total();

class Equipe{

    constructor(joueur1,joueur2,joueur3) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }
}


