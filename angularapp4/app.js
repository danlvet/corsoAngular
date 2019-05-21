//definizione modulo overnet in angularjs

var app = angular.module("overnet", []);

//var debugscope = ""; definita globalmente e visibile a tutto javascript

app.controller("controller", function($scope){

	$scope.nome="Daniele Lo Vetere";

	// $scope.stampa = function() {
	// 	alert($scope.nome);
	// }

})


app.controller("controller2", function($scope){

	$scope.elencoNomi = ["Andrea","Marco","Giovanni","Roberto", "Andrea"];

})


app.controller("controller3", function($scope){

	$scope.persone = [
	{ nome: "Andrea", cognome:"Rossi", citta: "Roma"},
	{ nome: "Marco", cognome:"Verdi", citta: "Milano"},
	{ nome: "Giovanni", cognome:"Rossi", citta: "Napoli"},
	{ nome: "Roberto", cognome:"Rossi", citta: "Palermo"}
	];

})