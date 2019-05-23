//definizione modulo overnet in angularjs
var app = angular.module("overnet", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/lista", {
		templateUrl: "templates/lista.html",
	})
	.when("/dettaglio/:id", {
		templateUrl: "templates/dettaglio.html",
	})
	.otherwise({redirectTo: "/lista"})
})


app.controller('listaController', ['', function($scope, $http){
	
}])

app.controller("dettaglioController", function($routeParams, $scope) {

	//id è definito nella rotta dopo i :
	alert($routeParams.id);

})
