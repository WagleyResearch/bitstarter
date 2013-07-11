var express = require('express');
var data = fs.readSync('index.html', buffer = new Buffer);
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('index.php');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
