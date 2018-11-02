let teams = [
  "Cardinals",
  "Falcons",
  "Ravens",
  "Bills",
  "Panthers",
  "Bears",
  "Bengals",
  "Browns",
  "Cowboys",
  "Broncos",
  "Lions",
  "Packers",
  "Texans",
  "Colts",
  "Jaguars",
  "Cheifs",
  "Dolphins",
  "Vikings",
  "Patriots",
  "Saints",
  "Giants",
  "Jets",
  "Raiders",
  "Steelers",
  "Eagles",
  "Chargers",
  "49ers",
  "Seahawks",
  "Rams",
  "Buccaneers",
  "Titans",
  "Redskins"
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
  //key user pressed
  let keyPressed = pressed.key;
  // pushes key pressed into an array of pressed keys
  guessedLetters.push(keyPressed.toUpperCase());
  // Checks if user guess is in the word to guess.
  for (let i = 0; i < teamToGuess.length; i++) {
    if (keyPressed.toUpperCase() === teamToGuess[i].toUpperCase()) {
      hideTeam[i] = keyPressed.toUpperCase();
    }
  }
  // Checks if user has guessed the word correctly.
  if (hideTeam.join("").toUpperCase() === teamToGuess.toUpperCase()) {
    console.log("You Win");
  }
  // Re display hidden team to guess and guesses left
  document.getElementById("display").innerHTML = hideTeam.join("");
  document.getElementById("guessedLetters").innerHTML = guessedLetters.join("");
});
