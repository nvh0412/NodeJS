var express = require('express');

//RequestListener
var app = express();

//Create a server with createServer([requestListener])
var server = require('http').createServer(app);

//Require and create a socket IO.
var io = require('socket.io')(server);

//Create a listener when connect has been emitted
io.on('connect', function(client){
	console.log('Client connected...');
})

server.listen(8080);

