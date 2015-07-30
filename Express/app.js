var express = require('express');
var request = require('request');
var url = require('url');
//Create application server with express.js
var app = express();

//create an API with get function
app.get('/hello', function(req, res){
	res.write("Hello");
	res.end();
});

app.get('/twitter/:name', function(req, res){
	var name = req.params.name;

	options = {
		protocol : "http:",
		host : "api.twitter.com",
		pathname : "/1.1/statuses/user_timeline.json",
		query : { screen_name: name, count: 10 }
	}

	var formatedURL = url.format(options);
	request(formatedURL).pipe(res);

});


app.listen(8080);