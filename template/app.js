//definizione modulo overnet in angularjs

var app = angular.module("overnet", []);

//var debugscope = ""; definita globalmente e visibile a tutto javascript

app.controller("controller", function($scope){

	$scope.nome="Daniele Lo Vetere";

	// $scope.stampa = function() {
	// 	alert($scope.nome);
	// }
})