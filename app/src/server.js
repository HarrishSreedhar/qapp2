var express = require('express');
var app = express();

//your routes here
app.get('/login', function (req, res) {
	
    res.send("Holaaaa!!!!");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
