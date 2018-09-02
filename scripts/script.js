// Set starting life totals here
var playerLife = 10;
var teacherLife = 10;

// Message when the game is over
var teacherWinnerMessage = "Game over: You got it wrong!";
var playerWinnerMessage = "You've done it!";


// Game code starts here
var playerStartLife = parseInt(playerLife);
var teacherStartLife = parseInt(teacherLife);

var roundFinished = false;
var cardSelected = false;

updateScores();

document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements
for(var i = 0; i < allCardElements.length; i++) {
  var card = allCardElements[i];
  if(card.classList.contains("player-card")) {
    card.addEventListener("click",function(e){
      cardClicked(this);
    });
  }
}


// When a card is clicked
function cardClicked(cardEl) {

  if(cardSelected) { return; }
  cardSelected = true;

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");

  // Wait 500ms to reveal the teacher power
  setTimeout(function(){
    revealteacherPower();
  },500)

  // Wait 750ms to reveal the player power
  setTimeout(function(){
    revealPlayerPower();
  },800)

  // Wait 1250ms to compare the card scoers
  setTimeout(function(){
    compareCards();
  }, 1400);
}

// Shows the power level on the player card
function revealPlayerPower(){
  var playerCard = document.querySelector(".played-card");
  playerCard.classList.add("reveal-power");
}

// Shows the power level on the teacher card
function revealteacherPower(){
  var teacherCard = document.querySelector(".teacher-card");
  teacherCard.classList.add("reveal-power");
}

function compareCards(){
  var playerCard = document.querySelector(".played-card");
  var playerPowerEl = playerCard.querySelector(".power");

  var teacherCard = document.querySelector(".teacher-card");
  var teacherPowerEl = teacherCard.querySelector(".power");

  var playerPower = parseInt(playerPowerEl.innerHTML);
  var teacherPower = parseInt(teacherPowerEl.innerHTML);

  var powerDifference = playerPower - teacherPower;

  if (powerDifference < 0) {
    // Player Loses
    playerLife = playerLife + powerDifference;
    teacherCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
    document.querySelector(".player-stats .thumbnail").classList.add("ouch");
  } else if (powerDifference > 0) {
    // Player Wins
    teacherLife = teacherLife - powerDifference;
    playerCard.classList.add("better-card");
    teacherCard.classList.add("worse-card");
    document.querySelector(".teacher-stats .thumbnail").classList.add("ouch");
  } else {
    playerCard.classList.add("tie-card");
    teacherCard.classList.add("tie-card");
  }

  updateScores();

  if(playerLife <= 0) {
    gameOver("teacher");
  } else if (teacherLife <= 0){
    gameOver("Player")
  }

  roundFinished = true;

  document.querySelector("button.next-turn").removeAttribute("disabled");
}

// Shows the winner message
function gameOver(winner) {
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").style.display = "flex";
  document.querySelector(".winner-section").classList.remove("player-color");
  document.querySelector(".winner-section").classList.remove("teacher-color");

  if(winner == "teacher") {
    document.querySelector(".winner-message").innerHTML = teacherWinnerMessage;
    document.querySelector(".winner-section").classList.add("teacher-color");
  } else {
    document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
    document.querySelector(".winner-section").classList.add("player-color");
  }
}


// Starts the game
function startGame() {
  document.querySelector(".game-board").classList.remove("before-game");
  document.querySelector(".game-board").classList.add("during-game");
  playTurn();
}


// Start the game over from scratch
function restartGame(){
  document.querySelector(".game-board").classList.remove("game-over");
  document.querySelector(".game-board").classList.remove("during-game");
  document.querySelector(".game-board").classList.add("before-game");

  document.querySelector(".winner-section").style.display = "none";
  document.querySelector(".teacher-card").style.display = "none";

  var cards = allCardElements;

  document.querySelector("button").removeAttribute("disabled");

  for(var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  playerLife = playerStartLife;
  teacherLife = teacherStartLife;

  roundFinished = true;
  cardSelected = false;

  updateScores();
}

// Updates the displayed life bar and life totals
function updateScores(){

  // Update life totals for each player
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".teacher-stats .life-total").innerHTML = teacherLife;

  // Update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0) {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height =  playerPercent + "%";

  // Update the teacher lifebar
  var teacherPercent = teacherLife / teacherStartLife * 100
  if (teacherPercent < 0) {
    teacherPercent = 0;
  }
  document.querySelector(".teacher-stats .life-left").style.height =  teacherPercent + "%";
}


// Shuffles an array
function shuffleArray(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}


// Plays one turn of the game
function playTurn() {

  roundFinished = true;
  cardSelected = false;

  document.querySelector(".game-board").classList.remove("card-selected");

  // Remove "ouch" class from player and teacher thumbnails
  document.querySelector(".teacher-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".player-stats .thumbnail").classList.remove("ouch");

  // Hides the "next turn" button, will show again when turn is over
  document.querySelector(".next-turn").setAttribute("disabled", "true");

  for(var i = 0; i < allCardElements.length; i++) {
    var card = allCardElements[i];
    card.classList.remove("showCard");
  }

  setTimeout(function(){
    revealCards();
  }, 500);
}

function revealCards(){
  var j = 0;
  var cardIndexes = shuffleArray([0,1,2]);


  // Get scenario cards
  var randomScenarioIndex = Math.floor(Math.random() * (scenarios.length));
  var scenario = scenarios[randomScenarioIndex];

  var teacherCard = scenario.teacherCard;
  var teacherCardEl = document.querySelector(".teacher-area .card");
// Override the original width and make the teacher card bigger
  teacherCardEl.style.width='330px';

  // Contents of the player cards
  var playerCards = scenario.playerCards;

  for(var i = 0; i < allCardElements.length; i++) {
    var card = allCardElements[i];

    card.classList.remove("worse-card");
    card.classList.remove("better-card");
    card.classList.remove("played-card");
    card.classList.remove("tie-card");
    card.classList.remove("prepared");
    card.classList.remove("reveal-power");

    // Display the payer card details
    if(card.classList.contains("player-card")) {
      card.querySelector(".text").innerHTML = playerCards[cardIndexes[j]].description;
      card.querySelector(".power").innerHTML = playerCards[cardIndexes[j]].power;
      j++;
    }

    // Reveal each card one by one with a delay of 100ms
    setTimeout(function(card, j){
      return function() {
        card.classList.remove("prepared");
        card.style.display = "block";
        card.classList.add("showCard");
      }
    }(card,i), parseInt(i+1) * 200);
  }

  // Display the teacher card
  teacherCardEl.querySelector(".text").innerHTML = teacherCard.description;
  teacherCardEl.querySelector(".power").innerHTML = teacherCard.power;
}
