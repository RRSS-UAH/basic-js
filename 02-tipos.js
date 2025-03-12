/**
 * Tipos de datos básicos en Javascript:
 *
 * 1. number
 * 2. null
 * 3. undefined
 * 4. string
 * 5. bool
 *
 * Para conocer el tipo de dato de una variable podemos utilizar "typeof"
 */

/**
 * Para conocer el tipo de dato de un objeto existe "typeof"
 */

/**
 * 1. Number: Representa valores numéricos, incluyendo enteros y decimales.
 *
 * Observaciones:
 * * Puede perder precisión con decimales grandes (ej. 0.1 + 0.2 !== 0.3).
 *
 */
let num = 42;

/**
 * 2. null: Representa la ausencia de valor.
 *
 * Observaciones:
 * * Útil para indicar que una variable no tiene valor asignado intencionalmente.
 * * Puede confundirse con undefined, y typeof null devuelve "object" (error histórico en JS).
 */

let empty = null;

/**
 * 3. undefined: Variable declarada pero sin valor asignado
 * * Ventajas: Es diferente a null porque no tiene ningún valor
 * * Desventajas: Puede generar errores difíciles de depurar si no se maneja correctamente.
 */
let notDefined;

/**
 * 4. string: Representa texto, puede declararse con comillas simples, dobles o backticks ("", '', ``).
 */
let text = "Hola mundo!";

/**
 * 5. bool: Representa valores de verdad (verdadero o falso)
 */
let isActive = true;

console.log(typeof num);
console.log(typeof empty);
console.log(typeof notDefined);
console.log(typeof text);
console.log(typeof isActive);

/**
 * Otros tipos:
 * 1. Object
 * 2. Array
 * 3. Date
 */

/**
 * 1. Object: Colección de propiedades "clave", "valor"
 *
 */
let person = { name: "Juan", age: 30 };

/**
 * 2. Array: (subtipo de Object): Representa una lista de elementos.
 *
 * Observación:
 * si utilizadmos typof devuelve object
 * para conocer si una variable es un array existe 'Array.isArray(array)'
 */
let numbers = [1, 2, 3, 4, 5, 6];

/**
 * 3. Date: Representa las fechas
 */
let now = new Date();

console.log(person instanceof Object);
console.log(Array.isArray(numbers));
console.log(now instanceof Date);
