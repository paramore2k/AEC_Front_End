/*
Faites affichier 12345678910 sur 10 lignes
 */

compte = 1;
for (var i=2;i<=91;i++) {
    document.write(compte);
    compte++;
        if(compte === 10) {
            document.write('<br/>');
            compte=1;
        }
}