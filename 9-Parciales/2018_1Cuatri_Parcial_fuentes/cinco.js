function mostrar()
{
    switch(prompt("Escribe el nombre de un planeta:")){
        case "mercurio":
        case "venus": 
            alert("¡Acá hace más calor!");
            break;
        case "tierra":
            alert("¡Acá vivimos!");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("¡Acá hace más frio!");
            break;
        default:
            alert("No corresponde a un planeta válido.")
    }
}
