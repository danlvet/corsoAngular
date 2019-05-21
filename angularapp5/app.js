//definizione modulo overnet in angularjs

var app = angular.module("optionsEx", []);

app.controller("primoController", function($scope){

	$scope.valori = [
	{ id: 1, value:"rosso"},
	{ id: 2, value:"verde"},
	{ id: 3, value:"blu"},
	{ id: 4, value:"giallo"},
	{ id: 5, value:"rosa"}
	];

	$scope.elencoCitta = [
	{ codice: "RM", nome:"Roma", regione:"Lazio"},
	{ codice: "LT", nome:"Latina", regione:"Lazio"},
	{ codice: "MI", nome:"Milano", regione:"Lombardia"},
	{ codice: "NA", nome:"Napoli", regione:"Campania"},
	{ codice: "CO", nome:"Como", regione:"Lombardia"},
	{ codice: "PA", nome:"Palermo", regione:"Sicilia"},
	{ codice: "CT", nome:"Catania", regione:"Sicilia"},
	{ codice: "AV", nome:"Avellino", regione:"Campania"},
	{ codice: "TP", nome:"Trapani", regione:"Sicilia"},
	{ codice: "AG", nome:"Agrigento", regione:"Sicilia"},
	{ codice: "CA", nome:"Caserta", regione:"Campania"},
	{ codice: "CL", nome:"Caltanissetta", regione:"Sicilia"},
	];

	$scope.somma = function(event) {
		$scope.risultato = event.clientX + event.clientY;
		console.log("è stato cliccato alla posizione " + event.clientX + ", " + event.clientY);
		console.log(event)
	}

	})
