app.config(function($routeProvider) {
	$routeProvider
	.when("/lista", {
		templateUrl: "components/utente/views/lista.html",
	})
	.when("/dettaglio/:id", {
		templateUrl: "components/utente/views/dettaglio.html",
	})
	.otherwise({redirectTo: "/lista"})
})