var express = require('express');
var app = express();

//your routes here
app.get('/', function (req, res) {
	
    res.sendfile('/t1.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
