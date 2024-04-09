let a = 22

if (a < 10) {
    console.log('A es mayor a 22')
} else {
    console.log('A es menor a 22')
}

// console.log('Fin de programa')
// console.log({ hoy })

const hoy = new Date()
let dia = hoy.getDay() // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado

console.log({ dia })

if (dia == 0) { // el triple igual compara el tipo de dato y el valor "===", el doble igual solo compara el valor "=="
    console.log('es Domingo')
}else if (dia == 1) {
    console.log('es Lunes')
}else if (dia == 2) {
    console.log('es Martes')}
else {
    console.log('No es Lunes, Martes o Domingo')
}

// Sin usar If Else, o Switch, unicamente objetos

dia = 2 // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'] // aqui se empieza desde el 0, ya que los arreglos empiezan desde el 0 y podemos usar ese valor para acceder a la posicion del

console.log(diasLetras[dia] || 'Dia no definido')

// console.log(diasLetras2[dia] || 'Dia no definido')


// dia de la semana