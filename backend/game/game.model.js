// Dependencies
import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  picture: { type: String, unique: true, required: true },
  postDate: { type: Date, default: Date.now }, // Timestamp
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;