var http = require('http');
var url = require('url');

function start(route, handler) {
	http.createServer(function onRequest(req, res) {
		console.log("request recevied.");

		var pathName = url.parse(req.url).pathname;
		console.log("pathname is: " + pathName);
		if(req.url != '/favicon.ico')
		{
			route(handler, pathName);

			res.writeHead(200, {"Content-Type": "text/plain"});
			res.write("hello world.");
			res.end();
		}
		
	}).listen(1088);

	console.log("service started.");
}

exports.start = start;