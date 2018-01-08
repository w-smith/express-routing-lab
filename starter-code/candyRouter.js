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
 	res.send(candies[Number(req.params.id)-1]);
});


router.post('/', function(req,res) {
 	req.body.id = candies.length+1;
	if(req.body.name && req.body.color){
		console.log('candy created');
		candies.push(req.body);
		res.send(req.body);
	} else{
		console.log('Error');
		res.send('Error: Invalid submission');
	}

});


router.put('/:id', function(req,res) {
	var myID = Number(req.params.id);
	console.log('updated',req.params.id);
	if(req.body.name){
		candies[myID-1].name = req.body.name;
	}
	if(req.body.color){
		candies[myID-1].color = req.body.color;	}

	res.send(candies[myID-1]);
});


router.delete('/:id', function(req, res) {
	candies[req.params.id-1] = null;
	res.send("hi. guys. sup? dog. tight.");
    res.send(candies[req.params.index-1]);
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