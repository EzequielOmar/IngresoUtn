function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si"){
		var number = parseInt(prompt("Ingrese el numero "+(contador+1)));
		respuesta = prompt("¿quiere agregar otro numero?","si");
		acumulador = acumulador + number;
		contador++;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN