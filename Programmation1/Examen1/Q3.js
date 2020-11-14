/* Question 3

Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.

Le prix de base de la Pizza au fromage est de 10$.

Si on veut des légumes, il faut ajouter 5$ au prix initial.
Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
Si on veut de la sauce, il faut ajouter 1$ par personnes.

Le TPS s’élève à 5% du prix sans les taxes.
Le TVQ s’élève à 9,975% du prix sans les taxes.

Donc, taxes = 14,975%

Produisez une facture qui résume l’achat, le prix avant et après les taxes.

 */
var prixPizza = 10;
var resumePizza = "Voici donc le prix pour une grande pizza" + "<ul>";


    var ajoutLegumes = prompt("Désirez-vous ajouter des légumes à votre pizza ? * Oui ou Non *").toLowerCase();
    if (ajoutLegumes === "oui") {
        resumePizza += "<li>avec des légumes</li>";
        prixPizza += 5;
    }
    var ajoutViande = prompt("Désirez-vous ajouter du pepperonni à votre pizza ? * Oui ou Non*").toLowerCase();
    if (ajoutViande === "oui") {
        resumePizza += "<li>avec du pepperoni</li>";
        prixPizza += 8;
    }
    var ajoutSauce = prompt("Désirez-vous ajouter de la sauce à votre pizza ? * Oui ou Non*").toLowerCase();
    if (ajoutSauce === "oui") {
        do {
            nbPersonnes = Number(prompt("Combien de personnes êtes-vous ?"));
        }
        while (nbPersonnes >= 1);
        resumePizza += `<li>avec de la sauce (pour ${nbPersonnes} personne(s))</li>`;
        prixPizza += nbPersonnes;
    }
    resumePizza +="</ul>"
    prixAvecTx = prixPizza*14.975/100+prixPizza;
    prixAvantTx = prixPizza;
    document.write(`${resumePizza} Prix: <b>${prixAvantTx}$</b> (avant taxes), pour un total de <b>${prixAvecTx}$</b>(avec taxes)`);

