/*
Créez une classe MonnaieVirtuelle. (1 point)

Une MonnaieVirtuelle a les propriétés suivantes :

nomMonnaie (exemple : Bitcoin, Ethereum, Litecoin) (1 point)
valeurEnUSD (exemple 1 Bitcoin = 9730$) (1 point)
actif (vous avez 2 Bitcoins) (1 point)
actifUSD (2 bitCoins = 2*9730) (1 point)

Votre constructeur doit prendre en paramètres nomMonnaie, valeurEnUSD et actif et calculer automatiquement actifUSD. (3 points)

 */

class MonnaieVirtuelle{

    constructor(nomMonnaie,valeurEnUSD,actif,actifUSD){

        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        actifUSD = this.actif*this.valeurEnUSD;
    }

}
/*
Instanciez les monnaies suivantes :
nomMonnaie = Bitcoin, valeurEnUSD = 9730, actif = 6 (1 point)
nomMonnaie = Ethereum, valeurEnUSD = 194, actif = 20 (1 point)
nomMonnaie = Litecoin, valeurEnUSD = 58, actif = 10  (1 point)
 */

Bitcoin = new MonnaieVirtuelle(Bitcoin,9730,6);
Ethereum = new MonnaieVirtuelle(Ethereum,194,20);
Litecoin = new MonnaieVirtuelle(Litecoin,58,10);


/*
Créez une classe Portefeuille. (1 point)

Un Portefeuille a les propriétés suivantes :

nomProprietaire (exemple : Shany Carle) (1 point)
tableauMonnaies (un tableau de plusieurs MonnaieVirtuelle) (1 point)

Une méthode nommée ValeurDuPortefeuille() qui explore le tableau tableauMonnaies et retourne le total de tous les actifUSD. (4 points)

 */

class Portefeuille {

    constructor(nomProprietaire,tableauMonnaies) {

        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }
    ValeurDuPortefeuille(){

    }
}
/*
Instanciez le portefeuille suivant :
Shany Carle, un tableau qui contient toutes les monnaies précédentes. (1 point)
Faites afficher la valeur de mon portefeuille. (1 point)
 */



