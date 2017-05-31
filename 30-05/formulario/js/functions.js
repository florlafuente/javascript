
function validar(nombre, apellido, telefono, mail, edad) {
	var errores = [];

	/*if (soloLetras(apellido) && soloLetras(nombre) && validarTel(telefono) && validarMail(mail) &&validarEdad(edad)) {
		return true; 
	}
	return false;*/

	/*if(!soloLetras(nombre)) {
		errores[] = 'El nombre solo puede contener letras';
	}

	if(!soloLetras(apellido)) {
		errores[] = 'El apellido solo puede contener letras';
	}
*/
}

function validarTel (tel) { //Valido la longitud y que sean solo numeros//

	if ((tel.length >= 8 && tel.length <= 12) && (!isNaN(tel))) {

		return true;
	} 

	return false;
}


function validarEdad(edad) {

	if(!isNaN(edad)) {

		var e = parseInt(edad); //Necesito parsear el numero porque sino voy a comparar un string//

		if (e > 20 && e < 120) {
			return true;
		}
	}

	return false;
}

function validarMail(mail) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
	if ( expr.test(mail)) {
		return true;
	}
	return false;
}

function soloLetras(x) {

	expr = /^([a-zA-Z]{4,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		alert('esta bien');
		return true;
	}
	alert ('esta mal');
	return false;
}

