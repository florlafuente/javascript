var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var apellido =  formulario.apellido;
var telefono = formulario.telefono;
var email = formulario.email;
var edad = formulario.edad;
var error = document.getElementById('error');

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
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';
			e.preventDefault();
		} 
		else {
			if (!soloLetras(nombre.value)) {
				console.log('Nombre invalido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un nombre valido</li>';
				e.preventDefault();
			} else {
			error.style.display = 'none';
			}
		}
	} //Fin validarNombre//

	function validarApellido(e){ //Funcion para validar apellido//
		if(apellido.value == '' || apellido.value == null){
			console.log('apellido vacio');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el apellido</li>';
			e.preventDefault();
		} 
		else {
			if (!soloLetras(apellido.value)) {
				console.log('Apellido invalido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un apellido valido</li>';
				e.preventDefault();
			} else {
			error.style.display = 'none';
			}
		}
	} //Fin validarApellido//


	function validarTelefono(e) { //Funcion para validar el n° de telefono //
		tel=telefono.value;

		if (tel == '' || tel == null){
			console.log('tel vacio');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completá el telefono.</li>';
			e.preventDefault();
		} else {
			if (tel.length < 8 || tel.length > 12){
				console.log('tel invalido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un teléfono válido.</li>';
				e.preventDefault();
			}else{
				error.style.display = 'none';
			}
		}

	}	//Fin validarTelefono//


	function validarEmail(e) { //Funcion para validar formato de mail//
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
		if (email.value == '' || email.value == null) {
			console.log('mail vacio');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completá el e-mail.</li>';
			e.preventDefault();
		}else{
			if (!expr.test(email.value)) {
				console.log('mail invalido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un e-mail válido.</li>';
				e.preventDefault();
			}else{
				error.style.display = 'none';
			}
		}
	} //Fin validarEmail//

	function validarEdad(e) { //Funcion para validar edad//
		if (edad.value == '' || edad.value == null) {
			console.log('Edad vacia');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu edad.</li>';
			e.preventDefault();
		}else{
			if(isNaN(parseInt(edad.value))) {
				console.log('Edad invalida');
				error.style.display = 'block';
				error.innerHTML += '<li>La edad debe ser un numero</li>';
				e.preventDefault();
			} else {
				if (parseInt(edad.value) > 120 || parseInt(edad.value) < 18) {
					console.log('Edad invalida');
					error.style.display = 'block';
					error.innerHTML += '<li>Por favor ingresá una edad válida.</li>';
					e.preventDefault();
				}else{
					console.log('Edad valida');
				}
			}
		}
	} //Fin validar edad //

function validarFormulario(e){
		error.innerHTML = '';

		validarNombre(e);
		validarApellido(e);
		validarTelefono(e);
		validarEmail(e);
		validarEdad(e);
		
	} //Fin validar formulario//

formulario.addEventListener('submit', validarFormulario);
	
