/*
Faites afficher [0,0][0,1][0,2]
 */

var compte2 = 0;
var compte = 0;
for (var i=0;i<=23;i++) {
    document.write(`[${compte2},${compte}] `);
    compte++;
    if(compte > 5) {
        compte2++;
        document.write('<br/>');
        compte=0;
    }
}