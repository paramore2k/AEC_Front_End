// Exercise 5
// 5.  Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var nbTemp = Number(prompt("Quel température fait-t-il à l'extérieur ?"));

if (nbTemp > -40 && nbTemp < -10){
    document.write(("HAAAAAAAAAAAAAA!! IL fait froid !!!!"))
}
else{
    document.write(("Ahh!! Une belle journée à" + " " + nbTemp));
}