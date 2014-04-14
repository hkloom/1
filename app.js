var express = require('express');
var app = express();

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

var server = app.listen(3000, function(){
  console.log('Listening on port %d', server.address().port);
});
