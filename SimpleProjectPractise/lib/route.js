function route(handler, pathName) {
	console.log("About to route a request for " + pathName);

	if(typeof handler[pathName] == 'function') {
		handler[pathName]();
	} else {
		console.log('pathName NOT found.');
	}
	
}

exports.route = route;