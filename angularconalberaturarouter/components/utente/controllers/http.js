app.controller("http",function($scope,$http){

	$http.get("https://jsonplaceholder.typicode.com/todos").then(
		//primo parametro then
		function successCallbach(datiRicevutiDalBackend) {
			$scope.data=datiRicevutiDalBackend.data;
			$scope.richiesta=datiRicevutiDalBackend;
		});
		//secondo parametro then
		function errorCallbeck(response) {
			alert("Si è verificato un errore!");
		}
})