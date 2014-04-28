var express = require('express');
var logfmt = require('logfmt');
var df = require('./public/js/dbface.js');
var bp = require('body-parser');
var $ = require('jquery');

var app = express();

df.open();

app.use(express.static(__dirname + '/public'));
app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);
app.use(bp());
app.route('/')
.get( function(req,res){
    console.log("on index page");
  	df.find({title: "my masterpiece"},{title:1,dx:1,dy:1,colors:1},function(items){
  		res.render("index.html",
  			{	
  				title: "VIEW",
  				items: items
  			}
  		);
  	});	
});

app.route('/edit')
.post( function(req,res){
    console.log("Unserialized request: " + JSON.stringify(req.body, null, 4));
    console.log("on edit page");
      res.render("system.html",
        { 
          title: req.body.test,
          system: req.body
        }
      );
    });

app.route('/pixi')
.get( function(req,res){
      res.render("system_pixi.html");
    });

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});