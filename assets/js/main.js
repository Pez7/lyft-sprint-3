var btnFono = document.getElementById("boton");
var start = document.getElementById("start");
var play = document.getElementsByClassName("play")[0];
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
	var cordX= document.getElementById("cordx").value;
	var cordY = document.getElementById("cordy").value;

		
	if(parseInt(cordX) > 10 || parseInt(cordY) > 6){
		alert("Debes ingresar unas coordenadas válidas");
	}else{

		play.removeChild(fondo);

		var newCaja = document.createElement("div");
		newCaja.setAttribute("id","juego");
		var cajaGris = document.createElement("div");
		cajaGris.setAttribute("id","gris");
		var context = document.createElement("div");
		
		


		play.appendChild(newCaja);
		newCaja.appendChild(cajaGris);
		
		
		
		

	}
	

});
