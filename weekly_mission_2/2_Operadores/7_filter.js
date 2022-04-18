// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

const countriesLand = countries.filter((country) => country.includes('land'))

console.log('Ejemplo 7: Filtrar paises que incluyan land')
console.log(countriesLand)

const countriesI = countries.filter((country) => country.endsWith('i'))

console.log('Ejemplo 7: Paises que terminan en I')
console.log(countriesI)

const countriesD = countries.filter((country) => country.endsWith('d'))

console.log('Ejemplo 7: Paises que terminan en D')
console.log(countriesD)