var mymodule = require('./makemodule_filter.js')

var dir = process.argv[2];
var extension = process.argv[3];

mymodule(dir, extension, function callback(err, data){
	//console.log(data);
	data.forEach(function (file){
		console.log(file)
	});
})