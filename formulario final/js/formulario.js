var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var apellido =  formulario.apellido;
var telefono = formulario.telefono;
var email = formulario.email;
var edad = formulario.edad;
var error = document.getElementById('error');
var errores = [];

	function soloLetras(x) { //Valido apellido y nombre con expresion regular//

	expr = /^([a-zA-Z]{4,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		return true;
	}
	return false;
	} //Fin soloLetras //
	

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
				errores.push('<li>Por favor completa el apellido</li>');
				e.preventDefault();
			} else {
			return true;
			}
		}
		return false;
	} //Fin validarApellido//


	function validarTelefono(e) { //Funcion para validar el n° de telefono //
		tel=telefono.value;

		if (tel == '' || tel == null){
			console.log('tel vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completá el telefono.</li>';*/
			errores.push('<li>Por favor completá el telefono.</li>');
			e.preventDefault();
		} else {
			if (tel.length < 8 || tel.length > 12){
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

function validarFormulario(e){
		error.innerHTML = '';
		

		validarNombre(e);
		validarApellido(e);
		validarTelefono(e);
		validarEmail(e); 
		validarEdad(e);

		if(validarNombre(e) && validarApellido(e) && validarTelefono(e) && validarEmail(e) && validarEdad(e)) {
			formulario.submit();
		} else {
			error.style.display = 'block';
			for (i=0; i<errores.length; i++) {
				error.innerHTML += errores[i];
			}
		}
		
	} //Fin validar formulario//
function formReset()
{
document.getElementById("formulario").reset();
}
formulario.addEventListener('submit', validarFormulario);
	
