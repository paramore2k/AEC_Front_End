


// Classe Cylindre avec 2 propriétés

class Cylindre {

    constructor(hauteur, rayon) {
        this.hauteur = hauteur;
        this.rayon = rayon;

    }
    // Méthode qui retourne le volume du cylindre
    GetVolume(){
        return Math.PI*Math.pow(this.rayon,2)*this.hauteur;
    }
}

class Boite {

    constructor(tabCylindres) {
        this.tabCylindres = tabCylindres;
    }
    GetVolumeBoite(){
        let volumeDesCylindres = 0;
        for(let i=0;i<this.tabCylindres.length;i++) {
            volumeDesCylindres += tabCylindres[i].GetVolume();
        }

        return volumeDesCylindres;
    }

}


let cylindre1 = new Cylindre(4,2);

let cylindre2 = new Cylindre(8,5);
let cylindre3 = new  Cylindre(4,4);
let cylindre4 = new Cylindre(8,2);

document.write(cylindre1.GetVolume() + '<br/>' +  cylindre2.GetVolume() + '<br/>');
let tabCylindres = [cylindre1,cylindre2,cylindre3,cylindre4];
let maBoiteDeCylindres = new Boite(tabCylindres);
let VolumeTotaldeToutCa = maBoiteDeCylindres.GetVolumeBoite();
document.write(`Volume total = ${VolumeTotaldeToutCa}`);
