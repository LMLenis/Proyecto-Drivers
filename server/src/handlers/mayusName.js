//Esta funcion toma un nombre y lo estandariza bajo el formato Nombre, la primera en mayuscula y
//las otras letras en minusculas
const mayusName = (name) => {

let primerletra = name.charAt(0); // sacamos la primera letra y la pasamos a mayusculas
let mayuscula = primerletra.toUpperCase();
let restoletras = name.slice(1); // tomamos el resto y la pasamos a minusculas
let minusculas = restoletras.toLowerCase();
const newname = mayuscula.concat(minusculas); //concatenamos las dos partes de name

return newname

}

module.exports = mayusName;