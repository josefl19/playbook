// Objeto con métodos

const pet = {
    name: "Memo",
    // Funcion que se guarda como una propiedad
    sayHello: function() {
        console.log(`${this.name} te saluda`)
    }
}

console.log(pet)
pet.sayHello()