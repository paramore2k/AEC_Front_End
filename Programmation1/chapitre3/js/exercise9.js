/*
* Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.
* (Celsius = 5/9(fahrenheit-32))
 */

var celsius = 5/9*(10-32);

for (var i = celsius;i <= 20;i++){
    document.write(i + ' ' + "celcius" + '<br/>');
}