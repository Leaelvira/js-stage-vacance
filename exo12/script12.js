

// Demander la température corporelle de l'utilisateur
let temperature = prompt("Quelle est votre température corporelle (en °C) ?");

// Convertir en nombre
temperature = parseFloat(temperature);

// Vérifier si la température est supérieure à 37
if (temperature > 37) {
    alert("Vous avez de la fièvre.");
} else {
    alert("Vous êtes en bonne santé.");
}
