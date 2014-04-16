var express = require('express');
var logfmt = require('logfmt');
var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var app = express();

var server = new Server('ds047387.mongolab.com', 47387, {auto_reconnect : true});
var db = new Db('heroku_app24135520',server);

db.open(function(err,client){
	client.authenticate('heroku_app24135520','osoke5ha3189i78benpm0r6l2c',function(err,success){
		var subs = db.collection("subs");
		console.log(subs);
		subs.insert({test:"shoe"},{w: 1},function(err,records){
			console.log("Record added: "+records[0]._id);
		});
	});
});

app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);

app.get('/challenge/:number', function(req,res){
	var cursor;
		var subs = db.collection("subs");
		console.log(subs);
		var items;
		subs.find({test: "shoe"}).toArray(function(err,items){
           if(err) (function(err){})(err);
           else (function(items){
           		console.log(items);
           })(items);
        });
	console.log(items);
	//var first_doc = cursor.next();
	//console.log(first_doc);
  	var num =  req.params.number;
  	res.render("index.html",
  		{	title: "Page "+num+"",
  			field1: "Forthemore",//first_doc.test,
  			field2: "Thrice"
  		});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});