// Exercici-1
// Crea un array amb el teu nom on cada posició correspongui a una lletra.
let name    = "Ignasi";
// W3Schools: Split a string into an array of substrings.
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
