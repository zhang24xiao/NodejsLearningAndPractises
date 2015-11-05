//var express = require('../express');
var service = require('./lib/service');
var route = require('./lib/route');
var reqHandler = require('./lib/reqHandler');

//var app = express();

var handler = {};
handler['/'] = reqHandler.start;
handler['/start'] = reqHandler.start;
handler['/upload'] = reqHandler.upload;

service.start(route.route, handler);
