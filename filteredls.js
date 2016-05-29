var fs = require('fs');
var dir = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(dir, function callback(err, list){
	if (err) return console.error(err);

	for (var i = 0; i < list.length; i++){
		if (list[i].substr(-(extension.length)) === extension){
			console.log(list[i]);
		}
	}
});