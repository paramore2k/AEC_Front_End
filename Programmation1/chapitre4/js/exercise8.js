/*
Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.
 */

var nomEleve = [];
var noteEleve = [];
var moyNote;

for (var i=0;i<5;i++){
    nomEleve[i] = (prompt('Veuillez entrer le nom'));
    noteEleve[i] = (Number(prompt("Veuillez entrer la note de l'élève")));
    moyNote = (noteEleve[0]+noteEleve[1]+noteEleve[2]+noteEleve[3]+noteEleve[4])/5;

    }
for(i=0;i<5;i++) {
    if (noteEleve[i] > moyNote) {
        document.write(`<ul><li>${nomEleve[i]} -> ${noteEleve[i]}</li></ul>`);
    }
}
console.log(moyNote);
console.log(nomEleve);
console.log(noteEleve);