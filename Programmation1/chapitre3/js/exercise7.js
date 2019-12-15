/**
 Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
 Comptez et affichez le nombre de mots entrés avant le mot patate.
*/


let passwd = "";
let passwd2 = "";
let res = "";
var i = 0;
do {
    passwd = prompt("Entrez le mot de passe");
    if (passwd !== "patate") {
        passwd2 += '<ul><li>' + passwd + '</li></ul>';
        i++;
    }
    if (passwd === "patate") {
        var str = passwd;
        res = str.replace("patate", ".");
    }


}
while (passwd !== "patate");
document.write("Il y eu" + ' ' + i + ' ' + "mots entrés avant le mot patate:" + '<br/>' + passwd2);



