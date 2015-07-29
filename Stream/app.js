var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	var newFile = fs.createWriteStream("readme_upload.md");
	var fileBytes = request.headers["content-length"];
	console.log("fileBytes: " + fileBytes);
	var uploadBytes = 0;

	request.on('readable', function(){
		var chunk = null;
		var progress = null;
		console.log("readable event has been emit");
		while(null !== (chunk = request.read())){
			uploadBytes += chunk.length;
			progress = (uploadBytes / fileBytes) * 100;
			console.log("progress: " + progress + "%\n");
			response.write("progress: " + parseInt(progress, 10) + "%\n");
		}
	});
	request.pipe(newFile);
	request.on('end', function(){
		response.end();
	});
}).listen(8080);