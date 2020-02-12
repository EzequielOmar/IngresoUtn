function mostrar()
{
    var precio = prompt("Escribe el precio");
    var descuento = prompt("Escribe el descuento");
    document.getElementById("elPrecioFinal").value = precio - (precio*descuento/100);
}
