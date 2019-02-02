//controller cannot do specific work, it assigns jobs to models for io and data
var file = require('../models/file.js');

exports.restore = (callback, function(req,res){

})

exports.showIndex = (callback, function(req,res){
	
})

//print middle level
exports.showOrders = function(req,res){
	// let file model to read files content and show views
	file.getAllFilesName(function(arr){
		//arr is all files name
		res.render('Order.ejs', {
			'All User Id' : arr
		});
	});
}
