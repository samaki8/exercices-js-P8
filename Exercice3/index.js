// Créez votre fonction ici
export default function calculateAverage(tableau = []) {
    if (!Array.isArray(tableau)) {
        return "L'argument doit être un tableau";
    }

    if (tableau.length === 0) {
        return "No numbers to calculate average";
    }

    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== 'number') {
            tableau[i] = Number(tableau[i]);
        }
        if (isNaN(tableau[i])) {
            return "Invalid input: all elements must be numbers or convertible to numbers";
        }
        somme += tableau[i];
    }
    
    return somme / tableau.length;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average


  /* function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage([])); // retourne "No numbers to calculate average"
console.log(calculateAverage()); // retourne "No numbers to calculate average"
*/