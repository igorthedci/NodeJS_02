// source = http://expressjs.com/en/starter/hello-world.html
//

var express = require('express');
var app = express();
var port = 3000;
var pathName = '127.0.0.1';
// app.use();  // middle ware

app.get('/', function(req, res) {
    res.send('EXPRESS !!!');
})

app.listen(port, pathName, function() {
    console.log('start listening...');
})
