# Calculadora Web Multiuso

## Descripcion
Aplicacion web interactiva que reune tres herramientas de calculo: una calculadora cientifica con soporte para operaciones aritmeticas y trigonometricas, un conversor bidireccional de escalas de temperatura y un calculador de Indice de Masa Corporal (IMC) con clasificacion de estado fisico.

## Funcionalidades

### 1. Calculadora Cientifica
- Ingreso de digitos del 0 al 9 y punto decimal para cantidades con fracciones.
- Operaciones aritmeticas basicas: suma (+), resta (-), multiplicacion (x) y division (/).
- Uso de parentesis "(" y ")" para priorizar operaciones matematicas.
- Calculo de potencias y raices: raiz cuadrada y raiz cubica.
- Funciones trigonometricas evaluadas en grados sexagesimales: seno (Sen), coseno (Cos), tangente (Tan), secante (Sec), cosecante (Csc) y cotangente (Ctg).
- Funciones especiales: calculo de factorial (n!), valor absoluto (|n|) y logaritmo en base 10 (Log).
- Insercion de constantes matematicas: Pi (3.14159...) y Euler (2.71828...).
- Generacion de numeros aleatorios (ran) entre 0 y 1.
- Borrado parcial caracter por caracter con la tecla de retroceso y borrado total de la pantalla con el boton CE.
- Evaluacion de la expresion mediante el boton igual (=) con manejo de errores matematicos.

### 2. Conversor de Temperaturas
- Conversion en tiempo real entre tres escalas termicas: Celsius (grados C), Fahrenheit (grados F) y Kelvin (K).
- Calculo bidireccional sincronizado: al ingresar o modificar un valor en cualquiera de los tres campos, los otros dos se actualizan de forma automatica.
- Limpieza automatica de los campos vinculados al vaciar el campo activo.

### 3. Calculadora de Indice de Masa Corporal (IMC)
- Calculo del valor de IMC a partir del peso en kilogramos (kg) y la estatura en metros (m) aplicando la formula peso dividido entre altura al cuadrado.
- Clasificacion automatica del estado nutricional segun el resultado obtenido:
  - Bajo peso: IMC menor a 18.5
  - Peso saludable: IMC mayor o igual a 18.5 y menor a 25
  - Sobrepeso: IMC mayor o igual a 25 y menor a 30
  - Obesidad: IMC mayor o igual a 30
- Validacion de datos numericos positivos en los campos de entrada.
- Boton de limpieza para restablecer los campos y los mensajes informativos.
