const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Nombre (propiedad name) de cada explorer");
explorers.forEach(exp => console.log(exp.name));
console.log("---------------");

// 2. Imprime el stack de cada explorer, usa FOR EACH
console.log("Stack de cada explorer");
explorers.forEach(exp => console.log(exp.stack));
console.log("---------------");

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Lista de lista de stacks de cada explorer");
const stacks = explorers.map((exp) => exp.stack);
console.log(stacks);
console.log("---------------");

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Lista de explorers que tengan en su stack js");
const stackjs = explorers.filter((exp) => exp.stack.includes('js'));
console.log(stackjs);
console.log("---------------");

// 5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Primer explorer que sea de la CDMX");
const cdmx = explorers.find((exp) => exp.city == 'CDMX');
console.log(cdmx);
console.log("---------------");

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Suma de todos los exercises_completed");
const suma = explorers.reduce((acc, exp) => acc + exp.exercises_completed, 0);
console.log(suma);
console.log("---------------");

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("Almenos un explorer tiene exercisesFinished en frontend como true");
const someFinishedFronted = explorers.some((exp) => exp.missions.frontend.isFinished == true);
console.log(someFinishedFronted);
console.log("---------------");

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("Todos los explorers tienen la propiedad isFinished del onboarding en true");
const everyFinishedOnboarding = explorers.every((exp) => exp.missions.onboarding.isFinished == true);
console.log(everyFinishedOnboarding);
console.log("---------------");