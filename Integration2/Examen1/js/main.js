/**
 * Créé par David Champagne
 * 2020/05/20
 *
 */
// Validation du formulaire

var codeRegional = document.getElementById('indicatif');
var telephone = document.getElementById('telephone');
var form = document.querySelector('form');
function validerFormulaire(event){


        if (codeRegional.value === '450' || codeRegional.value === '514' || codeRegional.value === '819') {
            codeRegional.style.color = 'green';
        }

    else{
            var erreurIndicatif = document.getElementById('erreurIndicatif');
            codeRegional.style.color = 'red';
            erreurIndicatif.style.color = 'red';
            erreurIndicatif.innerHTML = 'Invalide. 450, 514 ou 819 seulement';
        event.preventDefault();
    }

    console.log(codeRegional.value);
}


// Bouton Paypal
// Render the PayPal button into #paypal-button-container
paypal.Buttons({

    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.01'
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }


}).render('#paypal-button-container');