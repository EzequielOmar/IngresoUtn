/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/

function mostrar()
{
    /*    RESUELTO EN 3 LINEAS
    var name;
    name = prompt("Nombre", "Escribe tu nombre");
    document.getElementById("elNombre").value = name;*/

    /**RESUELTO EN UNA LINEA  */
    document.getElementById("elNombre").value = prompt("Nombre", "Escribe tu nombre");
}

