var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var _ = require("underscore");

// App init
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser('0d05608d8c8851d1c76b19014dbbd76c'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	res.render('index');
});

http.createServer(app).listen(3000, function(){
    console.log('Test server listening on 3000');
});
