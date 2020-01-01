/*
Faites afficher 10 8 6 4 2 0 sur 12 lignes
 */

var compte = 10;
for (var i=0;i<=71;i++) {
    document.write(compte + ' ');
    compte-=2;
    if(compte === -2) {
        document.write('<br/>');
        compte=10;
    }
}