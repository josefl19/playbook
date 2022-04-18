// Ejemplo 14: Uso de some
// Validara los elementos de la lista, y si alguno cumple con dicha validacion retorna true, de lo contrario false.

const bools = [true, true, false, true]

// Uso de some para ver si algun elemento es false
const someTrue = bools.some((b) => b === false)

console.log("Ejemplo 14: Algun elemento de la lista es false: " + someTrue)