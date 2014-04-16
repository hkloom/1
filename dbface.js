var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var server = new Server('ds047387.mongolab.com', 47387, {auto_reconnect : true});
var db = new Db('heroku_app24135520',server);
var awake = false;

var open = function(){
	db.open(function(err,client){
		client.authenticate('heroku_app24135520','osoke5ha3189i78benpm0r6l2c',function(err,success){
		   if(err) (function(err){
	       		console.log(err);
	       })(err);
	       else (function(success){
	       		awake = true;
	       		console.log("---connected to database---");
	       })(success);
		});
	});
};


var add = function(system){
	var subs = db.collection("subs");
	subs.insert(
	{
		title: system.title,
		dx: system.dx,
		dy: system.dy,
		colors: system.colors
	}, 
	{w: 1}, function(err, records){
 		 console.log("System titled "+ system.title+" added to database.");
		}
	);
};

var find = function(template){
		var subs = db.collection("subs");
		console.log(subs);
		var items;
		subs.find(template).toArray(function(err,items){
           if(err) (function(err){
           		console.log(err);
           })(err);
           else (function(items){
           		console.log(items);
           })(items);
        });
        return items;
};

module.exports.open = open;
module.exports.add = add;
module.exports.find = find;
module.exports.awake = awake;