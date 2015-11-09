var express = require('express');
var router = express.Router();
var jade = require('jade');

/* GET home page. */
router.get('/', function(req, res, next) {
  var fn = jade.compile('index');
  var htmlOutput = fn({
    test : {
      value : 'test' 
    } 
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
