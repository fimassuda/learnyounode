var http = require('http');
var bl = require('bl')
var res = []
var count = 0;

function printResults(){
	for (var i = 0; i < 3; i++){
		console.log(res[i]);
	}
}

function httpGet(url){
	http.get(url, function(response){
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(err);

			res[count] = data.toString();
			count++;

			if (count == 3)
				printResults()
		}));
	});	
}

for (var i = 2; i < process.argv.length; i++){
	httpGet(process.argv[i])
}