// Exercise 14
// 14. Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

let num1 = Number(prompt("Entrer un nombre au hasard"))
let num2 = Number(prompt("Entrez un second nombre au hasard"));
let num3 = Number(prompt("Entrez un troisième nombre au hasard"));

// Version Math.min & Math.max
let pluspetitMath = Math.min(num1,num2,num3);
let plusgrandMin = Math.max(num1,num2,num3);
// document.write(`Le plus petit des nombres est ${pluspetit} et le plus grande est ${plusgrand}`);

// Version if else
// Trouver le plus grand nombre

    if (num1 > num2 && num1>num3) {
            var plusgrand = num1;
        }
    else if(num2>num1 && num2>num3) {
        var plusgrand = num2;
    }
    else if(num3>num1 && num3>num1) {
        var plusgrand = num3;
    }

   if (num1<num2 && num1<num3){
        var pluspetit = num1;
    }
    else if (num2 < num3 && num2 < num1) {
        var pluspetit = num2;
    }
     else if (num3 < num1 && num3 < num2) {
         var pluspetit = num3;
        }
    if (num1 === num2 && num2 === num3 || num1 === num2 || num2 === num3 || num3 === num1){
        document.write(`Vous devez écrire 3 nombres différents`);
   }
    else{
        document.write(`Le plus petit nombre est ${pluspetit} et le plus grand est ${plusgrand}`);
    }




