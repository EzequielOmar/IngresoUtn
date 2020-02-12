function mostrar()
{
    //tomo la edad  
    if(document.getElementById("edad").value >= 18){
        alert("Felicidades, ¡Usted es mayor de edad!");
    }else{
        if(document.getElementById("edad").value < 18 && document.getElementById("edad").value >= 13){
            alert("Usted es adolecente, !La mejor edad!");
        }else{
            alert("Usted es un niño");
        }
    }
}//FIN DE LA FUNCIÓN 