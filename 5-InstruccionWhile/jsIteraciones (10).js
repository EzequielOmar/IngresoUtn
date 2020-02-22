/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares.
7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, 
(positvos-negativos).*/

function mostrar()
{
	var contador = 0,
		sumaNegativos = 0,
		sumaPositivos = 0,
		cantNegativos = 0,
		cantPositivos = 0,
		cantCeros = 0,
		cantPares = 0,
		promPositivos = 0,
		promNegativos = 0,
		diferencia = 0,
		respuesta="si";

	while(respuesta == "si"){
		var number = parseInt(prompt("Ingrese el numero "+(contador+1)));
		if(number == 0){
			cantCeros++;
		}else{
			if(number > 0){
				sumaPositivos = sumaPositivos + number;
				cantPositivos++;
				promPositivos = sumaPositivos / cantPositivos;
			}
			if(number < 0){
				sumaNegativos = sumaNegativos + number;
				cantNegativos++;
				promNegativos = sumaNegativos / cantNegativos;
			}
			if(number % 2 == 0){
				cantPares++;
			}
		}
		diferencia = sumaPositivos + sumaNegativos;

		/**
		 * 		DEBUG
		 */
		//console.log("SUMA NEGATIVOS:   "+sumaNegativos);
		//console.log("SUMA POSITIVOS:   "+sumaPositivos);
		//console.log("CANT NEGATIVOS:   "+cantNegativos);
		//console.log("CANT POSITIVOS:   "+cantPositivos);
		//console.log("PROM POSITIVOS:   "+promPositivos);
		//console.log("PROM NEGATIVOS:   "+promNegativos);
		//console.log("CANT CEROS:   "+cantCeros);
		//console.log("DIFERENCIA:   "+diferencia);
		//console.log("CANT PARES:   "+cantPares);

		respuesta = prompt("¿quiere agregar otro numero?","si");
		contador++;
	}
	alert(
		"Suma de Negativos: " + sumaNegativos +	"\n" +					
		"Suma de Positivos: " +	sumaPositivos + "\n" +
		"Cantidad de Negativos: " + cantNegativos + "\n" +
		"Cantidad de Positivos: " + cantPositivos + "\n" +
		"Promedio de Positivos: " + promPositivos + "\n" +
		"Promedio de Negativos: " +	promNegativos + "\n" +
		"Cantidad de Ceros: " +	cantCeros + "\n" +
		"Cantidad de Pares: " + cantPares + "\n" +
		"Diferencia entre +/- : " +	diferencia + "\n" 
	);
}//FIN DE LA FUNCIÓN