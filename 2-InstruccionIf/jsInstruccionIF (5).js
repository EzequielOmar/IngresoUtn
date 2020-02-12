function mostrar()
{
    //tomo la edad  
    if(document.getElementById("edad").value < 13 || document.getElementById("edad").value > 17){
        alert("Usted no es adolecente.");
    }
}//FIN DE LA FUNCIÓN