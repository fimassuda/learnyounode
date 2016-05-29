var fs = require('fs');

var file = fs.readFile(process.argv[2], 'utf8', function callback(err, data){
	console.log(data.split('\n').length-1);
})