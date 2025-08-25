
/*
// Ejemplo con if-else
let edad = -3;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad < 0) {
    console.log("Edad incorrecta");
} else {
    console.log("Eres menor de edad");
}

// Ejemplo con switch (no se pueden usar condiciones, solo valores)
switch (true) {
    case (edad >= 18):
        console.log("Eres mayor de edad");
        break;
    case (edad < 0):
        console.log("Edad incorrecta");
        break;
    default:
        console.log("Eres menor de edad");
        break;
}
*/
/*
// Ejemplo de for
for (let i = 0; i < 3; i++) {
    console.log("Esta es la iteracion #: " + i);
}
*/
/*
// Ejemplo de for...of para recorrer un array
let frutas = ["manzana", "pera", "uva"];
for (let fruta of frutas) {
    console.log("La fruta es: " + fruta);
}


let frutasMayusculas.map(fruta=>fruta.toUpperCase);
console.log(frutasMayusculas);

*/

let numeros = [1, 2, 3, 4, 5, 6, 7];

// me devuelve un nuevo array que cumpla con una condicion
let pares = numeros.filter(num => num % 2 === 0);
//console.log(pares);

//soo me devuelve el primer elemento que cumpla con la condicion
let primerPar = numeros.find(num => num % 2 === 0);
//console.log(primerPar);

let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
//console.log(suma);


let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

//frutas.sort();

/*
frutas.sort((a,b) => a-b)
console.log(frutas);

t numerosDesordenados = [10, 8, 2, 1, 12, 15];
t ascendente = numerosDesordenados.sort();
t descente= numerosDesordenados.sort((a,b) => a-b);
//console.log(descente);

*/
/*
const persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 25,
    saludar: function(){
        console.log("hola, soy: " + this.nombre);
    }
}
*/
/*
console.log(persona);
console.log(persona.edad);
console.log(persona.saludar());
*/

const libros = [
    {titulo: "cien años de soledad", autor: "GGM"},
    {titulo: "el amor en los tiempos", autor: "pinocho"},
    {titulo: "de la tierra  a la luna", autor: "julio verne"},
    {titulo: "don quijote", autor: "cc"}
]

let libroGGM = libros.filter(libro => libro.autor === "GGM");
console.log(libroGGM);

libros.sort((a,b)=>a.titulo-b.titulo);
console.log(libros);
