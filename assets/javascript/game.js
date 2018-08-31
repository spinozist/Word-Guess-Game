
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
    "(n): a particular theory about the nature of being or the kinds of things that have existence",
    "(n): the property of a living system (such as a bacterial cell or a multicellular organism) that allows it to maintain and renew itself by regulating its composition and conserving its boundaries",
    "(n): a collection of persons or things : GATHERING",
    "(n): difference and deferral of meaning",
    "(adj): existing in essence or effect though not actual fact",
    "(n): the process of coming to be something or of passing into a state",
    "(n): the study or a theory of the nature and grounds of knowledge especially with reference to its limits and validity",
];

var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

var selectWord = wordList[Math.floor(Math.random() * wordList.length)];
var correctLetters = Array.from(selectWord);
var dialogue = [];
var miss = 0;
var guessList = [];
var correctList = [];
var defDisplay = [];
var resetButton = [];
var wordView = [];
var missImage = [];
var correctTally = [];

var getSum = function (total, num) {
    return total + num;
};

var drawReset = function () {
    resetButton = "<input id='resetButton' type='button' value='Play Again' onClick='window.location.reload()'>";
};

for (var i = 0; i < correctLetters.length; i++) {
    wordView.splice(i, 1, "<span>_</span>");
    correctTally.splice(i, 1, 0);
};

dialogue = "Guess a letter.";


writePage();

window.onload = function (){
    $("#foo").focus();

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
                    dialogue = "Great Job! Keep guessing.";
                    correctTally.splice(i, 1, 1);
                    if (correctTally.reduce(getSum) === correctLetters.length) {
                        dialogue = "You win!";
                        defDisplay = "<div id='def'>" + wordDef[wordList.indexOf(selectWord)] + "</div>";
                        drawReset();
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
            };
        }

        else {
            dialogue = "Nope! Try again.";
            guessList.push(userInput);
            miss++;
            missImage = "<img src='assets/images/miss-" + miss + ".png'>"

            if (miss === 8) {
                dialogue = "Game over.  Here's a hint:";
                defDisplay = "<div id='def'>" + wordDef[wordList.indexOf(selectWord)] + "</div>";
                document.onkeydown = function (event) {
                    event.preventDefault();
                };
                drawReset();
            }
            writePage();
        };
    }

    else {
        dialogue = "Guess a LETTER."
        writePage();
    }
};

// Wites to page //

function writePage() {
    $("#wordView").html(wordView.join(" "));
    $("#dialogueView").text(dialogue);
    $("#missView").text("Misses: " + miss + " of 8");
    $("#guessListView").html(guessList.join(" "));
    $("#defView").html(defDisplay);
    $("#image-box").html(missImage);
    $("#reset-box").html(resetButton);
};
