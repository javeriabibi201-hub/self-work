// Tic Tac Toe Game in JS.; project
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")



let turnO = true;// playerX,playerO


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],

    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],

    [3, 4, 5],
    [6, 7, 8],
];


// Rest game
 
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// box click

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO === false) {
            //X
            box.innerText = "X";
            box. classList.add("x")
            turnO = true;
        } else {
            //O
            box.innerText = "O";
            box.classList.add("o")
            turnO = false;
        }

        box.disabled = true;

        checkWinner();
    });
});

// Disable all boxes;
const disableBoxes = () => {
    for ( let box of boxes) {
         box. disabled = true;
    }
};
 // Enable all boxes
const enableBoxes = () => {
    for ( let box of boxes) {
         box. disabled = false;
         box.innerText = "";


        // Remove old colors
        box.classList.remove("x");
        box.classList.remove("o");
    }
};


// show winner;
const showWinner = (winner) => {
    msg.innerText = `Congratulations🎉, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Check winner;
const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

        
            showWinner(pos1);
            return;
        }
    }
};

// new Game Button;
newGamebtn.addEventListener("click", resetGame);

// Reset Game Button;
resetBtn.addEventListener("click", resetGame);