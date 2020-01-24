/*
Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.
 */

var tabReponses = ["vrai","vrai","faux","faux","vrai","faux","vrai","faux","vrai","vrai"];
var tabQuestion = [];
var tabResultat = 0;

    for (var i=0;i<tabReponses.length;i++) {
        tabQuestion[i] = prompt("Vrai ou faux ?").toLowerCase();
        if (tabQuestion[i] === tabReponses[i]) {

            tabResultat++;
        }
    }
document.write(`Vous avez obtenue ${tabResultat}/10`);
//