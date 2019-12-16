/**Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))
 *
 */

var celsius = 5/9*(-40-32);

for (var i = celsius;i <= 40;i+=5){
    console.log(i);
    document.write(i + ' ' + "celcius" + '<br/>');
}