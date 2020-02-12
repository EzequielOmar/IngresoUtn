/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    alert("La suma es: " + (parseInt(document.getElementById("numeroUno").value) + parseInt(document.getElementById("numeroDos").value)));
}

function restar()
{
    alert("La resta es: " + (parseInt(document.getElementById("numeroUno").value) - parseInt(document.getElementById("numeroDos").value)));
}

function multiplicar()
{ 
    alert("La multiplicacion es: " + (parseInt(document.getElementById("numeroUno").value) * parseInt(document.getElementById("numeroDos").value)));
}

function dividir()
{
    alert("La division es: " + (parseInt(document.getElementById("numeroUno").value) / parseInt(document.getElementById("numeroDos").value)));
}

