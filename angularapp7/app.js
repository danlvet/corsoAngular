//definizione modulo overnet in angularjs
var app = angular.module("form", []);

app.controller("ciao", function($scope, $http) {
	$scope.invia = function(utente) {
			$http.post("https://jsonplaceholder.typicode.com/posts", {'iduser':utente.nome}).then(
		//primo parametro then
		function successCallbach(data) {
			alert("Dati correttamente inviati");
		});
		//secondo parametro then
		function errorCallbeck(response) {
			alert("Si è verificato un errore!");
		}
	}
})