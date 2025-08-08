const palabraIngresada = prompt('Ingrese una palabra')

const letras = [...palabraIngresada]

const vocales = ['a', 'e', 'i', 'o', 'u']
let contadorVocales = 0

for (const letra of letras) {
  if (vocales.includes(letra.toLowerCase())) {
    contadorVocales++
  }
}

const construccionCasa = (moneda) => {
  console.log(`Esta es la moneda ps causas ${moneda}`)
}

console.log(`La cantidad de vocales que tiene ${palabraIngresada} es de ${contadorVocales} :)`)

console.log('Hola Mundo')
