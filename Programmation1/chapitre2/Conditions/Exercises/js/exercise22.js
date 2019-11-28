// Exercise 22
// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var couleurFond = prompt("Choisissez une couleur de fond parmi celles-ci: Noir, Orange, Rouge").toLowerCase();

if (couleurFond === 'noir' || couleurFond === 'orange' || couleurFond === 'rouge') {
    var couleurTexte = prompt("Choisissez une couleur de texte parmi celles-ci: Noir, Rose, Blanc").toLowerCase();
    if (couleurFond === 'noir') {
        couleurFondChoisie = '#000000';
    } else if (couleurFond === 'orange') {
        couleurFondChoisie = 'orange';
    } else if (couleurFond === 'rouge') {
        couleurFondChoisie = 'red';
    }
    if (couleurTexte === 'noir' || couleurTexte === 'rose' || couleurTexte === 'blanc') {
        if (couleurTexte === 'noir') {
            var couleurTexteChoisie = '#000000';
        } else if (couleurTexte === 'rose') {
            couleurTexteChoisie = 'pink';
        } else if (couleurTexte === 'blanc') {
            couleurTexteChoisie = 'white'
        }
        const success = [
            `color: ${couleurTexteChoisie}`,
            `background: ${couleurFondChoisie}`,
        ].join(';');
        console.info('%c Voici le résultat selon les couleurs choisies !', success);
    }
}

