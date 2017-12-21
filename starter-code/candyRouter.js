var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


var candies = [{ "id":1, "name": "Snickers", "color": "Brown"},
				{ "id":2, "name": "Skittles", "color": "All"},
				{ "id":3, "name": "Twizzler", "color": "Red"}
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
		// What would go here? 
		// Hint: we want all candies in JSON format
		res.json(candies);
});



router.get('/:id', function(req, res) {
 // SHOW
 	res.json(candies[req.params.id-1]);
});


router.post('/', function(req,res) {
 	candies.push(req.candies);
	res.json(req.candies);
});


// router.get('/new', function(req, res) {
//  // NEW - Typically Displays an HTML Form
//  res.send('this would typically display an HTML form');
// });


// router.post('/', function(req, res) {
//  res.send(candies);
// });

// Fill out the rest of the routes here

module.exports = router;