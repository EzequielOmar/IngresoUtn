function mostrar()
{
    var numero = prompt("Ingrese un número"),
        cantPares = 0;
    for(var i=1;i<=numero;i++){
        if((i%2)==0){
            cantPares++;
            document.write(i+"<br>");
        }
    }
    document.write("Existen "+cantPares+" números pares.");
}//FIN DE LA FUNCIÓN