// metodos más utilizados en los arreglos

// map -> recorre cada elemento de un arreglo, y lo transforma

let newArray = [1, 2, 3, 4, 5];
let arrayUp100 = newArray.map(function (element) {
  return element * 100;
});

console.log(newArray);
console.log(arrayUp100);

// filter -> // Recibe un predicado, si es verdadero se mantiene, si es falso se elimina

let arrayUnder3 = newArray.filter(function (element) {
  if (element < 3) return true;
  else return false;
});
console.log(`Menores que 3: ${arrayUnder3}`)

// find -> Conocer si existe un elemento en un arreglo
let exist3 = newArray.find(function (element) {
  if (element === 3) return true;
  else return false;
});
console.log(`Existe el 3: ${exist3}`)

// findIndex
let existIndex3 = newArray.findIndex(function (element) {
  if (element === 3) return true;
  else return false;
});
console.log(`El elemento se encuentra en: ${existIndex3}`)

// Reduciendo los arreglos a valores simples
/**
 * a -> Mantiene el resultado acumulado durante toda la ejecución
 * v -> elemento del array partiendo del 0
 * 0 -> Acumulador, parte en 0
 */
const mySum = newArray.reduce(function (a, v) {
  return a + v;
}, 0);


console.log(mySum)


// Admitir la amplificación para cualquier array numerico
function upElement(element, valueToUp){
  return element * valueToUp;
}

function upArray(array, value = 100){
  return array.map((element) => upElement(element, value))
}


let upArray200 = upArray(newArray, 200);
console.log(upArray200)