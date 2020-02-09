/*
Utilisez une variable nommée nb et 2 boucles for imbriquées pour produire le résultat suivant à l’aide  d’un document.write.
 */
let nb = 0;
for (i=0;i<1000;i+=5){
    document.write(i + ' ');
    nb++;
    for (j=nb;j<=100;j++){
       if (nb === 20){
           document.write('<br/>');
           nb = 0;
       }
    }
}