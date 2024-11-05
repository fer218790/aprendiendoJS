//Condicional básico:
let temperatura = 20;
if (temperatura>25){
    console.log("Hace calor!");
} else if (temperatura>=15) {
    console.log("El clima está templado");
} else {
    console.log("Hace frío");
}

//Operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje)