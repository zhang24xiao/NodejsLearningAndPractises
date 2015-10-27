var http = require('http');
var fs = require('fs');
var url = require('url');

// create server
http.createServer(function(req, res){
	// parse url path
	var pathName = url.parse(req.url).pathname;

	// print the url name
	console.log("pathname is " + url.parse(req.url));

	// read content with fs
	fs.readFile(pathName.substr(1), function(err, data){
		if (err) {
			// 
			console.log(err);
			res.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			// OK
			res.writeHead(200, {'Content-Type': 'text/html'});
			// response file data
			res.write(data.toString());
		}
		res.end();
	});
}).listen(1088);

console.log("Server is now runing at localhost:1088.");