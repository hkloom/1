var express = require('express');
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);

app.get('/challenge/:number', function(req,res){
  var num =  req.params.number;
  res.render("index.html",
  	{
  		title: "Page # "+num+"!",
  		field1: "Once",
  		field2: "Thrice"
  	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});