function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero<10 && numero>0){
		document.getElementById("Numero").value = "El numero validado es: " + numero;
		break;
	}
}//FIN DE LA FUNCIÓN