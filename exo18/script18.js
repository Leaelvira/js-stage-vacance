
// Demander le premier nombre
let nombre1 = prompt("Entrez le premier nombre :");
nombre1 = parseFloat(nombre1);

// Demander le deuxième nombre
let nombre2 = prompt("Entrez le deuxième nombre :");
nombre2 = parseFloat(nombre2);

// Calculer les opérations
let somme = nombre1 + nombre2;
let difference = nombre1 - nombre2;
let produit = nombre1 * nombre2;
let quotient = nombre1 / nombre2;

// Afficher les résultats sur la page
document.write("<h3>Résultats des opérations :</h3>");
document.write("La somme est : " + somme + "<br>");
document.write("La différence est : " + difference + "<br>");
document.write("Le produit est : " + produit + "<br>");
document.write("Le quotient est : " + quotient + "<br>");
