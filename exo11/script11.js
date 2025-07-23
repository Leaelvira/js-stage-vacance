

// Demander l'année de naissance de l'utilisateur
let anneeNaissance = prompt("Entrez votre année de naissance :");

// Convertir en nombre
anneeNaissance = parseInt(anneeNaissance);

// Récupérer l'année actuelle automatiquement
let anneeActuelle = new Date().getFullYear();

// Calculer l'âge
let age = anneeActuelle - anneeNaissance;

// Afficher l'âge sur la page
document.write("Vous avez " + age + " ans.");