# Ejercicio 4 - Carrusel de Imagenes con Desplazamiento Circular

## Descripcion
Taller practico de manipulacion de colecciones y actualizacion ciclica del DOM mediante botones de direccion, logrando un desplazamiento infinito de elementos sin desbordamiento de indices.

## Funcionalidades
- Carga y renderizado inicial de una coleccion de cuatro imagenes estructuradas en tarjetas responsivas.
- Navegacion mediante controles de direccion:
  - Boton "Atras": desplaza todas las posiciones hacia la izquierda de forma circular (la posicion inicial pasa al ultimo lugar).
  - Boton "Adelante": desplaza todas las posiciones hacia la derecha de forma circular (la posicion final pasa al primer lugar).
- Mapeo de indices con calculo de limites continuos para evitar excepciones fuera de rango.
