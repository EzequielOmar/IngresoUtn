/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var name = document.getElementById("elNombre").value;
    var edad = document.getElementById("laEdad").value;
    alert("Usted se llama "+name+", y tiene "+edad+" años de edad.");
}

