// Ejemplo 3: Instanciar un objeto con atributos

class Student {
    // Constructor para instanciar un objeto y asignar atributos, this ayuda a este proposito
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
}

// Crear objeto de la clase Student (instanciación)
const joseStudent = new Student("Jose", 24, ['NodeJs', 'Javascript', 'Python'])
console.log("Ejemplo 3: Instanciar un obejto con atributos")
console.log(joseStudent)