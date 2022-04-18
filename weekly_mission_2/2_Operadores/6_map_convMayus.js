// Ejemplo 6: Uso de map para convertir todos parte de los nombres de una lista a mayúsculas

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string (3)
)

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)