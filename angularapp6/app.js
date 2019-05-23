var app= angular.module("asd", []);

app.directive("datePickerinline", function() {
return {
		restrict: "AE",
		templateUrl:"templateInline.html",
		scope: {
			language:"@"
		}
	   }
})



app.directive("datePicker", function() {
return {
		restrict: "AE",
		templateUrl:"tdirettiva.html",
		scope: {
			language:"@"
		}
	   }
})







app.controller("direttivaController", function($scope) {
	


	$scope.data = moment().format("DD-MM-YYYY");
	$scope.dataEN = moment().format("YYYY/MM/DD");


})


//moment().format("DD-MM-YYYY")
//moment().format("YYYY/MM/DD")