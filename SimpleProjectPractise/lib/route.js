function route(handler, pathName, response) {
	console.log("About to route a request for " + pathName);

	if(typeof handler[pathName] == 'function') {
		handler[pathName](response);
	} else {
		console.log('pathName NOT found.');
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 NOT found");
		response.end();
	}
	
}

exports.route = route;