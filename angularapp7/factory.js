app.factory('matFactory', function(){
	return {
	somma: function(x,y){
	return x+y;
	},
	sottrazione: function(x,y){
	return x*y;
	}
	}
})

app.constant("basepath", "https://jsonplaceholder.typicode.com");

app.factory("APIService", function($http, basepath){
	return {
	somma: function(x,y){
	return x+y;
	},
	sottrazione: function(x,y){
	return x*y;
	}
	}
})