//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// How do we 'require' the candyRouter file?
var candyRouter = require("./candyRouter");
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/candies', candyRouter);


//How do we redirect the /candies path





//through our candyRouter?
//Hint: you need app.use

app.listen(3000, function(){
	console.log("HEY BOY HEY");
});