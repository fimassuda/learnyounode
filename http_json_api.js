var http = require('http');
//var map = require('through2-map');
var url = require('url');

var server = http.createServer(function(request, response){

	var result;

	if (request.method != 'GET'){
		result = request.end('Only accept GET\n')
	} else {

		var path = url.parse(request.url, true);
		var iso = new Date(path.query.iso)

		if (path.pathname == '/api/parsetime'){
			response.writeHead(200, {'content-type': 'application/json'});
			result = JSON.stringify(
				{
					hour: iso.getHours(),
					minute: iso.getMinutes(),
					second: iso.getSeconds()
				}
			);

		} else if (path.pathname == '/api/unixtime'){
			response.writeHead(200, {'content-type': 'application/json'});
			result = JSON.stringify(
				{
					"unixtime" : iso.getTime()
				}
			);

		} else {
			response.writeHead(404);
			result = JSON.stringify(
				{
					message: 'Resource Not Found'
				}
			);
		}
	}
	
	response.end(result);

});

server.listen(process.argv[2]);