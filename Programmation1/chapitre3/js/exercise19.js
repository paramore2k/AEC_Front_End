/*
Faite afficher 2 4 6 8 10 sur 30 lignes
 */

compte = 2;
for (var i=1;i<=150;i++) {
    document.write(compte);
    compte+=2;
    if(compte === 12) {
        document.write('<br/>');
        compte=2;

    }
}