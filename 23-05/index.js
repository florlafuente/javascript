/*function saludar() {
	var elemento = document.getElementById("nombre"); //funcion para obtener un elemento html x su id
	alert('hola, '+elemento.value); //Si no pongo .value no voy a obtener el valor ingresado por el usuario
}*/

//Funcion para validar si el usuario ingresó los datos//
/*function enviar () {
	var elemento = document.getElementById("nombre");
	var nombre = elemento.value;

	if (nombre == null || nombre.length == 0) {
		alert("Tenés que ingresar un nombre.")
	}

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email == null || email.length == 0) {
		alert("Tenés que ingresar un e-mail.")
	}

	if (password == null || password.length == 0) {
		alert("Tenés que ingresar una contraseña.")
	}
}*/

// Como todo ese codigo es muy largo, encontramos una manera de hacerlo más eficaz usando ciclos //
function isLetter(str) { //Funcion sacada de internet para validad que un caracter es una letra//
  return str.length === 1 && str.match(/[a-z]/i);
}

function enviar () { //Funcion para validar los distintos campos//
	var campos = ['nombre', 'email', 'password'];

	for (var i = 0; i < campos.length; i++) {
		var valorCampo = document.getElementById(campos[i]).value;

		if (valorCampo == null || valorCampo.length == 0) {
			alert("tenes que ingresar tu " +campos[i]);
		}
	}

	var nombre = document.getElementById('nombre').value;
	var valido = true;
	
	for (var i = 0; i <nombre.length; i++) { //Funcion para asegurarme que los caracteres de un nombre sean validos//
		if (!isLetter(nombre[i])) {
			valido = false;
			break;
		}
	}

	if (!valido) {
		alert("El nombre ingresado no es válido.");
	}
}