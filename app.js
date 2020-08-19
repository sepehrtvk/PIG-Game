/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

initGame();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;
    dice1 = Math.floor(Math.random() * 6) + 1;

    var DOMDice = document.querySelector(".dice");
    DOMDice.style.display = "block";
    DOMDice.src = "dice-" + dice + ".png";

    var DOMDice1 = document.querySelector(".dice1");
    DOMDice1.style.display = "block";
    DOMDice1.src = "dice-" + dice1 + ".png";

    console.log(dice+" "+dice1);
    if (dice !== 1 && dice1 !== 1) {
      roundScore += dice+dice1;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      scores[activePlayer] += roundScore;
      roundScore = 0;
      document.getElementById("score-" + activePlayer).textContent =
        scores[activePlayer];

      if (scores[activePlayer] >= 100) {
        makeWinner();
      }
      changePlayer();
      DOMDice.style.display = "none";
      DOMDice1.style.display = "none";

    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      makeWinner();
    } else {
      changePlayer();
    }
  }
});

function changePlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
function makeWinner() {
  document.querySelector("#name-" + activePlayer).textContent = "Winner !";
  document.querySelector(".dice").style.display = "none";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("winner");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  gamePlaying = false;
}
document.querySelector(".btn-new").addEventListener("click", initGame);

function initGame() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice1").style.display = "none";

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
