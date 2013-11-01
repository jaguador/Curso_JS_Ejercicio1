/*******************
* Ejercicio 1
* Julio Aguado Robles
* Alumno: al10788
********************/


// Clase Web
function Web(url, puntuacion) {
	this.url = url;		// Direccion web
	this.puntuacion = puntuacion;	// Valor de la puntuacion
	this.literalPuntuacion = null;	// Literal de la puntuacion
	this.setLiteralPuntuacion = setLiteralPuntuacion;   // Obtener el literal a partir del valor de la puntuacion
}

// Traduce valor entero de la puntuacion a su literal
function setLiteralPuntuacion(puntuacion) {
	var literal;
	switch(puntuacion) {
		case 1:
			literal = 'Peligroso!';
			break;
		case 2:
			literal = 'Nada recomendable';
			break;
		case 3:
			literal = 'Interes moderado';
			break;
		case 4:
			literal = 'Muy recomendable';
			break;
		case 5:
			literal = 'Imprescindible';
			break;
	}
	this.literalPuntuacion = literal;
}


// Funcion principal llamada desde el origen HTML
function mostrarResultado(valoracion, idDivHTML, idDivJSON) {
 // Se crea un Array el listado de webs (separadas por ;)
 var listado = datos.split(';');  
 var webs = new Array;
 var valorEntero = parseInt(valoracion);
 var ficheroHTML = "";
 var ficheroJSON = "";
 var cont = 0;	// Contador de webs leidas
 
 // Recorrer el array para crear los objetos web
 for (var i in listado) {
	// Tomar la url y puntuacion separados por #
	var registro = listado[i].split('#');
	// Si la valoracion es la que se busca o se indica que se busquen todas
	if (parseInt(registro[1]) == valorEntero || valorEntero === 0) {
		webs[cont] = new Web(registro[0], parseInt(registro[1]));
		webs[cont].setLiteralPuntuacion(parseInt(registro[1]));
		cont++;
	}
 }

 // Si no se han encontrado con los criterios, se indica
 if (cont == 0) {
	ficheroHTML = "(No se han encontrado webs con el criterio seleccionado)";
	ficheroJSON = "[]";
 } else {
	 // Recorrer las webs generadas para obtener el fichero html
	 ficheroHTML = "<ul>";
	 for (var i in webs) {
		ficheroHTML += "<li><a href='"+webs[i].url+"' target='_blank'>"+webs[i].url+"</a></li>";
	 }
	 ficheroHTML += "</ul>";
	 ficheroJSON = "[";
	 // Recorrer las webs generadas para obtener el fichero JSON
	 for (var i in webs) {
		ficheroJSON += " {url: '"+webs[i].url+"', puntuacion: "+webs[i].puntuacion+", literalPuntuacion: '"+webs[i].literalPuntuacion+"'},";
	 }
	 ficheroJSON = ficheroJSON.substring(0, ficheroJSON.length -1);  // Se quita la última ',
	 ficheroJSON += "]";   // Se cierra el vector de objetos JSON
 }
 // Mostrar el resultado final
 document.getElementById(idDivHTML).innerHTML  = ficheroHTML;
 document.getElementById(idDivJSON).innerHTML  = ficheroJSON; 
}

