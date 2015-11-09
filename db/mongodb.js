var mongoClient = require('mongoskin');
var assert = require('assert');
var undescore = require('underscore');
var url = 'mongodb://localhost:27017/api';

exports.find = function find(collection, predicate, next) {
	if (collection == false)
	{
		return false;
	}	
	
	var db = mongoClient.db(url, {native_parser:true});
			
	db.collection(collection).find(predicate).toArray(function(err, docs){		
		next(err, docs);
		db.close();
	}); 
	
	return true;
};
