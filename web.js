var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var fs = require('fs');
    var text = fs.readFileSync('index.html', 'utf8');
        response.send(text);
});


/*
fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

