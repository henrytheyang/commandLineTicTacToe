class Game {
  constructor() {
    this.grid = {
      UL: ' ',
      UM: ' ',
      UR: ' ',
      ML: ' ',
      MM: ' ',
      MR: ' ',
      LL: ' ',
      LM: ' ',
      LR: ' ',
    };
    this.winnerPresent = false;
    this.currentPlayer = 1;
  }
  changePlayer() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }
  changeTile(location) {
    this.grid[location] = this.currentPlayer;
  }
  displayBoard() {
    console.log(
      `\n ${this.grid.UL} || ${this.grid.UM} || ${this.grid.UR} \n______________\n______________\n ${this.grid.ML} || ${this.grid.MM} || ${this.grid.MR}\n______________\n______________\n ${this.grid.LL} || ${this.grid.LM} || ${this.grid.LR}`
    );
  }
}

let friendlyMatch = new Game();
friendlyMatch.displayBoard();
