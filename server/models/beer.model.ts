const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
  beerId: String,
  beerCategory: Number,
  name: String,
  location: String,
  strongness: String,
  description: String,
  bitterness: Number,
  color: String
});

const Beer = mongoose.model('Beer', beerSchema);

export default Beer;