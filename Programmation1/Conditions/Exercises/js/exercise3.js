// NO 3
// 3.  Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

var nb1 = Number(prompt("Entrer un nombre"));
var nb2 = Number(prompt("Entrer un second nombre"));

if (nb1 && nb2 > 9){
    document.write(("BONJOUR !"))
}
else if (nb1 < 9 && nb2 < 9){
    document.write(("BONSOIR !"));
}