//En JS hay 3 maneras de declarar una variable: var, let y const
//var: Forma antigua de declarar variable
//let: Forma moderna de declarar variable
//const: Declara una constante que no va a cambiar.

let nombre = "Fernando";
const edad = 29;

console.log("Nombre: ", nombre);
console.log("Edad: ", edad);

let titulo = "Star Wars";
const anio = 2069;
let esFavorable = true;
let rating;

console.log("Titulo: ",titulo,"Tipo: ", typeof titulo);
console.log("Año: ",anio)
console.log("Recomendación?: ",esFavorable)
console.log("Rating: ",rating)

let numeroTexto = "123";
let numero = Number(numeroTexto);
console.log(numero);