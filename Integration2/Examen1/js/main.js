/**
 * Créé par David Champagne
 * 2020/05/20
 *
 */
// Validation du formulaire

var codeRegional = document.getElementById('telephone');
var form = document.querySelector('form');
function validerFormulaire(){

    if (codeRegional === '450' || codeRegional === '514' || codeRegional === '819'){
        return true;
    }
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);

})


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