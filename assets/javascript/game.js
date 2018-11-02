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
// letters user guessed
let guessedLetters = [];
// users guess amount
let guesses = 10;
let randomNum = Math.floor(Math.random() * 32);
// Team chosen
let teamToGuess = teams[randomNum];
// array to hide and compare team and user guess
let hideTeam = [];

console.log("Team to guess " + teamToGuess);

// hides team name and sets to '-'
for (let i = 0; i < teamToGuess.length; i++) {
  hideTeam.push("-");
}
// displays hidden array
document.getElementById("display").innerHTML = hideTeam.join("");
// displays users guesses
document.getElementById("lives").innerHTML = guesses;
// event listener for when user presses a key
document.addEventListener("keypress", function(pressed) {
  // key user pressed
  let keyPressed = pressed.key;
  // checks if keyPressed is in teamToGuess
  let charExists = teamToGuess.indexOf(keyPressed) >= 0;
  // pushes key pressed into an array of pressed keys
  guessedLetters.push(keyPressed.toUpperCase());
  // Check if user guess is in team to guess string
  if (charExists) {
    // updates hidden array with char user correctly guessed
    for (let i = 0; i < teamToGuess.length; i++) {
      if (keyPressed.toUpperCase() === teamToGuess[i].toUpperCase()) {
        hideTeam[i] = keyPressed.toUpperCase();
      }
    }
  } else {
    guesses--;
  }
  // Checks if user has guessed the word correctly.
  if (hideTeam.join("").toUpperCase() === teamToGuess.toUpperCase()) {
  }
  // Re display hidden team to guess and guesses left
  document.getElementById("display").innerHTML = hideTeam.join("");
  document.getElementById("guessedLetters").innerHTML = guessedLetters.join("");
  document.getElementById("lives").innerHTML = guesses;
});
