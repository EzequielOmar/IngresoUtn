function mostrar()
{
	var contador=0;
	var acumulador=0;
	while(contador<5){
		var valor = parseInt(prompt("ingrese el numero "+(contador+1)));
		var acumulador = acumulador + valor;
		contador++;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN