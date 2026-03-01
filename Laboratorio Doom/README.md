# Laboratorio DOM

## Descripcion
Coleccion de cuatro talleres practicos enfocados en la manipulacion del Modelo de Objetos del Documento (DOM) con JavaScript vanila. Cada ejercicio aborda tecnicas fundamentales como creacion dinamica de nodos, control de eventos del mouse y teclado, validacion de formularios y desplazamiento circular de colecciones visuales.

## Funcionalidades

### Ejercicio 1: Galeria Interactiva con Eventos de Raton
- Generacion e insercion dinamica de tarjetas de imagenes en el contenedor principal a partir de un arreglo de objetos.
- Eventos `mouseover` personalizados para intercambio dinamico de fuentes (`src`):
  - Al colocar el puntero sobre la imagen del gato, cambia por la imagen del loro.
  - Al colocar el puntero sobre la imagen del perro, cambia por una calavera.
  - Al colocar el puntero sobre la imagen del loro, cambia por la imagen del perro.
- Boton de recarga que reinicia la vista y los estados visuales originales de las imagenes.

### Ejercicio 2: Validacion de Formulario y Campos Condicionales
- Validacion al perder el foco (`blur`) en los campos Nombre, Apellido y Edad.
- Deteccion de campos vacios con alertas preventivas y aplicacion de estilos visuales de advertencia (borde rojo y fondo amarillo mediante clase CSS).
- Limpieza automatica del estilo de advertencia una vez completado el campo de forma correcta.
- Evento de deteccion de mayoria de edad (`change` en campo Edad):
  - Si el usuario ingresa una edad mayor o igual a 18 anos, se genera e inserta dinamicamente en el formulario el campo adicional de "Saldo".
  - Si la edad ingresada es menor a 18 anos o invalida, el campo de "Saldo" se remueve de forma automatica para mantener la consistencia del formulario.

### Ejercicio 3: Generacion de Tarjeta de Perfil Profesional (CV)
- Renderizado dinamico completo de una tarjeta de presentacion profesional estructurada con clases de Bootstrap.
- Ocultamiento automatico del boton de accion al ser presionado para evitar duplicados en la vista.
- Construccion jerarquica de elementos DOM (`div`, `img`, `h5`, `p`, `span`) enlazando fotografia, nombre, descripcion y etiquetas estilizadas para cada lenguaje de programacion registrado.

### Ejercicio 4: Carrusel de Imagenes con Desplazamiento Circular
- Renderizado dinamico de un conjunto de cuatro imagenes dispuestas en tarjetas responsivas.
- Navegacion interactiva mediante botones de control:
  - Boton "Atras": desplaza todas las posiciones hacia la izquierda de forma circular (la primera posicion se mueve al final).
  - Boton "Adelante": desplaza todas las posiciones hacia la derecha de forma circular (la ultima posicion se mueve al inicio).
- Calculo matematico de indices modulares para navegacion continua sin limites de parada.
