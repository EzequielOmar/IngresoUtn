function mostrar()
{
	var contador=0;
	var maximo;
	var minimo;
	var previo;
	var respuesta='si';

	while(respuesta == 'si'){
		var number = parseInt(prompt("Ingrese el numero "+(contador+1)));
		if(!isNaN(number)){
			if(contador == 0){
				maximo = number;
				minimo = number;
			}else{
				if(number > maximo){
					maximo = number;
				}
				if(number < minimo){
					minimo = number;
				}
			}
		}
		respuesta = prompt("¿quiere agregar otro numero?","si");
		contador++;
	}
	
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
}//FIN DE LA FUNCIÓN