let listaTareas = [
  {
    id: 1,
    titulo: 'Aprender JavaScript',
    prioridad: 'Alta', // Puede ser: "Alta", "Media", "Baja"
    completada: false,
  },
]

let tabla_tareas = document.getElementById('tabla_tareas')

function listarTareas(arreglo) {
  let tareas = arreglo ? arreglo : listaTareas
  tabla_tareas.innerHTML = ''

  if (tareas.length === 0) {
    tabla_tareas.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No hay tareas para mostrar</td></tr>'
    return
  }

  tareas.forEach((tarea) => {
    let badgeEstado = tarea.completada
      ? '<span class="badge bg-success">Completada</span>'
      : '<span class="badge bg-danger">Pendiente</span>'

    let fila = `<tr><td>${tarea.id}</td><td>${tarea.titulo}</td><td>${tarea.prioridad}</td><td>${badgeEstado}</td></tr>`
    tabla_tareas.innerHTML += fila
  })
}

function agregarTarea() {
  let inputNumero = document.getElementById('numero_tarea')
  let inputTitulo = document.getElementById('titulo_tarea')
  let inputPrioridad = document.getElementById('prioridad_tarea')

  let numero_tarea = parseInt(inputNumero.value)
  let titulo_tarea = inputTitulo.value.trim()
  let prioridad_tarea = inputPrioridad.value

  if (isNaN(numero_tarea) || numero_tarea <= 0) {
    alert('Ingresa un numero de tarea valido')
    return
  }

  if (titulo_tarea === '') {
    alert('Ingresa una descripcion para la tarea')
    return
  }

  let yaExiste = listaTareas.some((t) => t.id === numero_tarea)
  if (yaExiste) {
    alert('Ya existe una tarea con ese numero')
    return
  }

  listaTareas = [
    ...listaTareas,
    {
      id: numero_tarea,
      titulo: titulo_tarea,
      prioridad: prioridad_tarea,
      completada: false,
    },
  ]

  inputNumero.value = ''
  inputTitulo.value = ''
  listarTareas()
}

function completarTarea() {
  let inputCodigo = document.getElementById('codigo_tarea')
  let codigo = parseInt(inputCodigo.value)

  if (isNaN(codigo)) {
    alert('Ingresa el id de la tarea que deseas completar')
    return
  }

  let encontrada = false
  listaTareas = listaTareas.map((tarea) => {
    if (tarea.id === codigo) {
      encontrada = true
      return { ...tarea, completada: true }
    }
    return tarea
  })

  if (!encontrada) {
    alert('No se encontro ninguna tarea con ese id')
    return
  }

  inputCodigo.value = ''
  listarTareas()
}

function cambiarPrioridad() {
  let inputCodigo = document.getElementById('codigo_tarea')
  let codigo = parseInt(inputCodigo.value)
  let nuevaPrioridad = document.getElementById('nueva_prioridad').value

  if (isNaN(codigo)) {
    alert('Ingresa el id de la tarea a modificar')
    return
  }

  let encontrada = false
  listaTareas = listaTareas.map((tarea) => {
    if (tarea.id === codigo) {
      encontrada = true
      return { ...tarea, prioridad: nuevaPrioridad }
    }
    return tarea
  })

  if (!encontrada) {
    alert('No se encontro ninguna tarea con ese id')
    return
  }

  inputCodigo.value = ''
  listarTareas()
}

function filtrarPendientes() {
  let pendientes = listaTareas.filter((tarea) => tarea.completada === false)
  listarTareas(pendientes)
}

function filtrarPriridad() {
  let prioridad = document.getElementById('opcionPrioridad').value
  if (prioridad === 'Todas' || prioridad === '') {
    listarTareas(listaTareas)
    return
  }
  let filtradas = listaTareas.filter((tarea) => tarea.prioridad === prioridad)
  listarTareas(filtradas)
}

function mostrarTodas() {
  document.getElementById('opcionPrioridad').value = 'Todas'
  listarTareas(listaTareas)
}

listarTareas()
