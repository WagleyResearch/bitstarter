var express = require('express');
var fs = require('fs');
var buffer = new Buffer('utf-8');
var data = fs.readFileSync('index.html',  buffer);
var html = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(html + " hi");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
