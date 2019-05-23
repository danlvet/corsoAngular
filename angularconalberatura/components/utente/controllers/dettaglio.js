app.controller("dettaglio", function($scope,$http, $routeParams){

	$scope.toSend = {}

	$http.get("https://jsonplaceholder.typicode.com/todos/"+$routeParams.id).then(
		//primo parametro then
		function successCallbach(datiRicevutiDalBackend) {
			$scope.dettaglioUtente=datiRicevutiDalBackend.data;
			$scope.toSend.title = $scope.dettaglioUtente.title
		},
		//secondo parametro then
		function errorCallbeck(response) {
			alert("Si è verificato un errore!");
		}
	)

	

	$scope.inviaDati = function() {
		$http.post("https://jsonplaceholder.typicode.com/posts",$scope.toSend).then(
			//primo parametro then
			function successCallbach(data) {
				alert($scope.toSend.nome + " " +$scope.toSend.email + " ha modificato correttamente il titolo " );
			},
			//secondo parametro then
			function errorCallbeck(response) {
				alert("Si è verificato un errore!");
			}
		)	
	}
})