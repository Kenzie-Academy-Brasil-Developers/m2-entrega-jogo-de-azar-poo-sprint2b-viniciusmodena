import { Card } from "./models/card.js";

const scissors = new Card("Scissors", "./src/img/scissors.png");
const paper = new Card("Paper", "./src/img/paper.png");
const rock = new Card("Rock", "./src/img/rock.png");

const playersSection = document.getElementById("playerSection");
const ulPlayer = document.createElement("ul");
ulPlayer.appendChild(scissors.createCard());
ulPlayer.appendChild(paper.createCard());
ulPlayer.appendChild(rock.createCard());
playersSection.appendChild(ulPlayer);

const computerSection = document.getElementById("computerSection");
const ulComputer = document.createElement("ul");

playersSection.addEventListener("click", (event) => {
    if(event.target.tagName == "IMG"){
        if (event.target.alt === "Rock" || "Paper" || "Scissors") {
          const playerCard = event.target.alt;
          const computerCard = computerSelection();
      
          ulComputer.innerHTML = "";
          ulComputer.appendChild(computerCard.createCard());
      
          computerSection.appendChild(ulComputer);
      
          checkWinner(playerCard, computerCard.name);
        }
    }
});

function computerSelection() {
  let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let computerCard = "";
  if (random === 1) {
    computerCard = scissors;
  } else if (random === 2) {
    computerCard = paper;
  } else {
    computerCard = rock;
  }
  return computerCard;
}

const mensageBox = document.getElementsByClassName("message")[0];
const buttonReset = document.createElement("button")

function checkWinner(selectCard, computerCard) {
  mensageBox.classList.remove("hidden");

  if (selectCard === computerCard) {
    mensageBox.innerHTML = "<p>It's a Draw</p>";
  } else if (
    (selectCard === "Rock" && computerCard === "Scissors") ||
    (selectCard === "Scissors" && computerCard === "Paper") ||
    (selectCard === "Paper" && computerCard === "Rock")
  ) {
    mensageBox.innerHTML = `<p>You Win</p>`
  } else {
    mensageBox.innerHTML = `<p>Computer Wins</p>`
  }

  buttonReset.id = "reset"
  buttonReset.innerText = "Play Again"
  mensageBox.appendChild(buttonReset)

}

buttonReset.addEventListener("click", ()=>{
        mensageBox.classList.add("hidden")
        ulComputer.innerHTML=""
})