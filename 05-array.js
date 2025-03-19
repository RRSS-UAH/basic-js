// Arreglos.

/*

Almacena un conjunto ordenado de elementos
Se separan por comas

*/
const pets = ["cat", "dog", "rabbit", "birds", "turtle"];

// Acceder a la primera mascota (cat)

let firstPet = pets[0];
console.log(`Primera mascota: ${firstPet === "cat" ? "Gato" : "Otro"}`);

// Acceder a la última:
let lastPet = pets[pets.length - 1];
console.log(`Ultima mascota: ${lastPet === "turtle" ? "Tortuga" : "Otro"}`);

// Conocer la cantidad de elementos de un arreglo
let amountArray = pets.length;
console.log(`Cantidad de mascotas: ${amountArray}`);

// Recorrer un arreglo, forma 1
for (let i = 0; i < pets.length; i++) {
  console.log(`La Mascota: ${i + 1} es ${pets[i]}`);
}

// Recorrer un arreglo, forma 2
for (let pet of pets) {
  console.log(`La mascota es: ${pet}`);
}

// Desestructuración de un arreglo
let [one, two, ...others] = [1, 2, 3, 4, 5];

console.log(`Primeros elementos: ${one} y ${two}`);
console.log(`Otros elementos: ${others}`);

console.log(`Mascotas originales: ${pets}`);
// Modificar un arreglo
pets[1] = "hamster";

console.log(`Mascotas con un elemento modificado: ${pets}`);

// Agregar elemento al final del arreglo
pets.push("fish");
console.log(`Después de push: ${pets}`);

// Agrega un elemento al inicio
pets.unshift("parrot");
console.log(`Después de unshift: ${pets}`);

// Elimina el último elemento
let removedLast = pets.pop();
console.log(`Eliminado del final: ${removedLast}, Mascotas: ${pets}`);

// Elimina el primer elemento
let removedFirst = pets.shift();
console.log(`Eliminado del inicio: ${removedFirst}, Mascotas: ${pets}`);

// Verificar si existe un elemento en un arreglo
let exists = pets.includes("cat");
console.log(`¿Existe 'cat' en el arreglo? ${exists ? "Sí" : "No"}`);

// Copiar un arreglo sin modificar el original
let petsCopy = [...pets];
console.log(`Copia del arreglo: ${petsCopy}`);
