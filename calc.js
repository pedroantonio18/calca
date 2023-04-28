let d = document;
let resultado = "";
let regexSinais = /[\+\-\*\/]/;
let ultimoBotao = null;

function insert(num) {
	let ultimoCaractere = resultado.slice(-1);
	let valorDigitadoEhOperador = regexSinais.test(num);

	if(ultimoBotao == "=") {
		clean();
		ultimoBotao = null;
	}

	if (ultimoCaractere === "" && valorDigitadoEhOperador) {
		return;
	} else if (valorDigitadoEhOperador && regexSinais.test(ultimoCaractere)) {
		resultado = resultado.slice(0, -1);
	} else if (ultimoCaractere === "=" && !valorDigitadoEhOperador) {
		resultado = "";
	}


	resultado += num;
	d.getElementById("resultado").innerHTML = resultado;
}

function clean() {
	resultado = "";
	d.getElementById("resultado").innerHTML = "";
}

function back() {
	let ultimoCaractere = resultado.slice(-1);
	resultado = resultado.slice(0, -1);
	d.getElementById("resultado").innerHTML = resultado;
}

function calcular() {
	let ultimoCaractere = resultado.slice(-1);
	let regexSinais = /[\+\-\*\/]/;
	let ultimoOperador = null;

	ultimoBotao = '=';

	if (resultado) {
		let valorAtual = eval(resultado);
		resultado = valorAtual.toString();
		d.getElementById("resultado").innerHTML = resultado;

		if (regexSinais.test(ultimoCaractere)) {
			ultimoOperador = valorAtual;
		}
	} else {
		d.getElementById("resultado").innerHTML = "Nada...";
	}

	console.log("Resultado:", resultado);
	console.log("Último operador:", ultimoOperador);
}

if (d.getElementById("btnCalcular")) {
	d.getElementById("btnCalcular").addEventListener("click", calcular);
}