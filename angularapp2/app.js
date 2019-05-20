//definizione modulo overnet in angularjs

var app = angular.module("overnet", []);

//var debugscope = ""; definita globalmente e visibile a tutto javascript

app.controller("userController", function($scope){

	$scope.stampa = function() {
		alert($scope.comune);
	}
})

app.controller("userController2", function($scope){
})