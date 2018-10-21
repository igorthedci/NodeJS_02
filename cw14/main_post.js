// source = http://expressjs.com/en/starter/hello-world.html
//
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;
var pathName = '127.0.0.1';

app.use(bodyParser.json());  // middle ware
app.use(bodyParser.urlencoded( {extended: true} ));  // middle ware

var products = [
    {
        id: 1,
        name: 'apples',
        units: 'kg',
        quantity: 30.,
        price: 20.
    },
    {
        id: 2,
        name: 'oranges',
        units: 'kg',
        quantity: 20.,
        price: 80.
    },
];

app.get('/products', function(req, res) {
    res.send(products);
})

app.get('/products/:id', function(req, res) {
    // res.send(typeof req.params.id);
    var myProduct = res.send(products.find(function(product) {
        return product.id = +req.params.id;
    }));
    res.send(myProduct);
})

app.post('/products', function(req, res) {
    // res.send(products);
    // console.log(req);
    var product = {
        id: Date.now(),
        name: req.body.name,
        units: req.body.units,
        quantity: req.body.quantity.quantity,
        price: req.body.price
    };
    // console.log(product);
    products.push(product);
    res.send(products);
})


app.listen(port, pathName, function() {
    console.log('start listening...');
})
