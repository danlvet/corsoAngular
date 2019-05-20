//definizione modulo overnet in angularjs

var app = angular.module("overnet", []);

//var debugscope = ""; definita globalmente e visibile a tutto javascript

app.controller("headerController", function($scope){

	//debugscope= $scope; 
	
	$scope.test="pippo";

	this.nome = "Angelo";

	this.somma = function(x,y){
		return x+y;
	}
	//alert("ciao mondo!");
})

app.controller("contentController", function($scope){

	$scope.test="bau";

	$scope.utente = {};

	var self=this;

	$scope.stampa = function() {
		alert($scope.utente.nome + " " + $scope.utente.cognome);
	}

})