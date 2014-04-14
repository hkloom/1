var express = require('express');
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

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
});
