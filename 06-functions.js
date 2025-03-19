// Funciones

/**
 *
 * @param {Array<number>} elements
 * @returns {number | Array<elements>}
 */
function minArray(elements) {
  let min;
  if (!Array.isArray(elements) || elements.length < 1) {
    return elements;
  }

  min = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (min > elements[i]) {
      min = elements[i];
    }
  }

  return min;
}

// Llamar a una función

let elements = [1, 2, 3, 4, -7, 5, 6, 0];
let result = minArray(elements);

console.log(`El minimo es: ${result}`);

// Las variables pueden guardar funciones
let minFn = minArray;

console.log(`${minFn(elements)}`);

// las podemos escribir en forma de flecha
const minArrayFn = (elements) => {
  let min;
  if (!Array.isArray(elements) || elements.length < 1) {
    return elements;
  }

  min = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (min > elements[i]) {
      min = elements[i];
    }
  }

  return min;
};

// Las podemos simplificar (sin utilizar las llaves)

const equal21 = (value) => value === 21;
console.log(equal21(21) ? "Es igual" : "No es igual");

// las funciones pueden no tener nombre
(function () {
  console.log("No tengo nombre");
})(); // el segundo parentesis invoca a la función

(() => {
  console.log("yo tampoco tengo nombre");
})();
