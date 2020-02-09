/**
 Exercise 5

 Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.
 */

var nb0 = 0;
var nb1 = 0;
for (var i=0;i<100;i++){

    document.write(nb + ' ');var nb = Math.floor(Math.random()*2);

    if(nb === 0){
        nb0+= 1;
    }
    else if(nb === 1){
        nb1+= 1;
    }

}
document.write('<br/>Le nombre de nombre 0 est' + ' ' + nb0 + ' ' + 'et le nombre de 1 est' + ' ' + nb1 + '<br/>');
