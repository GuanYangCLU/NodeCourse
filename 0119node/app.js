var express = require('express');
var app = express();
var controller = require('./controllers/controller.js');

app.set('view engine', 'ejs');

//router list
//封装于controller
app.get('/', controller.showIndex);
app.get('/:number', controller.showTest);

// set static resource file, otherwise we cannot import css and other stuff
app.use(express.static('public'));
//now we got the router ^o^

app.listen(3000);
console.log('Already Run in port 3000');

