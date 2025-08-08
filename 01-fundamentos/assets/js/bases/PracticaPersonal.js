const estudiantes = []

const agregarEstudiante = (nombre, apellido, notas) => {
  estudiantes.push({ nombre, apellido, notas })
}

const calcularPromedio = (notas) => {
  let suma = 0
  for (let nota of notas) {
    suma += nota
  }

  return suma / notas.length
}

const MostrarPromedios = () => {
  for (let estudiante of estudiantes) {
    const promedio = calcularPromedio(estudiante.notas)
    // console.log(estudiante.nombre + ' ' + estudiante.apellido + ' Tiene un promedio de ' + promedio.toFixed(2))
    console.log(` Estudiante: ${estudiante.nombre} ${estudiante.apellido} tiene un promedio de ${promedio.toFixed(2)}`)
  }
}

const mostrarEstudianteConMejorPromedio = () => {
  let mejorPromedio = 0;
  let mejorEstudiante = '';

  for (let estudiante of estudiantes) {
    const promedio = calcularPromedio(estudiante.notas)
    if (promedio > mejorPromedio) {
      mejorPromedio = promedio
      mejorEstudiante = estudiante.nombre
    }
  }
  console.log(`El mejor promedio es de ${mejorEstudiante} con ${mejorPromedio.toFixed(2)}`)
}

agregarEstudiante('Pedro', 'Velasco', [13, 11, 18])
agregarEstudiante('Vasco', 'Condor', [17, 18, 20])
agregarEstudiante('Drixner', 'Condor', [19, 19, 18])

MostrarPromedios()
mostrarEstudianteConMejorPromedio()
