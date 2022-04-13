export default class Pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Mi ${this.name} te saluda!`)
    }
}