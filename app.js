var express = require('express');
var logfmt = require('logfmt');
var df = require('./dbface.js');
var app = express();

df.open();

app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);
app.get('/challenge/:number', function(req,res){
  	var num =  req.params.number;
  	res.render("index.html",
  		{	title: "Page "+num+"",
  			field1: "Forthemore",//first_doc.test,
  			field2: df.find({test:"boobs"})
  		});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});