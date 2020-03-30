let userScore = 0;
let computerScore = 0;
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const scoreBoardElement = document.querySelector(".score-board");
const resultElement = document.querySelector(".result > p");
const rockElement = document.getElementById("r");
const paperElement = document.getElementById("p");
const scissorsElement = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreElement.innerHTML = userScore;
    computerScoreElement.innerHTML = computerScore;
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    resultElement.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You won!`;
    
    const userChoiseElement = document.getElementById(userChoice);
    userChoiseElement.classList.add('user-win');
    setTimeout(() => userChoiseElement.classList.remove('user-win'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreElement.innerHTML = userScore;
    computerScoreElement.innerHTML = computerScore;
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    resultElement.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lost!`;
    
    const userChoiseElement = document.getElementById(userChoice);
    userChoiseElement.classList.add('user-lose');
    setTimeout(() => userChoiseElement.classList.remove('user-lose'), 500);
}

function draw(userChoice, computerChoice) {
    userScoreElement.innerHTML = userScore;
    computerScoreElement.innerHTML = computerScore;
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    resultElement.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}. It's a draw, play again!`;
    
    const userChoiseElement = document.getElementById(userChoice);
    userChoiseElement.classList.add('user-draw');
    setTimeout(() => userChoiseElement.classList.remove('user-draw'), 500);
}

function play(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockElement.addEventListener('click', () => play("r"));
    paperElement.addEventListener('click', () => play("p"));
    scissorsElement.addEventListener('click', () => play("s"));
}

main();
