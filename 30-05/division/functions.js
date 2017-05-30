function division(num1, num2) {
	n1 = parseFloat(num1);
	n2 = parseFloat(num2);

	if (isNaN(n1) || isNaN(n2) || n2 == 0) {
		division = 'Verifica los datos ingresados';
		alert(division);
	} else {
		division = n1 / n2;
		document.getElementById('total').value=division;
	}
	return division;
}

function multiplicacion(num1, num2) {
	n1 = parseFloat(num1);
	n2 = parseFloat(num2);

	if (isNaN(n1) || isNaN(n2)) {
		multiplicacion = 'Verifica los datos ingresados';
		alert(multiplicacion);
	} else {
		multiplicacion = n1 * n2;
		document.getElementById('total').value=multiplicacion;
	}
	return multiplicacion;
}

function suma(num1, num2) {
	n1 = parseFloat(num1);
	n2 = parseFloat(num2);

	if (isNaN(n1) || isNaN(n2)) {
		suma = 'Verifica los datos ingresados';
		alert(suma);
	} else {
		suma = n1 + n2;
		document.getElementById('total').value=suma;
	}
	return suma;
}

function resta(num1, num2) {
	n1 = parseFloat(num1);
	n2 = parseFloat(num2);

	if (isNaN(n1) || isNaN(n2)) {
		resta = 'Verifica los datos ingresados';
		alert(resta);
	} else {
		resta = n1 - n2;
		document.getElementById('total').value=resta;
	}
	return resta;
}

function calculadora(operador, num1, num2) {
	if (operador == '+') {
		calculadora = suma(num1, num2);
	} else {
		if (operador == '-') {
			calculadora = resta(num1, num2);
		} else {
			if (operador == '*') {
				calculadora == multiplicacion(num1, num2);
			} else {
				if (operador == '/') {
					calculadora == division(num1, num2);
				}
			}
		}
	}
	return calculadora;
}