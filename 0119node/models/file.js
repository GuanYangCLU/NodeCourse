var fs = require('fs');
// var baseurl = require('./data');

//test2
exports.test2save = function(number, resultsArr){
	fs.writeFile('./data/' + number + '.txt', JSON.stringify(resultsArr));
	//console.log('save used');
}

//test3
exports.test3read = function(number, callback){
	//异步不能通过return来返回value
	fs.readFile('./data/' + number + '.txt', function(err, data){
		try {
			callback(JSON.parse(data));
		//console.log(JSON.parse(data));
		} catch (err) {
			console.log(err);
			callback(-1);
			//console.log(-1);
			return;
		}		
	});
}

//save
// exports.save = function(userId, data, callback){
// 	//write
// 	fs.writeFile(baseurl + '/' + userId + '.txt', data, callback);
// }

//get all file names from folders
// exports.getAllFilesName = function(callback){
// 	//readdir is an API of fs, can read file names to an array
// 	fs.readdir(baseurl, function(err, filenameArray){
// 		if (err) {
// 			// throw new Error = 'Error in reading files!';
// 			return;
// 		}
// 		// Ajax async function cannot return, must use callback
// 		callback(filenameArray);
// 	});
// }

