class Game {
    constructor() {
      this._score = 0; // Cambiar el nombre de la propiedad a _score para evitar conflictos
    }
  
    roll(pins) {
      this._score += pins;
    }
  
    score() {
      return this._score;
    }
  }
  
  module.exports = Game;
  