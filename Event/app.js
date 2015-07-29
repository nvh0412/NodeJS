var http = require('http');
var events =require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var user = [], chatLog = [];

chat.on('message', function(message){
	chatLog.push(message);
	console.log(chatLog);
});

chat.on('join', function(username){
	user.push(username);
	console.log(username);
});

chat.emit('join', "HoaNV");
chat.emit('message', "Hello Dog!");

var server = http.createServer();

server.on('request', function(request, response){
	console.log("A new request is coming...");
	response.writeHeader(200);
	response.end("Return result");
});

server.on('close', function(request, response){
	console.log("Server is shutting down...");
});

server.listen(8080);