var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {

	//console.log(strftime('%F %H:%M', new Date()));
	socket.end(strftime('%F %H:%M', new Date())+ '\n');
});

server.listen(process.argv[2]);