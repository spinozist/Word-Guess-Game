
var wordList = [
    "racist",
    "misogynist",
    "idiot",
    "dumbass",
    "weak",
    "mean",
    "childish",
];

//Select word at random//

var selectWord = wordList[Math.floor(Math.random() * wordList.length)];

//Game interface and logic//
var wordView = [];
var dialogue = "dialogue test";
var miss = "miss test";
var guessList = "guessList test";

document.onkeyup = function () {
    writePage();
};

// Writes to page //

function writePage() {
    document.getElementById('wordView').innerHTML = wordView;
    document.getElementById('dialogueView').innerText = dialogue;
    document.getElementById('missView').innerText = miss;
    document.getElementById('guessListView').innerText = guessList;
};