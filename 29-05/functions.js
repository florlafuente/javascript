function suma(num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	if(isNaN(num1) || isNaN(num2)) {
		suma = "error";
		alert("Error");
	} else {
		suma = num1 + num2;
		document.getElementById('total').value=suma;
		return suma;
	}

	/*suma = parseFloat(num1) + parseFloat(num2);
	document.getElementById('total').value=suma;
	return suma;*/
}



