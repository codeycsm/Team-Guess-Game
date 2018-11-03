let teams = [
  "cardinals",
  "falcons",
  "ravens",
  "bills",
  "panthers",
  "bears",
  "bengals",
  "browns",
  "cowboys",
  "broncos",
  "lions",
  "packers",
  "texans",
  "colts",
  "jaguars",
  "cheifs",
  "dolphins",
  "vikings",
  "patriots",
  "saints",
  "giants",
  "jets",
  "raiders",
  "steelers",
  "eagles",
  "chargers",
  "49ers",
  "seahawks",
  "rams",
  "buccaneers",
  "titans",
  "redskins"
];
let keyPressed;
// letters user guessed
let guessedLetters = [];
// users guess amount
let guesses = 10;
let wins = 0;
let games = 0;
let randomNum = Math.floor(Math.random() * 32);
// Team chosen
let teamToGuess = teams[randomNum];
// array to hide and compare team and user guess
let hideTeam = [];

let game = {
  updateHideTeam: function() {
    for (let i = 0; i < teamToGuess.length; i++) {
      if (keyPressed.toUpperCase() === teamToGuess[i].toUpperCase()) {
        hideTeam[i] = keyPressed.toUpperCase();
      }
    }
  },
  checkGuesses: function() {
    if (guesses === 0) {
      setTimeout(function() {
        {
          alert("You ran out of guesses");
          game.resetGame();
        }
      }, 200);

      games++;
      document.querySelector("#wins").innerHTML = wins + " / " + games;
    }
  },
  updateStats: function() {
    document.querySelector("#display").innerHTML = hideTeam.join("");
    document.querySelector("#guessedLetters").innerHTML = guessedLetters.join(
      ""
    );
    document.querySelector("#lives").innerHTML = guesses;
  },
  checkForWin: function() {
    if (hideTeam.join("").toUpperCase() === teamToGuess.toUpperCase()) {
      wins++;
      games++;
      setTimeout(function() {
        {
          alert("You guessed the Team Correctly");
          document.querySelector("#wins").innerHTML = wins + " / " + games;
          game.resetGame();
        }
      }, 200);
    }
  },
  resetGame: function() {
    guesses = 10;
    randomNum = Math.floor(Math.random() * 32);
    teamToGuess = teams[randomNum];
    hideTeam = [];
    guessedLetters = [];
    for (let i = 0; i < teamToGuess.length; i++) {
      hideTeam.push(" - ");
    }
    document.querySelector("#display").innerHTML = hideTeam.join("");
    document.querySelector("#guessedLetters").innerHTML = "";
  }
};
// hides team name and sets to '_'
for (let i = 0; i < teamToGuess.length; i++) {
  hideTeam.push(" _ ");
}
// displays hidden array
document.querySelector("#display").innerHTML = hideTeam.join("");
// displays users guesses
document.querySelector("#lives").innerHTML = guesses;
// displays users wins
document.querySelector("#wins").innerHTML = wins + " / " + games;
// event listener for when user presses a key
document.addEventListener("keypress", function(pressed) {
  // key user pressed
  keyPressed = pressed.key;
  // pushes key pressed into an array of pressed keys
  guessedLetters.push(keyPressed.toUpperCase());
  // checks if keyPressed is in teamToGuess
  let charExists = teamToGuess.indexOf(keyPressed) >= 0;
  // Check if user guess is in team to guess string
  if (charExists) {
    game.updateHideTeam();
    //updateHideTeam();
  } else {
    guesses--;
    game.checkGuesses();
  }
  game.updateStats();
  game.checkForWin();
});
