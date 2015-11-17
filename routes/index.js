var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// var Joke = require('./models/joke');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello, friend!' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Lauren Grant' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Lauren Grant' });
});

/* GET resume page. */
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Lauren Grant' });
});

/* GET jokes page. */
router.get('/jokes', function(req, res, next) {
  res.render('jokes', { title: 'Lauren Grant' });

	// var j = function() {

	//   Joke.count(function(err, count){
	//   	if (err){
	//   		var joke = null;
	//   		res.redirect("/");
	//   	}
	//   	else {
	//   		var i = Math.floor(Math.random()*count);
	//   		Joke.find({}, function(err, j) {
	//   			var joke = j[i]["joke"];
	//   			res.render('jokes', {title: 'Lauren Grant', joke: joke });
	//   		});
	//   	}
	//   });
	// }
	// joke();
});



module.exports = router;
