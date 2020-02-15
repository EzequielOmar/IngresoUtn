var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random()*3+1);
}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1: alert("¡Empate!");ContadorDeEmpates+=1;break;
        case 2: alert("¡Perdiste!");ContadorDePerdidas+=1;break;
        case 3: alert("¡Ganaste!");ContadorDeGanadas+=1;
	}
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
        case 1: alert("¡Ganaste!");ContadorDeGanadas+=1;break;
        case 2: alert("¡Empate!");ContadorDeEmpates+=1;break;
        case 3: alert("¡Perdiste!");ContadorDePerdidas+=1;
	}
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
        case 1: alert("¡Perdiste!");ContadorDePerdidas+=1;break;
        case 2: alert("¡Ganaste!");ContadorDeGanadas+=1;break;
        case 3: alert("¡Empate!");ContadorDeEmpates+=1;
	}
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function mostrarResultado()
{
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
	document.getElementById("perdidas").value = ContadorDePerdidas;
}