var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	var contents = fs.readFile('index.html', function(error, contents){
		response.write(contents);
		console.log("Return respose....");
		response.end();
	});

}).listen(8080);

