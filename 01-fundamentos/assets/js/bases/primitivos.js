let nombre = 'Juan'
console.log(nombre)


nombre = 'Parker'
console.log(nombre)

console.log(typeof nombre)

nombre = 123
console.log(typeof nombre)

let esMarvel = false //esto es booleano
console.log(typeof esMarvel)

let superPoder;//esto es undefined porque no tiene valor
console.log(typeof superPoder)

let soyNull = null
console.log(typeof soyNull) //esto es un objeto, pero es un error de javascript

let symbol1 = Symbol('a')
console.log(typeof symbol1)
let symbol2 = Symbol('a')
console.log(typeof symbol2) // Symbol es un tipo de dato primitivo, permite crear identificadores unicos

console.log(symbol1 === symbol2) //false, porque son identificadores unicos