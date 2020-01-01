/*
Faites afficher 1 3 5 7 9 11 sur 13 lignes
 */

var compte = 1;
for (var i=0;i<=77;i++) {
    document.write(compte + ' ');
    compte+=2;
    if(compte === 13) {
        document.write('<br/>');
        compte=1;
    }
}