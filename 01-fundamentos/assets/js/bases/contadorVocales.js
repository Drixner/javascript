const palabraIngresada = prompt('Ingrese una palabra')

const letras = [...palabraIngresada]

const vocales = ['a', 'e', 'i', 'o', 'u']
let contadorVocales = 0

for (const letra of letras) {
  if (vocales.includes(letra.toLowerCase())) {
    contadorVocales++
  }
}

console.log(`La cantidad de vocales que tiene ${palabraIngresada} es de ${contadorVocales} :)`)