const tareas = []

const agregarTareas = (descripcion) => {
  tareas.push({
    descripcion: descripcion,
    completado: false
  })
}


const listarTareas = () => {
  console.log('Lista de Tareas:')
  tareas.forEach((tarea, index) => {
    const estado = tarea.completado ? '✅' : '🕓';
    console.log(`${index + 1}- ${tarea.descripcion} ${estado}`)
  })
}

const completarTareas = (indice) => {
  if (tareas[indice]) {
    tareas[indice].completado = true;
  } else {
    console.log('Tarea no encontrada')
  }
}

const listarTareasPendientes = () => {
  console.log('LISTA DE TAREAS PENDIENTES')
  const tareasPendientes = tareas.filter(tarea => !tarea.completado)

  tareasPendientes.forEach((tarea, index) => {
    console.log(`${index + 1}-${tarea.descripcion} 🕓`)
  })
}

const listarTareasRealizadas = () => {
  console.log('LISTA DE TAREAS REALIZADAS')
  const tareasRealizadas = tareas.filter(tarea => tarea.completado)

  tareasRealizadas.forEach((tarea, index) => {
    console.log(`${index + 1}-${tarea.descripcion} ✅`)
  })
}

agregarTareas('Barrer todo el segundo piso')
agregarTareas('Lavar los platos')
agregarTareas('Pasear al perro')


completarTareas(1)

listarTareas()


listarTareasPendientes()
listarTareasRealizadas()
console.log({ tareas })
