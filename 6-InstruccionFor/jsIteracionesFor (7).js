function mostrar()
{
    var numero = prompt("Ingrese un número"),
        cantDivisores = 0;
    for(var i=1;i<=numero;i++){
        if((numero%i)==0){
            cantDivisores++;
            document.write(i+"<br>");
        }
    }
    document.write("Existen "+cantDivisores+" números divisores del número ingresado.");    
}//FIN DE LA FUNCIÓN