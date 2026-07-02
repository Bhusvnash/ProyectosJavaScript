let listaTareas = [
  {
    id: 1,
    titulo: 'Aprender JavaScript',
    prioridad: 'Alta', // Puede ser: "Alta", "Media", "Baja"
    completada: false,
  },
]

let tabla_tareas = document.getElementById('tabla_tareas')
function listarTareas() {
  tabla_tareas.innerHTML = ''
  listaTareas.forEach((tarea) => {
    /*con ternario
      let tr
    tr = tarea.completada
      ? '<span class="badge bg-success">Completada</span>'
      : '<span class="badge bg-danger">Pendiente</span>'
      //con if clasico
    /* if (tarea.completada){}else {}*/
    let fila = `<tr><td>${tarea.id}</td><td>${tarea.titulo}</td><td>${tarea.prioridad}</td><td>${
      tarea.completada
        ? '<span class="badge bg-success">Completada</span>'
        : '<span class="badge bg-danger">Pendiente</span>'
    }</td></tr>`
    tabla_tareas.innerHTML += fila
  })
}

function agregarTarea() {
  let numero_tarea = document.getElementById('numero_tarea').value,
    titulo_tarea = document.getElementById('titulo_tarea').value,
    prioridad_tarea = document.getElementById('prioridad_tarea').value
  /* Arreglo = Areglo + nuevoElemento 
   Se clona el arreglo y se agrega el nuevo elemento al final del arreglo y renombra el arreglo original con el nuevo arreglo clonado */
  listaTareas = [
    ...listaTareas,
    {
      id: numero_tarea,
      titulo: titulo_tarea,
      prioridad: prioridad_tarea,
      completada: false,
    },
  ]
  listarTareas()
}

function completarTarea() {
  let codigo = document.getElementById('codigo_tarea').value
  listaTareas = listaTareas.map((tarea) => {
    if (tarea.id == codigo) {
      return { ...tarea, completada: true }
    }
    return tarea
  })
  listarTareas()
}

function cambiarPrioridad() {
  let codigo = document.getElementById('codigo_tarea').value
  let nuevaPrioridad = document.getElementById('nueva_prioridad').value
  listaTareas = listaTareas.map((tarea) => {
    if (tarea.id == codigo) {
      return { ...tarea, prioridad: nuevaPrioridad }
    }
    return tarea
  })
  listarTareas()
}

function filtrarPendientes() {
  listaTareas = listaTareas.filter((tarea) => tarea.completada == false)
  listarTareas()
}

function filtrarPriridad() {
  let prioridad = document.getElementById('opcionPrioridad').value
  listaTareas = listaTareas.filter((tarea) => tarea.prioridad == prioridad)
  listarTareas()
}
listarTareas()
