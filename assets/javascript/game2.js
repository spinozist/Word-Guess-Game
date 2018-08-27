
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

//Select word at random//

var selectWord = wordList[Math.floor(Math.random() * wordList.length)];

//Game interface and logic//

var correctLetters = Array.from(selectWord);

wordView = selectWord;
document.getElementById('wordView').innerHTML = wordView;


document.onkeydown = function (event) {

    var userInput = event.key;

    if (correctLetters.includes(userInput)) {
        dialogue = "Great Job!";
    } else {
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
    document.getElementById('wordView').innerHTML = wordView;
    document.getElementById('dialogueView').innerText = dialogue;
    document.getElementById('missView').innerText = miss;
    document.getElementById('guessListView').innerHTML = guessList;
};