

// Demander le nom de l'utilisateur
let nom = prompt("Quel est ton nom ?");

// Demander l'âge de l'utilisateur
let age = prompt("Quel est ton âge ?");

// Convertir l'âge en nombre
age = parseInt(age);

// Afficher un message personnalisé en fonction de l'âge
if (age >= 18) {
    alert("Bonjour " + nom + ", vous êtes majeur.");
} else {
    alert("Bonjour " + nom + ", vous êtes mineur.");
}
