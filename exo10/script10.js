

let nombre1 = prompt("Entrez le premier nombre :");
let nombre2 = prompt("Entrez le deuxième nombre :");
nombre1 = parseFloat(nombre1);
nombre2 = parseFloat(nombre2);
if (nombre1 > nombre2) {
    alert("Le plus grand nombre est : " + nombre1);
} else if (nombre2 > nombre1) {
    alert("Le plus grand nombre est : " + nombre2);
} else {
    alert("Les deux nombres sont égaux : " + nombre1);
}
