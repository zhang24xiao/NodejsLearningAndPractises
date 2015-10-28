var http = require('http');

var option = {
	host: 'localhost',
	port: '1088',
	path: '/index.html'
};

var callback = function(res) {
	var body = '';

	res.on('data', function(data){
		body += data;
	});

	res.on('end', function(){
		console.log(body);
	});
}

var req = http.request(option, callback);
req.end();
