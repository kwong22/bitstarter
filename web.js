var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlFile = 'index.html';

app.get('/', function(request, response) {
    response.send(fs.readFileSync(htmlFile).toString());
});

/*
fs.readFile('index.html', 'utf8', function(err, data) {
    if (err) { return console.log(err); }

    app.get('/', function(request, response) {
	response.send(data);
    });

});
*/

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
