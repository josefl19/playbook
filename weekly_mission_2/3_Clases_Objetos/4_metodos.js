// Ejemplo 4: Métodos en los objetos

class Repository {
    constructor(name, author, language, stars) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.stars = stars;
    }

    getInfo() {     // Función que se ejecuta un objeto instanciado de la clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository('Launch X', 'josefl19', 'JS', 99)
console.log(myRepo.getInfo())