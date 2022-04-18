// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.excercises_completed = 0;
        this.excercises_todo = 99;
    }

    // SE puede acceder a los atributos de la clase
    get getExcercisesCompleted() {
        return this.excercises_completed
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExcercisesCompleted)