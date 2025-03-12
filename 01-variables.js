/*
 * Variables
 * Para ejecutar el código nos posicionamos en la terminal en la misma carpeta que se encuentra este archivo
 * Escribimos node ./01-variables.js
 *
 */

/* Comentarios multilinea */
// Comentarios de una línea

/**
 *  Para ver salidas por consola podemos utilizar
 *  console.log()
 *
 *  Ejemplo:
 *  console.log("Salida....")
 */

/**
 * var: Forma antigua de declarar variables
 *
 * NO se recomienda utilizar, ya que no respeta un bloque de código.
 */
var ladosTriangulo = 3;

/**
 * let: Sustituto de var
 *
 * * Permite el cambio de valor
 */
let carasFigura = 6;
console.log("Caras figura inicial: " + carasFigura);

carasFigura = 3;

console.log("Caras figura después de cambiar el valor: " + carasFigura);
carasFigura--;
console.log("Caras figura después de restar '1': " + carasFigura);
carasFigura++;
console.log("Caras figura después de agregar '1': " + carasFigura);

carasFigura += 2;
console.log("Caras figura después de agregar '2': " + carasFigura);

/**
 * const: Crear una constante
 *
 * * No se puede volver a cambiar su valor
 */
const carasCubo = 6;
