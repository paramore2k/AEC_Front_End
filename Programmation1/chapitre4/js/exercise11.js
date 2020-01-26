
var tabRecensement = [0,0,0,0,0,0,0,0,0,0,0];
var nbEnfants = 0;

while (nbEnfants !== 666){
    nbEnfants = Number(prompt("Combien avez-vous d'enfants ?"));
    if(nbEnfants>0 && nbEnfants <30){
        if(nbEnfants<10){
            tabRecensement[nbEnfants]++
        }
        else{
            tabRecensement[10]++;
        }
    }

}

for (var i=0;i<=10;i++){
    if (i!== 10){
        document.write(`Nombre de familles avec ${i} enfants = ${tabRecensement[i]} <br/>`)
    }
    else{
        document.write(`Nombre de familles avec 10 enfants = ${tabRecensement[10]} <br/>`)
    }
}