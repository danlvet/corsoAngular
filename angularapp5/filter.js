app.filter("capitalize", function() {
	
	return function(strInput) {
		
		var toReturn = "->"+strInput;
		var words = strInput.split(" ");
		var capitalized = [];

		var i;
		for (i = 0; i < words.length; i++) {
				capitalized[i]=words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
			}



		return capitalized.join(" ");
	}

});

app.filter("italianformat", function() {

	return function(numberInput) {

		var strInput;

		strInput="Euro "+numberInput+",00";
		strInput=strInput.replace(".",",");

		return strInput;
	}
})


app.filter("eurize", function(currencyFilter) {

	return function(numInput) {

		return currencyFilter(numInput, "Euro ", 2)
		.replace(".","_")
		.replace(",",".")
		.replace("_",",");
	}
})