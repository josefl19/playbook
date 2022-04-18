// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*
Arrow function con retorno explicito
const modifiedArray = arr.map((element, index) => element)
*/

const nums = [1, 2, 3, 4, 5, 6];
const numsSquare = nums.map(function(num) { return num * num});

// Con uso de funcion de flecha
const numsSquare2 = nums.map((num) => num * num);

console.log("Ejemplo 4: Imprimiendo lista de elementos al cuadrado");
console.log(numsSquare);
console.log(numsSquare2);