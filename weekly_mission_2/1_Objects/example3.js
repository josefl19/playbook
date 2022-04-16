// Creacion de un objeto con diferentes tipos de propiedades

const myObject3 = {
    name: "Jose",
    lastName: "Fujarte",
    age: 24,
    nicknames: [
        "Pepe",
        "Fuja",
        "Javi"
    ],
    pets: [
        "Pez",
        "Perro",
        "Hamster",
        "Tortuga",
    ],
    address: {
        zip_code: 38600,
        street: "Allende 101",
        state: "Guanajuato"
    }
}

console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])