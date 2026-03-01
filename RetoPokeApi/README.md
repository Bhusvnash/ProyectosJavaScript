# Catalogo y Buscador de Pokemon (PokeAPI)

## Descripcion
Aplicacion web interactiva que consume la API publica de PokeAPI para consultar, renderizar y buscar fichas informativas de personajes de Pokemon en tiempo real. Presenta sus ilustraciones oficiales junto con sus estadisticas base de combate dentro de un diseno adaptable con tema oscuro.

## Funcionalidades
- Carga y renderizado inicial:
  - Peticion asincrona al iniciar la aplicacion para consultar una coleccion de Pokemon mediante PokeAPI.
  - Generacion dinamica de tarjetas responsivas con la informacion de cada Pokemon obtenido.
- Busqueda y filtrado:
  - Busqueda directa por nombre o por numero de identificador (ID) del Pokemon a traves del campo de busqueda.
  - Ejecucion de busqueda mediante eventos al presionar enter o al utilizar el boton de limpieza del buscador.
  - Restablecimiento automatico del catalogo inicial cuando el campo de busqueda queda vacio.
  - Manejo de errores y mensaje informativo en pantalla cuando no se encuentra el Pokemon solicitado.
- Visualizacion de informacion en tarjetas:
  - Titulo con el nombre del Pokemon con formato de primera letra mayuscula.
  - Ilustracion oficial a color en alta definicion (official-artwork) o sprite por defecto.
  - Etiqueta distintiva con el tipo o especie elemental principal del Pokemon.
  - Panel comparativo con cuatro estadisticas base de combate:
    - Puntos de salud (HP).
    - Defensa (DEF).
    - Ataque (ATK).
    - Estadistica especial (SPC).
