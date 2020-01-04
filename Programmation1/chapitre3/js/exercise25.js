/*
Trouver les nombres parfaits
 */
document.write(`<html>
<body>
    <br>
    <h1>Vérification d'un nombre parfait</h1>
    Entrez un nombre: <input type="text" name="n" id = "N"/>
    <hr>
    <br>
    <button onClick="nombre()">VÉRIFIER</button>
    <br>
    <p id="reponse"/>
</body>
</html>`);

function nombre(){
var nombre_parfait = Number(document.getElementById("N").value);
var nb1 = 0;

    for (var i =1;i<=nombre_parfait/2;i++){

        if(nombre_parfait%i === 0) {
            nb1 += i;
        }
    }
    if (nb1 === nombre_parfait && nb1 !== 0){

        document.getElementById("reponse").innerHTML = "C'est un nombre parfait";
    }
    else {
        document.getElementById("reponse").innerHTML = "Ce n'est pas un nombre parfait";
    }
}
