function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput');
    const decimalValue = decimalInput.value.trim();
    const binaryResult = document.getElementById('binaryResult');

    // Vérifier si l'entrée est vide ou non numérique
    if (decimalValue === '' || !/^\d+$/.test(decimalValue)) {
        binaryResult.textContent = '';
        return;
    }

    const number = parseInt(decimalValue, 10);

    // Gérer le cas spécial de 0
    if (number === 0) {
        binaryResult.textContent = "Résultat binaire : 0";
        return;
    }

    let binaire = "";
    let tempNumber = number;

    while (tempNumber > 0) {
        binaire = (tempNumber % 2) + binaire;
        tempNumber = Math.floor(tempNumber / 2);
    }

    binaryResult.textContent = `Résultat binaire : ${binaire}`;
}