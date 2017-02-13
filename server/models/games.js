// import  the mongoose npm package
let mongoose = require('mongoose');

// create a model class -- specify the document structure
let gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "games"
});

module.exports = mongoose.model('games', gamesSchema);
