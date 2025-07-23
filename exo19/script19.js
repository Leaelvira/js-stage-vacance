


// Demander à l'utilisateur un nombre
let nombre = prompt("Entrez un nombre pour afficher sa table de multiplication :");

document.write("<h3>Table de multiplication de " + nombre + " :</h3>");

for (let i = 1; i <= 10; i++) {
    document.write(nombre + " x " + i + " = " + (nombre * i) + "<br>");
}

