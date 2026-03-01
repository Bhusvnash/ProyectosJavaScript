# Ejercicio 2 - Validacion de Formulario y Campos Condicionales

## Descripcion
Taller practico de eventos de formulario en JavaScript vanilla para validar datos de entrada en tiempo real y desplegar campos adicionales condicionales segun el valor ingresado.

## Funcionalidades
- Validacion al perder el foco (evento blur) en los campos Nombre, Apellido y Edad:
  - Notificacion preventiva mediante alerta en caso de dejar un campo vacio.
  - Aplicacion de clase CSS de advertencia (invalido) con borde rojo y fondo amarillo.
  - Retiro automatico de la clase de advertencia cuando el usuario ingresa un valor valido.
- Control condicional de edad (evento change):
  - Deteccion de mayoria de edad: si la edad es mayor o igual a 18 anos, crea e inserta dinamicamente el campo numerico "Saldo".
  - Si la edad es menor a 18 anos o se vacia, remueve el campo "Saldo" del documento para mantener consistencia.
