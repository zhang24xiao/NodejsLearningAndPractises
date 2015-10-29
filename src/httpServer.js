var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
	var pathName = url.parse(req.url).pathname;

	console.log("Received pathname: " + pathName);

	fs.readFile(pathName.substr(1), function(err, data){
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			fs.readFile("404.html", function(err, d) {
				if (err) {
					console.log(err);
				} else {
					res.write(d.toString());
				}
			});
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data.toString());
		}
		res.end();
	});

}).listen(1088);

console.log("Server is listening at localhost:1088");