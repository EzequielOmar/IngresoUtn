function mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta == "si"){
		var number = parseInt(prompt("Ingrese el numero "+(contador+1)));
		respuesta = prompt("¿quiere agregar otro numero?","si");
		if(number != 0){
			if(number > 0){
				positivo = positivo + number;
			}
			if(number < 0){
				negativo = negativo * number;	
			}
		}
		contador++;
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN