
// Rock, Paper, Scissors Game

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
};

// Draw Game
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";

    } else {
        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;

        msg.style.backgroundColor = "red";
    }
};

// Play Game
const playGame = (userChoice) => {

    // Generate Computer Choice
    const compChoice = genCompChoice();

    // Check Draw
    if (userChoice === compChoice) {

        drawGame();

    } else {

        let userWin = true;

        // Rock
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }

        // Paper
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }

        // Scissors
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Click Event
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});
