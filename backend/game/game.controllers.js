const Game = require("./game.model");

// Get a single game
exports.findGame = async (req, res) => {
  try {
    const name = req.param.name;
    const game = await Game.findOne({ name: name });
    if (game !== null) {
      res.status(200).send({ game: game, message: "Game found" });
    } else {
      res.status(404).send({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Not found" });
  }
};


//create a new Game
exports.createGame = async (req, res) => {
    try {
        const game = new Game(req.body);
        const addedGame = await game.save();
        res.status(200).send({ addedGame: addedGame, message: "Game Created" }); 
    } catch (error) {
        if (error.code === 11000) {
            res.status(500).send({message : "Game already in database"})
        } else {
            res.status(500).send(error);
        }
    }
};

// Delete a game
exports.deleteGame = async (req, res) => {
    try {
        const name = req.param.name;
        const game = await Game.findOneAndRemove({ name: name });
        res.status(200).send({ game: game, message: "Game Deleted" }); 
    } catch (error) {
        res.status(500).send(error);
    }
};


// Get all the games sorted by postDate
exports.findAllGames = async (req, res) => {
    try {
        const Games = await Game.find({});
        res.status(200).send(games);
    } catch (error) {
        res.status(500).send({ mssage: "Loading unsuccessful"})
    }
  // Query the db, if no errors send all the games to the client
  Game.find(null, null, { sort: { postDate: 1 } }, (err, games) => {
    if (err) {
      res.send(err);
    }
    res.json(games); // Games sent as json
  });
};