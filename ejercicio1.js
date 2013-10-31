var datos = "www.google.es#5;www.microsoft.com#1;www.weather.com#3;www.granada.org#4;www.github.com#4;www.grooveshark.com#4;www.facebook.com#3";

function Web(url, puntuacion) {
	this.url = url;
	this.puntuacion = puntuacion;
	this.literalPuntuacion;
	this.setLiteralPuntuacion	= setLiteralPuntuacion;
}

function setLiteralPuntuacion(puntuacion) {
	var literal;
	switch(puntuacion) {
		case '1':
			literal = 'Peligroso!';
			break;
		case '2':
			literal = 'Nada recomendable';
			break;
		case '3':
			literal = 'Interés moderado';
			break;
		case '4':
			literal = 'Muy recomendable';
			break;
		case '5':
			literal = 'Imprescindible';
			break;
	}
	this.literalPuntuacion = literal;
}

	// Se toma el listado de webs separadas por ;
var listado = datos.split(';');  
for (var i in listado)
	

