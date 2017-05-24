var btnFono = document.getElementById("boton");

btnFono.addEventListener("click",function(){
	var fono = document.getElementById("fono").value;
	if(!(/^\d{9}$/.test(fono))) {
  		alert("Debes ingresar un número de nueve dígitos");
	}else{
		alert("¡Gracias por registrarte con nosotros!");
	}

	fono = " ";
});
;