function mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño){
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Este mes tiene 31 dias");
            break;
        case "Febrero":
            alert("Este mes tiene 28 dias (a veces 29)");
            break;
        default:
            alert("Este mes tiene 30 dias");
    }
}//FIN DE LA FUNCIÓN