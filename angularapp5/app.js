//definizione modulo overnet in angularjs

var app = angular.module("optionsEx", []);

app.controller("primoController", function($scope){

	$scope.valori = [
	{ id: 1, value:"rosso"},
	{ id: 2, value:"verde"},
	{ id: 3, value:"blu"},
	{ id: 4, value:"giallo"},
	{ id: 5, value:"rosa"}
	];

	$scope.elencoCitta = [
	{ codice: "RM", nome:"Roma", regione:"Lazio"},
	{ codice: "LT", nome:"Latina", regione:"Lazio"},
	{ codice: "MI", nome:"Milano", regione:"Lombardia"},
	{ codice: "NA", nome:"Napoli", regione:"Campania"},
	{ codice: "CO", nome:"Como", regione:"Lombardia"},
	{ codice: "PA", nome:"Palermo", regione:"Sicilia"},
	{ codice: "CT", nome:"Catania", regione:"Sicilia"},
	{ codice: "AV", nome:"Avellino", regione:"Campania"},
	{ codice: "TP", nome:"Trapani", regione:"Sicilia"},
	{ codice: "AG", nome:"Agrigento", regione:"Sicilia"},
	{ codice: "CA", nome:"Caserta", regione:"Campania"},
	{ codice: "CL", nome:"Caltanissetta", regione:"Sicilia"},
	];

	$scope.somma = function(event) {
		$scope.risultato = event.clientX + event.clientY;
		console.log("è stato cliccato alla posizione " + event.clientX + ", " + event.clientY);
		console.log(event)
	}

	$scope.dataOra = new Date();

	//momentjs e introjs 

	});


app.controller("filtroController", function($scope,lowercaseFilter, dateFilter){

	$scope.test = lowercaseFilter("TEST");

	$scope.adesso = new Date();

	dateFilter($scope.adesso, "fullDate")
	//in html è {{adesso | date:"fullDate"}}

	$scope.valori = [
	{ id: 1, value:"rosso"},
	{ id: 2, value:"verde"},
	{ id: 3, value:"blu"},
	{ id: 4, value:"giallo"},
	{ id: 5, value:"rosa"}
	];
});


app.controller("serviceFactory",function(matFactory, matService){

});

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

app.controller("httppost",function($scope,$http){

	$http.post("https://jsonplaceholder.typicode.com/posts",{'iduser':1}).then(
		//primo parametro then
		function successCallbach(data) {
			$scope.data=data.data;
		});
		//secondo parametro then
		function errorCallbeck(response) {
			alert("Si è verificato un errore!");
		}
})


//questo è un nuovo tag
app.directive("titolo", function() {
	return {
		restrict: "E",
		template: "<h1>Questo e un titolo elemento</h1>"
	};
});


app.directive("titolo", function() {
	return {
		restrict: "A",
		template: "<h1>Questo e un titolo attributo!!!</h1>"
	};
});

app.directive("titoloentrambi", function() {
	return {
		restrict: "EA",
		template: "<h1>Questo e un titolo sia attributo che elemento</h1>"
	};
});

app.controller("testCtrl", function($rootScope) {
	$rootScope.nome="NFEWLO"
	$rootScope.cognome="qwerty"
});


app.directive("titolocustom", function($rootScope) {
	return {
		restrict: "EAC",
		template: "<h1>Questo e un titolo {{uno}} {{due}}</h1>",
		scope: {
			uno: "=",
			due: "@"
		}
	};
});




app.directive("dataPicker", function() {
return {
	restrict: "AE",
	templateUrl:"templatedirettiva.html"
}

})


app.controller("direttivaController", function() {
	$scope.data = '22/05/2019';
})