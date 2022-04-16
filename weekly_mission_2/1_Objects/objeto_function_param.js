// Objeto con métodos que recibe parámetros

const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} saluda a ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con funciones parametrizadas")
myPet.sayHelloToMyPet('Gams')
