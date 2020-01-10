/*
Créer un programme qui lis un nombre et affiche les chiffres de nombre dans les 2 sens
ex: 123
1
2
3
-
3
2
1

 */
var nb = prompt("Entrez un nombre").toString();

    const sorting2 =  nb.length-1;

    for (let i = 0; i <= sorting2; i++) {
        document.write(nb[i] + '<br/>');
    }
    document.write('<br/>');
    for (let j = sorting2; j > -1; j--) {
        document.write(nb[j] + '<br/>');
    }
