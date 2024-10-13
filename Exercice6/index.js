// Fonction pour ajouter un nombre ou un opérateur au display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  // Fonction pour calculer le résultat de l'expression
  function calculateResult() {
    const display = document.getElementById("display");
    try {
        // Vérifie si l'expression contient une division par zéro
        if (display.value.includes('/0')) {
            display.value = "Division by zero is not allowed";
        } else {
            // Utiliser eval pour évaluer l'expression saisie
            display.value = eval(display.value);
        }
    } catch (error) {
        // Afficher un message d'erreur si l'expression est invalide
        display.value = "Erreur";
    }
  }
  
  // Fonction pour effacer le display
  function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
  }