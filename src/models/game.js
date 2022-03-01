class Game {
  constructor(name, cards, rules) {
    this._name = name;
    this._cards = cards;
    this._rules = rules;
  }

  get name() {
    return this._name;
  }
  get cards() {
    return this._cards;
  }
  get rules() {
    return this._rules;
  }

  createGame() {
    const game = document.createElement("div");
    game.id = "game";

    const gameName = document.createElement("h1");
    gameName.innerText = this.name;

    const selectionSection = document.createElement("div");
    selectionSection.id = "selectionSection";

    const playerSection = document.createElement("div");
    playerSection.id = "playerSection";

    const playerName = document.createElement("h2");
    playerName.innerText = "YOU";

    const computerSection = document.createElement("div");
    computerSection.id = "computerSection";

    const computerName = document.createElement("h2");
    computerName.innerText = "COMPUTER";

    const ulPlayer = document.createElement("ul");

    this.cards.forEach((obj) => {
      ulPlayer.appendChild(obj.createCard());
    });

    const computerSection = document.getElementById("computerSection");
    const ulComputer = document.createElement("ul");
    ulComputer.id = "computerChoice"
    


  }
}

export { Game };
