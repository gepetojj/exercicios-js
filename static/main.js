function maior_menor(event) {
	event.preventDefault();

	const num1 = event.target[0].value;
	const num2 = event.target[1].value;
	const num3 = event.target[2].value;
	const num4 = event.target[3].value;
	const num5 = event.target[4].value;

	const maior = Math.max(num1, num2, num3, num4, num5);
	const menor = Math.min(num1, num2, num3, num4, num5);

	document.getElementById("q1-maior").innerHTML = `${maior}`;
	document.getElementById("q1-menor").innerHTML = `${menor}`;
}

function vogal(event) {
	event.preventDefault();

	const caractere = event.target[0].value;

	const vogais = ["a", "e", "i", "o", "u"];
	if (vogais.includes(caractere.toLowerCase())) {
		document.getElementById("q2-vogal").innerHTML = "Sim";
		document.getElementById("q2-vogal").style.color = "green";
	} else {
		document.getElementById("q2-vogal").innerHTML = "Não";
		document.getElementById("q2-vogal").style.color = "red";
	}
}

function limites(event) {
	event.preventDefault();

	const lim1 = Number(event.target[0].value);
	const lim2 = Number(event.target[1].value);

	const pares = [];
	let sum = 0;
	for (let i = lim1; i <= lim2 - 1; i++) {
		if (i % 2 === 0) {
			pares.push(i);
			sum += i;
		}
	}

	document.getElementById("q3-pares").innerHTML = `${pares.join(", ")}`;
	document.getElementById("q3-sum").innerHTML = `${sum}`;
}

function ordem(event) {
	event.preventDefault();

	const num1 = Number(event.target[0].value);
	const num2 = Number(event.target[1].value);
	const num3 = Number(event.target[2].value);

	const ordem = [num1, num2, num3].sort((a, b) => a - b);
	document.getElementById("q4-ordem").innerHTML = `${ordem.join(", ")}`;
}

function positivo_negativo(event) {
	event.preventDefault();

	const num = Number(event.target[0].value);

	if (num > 0) {
		document.getElementById("q5-positivo").innerHTML = "Positivo";
		document.getElementById("q5-positivo").style.color = "green";
	} else if (num < 0) {
		document.getElementById("q5-positivo").innerHTML = "Negativo";
		document.getElementById("q5-positivo").style.color = "red";
	} else {
		document.getElementById("q5-positivo").innerHTML = "Neutro";
		document.getElementById("q5-positivo").style.color = "gray";
	}
}

function par_impar(event) {
	event.preventDefault();

	const num = Number(event.target[0].value);

	if (num % 2 === 0) {
		document.getElementById("q6-par").innerHTML = "Par";
		document.getElementById("q6-par").style.color = "green";
	} else {
		document.getElementById("q6-par").innerHTML = "Ímpar";
		document.getElementById("q6-par").style.color = "red";
	}
}
