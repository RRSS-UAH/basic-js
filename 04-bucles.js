/**
 * Bucles: Ejecutar código repetitivo bajo ciertas condiciones.
 *
 */

/**
 * for: Se ejecuta determinadas veces
 */
console.log("\nBucle for: ");
let numbers = "";
for (let i = 0; i < 10; i++) {
  numbers += i;
}
console.log("Los numeros son: ", numbers, "\n");

/**
 * while: Se ejecuta mientra se de cumpla una condición
 */
console.log("\nBucle while: ");
let i = 0;
numbers = "";
while (i < 10) {
  numbers += i;
  i++;
}
console.log("Los numeros son: ", numbers, "\n");

/**
 * do while: Se ejecuta mientrase de cumpla una condición, y asegura una primera ejecución
 */

i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// continue y break;
console.log("\nUtilizando continue\n");

for (let i = 0; i < 3; i++) {
  if (i === 1) {
    // se termina la iteracción cuando i === 1, es decir, no se ejecuta el console.log de abajo
    continue;
  }

  console.log("elemento: ", i);
}

console.log("\nUtilizando break\n");
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    // se terminan las iteracciones
    break;
  }

  console.log("elemento: ", i);
}
