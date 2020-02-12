function mostrar()
{
    //tomo la edad  
    if(document.getElementById("edad").value < 18 && document.getElementById("estadoCivil").value != "Soltero"){
        alert("¡Usted es muy pequeño para no ser soltero!")
    }
}//FIN DE LA FUNCIÓN