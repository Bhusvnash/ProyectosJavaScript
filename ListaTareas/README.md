# Administrador de Lista de Tareas

## Descripcion
Aplicacion web orientada a la gestion de tareas diarias estructurada mediante objetos en JavaScript. Permite registrar actividades con distintos niveles de urgencia, actualizar su progreso de ejecucion, reasignar prioridades y consultar vistas filtradas sin perder los datos originales.

## Funcionalidades
- Registrar nueva tarea:
  - Ingreso de identificador numerico unico (`id`), descripcion o titulo de la tarea y seleccion del nivel de prioridad (Alta, Media o Baja).
  - Validacion de campos para impedir identificadores invalidos, descripciones vacias o codigos de tarea duplicados.
  - Insercion inmutable en el listado principal con estado inicial "Pendiente".
- Visualizacion en tabla responsiva:
  - Muestra columnas organizadas por Numero (ID), Titulo de la tarea, Nivel de Prioridad y Estado actual.
  - Indicadores visuales de estado mediante distintivos (badges): verde para "Completada" y rojo para "Pendiente".
- Actualizar estado a completada:
  - Permite ingresar el codigo (ID) de una tarea especifica para marcarla como finalizada ("Completada").
  - Notificacion preventiva si el identificador ingresado no coincide con ninguna tarea registrada.
- Modificar nivel de prioridad:
  - Permite ingresar el ID de una tarea y seleccionar una nueva prioridad (Alta, Media o Baja) para reasignarle urgencia.
- Filtrado y navegacion de tareas:
  - Filtrar pendientes: visualiza unicamente las actividades que aun no han sido completadas.
  - Filtrar por prioridad: selector desplegable para aislar tareas con prioridad Alta, Media o Baja.
  - Mostrar todas: restablece la vista completa de todas las tareas registradas sin alterar la persistencia en memoria.
