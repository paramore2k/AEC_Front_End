// Exercise 21
// Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var calculImpot = Number(prompt("Quel est votre revenu annuel"));

if (calculImpot > 0 && calculImpot <= 7000) {
    montantImpot = (calculImpot * 16 / 100);
    document.write(`Le montant que vous devez verser en impôt est de ${montantImpot} $`);

} else if (calculImpot >= 7000 && calculImpot <= 14000) {
    montantImpot = (calculImpot - 1120) * 19.5 / 100;
    document.write(`Le montant que vous devez verser en impôt est de ${montantImpot} $`);

} else if (calculImpot >= 14000 && calculImpot <= 23000) {
    montantImpot = (calculImpot - 2485) * 21.5 / 100;
    document.write(`Le montant que vous devez verser en impôt est de ${montantImpot} $`);

} else if (calculImpot >= 23000 && calculImpot <= 50000) {
    montantImpot = (calculImpot - 4420) * 24.5 / 100;
    document.write(`Le montant que vous devez verser en impôt est de ${montantImpot} $`);
}
