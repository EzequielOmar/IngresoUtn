function mostrar()
{
    var numero = prompt("Ingrese un número"),
        cantDivisores = 0;
    for(var i=1;i<=numero;i++){
        if((numero%i)==0){
            cantDivisores++;
        }
    }
    if(cantDivisores == 2){
        alert("El número ingresado es un numero primo.");
    }else{
        alert("El número ingresado tiene divisores natuales.")
    }
}//FIN DE LA FUNCIÓN