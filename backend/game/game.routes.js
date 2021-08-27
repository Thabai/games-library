const { Router } = require("express");
const gameRouter = Router();
const { createGame, findGame, deleteGame, findAllGames } = require("./game.controllers");

gameRouter.post("/game", createGame);
gameRouter.get("/game/:name", findGame);
gameRouter.delete("/game/:name", deleteGame);
gameRouter.get("/game/Allgames", findAllGames);

module.exports = gameRouter;
