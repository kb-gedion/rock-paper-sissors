

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Sissors";
            break;
        default:
            return "Error";
    };
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return "tie";
    }

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "PAPER"){
                return "computer";
            } else {
                return "player";
            }
            break;
        case "PAPER":
            if (computerSelection === "SISSORS") {
                return "computer";
            } else {
                return "player";
            }
            break;
        case "SISSORS":
            if (computerSelection == "ROCK") {
                return "computer";
            } else {
                return "player";
            }
    }
}

function playGame() {
    let playerScore = 0;
    let cmpScore = 0;
    let playerSelection;
    let computerSelection;
    let winner;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Sissors?");
        computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);

        if (winner === "tie") {
        } else if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            cmpScore++;
        }
        console.log("YOUR SCORE: " + playerScore);
        console.log("COMPUTER: " + cmpScore);
    }
    

    if (playerScore > cmpScore) {
        console.log("You Win!");
    } else if (playerScore < cmpScore) {
        console.log("You Lose!");
    } else {
        console.log("It was a tie man! One more round?");
    }
    
}

playGame();