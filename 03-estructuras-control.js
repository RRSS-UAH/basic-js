/**
 * Estructuras de control
 *
 * Permiten dirigir el flujo de ejecución de un programa según cierta condición o condiciones.
 *
 */

/**
 * if:
 *  Ejecuta un bloque de código si una condición es verdadera:
 */
let isActive = true;
if (isActive) {
  console.log("Entre al IF");
}

// '!' se utiliza para la negación
// && es un 'and' ambas condiciones deben ser verdaderas
// || es un 'or' si una de las dos condiciones es verdadera entonces es verdadera
// === se utiliza para la igualdad
// !== se utiliza para el distinto
// <= se utiliza para menor igual
// >= mayor o igual
// < menor
// > mayor
let isDesactive = false;
if (!isDesactive) {
  console.log("isDesactive es verdadero");
}

/**
 * else:
 *  Ejecuta un bloque de código si la condición del If es falsa
 */
let isClose = false;
if (isClose) {
  console.log("Entre al if, por lo que isClose es verdadero");
} else {
  console.log("Entre al ELSE por lo que isClose es falso");
}

/**
 * else if:
 *  Permite agregar más condiciones. (no hay un limite)
 */

if (isClose) {
  console.log("isClose es verdadero");
} else if (isClose && isActive) {
  console.log("isClose es verdadero y isActive también");
} else {
  console.log("Ambas son falsas");
}

/**
 * switch: Ejecuta uno de los muchos bloques de código dependiendo del valor de una expresión.
 */

let five = 5;
switch (five) {
  case 1:
    console.log("es igual a 1");
    break; // Es importante agregar el break al terminar un caso
  case 2:
  case 3:
    console.log("es igual a 2 o 3");
    break;
  case 5:
    console.log("Es 5");
    break;
  default:
    console.log("Es 4 o cualquier otro valor");
}

/**
 * operador ternario: if + else
 */

let six = 6;

console.log(six === 6 ? true : false);

// Se puede asignar a una variable
let isSix = six === 6 ? true : false;
console.log(isSix);
