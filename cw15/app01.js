
const express = require('express')
const app = express();

app.get('/', function(req, res) {
    res.send('hello app15');
});

app.listen(3000, function() {
    console.log('start listner, port 3000');
});
