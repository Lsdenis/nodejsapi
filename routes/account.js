var express = require('express');
var router = express.Router();
var mongodb = require('../db/mongodb');

router.get('/', function(req, res, next){
	var users = mongodb.find('users');
});

module.exports = router;