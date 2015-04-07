function addFive (numberToIncrement) {
	return new Promise(function(resolve, reject){
		if (typeof numberToIncrement === "number") {
			numberToIncrement = numberToIncrement + 5;
			resolve(numberToIncrement);
		}
		else {
			reject("NaN")
		}
	});
}

//Lets test our method out by using then to output the response of our promise
addFive(10).then(function(response){
	console.log(response); //Should log 15 to console
});

//Now lets add error handling
addFive("10").then(function(response){
	console.log(response); 
}, function(error){
	console.error(error); //Should log an error to the console as it wasnt a number
});