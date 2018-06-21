// app.component.html; .ts ; 

var express = require('express');
var app = express();
//BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');

//IMPORT ANGULAR
app.use(express.static( __dirname + '/public/dist/public' )); 

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});