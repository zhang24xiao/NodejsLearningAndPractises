var express = require('express');
var bodyParset = require('body-parser');

var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
	response.send("hello world");
});

app.get('/index.html', function(request, response) {
	response.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res) {
	response = {
		first_name: req.query.firstname,
		last_name : req.query.lastname
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(1088, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Server IP is: %s:%s", host, port);
});