var mongoClient = require('mongoskin');
var assert = require('assert');
var undescore = require('underscore');
var url = 'mongodb://localhost:27017/api';

exports.find = function find(collection, predicate) {
	if (collection == false)
	{
		return false;
	}	
	
	var db = mongoClient.db(url, {native_parser:true});
	var col = db.collection(collection);
	
	// var elements;
	
	// mongoClient.connect(url, function(err, db) {
	// 	var foundedCollection = db.collection(collection);
		
	// 	foundedCollection.find(predicate).toArray(function(err, docs){
	// 		elements = docs.map(function(el){
	// 			return {id : el._id, name: el.name};
	// 		});
			
	// 		return elements;
	// 	});
		
	// 	db.close();
	// });
	
	// return elements;
};
