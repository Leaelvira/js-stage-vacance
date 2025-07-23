

// Demander à l'utilisateur un nombre
let nombre = prompt("Entrez un nombre :");

// Convertir en nombre
nombre = parseInt(nombre);

// Afficher tous les nombres pairs entre 1 et ce nombre
document.write("<h3>Nombres pairs entre 1 et " + nombre + " :</h3>");
for (let i = 1; i <= nombre; i++) {
    if (i % 2 === 0) {
        document.write(i + "<br>");
    }
}
