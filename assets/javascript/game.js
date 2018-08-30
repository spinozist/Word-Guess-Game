
var wordList = [
    "ipseity",
    "ontology",
    "autopoiesis",
    "assemblage",
    "differance",
    "virtual",
    "becoming",
    "epistemology",
];

var wordDef = [
    "(n): individual identity : SELFHOOD",
    "(n): : a particular theory about the nature of being or the kinds of things that have existence",
    "(n): the property of a living system (such as a bacterial cell or a multicellular organism) that allows it to maintain and renew itself by regulating its composition and conserving its boundaries",
    "(n): a collection of persons or things : GATHERING",
    "(n): difference and deferral of meaning",
    "(adj): of, relating to, or being a hypothetical particle whose existence is inferred from indirect evidence",
    "(n): the process of coming to be something or of passing into a state",
    "(n): the study or a theory of the nature and grounds of knowledge especially with reference to its limits and validity",
];

var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

var dialogue = [];
var miss = 0;
var guessList = [];
var correctList = [];
var defDisplay = [];
var resetButton = [];
var wordCheck = [];

//Select word at random//

var selectWord = wordList[Math.floor(Math.random() * wordList.length)];

//Game interface and logic//


var correctLetters = Array.from(selectWord);

var wordView = [];
var correctTally = [];


for (var i = 0; i < correctLetters.length; i++) {
    wordView.splice(i, 1, "<span>_</span>");
    correctTally.splice(i, 1, 0);
}

dialogue = "Guess a letter."

writePage();

var getSum = function (total, num) {
    return total + num;
}


document.onkeydown = function (event) {

    var userInput = event.key;

    if (alphabet.includes(userInput)) {

        if (guessList.includes(userInput) ||
            correctList.includes(userInput)) {
            dialogue = "You already guessed that letter. Guess another.";
            writePage();
        }


        else if (correctLetters.includes(userInput)) {

            correctList.push(userInput);

            for (var i = 0; i < correctLetters.length; i++) {
                if (correctList.includes(correctLetters[i])) {
                    wordView.splice(i, 1, "<span>" + correctLetters[i] + "</span>");
                    dialogue = "Great Job!";
                    correctTally.splice(i, 1, 1);
                    if (correctTally.reduce(getSum) === correctLetters.length) {
                        dialogue = "You win!";
                        defDisplay = "<div id='def'>" + wordDef[wordList.indexOf(selectWord)] + "</div>";
                        resetButton = "<input id='resetButton' type='button' value='Play Again' onClick='window.location.reload()'>";
                        document.onkeydown = function (event) {
                            event.preventDefault();
                        }
                    }
                    writePage();
                }
                else {
                    wordView.splice(i, 1, "<span>_</span>");
                    writePage();
                }
            }
        }

        else {
            dialogue = "Nope! Try again.";
            guessList.push(userInput);
            miss++;
            if (miss === 10) {
                dialogue = "Game over.  Here's a hint:";
                defDisplay = "<div id='def'>" + wordDef[wordList.indexOf(selectWord)] + "</div>";
                resetButton = "<input id='resetButton' type='button' value='Play Again' onClick='window.location.reload()'>";
                document.onkeydown = function (event) {
                    event.preventDefault();
                }
            }
            writePage();
        }
    }

    else {
        dialogue = "Guess a LETTER."
        writePage();
    }
}




// Wites to page //

function writePage() {
    document.getElementById('wordView').innerHTML = wordView.join(" ");
    document.getElementById('dialogueView').innerText = dialogue;
    document.getElementById('missView').innerText = "Misses: " + miss + " of 10";
    document.getElementById('guessListView').innerHTML = guessList;
    document.getElementById('defView').innerHTML = defDisplay;
    document.getElementById('reset-box').innerHTML = resetButton;
    //Endgame Write Function//
};
