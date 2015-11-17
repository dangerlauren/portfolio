var mongoose = require('mongoose');

var jokeSchema = new mongoose.Schema({
	joke: { type: String, required: true }
});

var Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;