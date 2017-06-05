var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var apellido =  formulario.apellido;
var telefono = formulario.telefono;
var email = formulario.email;
var edad = formulario.edad;
var check = formulario.checkbox;
var calle = formulario.calle;
var numero = formulario.numero;
var codigopostal = formulario.codigopostal;
var error = document.getElementById('error');
var errores = [];


	function soloLetras(x) { //Valido apellido y nombre con expresion regular//

	expr = /^([a-zA-Z]{3,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		return true;
	}
	return false;
	} //Fin soloLetras //

	function letrasNumeros(x) {
		expr = /^([a-zA-Z0-9_\s]{2,20})*$/;
		if(expr.test(x)) {
			return true;
		}
		return false;
	} //fin letrasNumeros//

	function validarNombre(e){ //Funcion para validar el nombre//
		if(nombre.value == '' || nombre.value == null){
			console.log('nombre vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';*/
			errores.push('<li>Por favor completa el nombre</li>');
			e.preventDefault();
		} 
		else {
			if (!soloLetras(nombre.value)) {
				console.log('Nombre invalido');
				/*error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un nombre valido</li>';*/
				errores.push('<li>Por favor ingresá un nombre valido</li>');
				e.preventDefault();
			} else {
			return true;
			}
		}
		return false;	
	} //Fin validarNombre//

	function validarApellido(e){ //Funcion para validar apellido//
		if(apellido.value == '' || apellido.value == null){
			console.log('apellido vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el apellido</li>';*/
			errores.push('<li>Por favor completa el apellido</li>');
			e.preventDefault();
		} 
		else {
			if (!soloLetras(apellido.value)) {
				console.log('Apellido invalido');
				/*error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un apellido valido</li>';*/
				errores.push('<li>Por favor ingresá un apellido valido</li>');
				e.preventDefault();
			} else {
			return true;
			}
		}
		return false;
	} //Fin validarApellido//


	function validarTelefono(e) { //Funcion para validar el n° de telefono //
		if (telefono.value == '' || telefono.value == null){
			console.log('tel vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completá el telefono.</li>';*/
			errores.push('<li>Por favor completá el telefono.</li>');
			e.preventDefault();
		} else {
			tel=parseInt(telefono.value);
			if (tel.length < 8 || tel.length > 12 || isNaN(tel)){
				console.log('tel invalido');
				/*error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un teléfono válido.</li>';*/
				errores.push('<li>Por favor ingresá un teléfono válido.</li>');
				e.preventDefault();
			}else{
				/*error.style.display = 'none';*/
				return true;
			}
		}
		return false;
	}	//Fin validarTelefono//


	function validarEmail(e) { //Funcion para validar formato de mail//
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
		if (email.value == '' || email.value == null) {
			console.log('mail vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completá el e-mail.</li>';*/
			errores.push('<li>Por favor completá el e-mail.</li>');
			e.preventDefault();
		}else{
			if (!expr.test(email.value)) {
				console.log('mail invalido');
				/*error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un e-mail válido.</li>';*/
				errores.push('<li>Por favor ingresá un e-mail válido.</li>');
				e.preventDefault();
			}else{
				return true;
			}
		}
		return false;
	} //Fin validarEmail//

	function validarEdad(e) { //Funcion para validar edad//
		if (edad.value == '' || edad.value == null) {
			console.log('Edad vacia');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu edad.</li>';*/
			errores.push('<li>Por favor ingresá tu edad.</li>');
			e.preventDefault();
		}else{
			if(isNaN(parseInt(edad.value))) {
				console.log('Edad invalida');
				/*error.style.display = 'block';
				error.innerHTML += '<li>La edad debe ser un numero</li>';*/
				errores.push('<li>La edad debe ser un numero</li>');
				e.preventDefault();
			} else {
				if (parseInt(edad.value) > 120 || parseInt(edad.value) < 18) {
					console.log('Edad invalida');
					/*error.style.display = 'block';
					error.innerHTML += '<li>Por favor ingresá una edad válida.</li>';*/
					errores.push('<li>Por favor ingresá una edad valida.</li>');
					e.preventDefault();
				}else{
					console.log('Edad valida');
					return true;
				}
			}
		}
		return false;
	} //Fin validar edad //

	function validarCalle(e) {
		if (calle.value == '' || calle.value == null) {
			console.log('Calle vacia');
			errores.push('<li>Completá el campo calle</li>');
			e.preventDefault();
		} else {
			if (!letrasNumeros(calle.value)){
				console.log('Calle invalida');
				errores.push('<li>El formato de calle es invalido</li>');
				e.preventDefault();
			}else {
				console.log('Calle valida');
				return true;
			}
		}
		return false;
	}

	function validarNumero(e) {
		if (numero.value == '' || numero.value == null) {
			console.log('Numero vacio');
			errores.push('<li>Completá el campo numero</li>');
			e.preventDefault();
		} else {
			if (isNaN(parseInt(numero.value)) || (numero.value).length > 4) {
				console.log('Numero invalido');
				errores.push('<li>El formato de numero es invalido</li>');
				e.preventDefault();
			}else {
				console.log('Numero valido');
				return true;
			}
		}
		return false;
	}

	function validarCodigo(e) {
		if (codigopostal.value == '' || codigopostal.value == null) {
			console.log('Codigo postal vacio');
			errores.push('<li>Completá el campo codigo postal</li>');
			e.preventDefault();
		} else {
			if (isNaN(parseInt(codigopostal.value)) || (codigopostal.value).length > 4) {
				console.log('Codigo postal invalido');
				errores.push('<li>El formato de codigo postal es invalido</li>');
				e.preventDefault();
			}else {
				console.log('Codigo postal valido');
				return true;
			}
		}
		return false;
	}

function chequearDireccion(e) {
	if (check.checked == true) {
		direccion.style.display = 'block';
		return true;
	} else {
		direccion.style.display = 'none';
		return false;
	}
} //Fin chequear direccion //

function validarFormulario(e){
		error.innerHTML = '';
		errores = [];

		validarNombre(e);
		validarApellido(e);
		validarTelefono(e);
		validarEmail(e); 
		validarEdad(e);
		if (chequearDireccion(e)) {
			validarCalle(e);
			validarNumero(e);
			validarCodigo(e);
		}
		if(errores.length == 0) {
			formulario.submit();
		} else {
			error.style.display = 'block';
			for (i=0; i<errores.length; i++) {
				error.innerHTML += errores[i];
			}
		}
		
	} //Fin validar formulario//

	function formReset() {
		error.style.display = 'none';
		error.innerHTML = '';
		errores = [];
	}
check.addEventListener('click', chequearDireccion);
formulario.addEventListener('submit', validarFormulario);
formulario.addEventListener('reset', formReset);


