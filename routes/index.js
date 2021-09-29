var express = require('express');
var router = express.Router();


/** Linking Static Files */
router.use(express.static(__dirname + "./public"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login Form',status : '' });
});

module.exports = router;
