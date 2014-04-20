var express = require('express');
var logfmt = require('logfmt');
var df = require('./public/js/dbface.js');
var app = express();

df.open();


app.use(express.static(__dirname + '/public'));
app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);
app.get('/challenge/:number', function(req,res){
    console.log("on index page");
  	var num =  req.params.number;
  	df.find({test: "shoe"},function(items){
  		res.render("index.html",
  			{	
  				title: num+" -- "+num+" -- "+num+" -- "+num+" -- "+num,
  				items: items
  			}
  		);
  	});
  	
});
app.post('/edit', function(req,res){
  console.log("redirecting to edit page");
      res.render("system.html",
        { 
          title: "test"
        }); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});