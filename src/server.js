var express = require('express');
var bodyParser = require("body-parser");
var multer = require('multer');

var app = express();

// url encoder
var urlEncoderParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.use(multer());

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

// post method
app.post('/process_post', urlEncoderParser, function(req, res) {
	response = {
		firstName: req.body.first_name,
		lastName: req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

// file upload
app.post("/file_upload", function(req, res) {
	console.log(req.files[0]);

	var dest_file = __dirname + '/' + req.files[0].originalname;
	fs.readFile(req.files[0].path, function() {
		fs.writeFile(dest_file, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				response = {
					message: 'File uploaded successfully.',
					filename: req.files[0].originalname
				};
			}
			console.log(response);
			res.send(JSON.stringify(response));
		});
	});
});

var server = app.listen('1088', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("server is running at %s: %s", host, port);
});

