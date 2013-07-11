var express = require('express');
var fs = require('fs');
var buffer = new Buffer("Hello World");
var data = fs.readFileSync('index.html', 'utf-8', buffer, 0, 0, 1);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
