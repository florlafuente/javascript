var cadena = "";
/*for (	;cadena != "exit";	) {
	cadena = prompt("ingrese su numero");
	document.write(cadena);
}
Vemos como con este ciclo el codigo es mucho mas sucio que si lo hacemos con un do-while, 
ya que no tenemos condicion inicial ni incremento.
*/
do {
	var cadena= prompt("ingrese su numero");
	document.write(cadena);
} while (cadena!="exit");