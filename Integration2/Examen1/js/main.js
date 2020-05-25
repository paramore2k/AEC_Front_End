/**
 * Créé par David Champagne
 * 2020/05/20
 *
 */
// Validation du formulaire

//   Récupération de l'ID de l'indicatif entrer
var codeRegional = document.getElementById('indicatif');
var form = document.querySelector('form');
function validerFormulaire(event){

    var erreurIndicatif = document.getElementById('erreurIndicatif');

    if (codeRegional.value.length === 3) {

        if (codeRegional.value === '418' || codeRegional.value === '514' || codeRegional.value === '819') {
            codeRegional.style.color = 'green';
            erreurIndicatif.innerHTML = '';
        } else {
            erreurIndicatif = document.getElementById('erreurIndicatif');
            codeRegional.style.color = 'red';
            erreurIndicatif.style.color = 'red';
            erreurIndicatif.innerHTML = 'Invalide. 418, 514 ou 819 seulement';
            event.preventDefault();
        }
    }

}



// Bouton Paypal


paypal.Buttons({

    // Affiche le bouton et crée la commande
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.01'
                }
            }]
        });
    },

    // Finaliser la transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }


}).render('#paypal-button-container');