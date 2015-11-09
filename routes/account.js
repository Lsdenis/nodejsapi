var express = require('express');
var router = express.Router();
var account_service = require('../services/account_service')

router.get('/', function(req, res, next){	
	account_service.getAllUsers(null, function(err, elements){
		res.json(elements);
	});
});

router.get('/:id(\\d+)', function(req, res, next){
	var id = parseInt(req.params.id);
	account_service.getUserById(null, id, function(err, elements){
		res.json(elements);
	});
	return true;
});

module.exports = router;