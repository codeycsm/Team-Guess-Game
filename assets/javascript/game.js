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
let guesses = 10;
let randomNum = Math.floor(Math.random() * 32);
let teamToGuess = teams[randomNum];
let hiddenArray = [];

console.log("Team to guess " + teamToGuess);

for (let i = 0; i < teamToGuess.length; i++) {
  hiddenArray.push("_");
}
document.getElementById("display").innerHTML = hiddenArray;

document.addEventListener("keypress", function(pressed) {
  let keyPressed = pressed.key;
  for (let i = 0; i < teamToGuess.length; i++) {
    if (keyPressed.toLowerCase() === teamToGuess[i].toLowerCase()) {
      hiddenArray[i] = keyPressed.toUpperCase();
    }
  }
  guesses--;
  console.log(guesses);
  document.getElementById("display").innerHTML = hiddenArray;
});
