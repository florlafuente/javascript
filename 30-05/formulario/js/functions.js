var errorhtml = document.getElementById('errores');

function validar(nombre, apellido, telefono, mail, edad) {
	
	var errores = [];

	/*if (soloLetras(apellido) && soloLetras(nombre) && validarTel(telefono) && validarMail(mail) &&validarEdad(edad)) {
		return true; 
	}
	return false;*/

	if(!campoVacio(nombre) && !campoVacio(apellido) && !campoVacio(telefono) && !campoVacio(mail) && !campoVacio(edad)) {

		if(!soloLetras(nombre)) {
			errores[0] = 'El nombre solo puede contener letras';
			errorhtml.style.display = 'block';
			errorhtml.innerHTML +='<li>El nombre solo puede contener letras.</li>';
		}

		if(!soloLetras(apellido)) {
			errores[1] = 'El apellido solo puede contener letras';
		}

		if(!validarTel(telefono)) {
			errores[2] = 'Formato de telefono invalido';
		}
		if(!validarEdad(edad)) {
			errores[3] = 'La edad debe ser mayor a 21 y menor a 120';
		}
		if(!validarMail(mail)) {
			errores[4] = 'Formato de mail invalido';
		}

	} else {
		errores[0] = 'Todos los campos son obligatorios';
	}
}

function campoVacio(x) { //Funcion para validar que los campos requeridos no esten vacios//
	if (x.length == 0) {
		return true;
	}
	return false;
}

function validarTel (tel) { //Valido la longitud y que sean solo numeros//

	if ((tel.length >= 8 && tel.length <= 12) && (!isNaN(tel))) {

		return true;
	} 

	return false;
}


function validarEdad(edad) { //Valido edad mayor a 20 y menor a 120//

	if(!isNaN(edad)) {

		var e = parseInt(edad); //Necesito parsear el numero porque sino voy a comparar un string//

		if (e > 20 && e < 120) {
			return true;
		}
	}

	return false;
}

function validarMail(mail) { //Valido formato de mail con expresion regular //
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
	if ( expr.test(mail)) {
		return true;
	}
	return false;
}

function soloLetras(x) { //Valido apellido y nombre con expresion regular//

	expr = /^([a-zA-Z]{4,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		return true;
	}
	return false;
}

