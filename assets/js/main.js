var btnFono = document.getElementById("boton");
var start = document.getElementById("start");
var play = document.getElementsByClassName("play");
var fondo = document.getElementById("fondo");

btnFono.addEventListener("click",function(){
	var fono = document.getElementById("fono").value;
	if(!(/^\d{9}$/.test(fono))) {
  		alert("Debes ingresar un número de nueve dígitos");
	}else{
		alert("¡Gracias por registrarte con nosotros!");
	}

	fono = " ";
});

start.addEventListener("click", function(){
	play.removeChild(fondo);

});
