//Primera forma de declarar una funcion
function saludar(nombre) {
  console.log('Hola ' + nombre)
}
saludar('Drixner')
console.log('__________________________')

//Segunda forma de declarar y llamar a una funcion

const saludar2 = function(ElNombre) {
  console.log('Hola ' + ElNombre)
}

saludar2('Rafael')
console.log('__________________________')

const apellido = (Apellido) => {
  console.log('Este es el Apellido: ' + Apellido)
}

apellido('Condor Tadeo')

const getAleatorio2 = () => Math.random()

console.log(getAleatorio2())
