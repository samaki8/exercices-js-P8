// Créez votre fonction ici
export default function calculate(x, y, operator) {
    // Convertir x et y en nombres
    const numX = Number(x);
    const numY = Number(y);

    // Vérifier si la conversion a réussi
    if (isNaN(numX) || isNaN(numY)) {
        return "Invalid input";
    }

    switch (operator) {
        case '+':
            return numX + numY;
        case '-':
            return numX - numY;
        case '*':
            return numX * numY;
        case '/':
            if (numY === 0) {
                return "Division by zero is not allowed";
            }
            if (numX < numY) {
                return "Invalid operator";
            }
            return numX / numY;
        default:
            return "Invalid operator";
    }
}