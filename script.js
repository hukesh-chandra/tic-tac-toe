let resetButton = document.querySelectorAll(".reset-game-button");
let newGameButton = document.querySelectorAll(".new-game-button");
let gameplay = document.querySelectorAll(".gamplay");
let result = document.querySelectorAll(".result");
let resultMessage = document.querySelectorAll(".result-message");
let box = document.querySelectorAll(".box");
let winningPosition = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 6],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
];
let currentPlayer = "X";
let count = 0;

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (currentPlayer === "X") {
            box.innerText = "X";
            currentPlayer = "O";
        } else {
            box.innerText = "O";
            currentPlayer = "X";
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    result.classList.remove("hide");
    disableBoxes();
    gameplay.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of box) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of box) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    resultMessage.innerText = "Congratulations, Winner is ${winner}";
    result.classList.remove("hide");
    gameplay.classList.add("hide");
};

const checkWinner = () => {
    for (let Position of winningPosition) {
        let pos1Val = box[Position[0]].innerText;
        let pos2Val = box[Position[1]].innerText;
        let pos3Val = box[Position[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

const resetGame =()=>{
    currentPlayer = "X";
    count = 0;
    enableBoxes();
    result.classList.add("hide");
    gameplay.classList.remove("hide");
}


newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);