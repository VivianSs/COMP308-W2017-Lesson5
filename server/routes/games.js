// import the express object
let express = require('express');
// create the router for our application
let router = express.Router();

// import mongoose NPM package
let mongoose = require('mongoose');

// create the game object - represents a document in the
// games collection
let game = require('../models/games');

/* GET main games page. */
router.get('/', (req, res, next) => {
  // find all games in the games collection

  game.find((err, games) => {

    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/gamelist', {
        title: 'Games',
        games: games
      });
    }
  });
});



module.exports = router;
