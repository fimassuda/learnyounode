module.exports = function(dirName, extension, callback){
	var fs = require('fs');
	var extension = "." + extension;
	var filesFiltered = [];

	fs.readdir(dirName, function (err, list){
		
		if (err)
			return callback(err);

		for (var i = 0; i < list.length; i++){
			if (list[i].substr(-(extension.length)) === extension){
				//console.log(list[i]);
				filesFiltered.push(list[i]);
			}
		}
		callback(null, filesFiltered);
	});
}