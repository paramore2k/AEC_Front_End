// TODO

// Programmation d'un convertisseur Farnenheit vers degré celcius et degré celcius vers farenheit

// Formule de conversion F vers C : ( °F − 32) × 5/9 =  °C
// Formule de conversion C vers F : ( °C × 9/5) + 32 =  °F


$('#calculc').bind('keyup', function(){
    $('#farenheit').appendTo('#farenheit').html($(this).val()*9/5+32);
});
