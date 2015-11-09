var mongodb = require('../db/mongodb');
var collections = require('../db/collections');

exports.getAllUsers = function(err, next){
	mongodb.find(collections.users, null, next);
	return true;	 
};

exports.getUserById = function(err, id, next){
	mongodb.find(collections.users, { _id: id }, next);
	return true;
};