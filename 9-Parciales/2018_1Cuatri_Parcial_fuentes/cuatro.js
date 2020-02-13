function mostrar()
{
    var n1 = prompt("Numero 1:");
    var n2 = prompt("Numero 2:");
    if(n1 == n2){
        alert(n1 + n2);
    }else{
        if(n1 > n2){
            alert(n1-n2);
        }else{
            var suma = parseInt(n1) + parseInt(n2);
            if(suma > 10){
                alert("La suma es: "+suma+", y supero al 10");
            }else{
                alert(suma);
            }
        }

    }
}
