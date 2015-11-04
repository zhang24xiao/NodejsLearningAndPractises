var express = require('express');
var bodyParser = require("body-parser");
var multer = require('multer');
var cookieParser = require('cookie-parser');
var fs = require('fs');

var app = express();

// url encoder
var urlEncoderParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.use(cookieParser());

// var mMulter = multer({
// 	dest: './uploads/'
// });
// app.use(multer({
// 	dest: './uploads/',
// }));

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
// app.post('/file_upload', function(req, res) {
// 	console.log(req.files[0]);

// 	var dest_file = __dirname + '/' + req.files[0].originalname;
// 	fs.readFile(req.files[0].path, function() {
// 		fs.writeFile(dest_file, data, function(err) {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				response = {
// 					message: 'File uploaded successfully.',
// 					filename: req.files[0].originalname
// 				};
// 			}
// 			console.log(response);
// 			res.send(JSON.stringify(response));
// 		});
// 	});
// });


// cookie management.
// app.get('/', fucntion(req, res) {
// 	console.log('Cookies: ' + req.cookies);
// });

// RESTful apis
/* create api function listUsers */
app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/user.json", 'utf8', function(err, data) {
		console.log(data);
		res.end(data);
	});
});

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",]
      "profession" : "teacher",
      "id": 4
   }
}
app.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
   		if(err) {
   			console.log(err);
   		} else {
   			data = JSON.parse( JSON.stringify(data) );
   			console.log(data+'\n')
       		data["user4"] = user["user4"];
       		console.log( data );
       		res.end( JSON.stringify(data));
   		}
   });
})

var server = app.listen('1088', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("server is running at %s: %s", host, port);
});

