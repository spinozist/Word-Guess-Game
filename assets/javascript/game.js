// random word generator


var wordList = [
    "dog",
    "racoon",
    "monkey",
    "squirrel",
    "pig",
    "horse",
    "donkey"
];
var selectWord = wordList[Math.floor(Math.random() * wordList.length)];
var wordText = document.getElementById('random-word');
var wordLetters = Array.from(selectWord);
var parsedWord = document.getElementById('parsed-word');
var letterGuess = document.getElementById('letters');
var displayResult = document.getElementById('dialogue')
wordText.textContent = selectWord;

// display parsed word

for (var i = 0; i < wordLetters.length; i++) {
    document.write(wordLetters[i] + " / ");
};

// user guess conditionals

document.onkeyup = function (event) {

    var userGuess = event.key;
    letterGuess.textContent = userGuess;

    for (var i = 0; i < wordLetters.length; i++) {
        if (userGuess === wordLetters[i]) {
            displayResult.textContent = "That's in the word";
        }
        else {
            displayResult.textContent = "That's NOT in the word";
        }

    };
};