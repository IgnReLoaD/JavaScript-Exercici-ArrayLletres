// --- Exercici-1 ---------------------------------------------------------------

// Crea un array amb el teu nom on cada posició correspongui a una lletra.
let name    = "Ignasi";
// W3Schools: Split a string into an array of substrings. 
// Dins el parèntesi li podriem especificar num caracters a partir de posició.
let arrName = name.split('');
// Preprem un string com a missatge a mostrar per Pantalla.
let msgPant = "";

// Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.
for (charAt of arrName){
    console.log(charAt);
    msgPant += charAt + "<br>";
}

// accedim al DOM una sola vegada, sempre intentar de interactuar el minim possible
document.getElementById("mostrarDatos").innerHTML = msgPant;

// --- Exercici-2 ---------------------------------------------------------------

// Al bucle, que imprimeixi si la lletra és una vocal o consonant, o un número.
name2 = name + "2";
msgPant = "<br>Ara el mateix nom conté un número, quedant així: " + name2 + "<br>";

name2 = name2.toUpperCase(name2);
let arrNameNum = name2.split('');
console.log(arrNameNum);

const vocals = "AEIOU";
const consonants = "BCDFGHJKLMNPQRSTVWXYZ";

for (charAt of arrNameNum) {
    // is Not a Number
    if (isNaN(charAt)) {
        if (vocals.includes(charAt)){
            console.log("Trobada la vocal " + charAt);
            msgPant += "Trobada la vocal " + charAt + "<br>"
        } else if (consonants.includes(charAt)) {
            console.log("Trobada la consonant " + charAt);
            msgPant += "Trobada la consonant " + charAt + "<br>"
        }        
    } else {
        console.log("Trobat el número " + charAt);
        msgPant += "Trobat el número " + charAt + "<br>"
    }
}
document.getElementById("mostrarDatos2").innerHTML = msgPant;

// --- Exercici-3 ---------------------------------------------------------------

// Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen
