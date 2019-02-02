//controller cannot do specific work, it assigns jobs to models for io and data

exports.Cal = function(number){
	// 
	var resultsArr = [];

	for (var i = 0; i <= number; i++){
		if (number % i == 0){
			resultsArr.push(i);
		}
	}
	//console.log('math used');
	return resultsArr;
}