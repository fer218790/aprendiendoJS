//var es la forma más antigua declarar una variable. Además, funciona más como ámbito global o de función
var nombre = 'Fernando';
var nombre = 'añe';
//let es similar a var, pero su ámbito es más de bloque, aparte que es más seguro y recomendado
let apellido = 'Donayre';
//let apellido = 'Donayre Quispe';
//const se usa para declarar constantes que no cambian su valor
const pais = 'Perú';
//const pais = 'Bolivia';

alert('Bienvenido!\n ');
alert('Nombre: '+nombre);
alert('Apellido: '+apellido);
alert('País: '+pais);