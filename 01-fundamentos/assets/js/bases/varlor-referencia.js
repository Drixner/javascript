let a = 10
let b = 20
a = 30

console.log({ a, b })

let juan = { nombre: 'Juan' }
let ana = { ...juan } // esto significa que se crea un nuevo objeto con las propiedades del objeto, y los "..." significa que se copian las propiedades del objeto "juan usado simpre y cuando dentro de llaves
ana.nombre = 'Ana'

console.log({ juan, ana })

const cambiaNombre = (persona) => { // operador spread que significa que se copian las propiedades del objeto
  persona.nombre = 'Tony'
  return persona
}

let peter = { nombre: 'Peter' }
let tony = cambiaNombre(peter)

console.log({ peter, tony })


//Arreglos

const frutas = ['Manzana', 'Pera', 'Piña']

console.time('slice') // estos sirve para medir el tiempo de ejecucion
const otrasFrutas2 = frutas.slice()
console.timeEnd('slice')

console.time('spread') // estos sirve para medir el tiempo de ejecucion
const otrasFrutas = [...frutas]
console.timeEnd('spread')

otrasFrutas.push('Mango', 'Sandia')


console.table({ frutas, otrasFrutas })

// en javascrip las referencias a los objetos son modificables, es decir puede copiar un objeto y quere modificar su valores, pero siempre afectara el objeto original, para evitar esto es necesario romper esta referencia, esto se logrando con varios metodo, una de ellas es usando
// '{...<nombre del objeto>}'


