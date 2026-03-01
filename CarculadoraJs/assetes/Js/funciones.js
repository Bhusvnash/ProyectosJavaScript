//Carculadora cientifica
const entrada = document.getElementById("entrada");

function numero(valor) {
	if (!entrada) return;
	if (entrada.value === "Error") {
		entrada.value = "";
	}
	entrada.value += valor;
}

function limpiar() {
	if (!entrada) return;
	if (entrada.value === "Error") {
		entrada.value = "";
		return;
	}
	entrada.value = entrada.value.slice(0, -1);
}

function CE() {
	if (!entrada) return;
	entrada.value = "";
}

function carcular() {
	if (!entrada || entrada.value === "") return;
	let expresion = entrada.value;
	while (expresion.includes("x")) {
		expresion = expresion.replace("x", "*");
	}
	try {
		let resultado = eval(expresion);
		if (isNaN(resultado) || resultado === undefined || resultado === Infinity || resultado === -Infinity) {
			entrada.value = "Error";
		} else {
			entrada.value = resultado;
		}
	} catch (error) {
		entrada.value = "Error";
	}
}

function raizCuadrada() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (!isNaN(n) && n >= 0) {
		entrada.value = Math.sqrt(n);
		return;
	}
	entrada.value = "Error";
}

function raizCubica() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) {
		entrada.value = "Error";
		return;
	}
	entrada.value = Math.cbrt(n);
}

function factorial() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);

	if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
		entrada.value = "Error";
		return;
	}

	let res = 1;
	for (let i = 1; i <= n; i++) {
		res *= i;
	}
	entrada.value = res;
}

function random() {
	if (!entrada) return;
	entrada.value = Math.random();
}

function pi() {
	if (!entrada) return;
	entrada.value += Math.PI;
}

function euler() {
	if (!entrada) return;
	entrada.value += Math.E;
}

function absoluto() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) {
		entrada.value = "Error";
		return;
	}
	entrada.value = Math.abs(n);
}

function sen() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) return (entrada.value = "Error");

	let rad = n * (Math.PI / 180);
	entrada.value = Math.sin(rad);
}

function cos() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) return (entrada.value = "Error");

	let rad = n * (Math.PI / 180);
	entrada.value = Math.cos(rad);
}

function tan() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) return (entrada.value = "Error");

	let rad = n * (Math.PI / 180);
	entrada.value = Math.tan(rad);
}

function sec() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) return (entrada.value = "Error");

	let rad = n * (Math.PI / 180);
	entrada.value = 1 / Math.cos(rad);
}

function csc() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) return (entrada.value = "Error");

	let rad = n * (Math.PI / 180);
	entrada.value = 1 / Math.sin(rad);
}

function ctg() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n)) return (entrada.value = "Error");

	let rad = n * (Math.PI / 180);
	entrada.value = 1 / Math.tan(rad);
}

function log10() {
	if (!entrada) return;
	let n = parseFloat(entrada.value);
	if (isNaN(n) || n <= 0) return (entrada.value = "Error");
	entrada.value = Math.log10(n);
}
//Convertir temperaturas

function convertirTemperatura() {
	let kelvin = document.getElementById("kelvin");
	let celsius = document.getElementById("celsius");
	let fahrenheit = document.getElementById("fahrenheit");

	let activo = document.activeElement;

	if (activo.value === "") {
		if (activo.id === "kelvin") {
			celsius.value = "";
			fahrenheit.value = "";
		}
		if (activo.id === "celsius") {
			kelvin.value = "";
			fahrenheit.value = "";
		}
		if (activo.id === "fahrenheit") {
			kelvin.value = "";
			celsius.value = "";
		}
		return;
	}

	let valor = parseFloat(activo.value);

	if (isNaN(valor)) return;

	if (activo.id === "kelvin") {
		celsius.value = (valor - 273.15).toFixed(2);
		fahrenheit.value = (((valor - 273.15) * 9) / 5 + 32).toFixed(2);
	}

	if (activo.id === "celsius") {
		kelvin.value = (valor + 273.15).toFixed(2);
		fahrenheit.value = ((valor * 9) / 5 + 32).toFixed(2);
	}

	if (activo.id === "fahrenheit") {
		celsius.value = (((valor - 32) * 5) / 9).toFixed(2);
		kelvin.value = (((valor - 32) * 5) / 9 + 273.15).toFixed(2);
	}
}
//IMC 
function calcularIMC() {
	let peso = parseFloat(document.getElementById("peso").value);
	let altura = parseFloat(document.getElementById("altura").value);

	let resultado = document.getElementById("resultadoIMC");
	let estado = document.getElementById("estadoIMC");

	if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
		resultado.innerHTML = "Error";
		estado.innerHTML = "Ingresa valores válidos.";
		return;
	}

	let imc = peso / (altura * altura);
	resultado.innerHTML = imc.toFixed(2);

	if (imc < 18.5) {
		estado.innerHTML = "Bajo peso ";
	} else if (imc >= 18.5 && imc < 25) {
		estado.innerHTML = "Peso saludable ";
	} else if (imc >= 25 && imc < 30) {
		estado.innerHTML = "Sobrepeso ";
	} else {
		estado.innerHTML = "Obesidad ";
	}
}

function limpiarIMC() {
	document.getElementById("peso").value = "";
	document.getElementById("altura").value = "";

	document.getElementById("resultadoIMC").innerHTML = "---";
	document.getElementById("estadoIMC").innerHTML =
		"Aquí aparecerá si estás sano, bajo peso, etc.";
}

