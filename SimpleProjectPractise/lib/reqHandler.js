function start(response) {
	console.log('request \'start\' handling');

	response.writeHead(200, {"Content-Type": "text/text"});
	response.sendFile("../htm/start.html");
	response.end();
}

function upload(response) {
	console.log('request \'start\' handling');

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("hello world.");
	response.end();
}

exports.start = start;
exports.upload = upload;