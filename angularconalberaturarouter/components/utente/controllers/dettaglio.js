app.controller("dettaglio", function($scope,$http, $routeParams){

	$http.get("https://jsonplaceholder.typicode.com/todos/"+$routeParams.id).then(
		//primo parametro then
		function successCallbach(datiRicevutiDalBackend) {
			$scope.dettaglioUtente=datiRicevutiDalBackend.data;
		});
		//secondo parametro then
		function errorCallbeck(response) {
			alert("Si è verificato un errore!");
		}


	$scope.toSend ={
		title: $scope.dettaglioUtente
	}

	$scope.inviaDati = function() {
		$http.post("https://jsonplaceholder.typicode.com/posts",$scope.toSend).then(
			//primo parametro then
			function successCallbach(data) {
				alert("inviato");
			},
			//secondo parametro then
			function errorCallbeck(response) {
				alert("Si è verificato un errore!");
			}
		)	
	}
})