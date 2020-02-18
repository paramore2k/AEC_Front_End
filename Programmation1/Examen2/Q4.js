/*
Créé par David Champagne
le 2020-02-18
 */

/*
L’AGENCE DE VOYAGES

Créez une classe Activité
Une activité a un nom
Une activité a un coût

Créez une classe Voyage
Un voyage a une destination
Un voyage a prix pour billet avion
Un voyage un tableau d’activités

Créez une classe Personne
Une personne a un nom
Une personne a un voyage

Instanciez l’activité “Golden Knights hockey” 125$
Instanciez l’activité “Raiders football” 200$
Instanciez l’activité “Tournoi de poker” 500$

Instanciez le voyage “Las Vegas” 400$ avec les 3 activités précédentes

Instanciez la personne “Shany Carle” avec le voyage précédent

Faites afficher toutes ces informations à l’écran. Vous devez en plus afficher le coût total pour le voyage (le billet d’avion et les activités).

 */

class Activite{

    constructor(nom,cout) {
        this.nom = nom;
        this.cout = cout;
    }
}

class Voyage{

    constructor(destination,prix,activites) {
        this.destination = destination;
        this.prix = prix;
        this.activites = activites;
    }
}

class Personne{

    constructor(nom,voyage) {
        this.nom = nom;
        this.voyage = voyage;
    }
}

/*
Instanciation des 3 activités
 */

let hockey = new Activite("Golden Knights hockey",125);
let football = new Activite("Raiders football",200);
let poker = new Activite("Tournoi de poker",200);

/*
Instanciation du voyage à Las vegas
 */

let activitesLasvegas = [hockey.nom,football.nom, poker.nom];
let prixLasVegas = [hockey.cout+football.cout+poker.cout];
let lasvegas = new Voyage("Las Vegas",400,activitesLasvegas);

/*
Instanciation de Shany Carle
 */

let shanyCarle = new Personne("Shany Carle",lasvegas);
document.write(`<ul><li>Nom: ${shanyCarle.nom}</li><li>Destination: ${lasvegas.destination}</li><li>Activités: ${lasvegas.activites}</li><li>Coût: ${prixLasVegas}+${lasvegas.prix}$</li></ul>`);


