const { randomInt } = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
 * Descubrir el número aleatorio
 *
 * Entradas: cualquier elemento.
 *  * El usuario tiene dos intentos.
 * Salida:
 *  * Si adivino el número se envía un mensaje de exito
 *  * Si se ingresa algun elemento no numerico se considera fallido el intento
 *
 * Ayudas:
 *  Para generar un número entero aleatorio existe randomInt(min, max) donde 'min' esta incluído y max no está incluído
 *
 */

console.log(`Bienvenido. Adivine el número. Está entre 1 y 10\n\n`);
