/*
Fait par David Champagne
Le 2019-02-16
 */

/*
À l’aide de 2 for imbriqués et des variables nbLignes, nbColonnes et nb, reproduisez le résultat suivant :

1000 995 990 985  - 905
900 895
800 795
700
..
100 - 5

 */
// Décompte à partir de 1000 jusqu'à 5
let nb = 1000;
// J prendra la place de nbLignes dans le second for
let nbLignes = 0;
// On se sers des colonnes pour les changements de ligne.
let nbColonnes = 0;
for (let i=nb;i>0;i-=5){
    // Écriture du décompte de 1000 à 0, excluant le 0 puisque notre i est à > 0 et non >= 0;
    document.write(i + ' ');
    // On incrémente le chiffre des colonnes avec le décompte
    nbColonnes++;
    for (let j=nbLignes;j<5;j++){
        if(nbColonnes === 20){
            document.write('<br/>');
            nbColonnes = 0;
        }
    }
}

