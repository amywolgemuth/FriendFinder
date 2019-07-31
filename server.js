// Dependencies
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
app.use(require("./app/routing/apiRoutes"));
app.use(require("./app/routing/htmlRoutes"));

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});