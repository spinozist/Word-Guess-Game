
var wordList = [
    "racist",
    "misogynist",
    "idiot",
    "dumbass",
    "weak",
    "mean",
    "childish",
];

var dialogue = [];
var miss = 0;
var guessList = [];
var correctList = [];

//Select word at random//

var selectWord = wordList[Math.floor(Math.random() * wordList.length)];

//Game interface and logic//


var correctLetters = Array.from(selectWord);

var wordView = [];

for (var i = 0; i < correctLetters.length; i++) {
    wordView.splice(i, 1, "<span>_</span>");
}

dialogue = "Guess a letter."

writePage();



document.onkeydown = function (event) {

    var userInput = event.key;

    if (correctLetters.includes(userInput)) {

        correctList.push(userInput);

        for (var i = 0; i < correctLetters.length; i++) {
            if (correctList.includes(correctLetters[i])) {
                wordView.splice(i, 1, "<span>" + correctLetters[i] + "</span>");
                dialogue = "Great Job!";
                writePage();
            } else {
                wordView.splice(i, 1, "<span>_</span>");
            }

        }
    }

    else {
        if (guessList.includes(userInput)) {
            dialogue = "You already guessed that letter. Guess another.";
        } else {
            dialogue = "Nope! Try again.";
            guessList.push(userInput);
            miss++;
        }

    }

    writePage();
};

// Writes to page //

function writePage() {
    document.getElementById('wordView').innerHTML = wordView.join("");
    document.getElementById('dialogueView').innerText = dialogue;
    document.getElementById('missView').innerText = miss;
    document.getElementById('guessListView').innerHTML = guessList;
};
