//controller cannot do specific work, it assigns jobs to models for io and data
var math = require('../models/math.js');
var file = require('../models/file.js');

exports.showIndex = function(req,res){
	res.render('index',{

	});
}

exports.showTest = function(req,res){
	var number = req.params.number;
	//var resultsArr = -1;
	//先命令文件读取
	file.test3read(number, function(resultsArr){
		if (resultsArr == -1){
			//当前文件不存在
			//再命令计算
			var resultsArr = math.Cal(number);
			//写入data
			file.test2save(number, resultsArr);
		}
		//呈递视图
		res.render('test', {
			'number' : number,
			'resultsArr' : resultsArr
		});
	});
}