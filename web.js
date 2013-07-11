var express = require('express');
var fs = require('fs');
var data = fs.readFileSync('index.html', 'utf-8', var buffer = new Buffer);
var html = buffer.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(html + " hi");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
